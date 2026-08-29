//import "solid-devtools";
//import { setElementInterface } from "solid-devtools/setup";
//import { elementInterface } from "@solidtv/solid/devtools";

//setElementInterface(elementInterface);

// Patch Object.getOwnPropertyNames to prevent strict mode errors in solid-js mergeProps
(function() {
  const originalGetOwnPropertyNames = Object.getOwnPropertyNames;
  Object.getOwnPropertyNames = function(obj) {
    const names = originalGetOwnPropertyNames(obj);
    if (obj && (typeof obj === 'function' || Object.prototype.toString.call(obj) === '[object Arguments]')) {
      return names.filter(function(name) {
        return name !== 'caller' && name !== 'callee' && name !== 'arguments';
      });
    }
    return names;
  };
})();

import { createRenderer, Config, loadFonts } from "@solidtv/solid";
import { WebGlCoreRenderer, SdfTextRenderer } from "@solidtv/renderer/webgl";
import { CanvasCoreRenderer, CanvasTextRenderer } from "@solidtv/renderer/canvas";

import { Inspector } from "@solidtv/renderer/inspector";
import { FocusStackProvider, lazy } from "@solidtv/solid/primitives";
import { HashRouter, KeepAliveRoute } from "@solidtv/solid/primitives/router";
import { Route, Navigate } from "@solidjs/router";
import App from "./pages/App";
import Browse from "./pages/Browse";
import TMDB from "./pages/TMDB";
import DestroyPage from "./pages/Destroy";
import { tmdbData, destroyData } from "./api/tmdbData";
import NotFound from "./pages/NotFound";
import fonts from "./fonts";
import { browsePreload } from "./api/browsePreload";
import { entityPreload } from "./api/entityPreload";
import LeftNavWrapper from "./pages/LeftNavWrapper";
import theme from "theme";
import {
  Rounded,
  RoundedWithShadow,
  RoundedWithBorder,
  RoundedWithBorderAndShadow,
  RadialGradient,
  LinearGradient,
  HolePunch,
  RadialProgress
} from "@solidtv/renderer/webgl/shaders";

// Which Vite bundle is this device actually running? import.meta.env.LEGACY is
// rewritten to `true` only in the legacy (nomodule) chunk and `false` in the
// modern (module) chunk — so this reports the bundle the TV loaded. Stored as a
// global so any page (e.g. Benchmark) can display it.
window.bundleType = import.meta.env.LEGACY ? "LEGACY (nomodule)" : "MODERN (module)";
console.log(`[bundle] Loaded ${window.bundleType} build`);

const Player = lazy(() => import("./pages/Player"));
const Grid = lazy(() => import("./pages/Grid"));
const Loops = lazy(() => import("./pages/Loops"));
const Infinite = lazy(() => import("./pages/Infinite"));
const TMDBGrid = lazy(() => import("./pages/TMDBGrid"));
const Portal = lazy(() => import("./pages/Portal"));
const MatrixPage = lazy(() => import("./pages/Matrix"));
const TextPage = lazy(() => import("./pages/Text"));
const TextPosterPage = lazy(() => import("./pages/TextPoster"));
const CreatePage = lazy(() => import("./pages/Create"));
const ViewportPage = lazy(() => import("./pages/Viewport"));
const PositioningPage = lazy(() => import("./pages/Positioning"));
const LayoutPage = lazy(() => import("./pages/Layout"));
const FocusBasicsPage = lazy(() => import("./pages/FocusBasics"));
const KeyHandlingPage = lazy(() => import("./pages/KeyHandling"));
const TransitionsPage = lazy(() => import("./pages/Transitions"));
const ComponentsPage = lazy(() => import("./pages/Components"));
const FocusHandlingPage = lazy(() => import("./pages/FocusHandling"));
const GradientsPage = lazy(() => import("./pages/Gradients"));
const FlexPage = lazy(() => import("./pages/Flex"));
const FlexGrowPage = lazy(() => import("./pages/FlexGrow"));
const FlexMenuPage = lazy(() => import("./pages/FlexMenu"));
const FlexSizePage = lazy(() => import("./pages/FlexSize"));
const FlexColumnSizePage = lazy(() => import("./pages/FlexColumnSize"));
const FlexColumnPage = lazy(() => import("./pages/FlexColumn"));
const ButtonsMaterialPage = lazy(() => import("./pages/ButtonsMaterial"));
const SuperFlexPage = lazy(() => import("./pages/SuperFlex"));
const Entity = lazy(() => import("./pages/Entity"));
const People = lazy(() => import("./pages/People"));
const FireboltPage = lazy(() => import("./pages/Firebolt"));
const LoginPage = lazy(() => import("./pages/Login"));
const VirtualPage = lazy(() => import("./pages/Virtual"));
const TagsPage = lazy(() => import("./pages/Tags"));
const ImagePerformance = lazy(() => import("./pages/ImagePerformance"));
const LargeImagePerformance = lazy(() => import("./pages/LargeImagePerformance"));
const MixedImagePerformance = lazy(() => import("./pages/MixedImagePerformance"));
const TextureCompressionPerformance = lazy(() => import("./pages/TextureCompressionPerformance"));
const ComplexFlexPage = lazy(() => import("./pages/ComplexFlex"));
const ComplexFlexCapsPage = lazy(() => import("./pages/ComplexFlexCaps"));
const BenchmarkPage = lazy(() => import("./pages/Benchmark"));
const RendererVersionsPage = lazy(() => import("./pages/RendererVersions"));
const TextCenteringPage = lazy(() => import("./pages/TextCentering"));
const CountdownTimerPage = lazy(() => import("./pages/CountdownTimer"));
const CustomButtonsPage = lazy(() => import("./pages/CustomButtons"));


let numImageWorkers = (typeof window !== "undefined" && window.createImageBitmap) ? 1 : 0;
const urlParams = new URLSearchParams(window.location.search);
const numWorkers = urlParams.get("numImageWorkers");
const screenSize = urlParams.get("size") || "default";
const rendererMode = urlParams.get("mode") || "webgl";
const animationsEnabled = urlParams.get("animate") || "true";
// Off by default — enable with ?contextSpy=true to capture per-frame WebGL call counts
const enableContextSpy = urlParams.get("contextSpy") === "true";
// Off by default (renderer requests a WebGL1 context) — force WebGL2 with ?webgl2=true
const forceWebGL2 = urlParams.get("webgl2") === "true";
const textBaseline = urlParams.get("textBaseline") as
  | "optical"
  | "cap"
  | "x"
  | "linebox"
  | null;

if (numWorkers) {
  numImageWorkers = parseInt(numWorkers);
}

const devicePhysicalPixelRatio = {
  low: 0.666667,
  medium: 0.8,
  high: 1,
  xhigh: 1.5,
  ultra: 2,
  default: window.devicePixelRatio || 1
}[screenSize];

const logFps = true;
Config.debug = false;
// Config.keyDebug = true;
Config.animationsEnabled = animationsEnabled === "true";
Config.fontSettings.fontFamily = "Roboto";
Config.fontSettings.color = theme.textPrimary;
Config.fontSettings.fontSize = 32;
Config.domRendererEnabled = false;
Config.focusHistoryDebug = 5;
// Config.focusDebug = true;

const textureProcessingTimeLimitParam = urlParams.get("textureProcessingTimeLimit");
const textureProcessingTimeLimit = textureProcessingTimeLimitParam ? parseFloat(textureProcessingTimeLimitParam) : 4;

Config.rendererOptions = {
  fpsUpdateInterval: logFps ? 300 : 0,
  inspector: import.meta.env.DEV ? Inspector : undefined,
  textureMemory: {
    criticalThreshold: 200e6,
    targetThresholdLevel: 0.8
  },
  textureProcessingTimeLimit,
  numImageWorkers, // temp fix for renderer bug
  imageDecodeConcurrency: (typeof window !== "undefined" && window.createImageBitmap) ? 4 : 2, // limit concurrent main-thread fetches/decodes on low-end TVs
  // Set the resolution based on window height
  // 720p = 0.666667, 1080p = 1, 1440p = 1.5, 2160p = 2
  deviceLogicalPixelRatio: window.innerHeight / 1080,
  devicePhysicalPixelRatio: devicePhysicalPixelRatio ?? 1,
  createImageBitmapSupport: "auto",
  boundsMargin: 100,
  targetFPS: 0,
  enableClear: true,
  enableContextSpy,
  forceWebGL2
};

if (textBaseline) {
  Config.rendererOptions.textBaselineMode = textBaseline;
}

// Ideally you'd do two separate builds for canvas and webgl to reduce bundle size.
if (rendererMode === "canvas") {
  Config.rendererOptions.fontEngines = [CanvasTextRenderer];
  Config.rendererOptions.renderEngine = CanvasCoreRenderer;
} else {
  Config.rendererOptions.fontEngines = [SdfTextRenderer];
  Config.rendererOptions.renderEngine = WebGlCoreRenderer;
}

// Delay initialization to allow the browser to perform a first paint of the splash screen
requestAnimationFrame(() => {
  setTimeout(() => {
    const { renderer, render } = createRenderer();
    let idleFired = false;
    renderer.on('idle', () => {
      if (!idleFired) {
        idleFired = true;
        const splash = document.getElementById('splash');
        if (splash) {
          splash.classList.add('fade-out');
          setTimeout(() => {
            splash.remove();
          }, 500);
        }
      }
    });
    loadFonts(fonts);
    const shManager = renderer.stage.shManager;
    shManager.registerShaderType("rounded", Rounded);
    shManager.registerShaderType("roundedWithBorder", RoundedWithBorder);
    shManager.registerShaderType("roundedWithShadow", RoundedWithShadow);
    shManager.registerShaderType("roundedWithBorderWithShadow", RoundedWithBorderAndShadow);
    shManager.registerShaderType("radialGradient", RadialGradient);
    shManager.registerShaderType("linearGradient", LinearGradient);
    shManager.registerShaderType("holePunch", HolePunch);
    shManager.registerShaderType("radialProgress", RadialProgress);
    render(() => (
      <FocusStackProvider>
        <HashRouter root={(props) => <App {...props} />}>
          <Route path="" component={LeftNavWrapper}>
            <Route path="" component={() => <Navigate href="/browse/all" />} />
            <Route path="examples" component={Portal}>
              <Route path="/" />
              <Route path="tmdb" component={TMDB} preload={tmdbData} />
            </Route>
            {/* <Route path="browse/:filter" component={KeepAliveWrapper(Browse)} preload={browsePreload} /> */}
            <KeepAliveRoute id="browse" path="browse/:filter" component={Browse} preload={browsePreload} />
            <Route path="loops" component={Loops} preload={tmdbData} />
            <Route path="infinite" component={Infinite} preload={tmdbData} />
            <Route path="tmdbgrid" component={TMDBGrid} preload={tmdbData} />
            <Route path="virtual" component={VirtualPage} preload={tmdbData} />
            <Route path="destroy" component={DestroyPage} preload={destroyData} />
            <Route path="grid" component={Grid} />
            <Route path="matrix" component={MatrixPage} />
            <Route path="text" component={TextPage} />
            <Route path="firebolt" component={FireboltPage} />
            <Route path="login" component={LoginPage} />
            <Route path="nested" component={lazy(() => import("./pages/Nested"))} />
            <Route path="textposter" component={TextPosterPage} />
            <Route path="textcentering" component={TextCenteringPage} />
            <Route path="countdown" component={CountdownTimerPage} />
            <Route path="custombuttons" component={CustomButtonsPage} />
            <Route path="positioning" component={PositioningPage} />
            <Route path="layout" component={LayoutPage} />
            <Route path="focusbasics" component={FocusBasicsPage} />
            <Route path="transitions" component={TransitionsPage} />
            <Route path="components" component={ComponentsPage} />
            <Route path="focushandling" component={FocusHandlingPage} />
            <Route path="keyhandling" component={KeyHandlingPage} />
            <Route path="gradients" component={GradientsPage} />
            <Route path="flex" component={FlexPage} />
            <Route path="create" component={CreatePage} />
            <Route path="viewport" component={ViewportPage} />
            <Route path="flexsize" component={FlexSizePage} />
            <Route path="flexmenu" component={FlexMenuPage} />
            <Route path="flexcolumnsize" component={FlexColumnSizePage} />
            <Route path="flexcolumn" component={FlexColumnPage} />
            <Route path="flexgrow" component={FlexGrowPage} />
            <Route path="keepalive" component={lazy(() => import("./pages/KeepAlive.jsx"))} />
            <Route path="suspense" component={lazy(() => import("./pages/suspense.jsx"))} />
            <Route path="superflex" component={SuperFlexPage} />
            <Route path="tags" component={TagsPage} />
            <Route path="buttonsmaterial" component={ButtonsMaterialPage} />
            <Route path="entity/people/:id" component={People} />
            <Route path="entity/:type/:id" component={Entity} preload={entityPreload} />
            <Route path="image-performance" component={ImagePerformance} />
            <Route path="large-image-performance" component={LargeImagePerformance} />
            <Route path="mixed-image-performance" component={MixedImagePerformance} />
            <Route path="texture-compression-performance" component={TextureCompressionPerformance} />
            <Route path="complexflex" component={ComplexFlexPage} />
            <Route path="complexflexcaps" component={ComplexFlexCapsPage} />
            <Route path="benchmark" component={BenchmarkPage} preload={tmdbData} />
            <Route path="versions" component={RendererVersionsPage} />

            <Route path="*all" component={NotFound} />
          </Route>
          <Route path="player">
            <Route path=":id" component={Player} />
          </Route>
        </HashRouter>
      </FocusStackProvider>
    ));
  }, 0);
});
