#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"
exec bundle exec jekyll serve --livereload "$@"
