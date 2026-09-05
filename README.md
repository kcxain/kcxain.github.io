
<h1 align="center">
AcadHomepage
</h1>

<div align="center">

[![](https://img.shields.io/github/stars/RayeRen/acad-homepage.github.io)](https://github.com/RayeRen/acad-homepage.github.io)
[![](https://img.shields.io/github/forks/RayeRen/acad-homepage.github.io)](https://github.com/RayeRen/acad-homepage.github.io)
[![](https://img.shields.io/github/issues/RayeRen/acad-homepage.github.io)](https://github.com/RayeRen/acad-homepage.github.io)
[![](https://img.shields.io/github/license/RayeRen/acad-homepage.github.io)](https://github.com/RayeRen/acad-homepage.github.io/blob/main/LICENSE)  | [中文文档](./docs/README-zh.md) 
</div>

<p align="center">A Modern and Responsive Academic Personal Homepage</p>

<p align="center">
    <br>
    <img src="docs/screenshot.png" width="100%"/>
    <br>
</p>

Some examples:
- [Demo Page](https://rayeren.github.io/acad-homepage.github.io/)
- [Personal Homepage of the author](https://rayeren.github.io/)

## Key Features
- **Automatically update contribution stats**: using GitHub Actions, this REPO can update Google Scholar, Zhihu, and GitHub stats automatically.
- **Support Google analytics**: you can trace the traffics of your homepage by easy configuration.
- **Responsive**: this homepage automatically adjust for different screen sizes and viewports.
- **Beautiful and Simple Design**: this homepage is beautiful and simple, which is very suitable for academic personal homepage.
- **SEO**: search Engine Optimization (SEO) helps search engines find the information you publish on your homepage easily, then rank it against similar websites.

## Quick Start

1. Fork this REPO and rename to `USERNAME.github.io`, where `USERNAME` is your github USERNAME.
1. Generate favicon using [favicon-generator](https://redketchup.io/favicon-generator) and download all generated files to `REPO/images`.
1. Modify the configuration of your homepage `_config.yml`:
    1. `title`: the title of your homepage
    1. `description`: the description of your homepage
    1. `repository`: USER_NAME/REPO_NAME  
    1. `google_analytics_id` (optional): google analytics ID
    1. SEO Related keys (optional): get these keys from search engine consoles (e.g. Google, Bing and Baidu) and paste here.
    1. `author`: the author information of this homepage, including some other websites, emails, city and univeristy.
    1. More configuration details are described in the comments.
1. Add your homepage content in `_pages/about.md`.
    1. You can use html+markdown syntax just same as jekyll.
1. Your page will be published at `https://USERNAME.github.io`.

## Debug Locally

1. Clone your REPO to local using `git clone`.
1. Install Jekyll building environment, including `Ruby`, `RubyGems`, `GCC` and `Make` following [the installation guide](https://jekyllrb.com/docs/installation/#requirements).
1. Run `bash run_server.sh` to start Jekyll livereload server.
1. Open http://127.0.0.1:4000 in your browser.
1. If you change the source code of the website, the livereload server will automatically refresh.
1. When you finish the modification of your homepage, `commit` your changings and `push` to your remote REPO using `git` command.

## Update Contribution Stats

The `Contributions` section is rendered into HTML from `_data/contribution_stats.json`. Visitors receive the numbers with the page, including when JavaScript or third-party requests are unavailable.

`.github/workflows/contribution_stats.yaml` runs daily and on manual dispatch. It updates the independent `contribution-stats` branch using `github-actions[bot]`; that branch keeps only its latest commit. The default branch receives no automated statistics commits.

After a successful statistics update, `.github/workflows/pages.yaml` fetches the published snapshot into its temporary build workspace, builds Jekyll, and deploys a Pages artifact. Code pushes to `main` and manual dispatch also build the site. The committed snapshot is a fallback for local previews and temporary network failures; the build validates all four counters before replacing it. The existing updater keeps previous values when an individual source is unavailable.

Before enabling this deployment workflow, set **Settings → Pages → Build and deployment → Source** to **GitHub Actions**. The `github-pages` environment must allow deployments from `main`. The workflow uses the built-in token and creates no source commits.

Refresh the local build snapshot:

```bash
python3 scripts/fetch_contribution_stats.py
```

Run the source-data updater manually:

```bash
CONTRIBUTION_STATS_OUTPUT=contribution_stats_results/contribution_stats.json \
  python3 scripts/update_contribution_stats.py
```

The source-data updater reads the account identifiers from `_config.yml`. Its output is published to:

```text
https://raw.githubusercontent.com/<repository>/contribution-stats/contribution_stats.json
```

## Update CJK Font Subsets

The homepage uses subsetted Noto Serif SC webfonts to keep Chinese serif text consistent without shipping the full font files to visitors.

The browser loads only these generated files:

```text
assets/fonts/noto-serif-sc/noto-serif-sc-chinese-simplified-400-normal.woff2
assets/fonts/noto-serif-sc/noto-serif-sc-chinese-simplified-700-normal.woff2
```

The complete source fonts are kept under `_font_sources/noto-serif-sc/` so new Chinese characters can be added later. This directory, together with `scripts/`, is excluded from the generated Jekyll site in `_config.yml`.

After editing Chinese text in `_pages`, `_data`, `_config.yml`, or `_includes/author-profile.html`, regenerate the font subsets manually:

```bash
python3 -m pip install -r scripts/requirements-fonts.txt
python3 scripts/subset_cjk_fonts.py
```

The script scans the website source for CJK characters, merges them with `_font_sources/noto-serif-sc/safety_chars.txt`, then rewrites the two webfont files in `assets/fonts/noto-serif-sc/`.

If future content may use Chinese words that are not yet on the page, add those characters or phrases to `_font_sources/noto-serif-sc/safety_chars.txt` before running the script. For example, keep common resume terms such as `国家奖学金` and `三好学生标兵` there so they are available before they appear in the homepage text.

# Acknowledges

- AcadHomepage incorporates Font Awesome, which is distributed under the terms of the SIL OFL 1.1 and MIT License.
- AcadHomepage is influenced by the github repo [mmistakes/minimal-mistakes](https://github.com/mmistakes/minimal-mistakes), which is distributed under the MIT License.
- AcadHomepage is influenced by the github repo [academicpages/academicpages.github.io](https://github.com/academicpages/academicpages.github.io), which is distributed under the MIT License.
