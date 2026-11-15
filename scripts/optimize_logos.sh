#!/usr/bin/env bash
# Requires cwebp (Homebrew: brew install webp). Keep official ICT dimensions; use 4x display resolution for other logos.
set -euo pipefail
cd "$(dirname "$0")/.."
cwebp -quiet -lossless -m 6 _image_sources/ict_logo.png -o images/logos/ict.webp
cwebp -quiet -resize 120 109 -lossless -m 6 _image_sources/hit_logo.png -o images/logos/hit.webp
cwebp -quiet -resize 232 80 -lossless -m 6 _image_sources/cambricon_logo.png -o images/logos/cambricon.webp
