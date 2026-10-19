# Screenshot provenance and credits

## Current published set

The redesigned page uses **26 selected scenes in both Light and Dark**, from the paired review batch and the added public Google Maps demonstration. The 52 original PNGs and 52 lossless WebP previews are in `assets/screenshots/`. Their capture timestamps, source scene IDs, native dimensions and SHA-256 hashes are recorded in [manifest.json](assets/screenshots/manifest.json).

The complete review set still contains **27 scenes / 54 original PNGs**. The Live Python approval pair (`16-marimo-live-pairing-approval`) remains review-only after removal of its Security subtab; its originals and provenance have not changed.

The original review images, full capture notes, scene catalogue and earlier batch remain in the repository:

- [Scene catalogue](https://github.com/abhikuriyal-pixel/PiKins/blob/main/landing-page/captures-review/CATALOGUE.md)
- [Capture notes and limitations](https://github.com/abhikuriyal-pixel/PiKins/blob/main/landing-page/captures-review/README.md)
- [Original paired manifest](https://github.com/abhikuriyal-pixel/PiKins/blob/main/landing-page/captures-review/manifest.json)
- [Superseded initial batch](https://github.com/abhikuriyal-pixel/PiKins/tree/main/landing-page/captures-review/initial-batch)

The images in that screenshot set are captures of PiKins, not recreated interfaces. Earlier Chief, Ada, Lin and DocFoo captures used `openai-codex/gpt-6-luna`; Mira used `openai-codex/gpt-6.1-sol` for Marimo creation and live pairing. The replacement technical hero uses **`openai-codex/gpt-6.1-sol`, low reasoning**, for Chief, Ada, Lin and DocFoo answering, with no new Luna calls. Capture sessions use isolated demonstration profiles, not the owner’s working profile.

Human-authored inputs include the fictional workshop notes, role instructions, formatting preference, meeting-brief skill and personal note. The four-paper collection was already indexed before this session; the selected query model is not claimed to have performed its earlier scan/indexing. The app’s answers, delegated reports, pending decisions and tool results were generated through their respective workflows.

The four small animal-bot companions above the hero preview use PiKins-rendered Chief, Ada, Lin and Mira avatars in `assets/brand/team/`. The wizard hat on Chief, lab coat and round glasses on Ada, and cap on Mira come from the native accessory renderer with the same original animal seeds and colors; Lin stays unaccessorized. The cyan DocFoo owl sits above the Cross-document answer panel, with its original Genie screen logo and native logo transform. All five use the app’s layered SVG structure, subtle whole-pixel gestures, blinks/twitches and exact timing/keyframes exported from `src/renderer/styles/style.css`; the larger page-only hops and rotations have been removed. Static SVG fallbacks are used without JavaScript. The reproducible exporter is `tools/export-team-avatars.cjs`; it does not start the app, access a profile, change application source or overwrite the original four avatars. These are decorative artwork, not app captures or live agent activity. These page-only avatars are separate from the native captures; the latest hero retake is documented below.

## What is shown

- Chief’s London training demo: the original human prompt, Lin’s Maps research, completed team activity and Ada’s fictional exercise preview. The FlashAttention intro remains separate; earlier delegation framings are archived.
- An attached brief turned into downloadable Word and PDF files.
- Public Hacker News results through Composio, the app catalogue, and per-teammate tool grants. The catalogue is not evidence of a connected private email or messaging account.
- Ada’s real browser search for museums near the British Museum in London on public Google Maps. Native Light/Dark captures retain Google’s branding and map-data attribution. The actual navigation, approved search submission and response are recorded in `captures-review/persistent-browser-maps-run.json`. No signed-in account, personal-location permission, booking or recurring task was used. The task was complete before capture; access was paused, temporary permissions were revoked and the isolated app was closed afterwards.
- Element-linked comments and their applied edits to a local HTML file. The webpage comparison reveals those two captured states; it does not run an agent.
- Cross-document answers, citations, original figures, a saved retrieval replay, and an evidence-boundary response.
- Passage-linked questions, explanations, personal notes and an attached image; a teammate reusing document evidence.
- A locally executed Marimo oscillator simulation at damping ratios 0.06 and 0.5, and a teammate inspecting the open kernel. The controls on this webpage select captured notebook states; the simulation itself runs in the app. Its 5/5 numerical self-checks concern an educational model, not measured data or independent scientific certification.
- Routines, roles, memory, skills, model selection, clarification questions, and genuine pending code/notebook permissions. Decision states were captured before resolution or cancellation; no history was reset to manufacture a pending state. Routines were paused after capture; no scheduled results were manufactured.

The Telegram section is a **designed HTML/CSS phone illustration**, with scripted sample messages, not a captured Telegram session or an additional scene in the screenshot manifest. The visible caption identifies it as an example conversation. Its rounded frame follows the supplied visual reference. The chat uses Telegram’s official logo and doodle wallpaper, with iOS-style navigation, blue accents, light incoming/green outgoing bubbles, timestamps, read receipts and an attachment composer. It is an illustration, not a captured Telegram screen or a claim of pixel-exact parity with a particular client version. The messages describe the fictional workshop used elsewhere on the page and do not claim a new agent run. The attachment opens the existing generated sample PDF, copied unchanged into `assets/examples/workshop-brief.pdf`. The supplied real mobile screenshot remains unmodified and is not used in this illustration.

The example shows conversation continuity, a status question, and attachment delivery. Pairing is optional and requires the desktop to remain running, online and awake. It does not suggest phone-based approval of desktop-started work. Telegram bot chats are not end-to-end encrypted. No microphone session, personal-account integration result, or uploaded cloud backup is claimed.

## Capture and publication

Most originals are 2160 × 1500 at the display’s native scale. The compact document-output view is 2160 × 1200; the corrected clarification and routine-editor views are 1920 × 1275, and the current London delegation view is 2160 × 1500. Both themes have matching dimensions, logical viewports and native surface bounds for each scene.

Electron omits independent embedded Chromium surfaces from parent-page captures. Browser and notebook surfaces were captured separately and placed at their unchanged original pixel bounds in the parent capture. No interface, text, color, result, or account state was recreated. Source figures and embedded pages preserve their own colors in either app theme.

The current hero pair shows the **human request fully visible above all three native handoff cards**. The user-approved wording asks Chief to coordinate a FlashAttention prototype, with DocFoo gathering indexed evidence, Ada designing and Lin implementing. A fresh isolated run follows that request: Ada saves the cited design, Lin waits for it, implements the NumPy CPU prototype and executes **116/116 passing numerical/contract checks**, then generates the report from those saved results. Colored clickable avatar/name chips, “View exchange” disclosures and inline `@mention` chips remain native app UI. Previous conversations are not rewritten; the same completed new conversation/report is photographed in both themes without further model calls. This is forward-only, unmasked, dropout-free CPU correctness checking—not a GPU kernel, performance benchmark, measured peak-RAM result or production-readiness claim. Storage counts are analytical. Later genuine Lin follow-ups replace the basic report with a professional engineering layout, actual error chart, coverage tables and linked source notes, using larger 18px body/16px table-and-chart text and a 40px title at 100% page zoom. The experiment code, tests, results and design remain byte-identical; only the report is regenerated. [Exact request, actual run records, artifacts and limitations](captures-review/technical-workflow/PROVENANCE.md).

The native browser report, two paused routines and real team activity remain visible. Chief and DocFoo stay unpinned; Chief retains the wizard hat, Ada the lab coat and round glasses, and Mira the cap. Both themes use the same real response and report, 1440 × 1000 logical viewport and native 2160 × 1500 capture size. A real mouse click defocuses the window control; no app CSS or screenshot pixels are edited. The earlier workshop hero pair and previews are archived unchanged in `captures-review/technical-workflow/previous/`. That hero retake preserved the other 52 review PNGs and 100 published image assets. Subsequent clarification/routine corrections are documented below.

The graph replay pair was also retaken with its canvas defocused; its records verify no keyboard focus outline. It depicts recorded retrieval, not a live visualization of model reasoning. Displayed retrieval and writer timings are not product benchmarks.

Publication copies the approved PNGs byte-for-byte and converts previews to lossless WebP at native dimensions. No color filters or image recoloring are applied to the screenshots. Review and publication hashes are updated together for documented native retakes; all other captures retain their original hashes.

### Clarification and routine-editor corrections

The Clarifying questions pair now shows a fresh, actual **pending Q&A panel** with Goal / Time / Confirm tabs, choices, a custom-answer option and Next—not cancelled questions or unrelated approvals. Chief uses **`openai-codex/gpt-6.1-sol`, low reasoning** for the single new `qna` call. The selected option remains an unsubmitted draft in both themes; the batch is cancelled afterwards without creating a routine.

The Routines pair now foregrounds the native **Edit routine** dialog for Ada’s paused **Morning source check**, with execution bot, instructions, daily 09:00 schedule, timezone and pause notice. It is closed without saving; no routine executes. Its blurred backdrop is native app UI, and the cancellation toast expires before capture.

Both pairs use a compact 1280 × 850 logical viewport / **1920 × 1275 native PNG**, at 100% zoom, with no cropping, resizing or retouching. Original conversations/results remain unchanged. The [capture records and superseded originals](captures-review/decision-retakes/README.md) preserve the provenance chain. Only these four review captures and eight published assets are replaced; the other **50 review PNGs and 96 published image assets**, including the hero, retain their hashes.

### Chief delegation framing

Chief delegation now uses a distinct **London railway-station training demo**, rather than repeating the FlashAttention intro. Both themes are scrolled to the original human prompt at the beginning. Lin’s genuine Google Maps research exchanges, completed team activity and Ada’s exercise preview remain visible in the native app.

The actual workflow uses **`openai-codex/gpt-6-luna`, low reasoning**, as requested. Chief explicitly continued from Lin’s completed research to Ada’s exercise build. This is a fictional product demonstration, not clinically validated training or live emergency routing; further exercise review was stopped at the user’s request. Captures use **16px conversation font, 1440 × 1000 logical / 2160 × 1500 native size and 100% zoom**, without message or pixel editing. [Corrected selection run, limitations and superseded framing](captures-review/london-training-clean/README.md). A fresh run corrects the underlying delegation: Chief explicitly assigns station selection, Lin chooses Waterloo without asking which station, and the original human prompt remains unchanged. The complete real research exchange is expanded in both captures. The report was subsequently restyled directly by the main coding assistant, not by another bot call: restrained paper-and-ink layout with **28px body, 72px title and 26px tables** at 100% zoom. Exercise logic, patient cases, answer key and citations are unchanged; the original report is archived in `london-training-clean/report-original/`. A subsequent renderer fix keeps interleaved follow-ups in chronological position instead of updating an earlier card with a later request; both native themes were recaptured with unchanged chats and exercise files. Only the delegation pair and four published PNG/WebP assets change; the intro, clarification/routine corrections and all other images retain their hashes.

### Browser comparison scale correction

The old after capture enlarged the embedded webpage even though its outer dimensions matched the before capture. Its native page surface has been recaptured from the unchanged, actual edited [HTML source](captures-review/browser-comparison/workshop-report-after.html), at the before image’s **939 × 666 CSS-pixel viewport, 100% page zoom and 1.5× display scale**. The native app’s normal hidden-scrollbar styling is retained. No page content, font sizes or layout styles were rewritten to fit the image.

Only that native surface was replaced, at its original **135, 362 / 1409 × 999 pixel bounds**. The reviewed app chrome and genuine recorded response are pixel-identical outside that rectangle. The unedited page eyebrow matches the before capture pixel-for-pixel, verifying page scale and origin. The longer edited title still wraps naturally; resulting vertical layout changes are content changes, not zoom changes. No new model run or fabricated response was used.

The [retake record](captures-review/browser-comparison/retake.json) includes source/capture hashes, computed typography, zoom, viewport and verification results. Original enlarged after captures are archived in `captures-review/browser-comparison/originals/`; the before pair and the other 48 existing capture PNGs were not changed by that correction. The reproducible native capture tool is `tools/retake-browser-comparison.cjs`; `python landing-page/tools/optimize-images.py --scene browser-after` republishes only the corrected scene, preserving every other PNG/WebP byte-for-byte.

### Focus-outline retakes

The Light/Dark pairs for **Live kernel inspection** (`25-marimo-live-pairing-result`, published as `pairing`), **Study partner → Teammate access** (`12-teammate-reuses-docfoo-evidence`, published as `evidence`) and **Office** (`03-attachments-skill-and-document-outputs`, published as `documents`) were natively recaptured after a real mouse click on non-interactive saved response text. Each capture verifies that the minimize button is neither focused nor focus-visible, with `outlineStyle: none` and `outlineWidth: 0px`; native parent paint also matches the selected theme. Dimensions remain 2160 × 1500 at a 1440 × 1000 logical viewport, or 2160 × 1200 / 1440 × 800 for Office, with the original font size. Office is framed around the original attachment request and saved Word/PDF outputs. No CSS or screenshot pixels were edited to remove the focus borders.

Only saved demo conversations were opened. No new model calls, notebook execution or replacement responses were used; all four demo session files remained byte-for-byte unchanged. The kernel-inspection screenshot shows the existing inspection report, not a newly running kernel. The original focused captures and [verification record](captures-review/focus-retakes/retake.json) remain in `captures-review/focus-retakes/`. The other 48 review PNGs are unchanged. Publication regenerates only `pairing`, `evidence` and `documents`, preserving every other published PNG/WebP and its hash. Browser checks scan all published screenshot pairs for minimize-button focus outlines, with stricter checks for these three corrected views.

## Third-party material

The public Google Maps screenshot is a real website interaction, not a recreated map or a private-account view. Google Maps branding, map-data credits, public listing photos and place names remain in the native capture and belong to their respective owners. They are not relicensed under the site’s MIT license and do not imply endorsement. Place ratings, opening hours and results are historical capture content, not live recommendations or independently verified current information.

The document collection contains:

- [*Attention Is All You Need*](https://arxiv.org/abs/1706.03762), Vaswani et al.
- [*Longformer*](https://arxiv.org/abs/2004.05150), Beltagy et al.
- [*Big Bird*](https://arxiv.org/abs/2007.14062), Zaheer et al.
- [*FlashAttention*](https://arxiv.org/abs/2205.14135), Dao et al.

Limited excerpts and figures appear in the app demonstration. Their rights are not transferred by the site’s MIT license. Extracted document text may contain OCR errors. Service names, logos and the Marimo interface belong to their respective owners and do not imply endorsement. Telegram’s unmodified [logo](https://telegram.org/img/t_logo.svg) and [chat wallpaper](https://telegram.org/img/tgme/pattern.svg?1) are hosted locally under `assets/telegram/`; their source URLs and original hashes are recorded in that directory’s `NOTICE.txt`. They remain Telegram’s artwork and are not relicensed as PiKins-owned MIT assets.

The Linux download placeholders use the original monochrome Tux/Linux SVG from [Simple Icons](https://github.com/simple-icons/simple-icons/blob/develop/icons/linux.svg), rendered in the existing Light/Dark text colors with CSS masks. The unchanged SVG, CC0 license and attribution (including Tux creator Larry Ewing and Linux trademark ownership) are under [`assets/platforms/`](assets/platforms/NOTICE.txt). These disabled, coming-soon controls do not imply an available Linux release or any endorsement.

## Retired published set

The earlier page used 17 Light/Dark views from the DeepSeek demonstration. It has been replaced, not mixed with this set. Its [original assets and manifest](https://github.com/abhikuriyal-pixel/PiKins/tree/fdbc612/landing-page/assets/screenshots) and [original provenance](https://github.com/abhikuriyal-pixel/PiKins/blob/fdbc612/landing-page/SCREENSHOTS.md) remain in Git history.
