# Troubleshooting

## The sideload doesn't install or launch

- **No "Sideload result" line:** the dialog may have closed before you clicked a row. Open the build picker again and click the row with the matching SHA256.
- **`Sideload result: {:error, …}`:** read the whole log line. Check that the `.wgt` has `config.xml` at its root. `build-wgt.sh` zips from inside the build folder, so it does.
- **The build isn't in the dialog:** check the **App** selector in the dialog. Uploads without `--application` go to the org's default app. **Show all builds** widens the list.
- **The app installs but shows old code:** each upload is a separate build. Pick the row whose SHA256 matches the latest `sha256_8`.

## Tizen Studio CLI isn't installed (sdb mode only)

The default sideload path doesn't need this.

The tools go in `~/tizen-studio`: `sdb` in `tools/` and the `tizen` CLI in `tools/ide/bin/`. Ask the user before you download the installer or accept its license. Tell them the file name, the source and the size.

1. **Get the installer.** Find the latest version at `https://download.tizen.org/sdk/Installer/` and download `web-cli_Tizen_Studio_<ver>_macos-64.bin`. Version 6.1's is 280 MB. Put it in its own scratch folder.
2. **On Apple Silicon, install Rosetta 2 first.** `sdb` and the JDK that ships with Tizen Studio are x86_64-only. Without Rosetta they fail with "bad CPU type", and `/usr/bin/arch -x86_64 /usr/bin/true` fails too. Installing it needs the user's password and agrees to Apple's license, so ask first. Then type this into a Terminal panel tab and let the user enter the password there:
   ```bash
   sudo softwareupdate --install-rosetta --agree-to-license
   ```
3. **Run the installer:**
   ```bash
   bash ./web-cli_Tizen_Studio_6.1_macos-64.bin --accept-license ~/tizen-studio
   ```
4. **If it fails with `Killed: 9` and "Unable to locate a Java Runtime":** the installer's bundled `unzip` is an arm64e binary, and macOS won't run third-party arm64e code. Unpack the JDK with the system `unzip`, then run step 3 again. The installer skips the JDK once it's in place.
   ```bash
   /usr/bin/unzip -qq "$(ls -dt /tmp/tizensdk_* | head -1)/tizen-sdk.zip" "jdk/*" -d ~/.package-manager
   ```
5. **Check it:** `~/tizen-studio/tools/sdb version` and `~/tizen-studio/tools/ide/bin/tizen version`. If the user wants the tools on PATH, add this to `~/.zshrc`:
   ```bash
   export PATH="$HOME/tizen-studio/tools:$HOME/tizen-studio/tools/ide/bin:$PATH"
   ```

## The tunnel stays "disconnected" (sdb mode)

Check the newest lines of `~/.tvlabs/logs/tvlabs.log`. Filter out lines with keys or passwords before showing any of it. If the log says `'sdb' was not found in the system PATH`, stop the tunnel and start it again with the `export PATH=...;` prefix from [sdb-mode.md](sdb-mode.md).

Headless mode also keeps running after a dropped websocket, a lost tunnel or "session not found", without showing the error. When it works, the log shows `[status-api] certificate stored (N bytes)` right after connecting.

## `tizen install` / `tizen run`: "There is no connected target" (sdb mode)

The tunnel's sdb listener (Grove's `SDBListener`) answers `host:devices` but not `host:track-devices`. The `tizen` CLI's Java sdb library relies on the second one, so it finds no target even though `sdb devices` lists the TV. Install and launch with sdb directly, which is what `build-sign-install.sh` does:

```bash
sdb -s S push app.wgt /home/owner/share/tmp/sdk_tools/tmp/app.wgt
sdb -s S shell 0 vd_appinstall <app-id> /home/owner/share/tmp/sdk_tools/tmp/app.wgt
sdb -s S shell 0 was_execute <app-id>
```

`sdb install app.wgt` pushes the file but doesn't install it.

## Install fails, or the TV rejects the signature (sdb mode)

The package has to be signed with the certificate from this session's `/_dev/certificate`. Run `build-sign-install.sh` again. It downloads the certificate fresh and rebuilds the `tvlabs` profile every time. The sideload path avoids this, because the sidecar signs the package.

## Blank poster tiles

On the TV the app runs from `file:`, so `pickImageBaseUrl` in `src/api/index.ts` picks TMDB's `http` image host. The renderer fetches images with XHR or `fetch`, which the widget's CSP checks against `connect-src`. `tizen/config.xml` has to allow `http://image.tmdb.org/` in both `connect-src` and `img-src`, and it does as of the CSP fix. If posters go blank again, check those two rules first, then rebuild and sideload again.

## Console logs (not verified yet)

- **Web app:** the session page has an **Open DevTools for the device web app** button.
- **REST:** TV Labs says Tizen console lines reach `GET /api/v1/sessions/logs/<id>` when the `:device_log_streams` flag is on. `tvlabs logs` only tails the CLI's own log file.
- **sdb mode:** `tvlabs connect` forwards local port 9222 to the sidecar's inspector, and its `-a <app-id>` flag starts the debugger for that app. Or run `sdb -s S shell 0 debug <app-id>` to get a port, forward it to a free local port with `sdb -s S forward tcp:9223 tcp:<port>`, and open `http://localhost:9223/json`.
