#!/usr/bin/env python3
"""Regenerate the CJK webfont subsets used by the homepage.

The script scans source content for CJK characters, merges them with a small
manually maintained safety charset, and writes subsetted WOFF2 files.
"""

from __future__ import annotations

import argparse
import sys
from pathlib import Path

try:
    from fontTools import subset
    from fontTools.ttLib import TTFont
except ImportError as exc:
    raise SystemExit(
        "Missing dependency: fonttools. Install it with:\n"
        "  python3 -m pip install fonttools brotli\n"
    ) from exc


ROOT = Path(__file__).resolve().parents[1]

CJK_RANGES = (
    (0x2E80, 0x2EFF),
    (0x3000, 0x303F),
    (0x3400, 0x4DBF),
    (0x4E00, 0x9FFF),
    (0xF900, 0xFAFF),
    (0xFF00, 0xFFEF),
)

DEFAULT_SCAN_PATHS = (
    "_pages",
    "_data",
    "_config.yml",
    "_includes/author-profile.html",
)

TEXT_SUFFIXES = {
    ".html",
    ".htm",
    ".json",
    ".liquid",
    ".md",
    ".markdown",
    ".txt",
    ".yaml",
    ".yml",
}

FONT_JOBS = (
    (
        "400",
        ROOT / "_font_sources/noto-serif-sc/noto-serif-sc-chinese-simplified-400-normal.full.woff2",
        ROOT / "assets/fonts/noto-serif-sc/noto-serif-sc-chinese-simplified-400-normal.woff2",
    ),
    (
        "700",
        ROOT / "_font_sources/noto-serif-sc/noto-serif-sc-chinese-simplified-700-normal.full.woff2",
        ROOT / "assets/fonts/noto-serif-sc/noto-serif-sc-chinese-simplified-700-normal.woff2",
    ),
)

SAFETY_CHARS = ROOT / "_font_sources/noto-serif-sc/safety_chars.txt"


def is_cjk_char(char: str) -> bool:
    codepoint = ord(char)
    return any(start <= codepoint <= end for start, end in CJK_RANGES)


def iter_text_files(path: Path) -> list[Path]:
    if not path.exists():
        return []
    if path.is_file():
        return [path] if path.suffix.lower() in TEXT_SUFFIXES else []
    return sorted(
        child
        for child in path.rglob("*")
        if child.is_file() and child.suffix.lower() in TEXT_SUFFIXES
    )


def collect_chars(paths: list[Path], safety_file: Path) -> str:
    chars: set[str] = set()

    for path in paths:
        for text_file in iter_text_files(path):
            text = text_file.read_text(encoding="utf-8", errors="ignore")
            chars.update(char for char in text if is_cjk_char(char))

    if safety_file.exists():
        text = safety_file.read_text(encoding="utf-8", errors="ignore")
        chars.update(char for char in text if is_cjk_char(char))

    return "".join(sorted(chars))


def subset_font(source: Path, output: Path, chars_file: Path) -> None:
    if not source.exists():
        raise FileNotFoundError(f"Missing source font: {source}")

    output.parent.mkdir(parents=True, exist_ok=True)
    args = [
        str(source),
        f"--output-file={output}",
        f"--text-file={chars_file}",
        "--flavor=woff2",
        "--layout-features=*",
        "--glyph-names",
        "--symbol-cmap",
        "--legacy-cmap",
        "--notdef-glyph",
        "--notdef-outline",
        "--recommended-glyphs",
        "--name-IDs=*",
        "--name-legacy",
        "--name-languages=*",
    ]
    subset.main(args)


def font_has_all_chars(font_path: Path, chars: str) -> tuple[bool, str]:
    font = TTFont(font_path)
    cmap: dict[int, str] = {}
    for table in font["cmap"].tables:
        cmap.update(table.cmap)
    missing = "".join(char for char in chars if ord(char) not in cmap)
    return not missing, missing


def size_label(path: Path) -> str:
    size = path.stat().st_size
    if size >= 1024 * 1024:
        return f"{size / 1024 / 1024:.1f}MB"
    return f"{size / 1024:.0f}KB"


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(
        description="Subset homepage CJK fonts from source content."
    )
    parser.add_argument(
        "--scan",
        action="append",
        default=[],
        help=(
            "Additional file or directory to scan. Defaults are "
            + ", ".join(DEFAULT_SCAN_PATHS)
            + "."
        ),
    )
    parser.add_argument(
        "--safety-chars",
        default=str(SAFETY_CHARS.relative_to(ROOT)),
        help="Text file with extra CJK characters to always keep.",
    )
    parser.add_argument(
        "--chars-out",
        default="/tmp/kcx-cjk-subset-chars.txt",
        help="Where to write the collected character set.",
    )
    return parser.parse_args()


def main() -> int:
    args = parse_args()
    scan_paths = [ROOT / path for path in DEFAULT_SCAN_PATHS]
    scan_paths.extend(ROOT / path for path in args.scan)
    safety_file = ROOT / args.safety_chars
    chars_file = Path(args.chars_out)

    chars = collect_chars(scan_paths, safety_file)
    if not chars:
        raise SystemExit("No CJK characters found; refusing to generate empty fonts.")

    chars_file.write_text(chars, encoding="utf-8")
    print(f"Collected {len(chars)} CJK chars.")
    print(f"Character set written to {chars_file}.")

    for weight, source, output in FONT_JOBS:
        before = size_label(source)
        subset_font(source, output, chars_file)
        ok, missing = font_has_all_chars(output, chars)
        if not ok:
            raise SystemExit(f"Subset font {output} is missing chars: {missing}")
        print(f"{weight}: {before} -> {size_label(output)}  {output.relative_to(ROOT)}")

    return 0


if __name__ == "__main__":
    sys.exit(main())
