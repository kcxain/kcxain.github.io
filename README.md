# Changxin Ke's homepage

A single-page academic website built with Jekyll and deployed to
[kechang.xin](https://kechang.xin) through GitHub Pages. The design uses a white
background, compact serif typography, inline resource icons and text-based
publication and career lists. Originally based on
[AcadHomepage](https://github.com/RayeRen/acad-homepage.github.io/).

## Local preview

```bash
bundle install
bash run_server.sh
```

Open <http://127.0.0.1:4000/>. Content and styles reload automatically; restart the
server after editing `_config.yml`. Google Analytics runs only in production.

## Where to edit

| Content | Source |
| --- | --- |
| Profile, site metadata and account links | `_config.yml` |
| Biography, research interests, awards and services | `_pages/about.md` |
| Publications and resource links | `_data/publications.json` |
| News | `_data/news.json` |
| Education and experience | `_data/career.json` |
| Layout and shared metadata | `_layouts/home.html`, `_includes/head.html`, `_includes/seo.html` |
| Publication and career templates | `_includes/publication.html`, `_includes/career-list.html` |
| Colors, spacing, typography and responsive layout | `_sass/_home.scss` |
| Chinese font fallback | `_sass/_fonts.scss` |
| Shared inline SVG symbols | `_includes/icons/sprite.svg` |

`assets/css/home.scss` imports the two stylesheet partials. Change the variables
at the top of `_home.scss` for shared colors, typography and spacing:

- Body text: 16px with `--leading-body: 1.55`.
- Authors, venue/year and resource links: `--size-detail: 0.9375rem` (15px),
  `--leading-compact: 1.25`. These share a single rule; children inherit it.
- Titles use the compact line height; heading sizes establish the hierarchy.
- Icons use `1em` dimensions and follow their surrounding text size.
- Section, title, item and inline spacing have shared variables.

News uses one `content_html` field per item and the same `.detail-list` / `.date`
styles as the remaining text lists. Publications use `conf`, `conf_full`, `year`,
`title`, `authors` and `links`; author highlighting reads `author.name_en` from
`_config.yml`.

The publication template places venue, year and resource links in one wrapping
row. Venue full names appear on hover and keyboard focus. SVG symbols are defined
once per page and reused through `_includes/icon.html`.

## Assets

The avatar is a high-priority WebP with explicit dimensions. Career logos are
lazy-loaded lossless WebP images. HIT and Cambricon retain high-density display resolution;
the compact ICT icon retains its supplied source resolution. Full-size logo
sources live in `_image_sources/`, which is excluded from deployment.

Regenerate logos (requires `cwebp`, available through `brew install webp`):

```bash
bash scripts/optimize_logos.sh
```

Chinese fonts prefer installed serif fonts and use `font-display: swap` with a
CJK-only Unicode range. After changing Chinese text, regenerate both weight
subsets from the full source fonts:

```bash
python3 -m pip install -r scripts/requirements-fonts.txt
python3 scripts/subset_cjk_fonts.py
```

The default scans actual page, data, config and include content. The optional
`--include-safety` flag also includes `_font_sources/noto-serif-sc/safety_chars.txt`
for anticipated content at the cost of a larger download. Full fonts and source
images stay out of the deployed site.

## Validation and deployment

```bash
JEKYLL_ENV=production bundle exec jekyll build
python3 scripts/check_site.py _site
```

The checker verifies publication resources, internal anchors, SVG symbols,
accessible tooltip references, image dimensions and loading policy, generated
assets, and size budgets for HTML/CSS/fonts/logos/the deployment artifact.
`.github/workflows/pages.yaml` runs the same locked Ruby dependency build and
checks before uploading the Pages artifact on pushes to `main` or manual runs.
Set repository **Settings → Pages → Source** to **GitHub Actions**.

The homepage interactions use HTML and CSS. Production analytics loads after the
page load event during browser idle time (up to a two-second idle timeout), keeping
it off the initial rendering path; very short visits can leave before it loads.
GitHub Pages controls HTTP caching and compression. The checker reports local
uncompressed sizes and gzip estimates, not measured network timings.

## Attribution

See `LICENSE` for the original theme license and
`_includes/icons/ATTRIBUTION.md` for the retained Font Awesome SVG attribution.
