# About media — November 3, 2026

Added the two photographs supplied by Nik and a locally edited version of his supplied Google Drive video. These are local review changes; nothing was deployed and no Drive sharing setting was changed.

## Photos

- The tree photo replaces the introductory portrait placeholder. Its full 3:4 frame is preserved. The responsive WebP versions are 480 × 640 (112 KB) and 960 × 1280 (448 KB).
- The tournament photo replaces the wrestling photo placeholder. The full 1280 × 853 frame is preserved (125 KB WebP). The caption does not infer a school, event, year, or result from the photograph.
- The attachment originals remain untouched. Web derivatives exclude EXIF metadata. Actual dimensions set the media frames' proportions, preventing an unintended crop.

## Video

The supplied `State Finals Match.mov` is 3:39, 960 × 540, with arena audio. The local highlight edit is 44.6 seconds, H.264/AAC, and about 9.9 MB. It keeps six chronological segments, trims the long pre-match lead-in, tightens framing where the action remains visible, adds a short opening title using ink/paper/orange, and fades the ending. One draft cut was removed after visual review because the wrestlers moved too close to the edge. Arena sound is preserved with a peak limiter; no music, invented narration, or result overlay is added.

The inline player has a real opening-frame poster, native controls, `playsinline`, `preload="none"`, and a descriptive ambient-sound caption track. The 3:39 full version is linked below it. Both exports have their MP4 index at the front for progressive playback. Nik confirmed that he is the wrestler on the right. The opening title and poster now read “STATE FINAL / NIK MANUEL / ON THE RIGHT” so viewers can identify him in that shot. No opponent, score, event year, or result overlay is added.

The original MOV, time-coded source contact sheets, local speech review, edit plan, FFmpeg rendering script/filter graph, rendered contact sheet, and decode-verification record are retained outside the repository under the existing local `nikman-audit/wrestling-edit` working folder. The source is unchanged. The speech review found only a short opening spectator comment, outside the highlight cuts; the highlight track is arena ambience.

## Verification and limits

- Astro checks and the static build pass with 0 errors, warnings, or hints. All 1,230 internal links and assets pass.
- Both MP4s decode completely with video and audio present. Fast-start MP4 structure is verified.
- The local About route returns 200 and references the supplied images, responsive portrait, highlight, poster, caption file, and full-match link. All media return the expected MIME type and HTTP 206 byte ranges from the preview server.
- Source and edited contact sheets were inspected. The final crop sequence preserves the athletes within the reviewed frames.
- Local browser use is disabled in Work settings. This pass therefore does not claim browser playback, responsive visual QA, or a new website screenshot. The actual edit is available for review as an MP4.

Athlete identification is confirmed by Nik. Browser visual/playback QA remains unavailable under the current Work setting.
