# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Academic personal homepage for Changxin Ke, built on the [AcadHomepage](https://github.com/RayeRen/acad-homepage.github.io) Jekyll template. Deployed via GitHub Pages at kcxain.github.io.

## Development

```bash
# Install dependencies (requires Ruby, RubyGems, GCC, Make)
bundle install

# Start local dev server with livereload at http://127.0.0.1:4000
bash run_server.sh   # runs: bundle exec jekyll liveserve
```

## Architecture

- **`_config.yml`** — Site-wide settings: author info, social links, Google Analytics, SEO keys, Jekyll plugins. Changes here require server restart.
- **`_pages/about.md`** — The single content page (serves as `/`). Contains all sections: bio, news, publications, patents, education, experience, competitions, honors, services, visitors. Mixes inline CSS/JS with Liquid templates and HTML.
- **`_data/publications.json`** — Publication entries rendered via Liquid loop in about.md. Each entry has: `conf`, `year`, `conf_full`, `title`, `authors`, `links[]` (with `type`: paper/code/blog).
- **`_data/news.json`** — News items. Supports either `content_html` (raw HTML) or structured fields (`date`, `title`, `link_url`, `text_after_link`, `venue`).
- **`_layouts/default.html`** — Base layout wrapping all pages.
- **`_includes/`** — Partials: author-profile sidebar, head/SEO tags, analytics, scripts.
- **`_sass/`** — SCSS partials compiled by Jekyll. Custom styles for the about page are inline in `about.md`, not in SCSS files.
- **`scripts/update_contribution_stats.py`** — Updates `contribution_stats.json` for Google Scholar, Zhihu, and GitHub stats. Scheduled by `.github/workflows/contribution_stats.yaml`, which force-pushes the result to the `contribution-stats` branch.

## Common Tasks

**Adding a publication:** Add a JSON object to `_data/publications.json` (most recent first). The template auto-renders it with venue tooltip, author highlighting (boldens "Changxin Ke"), and link icons.

**Adding a news item:** Add a JSON object to `_data/news.json` (most recent first). Use `content_html` for full control or structured fields for simpler entries.

**Updating profile info:** Edit `_config.yml` under `author:` for name, avatar, bio, social links, email.
