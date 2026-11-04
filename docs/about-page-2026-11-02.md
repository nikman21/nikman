# About page

The About page presents Nik's story, current work, and interests within the existing paper, cobalt, orange, Newsreader, and IBM Plex Sans design. The owner approved the completed refresh for a push to `main` on November 3, 2026.

## Content and layout

1. A friendly introduction with Nik's full and preferred name, age, Texas base, and supplied outdoor photo.
2. ASU, the Informatics degree, December 2023 graduation, and the transition into building work of his own.
3. A short wrestling section covering the state championship and how discipline and persistence carried into everyday life and building businesses. It links to the existing public principle.
4. Co-founding Fresh Industries and current work: InflateMate, Hatch, Fresh Infra, Bara, Osef, and Nima. Existing project pages are linked; unverified product addresses and release claims are omitted.
5. Reading, music, getting outside, and interests beyond coding. Books come from the confirmed Now edition.
6. Why Nik shares his learning, with an existing public YouTube video and a writing link.
7. Four current rabbit holes, expressed as questions rather than expertise claims.
8. Writing, YouTube, GitHub, LinkedIn, X, and a LinkedIn contact route.

The biography uses short first-person paragraphs and different editorial proportions. It has no skill ratings or resume timeline. The owner supplied the biographical facts, current interests, photos, video, and social links. Private research and source drafts remain outside the public site and release documentation.

## Media

Current asset choices and verification are recorded in [about-media-2026-11-03.md](about-media-2026-11-03.md). The two supplied photos and the edited wrestling video replace the original placeholders. The full-match video is available beneath the highlight player.

Media is configured in `src/data/about.ts`. `AboutMedia.astro` uses actual dimensions, alt text, captions, responsive image sources where supplied, and a labeled placeholder for a null asset. Images keep their full proportions. Video assets require a poster and use native controls, `playsinline`, `preload="none"`, and an optional caption track.

## Verification

- Production build and Astro checks pass with 0 errors, warnings, or hints.
- Internal destinations, assets, structured data, and discovery checks pass.
- The expanded layout was inspected at desktop, intermediate, and phone sizes before the supplied personal media was added. Section links worked and no horizontal overflow was observed.
- The YouTube player loads after Play is pressed and was checked within its phone container.
- The latest personal media and video exports pass file and server checks. A final browser visual/playback pass for those assets remains unavailable because local browser access is disabled in Work settings.
- Fonts, colors, and brand assets reuse the existing site. No additional image, animation, video, or UI package was added.

The vault remains unchanged. No birth date, named opponent, score, event year, customer identity, private address, or unsupported achievement was inferred.
