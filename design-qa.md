# Design QA

## Comparison target

- Source visual truth: `docs/design/references/retro-space-orange-tree-selected.png`, refined by `public/assets/brand/space/space-planet-background-02.png` and the user's 20–30% quieter outer-environment brief
- Preserved-layout baseline: `docs/design/qa/implementation-retro-space-final.png`
- Rendered implementation: `docs/design/qa/background-continuity-after-top.png`
- Combined refinement evidence: `docs/design/qa/comparison-retro-space-quiet.png`
- Combined continuity evidence: `docs/design/qa/comparison-background-continuity.png`
- Route and state: home page, default light publication shell, signed-out public state, top of page
- CSS viewport: 1486 × 1059 px
- Device scale factor: 1
- Source pixels: selected mock and preserved-layout baseline 1486 × 1059 px; refined background asset 1536 × 1024 px
- Implementation pixels: 1486 × 1059 px
- Density normalization: the before/after browser captures use identical 1486 × 1059 px dimensions at 1× density; the background asset is evaluated through the production `cover` crop

Additional responsive evidence:

- Mobile: `docs/design/qa/background-continuity-mobile.png`, 375 × 812 CSS px at 1×
- Tablet top and bottom: `docs/design/qa/background-continuity-tablet-top.png` and `docs/design/qa/background-continuity-tablet-bottom.png`, 768 × 1024 CSS px at 1×
- Desktop mid-scroll and bottom: `docs/design/qa/background-continuity-after-middle.png` and `docs/design/qa/background-continuity-after-bottom.png`, 1486 × 1059 CSS px at 1×

## Findings

No actionable P0, P1, or P2 differences remain.

- [P3] The production shell is wider and the hero is slightly taller than the generated concept.
  - Location: desktop outer frame and hero.
  - Evidence: the selected mock uses an approximately 1090 px shell and compresses the entire three-card index into the 1059 px frame; the implementation uses an 1180 px shell and reveals the index heading at the bottom of the same viewport.
  - Impact: intentional. The wider shell preserves the accepted production site's reading width, content density, and existing lower-page structure while still leaving substantial planetary gutters.
  - Classification: acceptable production constraint.

## Required fidelity surfaces

- Fonts and typography: the implementation preserves the existing Newsreader and IBM Plex Sans pairing. The desktop hero was tuned back to the selected mock's two-line title, with comparable weight, leading, and optical scale. Functional labels, navigation, captions, and body copy retain the accepted production hierarchy.
- Spacing and layout rhythm: the existing header, hero split, practice loop, index, and lower-page sections remain structurally unchanged. The desktop shell now sits within a 1180 px maximum frame with a 74 px top offset at the QA viewport. Mobile returns to a full-width, margin-free shell.
- Colors and visual tokens: the cream reading surface, near-black ink, cobalt, Fresh orange, vermilion, and muted olive remain consistent. The outer environment now uses a darker, slightly desaturated navy and muted burnt sienna; the cream shell becomes the highest-contrast large surface. Texture remains restricted to raster imagery rather than the reading surface.
- Image quality and asset fidelity: the refined planetary environment is a real generated 1536 × 1024 raster asset, delivered as a 206 KB WebP. Its planet occupies a narrower peripheral arc and its star field is substantially sparser. The citrus-tree hero is unchanged: a real 1024 × 1536 source raster with responsive Astro-generated variants. Both assets retain hard color separation, halftone, bitmap dither, and dry screen-print grain.
- Copy and content: all production navigation, hero copy, section indices, project descriptions, note copy, questions, and lower-page content remain unchanged.
- Icons and symbols: the selected frame does not require conventional UI icons. Existing technical marks remain typographic and semantic; the citrus tree carries the Fresh Industries motif without adding a repeated logo.
- Interaction and accessibility: the environmental background is decorative CSS with no essential information. The hero has descriptive alt text. Desktop navigation, the mobile disclosure menu, focus behavior, reduced motion, and print fallbacks remain functional. Mobile exposes Index, Work, Notes, and About links after opening the menu.

## Full-view comparison evidence

`docs/design/qa/comparison-retro-space-quiet.png` places the preserved-layout baseline and refined browser screenshot in one 2000 × 900 comparison input. It visibly confirms that the journal shell, hero crop, typography, diagram, metadata, and indexed structure are unchanged while the outer field becomes darker and calmer, the orange planet shrinks to a peripheral arc, and most bright star noise is removed.

`docs/design/qa/comparison-background-continuity.png` places the reported top and bottom failure states beside the corrected browser captures in one 2000 × 1550 comparison input. It confirms that the abrupt solid navy strips are gone and the same textured space scene now reaches the viewport edges above and below the cream shell.

No separate focused-region comparison was required because the 2000 px combined input keeps both outer gutters, the shell boundary, hero imagery, typography, and technical details readable. The refined background asset and both responsive browser captures were also inspected at original resolution.

## Comparison history

### Pass 1

- Earlier finding: [P2] the desktop hero title wrapped to three lines after the shell was placed inside the planetary environment, increasing hero height and pushing the index below the reference viewport.
- Fixes: reduced the desktop hero display scale and tightened horizontal statement padding without changing copy or hierarchy.
- Post-fix evidence: `docs/design/qa/implementation-retro-space-final.png` shows the approved two-line title and the indexed section beginning within the viewport.

### Pass 2

- Earlier finding: [P2] the first 1240 px shell left too little of the planetary environment visible and weakened the selected mock's central contrast.
- Fixes: reduced the maximum shell width to 1180 px, retuned the desktop hero padding, and preserved the two-line title.
- Post-fix evidence: `docs/design/qa/comparison-retro-space.png` shows stronger outer gutters, a more legible planet and mountain environment, and an editorial shell that retains production presence.

### Pass 3: quieter outer environment

- Requested refinement: reduce the retro-space background's visual dominance by roughly 20–30% without changing the central publication or blue/orange identity.
- Fixes: replaced the large bright planet with a narrower muted arc, darkened and slightly desaturated the blue field, removed most small orange stars, retained only restrained points of light, and preserved the low mountain horizon and tiny observatory.
- Post-fix evidence: `docs/design/qa/comparison-retro-space-quiet.png` shows the cream shell as the dominant large surface, with quieter navy gutters and a visibly reduced orange mass. No layout, crop, typography, or interaction drift is visible.

### Pass 4: continuous full-page background

- Earlier finding: [P2] the shell's collapsing top and bottom margins sat outside the `body` box, exposing the `html` fallback color as abrupt solid navy bars.
- Fixes: moved the retro-space artwork from the `body` background onto a dedicated fixed `body::before` layer with `inset: 0`, isolated it behind page content, and retained the cream shell as the foreground reading surface. The layer is disabled at the existing mobile and print breakpoints.
- Post-fix evidence: `docs/design/qa/comparison-background-continuity.png` shows uninterrupted artwork at the page top and bottom. `docs/design/qa/background-continuity-after-middle.png` confirms the same scene remains continuous behind the shell during scroll.

### Pass 5: branded asset library V1

- Source visual truth: `docs/design/asset-library-v1.md`, `docs/design/asset-batch-v1.md`, and the ten generated source PNGs under `public/assets/brand/`.
- Implementation evidence: `docs/design/qa/asset-library-v1-desktop-top.png`, `docs/design/qa/asset-library-v1-work-component-final.png`, `docs/design/qa/asset-library-v1-current-component.png`, and `docs/design/qa/asset-library-v1-footer-component.png`.
- Combined evidence: `docs/design/qa/comparison-asset-library-v1.png` presents the generated source marks beside their browser-rendered placements in one normalized review surface.
- Findings: no actionable P0, P1, or P2 differences remain. The calibration frame initially disappeared at production scale; its rendered size and opacity were increased while keeping its marks quieter than the section copy. The orbital diagram remains deliberately near-threshold on the black Current panel.
- Responsive result: generated framing and diagram overlays are removed below 680 px; the recurring citrus marker remains legible in metadata and the footer. No horizontal overflow is present at 1486, 768, or 375 px.
- Accessibility result: all decorative assets use empty alt text and `aria-hidden`; the symbol component is decorative by default and supports a label when a semantic use is introduced.
- Production result: all ten assets have source PNG and optimized WebP versions, the shared `BrandGlyph` component is used for recurring marks, and the existing editorial structure and content are unchanged.

### Pass 6: personal field marks and lower-page rhythm

- Source visual truth: `docs/design/personal-symbol-system-v1.md` plus the five generated source PNGs under `public/assets/brand/personal-symbols/`.
- Baseline: `docs/design/qa/personal-symbols-before-desktop.png`, showing the accepted editorial page before the lower-section identity extension.
- Rendered implementation: `docs/design/qa/personal-symbols-index.png`, `docs/design/qa/personal-symbols-work.png`, `docs/design/qa/personal-symbols-notes.png`, `docs/design/qa/personal-symbols-principles.png`, `docs/design/qa/personal-symbols-current-final.png`, and `docs/design/qa/personal-symbols-footer-final.png`.
- Combined evidence: `docs/design/qa/comparison-personal-symbols-v1.png` places all five generated source symbols above their browser-rendered section placements in one 2000 px comparison surface.
- Findings: no actionable P0, P1, or P2 differences remain. The five symbols preserve a single screen-print language and stay subordinate to headlines and copy. Two secondary image plates fill the most visibly empty regions while remaining smaller than the hero. Orange is concentrated in the Building Now chip, image-caption rules, symbol accents, and footer strip.
- Responsive result: the field index moves from five columns to three, the image plates stack above copy, the topographic overlay is removed below 680 px, and the reading order remains unchanged. No horizontal overflow is present at 1486, 768, or 375 px.
- Accessibility result: section marks and system overlays are decorative with empty alt text; the two landscape plates use concise descriptive alt text. Existing links, navigation, focus behavior, and content semantics remain unchanged.
- Image quality: the five transparent marks have clean alpha and no visible magenta fringe. Dedicated 768 px landscape plate derivatives reduce the added transfer size to approximately 165 KB combined while retaining the print texture at rendered size.

### Pass 7: all-page symbol and graphic coverage

- Source visual truth: `docs/design/personal-symbol-system-v1.md` and the same five generated personal marks approved in Pass 6.
- Rendered implementation: `docs/design/qa/all-pages-work-desktop.png`, `docs/design/qa/all-pages-work-detail-desktop.png`, `docs/design/qa/all-pages-fresh-industries-desktop.png`, `docs/design/qa/all-pages-notes-desktop.png`, `docs/design/qa/all-pages-note-detail-desktop.png`, `docs/design/qa/all-pages-principles-desktop.png`, `docs/design/qa/all-pages-current-desktop.png`, `docs/design/qa/all-pages-about-desktop.png`, and `docs/design/qa/all-pages-404-desktop.png`.
- Combined evidence: `docs/design/qa/comparison-all-pages-symbol-system.png` places the five source symbols above all eight browser-rendered route families in one normalized review surface.
- Findings: no actionable P0, P1, or P2 differences remain. Shared index-page intros pair one semantic mark with one low-opacity technical artifact. Work detail pages use project-specific marks and processed landscape plates; note detail pages repeat the fish mark and topographic registration field. About uses the orange as its primary mark and the three destination marks only on corresponding onward links. The 404 page uses the compass and a calibration fragment.
- Density result: the primary page title remains the strongest element on every route. Technical graphics stay behind copy at 5–10% opacity, and the work-detail plate is the only new full-color secondary image moment outside the homepage.
- Responsive result: all checked routes report a 375 px document width at a 375 px viewport, with no horizontal overflow. Detail-page images and facts stack in reading order; background graphics reduce further on mobile.
- Accessibility result: decorative marks and overlays retain empty alt text or `aria-hidden`; the two work-detail landscape plates use concise descriptive alt text. Existing heading order, links, and navigation remain unchanged.

### Pass 8: canonical brief and curated vault content

- Source authority: the attached Personal Website and Digital Garden Brief plus the current vault sources it names. Publication decisions are recorded in `docs/design/content-vault-publication-audit.md`.
- Rendered implementation: `docs/design/qa/content-vault-home-desktop.png`, `docs/design/qa/content-vault-essays-desktop.png`, `docs/design/qa/content-vault-garden-desktop.png`, `docs/design/qa/content-vault-garden-detail-desktop.png`, and `docs/design/qa/content-vault-commonplace-desktop.png`.
- Mobile evidence: `docs/design/qa/content-vault-home-mobile.png`, `docs/design/qa/content-vault-essays-mobile.png`, `docs/design/qa/content-vault-garden-mobile.png`, and `docs/design/qa/content-vault-commonplace-mobile.png`.
- Findings: no actionable P0, P1, or P2 visual differences remain. The longer canonical homepage statement fits the existing split hero without displacing the processed field image. Essays, Garden, and Commonplace reuse the established editorial rules, personal marks, display typography, and subdued technical graphics.
- Content result: four developed essays, both accepted principles, four deliberately selected Garden notes, two verified Commonplace passages, Current, About, and selected work are public. The faith draft, principle candidates, editorial idea lists, unselected Library notes, Archive, System files, and local vault paths remain private.
- Discovery result: RSS contains exactly the four published essays and uses `/essays/` URLs. The sitemap includes Home, Essays, Principles, Current, About, Work, Garden, and Commonplace while excluding legacy `/notes/` aliases and 404. Legacy note routes remain available with noindex and canonical links to Essays.
- Responsive result: Home, Essays, Garden, and Commonplace each report a 375 px document width at a 375 px viewport with no horizontal overflow. The five-item primary navigation collapses into the existing mobile disclosure menu.
- Source verification: the Paine source and National Archives Constitution transcription both returned HTTP 200. The public build contains no private tier-three titles, principle-candidate references, or local vault filesystem paths.

## Browser verification

- Production routes checked: every internal route linked by the built HTML returned HTTP 200, including Home, all four Essays, both Work details, all four Garden details, Commonplace, Principles, Current, and About.
- Feed and discovery checked: `/rss.xml` and `/sitemap-index.xml` returned HTTP 200.
- Latest refinement viewports checked: 1486 × 1059 and 768 × 1024 at 1× density; the unchanged mobile treatment continues to remove the outer background at 375 × 812.
- Horizontal overflow: none at desktop, tablet, or mobile widths.
- Primary interactions tested: desktop navigation exposes Home, Essays, Principles, Current, and About; the existing mobile disclosure retains the same five destinations.
- Responsive background behavior: the planetary environment remains visible in desktop and tablet gutters and is removed at the 375 px mobile viewport.
- Full-page continuity: verified at desktop scroll positions 0, 2200, and 4046 px and at the tablet page top and maximum scroll position. The background layer remains fixed at all four viewport edges with no fallback-color exposure.
- Console errors: none on the home page, open mobile menu state, or Work route.
- Build verification: Astro check reported 0 errors, 0 warnings, and 0 hints; the production build generated 24 pages plus RSS and sitemap output.
- All-page visual verification: Work, both work details, Notes, the note detail, Principles, Current, About, and 404 were checked at desktop; Work, a work detail, the note detail, and About were visually inspected at 375 × 812, with overflow assertions also run on Principles, Current, and 404.

## Implementation checklist

- [x] Preserve the accepted editorial shell, content, and interactions.
- [x] Create separate production assets for the planetary environment and citrus-tree hero.
- [x] Keep all texture outside the cream reading surface.
- [x] Match the selected two-line desktop hero composition.
- [x] Verify desktop, tablet, and mobile behavior without overflow.
- [x] Verify primary navigation, mobile menu, routes, console output, and production build.
- [x] Record normalized browser-rendered and combined comparison evidence.
- [x] Reduce the outer environment's contrast, planet scale, and star density without changing the editorial shell.
- [x] Place the artwork on a dedicated full-viewport layer so collapsed shell margins cannot expose solid fallback bars.
- [x] Generate, document, optimize, and organize the ten-asset Futurist Retro Naturalism V1 library.
- [x] Integrate the Fresh citrus motif, one calibration frame, and one system diagram without disturbing the editorial hierarchy.
- [x] Generate and integrate orange, king, fish, cross, and compass personal field marks.
- [x] Add exactly two secondary landscape plates and one restrained system overlay below the hero.
- [x] Verify the extended lower-page system at desktop, tablet, and mobile widths.
- [x] Extend the semantic symbol and supporting-graphic language across every human-facing route.
- [x] Reconcile the public site with the canonical content brief without exposing private vault material.
- [x] Publish the approved essay, Garden, and Commonplace content with explicit maturity, source, RSS, sitemap, canonical, and privacy behavior.

final result: passed
