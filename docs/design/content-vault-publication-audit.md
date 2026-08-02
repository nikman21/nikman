# Content and Vault Publication Audit

## Purpose

This audit reconciles the canonical Personal Website and Digital Garden Brief with the public Astro site. The vault remains the private workshop; the site is a curated exhibition. No automatic vault publishing or filesystem coupling was introduced.

## Public route map

| Public responsibility        | Route           | Status                                                        |
| ---------------------------- | --------------- | ------------------------------------------------------------- |
| Home and identity            | `/`             | Complete                                                      |
| Developed writing            | `/essays/`      | Complete; `/notes/` preserved as a noindex compatibility path |
| Accepted personal canon      | `/principles/`  | Complete                                                      |
| Dated present-tense snapshot | `/current/`     | Complete for confirmed fields                                 |
| Personal context             | `/about/`       | Complete                                                      |
| Selected work                | `/work/`        | Complete                                                      |
| Curated concept notes        | `/garden/`      | Complete with four deliberately selected notes                |
| Verified preserved passages  | `/commonplace/` | Complete with two sourced entries                             |

## Essay decisions

| Brief decision                                                                 | Public result                                                                                  |
| ------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------- |
| Publish `Why I Built a Personal Encyclopedia Instead of a Productivity System` | Published as the featured launch essay                                                         |
| Edit and publish `A Run Without Technology`                                    | Published after grammar, pacing, health-claim, and personal-belief edits                       |
| Develop `Playing Long-Term Games When You Are Naturally Impatient`             | Published as a personal argument linked to Build What Compounds                                |
| Develop and fact-check `Government Exists Because People Are Imperfect`        | Published with direct links to the Paine text and National Archives Constitution transcription |
| Keep faith-search draft private until explicit approval                        | Withheld                                                                                       |
| Keep remaining tier-three ideas private                                        | Withheld                                                                                       |

## Principles

- Only the two entries from `Commonplace/Principles.md` are public.
- No candidate title, count, or content is exposed.
- Each principle includes its question, practices, reason for adoption, personal context, and related public essays.
- Wrestling and InflateMate context is included for Find the Positive in Every Negative because the canonical brief explicitly authorizes those stories.

## Garden selection

The first public Garden contains four notes that pass the brief's publication test:

1. Fear and the Cost of Avoidance — Growing
2. Interface Craft — Growing
3. Tradition as Inherited Judgment — Seedling
4. Trust Reduces Friction — Growing

Each note reveals a point of view, supports an essay or principle, or helps explain Nik's approach to building. Thin definitions, course notes, programming stubs, indexes, quizzes, dashboards, and archive material remain private.

## Commonplace verification

| Entry                                                     | Public source                                     |
| --------------------------------------------------------- | ------------------------------------------------- |
| Thomas Paine on society and government                    | Project Gutenberg transcription of `Common Sense` |
| The Constitution's aspiration toward a more perfect Union | National Archives Constitution transcription      |

The empty source template is not published. Commonplace remains distinct from Principles.

## Confirmed and withheld dynamic content

- Current includes the dated building, learning, practicing, and thinking fields already represented by the live site and canonical brief.
- Reading and Listening remain absent because the brief requires Nik to confirm them and no current values were supplied.
- No location, age, education, employer history, denomination, customer count, revenue, contact link, social profile, or unverified product screenshot was invented.

## Private material explicitly excluded

- `Commonplace/Principle Candidates.md`
- `Thoughts/My Search for Spiritual Practice.md`
- `Essay Ideas.md`
- `Curiosity List.md`
- `Learning/Dashboard.md`
- raw Library notes not deliberately selected for the Garden
- Archive and System files
- `Capture.md` as an inbox or data source
- local filesystem paths, frontmatter, review queues, and agent instructions

## Publishing behavior

- Published essays appear in RSS and the sitemap.
- Garden and Commonplace public routes appear in the sitemap.
- Legacy `/notes/` compatibility pages are noindex and excluded from the sitemap.
- Drafts and private vault material are excluded from indexes, RSS, sitemap, and public search surfaces.
