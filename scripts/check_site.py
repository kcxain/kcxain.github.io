#!/usr/bin/env python3
"""Check generated links, content, icon references and static asset budgets."""
import gzip
import json
import re
import sys
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import unquote, urlsplit

ROOT = Path(__file__).resolve().parents[1]


class Page(HTMLParser):
    def __init__(self):
        super().__init__()
        self.ids = []
        self.references = []
        self.resources = []
        self.links = []
        self.images = []
        self.articles = 0
        self.headings = 0
        self.tooltips = 0
        self.stylesheets = 0

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if "id" in attrs:
            self.ids.append(attrs["id"])
        for name in ("aria-labelledby", "aria-describedby"):
            self.references.extend(attrs.get(name, "").split())
        if tag == "a":
            self.links.append(attrs.get("href", ""))
        if tag == "use":
            self.references.append(attrs["href"].removeprefix("#"))
        if tag in ("img", "script") and attrs.get("src"):
            self.resources.append(attrs["src"])
        if tag == "link" and attrs.get("rel") in ("stylesheet", "icon", "apple-touch-icon"):
            self.resources.append(attrs["href"])
            self.stylesheets += attrs["rel"] == "stylesheet"
        if tag == "img":
            self.images.append(attrs)
        self.articles += tag == "article"
        self.headings += tag == "h1"
        self.tooltips += attrs.get("role") == "tooltip"


def check(destination):
    html = (destination / "index.html").read_text()
    css = (destination / "assets/css/home.css").read_text()
    page = Page()
    page.feed(html)
    publications = json.loads((ROOT / "_data/publications.json").read_text())
    assert page.articles == len(publications), "Missing publication"
    assert page.headings == 1, "Expected one main heading"
    assert len(page.ids) == len(set(page.ids)), "Duplicate IDs"
    assert set(page.references) <= set(page.ids), "Broken icon or accessible-description reference"
    assert page.stylesheets == 1, "Expected a single stylesheet"
    stats = json.loads((ROOT / "_data/profile_stats.json").read_text())
    for source, field, label in (("google_scholar", "citations", "citations"), ("zhihu", "followers", "followers")):
        count = stats[source][field]
        assert type(count) is int and count >= 0, "Invalid cached profile count"
        assert f'aria-label="{count} {label}"' in html, "Missing inline profile count"
        assert f'{count:,}</span>' in html, "Incorrect count formatting"
    for link in page.links:
        if link.startswith("#"):
            assert link[1:] in page.ids, f"Broken anchor: {link}"
    for publication in publications:
        assert publication["title"] in html, "Missing publication title"
        for link in publication["links"]:
            assert link["url"] in page.links, f"Missing resource: {link['url']}"
    assert page.tooltips == sum(bool(p.get("conf") and p.get("conf_full")) for p in publications)
    for image in page.images:
        assert all(k in image for k in ("alt", "width", "height")), "Missing image accessibility or dimensions"
        if "portrait" not in image.get("class", ""):
            assert image.get("loading") == "lazy", "Below-fold images should be lazy"
    page.resources.extend(re.findall(r'url\([\'"]?([^\)\'\"]+)', css))
    for resource in page.resources:
        url = urlsplit(resource)
        if url.scheme or url.netloc:
            continue
        assert (destination / unquote(url.path).lstrip("/")).is_file(), f"Missing asset: {resource}"
    assert "{%" not in html and "{{" not in html, "Unrendered Liquid"
    for obsolete in ("assets/js", "assets/maps", "assets/css/main.css", "CLAUDE.md", "scripts", "_image_sources", "_font_sources"):
        assert not (destination / obsolete).exists(), f"Obsolete/private build asset: {obsolete}"
    assert "--background:var(--background)" not in css, "Circular color token"
    assert ".publication-meta{display:flex;flex-wrap:wrap" in css, "Publication metadata must wrap"
    assert "text-decoration-style:dashed" in css, "Missing venue underline"
    assert ".venue-name:focus .venue-tooltip" in css, "Missing keyboard tooltip"
    sizes = {
        "html": len(html.encode()),
        "css": len(css.encode()),
        "logos": sum(p.stat().st_size for p in (destination / "images/logos").glob("*.webp")),
        "fonts": sum(p.stat().st_size for p in (destination / "assets/fonts").rglob("*.woff2")),
        "site": sum(p.stat().st_size for p in destination.rglob("*") if p.is_file()),
    }
    for key, limit in {"html": 40000, "css": 8000, "logos": 16000, "fonts": 40000, "site": 600000}.items():
        assert sizes[key] <= limit, f"{key} exceeds {limit:,} byte budget: {sizes[key]:,}"
    print(f"Passed: {page.articles} publications, {page.tooltips} tooltips, all links/icons/assets, responsive CSS and resource budgets.")
    print(json.dumps(sizes, indent=2))
    print(f"Gzip estimates: HTML {len(gzip.compress(html.encode())):,} B; CSS {len(gzip.compress(css.encode())):,} B")


if __name__ == "__main__":
    check(Path(sys.argv[1] if len(sys.argv) > 1 else ROOT / "_site"))
