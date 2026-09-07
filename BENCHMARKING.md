# On-device benchmarking: LG webOS and Samsung Tizen

How to get trustworthy numbers off the two TVs, and the traps that produced
untrustworthy ones. Written after an A/B of the renderer's `DIRTY_QUAD_BUFFER`
flag that took five runs to conclude, mostly because of the traps.

---

## Devices

| Name         | Address       | Platform                  | Notes                                        |
| ------------ | ------------- | ------------------------- | -------------------------------------------- |
| `LGNew`      | 192.168.1.235 | webOS, WebGL 1, 4 cores   | Loads the MODERN (module) bundle             |
| `LGWhite`    | 192.168.1.87  | webOS 3.8, Chromium 38/53 | The legacy/nomodule path — see `LG_Debug.md` |
| Samsung M70A | 192.168.1.160 | Tizen 5.5, Chromium 69    | `LS32AM702PNXZA`, `secure_protocol: enabled` |

Absolute numbers are **not comparable across the two platforms**: the Tizen build
is a different bundle (iife, `minify: false`, `target: chrome69`, `__RTT__:
false`, compressed textures off) and resolves the renderer from source rather
than `dist`. Only within-device A/Bs mean anything.

---

## LG webOS

### Deploying

```bash
npm run deploy:lg            # build:lg, then install + launch
npm run deploy:lg -- LGWhite # a different device
./scripts/deploy-lg.sh       # install + launch only, no rebuild
```

The `ares-*` CLI **crashes on Node 23** — it calls `util.isDate`, which Node 23
removed, and fails with `isDate is not a function` / `Callback was already
called`. Ping and port 9922 both look healthy, so it reads as a network fault.
`scripts/deploy-lg.sh` pins the newest installed Node 22 to work around it.
`ares-package` is unaffected; only the SSH-based device commands break.

### Reading results back

The Benchmark page persists each run to `localStorage.benchmarkRuns` (last 12)
precisely so a run can be captured with **devtools detached**. Attaching them
inflates renderer JavaScript 2–8x on webOS, enough to invert a conclusion.

```bash
ares-inspect -d LGNew -a com.example.soliddemo   # prints http://localhost:PORT
curl http://localhost:PORT/json/list             # -> webSocketDebuggerUrl
```

Then a plain CDP `Runtime.evaluate` of
`localStorage.getItem("benchmarkRuns")` over Node's built-in `WebSocket` — no
devtools UI, no dependencies. Attach **after** the run finishes, never during.

---

## Samsung Tizen

### Installing

**The `tizen` CLI cannot install to this monitor.** The Samsung certificate
profiles in `~/SamsungCertificate/*/` reference `author.pwd` / `distributor.pwd`
files that do not exist on disk, so the CLI signs with no password and the
device rejects the package with an empty platform log. `tizen install-permit`
refuses outright with "Please check the active certificate profile".

Install through the **Antigravity Tizen extension**, which holds those passwords
in its own store. It packages the `tizen/` directory **as-is without rebuilding**,
so post-build patches to `tizen/index.html` survive its launch.

Other Tizen-specific traps:

- `secure_protocol: enabled` mutes `sdb shell`, `dlog` and `applist` — they
  return nothing. Every readback has to go through the Web Inspector.
- Two `sdb` binaries (the extension's and the SDK's) fight over port 26099; the
  `tizen` CLI restarts its own and drops the other's connection. `pkill -f sdb`,
  start one, reconnect.
- **Reinstalling wipes the app's `localStorage`**, so capture results before
  installing the other arm.

### Reading results back

Launch from the extension in **Debug** mode, then find the inspector port — it is
allocated dynamically, not 7011:

```bash
sdb forward --list    # e.g. 192.168.1.160:26101  tcp:59475  tcp:59475
curl http://localhost:59475/json/list
```

The launch run executes with the extension's devtools client attached and is
**~9% slower with a much worse tail**; discard it. To get a clean run, connect
over CDP, trigger `location.reload()`, disconnect immediately, wait, then
reconnect to read. The benchmark auto-starts ~2s after the rows resolve.

---

## Driving the benchmark without a remote

Inject a boot hash into the built `index.html` (`lg/index.html` or
`tizen/index.html` — both gitignored build output) so the app opens straight on
the benchmark route:

```html
<script>
  if (location.search.indexOf("arm=") === -1) {
    location.replace(location.pathname + "?displaySize=20&posterScale=0.5&arm=A#/benchmark");
  }
</script>
```

Apply it **after** the build (the build regenerates `index.html`) and before
packaging. The query string is recorded verbatim in each stored run's `url`, so
every run self-labels its scene and arm — do not rely on run order.

Repeat runs need no rebuild: close and relaunch the app, or reload over CDP.

---

## Scene size

Three URL switches control the workload, all read once at module scope:

| Switch           | Default | Effect                           |
| ---------------- | ------- | -------------------------------- |
| `?displaySize=N` | 8       | Items each row keeps **mounted** |
| `?posterScale=N` | 1       | Scales posters and row geometry  |
| `?noText=true`   | off     | Drops row and poster titles      |

**`displaySize` alone does not change what is drawn.** Rows virtualize to what
fits, so extra mounted items are updated every frame but never rendered: quads,
draw calls and texture uploads all stay flat while update cost climbs. Shrinking
the tile is what puts more of them inside the 1080p design space.

`deviceLogicalPixelRatio` is **not** a scene knob. It scales the design space
_onto the panel_, so the app renders smaller into a corner of the screen with the
same node count — it does not fit more content.

Reference points on LG:

| Scene                            | Quads | Draw calls |
| -------------------------------- | ----- | ---------- |
| default                          | 39    | 45         |
| `displaySize=20&posterScale=0.5` | 70    | 76         |

A production page for comparison: 42 nodes, 44 renderOps. The default scene is
already production-realistic; virtualized TV rows converge on roughly one
screenful regardless of the data behind them.

---

## Reading the numbers

**FPS is a pooled mean**, `sum(frames) / sum(elapsed ms)` over animated
intervals — not a per-frame guarantee. A p95 of 21ms and a mean of 15.2ms
(65.9 FPS) are perfectly consistent; they are different statistics over the same
frames.

**There is no 60fps cap.** The app sets `targetFPS: 0`, disabling the renderer's
limiter. LG tops out around 58 on its vsync; the Samsung monitor measured 65.9,
so frames there complete faster than a 60Hz interval.

**Percentiles are bucket lower bounds**, not interpolated: 1ms buckets below
32ms, 8ms buckets at or above it. "p99 32" means somewhere in [32, 40).
`animMaxFrameTimeMs` is exact.

**`quads` and `drawCalls` are sampled**, taken from the 300ms `fpsUpdate`
payload, so `maxQuads` misses transient peaks — the same scene reports 70 or 55
depending on luck, and a run reporting 55 timed identically to runs reporting 70.
Never read a quad delta as a workload delta. Check `keyPresses`,
`uploadedTextures` and the animation counts instead, which are stable.

---

## Methodology

**Run both arms in one session.** A Samsung power cycle between arms shifted anim
FPS, p95, update and the quad count enough to produce three clean non-overlapping
"separations" pointing in different directions. Re-running the first arm in the
second session collapsed every one of them.

**Clear `localStorage.benchmarkRuns` before a series.** The records carry no
timestamp, so with prior entries present there is no way to prove which one your
run produced. Back the old array up first — it caps at 12.

**Three runs an arm is not enough on its own.** A clean separation happens by
luck roughly one time in ten at n=3, and this project has now seen it happen in
both directions on the same metric.

**Know the noise floor before believing an effect.** Two builds whose
update-phase code was byte-identical measured 519.1ms and 544.4ms — 4.9% apart,
"separating" by 0.2ms, on a metric that could not have changed. Any effect near
that size needs an in-session control that holds the change fixed.

**Rebuild the linked renderer first.** `@solidtv/renderer` links to
`../solid-renderer` and the LG build consumes its `dist/` (tsc output), which
goes stale silently. Run `pnpm build` there or the TV measures old code. The
Tizen build resolves source instead, via `conditions: ["@solidtv/source"]`.

**Build-time defines only fold when terser can fold them.** `compress: false` in
`terserOptions` disables dead-code elimination, so `if (__define__)` ships as
`if (!false || ...)` with both branches intact. Verify with two builds into
separate output directories and grep for a symbol unique to one branch —
comparing chunks inside a shared `--emptyOutDir false` directory mixes builds and
proves nothing.

---

## Reference numbers

Dense scene (`displaySize=20&posterScale=0.5`, 70 quads), 3 runs each, devtools
detached, September 2026.

|                | LG (webOS) | Samsung M70A (Tizen 5.5) |
| -------------- | ---------- | ------------------------ |
| anim FPS       | 56.5–57.1  | 64.5–65.8                |
| anim p95       | 20–32ms    | 20–24ms                  |
| update ms      | 519–569    | 545–579                  |
| render ms      | 1085–1153  | 795–825                  |
| upload ms      | 88–103     | 86–94                    |
| initial render | ~620ms     | ~630ms                   |

The monitor is roughly 16% faster on animated FPS and ~28% faster in the render
pass on identical geometry, with scene update a dead heat. Remember the bundles
differ; this is "the app on device A vs device B", not an isolated hardware
comparison.
