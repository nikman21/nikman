# Nik Manuel | Personal Website

A static, content-first personal site built with Astro. The visual system pairs a restrained editorial interface with processed retro-futurist landscape imagery.

## Local development

Requirements: Node.js 22+ and pnpm 10.28.1.

```sh
pnpm install
pnpm dev
```

The development server prints the local URL. For a production-equivalent preview:

```sh
pnpm build
pnpm preview
```

## Verification

```sh
pnpm format:check
pnpm check
pnpm build
pnpm check:agents
pnpm check:links
```

## Content

Content is stored as typed Markdown collections:

- `src/content/notes/`: essays and field notes
- `src/content/garden/`: selected public notes still developing
- `src/content/commonplace/`: sourced quotations and passages
- `src/content/projects/`: selected work
- `src/content/principles/`: accepted operating principles
- `src/data/current.ts`: the short, frequently updated current page

The collection schemas live in `src/content.config.ts`. Essays and garden notes publish only when `status` is `published`; projects publish only when `public` is `true`.

## Configuration and deployment

The site generates static HTML and is ready for Vercel or any static host. Set `SITE_URL` to the final production origin before building so canonical URLs, social metadata, RSS, and the sitemap point to the correct domain.

```sh
SITE_URL=https://example.com pnpm build
```

The fallback origin is currently `https://nikman.tech`; update `astro.config.mjs` if a different default is preferred.

## Project documentation

- `docs/design/research.md`: reference research and patterns
- `docs/design/design-direction.md`: visual system and art direction
- `docs/design/content-strategy.md`: information architecture and publishing model
- `docs/ai-agent-readiness.md`: AI crawler and machine-readable content policy
- `docs/decisions.md`: technical and product decisions
- `docs/plan.md`: implementation plan and completion criteria
- `design-qa.md`: final visual and interaction QA record
