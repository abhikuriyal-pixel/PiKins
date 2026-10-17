# Screenshot provenance and credits

## Current published set

The redesigned page uses **26 scenes in both Light and Dark**, from the paired review batch. The 52 original PNGs and 52 lossless WebP previews are in `assets/screenshots/`. Their capture timestamps, source scene IDs, native dimensions and SHA-256 hashes are recorded in [manifest.json](assets/screenshots/manifest.json).

The original review images, full capture notes, scene catalogue and earlier batch remain in the repository:

- [Scene catalogue](https://github.com/abhikuriyal-pixel/PiKins/blob/main/landing-page/captures-review/CATALOGUE.md)
- [Capture notes and limitations](https://github.com/abhikuriyal-pixel/PiKins/blob/main/landing-page/captures-review/README.md)
- [Original paired manifest](https://github.com/abhikuriyal-pixel/PiKins/blob/main/landing-page/captures-review/manifest.json)
- [Superseded initial batch](https://github.com/abhikuriyal-pixel/PiKins/tree/main/landing-page/captures-review/initial-batch)

The images in that screenshot set are captures of PiKins, not recreated interfaces. Chief, Ada, Lin and DocFoo used `openai-codex/gpt-6-luna`; Mira used `openai-codex/gpt-6.1-sol` for Marimo creation and live pairing. The capture session used an isolated demonstration profile, not the owner’s working profile.

Human-authored inputs include the fictional workshop notes, role instructions, formatting preference, meeting-brief skill and personal note. The four-paper collection was already indexed before this session; the selected query model is not claimed to have performed its earlier scan/indexing. The app’s answers, delegated reports, pending decisions and tool results were generated through their respective workflows.

The four small animal-bot companions above the hero preview use PiKins-rendered Chief, Ada, Lin and Mira avatars in `assets/brand/team/`. The wizard hat on Chief, lab coat and round glasses on Ada, and cap on Mira come from the native accessory renderer with the same original animal seeds and colors; Lin stays unaccessorized. The cyan DocFoo owl sits above the Cross-document answer panel, with its original Genie screen logo and native logo transform. All five use the app’s layered SVG structure, subtle whole-pixel gestures, blinks/twitches and exact timing/keyframes exported from `src/renderer/styles/style.css`; the larger page-only hops and rotations have been removed. Static SVG fallbacks are used without JavaScript. The reproducible exporter is `tools/export-team-avatars.cjs`; it does not start the app, access a profile, change application source or overwrite the original four avatars. These are decorative artwork, not app captures or live agent activity. These page-only avatars are separate from the native captures; the latest hero retake is documented below.

## What is shown

- Chief’s workshop-planning delegation, teammate reports and pending file-write decision.
- An attached brief turned into downloadable Word and PDF files.
- Public Hacker News results through Composio, the app catalogue, and per-teammate tool grants. The catalogue is not evidence of a connected private email or messaging account.
- Element-linked comments and their applied edits to a local HTML file. The webpage comparison reveals those two captured states; it does not run an agent.
- Cross-document answers, citations, original figures, a saved retrieval replay, and an evidence-boundary response.
- Passage-linked questions, explanations, personal notes and an attached image; a teammate reusing document evidence.
- A locally executed Marimo oscillator simulation at damping ratios 0.06 and 0.5, and a teammate inspecting the open kernel. The controls on this webpage select captured notebook states; the simulation itself runs in the app. Its 5/5 numerical self-checks concern an educational model, not measured data or independent scientific certification.
- Routines, roles, memory, skills, model selection, clarification questions, and genuine pending code/notebook permissions. Decision states were captured before resolution or cancellation; no history was reset to manufacture a pending state. Routines were paused after capture; no scheduled results were manufactured.

The Telegram section is a **designed HTML/CSS phone illustration**, with scripted sample messages, not a captured Telegram session or an additional scene in the screenshot manifest. The visible caption identifies it as an example conversation. Its rounded frame follows the supplied visual reference. The chat uses Telegram’s official logo and doodle wallpaper, with iOS-style navigation, blue accents, light incoming/green outgoing bubbles, timestamps, read receipts and an attachment composer. It is an illustration, not a captured Telegram screen or a claim of pixel-exact parity with a particular client version. The messages describe the fictional workshop used elsewhere on the page and do not claim a new agent run. The attachment opens the existing generated sample PDF, copied unchanged into `assets/examples/workshop-brief.pdf`. The supplied real mobile screenshot remains unmodified and is not used in this illustration.

The example shows conversation continuity, a status question, and attachment delivery. Pairing is optional and requires the desktop to remain running, online and awake. It does not suggest phone-based approval of desktop-started work. Telegram bot chats are not end-to-end encrypted. No microphone session, personal-account integration result, or uploaded cloud backup is claimed.

## Capture and publication

Most originals are 2160 × 1500 at the display’s native scale. The compact document-output view is 2160 × 1200. Both themes have matching dimensions, logical viewports and native surface bounds for each scene.

Electron omits independent embedded Chromium surfaces from parent-page captures. Browser and notebook surfaces were captured separately and placed at their unchanged original pixel bounds in the parent capture. No interface, text, color, result, or account state was recreated. Source figures and embedded pages preserve their own colors in either app theme.

The hero pair was retaken with Chief and DocFoo unpinned in the regular app sidebar. Chief wears the native wizard hat, Ada the lab coat and round glasses, and Mira the cap, matching the decorative teammates above the screenshot. The requested cancelled reading-routine clarification turn and its associated records were removed from the isolated demo session, with an unedited backup retained; no remaining response content was changed. Both records verify the unpinned sidebar, accessories, absence of the cancelled question in the visible conversation, the same saved Chief response, and the refreshed native browser preview. The minimize control was defocused by a real mouse click, without CSS or pixel editing. The other 50 review captures are unchanged. The graph replay pair was also retaken with its canvas defocused; its records verify no keyboard focus outline. It depicts recorded retrieval, not a live visualization of model reasoning. Displayed retrieval and writer timings are not product benchmarks.

Publication copies the approved PNGs byte-for-byte and converts previews to lossless WebP at native dimensions. No color filters or image recoloring are applied to the screenshots. Review and publication hashes are updated together for documented native retakes; all other captures retain their original hashes.

## Third-party material

The document collection contains:

- [*Attention Is All You Need*](https://arxiv.org/abs/1706.03762), Vaswani et al.
- [*Longformer*](https://arxiv.org/abs/2004.05150), Beltagy et al.
- [*Big Bird*](https://arxiv.org/abs/2007.14062), Zaheer et al.
- [*FlashAttention*](https://arxiv.org/abs/2205.14135), Dao et al.

Limited excerpts and figures appear in the app demonstration. Their rights are not transferred by the site’s MIT license. Extracted document text may contain OCR errors. Service names, logos and the Marimo interface belong to their respective owners and do not imply endorsement. Telegram’s unmodified [logo](https://telegram.org/img/t_logo.svg) and [chat wallpaper](https://telegram.org/img/tgme/pattern.svg?1) are hosted locally under `assets/telegram/`; their source URLs and original hashes are recorded in that directory’s `NOTICE.txt`. They remain Telegram’s artwork and are not relicensed as PiKins-owned MIT assets.

The Linux download placeholders use the original monochrome Tux/Linux SVG from [Simple Icons](https://github.com/simple-icons/simple-icons/blob/develop/icons/linux.svg), rendered in the existing Light/Dark text colors with CSS masks. The unchanged SVG, CC0 license and attribution (including Tux creator Larry Ewing and Linux trademark ownership) are under [`assets/platforms/`](assets/platforms/NOTICE.txt). These disabled, coming-soon controls do not imply an available Linux release or any endorsement.

## Retired published set

The earlier page used 17 Light/Dark views from the DeepSeek demonstration. It has been replaced, not mixed with this set. Its [original assets and manifest](https://github.com/abhikuriyal-pixel/PiKins/tree/fdbc612/landing-page/assets/screenshots) and [original provenance](https://github.com/abhikuriyal-pixel/PiKins/blob/fdbc612/landing-page/SCREENSHOTS.md) remain in Git history.
