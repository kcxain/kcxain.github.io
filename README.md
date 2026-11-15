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

The avatar is a high-priority WebP with explicit dimensions. All three career
logos are lazy-loaded SVG vectors with reserved dimensions. ICT was converted
from the supplied vector PDF, HIT uses the supplied SVG, and Cambricon was
converted from its official AI artwork. Source provenance and conversion notes
are in `_image_sources/README.md`. That source directory is excluded from deployment.

Chinese fonts prefer installed serif fonts and use `font-display: swap` with a
CJK-only Unicode range. The Chinese profile name consistently uses bundled
Noto Serif SC Bold (700), with a preloaded three-character subset of about 1.8 KB.
After changing Chinese text, regenerate the page and name subsets from the full
source fonts:

```bash
python3 -m pip install -r scripts/requirements-fonts.txt
python3 scripts/subset_cjk_fonts.py
```

The default scans actual page, data, config and include content. The optional
`--include-safety` flag also includes `_font_sources/noto-serif-sc/safety_chars.txt`
for anticipated content at the cost of a larger download. Full fonts and source
images stay out of the deployed site.

SVG logos and inline symbols are compressed with SVGO while preserving IDs,
accessible labels and viewBoxes. After replacing these assets, run:

```bash
npx --yes svgo@4.0.0 --config scripts/svgo.config.mjs images/logos/*.svg _includes/icons/sprite.svg
```

The map generator removes redundant path syntax without changing coordinates.
Its output stays reproducible when the deployment workflow regenerates it.

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

## Inline profile counts

Google Scholar citations and Zhihu followers appear in a compact text row below
the profile links, with bold italic numbers. Their labels and last successful update dates are available on
hover. `_data/profile_stats.json` is the validated fallback snapshot.

`python3 scripts/update_profile_stats.py` refreshes only these two counts. The
Pages workflow runs daily at 08:20 UTC, on pushes and on manual dispatch. It
restores the latest snapshot from Actions cache, fetches each source independently,
then caches and renders the result. A blocked source retains its last count and
update date. If the cache expires, the committed snapshot provides the fallback.
There are no browser-side stats requests or automated commits to `main`.

Run failure-recovery checks with:

```bash
python3 -m unittest discover -s scripts -p 'test_profile_stats.py'
```

## Conferences attended

`_data/conferences.json` stores the original attendance records, official links,
ISO dates and city coordinates in `[latitude, longitude]` order. The section after
Honors displays a borderless world map above a normal text list. It uses a
lazy-loaded static SVG with reserved dimensions and no browser-side map scripts.

After changing conference locations, run:

```bash
python3 scripts/generate_conference_map.py
```

The deployment workflow regenerates the map automatically. `labelOffset` controls
city-label offsets in SVG coordinates; nearby cities can use opposite vertical
offsets. The original jsVectorMap basemap and its MIT license are preserved in
`_map_sources/`, excluded from deployment.
