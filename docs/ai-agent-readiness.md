# AI Agent Readiness

Updated: 2026-08-02

## Goal

Make the public website easy for search systems and user-directed AI agents to discover, interpret, cite, and navigate without changing its visual design or exposing private vault material.

## Public machine-readable surfaces

- `/robots.txt` defines crawler access.
- `/llms.txt` provides a concise, curated site briefing and canonical links.
- `/content.json` exposes approved public entities and content from Astro collections.
- `/rss.xml` contains published essays.
- `/sitemap-index.xml` contains canonical indexable pages.
- JSON-LD connects Nik Manuel, Fresh Industries, InflateMate, essays, and garden notes.

## Entity model

- Nik Manuel is represented as a `Person`.
- The About page is represented as a `ProfilePage` whose main entity is Nik.
- Fresh Industries is represented as an `Organization` founded by Nik.
- InflateMate is represented as a `SoftwareApplication` created by Nik and provided by Fresh Industries.
- Essays are represented as `BlogPosting` content authored by Nik.
- Garden notes are represented as `Article` content authored by Nik.

Stable `@id` values connect these entities across pages.

## Crawler policy

- `OAI-SearchBot` is allowed so public content can appear in ChatGPT search.
- `ChatGPT-User` is allowed for user-requested visits.
- `GPTBot` is disallowed to opt the site out of potential model-training use.
- Other crawlers remain allowed by default.

Search discovery and model training are separate choices. If the training preference changes, update the `GPTBot` group in `public/robots.txt`.

## Publication boundary

The machine-readable surfaces contain only public, approved material. They must not include:

- Private vault paths or file structure.
- Draft essays or notes.
- Principle candidates.
- Operations, system, or archive material.
- Unverified metrics, claims, or future business divisions presented as current.

## Validation

After building the site, run:

```sh
pnpm run check:agents
```

The validation checks representative JSON-LD page types, required crawler rules, `llms.txt`, the public content manifest, sitemap exclusions, and noindex compatibility routes.

Structured data should also be checked with Google's Rich Results Test and Schema Markup Validator after deployment.

## Future inputs

Add `sameAs` properties only after Nik confirms which public social profiles should be canonical. Do not infer or search for accounts.
