# Troubleshooting

## Tizen Studio CLI isn't installed

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

## The tunnel stays "disconnected"

Check the newest lines of `~/.tvlabs/logs/tvlabs.log`. Filter out lines with keys or passwords before showing any of it. If the log says `'sdb' was not found in the system PATH`, stop the tunnel and start it again with the `export PATH=...;` prefix from SKILL.md step 3.

When it works, the log shows `[status-api] certificate stored (N bytes)` right after connecting.

## `tizen install` / `tizen run`: "There is no connected target"

The `tizen` CLI's Java sdb library doesn't see devices through the tunnel's sdb server, even though `sdb devices` lists the TV. The cause is unconfirmed: it may be the Grove `SDBListener` or the client/server version mismatch. Install and launch with sdb directly, which is what `build-sign-install.sh` does:

```bash
sdb -s S push app.wgt /home/owner/share/tmp/sdk_tools/tmp/app.wgt
sdb -s S shell 0 vd_appinstall <app-id> /home/owner/share/tmp/sdk_tools/tmp/app.wgt
sdb -s S shell 0 was_execute <app-id>
```

`sdb install app.wgt` pushes the file but doesn't install it.

## Install fails, or the TV rejects the signature

The package has to be signed with the certificate from this session's `/_dev/certificate`. Run `build-sign-install.sh` again. It downloads the certificate fresh and rebuilds the `tvlabs` profile every time.

## Blank poster tiles

On the TV the app runs from `file:`, so `pickImageBaseUrl` in `src/api/index.ts` picks TMDB's `http` image host. The renderer fetches images with XHR or `fetch`, which the widget's CSP checks against `connect-src`. `tizen/config.xml` has to allow `http://image.tmdb.org/` in both `connect-src` and `img-src`, and it does as of the CSP fix. If posters go blank again, check those two rules first. Then rerun the script with `--skip-build`.

## Console logs and the Web Inspector (not verified yet)

- **Web UI:** the session page has an **Open DevTools for the device web app** button.
- **`tvlabs connect`:** it forwards local port 9222 to the sidecar's inspector port. Its `-a <app-id>` flag starts the debugger for that app.
- **Manual:** `sdb -s S shell 0 debug <app-id>` prints a port. Local 9222 is already taken by the tunnel, so forward to another local port: `sdb -s S forward tcp:9223 tcp:<port>`. Then open `http://localhost:9223/json`.
