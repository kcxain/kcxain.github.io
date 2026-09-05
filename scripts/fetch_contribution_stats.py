#!/usr/bin/env python3
"""Fetch the published stats snapshot for a build, preserving a valid fallback."""

from __future__ import annotations

import json
import os
import re
import sys
from pathlib import Path
from urllib.request import urlopen

ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / '_data' / 'contribution_stats.json'
REQUIRED = {
    'google_scholar': ('citations',),
    'github': ('stars',),
    'zhihu': ('followers', 'upvotes'),
}


def validate(data: object) -> dict:
    if not isinstance(data, dict):
        raise ValueError('Stats must be a JSON object')
    for source, fields in REQUIRED.items():
        values = data.get(source)
        if not isinstance(values, dict):
            raise ValueError(f'Missing stats group: {source}')
        for field in fields:
            value = values.get(field)
            if type(value) is not int or value < 0:
                raise ValueError(f'Invalid stat: {source}.{field}')
    return data


def fetch_snapshot(repository: str, output: Path = OUTPUT) -> bool:
    """Return True for a fresh snapshot, False for a validated cached snapshot."""
    if not re.fullmatch(r'[A-Za-z0-9_.-]+/[A-Za-z0-9_.-]+', repository):
        raise ValueError('Invalid repository name')
    url = f'https://raw.githubusercontent.com/{repository}/contribution-stats/contribution_stats.json'
    try:
        with urlopen(url, timeout=15) as response:
            data = validate(json.load(response))
    except (OSError, ValueError) as exc:
        # A failed fetch must preserve the last usable numbers.
        validate(json.loads(output.read_text(encoding='utf-8')))
        print(f'Using cached stats: {exc}', file=sys.stderr)
        return False
    output.parent.mkdir(parents=True, exist_ok=True)
    temporary = output.with_suffix('.json.tmp')
    temporary.write_text(json.dumps(data, ensure_ascii=False, indent=2) + '\n', encoding='utf-8')
    temporary.replace(output)
    print(f'Loaded stats snapshot from {repository}')
    return True


if __name__ == '__main__':
    repository = os.environ.get('GITHUB_REPOSITORY', 'kcxain/kcxain.github.io')
    fetch_snapshot(repository)
