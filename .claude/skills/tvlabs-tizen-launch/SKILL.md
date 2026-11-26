---
name: tvlabs-tizen-launch
description: Launch solid-demo-app's Tizen build on a real Samsung TV in TV Labs (Device.io), with the live Web UI remote open in the Claude desktop browser pane so Claude and the user both see the TV and can press keys, while Claude drives the TV over sdb through `tvlabs connect`. Use this whenever the user wants to run, test, demo, debug or try the demo app on a Samsung or Tizen TV, on TV Labs or Device.io, on a "real TV" or "cloud TV", wants sdb access to a TV Labs Tizen device, or wants to re-sign, reinstall or relaunch the Tizen .wgt on one, even if they don't spell out the steps.
---

# Launch the demo app on a TV Labs Tizen TV

The end state:

- A TV Labs session on a Samsung Tizen TV, with its Web UI page (live video and remote) open in the browser pane.
- A `tvlabs connect` tunnel running in the background, so `sdb` reaches the TV.
- The demo app signed with that TV's certificate, installed and running.

Both control paths work at the same time. Grove on the sidecar shares the TV's single sdbd connection among clients. Web UI key presses go over the WebSocket remote, IR or CEC, not sdb.

This was verified end to end on a 2024 Samsung DU7200F (Tizen 8.0) in Nov 2026. Where the original plan failed, these steps give the path that worked.

## Ground rules

- **Repo:** don't commit. The script builds and signs in a temp folder, so the repo stays clean.
- **Sign-in:** the user signs in to the Web UI themselves, in the pane. Never type credentials.
- **Certificate password:** never print `certificate.pwd`. The script reads it and masks it in any error output.
- **Installs:** downloading Tizen Studio, accepting its license and installing Rosetta 2 each need the user's OK first. See [references/troubleshooting.md](references/troubleshooting.md).
- **Session type:** don't use `tvlabs execute`. Its sessions have no video.

## 1. Preflight, before starting a session

```bash
.claude/skills/tvlabs-tizen-launch/scripts/preflight.sh
```

The TV session's clock starts when it's created, so fix missing tools first. The script checks:

- `tvlabs whoami`. The CLI must use the same account the user signs in with in the Web UI.
- `sdb` and `tizen`, on PATH or in `~/tizen-studio`.
- Rosetta 2 on Apple Silicon.
- That port 26099 is free.
- The TMDB token in `src/api/key.ts`, and `node_modules`.

For any failure, follow [references/troubleshooting.md](references/troubleshooting.md).

## 2. Open the Web UI and start a session

1. Open `https://tvlabs.ai/app/devices/platform/tizen`. Use `mcp__Claude_Browser__preview_start` with `url` if the pane isn't open, otherwise `navigate`. If the org uses another Device.io host, ask the user which one.
2. If the tab lands on `tvlabs.ai/login`, ask the user to sign in in the pane, then continue.
3. In the device picker, select **Smart TV** and click **Quick Start** to get an available TV. Use **Next: Select region** if the user wants a specific region or model.
4. The URL becomes `/app/devices/<session_id>`. Take the ID from the tab context. Keep this tab open, because it is the video and the remote.
5. Wait until the video shows the TV's home screen and the footer says **Connected**.

## 3. Start the tunnel

Run it with Bash `run_in_background`, with sdb on PATH in the same command:

```bash
export PATH="$HOME/tizen-studio/tools:$HOME/tizen-studio/tools/ide/bin:$PATH"; tvlabs connect --session <session_id> --headless
```

Why PATH has to be set here: `tvlabs connect` looks for `sdb` once, at startup. If it doesn't find it, the SSH tunnel still comes up, but the Tizen setup never runs:

- `/status` stays `"disconnected"`.
- `/_dev/certificate` returns 404.
- Only `~/.tvlabs/logs/tvlabs.log` explains why.

The Bash tool's shell doesn't necessarily load `~/.zshrc`, so don't rely on it.

`--headless` is required outside an interactive terminal. If an earlier tunnel is still running, stop it first (TaskStop) so port 26099 is free.

Then:

1. Read the background output for `Status API listening on port N`.
2. Poll `curl -s localhost:N/status` until it shows `"state":"connected"`. This usually takes a few seconds.
3. Run `sdb devices`. It should list one device, `<ip>:26101`. Don't run `sdb connect`, because the tunnel already did the equivalent.

## 4. Build, sign, install and launch

```bash
.claude/skills/tvlabs-tizen-launch/scripts/build-sign-install.sh --port N
```

It takes about 30 seconds and stops with a clear error at the first step that fails:

1. Checks that the tunnel is connected and finds the TV's sdb serial.
2. Reads the app and package IDs from `tizen/config.xml`.
3. Builds with `vite.config.tizen.js` into `$TMPDIR/tvlabs-tizen-launch/build`, then copies in `config.xml` and `icon.png`.
4. Downloads `/_dev/certificate` and recreates the `tvlabs` signing profile. The certificate belongs to this session's TV, so a profile from an earlier session can be rejected.
5. Packages a signed `.wgt`. Sideloaded builds aren't re-signed by the platform, so this signature is the one the TV checks.
6. Kills the running app, pushes the `.wgt` and runs the TV's installer, `sdb shell 0 vd_appinstall <app-id> <path>`. `tizen install` fails through the tunnel with "There is no connected target", and `sdb install` only pushes the file.
7. Launches with `0 was_execute` and confirms the app is in `0 applist`.

Options:

- `--skip-build` reuses the last bundle, for example after editing only `tizen/config.xml`. `config.xml` is always copied fresh.
- `--no-launch` installs without launching.
- `--serial` sets the sdb serial when more than one TV is listed.

## 5. Confirm in the pane

- Take a zoomed screenshot of the video area. Expect the Solid demo home screen: a hero title and description, rows of posters and an FPS overlay at the top right.
- Press a key. Run `find` for "Right" and click the `button "Right"` ref. The other matches are lines in the page's event log. Focus moves one tile, and the app's overlay shows `Last key: ArrowRight, Code: 39`. That's a quick check that the remote reaches the app.
- That ref is a D-pad drawn over the video, and it stays visible while the pointer is there. Hover somewhere else, such as the page header, before taking a screenshot to check the result.
- The D-pad buttons are named **Up**, **Down**, **Left**, **Right** and **OK**. **Power**, **Home** and **Back** are unlabeled icon buttons in the remote below the video, so find them with a screenshot.
- The page's event log records each press as `[Grove] WS HID [press: :right]`. This shows the keys go over the WebSocket remote, not sdb.

## Driving the TV

Pass `-s <serial>` on every sdb command. A "version of SDB client … and server … are different" banner shows on each call. It's harmless: the local client is older than the sidecar's server.

| Task           | Command                                 |
| -------------- | --------------------------------------- |
| Launch         | `sdb -s S shell 0 was_execute <app-id>` |
| Stop           | `sdb -s S shell 0 kill <pkg-id>`        |
| Installed apps | `sdb -s S shell 0 applist`              |
| Device info    | `sdb -s S capability`                   |
| Files          | `sdb -s S push` / `pull`                |

- **Navigation:** use the Web UI remote. On Tizen, sdb key events don't reliably drive the UI.
- **Logs:** `sdb dlog` returns nothing on retail TVs (`capability` shows `log_enable:disabled`). For console output, try the Web UI's **Open DevTools for the device web app** button, or the inspector route in the troubleshooting guide. Neither has been verified yet.

## Gotchas

- An `sdb shell` with no traffic for 60 seconds gets closed.
- Plain `sdb shell <cmd>` (without `0`) may print nothing on retail firmware. The `0 <command>` vendor forms above work.
- After connecting, the sidecar ignores `sdb kill-server`.
- `sdb shell reboot` drops the video and the remote until the TV comes back.
- Every install, kill or launch shows up in the Web UI right away, because the user is watching the same TV. Say what you're about to do.
- On blank poster tiles, see the CSP section of the troubleshooting guide.

## Finishing

Report back:

- The session ID and TV model.
- One sdb command that worked, such as `applist` showing the app.
- One remote key press that worked, as a screenshot.

Then tell the user how to end the session:

1. Click **End session** in the Web UI.
2. Stop the background `tvlabs connect` with TaskStop, which also restores the local sdb key.

Leave both running until the user is done with the TV.
