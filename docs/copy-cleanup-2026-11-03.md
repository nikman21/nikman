# Site copy cleanup — November 3, 2026

Follow-up to the owner's phone screenshots showing repeated build/explore language and adjacent duplicate contact areas. Applied [Unslop by Damir Sokolovsky](https://github.com/heydamir/unslop), CC BY 4.0, and voice-preserving editing principles within the existing design.

## Audit

- Home repeated its introduction through an eyebrow, headline, two actions, company aside, artwork caption, and the next section heading.
- About repeated building, learning, and exploration language, followed by a contact block that immediately repeated in the footer.
- Index pages printed labels such as Writing/Writing and Explore/Explore above their descriptions.
- Project cards repeated their title destinations with generic action links and repeated prompts inside text previews.
- Project write-ups used recurring vague headings, long lists, and restatements of their introductions. The company slogan appeared repeatedly on the same page.
- External-arrow characters rendered as emoji in the supplied iPhone screenshots.
- The writing register repeated categories already present on individual essay rows.

## Direction

- Product: Nik's personal home for projects, essays, videos, and interests.
- Character: personal, direct, warm.
- World: paper, ink, and the existing cobalt landscape.
- Moments: real projects, personal photos, and the wrestling footage.
- Signature: fine editorial rules with restrained orange accents.

## Changes

1. Spacing: removed empty label rows, the extra hero aside/caption, redundant card actions, the writing register, and the second contact block. Removed their unused styles and brought essay titles up to the normal card inset.
2. Color: retained the established palette and focus treatments.
3. Icons: replaced every UI diagonal-arrow character with a shared, 16 px SVG arrow using a 1.5 stroke and `aria-hidden`. It follows the surrounding text color and cannot turn into an emoji.
4. Copy: replaced repeated slogans with concrete descriptions. Navigation uses Projects and Index. The footer has one social list and secondary reading links. Project headings describe their actual subject. The Fresh Industries slogan remains once in its write-up.
5. Type: retained Newsreader and IBM Plex Sans, sentence-case interface labels, and the existing reading measure.
6. Layout: retained the order of useful content. About's Contact anchor now reaches the shared footer, preserving `/about/#connect` without two adjacent contact sections.
7. Details: kept clear artifact-specific actions for animations, walkthroughs, and external products. An essay title already opens the essay, so its repeated Read link was removed. Names, source quotations, accepted principle titles, and meaningful recurring terms remain consistent.
8. Visuals: retained the existing artwork, screenshots, supplied photos, and video. No new imagery was generated.
9. Motion: kept existing quiet interactions; no effects or animation were added.

## Evidence and validation

The generated-text audit covers all 36 HTML pages, including article and archive routes. It compares rendered main-content text; navigation and footer text are recorded separately. Build/explore counts include inflections such as building and exploring. They are diagnostic counts, not a rule against using the same clear term when it is needed.

| Page                          | Before | After |
| ----------------------------- | -----: | ----: |
| Home: build/explore terms     |     15 |     1 |
| About: build/explore terms    |     13 |     1 |
| Projects: build/explore terms |      6 |     0 |
| Footer: words                 |     33 |    14 |

Home's remaining occurrence is in an existing essay summary about knowledge. About's remaining occurrence is in the owner-approved wrestling paragraph. Their identity boilerplate and duplicate calls to action are removed.

- Astro check and static build: 48 files checked, 0 errors, warnings, or hints; 36 pages generated.
- Internal links, assets, and fragments: all 1,078 checks pass, including the relocated contact anchor.
- Agent/discovery validation passes. Shared descriptions and co-founder attribution are consistent in metadata and machine-readable content.
- Local About and Home routes return 200. About contains exactly one `connect` anchor and one LinkedIn link; its wrestling player remains present. The old hero and diagonal-arrow characters are absent.
- Changed-file formatting and whitespace checks pass.

The supplied iPhone screenshots ground the visual findings. Local browser use is disabled in Work settings, so a new responsive screenshot and in-browser interaction pass are unavailable. The existing responsive CSS remains in place; generated HTML/server checks are not represented as visual browser proof. Audit JSON stays outside the repository.
