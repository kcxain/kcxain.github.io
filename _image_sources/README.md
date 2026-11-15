# Logo sources

All deployed institution logos are vector SVGs. Display widths are defined in
`_sass/_home.scss`; filenames and intrinsic dimensions are in `_data/career.json`.

- ICT: user-supplied `ict-vector.pdf`, copied from the KernelZero paper's logo assets. Converted with `pdftocairo -svg`; the 75×58 viewBox and all five vector paths are preserved. SVG width/height units were normalized to pixels.
- HIT: user-supplied `哈尔滨工业大学-logo.svg`, copied directly from Downloads to `images/logos/hit.svg`. Its 256×231 viewBox and 275 paths are preserved.
- Cambricon: official AI artwork from https://www.cambricon.com/uploadfile/poster/寒武纪-LOGO.zip, linked on the company homepage. `cambricon.ai` preserves the original. Converted with `pdftocairo -svg`, with the dark presentation background removed and outlines colored #0059c4 to match the previous blue logo. The viewBox crops to the artwork.

Historical PNG originals remain as references and are excluded from deployment.

Deployed SVGs are optimized with SVGO 4 using `scripts/svgo.config.mjs`.
ViewBoxes and individual paths are retained; redundant metadata and path syntax
are removed. Render comparisons at 512 px verify the optimized artwork.
