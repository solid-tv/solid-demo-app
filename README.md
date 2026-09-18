# SolidTV Demo App

View the demo - [https://solid-tv.github.io/solid-demo-app/](https://solid-tv.github.io/solid-demo-app/)

There are a few query params for customizing the application to test on devices

size='720' | '1080' | '4k'
numImageWorkers = 0 to disable image workers
disableBG=true to turn off background (reduce memory)
roundPoster=false to turn off rounded images on poster

https://solid-tv.github.io/solid-demo-app/?size=720&disableBG=true#/

## Main Repo

[SolidTV](https://github.com/solid-tv/solid)

## Getting started

Get an API Read Access Token from [TMDB API](https://developers.themoviedb.org/3/getting-started/introduction)
and put the key in `src/api/key.js` with `export default 'KEY_VALUE'`

```
git clone https://github.com/solid-tv/solid-demo-app
cd solid-demo-app
pnpm i
pnpm start
```

If you're interested in using SolidTV with Web check out [Web Branch](https://github.com/solid-tv/solid-demo-app/tree/web) to see the setup.

## Apple TV

The app runs on tvOS without a browser through
[@solidtv/nativescript](https://github.com/solid-tv/nativescript): NativeScript
is the runtime, its canvas plugin the WebGL surface. The project is
`nativescript/`, its own pnpm root, and holds only the host: the boot file in
`app/app.ts`, the webpack config that bundles `../src` as it is, the
`App_Resources`, and a stand-in for a plugin package with no tvOS build.
Nothing in `src/` is written for it.

Prerequisites: macOS with Xcode 26.4 and the tvOS platform, the `xcodeproj`
gem (`gem install --user-install xcodeproj`), pnpm 10, and the TMDB token in
`src/api/key.ts` as for the web. A shell without a UTF-8 locale, a script's
say, needs `LC_ALL=en_US.UTF-8` on every `ns` command.

```
cd nativescript
pnpm install
LC_ALL=en_US.UTF-8 pnpm build:tvos   # the Apple TV simulator build
LC_ALL=en_US.UTF-8 pnpm tvos         # build, install and run on a booted simulator
```

For a paired Apple TV, put your team id in both `App_Resources/*/build.xcconfig`
files and run `ns run tvos --device <identifier> --no-hmr --no-watch`; the
first build of the bundle id needs Xcode to create its provisioning profile.
The device transport does not stream the console: the app mirrors every line
to `Library/Caches/demo-log.txt` in its container, which
`xcrun devicectl device copy from --device <identifier> --domain-type appDataContainer --domain-identifier dev.solidtv.demo --source Library/Caches/demo-log.txt --destination <file>`
fetches. The scripts under `nativescript/scripts/` run a simulator build,
press the Siri Remote's buttons through the XCUITest driver of the
`@solidtv/nativescript` harness, and run a background and foreground cycle.

The Siri Remote's arrows, Select, Menu and play/pause reach the app as the
keys the web build maps; Menu is Back. From a page it opens the nav, from
the nav it walks history back, and from the nav on the start page it is left
to the system, which returns to the Home screen: the one rule `src/` gained
for tvOS, in `LeftNavWrapper`, and one a browser never notices.

Out of scope there: the player (video is a native view, not a DOM element),
Firebolt, the renderer versions page (a link to GitHub Pages), texture
compression (the KTX assets are ETC2, the Apple TV HD's GPU takes PVRTC),
the mouse states, and the Destroy example's SVG. Their pages still bundle.
