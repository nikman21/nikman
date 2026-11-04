# Design QA — personal home refresh

## November 3 — supplied photos and wrestling edit

Replaced About's portrait and tournament-photo placeholders with the owner's supplied images, preserving their full proportions and adding responsive WebP portrait sizes. Replaced the clip placeholder with a 44.6-second edit of the supplied 3:39 recording: six chronological cuts, tighter framing, a short paper/ink/orange title, and original arena sound. A native player with a poster, descriptive sound captions, and no autoplay accompanies a full-match link. Source and rendered-video contact sheets were inspected, and an edge-clipping draft cut was removed. Nik confirmed he is the wrestler on the right; the opening title and matching poster identify him in that shot. No result overlay is added.

The build reports 0 errors, warnings, or hints. All 1,230 internal links/assets pass. Both exports decode completely and have fast-start indexes; the preview route returns 200 and all media support HTTP 206 ranges. Local browser use is disabled in Work settings, so responsive browser layout, in-browser playback, and a new website screenshot remain unverified in this pass. Details: [about-media-2026-11-03.md](docs/about-media-2026-11-03.md). No deployment or vault changes occurred.

Media/build validation: passed. Browser visual/playback QA: unavailable.

## November 3 follow-up — wrestling story

Revisited the owner's writing at their request, then shortened About's wrestling section to the championship and how its mindset carried into real life. Private source research remains outside the release documentation. The final page structure is recorded in [about-page-2026-11-02.md](docs/about-page-2026-11-02.md).

The owner then requested a shorter section focused on being a champion and carrying that mindset into real life. The final one-paragraph version and its principle link render correctly in the existing layout. Media placeholders, typography, and palette remain. Evidence: `implementation/about-wrestling-short.jpg`; the complete final text is visible in that capture. The earlier expanded version remains recorded in `about-wrestling-story.jpg`. Clicking the Wrestling contents link reaches the section. The rebuilt final version has 0 errors, warnings, or hints; all 1,223 internal destination/asset/anchor checks pass. No deployment or vault edits occurred.

final result: passed

## Latest pass — expanded About page

The owner's November 2 brief requests a more personal editorial biography with portrait, wrestling media, ASU, current projects, life beyond coding, and current rabbit holes. The owner is choosing photos and explicitly requested completion of the remaining work. Source and media decisions are recorded in [about-page-2026-11-02.md](docs/about-page-2026-11-02.md).

- Typography and colors: existing Newsreader/IBM Plex families, paper, ink, cobalt, orange, and focus treatments remain. Short paragraphs, sentence-case labels, and clear heading levels keep the biography readable. The friendly introduction and small education note serve the new personal content.
- Layout: the split introduction, asymmetric wrestling media, project notebook, reading/music note, video, and short question list vary the page rhythm without new decorative cards or résumé furniture. Phone content follows reading order and stacks at the existing narrow-screen boundary.
- Imagery and icons: portrait, wrestling photo, and optional clip are clearly labeled placeholders, as requested. No stock/AI portrait, fake wrestling footage, or unverified company portrait is used. The existing public YouTube upload supplies actual media. Plain arrows and the existing brand marks remain.
- Copy: name, age, city, university, degree, graduation date, co-founder role, paying-customer statement, and newly named projects come from the owner's brief. No sports results, dates, teams, private note contents, customer records, or new expertise claims were invented. LinkedIn remains the contact route; GitHub is verified and added.
- Evidence in the same local audit directory: `implementation/about-before.jpg`, `about-expanded-desktop.jpg`, `about-expanded-full-desktop.jpg`, `about-expanded-mobile.jpg`, `about-rabbit-holes-mobile.jpg`, `about-video-mobile.jpg`, `about-wrestling-tablet.jpg`, and `about-comparison.jpg`.
- Viewports: 1440 × 1000 desktop, 818 × 1000 intermediate, 390 × 844 phone, device scale 1. Desktop exports follow the existing capture normalization described below; comparison panels fit each image proportionally to 720 × 500. New sections and portrait space are intentional changes requested by the owner, rather than fidelity drift.
- Interaction checks: no horizontal overflow at sampled widths; section links navigate correctly; three placeholder notes render with no broken media URLs. YouTube remains unloaded until Play is pressed, then fills its phone container. No console warnings/errors observed.
- Validation: production build reports 0 errors/warnings/hints; internal destination, structured-data/discovery, formatting, and whitespace checks pass.

Photo-dependent crops, authentic footage, and clip captions remain deferred until the owner supplies media. Formal screen-reader certification, text zoom, and physical-device testing are outside this pass. No production deployment or vault changes occurred.

final result: passed

## Latest removal — Osef and InflateMate

At the owner's request, remove Osef's capture model and InflateMate's pricing calculator, their client logic, and their demo entry links. Their real screenshots, project descriptions, and relevant links remain. Update the related Garden note to link to Osef's project page rather than the removed anchor. Bara retains only its actual animation export and frame viewer.

The production build passes with 0 errors/warnings/hints. All 1,214 internal link/asset/anchor checks across 36 HTML pages pass; discovery checks and source formatting pass. Browser inspection confirms both pages have no demo section or mock inputs, Osef's two screenshots load, and InflateMate links to its product site. Bara still scrubs to frame 47 and switches to its separate agent edit.

Evidence alongside the previous captures: `implementation/osef-without-example.jpg` and `implementation/inflatemate-without-example.jpg`, at the browser's default viewport. Page styling and imagery are preserved. Earlier example tests below are historical.

final result: passed

## Latest pass — example removal and Unslop polish

The owner rejected the Fresh Infra signing example and Fresh TV sample guide, supplied `https://tv.freshindustries.co`, and requested [Unslop by Damir Sokolovsky](https://github.com/heydamir/unslop), CC BY 4.0. The audit, five-line direction, and nine passes are recorded in [unslop-polish.md](docs/unslop-polish.md). Earlier records below describe the prior implementation.

- Both rejected models, their client code, and their demo links are removed. Fresh Infra now describes the actual private toolkit. Fresh TV has a project-page link and a direct Open Fresh TV card link to the supplied domain. The manifest has no example URL for either project.
- Typography: existing Newsreader/IBM Plex families and reading text remain. Interface labels and navigation use sentence case with 0.01 em tracking; shared labels are 14 px. The uppercase wordmark remains intentional branding.
- Layout and spacing: shorter index introductions, direct section headings, and a compact footer reduce repeated framing. The first Markdown heading now aligns with its sidebar; a scoped-style selector had left an unwanted top margin, fixed with a global child selector.
- Color, imagery, and controls: existing palette, artwork, project assets, semantic controls, arrows, and focus styling remain. No generated imagery or replacement mock interface was added. Image zoom on hover is removed.
- Evidence beside the earlier implementation captures: `unslop-fresh-infra.jpg` at 1440 × 1000 CSS px, `unslop-fresh-tv-mobile.jpg` at 390 × 844, `unslop-home-desktop.jpg`, `unslop-footer-mobile.jpg`, and `unslop-comparison.jpg`. Scale and export normalization follow the comparison method below. The comparison pairs the pre-polish home on the left with the post-polish home on the right. Focused captures show the removed examples, TV destination, and final two-column footer without phone overflow.
- Browser checks: both project pages contain zero example containers and zero dead demo links. The Fresh TV card and project link use the supplied domain. Desktop navigation renders correctly; phone navigation is hidden until Menu opens, and keyboard navigation to Build works. No document overflow was observed. Production-page console output is clear.
- Validation: the production build has 0 errors/warnings/hints. All 1,218 internal link/asset/anchor checks across 36 HTML pages pass, along with discovery/structured-data and formatting checks.
- Limit: the supplied Fresh TV domain returned `ERR_NAME_NOT_RESOLVED` here. The address is retained exactly as supplied; this pass does not verify the live TV application. No production changes or vault edits occurred.

final result: passed

## Earlier implementation record

Reviewed November 2, 2026, against the static production preview at `http://127.0.0.1:4322/`. The approved critique and user's personal-home direction define the intentional changes. The existing site supplies the visual baseline. No new visual mock was requested.

Earlier design history: [personal-home-prior-history.md](docs/design/qa/personal-home-prior-history.md).

## Findings

No actionable P0, P1, or P2 findings remain in the reviewed states. The site retains its paper, cobalt, orange, landscape imagery, rectangular rules, Newsreader, and IBM Plex Sans identity. Useful content appears earlier.

Project models are labeled as illustrative. Bara's screenshot, frames, MP4, and Osef's prototype screens are actual artifacts. The InflateMate preview uses public sample data. These boundaries are visible in captions and descriptions.

## Comparison evidence

Evidence directory relative to this repository:

`../.codex/visualizations/2026/11/03/01a19f17-d71e-7a83-9562-7c2b742a6da6/nikman-audit/`

- Source visual truth: `01-home-desktop.jpg` and `17-home-mobile.jpg`; original public home, top of page, default theme.
- Implementation: `implementation/home-desktop.jpg`, `home-full-desktop.jpg`, and `home-mobile.jpg`.
- Combined full-view comparison: `implementation/home-comparison.jpg`, original left, refreshed site right.
- Focused evidence: `implementation/videos-desktop.jpg`, `pricing-mobile-boundary.jpg`, `signing-desktop.jpg`, `capture-mobile.jpg`, `bara-video-mobile.jpg`, `build-mobile.jpg`, and `now-mobile.jpg`.
- CSS viewports: 1440 × 1000, 818 × 1000, and 390 × 844 at device scale factor 1. Public state, light theme; interaction states listed below.
- Source desktop export: 1440 × 1000 pixels. Current capture API export: 1425 × 990 pixels for the 1440 × 1000 CSS viewport. Both are fitted proportionally into 720 × 500 comparison panels. The combined image is 1440 × 500. This compares composition and hierarchy rather than pixel registration; original-resolution captures were inspected separately.
- Screenshots and private source manifests remain outside the repository.

## Fidelity surfaces

- **Typography:** Browser-computed families confirm Newsreader Variable for display text and IBM Plex Sans Variable for the interface. The sampled desktop headline is 72 px with 70.56 px leading. Shorter page headings and readable long quotations improve hierarchy. Phone headings and descriptions wrap without clipping. Reading measure is preserved; no font-loading errors were observed.
- **Spacing and layout:** Phone introduction and both entry links precede the artwork. Desktop keeps a split hero, followed by work and writing. Short page entrances, stacked phone content, and growing text previews avoid clipped copy. The existing fine rules and rectangular surfaces remain; no rounded-card or shadow system was added.
- **Color and states:** Existing palette tokens are preserved. Calculated ink/paper contrast is 16.00:1 and secondary text/paper is 6.95:1. Focus uses the darker existing vermilion token. Active and disabled controls are visually distinct. Decorative outer artwork follows the existing narrow-screen breakpoint.
- **Image quality:** Existing tree and space assets are retained. The hero uses optimized WebP. Project assets have source captions, preserved proportions, and suitable crops. InflateMate's sample preview uses containment; Osef images retain phone proportions. Bara's MP4 is unmodified. No CSS/SVG imitation of project imagery was introduced.
- **Copy:** November's personal update and socials use the owner's supplied information. Project descriptions and stages reflect inspected work. One selected working essay is adapted for review; new notes retain Growing/Seedling labels. Private customer records, credentials, addresses, raw captures, and unpublished story material are excluded. Duplicate Osef imagery was removed.
- **Icons and controls:** Typographic arrows and retained decorative marks remain consistent. New controls use native semantic buttons, inputs, checkboxes, sliders, and media controls. No invented avatar or logo substitutes were added.

## Browser verification

- Pricing: three totals agree; preserving a booking retains its old amount after settings change. Maximum allowed inputs produce $140,000.00 in all views and fit phone width. Invalid days block saving.
- Signing: create → interrupt reply → retry retains receipt `EXAMPLE-001` and a request count of one. Reset restores the initial state.
- Capture: save offline, enable network/sync/read access, retrieve the original, revoke access. Revocation hides the result and disables retrieval. Initial text has no indentation whitespace. This is an in-memory example.
- Bara: keyboard scrubbing and the agent-edit toggle show the expected separate files. Native MP4 playback reports 960 × 720, duration 2 seconds, ready state 4, playing, and no media error.
- TV: World selection and advancing display the next fictional program; reset restores Tech's first program.
- YouTube: both public uploads load in privacy-enhanced embeds. Players fill their desktop and phone containers. External fallback links remain available.
- Navigation: the keyboard opens the phone Menu; selecting Now navigates and closes it. About and topic anchors resolve. August remains archived.
- Responsive: reviewed Home, Build, six project details, new essay, Explore, About, Commonplace, and August edition have no phone document overflow or broken images in view. The intermediate project grid has no clipped preview content.
- Console: no errors or warnings reported after production interactions.

## Comparison history

| Severity | Earlier finding                                                                            | Fix and post-fix evidence                                                                             |
| -------- | ------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------- |
| P2       | A dynamically created YouTube iframe missed Astro-scoped CSS and rendered at default size. | Use a global child selector; measured player dimensions and `videos-desktop.jpg` confirm containment. |
| P2       | Fixed-height text previews could clip longer questions.                                    | Let previews grow; the 818 px grid's client/scroll heights agree and text is visible.                 |
| P2       | Large prices could crowd three phone columns.                                              | Use labeled rows; `pricing-mobile-boundary.jpg` shows maximum values without overflow.                |
| P2       | Formatting whitespace entered the initial textarea value.                                  | Render static text directly; DOM value and `capture-mobile.jpg` confirm the fix.                      |

## Verification and limits

The production build passes with 0 errors, warnings, or hints. All 1,226 internal links/assets/anchors across 36 HTML pages pass `pnpm check:links`; `pnpm check:agents` passes. Touched source and new documentation pass formatting. The repository-wide formatting command reports older untouched documentation/configuration differences.

This pass verifies the website and explanatory examples. It does not retest project backends, establish real provider acceptance, test physical devices, certify full accessibility, or benchmark production hosting. A formal screen-reader and text-zoom audit remains outside this pass. No deployment or vault edit occurred.

## Implementation checklist

- [x] Preserve visual identity and shorten entrances.
- [x] Add sourced project artifacts, clear stages, destinations, and labeled examples.
- [x] Add supplied socials, videos, and November update.
- [x] Distinguish developing notes and preserve private source boundaries.
- [x] Verify responsive layout, keyboard menu, interactions, media, and console.
- [x] Validate build, internal destinations, and discovery resources.

final result: passed
