# Personal Symbol System V1

## Purpose

Extend the existing Futurist Retro Naturalism library with five recurring personal field marks. The system adds rhythm and meaning below the hero without turning the journal into a themed interface.

## Symbol set

| ID  | Symbol  | Meaning in the journal                        | Primary placement              |
| --- | ------- | --------------------------------------------- | ------------------------------ |
| P01 | Orange  | Fresh Industries, cultivation, patient growth | Field index and footer lineage |
| P02 | King    | Strategy, responsibility, the long game       | Selected Work                  |
| P03 | Fish    | Patience, observation, time outside           | Notes from the Workbench       |
| P04 | Cross   | Faith, grounding, first principles            | Principles                     |
| P05 | Compass | Direction, exploration, course correction     | Current and footer navigation  |

These meanings are editorial associations, not explanatory copy that must appear on every page. The field index names each mark once; later placements can rely on recognition.

## Art direction

- Generated with built-in Imagen/ImageGen create mode.
- One opaque mark per image on a flat removable `#ff00ff` chroma background.
- Square composition with generous padding and a clear silhouette at 16–32 px.
- Palette: Fresh orange, near black, cream cuts, and one restrained cobalt registration detail.
- Finish: 1970s screen-print symbol filtered through early digital bitmap processing.
- Hard color separation, slight dry-ink edge, minimal halftone, and no gradients.
- No readable text, badges, frames, shadows, game icon styling, or polished contemporary vector sheen.

## Integration pattern

1. A compact five-mark field index introduces the system after the homepage index.
2. One mark is repeated inside the metadata line of each major lower section.
3. Existing V1 landscapes create two secondary image plates in Selected Work and Notes.
4. Technical captions use stable image IDs, category labels, and scale ticks rather than decorative prose.
5. Symbols remain decorative unless future content gives them interactive or semantic meaning.

## Route coverage

| Route family | Primary mark         | Supporting graphic                                |
| ------------ | -------------------- | ------------------------------------------------- |
| Home         | Full five-mark index | Landscapes, topographic plate, citrus diagrams    |
| Work index   | King                 | Calibration field; project-specific row marks     |
| Work detail  | King or Orange       | Project-specific processed landscape plate        |
| Notes index  | Fish                 | Field-stamp registration graphic                  |
| Note detail  | Fish                 | Topographic registration graphic                  |
| Principles   | Cross                | Topographic registration graphic                  |
| Current      | Compass              | Orbital citrus diagram                            |
| About        | Orange               | Calibration field; semantic marks on onward links |
| 404          | Compass              | Calibration field                                 |

Every human-facing route carries at least one personal mark and one supporting visual artifact. Machine outputs such as RSS and sitemap remain unadorned.

## Density rules

- One personal mark per section header.
- One dedicated field-index strip per page maximum.
- Standard rendered size: 14–22 px.
- Section marker size: 18 px.
- Feature use above 40 px requires its own negative space and no competing mark.
- Hide image plates and reduce the field index on narrow screens before reducing reading comfort.

## Planned imagery

- `satellite-grove-01` becomes a project field plate in Selected Work.
- `field-station-dawn-01` becomes a note/observation field plate in Notes from the Workbench.

Both images already belong to the generated V1 library and share the site palette, so the extension gains visual rhythm without introducing a second image language.

## Production record

| Asset                 | Source PNG | WebP | Live use                   |
| --------------------- | ---------- | ---- | -------------------------- |
| `personal-orange-01`  | Complete   | Yes  | Field index and footer     |
| `personal-king-01`    | Complete   | Yes  | Field index and Work       |
| `personal-fish-01`    | Complete   | Yes  | Field index and Notes      |
| `personal-cross-01`   | Complete   | Yes  | Field index and Principles |
| `personal-compass-01` | Complete   | Yes  | Field index and Current    |

- Mode: built-in Imagen/ImageGen create mode, one symbol per generation.
- Prompt family: centered single-object pictogram, 1970s screen print, early bitmap processing, Fresh orange/near-black/cream/cobalt, hard color separation, restrained dry-ink edge, no text or framing.
- Transparency: each source was generated on flat `#ff00ff`, locally keyed to alpha, inspected, and retained non-destructively under `docs/design/asset-sources/v2/`.
- Web delivery: `pnpm assets:optimize` trims and exports the five mark WebPs and creates 768 px image-plate derivatives for the two lower-page landscapes.
