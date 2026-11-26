# sdb mode

Use sdb mode when you need more than the web remote can do:

- an sdb shell
- launching, killing or listing apps from the command line
- pushing or pulling files on the TV

It replaces steps 2 and 4 of SKILL.md. Step 3 (start the session in the web app) and the ending steps stay the same.

It needs the Tizen Studio CLI, and Rosetta 2 on Apple Silicon. Run `preflight.sh --sdb` first. For installing either one, see [troubleshooting.md](troubleshooting.md). sdb mode was verified on a 2024 Samsung DU7200F (Tizen 8.0) and a 2023 Samsung CU7000 (Tizen 7.0).

## Start the tunnel

Run this with Bash `run_in_background`, with sdb on PATH in the same command:

```bash
export PATH="$HOME/tizen-studio/tools:$HOME/tizen-studio/tools/ide/bin:$PATH"; tvlabs connect --session <session_id> --headless
```

`tvlabs connect` looks for `sdb` once, at startup. If it doesn't find it, the SSH tunnel still comes up, but the Tizen setup never runs:

- `/status` stays `"disconnected"`.
- `/_dev/certificate` returns 404.
- Only `~/.tvlabs/logs/tvlabs.log` explains why.

The Bash tool's shell doesn't necessarily load `~/.zshrc`, so set PATH in the command itself. If an earlier tunnel is still running, stop it first (TaskStop) so port 26099 is free.

Then:

1. Read the background output for `Status API listening on port N`.
2. Poll `curl -s localhost:N/status` until it shows `"state":"connected"`.
3. Run `sdb devices`. It should list one device, `<ip>:26101`. Don't run `sdb connect`.

On webOS sessions, `/status` includes the SSH key's passphrase in plain text. Don't paste that output into chat.

## Build, sign, install and launch

```bash
.claude/skills/tvlabs-tizen-launch/scripts/build-sign-install.sh --port N
```

It takes about 30 seconds and stops at the first step that fails:

1. Checks the tunnel and finds the TV's sdb serial.
2. Builds into a temp folder.
3. Downloads `/_dev/certificate` and recreates the `tvlabs` signing profile.
4. Packages a signed `.wgt`.
5. Pushes it and runs `sdb shell 0 vd_appinstall <app-id> <path>`.
6. Launches it with `0 was_execute` and checks `0 applist`.

`tizen install` fails through the tunnel with "There is no connected target". The tunnel's sdb listener (Grove's `SDBListener`) doesn't answer `host:track-devices`, and `sdb install` only pushes the file.

Options: `--skip-build` reuses the last bundle, `--no-launch` installs only, and `--serial` picks the TV when more than one is listed.

## Commands

Pass `-s <serial>` on every command. A "version of SDB client … and server … are different" banner appears on each call. It's harmless: the local client is 4.2.25 and the sidecar reports 4.2.36.

| Task           | Command                                 |
| -------------- | --------------------------------------- |
| Launch         | `sdb -s S shell 0 was_execute <app-id>` |
| Stop           | `sdb -s S shell 0 kill <pkg-id>`        |
| Installed apps | `sdb -s S shell 0 applist`              |
| Device info    | `sdb -s S capability`                   |
| Files          | `sdb -s S push` / `pull`                |

- **Navigation:** use the web remote or its keyboard keys (SKILL.md step 5). On Tizen, sdb key events don't reliably drive the UI.
- **Logs:** `sdb dlog` returns nothing on retail TVs (`log_enable:disabled`).

## Gotchas

- An `sdb shell` with no traffic for 60 seconds gets closed.
- Plain `sdb shell <cmd>` (without `0`) may print nothing on retail firmware.
- After connecting, the sidecar ignores `sdb kill-server`.
- `sdb shell reboot` drops the video and the remote until the TV comes back.
- `tvlabs connect` exits by itself when the session ends.
