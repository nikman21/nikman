# Decision Log

## 2026-08-01 — Use Astro

Decision:

Use Astro with TypeScript and static output.

Alternatives:

- Next.js App Router.
- A client-rendered React/Vite site.

Reason:

The site is primarily static, content-led, image-led, and SEO-sensitive. Astro provides validated content collections, Markdown/MDX support, optimized assets, sitemap/RSS integrations, and zero client JavaScript by default. Client-side islands remain available if a future interaction genuinely needs them.

Next.js can also statically export the site, but its React application model and MDX configuration add complexity without a present requirement for authentication, server actions, APIs, or application-like state.

Revisit if:

- Authenticated product features become part of the personal site.
- The site needs substantial server-side application behavior.
- Shared React product components become more valuable than Astro's content-first defaults.

## 2026-08-01 — Deploy to Vercel

Decision:

Prefer Vercel for the first deployment.

Alternatives:

- Railway.
- Generic static hosting.

Reason:

The output is static and Vercel provides a simple Git-based deployment path, previews, custom domains, and no required server management. Railway offers no meaningful advantage for the current architecture.

## 2026-08-01 — Use Astro Content Collections

Decision:

Store notes, projects, and principles in validated content collections.

Alternatives:

- Hardcoded page components.
- A database or CMS.
- Unvalidated Markdown directory scanning.

Reason:

Collections keep content close to the repository, allow new content without redesigning pages, validate frontmatter, and prevent draft/private metadata from leaking into public indexes.

## 2026-08-01 — Primary navigation is Index / Work / Notes / About

Decision:

Use the approved mock's compact four-item primary navigation.

Alternatives:

- Home / Essays / Principles / Current / About.
- A direct mirror of the private vault.

Reason:

The newer project brief and selected direction favor a simpler public architecture. Principles and Current remain public secondary routes but do not compete for primary navigation before the content library grows.

## 2026-08-01 — Keep Stone & Current as concept, Processed Horizons as visual system

Decision:

Stone & Current describes the content philosophy. Processed Horizons describes the approved visual direction.

Alternatives:

- Replace the prior concept entirely.
- Use the visual style name as the whole brand story.

Reason:

The concepts solve different problems. Stone & Current explains why work, writing, faith, and principles belong together. Processed Horizons tells implementers how the site should look and behave.

## 2026-08-01 — Modern interface, old-future imagery

Decision:

Restrict retro-futurist processing primarily to landscape and editorial imagery.

Alternatives:

- Apply bitmap styling to the entire interface.
- Use unprocessed cinematic photography.

Reason:

The contrast creates a memorable identity without compromising readability or turning the site into pixel art, a retro game, or a themed interface.

## 2026-08-01 — Self-host fonts

Decision:

Use self-hosted variable font files for Newsreader and IBM Plex Sans.

Alternatives:

- Google Fonts runtime requests.
- System fonts only.

Reason:

Self-hosting produces predictable rendering, avoids third-party font requests, and supports good loading behavior when the used weights are limited and preloaded.

## 2026-08-01 — No CMS in version one

Decision:

Author content through repository Markdown and typed data.

Alternatives:

- Headless CMS.
- Database-backed editor.

Reason:

The publishing volume is small, Nik already maintains a private source vault, and a CMS would add infrastructure before there is a publishing workflow that needs it.

## 2026-08-01 — Use generated imagery only as production art, not evidence

Decision:

Generated processed landscapes may ship as atmospheric editorial art. Product screenshots and documentary claims must use real, verified sources later.

Alternatives:

- Use generated product screens.
- Use third-party stock imagery.

Reason:

Atmospheric landscape imagery expresses the visual concept without misrepresenting product evidence. Work pages must remain honest.

## 2026-08-01 — Static SEO with explicit public-content filtering

Decision:

Generate sitemap, RSS, metadata, robots.txt, canonical links, and JSON-LD only from public content.

Alternatives:

- Index every content file.
- Rely only on default framework metadata.

Reason:

The content pipeline includes drafts and private source boundaries. Public filtering must be intentional.

## 2026-08-01 — Place the journal inside a retro-space environment

Decision:

Use the selected retro-space mock as the visual source of truth: a centered cream publication over a cobalt planetary landscape, with a separate hero plate featuring a citrus tree, moon, orange terrain, and distant field station.

Alternatives:

- Keep the publication full-width with no outer environment.
- Apply space texture inside editorial sections.
- Use a photorealistic astronomical background.

Reason:

The outer environment creates the desired old-future contrast without compromising the clean reading surface. Separate raster assets keep the image system expressive while the existing typography, content hierarchy, navigation, and lower-page structure remain intact. Mobile removes the environmental background and returns the journal to the full viewport.

## 2026-08-01 — Keep the planetary environment subordinate

Decision:

Hold the outer environment roughly 20–30% below the hero's visual intensity. Use a darker, slightly desaturated navy, a narrow muted planet arc, and a sparse star field so the cream editorial shell remains the primary large surface.

Alternatives:

- Keep the brighter electric-blue field and oversized orange planet.
- Remove the space environment entirely.
- Reduce the central publication width to reveal more background.

Reason:

The background should establish the retro-futurist world without becoming the page's main focal point. Quieting the raster asset preserves the blue/orange identity and keeps the accepted shell width, hero crop, typography, and editorial rhythm unchanged.

## 2026-08-02 — Make the homepage a map and Explore the archive index

Decision:

Use the homepage as a concise path through Build, Study, and Write. Add Explore as the explicit archive map. Keep Build, Essays, Garden, Current, and About in primary navigation, with Principles and Commonplace available through Explore and the footer.

Alternatives:

- Keep every public area expanded on the homepage.
- Put all destinations in primary navigation.
- Collapse Essays, Garden, Commonplace, and Principles into one undifferentiated writing archive.

Reason:

The previous homepage repeated too much of the destination pages and made each section feel equally important. The revised hierarchy helps a first-time visitor understand Nik, Fresh Industries, InflateMate, the Build, Study, Write cycle, and the different kinds of public thinking without changing the established visual identity.
