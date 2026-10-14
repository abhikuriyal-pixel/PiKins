# PiKins

**Your AI teammates, together on your desktop.**

PiKins (formerly PiMinions) is a Windows desktop assistant with persistent conversations, a central Chief coordinator, approval-gated tools and an integrated DocFoo document-retrieval teammate.

[Download releases](https://github.com/abhikuriyal-pixel/PiKins/releases) · [Report a problem](https://github.com/abhikuriyal-pixel/PiKins/issues) · [Support](SUPPORT.md)

> **Code coming soon..**
> This repository currently hosts public documentation and binary releases. Application implementation and development history are maintained privately; no source-publication date is committed.

## Highlights

- Persistent named AI teammates, live replies and asynchronous Chief-coordinated task delegation.
- Isolated bot browsing and explicit action approvals.
- Document attachments, citations, figures and indexed DocFoo knowledge retrieval.
- One owner-only Telegram connection for every teammate: `/bot` switches bots, `/sync` refreshes recent history, and new conversations synchronize with the desktop. Select DocFoo to query it with ordinary text.
- A minimal black launch screen with the geometric PiKins wordmark and a loading bar; reduced-motion preferences are respected. The familiar app icon stays unchanged.
- Optional Marimo notebooks.
- Dark/light themes, locally stored conversations/settings and verified application updates.

## Install · Windows x64

Choose a version from [Releases](https://github.com/abhikuriyal-pixel/PiKins/releases):

| Asset | Use |
| --- | --- |
| `PiKins-<version>-win-x64-Setup.exe` | Standard NSIS installation |
| `PiKins-<version>-win-x64.zip` | Extract once, then run `PiKins.exe` |
| `SHA256SUMS.txt` | SHA-256 values for both downloads |

Verify your download in PowerShell and compare with that release's manifest:

```powershell
Get-FileHash .\PiKins-<version>-win-x64.zip -Algorithm SHA256
```

Releases are **unsigned**; Windows may show SmartScreen warnings. Do not bypass a warning without checking the repository, artifact and checksum. macOS, Linux and Windows ARM builds are not offered.

## First run and privacy

Connect a supported model provider in **Settings & providers → Providers**. InferX is bundled: connect an API key (or set `INFERX_API_KEY`), then use **Refresh model catalogue** in a model picker to discover new endpoints. Local llama.cpp is also available without an API key: run your own `llama-server` on port 8080 and refresh the catalogue to discover its loaded models. Provider/API usage may be billed by that provider. Optional integrations require their own setup; DocFoo can be installed from its dedicated space using the public [DocFoo CLI releases](https://github.com/abhikuriyal-pixel/docfoo-cli/releases).

Model requests and enabled integrations contact their providers. Provider credentials saved through the app use OS encryption; transcripts, library files and browser storage are not generally encrypted. Approved scripts/Python are not an OS sandbox. Review permissions and avoid sharing private content in issue reports.

## Profile storage

App metadata uses a local SQLite database with record-level writes in a dedicated worker. Existing `minions.json` profiles migrate automatically on first launch, preserving their original as `minions.pre-sqlite.json`. Conversations, attachments, skill documents and encrypted credentials remain in their existing storage; Koofr snapshots keep their portable JSON format.

The rename retains the original `PiMinions` profile folder and application/upgrade identity, so chats, settings and encrypted credentials stay available. The public app release series has been reset to PiKins v0.1.0; earlier PiMinions downloads were removed. Current builds use the PiKins filenames above.

Before updating, open the data folder from Settings, close PiKins, and copy that folder somewhere safe. Keep the recovery JSON until you are satisfied with the migration. **Do not reopen a migrated profile with pre-reset, JSON-only PiMinions builds**: those old binaries cannot read SQLite. The new PiKins v0.1.0 is the current SQLite-capable build, not the historical v0.1.0 binary. The database is not encrypted; existing OS-encrypted credential handling is unchanged.

## Release policy

Use **Settings & providers → Settings → Check for Updates** to check published stable releases manually. Downloads are checksum-verified; installation/restart waits until active work is safe to interrupt. Source-checkout builds cannot install updates over themselves. The one-time version reset requires a manual download for pre-reset installations: the older updater does not install an equal or lower version.

The GitHub repository is now named `PiKins`; old download links redirect. Published v0.1.0 binaries predate this repository rename and their updater rejects the new canonical asset URLs. Use manual downloads until a newer build includes the updated repository address; published binaries were not replaced for the rename.

At the maintainer's request, the previous public app releases and version tags were removed and the series restarted at PiKins v0.1.0. Going forward, versioned downloads are checksummed and never silently replaced. GitHub's automatic **Source code** archives contain this repository's documentation, not the application implementation. Packaged Electron runtime code remains inspectable.

## License and security

[MIT License](LICENSE), with third-party components under their respective licenses. The packaged app includes license notices for its bundled dependencies. See [SECURITY.md](SECURITY.md) for private vulnerability reporting.
