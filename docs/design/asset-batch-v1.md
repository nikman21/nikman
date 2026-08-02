# Branded Asset Batch V1 Plan

## Objective

Create ten reusable Imagen assets that share one palette and one processed-print language, then integrate three restrained accents into the existing site without changing its editorial hierarchy.

## Visual anchors

- `public/assets/brand/space/space-planet-background-02.png`
- `src/assets/space-field-orange-tree-01.png`
- `docs/design/references/retro-space-orange-tree-selected.png`
- Fresh Industries brief: orange/citrus glyph, not repeated full-logo lockups

## Production batch

| ID  | Category  | Output                                    | Format goal              | Brief                                                                                           | Status             |
| --- | --------- | ----------------------------------------- | ------------------------ | ----------------------------------------------------------------------------------------------- | ------------------ |
| L01 | Landscape | `landscapes/field-station-dawn-01`        | 3:2 source PNG + WebP    | Distant alpine field station at first light, cobalt sky, orange ground, cream atmospheric bands | Generated          |
| L02 | Landscape | `landscapes/satellite-grove-01`           | 3:2 source PNG + WebP    | Citrus grove beside a restrained retro satellite dish, no people, documentary scale             | Generated          |
| T01 | Texture   | `textures/navy-star-grain-01`             | wide source PNG + WebP   | Sparse navy star field with screen-print grain and calm negative space                          | Generated          |
| T02 | Texture   | `textures/cream-paper-dither-01`          | square source PNG + WebP | Warm cream paper, faint registration dust, dry ink and subtle bitmap dither                     | Generated          |
| D01 | Diagram   | `diagrams/orbital-citrus-system-01`       | transparent PNG + WebP   | Citrus disc as a restrained orbital-system node with hairline rings and calibration ticks       | Generated and live |
| D02 | Diagram   | `diagrams/topographic-registration-01`    | transparent PNG + WebP   | Sparse contour lines, two crosshair points, and scale ticks without text                        | Generated          |
| S01 | Symbol    | `symbols/fresh-citrus-disc-01`            | transparent PNG + WebP   | Primary whole-orange glyph, one leaf, hard geometry, tiny registration point                    | Generated and live |
| S02 | Symbol    | `symbols/fresh-citrus-slice-01`           | transparent PNG + WebP   | Secondary citrus cross-section glyph with six restrained radial segments                        | Generated          |
| F01 | Framing   | `editorial-framing/calibration-corner-01` | transparent PNG + WebP   | Two-corner editorial frame with small ticks and one orange node                                 | Generated and live |
| F02 | Framing   | `editorial-framing/field-stamp-ring-01`   | transparent PNG + WebP   | Imperfect circular archive stamp, segmented ring, no text                                       | Generated          |

## Generation constraints

- Built-in Imagen/ImageGen route, one asset per generation.
- Use the current hero and outer-space artwork as style references.
- Use 3–5 dominant colors and preserve the existing cobalt/orange/cream/near-black balance.
- Transparent assets are generated on flat `#ff00ff`, then locally keyed to alpha and inspected.
- No readable copy, logos, watermarks, gradients, photorealism, or interface mockups.
- Keep every generated final in the project and retain non-destructive source files.

## Planned live placements

1. Replace the generic footer glyph with the primary citrus disc.
2. Add the citrus disc to one homepage metadata line as a small recurring marker.
3. Add the orbital citrus diagram at very low opacity inside the dark Current section.
4. Add one calibration corner to Selected Work at low opacity on desktop only.

All four placements are implemented in V1. The shared `BrandGlyph` component keeps the primary mark consistent across metadata and the footer.

## Generation record

- Mode: built-in Imagen/ImageGen create mode.
- Prompt family: Futurist Retro Naturalism, limited cobalt/orange/cream/near-black palette, hard color separation, screen-print grain, halftone, restrained bitmap dither, generous negative space, and no readable text.
- Transparency workflow: flat `#ff00ff` chroma source, local alpha key, visual inspection, then lossless-preserving WebP export.
- Delivery: ten source PNG files and ten optimized WebP derivatives.
- Optimization: run `pnpm assets:optimize` after replacing a source asset.

## Acceptance checks

- Every file exists in the documented folder and has an optimized WebP derivative.
- Transparent assets have real alpha, transparent corners, and no magenta fringe.
- The live page remains readable and calmer than the asset library itself.
- No horizontal overflow or new console errors at desktop, tablet, or mobile widths.
- Production formatting and Astro builds pass.
