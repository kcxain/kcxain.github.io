# Repository guide

Read `README.md` for build commands and the current file map.

- This is a single-page Jekyll site with one layout and one stylesheet entry.
- Preserve the agreed white background, compact serif layout, resource icons,
  inline small career logos and venue hover/focus full names.
- Use `_includes/publication.html` and `_includes/career-list.html` for repeated
  markup; keep their content in `_data/`.
- Reuse `_includes/icon.html` and the inline SVG sprite for icons.
- Update shared CSS variables instead of introducing duplicate overrides.
- Regenerate CJK subsets after Chinese content changes. Keep source fonts and
  original logos excluded from deployment.
- Run the production build and `python3 scripts/check_site.py _site` after changes.
- Restart the preview server after configuration changes. Analytics is production-only.
