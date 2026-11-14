#!/usr/bin/env python3
"""Refresh two public counts at build time; keep valid values when a source fails."""
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
CONFIG_PATH = ROOT / "_config.yml"
OUTPUT_PATH = ROOT / "_data/profile_stats.json"
USER_AGENT = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/125.0 Safari/537.36"
FIELDS = {"google_scholar": "citations", "zhihu": "followers"}


def parse_int(value: Any) -> int | None:
    if type(value) is int:
        return value if value >= 0 else None
    if isinstance(value, str) and re.fullmatch(r"[0-9]+(?:,[0-9]{3})*", value):
        return int(value.replace(",", ""))
    return None


def validate(stats):
    for source, field in FIELDS.items():
        value = stats.get(source, {}).get(field)
        if type(value) is not int or value < 0:
            raise ValueError(f"Invalid count: {source}.{field}")
    return stats


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


def scholar_id_from_url(url: str) -> str:
    match = re.search(r"[?&]user=([^&#]+)", url)
    return match.group(1) if match else ""


def update_google_scholar(stats: dict[str, Any]) -> None:
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


def update_zhihu(stats: dict[str, Any]) -> None:
    zhihu_user = os.environ.get("ZHIHU_USER") or author_value("zhihu")
    if not zhihu_user:
        raise RuntimeError("Zhihu username is not configured")

    source_url = (
        f"https://www.zhihu.com/api/v4/members/{quote(zhihu_user)}"
        "?include=follower_count"
    )
    headers = {
        "Accept": "application/json, text/plain, */*",
        "Referer": f"https://www.zhihu.com/people/{zhihu_user}",
    }

    try:
        data, _ = fetch_json(source_url, headers)
    except RuntimeError:
        text, _ = fetch_text("https://r.jina.ai/" + source_url, headers)
        start = text.find("{")
        end = text.rfind("}")
        if start == -1 or end <= start:
            raise RuntimeError("Zhihu fallback response did not contain JSON")
        data = json.loads(text[start : end + 1])

    mapping = {
        "followers": "follower_count",
    }
    for target_key, source_key in mapping.items():
        value = parse_int(data.get(source_key))
        if value is None:
            raise RuntimeError(f"Zhihu {source_key} missing from response")
        stats["zhihu"][target_key] = value


def refresh(output=OUTPUT_PATH):
    stats = validate(json.loads(output.read_text(encoding="utf-8")))
    now = datetime.now(timezone.utc).replace(microsecond=0).isoformat()
    for source, updater in (("google_scholar", update_google_scholar), ("zhihu", update_zhihu)):
        candidate = {key: dict(value) for key, value in stats.items()}
        try:
            updater(candidate)
            validate(candidate)
        except (RuntimeError, ValueError, OSError) as exc:
            print(f"Keeping cached {source}: {exc}", file=sys.stderr)
        else:
            candidate[source]["updated_at"] = now
            stats = candidate
            print(f"Updated {source}")
    temporary = output.with_suffix(".tmp")
    temporary.write_text(json.dumps(stats, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    temporary.replace(output)
    return stats


if __name__ == "__main__":
    refresh()
