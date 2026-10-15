# PiKins

**Your AI teammates, together on your desktop.**

PiKins is a Windows desktop assistant for working with persistent AI teammates, coordinating tasks, browsing, and asking questions about your documents.

[Download](https://github.com/abhikuriyal-pixel/PiKins/releases) · [Report an issue](https://github.com/abhikuriyal-pixel/PiKins/issues) · [Support](SUPPORT.md)

> Code coming soon.

## Features

- Persistent conversations with named teammates and a Chief coordinator.
- Task delegation, workspace tools, browsing, and action approvals.
- DocFoo document retrieval with citations, figures, study comments, and notes.
- Telegram conversations synchronized with the desktop.
- Optional Marimo notebooks, Composio integrations, and encrypted Koofr backups.
- Dark and light themes, configurable models, and background operation from the system tray.

## Install

PiKins supports **Windows x64**.

| Download | Use |
| --- | --- |
| `PiKins-0.1.0-win-x64-setup.exe` | Install PiKins |
| `PiKins-0.1.0-win-x64-portable.zip` | Extract and run `PiKins.exe` |
| `SHA256SUMS.txt` | Check download integrity |

Download the files from [Releases](https://github.com/abhikuriyal-pixel/PiKins/releases). To check a download in PowerShell:

```powershell
Get-FileHash .\PiKins-0.1.0-win-x64-portable.zip -Algorithm SHA256
```

Compare the result with `SHA256SUMS.txt`. The application is unsigned, so Windows may display a SmartScreen warning.

## Getting started

1. Open **Settings & providers → Providers** and connect a model provider.
2. Create a teammate, choose its model, and start a conversation.
3. Open DocFoo's space to install the document reader and add your documents.
4. Configure optional integrations in Settings.

Closing the window keeps PiKins running in the system tray. Use the tray menu to quit. **Check for Updates** in Settings checks for a newer release.

## Privacy

Conversations and enabled integrations send information to the providers you choose, which may charge for usage. Saved credentials use Windows encryption; chats, documents, and browser storage are not encrypted by default. Review requested permissions before allowing tools or scripts to run.

Do not include credentials or private content in issue reports. See [SECURITY.md](SECURITY.md) for vulnerability reporting.

## License

[MIT](LICENSE). Bundled third-party components retain their respective licenses.
