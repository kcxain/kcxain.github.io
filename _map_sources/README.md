# Conference basemap

`world.json` contains the original jsVectorMap 1.7.0 `world.js` map data restored
from repository commit `cee31e2`. Its Miller projection, dimensions and geographic
inset are preserved. See `LICENSE` for the upstream MIT license.

`scripts/generate_conference_map.py` projects the coordinates in
`_data/conferences.json` and writes `images/conferences.svg`. No map library runs
in visitors' browsers. This source directory is excluded from the deployed site.
