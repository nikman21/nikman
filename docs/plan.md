# Implementation Plan

Date: 2026-08-01

Each ticket is intentionally small enough for an agent to execute independently after reading the design documentation and any directly touched files.

## Ticket 001 — Project Foundation

Goal:

Create the Astro TypeScript project.

Tasks:

- Configure Astro static output.
- Add strict TypeScript.
- Add format, type-check, test, and build scripts.
- Establish src, public, content, and docs structure.

Acceptance criteria:

- Development server starts.
- Astro check passes.
- Production build succeeds.
- Basic shell renders.

## Ticket 002 — Fonts and Global Tokens

Goal:

Create the Processed Horizons design foundation.

Tasks:

- Self-host Newsreader and IBM Plex Sans.
- Define color, type, spacing, grid, border, and motion tokens.
- Add global reset and focus styles.
- Add paper surface treatment and reduced-motion behavior.

Acceptance criteria:

- Tokens match design-direction.md.
- Text remains readable without font loading.
- Focus states are visible.
- Reduced motion is respected.

## Ticket 003 — Content Collections

Goal:

Create validated content architecture.

Tasks:

- Define note, project, and principle schemas.
- Add draft/public visibility fields.
- Add helpers that return public sorted content.
- Seed launch content.

Acceptance criteria:

- Invalid frontmatter fails type checking.
- Draft content does not appear in public helpers.
- A new content file can be added without component changes.

## Ticket 004 — Shared Page Shell

Goal:

Build the reusable document shell.

Tasks:

- Create BaseLayout.
- Add canonical metadata and Open Graph defaults.
- Add skip link.
- Add header, main, footer, and volume marker.

Acceptance criteria:

- Semantic landmarks exist.
- All routes share consistent metadata and navigation.
- Keyboard users can skip to main content.

## Ticket 005 — Responsive Navigation

Goal:

Implement Index / Work / Notes / About navigation.

Tasks:

- Build desktop navigation.
- Build accessible mobile disclosure.
- Add current-page state.
- Add hover, focus, and open/closed states.

Acceptance criteria:

- All links work.
- Menu is usable with keyboard and screen reader.
- No horizontal overflow at 320px.

## Ticket 006 — Processed Landscape Asset

Goal:

Create the approved four-color field landscape.

Tasks:

- Generate a standalone image matching the approved mock.
- Optimize responsive formats.
- Add descriptive alt text and image metadata.

Acceptance criteria:

- Asset uses three to five dominant colors.
- Dither remains clean at desktop and mobile sizes.
- No third-party copyrighted imagery ships.

## Ticket 007 — Homepage Hero Structure

Goal:

Recreate the approved split hero.

Tasks:

- Build 58/42 desktop grid.
- Add image field, headline, supporting copy, and primary action.
- Add field-image metadata and scale labels.
- Recompose for mobile.

Acceptance criteria:

- Layout closely matches approved-direction.png.
- Hero communicates builder, thinker, and long-horizon identity.
- Typography does not clip from 320px to wide desktop.

## Ticket 008 — Practice Loop

Goal:

Add the Build / Study / Write explanatory figure.

Tasks:

- Implement semantic text structure.
- Add restrained orthogonal connectors.
- Add accessible text alternative.
- Add mobile composition.

Acceptance criteria:

- The loop reads correctly without decoration.
- Connectors do not overlap labels.
- Screen-reader description is present.

## Ticket 009 — Homepage Editorial Index

Goal:

Build the three-part Current Work / Recent Note / Question index.

Tasks:

- Query featured public content.
- Render three ruled columns on desktop.
- Render ruled rows on mobile.
- Add sampled palette marks.

Acceptance criteria:

- Content is real and data-driven.
- No card containers are used.
- Links have hover and focus states.

## Ticket 010 — Homepage Deep Sections

Goal:

Complete the homepage story below the first frame.

Tasks:

- Add selected work.
- Add notes preview.
- Add principles preview.
- Add current and about previews.

Acceptance criteria:

- Sections have distinct responsibilities.
- Page remains calm and scannable.
- No fake metrics or testimonials appear.

## Ticket 011 — Work Index

Goal:

Create the public work archive.

Tasks:

- Render projects from the content collection.
- Support status and role metadata.
- Link to project details.

Acceptance criteria:

- InflateMate and Fresh Industries appear.
- Project claims match approved stable content.
- Layout uses editorial rows rather than generic cards.

## Ticket 012 — Work Detail

Goal:

Create reusable project detail pages.

Tasks:

- Add problem, audience, role, story, and decisions sections.
- Support optional verified screenshots.
- Add related writing links.

Acceptance criteria:

- Pages render from content files.
- Missing optional media does not leave placeholders.
- Claims do not exceed source material.

## Ticket 013 — Notes Index

Goal:

Create the public writing archive.

Tasks:

- Query published notes.
- Add category metadata.
- Add featured-note treatment.
- Add RSS link.

Acceptance criteria:

- Draft notes are excluded.
- Dates and descriptions are readable.
- Archive works without client JavaScript.

## Ticket 014 — Note Detail

Goal:

Create a durable essay reading template.

Tasks:

- Add article header and metadata.
- Style long-form Markdown.
- Add related principles and next-note navigation.

Acceptance criteria:

- Reading measure stays comfortable.
- Heading hierarchy is valid.
- Launch essay preserves Nik's voice.

## Ticket 015 — Principles

Goal:

Publish only accepted principles.

Tasks:

- Create principle index/detail treatment.
- Include question, practices, and why chosen.
- Add stable anchors.

Acceptance criteria:

- Both accepted principles are public.
- No candidates or private counts are exposed.
- Personal context remains framed as Nik's experience.

## Ticket 016 — Current

Goal:

Create a concise dated current snapshot.

Tasks:

- Add building, learning, practicing, and thinking sections.
- Display last-updated date.
- Keep source typed and easy to edit.

Acceptance criteria:

- Current is not a task dashboard.
- Date is visible.
- No stale reading/listening claims are invented.

## Ticket 017 — About

Goal:

Connect Nik's identities in a short personal essay.

Tasks:

- Add builder/founder context.
- Connect work, study, faith, and long-term direction.
- Add links to work, notes, and principles.

Acceptance criteria:

- Page does not read like a résumé.
- No invented biography or contact information.
- Tone remains candid and in progress.

## Ticket 018 — Responsive Pass

Goal:

Make every route intentional across breakpoints.

Tasks:

- Test large desktop, laptop, tablet, and mobile.
- Recompose image metadata and diagrams.
- Check long titles and content rows.
- Verify touch target sizes.

Acceptance criteria:

- No clipped content or horizontal overflow.
- Mobile does not feel like a compressed desktop.
- Navigation and typography remain usable at 320px.

## Ticket 019 — Interaction and Motion

Goal:

Add restrained progressive enhancement.

Tasks:

- Add link underline transitions.
- Add optional reveal behavior.
- Respect reduced motion.
- Avoid persistent animation.

Acceptance criteria:

- Site works with JavaScript disabled.
- Motion never blocks reading or navigation.
- Reduced-motion mode removes spatial animation.

## Ticket 020 — Accessibility Audit

Goal:

Verify WCAG-conscious implementation.

Tasks:

- Check semantics and headings.
- Check keyboard flows.
- Check contrast and focus.
- Check alt text and menu states.

Acceptance criteria:

- No serious automated accessibility violations.
- All primary actions are keyboard reachable.
- Decorative assets are ignored by assistive technology.

## Ticket 021 — SEO and Discovery

Goal:

Add personal-site search and sharing foundations.

Tasks:

- Add route titles and descriptions.
- Add canonical URLs.
- Add Open Graph image.
- Add Person JSON-LD.
- Add sitemap, robots.txt, and RSS.

Acceptance criteria:

- Only public content is discoverable.
- Metadata renders in static HTML.
- Social image has correct dimensions.

## Ticket 022 — Performance

Goal:

Keep the site extremely fast.

Tasks:

- Optimize image sizes and formats.
- Preload only critical fonts.
- Minimize client JavaScript.
- Inspect output and Core Web Vitals risks.

Acceptance criteria:

- Homepage ships no unnecessary framework JavaScript.
- Images have dimensions and responsive sources.
- Build output contains no accidental oversized assets.

## Ticket 023 — Visual Design QA

Goal:

Compare implementation to the approved target.

Tasks:

- Capture matching desktop and mobile views.
- Compare typography, spacing, colors, imagery, and copy.
- Fix P0–P2 mismatches.
- Record design-qa.md.

Acceptance criteria:

- design-qa.md says final result: passed.
- Remaining P3 refinements are documented.

## Ticket 024 — Deployment Documentation

Goal:

Make deployment repeatable.

Tasks:

- Document local setup.
- Document Vercel deployment.
- Document content authoring.
- Document verification commands.

Acceptance criteria:

- A new contributor can run and deploy the site from README.md.
- No server or CMS setup is required.
