# Desktop typography and spacing review

Reviewed the 36 live HTML routes in the Codex in-app browser at 1440 × 900 and 1024 × 768. This includes the seven project pages, five essays, seven Garden notes, six older `/notes/` routes, both Now editions, and the 404 page.

The baseline had no horizontal page overflow or clipped text at either width. The visible problems were oversized titles and narrow columns on Principles, long project paragraphs, cramped multiline headings, inconsistent older article layouts, and 10.4px connected-note labels.

## Changes

- Principles: give the main column more room, reduce title and question sizes, and shorten the large section gaps.
- Projects: cap the reading column at 42rem and center it alongside a bounded sidebar.
- Reading pages: reduce the space before section headings and increase the leading of multiline page titles.
- Writing and Garden indexes: increase heading leading to 1.08.
- Older `/notes/` pages: match the title scale, column widths, and header spacing of the current Writing pages. Canonicals and noindex behavior stay intact.
- Connected Garden notes: increase number and maturity labels to 12px at desktop widths.

No article text, project facts, media, or private source material changed.

## Validation

- `pnpm build`: 48 Astro files checked with no errors, warnings, or hints; 36 pages generated.
- `pnpm check:links`: all 1,076 internal links, assets, and anchors passed.
- `pnpm check:agents`: passed.
- Local screenshot review: 12 representative routes at both desktop widths, covering all changed templates plus Home and About.
- Mobile regression checks: Principles, the older notes index and longest article, Fresh TV, Shared Foundations, and Writing at both 320px and 390px. No horizontal overflow, clipped text, or checked labels below 12px.
- Large-screen geometry checks: Principles, Fresh TV, and the longest essay at 1920 × 1080 passed.

Before and after browser captures and route measurements are kept outside the public site in the desktop QA artifact folder. A final live route pass follows deployment.
