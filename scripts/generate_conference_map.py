#!/usr/bin/env python3
"""Generate a script-free SVG from the original jsVectorMap Miller basemap."""
import json
import math
from html import escape
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / 'images/conferences.svg'


def project(coords, world):
    lat, lon = coords
    inset = world['insets'][0]
    low, high = inset['bbox']
    x = 6381372 * math.radians(lon - world['projection']['centralMeridian'])
    y = -6381372 * math.log(math.tan(math.radians(45 + 0.4 * lat))) / 0.8
    return ((x - low['x']) / (high['x'] - low['x']) * inset['width'],
            (y - low['y']) / (high['y'] - low['y']) * inset['height'])


def generate():
    world = json.loads((ROOT / '_map_sources/world.json').read_text())
    conferences = json.loads((ROOT / '_data/conferences.json').read_text())
    parts = ['<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 441" width="900" height="441" role="img" aria-labelledby="title desc">',
             '<title id="title">Conferences attended</title>',
             '<desc id="desc">Conference locations: ' + escape(', '.join(dict.fromkeys(c['city'] for c in conferences))) + '.</desc>',
             '<g fill="#e4e9e7" stroke="#fff" stroke-width="0.65" stroke-linejoin="round">']
    parts.extend(f'<path d="{region["path"]}"/>' for region in world['paths'].values())
    parts.append('</g>')
    seen = set()
    for c in conferences:
        if c['city'] in seen:
            continue
        seen.add(c['city'])
        x, y = project(c['coords'], world)
        assert 0 <= x <= 900 and 0 <= y <= 441, c['city']
        dx, dy = c.get('labelOffset', [10, -12])
        parts.append(f'<g><title>{escape(c["city"])}</title><circle cx="{x:.2f}" cy="{y:.2f}" r="4.5" fill="#28766d" stroke="#fff" stroke-width="2"/>')
        parts.append(f'<text x="{x+dx:.2f}" y="{y+dy:.2f}" fill="#454545" font-family="Palatino Linotype,Palatino,Georgia,serif" font-size="22" paint-order="stroke" stroke="#fff" stroke-width="3" stroke-linejoin="round">{escape(c["city"])}</text></g>')
    parts.append('</svg>')
    OUTPUT.write_text('\n'.join(parts) + '\n')
    print(f'Generated {OUTPUT.relative_to(ROOT)} ({OUTPUT.stat().st_size:,} bytes)')


if __name__ == '__main__':
    generate()
