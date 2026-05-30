#!/usr/bin/env python3
"""Update static contribution statistics for the homepage."""

from __future__ import annotations

import json
import os
import re
import sys
from datetime import datetime, timezone
from pathlib import Path
from typing import Any
from urllib.error import HTTPError, URLError
from urllib.parse import quote
from urllib.request import Request, urlopen


ROOT = Path(__file__).resolve().parents[1]
OUTPUT_PATH = Path(
    os.environ.get(
        "CONTRIBUTION_STATS_OUTPUT",
        ROOT / "contribution_stats_results" / "contribution_stats.json",
    )
)
if not OUTPUT_PATH.is_absolute():
    OUTPUT_PATH = ROOT / OUTPUT_PATH
CONFIG_PATH = ROOT / "_config.yml"

USER_AGENT = (
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) "
    "AppleWebKit/537.36 (KHTML, like Gecko) "
    "Chrome/125.0 Safari/537.36"
)


def clean_config_value(value: str) -> str:
    value = value.split("#", 1)[0].strip()
    if value in {"", "null", "~"}:
        return ""
    if (value.startswith('"') and value.endswith('"')) or (
        value.startswith("'") and value.endswith("'")
    ):
        return value[1:-1]
    return value


def author_value(key: str) -> str:
    if not CONFIG_PATH.exists():
        return ""
    in_author = False
    pattern = re.compile(rf"^\s{{2}}{re.escape(key)}\s*:\s*(.*)$")
    for line in CONFIG_PATH.read_text(encoding="utf-8").splitlines():
        if line.startswith("author:"):
            in_author = True
            continue
        if in_author and line and not line.startswith(" "):
            break
        if not in_author:
            continue
        match = pattern.match(line)
        if match:
            return clean_config_value(match.group(1))
    return ""


def fetch_text(url: str, headers: dict[str, str] | None = None) -> tuple[str, dict[str, str]]:
    request_headers = {"User-Agent": USER_AGENT, "Accept": "*/*"}
    if headers:
        request_headers.update(headers)
    request = Request(url, headers=request_headers)
    try:
        with urlopen(request, timeout=25) as response:
            body = response.read().decode("utf-8")
            return body, dict(response.headers.items())
    except (HTTPError, URLError, TimeoutError) as exc:
        raise RuntimeError(f"failed to fetch {url}: {exc}") from exc


def fetch_json(url: str, headers: dict[str, str] | None = None) -> tuple[Any, dict[str, str]]:
    text, response_headers = fetch_text(url, headers)
    return json.loads(text), response_headers


def parse_int(value: Any) -> int | None:
    if isinstance(value, (int, float)):
        return int(value)
    match = re.search(r"[\d,]+", str(value or ""))
    if not match:
        return None
    return int(match.group(0).replace(",", ""))


def read_existing() -> dict[str, Any]:
    if not OUTPUT_PATH.exists():
        return {}
    try:
        return json.loads(OUTPUT_PATH.read_text(encoding="utf-8"))
    except json.JSONDecodeError:
        return {}


def previous(existing: dict[str, Any], group: str, key: str) -> int | None:
    return parse_int((existing.get(group) or {}).get(key))


def scholar_id_from_url(url: str) -> str:
    match = re.search(r"[?&]user=([^&#]+)", url)
    return match.group(1) if match else ""


def update_google_scholar(stats: dict[str, Any], errors: dict[str, str]) -> None:
    scholar_id = os.environ.get("GOOGLE_SCHOLAR_ID", "").strip()
    if not scholar_id:
        scholar_id = scholar_id_from_url(author_value("googlescholar"))
    if not scholar_id:
        raise RuntimeError("Google Scholar ID is not configured")

    url = f"https://scholar.google.com/citations?user={quote(scholar_id)}&hl=en"
    text, _ = fetch_text(
        url,
        {
            "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
            "Referer": "https://scholar.google.com/",
        },
    )
    values = re.findall(
        r'<td[^>]*class=["\']gsc_rsb_std["\'][^>]*>\s*([\d,]+)\s*</td>',
        text,
    )
    citations = parse_int(values[0]) if values else None
    if citations is None:
        raise RuntimeError("Google Scholar citations missing from profile page")
    stats["google_scholar"]["citations"] = citations


def update_zhihu(stats: dict[str, Any], errors: dict[str, str]) -> None:
    zhihu_user = os.environ.get("ZHIHU_USER") or author_value("zhihu")
    if not zhihu_user:
        raise RuntimeError("Zhihu username is not configured")

    source_url = (
        f"https://www.zhihu.com/api/v4/members/{quote(zhihu_user)}"
        "?include=follower_count,voteup_count,favorited_count"
    )
    headers = {
        "Accept": "application/json, text/plain, */*",
        "Referer": f"https://www.zhihu.com/people/{zhihu_user}",
    }

    try:
        data, _ = fetch_json(source_url, headers)
    except RuntimeError:
        text, _ = fetch_text("https://r.jina.ai/http://" + source_url, headers)
        start = text.find("{")
        end = text.rfind("}")
        if start == -1 or end <= start:
            raise RuntimeError("Zhihu fallback response did not contain JSON")
        data = json.loads(text[start : end + 1])

    mapping = {
        "followers": "follower_count",
        "upvotes": "voteup_count",
        "favorites": "favorited_count",
    }
    for target_key, source_key in mapping.items():
        value = parse_int(data.get(source_key))
        if value is None:
            raise RuntimeError(f"Zhihu {source_key} missing from response")
        stats["zhihu"][target_key] = value


def github_headers() -> dict[str, str]:
    headers = {
        "Accept": "application/vnd.github+json",
        "X-GitHub-Api-Version": "2022-11-28",
    }
    token = os.environ.get("GITHUB_TOKEN", "").strip()
    if token:
        headers["Authorization"] = f"Bearer {token}"
    return headers


def update_github(stats: dict[str, Any], errors: dict[str, str]) -> None:
    github_user = os.environ.get("GITHUB_USER") or author_value("github")
    if not github_user:
        raise RuntimeError("GitHub username is not configured")

    headers = github_headers()
    user_data, _ = fetch_json(f"https://api.github.com/users/{quote(github_user)}", headers)
    followers = parse_int(user_data.get("followers"))
    if followers is None:
        raise RuntimeError("GitHub followers missing from response")
    stats["github"]["followers"] = followers

    stars = 0
    page = 1
    while page <= 10:
        repos, _ = fetch_json(
            f"https://api.github.com/users/{quote(github_user)}/repos"
            f"?per_page=100&type=owner&page={page}",
            headers,
        )
        if not isinstance(repos, list):
            raise RuntimeError("GitHub repos response is not a list")
        stars += sum(parse_int(repo.get("stargazers_count")) or 0 for repo in repos)
        if len(repos) < 100:
            break
        page += 1
    stats["github"]["stars"] = stars


def display_path(path: Path) -> str:
    try:
        return str(path.relative_to(ROOT))
    except ValueError:
        return str(path)


def has_required_values(stats: dict[str, Any], group: str) -> bool:
    required = {
        "google_scholar": ("citations",),
        "zhihu": ("followers", "upvotes", "favorites"),
        "github": ("followers", "stars"),
    }
    values = stats.get(group) or {}
    return all(parse_int(values.get(key)) is not None for key in required[group])


def main() -> int:
    existing = read_existing()
    now = datetime.now(timezone.utc).replace(microsecond=0).isoformat()
    stats: dict[str, Any] = {
        "updated_at": now,
        "google_scholar": {
            "citations": previous(existing, "google_scholar", "citations"),
        },
        "zhihu": {
            "followers": previous(existing, "zhihu", "followers"),
            "upvotes": previous(existing, "zhihu", "upvotes"),
            "favorites": previous(existing, "zhihu", "favorites"),
        },
        "github": {
            "followers": previous(existing, "github", "followers"),
            "stars": previous(existing, "github", "stars"),
        },
        "errors": {},
    }

    updates = {
        "google_scholar": update_google_scholar,
        "zhihu": update_zhihu,
        "github": update_github,
    }

    for name, updater in updates.items():
        try:
            updater(stats, stats["errors"])
            print(f"updated {name}")
        except Exception as exc:  # noqa: BLE001 - keep old public stats on API failures.
            stats["errors"][name] = str(exc)
            print(f"warning: {name}: {exc}", file=sys.stderr)

    if len(stats["errors"]) == len(updates) and not existing:
        print("error: no contribution stats could be fetched", file=sys.stderr)
        return 1

    missing = [name for name in stats["errors"] if not has_required_values(stats, name)]
    if missing:
        print(
            "error: missing previous values for failed source(s): " + ", ".join(missing),
            file=sys.stderr,
        )
        return 1

    OUTPUT_PATH.parent.mkdir(parents=True, exist_ok=True)
    OUTPUT_PATH.write_text(
        json.dumps(stats, ensure_ascii=False, indent=2, sort_keys=True) + "\n",
        encoding="utf-8",
    )
    print(f"wrote {display_path(OUTPUT_PATH)}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
