# Copy edit, November 4, 2026

Removed “Nikolas Manuel, but I go by Nik.” from the About introduction and deleted its unused style.

Edited the homepage, About, all seven project write-ups, five essays, seven garden notes, and the explanatory text for the two principles. The main changes are shorter explanations, fewer repeated endings, ordinary contractions, and headings that name their subject. The state-champion paragraph on About is unchanged.

The longer personal-encyclopedia and patience essays had repeated openers and closing lines that made the same point several times. Those passages are now connected paragraphs. The experiences and beliefs already in the writing remain the basis for the edits. No new biographical material was taken from the private vault.

Content titles, publication dates, project stages, technical stacks, quoted passages, and source destinations are unchanged. Essay reading times were recalculated from the edited text at 200 words per minute, rounded up. Archived Now content and commonplace quotations were not rewritten.

## References

Installed Humanizer globally for Codex using `npx --yes skills add blader/humanizer --global --agent codex --yes` and read its editing instructions. Used its mark, draft, review, and final-edit process alongside the three references supplied by Nik:

- [Humanizer by blader](https://github.com/blader/humanizer), MIT license.
- [Wikipedia: Signs of AI writing](https://en.wikipedia.org/wiki/Wikipedia:Signs_of_AI_writing), especially repetition, staged contrasts, exaggerated significance, and formulaic paragraph shapes.
- [Microsoft: Above all, simple and human](https://learn.microsoft.com/en-us/style-guide/brand-voice-above-all-simple-human), for direct, conversational wording.
- [Google: Voice and tone](https://developers.google.com/style/tone), for clear technical explanations and natural sentence flow.

These are editing references, not tests for whether a person or model wrote a passage. Names, quotations, specific details, and Nik’s meaning take priority over mechanically removing words.

## Verification

- `pnpm build`: 48 Astro files checked with no errors, warnings, or hints; 36 HTML pages generated.
- `pnpm check:links`: all 1,077 internal destinations, assets, and anchors pass.
- `pnpm check:agents`: passed.
- Prettier check: all edited files pass.
- Compared content metadata, block quotations, and Markdown link destinations with the previous commit. Only reading-time metadata changed.
- Reviewed About and Home at a 390-pixel mobile viewport in the Codex in-app browser. The removed name line is absent, and neither page has horizontal overflow. The wrestling anchor still opens the short paragraph, photo, and highlight player.
- Reviewed the revised essay and Bara copy in the browser. Bara’s saved animation viewer remains present.
- Reviewed the About introduction at the normal 1280-pixel desktop preview. Photos, video files, site artwork, and navigation destinations are unchanged.

Browser captures and the full before/after text audit are kept outside the public repository.
