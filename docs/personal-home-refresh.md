# Personal home refresh — November 2, 2026

Implemented on `codex/personal-home-project-demos` and approved by the owner for a push to `main` on November 3, 2026. Validation below describes the local build; it does not claim a hosted deployment.

## What changed

- Home now leads with a short introduction, work, writing, video, and a dated personal update. It retains the existing paper, cobalt, orange, serif typography, and landscape artwork.
- Build includes InflateMate, Fresh Infra, Bara, Osef, Fresh TV, and The Line List. Fresh Industries remains their home with its own existing page, without taking over the project index.
- Project pages describe the purpose, a concrete decision, technical foundations, and current stage. Prototype and development labels avoid implying that every project is a released product.
- Navigation consistently uses Build, Writing, Now, About, and Explore. About anchors and topic links work. Related reading explains connections among public pieces.
- November's Now edition uses the owner's supplied reading, listening, exercise, diet, writing, content, AI animation, infrastructure, Go, Docker, Linux, and Fresh Industries update. August remains archived.
- YouTube, LinkedIn, and X links use the owner's supplied URLs. Two verified public YouTube uploads are embedded on demand, with external fallback links.
- One selected working essay was adapted for local review, with an anonymous customer example. Three new notes are labeled Growing or Seedling. Raw vault material was not imported wholesale.

## Artifact provenance and boundaries

| Public artifact                             | Source and meaning                                                                                                                                                                       |
| ------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `inflatemate-rental-week.webp`              | Existing public InflateMate marketing preview, explicitly marked sample data. It depicts a workflow; it is not a production customer record or a claim that a specific customer used it. |
| `bara-editor.webp`                          | Actual native editor screenshot with demonstration artwork.                                                                                                                              |
| `bara-frame-*.webp`, `bara-agent-edit.webp` | Actual exported animation fixtures. The saved sequence and separate agent edit are distinct files.                                                                                       |
| `bara-arm-wave.mp4`                         | Unmodified native export, 960 × 720, 48 frames at 24 fps, silent.                                                                                                                        |
| `osef-home.webp`, `osef-library.webp`       | Actual working prototype screens, with synthetic test material.                                                                                                                          |
| YouTube videos                              | The owner's public uploads, verified through the official channel.                                                                                                                       |

Osef's interactive capture example and InflateMate's pricing example were removed at the owner's request, including their client code and demo links. Their actual screenshots and project write-ups remain. Bara's viewer shows real exported artifacts; it does not run the native editing engine.

The Fresh Infra signing example and Fresh TV sample guide were removed at the owner's request. Fresh Infra now presents the actual toolkit and its development status. Fresh TV links to the owner-supplied `https://tv.freshindustries.co` destination, including a direct link from its project card. This environment reported `ERR_NAME_NOT_RESOLVED` when checking that domain; the supplied address was retained without guessing another one.

The follow-up polish uses [Unslop by Damir Sokolovsky](https://github.com/heydamir/unslop), CC BY 4.0. See [the audit and direction](unslop-polish.md). It preserves the existing art direction while simplifying headings, metadata, and navigation.

Fresh Infra's page was grounded in the current repository and development work. It describes a private toolkit in development, not completed production migration or provider acceptance. Other repositories were inspected read-only and remain unchanged.

No customer identifiers, actual financial records, credentials, server addresses, raw inboxes, private biography, or unpublished story details were added. Machine-specific asset manifests and review screenshots stay outside this repository.

## Verification

- `pnpm build`: Astro check and static generation; 0 errors, warnings, or hints.
- `pnpm check:links`: all internal destinations, assets, and anchors across the built HTML pages.
- `pnpm check:agents`: structured data, manifest, aliases, crawler directives, and sitemap policy.
- Touched source, scripts, configuration, and new documentation checked with Prettier; `git diff --check` passes. The repository-wide formatting command also reports older untouched documentation/configuration formatting differences.
- Browser verification against the production preview at phone, intermediate, and desktop widths; see `design-qa.md` for interactions, screenshots, and limits.

The build exposed a dependency-resolution issue: generated Astro output imported `cookie` without a direct application dependency and found an older CommonJS copy outside this repository. Pinning the existing transitive version, `cookie@2.0.1`, as a direct dependency makes the production build resolve its intended ESM API. No broad dependency upgrade was made.

## Reviewing locally

Run `pnpm build` and `pnpm preview --host 127.0.0.1 --port 4322`, then open `http://127.0.0.1:4322/`. The source flags select which essays, notes, and projects appear in the build. Private research, source recordings, and working manifests remain outside the repository.
