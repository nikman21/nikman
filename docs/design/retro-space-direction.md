# Retro-Space Direction

Date: 2026-08-01

Status: research basis for visual exploration

## Direction

Preserve the current editorial structure and place it inside an environmental world inspired by optimistic 1960s–1980s aerospace publishing. The site should read first as a calm personal journal and only then reveal a stranger planetary setting.

The central contrast is:

> clean modern publication + printed old-future environment

## Focused references

### NASA Graphics Standards Manual, 1976

Source: [NASA Graphics Standards Manual](https://www.nasa.gov/wp-content/uploads/2015/01/nasa_graphics_manual_nhb_1430-2_jan_1976.pdf)

What works:

- One disciplined grid governs covers, interiors, captions, folios, and image placement.
- Technical publications use most of the page while preserving deliberate breathing bands.
- Poster guidance favors immediate, simple graphics instead of layered spectacle.
- Classical serif typography can coexist with functional sans-serif labeling.

Use here: keep the existing shell and typography unchanged; let issue numbers, coordinates, image IDs, and tiny symbols inherit the logic of a real publication system.

### JPL Visions of the Future

Source: [JPL Visions of the Future](https://www.jpl.nasa.gov/galleries/visions-of-the-future/)

What works:

- Each image focuses on one strange scientific property rather than assembling generic space motifs.
- WPA-style simplification turns unfamiliar worlds into understandable destinations.
- Reduced palettes, clear silhouettes, and large planetary forms create scale without photorealism.
- The future feels optimistic because the environments are imagined from a human point of view.

Use here: each major image gets one dominant idea—orange planet, observatory, radio dish, or distant horizon—not all of them at once.

### The Studio at JPL

Source: [The Studio at JPL](https://www.jpl.nasa.gov/thestudio/)

What works:

- Art direction is developed with scientists and engineers, giving speculative imagery documentary credibility.
- Awe and technical clarity coexist instead of competing.

Use here: field notes and measurement marks should relate to the pictured environment, even when they remain atmospheric rather than literal data.

### Recent Japanese Posters from the MoMA Collection

Source: [MoMA exhibition catalogue](https://www.moma.org/documents/moma_catalogue_1739_300062960.pdf)

What works:

- Flat images, bold color, precise structure, and ordered composition.
- Kazumasa Nagai's cosmic landscapes and Koichi Sato's spiritual atmosphere show that space imagery can feel contemplative rather than cinematic.
- Silkscreen and offset surfaces create richness through print craft rather than visual clutter.

Use here: favor flat planetary geometry, unusual negative space, and controlled ink texture. Keep the composition quiet enough to retain Nik's existing classical-modern identity.

### NASA technical drawing symbols

Source: [NASA Technical Standards System](https://standards.nasa.gov/standard/ksc/ksc-std-152-1)

What works:

- Consistent symbols make complex facilities readable.
- Graphic marks exist to document systems, not decorate them.

Use here: the citrus glyph, diagram nodes, scale marks, and observation labels should behave like a small repeatable notation set, not a sci-fi interface.

### Contemporary editorial pacing

Source: [See All This by Studio Airport](https://www.studioairport.nl/project/see-all-this/)

What works:

- A digital publication can stay clear and restrained while reserving strong visual moments for pacing.
- The system supports quiet-to-bold rhythm without turning every section into a special layout.

Use here: background environment → quiet editorial shell → one strong hero image → quiet body → one later image transition → quiet footer mark.

## What to avoid

- NASA logos, mission patches, or copied agency identity.
- Star fields behind reading text.
- Glossy 3D planets, cinematic lens effects, nebula gradients, or photographic space composites.
- Cyberpunk neon, synthwave sunsets, chrome UI, retro novelty type, or game-like pixels.
- A collection of unrelated sci-fi objects placed into one scene.
- Technical labels without a plausible relationship to an image or section.
- Repeating the citrus symbol until it becomes a logo wallpaper.
- Applying grain across the cream reading surface.

## Image treatment rules

- Use three to five dominant colors per image.
- Default palette: warm cream, near black, cobalt blue, Fresh orange; add dark navy or muted olive only when needed.
- Build images from large flat shapes before adding texture.
- Apply halftone, bitmap dither, screen-print grain, posterization, and slight ink imperfection as one consistent production language.
- Preserve clean silhouettes at responsive sizes; avoid micro-detail that turns to noise.
- Use one dominant astronomical form per composition.
- Keep stars sparse and irregular, with enough dark negative space to feel expansive.
- Treat observatories, dishes, towers, and field stations as small human-scale anchors.

## Palette rules

- Cream remains the shell and reading surface.
- Near black remains the primary text and rule color.
- Cobalt or midnight blue owns the environmental background.
- Fresh orange is the planetary and symbol color; it should appear as one intentional focal signal.
- Muted gray handles distant terrain and quiet technical notation.
- Olive is optional and rare.
- No gradients are required; tonal depth should come from overprinting, dithering, and scale.

## Composition rules

- Keep the existing centered editorial shell and its internal grid intact.
- Let the environmental art be visible mainly in the outer gutters and at selected full-width transitions.
- Maintain clear cream separation around all reading text.
- Prefer asymmetry: a planet clipped by one edge, a small observatory low on the horizon, or a dish isolated against a large sky.
- Preserve the current hero's image/text balance unless a selected visual direction demonstrates a clearly better crop without changing hierarchy.
- Use the citrus glyph at favicon or metadata scale, never as a competing hero logo.
- The overall rhythm remains quiet → bold → quiet → bold → quiet.

## Working visual test

A successful frame should still read as Nik's personal site with the planetary background removed. With the background present, it should feel more memorable and more optimistic—not more themed.

## Selected implementation assets

- `public/assets/brand/space/space-planet-background-02.webp`: quieter production planetary environment used outside the publication shell, with a darker field, reduced star density, and smaller muted planet.
- `public/assets/brand/space/space-planet-background-01.webp`: original higher-contrast planetary environment retained as a recoverable source variant.
- `src/assets/space-field-orange-tree-01.png`: source hero plate; Astro produces responsive AVIF and WebP variants for the browser.
- `docs/design/references/retro-space-orange-tree-selected.png`: approved desktop visual target.
- Desktop and tablet render the planetary asset on a fixed, viewport-sized `body::before` layer so the artwork remains continuous above, beside, and below the centered shell while scrolling. Mobile and print disable this environmental layer.
