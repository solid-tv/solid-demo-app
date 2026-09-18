// The polyfill first: the renderer and the router read browser globals at
// import. Then the shims, which give those globals the shape the demo's own
// entry expects: a file: location into the app folder, a working history for
// its HashRouter, and a document its focus manager can listen on.
import "@nativescript/canvas-polyfill";
import "@solidtv/nativescript/shims";
import { Application, Color, File, GridLayout, knownFolders, path } from "@nativescript/core";
import { isTvOS } from "@nativescript/core/platform";
import { Canvas } from "@nativescript/canvas";
import type { FpsUpdatePayload, RendererMain } from "@solidtv/renderer";
import { Config, renderer } from "@solidtv/solid";
import {
  KeyBridge,
  bindCanvas,
  bindLifecycle,
  bindRemote,
  mirrorConsole,
  type PausableRenderer
} from "@solidtv/nativescript";

// The clock every measurement below counts from: the first line of the
// bundle, the same origin the web build's entry has in the browser.
const T0 = performance.now();

// On a device the CLI cannot stream the console: every line also goes to
// Library/Caches/demo-log.txt in the app's container, for
// `xcrun devicectl device copy from` (see the README).
mirrorConsole(File.fromPath(path.join(knownFolders.temp().path, "demo-log.txt")), { application: Application });
console.log("BOOT start");

const sinceBoot = (): number => Math.round(performance.now() - T0);

// The numbers the checkpoint asks for, as console lines: every renderer
// idle with the texture memory at that point (the first is the first frame,
// the ones after the posters have a texture count to show for it), the
// frame rate at the demo's own interval, and the lifecycle with whether the
// loop had stopped half a second after a suspend.
function attachMeasurements(main: RendererMain): void {
  let frames = 0;
  main.on("frameTick", () => {
    frames++;
    if (frames === 1) {
      console.log("RENDER first frame t=" + sinceBoot());
    }
  });
  let idles = 0;
  main.on("idle", () => {
    idles++;
    if (idles > 12 && idles % 10 !== 0) {
      return;
    }
    console.log(
      "RENDER idle " +
        JSON.stringify(Object.assign({ n: idles, t: sinceBoot() }, main.stage.txMemManager.getMemoryInfo()))
    );
  });
  main.on("fpsUpdate", (_target: RendererMain, d: FpsUpdatePayload) => {
    console.log(
      "FPS " +
        JSON.stringify({
          t: sinceBoot(),
          fps: d.fps,
          rendered: d.renderedFrames,
          idle: d.idleTicks
        })
    );
  });
  Application.on("suspend", () => {
    console.log("LIFECYCLE suspend t=" + sinceBoot());
    setTimeout(() => {
      console.log("LIFECYCLE paused=" + String(main.isPaused));
    }, 500);
  });
  Application.on("resume", () => {
    console.log("LIFECYCLE resume t=" + sinceBoot());
  });
}

// The demo creates its renderer on its own schedule, a frame after its
// entry runs; SolidTV's `renderer` binding is where it appears.
function whenRendererExists(callback: (main: RendererMain) => void): void {
  const poll = setInterval(() => {
    const main = renderer as unknown as RendererMain | undefined;
    if (main !== undefined) {
      clearInterval(poll);
      console.log("RENDER created t=" + sinceBoot());
      callback(main);
    }
  }, 20);
}

// A press a handler consumed stays with the app; a Menu press nothing
// handled goes to the system and leaves the app, as tvOS expects.
Config.preventDefaultOnHandledKeys = true;

function boot(canvas: Canvas): void {
  // The demo's createRenderer() names no canvas and no platform: this view
  // and TvPlatform stand in, with the settings the host corrects.
  bindCanvas(canvas);
  // The Siri Remote, into the bridge, onto document, where the demo's focus
  // manager and its own key listener are.
  const bridge = new KeyBridge({ target: document });
  bindLifecycle(() => renderer as unknown as PausableRenderer | undefined, bridge, Application);
  if (isTvOS) {
    bindRemote(bridge, Application.ios.window);
  }
  whenRendererExists(attachMeasurements);
  // The demo's own entry, unchanged. It reads the URL, sets Config, creates
  // the renderer on the next frame and renders its routes.
  console.log("ENTRY import t=" + sinceBoot());
  import("../../src/index")
    .then(() => {
      console.log("ENTRY loaded t=" + sinceBoot());
    })
    .catch((error: unknown) => {
      console.error("The demo's entry failed to load", error);
    });
}

function createRootView(): GridLayout {
  const root = new GridLayout();
  root.backgroundColor = new Color("#000000");
  const canvas = new Canvas();
  // Percent sizes size both the layout and the backing surface, and the
  // overflow keeps the canvas out from under tvOS's title-safe insets.
  canvas.width = "100%";
  canvas.height = "100%";
  canvas.iosOverflowSafeArea = true;
  canvas.on("ready", () => {
    // The plugin's ready callback swallows exceptions: a throw here would be
    // a silent blank screen.
    try {
      boot(canvas);
    } catch (error: unknown) {
      console.error("Boot failed", error);
    }
  });
  root.addChild(canvas);
  return root;
}

Application.run({ create: createRootView });
