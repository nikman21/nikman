# Design Direction: Processed Horizons

Date: 2026-08-01

Status: approved retro-space refinement in implementation

Visual source of truth: references/retro-space-orange-tree-selected.png

## Working name

Processed Horizons

The conceptual foundation remains Stone & Current:

- Stone is what endures: faith, principles, history, character, craft, and knowledge.
- Current is what moves: software, business, experiments, learning, and the work of the present.

Processed Horizons is the visual expression of that tension. The interface is contemporary, calm, and exact. The imagery looks like nature documented by an optimistic early digital imaging system.

## Visual philosophy

Modern interface + old-future environment and imagery.

The site should feel like a personal field journal made in 2026 by someone fascinated with how industrial designers, scientists, and publishers in the 1960s through 1980s imagined the future.

The system must remain useful before it becomes expressive. Editorial hierarchy, accessibility, and reading quality are non-negotiable. Visual strangeness belongs primarily inside the image system, not across every control.

## Emotional goals

The site should feel:

- Thoughtful, not academic.
- Ambitious, not inflated.
- Technical, not cold.
- Spiritual, not declarative.
- Personal, not diaristic.
- Futuristic, not science-fiction themed.
- Natural, not outdoors-branded.
- Designed, not decorated.

Desired first impression:

This person thinks deeply, builds real things, and appears to be at the beginning of something larger.

## Personality

The voice is candid, curious, disciplined, and still becoming. The design behaves the same way:

- Precise enough to signal care.
- Open enough to admit uncertainty.
- Bold in a few places instead of loud everywhere.
- Built to accumulate work over years.

## Typography

Primary editorial face: Newsreader Variable.

Use for:

- Hero statements.
- Essay titles.
- Pull questions.
- Principle names.
- Selected project titles.

Primary functional face: IBM Plex Sans.

Use for:

- Navigation.
- Body copy.
- Metadata.
- Technical labels.
- Captions.
- Diagrams.

IBM Plex Mono may be used sparingly for coordinates, timestamps, and image IDs. It is a supporting cut, not a third visual personality.

### Type hierarchy

- Display: clamp from approximately 3.5rem to 7.5rem, tight leading around 0.92–0.98.
- Page title: clamp from 2.8rem to 6rem.
- Section title: clamp from 2rem to 3.5rem.
- Reading body: 1.05–1.18rem, line-height 1.65–1.75.
- Interface body: 0.95–1rem, line-height 1.45–1.6.
- Label: 0.68–0.78rem, uppercase, tracked 0.12–0.2em.

Long-form text should remain between 62 and 70 characters per line.

## Color system

### Interface palette

- Paper: #F2EDE2
- Paper light: #F8F4EB
- Ink: #11130F
- Ink muted: #4D5149
- Hairline: rgba(17, 19, 15, 0.28)
- Hairline strong: rgba(17, 19, 15, 0.58)

### Image palette

Each processed image uses only three to five dominant colors:

- Electric blue: #0869D8
- Burnt orange: #F05A24
- Vermilion: #C63C20
- Warm cream: #F2E4C6
- Deep black: #10130F
- Optional moss: #667329

### Accent rules

- Saturation belongs mainly inside images.
- Orange may mark one rule, link state, or issue footer.
- Green is rare and may identify a sampled image color or current state.
- Color must never be the only carrier of meaning.

## Spacing system

Base unit: 8px.

Preferred steps:

- 4px for optical micro-adjustments.
- 8px for label relationships.
- 16px for compact groups.
- 24px for normal component rhythm.
- 32px for subsection separation.
- 48px for mobile section separation.
- 64px, 96px, 128px, and 160px for major desktop composition.

Spacing should create the primary visual separation inside the paper shell. The planetary background sits outside the publication and never replaces its internal hierarchy.

## Grid

Desktop:

- Twelve columns.
- Maximum content width around 1440px.
- Outer margin between 24px and 72px depending on viewport.
- Main hero split around 58/42.
- One-pixel structural rules.

Tablet:

- Six columns.
- Image and statement may remain split until approximately 860px.
- Bottom three-column index becomes a two-column then single-column sequence.

Mobile:

- Four columns.
- Navigation becomes a compact disclosed menu.
- Hero image precedes or follows the statement based on reading order; content remains semantic.
- Perimeter metadata becomes horizontal captions.
- Scale ticks are reduced, not squeezed.

## Imagery

Nature is a conceptual instrument, not a background category.

Use landscapes to communicate:

- Scale.
- Attention.
- Exploration.
- Time.
- Humility.
- The relationship between ordinary days and distant outcomes.

Preferred subjects:

- Rivers and current.
- Open plains.
- Large skies.
- Fields after weather.
- Distant ridges.
- Paths, stone, and human-scale structures.

Avoid generic mountain hero shots, glossy travel imagery, national-park advertising, fantasy scenery, and vague AI landscapes.

## Image processing

All major landscapes should be processed into a controlled old-future image language:

- Indexed palettes with three to five colors.
- Hard color separation.
- Posterization.
- Coarse halftone dithering.
- Screen-print grain.
- Bitmap stipple in shadow regions.
- Occasional subtle plate misregistration.
- Very restrained CRT sampling or scanline artifacts.

The result must not become literal pixel art, 8-bit scenery, synthwave, vaporwave, cyberpunk, or arcade nostalgia.

Processing should remain legible at responsive sizes. Dither patterns must not create moiré at common display scales.

## Nature usage

The homepage gets one primary landscape. Other pages use imagery only when it adds evidence or atmosphere:

- Work pages may use product screenshots and process details.
- Notes may use a single story image when the essay depends on place.
- About may use a personal photograph later, once supplied and approved.

Do not reuse the hero treatment in every section.

## Environmental background

The central publication sits inside a wide planetary environment on desktop:

- Deep cobalt or midnight star field.
- One large clipped orange planet.
- Near-black mountain silhouettes.
- One small observatory, research tower, or dish for human scale.

The background is atmosphere, not content. It must remain outside the cream shell, contain no essential information, and disappear on narrow mobile layouts where the publication returns to the full viewport.

The cream shell stays flat, opaque, and texture-free.

## Retro-futurist usage

Retro-futurism comes from:

- Processed color.
- Industrial editorial proportions.
- Issue numbering.
- Scientific image documentation.
- Sparse scale markings.
- Optimistic long-horizon language.

It does not come from:

- Rockets or planets.
- Space-age icons.
- Chrome type.
- Neon grids.
- Futuristic dashboards.
- Literal 1980s interface controls.

## Industrial and systems influence

Systems design creates order through:

- Grids.
- Section numbers.
- Thin rules.
- Consistent metadata.
- Compact captions.
- Orthogonal diagrams.
- Precise alignment.

The system should feel like a field manual or research publication, never an admin application.

## Diagrams

Diagrams are explanatory figures.

The homepage uses a single Build → Study → Write loop. It expresses the recurring practice behind the site.

Diagram rules:

- Use text, rules, and CSS border lines only for simple semantic connectors.
- Use orthogonal routing.
- Keep labels outside connector collisions.
- Provide a text equivalent for screen readers.
- Do not animate continuously.
- Do not invent diagrams to fill whitespace.

## Iconography

Use icons only when a familiar action benefits from them. Prefer text links for primary navigation.

When icons are needed:

- Use an established icon library.
- Use simple outlined forms with square or lightly softened terminals.
- Keep size between 16px and 20px.
- Do not use emoji or hand-drawn SVG approximations.

## Borders

- Default: 1px hairline.
- Strong divider: 1px at higher opacity.
- No decorative double borders.
- No thick card outlines.
- Radius: zero by default. Small functional controls may use at most 2px.
- No shadows unless a future interaction genuinely requires elevation.

## Texture

Texture belongs inside the processed image system rather than across the interface.

Texture must:

- Stay contained within imagery.
- Remain subtle on high-density displays.
- Avoid reducing text contrast.
- Never become a decorative page background.

Keep the cream interface surface flat and quiet. Do not reuse the hero grain behind editorial sections or across the page canvas.

## Motion

Motion should suggest careful assembly:

- Short opacity and translate reveals.
- Underlines that extend on hover.
- Small image-position movement only when it does not compromise composition.
- Page transitions only if they remain fast and respect history/navigation expectations.

Timing:

- 140–220ms for controls.
- 300–500ms for section reveals.
- No looping decoration.

Reduced-motion users receive immediate state changes with no spatial movement.

## Handwriting

Do not use handwriting in version one.

A future real Nik handwriting font may be introduced only for short annotations, signatures, or underlines. It must never replace navigation, body text, labels, or headings.

## Mobile behavior

Mobile is a recomposition:

- The image becomes a wide 4:3 or 5:4 field plate.
- Technical metadata moves beneath the image.
- The headline retains presence but avoids edge collisions.
- The Build / Study / Write loop becomes a vertical sequence or compact row.
- Index columns become ruled rows.
- Minimum interactive target height is 44px.
- Reading content receives at least 20px side padding.

## Accessibility constraints

- WCAG AA contrast for all interface text.
- Visible focus rings using ink plus cream offset.
- Semantic heading hierarchy.
- Meaningful alt text for content images.
- Decorative textures hidden from assistive technology.
- Diagram text equivalent.
- Reduced-motion support.
- No information encoded only by sampled image color.

## Design litmus tests

Before adding an element, ask:

- Does it communicate Nik's work or way of thinking?
- Is it useful without the retro treatment?
- Does it belong to the interface or the image system?
- Will it still feel good in five years?
- Is it honest about the site's current scale?

If it feels generic, remove it. If it feels themed, quiet it. If it feels merely decorative, require it to explain something.
