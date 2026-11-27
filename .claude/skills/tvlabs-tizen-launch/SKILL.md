---
name: tvlabs-tizen-launch
description: Launch solid-demo-app's Tizen build on a real Samsung TV in TV Labs (Device.io), with the live web remote open in the Claude desktop browser pane so Claude and the user both see the TV and can press keys. Builds an unsigned .wgt, uploads it with the tvlabs CLI and sideloads it from the web app, where TV Labs signs it for that TV, so no Tizen Studio, sdb or Rosetta is needed. An optional sdb mode covers shell access and app lifecycle commands. Use this whenever the user wants to run, test, demo, debug or try the demo app on a Samsung or Tizen TV, on TV Labs or Device.io, on a "real TV" or "cloud TV", wants to reinstall or relaunch the Tizen build on one, or wants sdb access to a TV Labs Tizen device, even if they don't spell out the steps.
---

# Launch the demo app on a TV Labs Tizen TV

The end state:

- A TV Labs session on a Samsung Tizen TV.
- Its web page, with live video and the remote, open in the browser pane.
- The demo app installed and running on the TV.

The user watches the same page and can take over the remote at any time.

The default path needs only the signed-in `tvlabs` CLI and a browser sign-in to tvlabs.ai. When a build is sideloaded, TV Labs' sidecar (Grove) re-signs it with the TV's certificate. This was verified on a 2026 Samsung M70H (Tizen 10.0) in Nov 2026.

For an sdb shell, app launch/kill/list commands or files on the TV, use [sdb mode](references/sdb-mode.md) in place of steps 2 and 4. It was verified on Tizen 7.0 and 8.0 TVs.

## Ground rules

- **Repo:** don't commit. Builds go to a temp folder, so the repo stays clean.
- **Sign-in:** the user signs in to tvlabs.ai themselves, in the pane. Never type credentials.
- **The tab owns the session:** closing the session's tab, or navigating it away, ends the session. Keep it open until the user is done, and open anything else in a second tab.
- **Uploads are visible:** every upload adds a build to the org's build list in TV Labs. Say so when you upload.
- **Session type:** don't use `tvlabs execute`. Its sessions have no video.

## 1. Preflight

```bash
.claude/skills/tvlabs-tizen-launch/scripts/preflight.sh
```

It checks `tvlabs whoami`, `zip`, the TMDB token in `src/api/key.ts`, `node_modules` and the app ID in `tizen/config.xml`. The CLI account must match the one the user signs in with on the web. `--sdb` also checks the Tizen tools that sdb mode needs.

## 2. Build and upload, before starting the session

```bash
.claude/skills/tvlabs-tizen-launch/scripts/build-wgt.sh --upload
```

The script does the following:

1. Builds with `vite.config.tizen.js` into a temp folder.
2. Adds `tizen/config.xml` and `icon.png`.
3. Zips an unsigned `.wgt`.
4. Uploads it with `tvlabs upload --id-only`.

It ends with `wgt=`, `sha256_8=`, `app_id=`, `version=` and `build_id=` lines. Keep `sha256_8`: it picks out this upload in the sideload dialog, which also lists earlier uploads with the same file name. Every build gets a new hash, because zip stores timestamps.

`tvlabs upload --help` lists `.apk/.tpk/.zip/.ipk`, but `.wgt` works. Build first, because the session's clock starts as soon as it's created.

## 3. Open the web app and start a session

1. Open `https://tvlabs.ai/app/devices/platform/tizen`. Use `mcp__Claude_Browser__preview_start` with `url` if the pane is closed, otherwise `navigate`. If the org uses another Device.io host, ask the user which one.
2. If the tab lands on `tvlabs.ai/login`, ask the user to sign in in the pane, then continue.
3. In the device picker, select **Smart TV** and click **Quick Start**. Use **Select region** if the user wants a specific region or model.
   - In a narrow pane, Quick Start is a labeled button. In a wide pane, it's an icon-only rocket button at the right end of the picker's button row, and `find` for "Quick Start" returns a hidden element. In that case, take a screenshot and click the rocket button by its position.
4. The tab goes to `/app/devices/<number>/queue` ("Warming up candidate devices"). Once a TV is assigned, it goes to `/app/devices/<session_id>`, usually within 20 seconds. Take the ID from the tab context.
5. Wait until the video shows the TV's home screen and the footer says **Connected**. The TV model and Tizen version are in the page header.

## 4. Sideload the build

1. Click the build picker above the video, labeled **No build selected**. Its accessible name is "Select build to sideload". Clicking its ref landed off target in testing, so click the label by position from a screenshot.
2. The **Sideload Build** dialog lists the org's builds, with File Name, Application ID, Version, SHA256 and Platforms columns. Click the row whose SHA256 equals `sha256_8`. Clicking the row starts the sideload right away. There's no confirm button.
3. Close the dialog with its X at the top right.
4. To confirm, `find` "Sideload result". Expect a line like `[Grove] Sideload result: {:ok, … install bOtIKaCrZa.tizen …}`. The app launches on its own within about 10 seconds.

Notes:

- The picker keeps reading "No build selected" after a sideload. Ignore it.
- Admins also see a **Sideload build by ID** field that takes `build_id`. It hasn't been tested.
- To reinstall after a code change, run step 2 again, then repeat this step with the new `sha256_8`.

## 5. Drive the TV and confirm

- **Look:** take a zoomed screenshot of the video area. Expect the Solid demo home screen: a hero title and description, rows of posters, and an FPS overlay at the top right.
- **Keyboard (most reliable):** click a blank part of the page first, such as the area above the build picker. Don't click the video, because it can capture the mouse. Then press keys with the browser `key` action:

  | Key                | TV button |
  | ------------------ | --------- |
  | Arrow keys         | D-pad     |
  | `Enter` or `Space` | OK        |
  | `Escape` or `b`    | Back      |
  | `h`                | Home      |
  | `p`                | Power     |
  | `x`                | Input     |
  | `s`                | Settings  |

  The keys work anywhere on the page except in form fields. Backspace isn't mapped.

- **Check that it reached the app:** after pressing Right, the app's overlay shows `Last key: ArrowRight, Code: 39`, and focus moves one tile.
- **Remote buttons also work:**
  - The D-pad buttons are named Up, Down, Left, Right and OK. `find` "Right" and click the `button "Right"` match; the other matches are event-log lines.
  - That D-pad is drawn over the video and stays visible while the pointer is there, so hover elsewhere before a screenshot.
  - Power, Home and Back are unlabeled icons.
  - A narrow pane shows a D-pad block under the video. A wide pane shows one icon bar.
- **Event log:** the page logs each press as `[Grove] WS HID [press: :right]`.

## Ending the session

1. Close the session's tab with `mcp__Claude_Browser__tabs_close`, or click the red **Hang up** icon. Hang up is only in the wide layout's sidebar. Either one ends the session.
2. To confirm, open `https://tvlabs.ai/app/sessions/<session_id>` and check that its status is **Completed**. Open that page, not `/app/devices/<session_id>`.
3. If sdb mode's `tvlabs connect` is running, it exits by itself when the session ends.

## Gotchas

- Blank poster tiles: see the CSP section of [references/troubleshooting.md](references/troubleshooting.md).
- Every sideload, launch and key press shows up on the user's screen right away. Say what you're about to do.
- The browser pane is isolated from the user's own browser, so a tvlabs.ai sign-in elsewhere doesn't carry over. Once they sign in in the pane, later runs reuse that cookie.

## Finishing

Report back:

- The session ID and TV model.
- The sideload result line.
- One key press, with a screenshot of the result.

Tell the user that closing the tab or clicking Hang up ends the session. Leave it running until they're done.

Not yet available: TV Labs plans an embed-based start, where an API key gets a session and a remote URL that needs no sign-in. When its request shape is known, it replaces step 3.
