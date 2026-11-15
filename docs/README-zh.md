# 维护说明

当前站点使用 Jekyll 构建，采用纯白背景、紧凑衬线字体和单栏排版。

- 启动预览：`bundle install`，然后 `bash run_server.sh`。
- 本地地址：<http://127.0.0.1:4000/>。
- 页面正文：`_pages/about.md`；个人资料与 SEO：`_config.yml`。
- 论文、新闻、教育与经历：`_data/publications.json`、`news.json`、`career.json`。
- 共享颜色与间距：`_sass/_home.scss` 顶部变量；中文字体：`_sass/_fonts.scss`。
- 修改中文后执行：`python3 scripts/subset_cjk_fonts.py`。
- 机构 Logo 统一使用 `images/logos/` 中的 SVG；来源与转换说明位于 `_image_sources/README.md`。
- 发布检查：`JEKYLL_ENV=production bundle exec jekyll build && python3 scripts/check_site.py _site`。

完整结构、资源优化策略与部署流程见 [README](../README.md)。
