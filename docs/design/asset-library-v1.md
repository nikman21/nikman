# Branded Asset Library V1

## Direction

The library extends the site's Futurist Retro Naturalism language: natural landscapes processed through limited-ink screen printing, early digital imaging, halftone, and bitmap texture, then placed inside a quiet modern editorial system.

The assets support the journal. They do not become the interface.

## Visual constants

- Warm cream: `#f2ede2`
- Near black: `#11130f`
- Cobalt: `#0869d8`
- Dark navy: `#071b30`
- Fresh orange: `#f05a24`
- Vermilion: `#c63c20`
- Muted olive: `#667329`
- Dominant colors per asset: 3–5
- Finish: hard color separation, dry screen-print grain, halftone, restrained bitmap dither
- Avoid: gradients, photoreal polish, neon glow, game UI, HUD styling, chrome effects, and decorative noise

## Fresh citrus symbol system

No original Fresh Industries logo file was present in the project or supplied attachments. V1 therefore follows the documented Fresh identity: orange/citrus subject, Fresh orange color, simple geometry, and a small recurring glyph rather than repeated full-logo lockups.

The system has two related marks:

1. **Citrus disc** — the primary glyph. A compact whole orange with one leaf and a small technical registration point. Use for footer marks, metadata, section markers, status labels, and favicon studies.
2. **Citrus slice** — the secondary glyph. A radial cross-section with restrained segment geometry. Use for diagram nodes, category markers, stamps, and occasional editorial accents.

Usage rules:

- Default rendered size: 12–20 px.
- Feature size: 28–48 px only when the mark is the sole accent.
- Use once per visible section at most.
- Do not repeat both marks in the same small component.
- Preserve clear space equal to one quarter of the mark diameter.
- Prefer Fresh orange on cream or cream on near black.
- Do not add wordmarks, glow, shadows, or animation.

## Folder map

```text
public/assets/brand/
  landscapes/          processed field scenes and editorial plates
  textures/            restrained raster grain and print surfaces
  diagrams/            transparent technical and system overlays
  symbols/             transparent citrus glyphs and compact marks
  personal-symbols/    orange, king, fish, cross, and compass field marks
  editorial-framing/   transparent corners, stamps, and calibration frames
  space/                full-page environmental artwork

docs/design/asset-sources/v1/
  *-chroma.png          retained transparency-workflow sources; never shipped
```

## V1 manifest

| Category  | Asset                         | Intended use                              | Live use                    |
| --------- | ----------------------------- | ----------------------------------------- | --------------------------- |
| Landscape | `field-station-dawn-01`       | Work and note headers                     | Library                     |
| Landscape | `satellite-grove-01`          | Fresh Industries and future-facing essays | Library                     |
| Texture   | `navy-star-grain-01`          | Dark panels and image processing          | Library                     |
| Texture   | `cream-paper-dither-01`       | Print texture for exported graphics       | Library                     |
| Diagram   | `orbital-citrus-system-01`    | System-map or current-section overlay     | Subtle homepage use         |
| Diagram   | `topographic-registration-01` | Maps, field notes, and image metadata     | Library                     |
| Symbol    | `fresh-citrus-disc-01`        | Primary recurring Fresh glyph             | Footer and section metadata |
| Symbol    | `fresh-citrus-slice-01`       | Secondary marker and diagram node         | Library                     |
| Framing   | `calibration-corner-01`       | Image and project framing                 | Selected-work accent        |
| Framing   | `field-stamp-ring-01`         | Metadata, stamps, and archival labels     | Library                     |

## Personal field-mark extension

The lower-page identity extension adds five generated marks under `personal-symbols/`: `personal-orange-01`, `personal-king-01`, `personal-fish-01`, `personal-cross-01`, and `personal-compass-01`.

Their meaning, placement rules, and generation art direction are documented in [`personal-symbol-system-v1.md`](./personal-symbol-system-v1.md). The symbols are introduced once in a field-index strip, then repeated individually in Selected Work, Notes, Principles, Current, and the footer.

## Integration policy

- Use a maximum of three generated brand assets on the homepage outside the existing hero and page background.
- Keep decorative overlays non-interactive and hidden from assistive technology.
- Use raster assets at native aspect ratios; never stretch them.
- Keep system diagrams below 12% opacity. Calibration frames may reach 30% when their line work is otherwise sub-pixel and remains subordinate to copy.
- Remove nonessential motifs on narrow mobile screens.
- Keep source PNG files and publish optimized WebP versions.

## Production workflow

- Keep the Imagen source PNG as the editable master.
- Publish the matching WebP in the same category folder.
- Run `pnpm assets:optimize` to regenerate all web derivatives from the source files.
- Use `src/components/BrandGlyph.astro` for recurring citrus marks instead of duplicating image markup.

## Refinement backlog

- Compare the V1 citrus glyph against the original Fresh Industries logo when the source file is available.
- Test favicon legibility at 16, 32, and 48 px.
- Produce dark-field inverse symbol variants only if a real placement requires them.
- Add more landscapes only when a specific article or project needs one.
