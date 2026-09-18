# Gilt & Gather — review build

**Status: WORKING MODELLED PROOF; AWAITING FOUNDER VISUAL APPROVAL.**
This is the one-shop production proof, not an approved finished world or photoreal reconstruction.

## Open
The current local server is **http://127.0.0.1:8620/**.
If it has stopped, run this in this folder:

```sh
python3 -m http.server 8620 --bind 127.0.0.1
```
Then open the address above. Use a local HTTP server: ES modules and GLB loading are not supported by double-clicking `index.html` via `file://`.

**Step inside**; use the labelled stops, drag to look, tap an object to collect/inspect it, or ask for **A little clue**. Album progress is stored only in this browser. Dusk changes the lighting. Arrow Up/Down are optional navigation. Reduced motion is respected.

## What is here
- Dimension-driven Blender building: 5.80m frontage, 14.60m depth, 9.30m ridge; usable interior 5.18 × 13.95m.
- Detailed green shopfront, recessed frames/panels, lettering meshes, projecting sign, sash windows, dormer, slate roof, gutters and paving.
- Furnished interior: 4 tall cabinets, 3 low cabinets, 4 tables, 7 shelf modules, 2 bookcases, sideboard, writing desk, counter, 3 pedestals and the specified seating.
- All 16 named hero objects, independently parented and inspectable in 3D. They are **stylised parametric models**, not scanned or neural-generated antiques. Stories and identities are fictional.
- 16 hidden-object anchors, 8 clue anchors and a counter NPC anchor. Anchors do not imply a built NPC or a full treasure-hunt narrative.
- Streamed full interior, distant exterior LOD, collision-checked authored walking route, local album persistence and day/dusk lighting.
- Portable `gilt-gather.blend`, embedded-texture GLBs in `models/`, source generators in `tools/`, and JSON placement/gameplay data in `data/`.

The building wrapper uses canonical business FS-HS-001, plot PLOT-HS-E03, shell SHELL-HS-NARROW-02A at (14.7,0.35,61). The isolated review stage is NOT the completed surrounding high street. Neighbour integration remains a later step after visual approval.

## Evidence / limits
Run:
```sh
/tmp/fsenv/bin/python -m unittest discover -s tests -v
node tests/test_navigation.mjs
/tmp/fsenv/bin/python tests/qa_final.py
```
The Python executable above is the verified local Playwright environment on this Mac, not a portable requirement. Another machine needs Python + Playwright + Chrome.

`evidence/` contains actual browser screenshots, geometry/inventory reports and QA JSON. Verified paths include all 16 **real canvas clicks**, 3D inspector, complete album, persistence after reload, day/dusk, full-motion entry/navigation/exit/re-entry, reduced motion, LOD switch and 390px layout. No browser console/page errors or external runtime requests in the final full-motion test. Headless Chrome measured 16.67ms mean frame intervals across 90 frames on this Mac; this is NOT a real-phone performance claim.

Coverage is targeted, not exhaustive. No coverage percentage, comprehensive lint/type audit, accessibility certification, collision physics/free-roam, full all-mesh intersection proof or real-device matrix is claimed. Static typed checks do not apply to this plain-JS runtime. Original source/recovery files were not edited.

## Rebuild / inferred design
The canonical production spec governs dimensions. `BUILD-CONTRACT.md` records deliberate inferred hidden geometry and visual criteria. Existing saved artwork informed identity; geometry is not traced evidence of unseen sides.

```sh
/Applications/Blender.app/Contents/MacOS/Blender -b --python-exit-code 1 -P tools/build_shop.py
```
Assets already exist locally. `tools/prepare_assets.py` is an acquisition/preparation recipe, not required to view the shop. `tools/stock_clearance.py` is shared by the full generator and repair tool so the display-space correction survives a rebuild. `tools/repair_stock.py -- --audit` audits hero/common-stock bounding-box clearance without changing the model.

Materials: Poly Haven sandstone_blocks_05, old_wood_floor and roof_slates_02 (CC0, https://polyhaven.com/license); slate albedo locally toned charcoal. Runtime: Three.js r149 and its official loaders/utilities (MIT). Botanical plates and rug are locally authored illustrative textures; they are not archaeological or provenance evidence. Reference boards remain reference artwork, not claimed 3D assets.

**Next decision: approve or reject the visual direction of this one shop before multiplying the build across Fable Street.**
