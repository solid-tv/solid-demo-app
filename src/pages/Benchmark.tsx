import { createEffect, on, createSignal, batch, Show, For, onCleanup } from "solid-js";
import { ElementNode, activeElement, renderer } from "@solidtv/solid";
import { LazyRow, LazyColumn, useFocusStack, VirtualRow, resetCounter } from "@solidtv/solid/primitives";
import { Hero, TitleRow, AssetPanel } from "../components";
import styles from "../styles";
import { setGlobalBackground } from "../state";
import ContentBlock from "../components/ContentBlock";
import { debounce } from "@solid-primitives/scheduled";

const TOTAL_CYCLES = 2;
const NAV_DELAY_MS = 300; // delay between simulated key presses

const Benchmark = (props) => {
  let cancelled = false;
  onCleanup(() => {
    cancelled = true;
  });

  const [heroContent, setHeroContent] = createSignal({});
  const [openPanel, setOpenPanel] = createSignal(false);
  const { storeFocus, restoreFocus } = useFocusStack();
  let contentBlock,
    solidLogo,
    firstRun = true;
  let columnRef: ElementNode | undefined;

  // Which Vite bundle this device loaded — set as a global at startup in src/index.tsx.
  const bundleType = window.bundleType ?? "unknown";

  // ── Benchmark state ──
  const [benchmarkStatus, setBenchmarkStatus] = createSignal("Waiting for data...");
  const [benchmarkRunning, setBenchmarkRunning] = createSignal(false);
  const [benchmarkDone, setBenchmarkDone] = createSignal(false);
  const [dataLoaded, setDataLoaded] = createSignal(false);
  const [renderTime, setRenderTime] = createSignal<number | null>(null);

  // ── Renderer telemetry from the fpsUpdate payload ──
  type RendererCapabilities = {
    renderMode: "webgl" | "canvas";
    webGlVersion: 1 | 2 | null;
    vertexArrayObject: boolean;
    maxTextureSize: number;
    maxTextureUnits: number;
  };
  const [capabilities, setCapabilities] = createSignal<RendererCapabilities | null>(null);
  const [drawStats, setDrawStats] = createSignal<{ renderOps: number; quads: number } | null>(null);
  // Per-frame WebGL call counts from the last sampled frame of the run
  const [contextSpy, setContextSpy] = createSignal<Record<string, number> | null>(null);

  // FPS tracking
  let fpsValues: number[] = [];
  // Peak draw counts seen during the run (renderOps = draw calls, quads = quads rendered)
  let maxRenderOps = 0;
  let maxQuads = 0;
  // Most recent contextSpyData seen while running (the GL call breakdown)
  let lastContextSpy: Record<string, number> | null = null;
  let fpsListenerAttached = false;

  function attachFpsListener() {
    if (fpsListenerAttached) return;
    const root = renderer;
    if (!root) return;
    fpsListenerAttached = true;

    root.on('fpsUpdate', (_target: any, fpsData: any) => {
      const fps = typeof fpsData === 'number' ? fpsData : fpsData.fps;
      // ignore really low fps which occur during page load or transitions
      if (fps > 5 && benchmarkRunning()) {
        fpsValues.push(fps);

        // The newer fpsUpdate payload is an object carrying draw counts and the
        // (constant) renderer capabilities alongside the fps number.
        if (typeof fpsData === 'object' && fpsData) {
          if (typeof fpsData.renderOps === 'number') {
            maxRenderOps = Math.max(maxRenderOps, fpsData.renderOps);
          }
          if (typeof fpsData.quads === 'number') {
            maxQuads = Math.max(maxQuads, fpsData.quads);
          }
          // GL call breakdown for the frame (null on the Canvas backend)
          if (fpsData.contextSpyData) {
            lastContextSpy = fpsData.contextSpyData;
            console.log(lastContextSpy);
          }
          // capabilities are fixed for the lifetime of the renderer — capture once
          if (fpsData.capabilities && !capabilities()) {
            setCapabilities(fpsData.capabilities);
          }
        }
      }
    });
  }

  // ── Simulated navigation helpers ──
  function simulateKeyDown(key: string) {
    try {
      const event = document.createEvent("Event");
      event.initEvent("keydown", true, true);
      Object.defineProperty(event, "key", { value: key, enumerable: true, configurable: true });
      Object.defineProperty(event, "code", { value: key === "ArrowDown" ? "ArrowDown" : "ArrowUp", enumerable: true, configurable: true });
      document.dispatchEvent(event);
    } catch (e) {
      console.error("Failed to simulate key down:", e);
    }
  }

  function sleep(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  async function runBenchmark() {
    // Reset the FPS counter
    resetCounter();

    const totalRows = props.data.rows.length;
    if (totalRows === 0) {
      setBenchmarkStatus("No rows to benchmark");
      return;
    }

    // Reset state
    fpsValues = [];
    maxRenderOps = 0;
    maxQuads = 0;
    lastContextSpy = null;
    setDrawStats(null);
    setContextSpy(null);
    setBenchmarkRunning(true);
    setBenchmarkDone(false);

    // Ensure FPS listener is attached
    attachFpsListener();

    // Small initial delay to let everything settle
    setBenchmarkStatus("Starting benchmark...");
    await sleep(1500);

    for (let cycle = 0; cycle < TOTAL_CYCLES; cycle++) {
      if (cancelled) return;
      // ── Navigate DOWN through all rows ──
      for (let i = 0; i < totalRows - 1; i++) {
        if (cancelled) return;
        setBenchmarkStatus(
          `Cycle ${cycle + 1}/${TOTAL_CYCLES} - Down ${i + 1}/${totalRows - 1}`
        );
        simulateKeyDown("ArrowDown");
        await sleep(NAV_DELAY_MS);
      }

      if (cancelled) return;
      // ── Navigate UP through all rows ──
      for (let i = 0; i < totalRows - 1; i++) {
        if (cancelled) return;
        setBenchmarkStatus(
          `Cycle ${cycle + 1}/${TOTAL_CYCLES} - Up ${i + 1}/${totalRows - 1}`
        );
        simulateKeyDown("ArrowUp");
        await sleep(NAV_DELAY_MS);
      }
    }

    if (cancelled) return;

    // Compute results
    batch(() => {
      setBenchmarkDone(true);
      setBenchmarkRunning(false);
    });

    // Publish the peak draw counts and the GL call breakdown collected during the run
    setDrawStats({ renderOps: maxRenderOps, quads: maxQuads });
    setContextSpy(lastContextSpy);

    if (fpsValues.length > 0) {
      const sum = fpsValues.reduce((a, b) => a + b, 0);
      const avg = sum / fpsValues.length;
      const min = Math.min(...fpsValues);
      const max = Math.max(...fpsValues);
      setBenchmarkStatus(
        `Avg: ${avg.toFixed(1)} FPS  |  Min: ${min.toFixed(1)}  |  Max: ${max.toFixed(1)}  |  Samples: ${fpsValues.length}`
      );
    } else {
      setBenchmarkStatus("Done - No FPS samples collected");
    }
  }

  // ── Kick off benchmark once data has loaded ──
  createEffect(() => {
    const rows = props.data?.rows;
    if (!rows || rows.length === 0) return;

    // Wait for the first row's items to resolve (they are resources)
    const firstItems = rows[0].items();
    if (firstItems && firstItems.length > 0) {
      if (!dataLoaded()) {
        const startTime = performance.now();
        setDataLoaded(true);
        renderer.on('idle', () => {
          if (renderTime() === null) {
            setRenderTime(performance.now() - startTime);
          }
        });
      }

      if (!benchmarkDone() && !benchmarkRunning()) {
        // Attach FPS listener early
        attachFpsListener();
        // Start the benchmark after a brief setup time
        const timeoutId = setTimeout(() => {
          if (!cancelled) runBenchmark();
        }, 2000);
        onCleanup(() => clearTimeout(timeoutId));
      }
    }
  });

  const delayedBackgrounds = debounce(setGlobalBackground, 800);
  const delayedHero = debounce((content: {}) => setHeroContent(content || {}), 600);

  createEffect(
    on(
      activeElement,
      (elm) => {
        if (!elm) return;
        const item = elm.item || ({} as any);

        if (firstRun) {
          item.backdrop && setGlobalBackground(item.backdrop);
          item.heroContent && setHeroContent(item.heroContent);
          firstRun = false;
        } else {
          item.backdrop && delayedBackgrounds(item.backdrop);
          item.heroContent && delayedHero(item.heroContent);
        }
      },
      { defer: true }
    )
  );

  function onRowChanged(this: ElementNode, selectedIndex, column, row, lastIndex) {
    if (selectedIndex === lastIndex) return;

    const values = selectedIndex === 0 ? { y: 300, alpha: 1 } : { y: 200, alpha: 0 };
    contentBlock.animate(values, { duration: 300, easing: "ease-in-out" }).start();

    const values2 = selectedIndex === 0 ? { y: 80, alpha: 1 } : { y: 0, alpha: 0 };
    solidLogo.animate(values2, { duration: 300, easing: "ease-in-out" }).start();
  }

  // ── Overlay styles ──
  const overlayBgStyle = {
    width: 700,
    height: 140,
    color: 0x000000cc,
    borderRadius: 12,
  };

  const overlayTitleStyle = {
    fontFamily: "Roboto",
    fontSize: 28,
    color: 0xffffffff,
    lineHeight: 34,
  };

  const overlayStatusStyle = {
    fontFamily: "Roboto",
    fontSize: 22,
    lineHeight: 28,
  };

  // ── Top-left results overlay (shown at the end of the test) ──
  const resultsBgStyle = {
    color: 0x000000ff,
    borderRadius: 12,
  };

  const OVERLAY_WIDTH = 560;
  const ROW_H = 28;

  const resultsLabelStyle = {
    fontFamily: "Roboto",
    fontSize: 20,
    lineHeight: 28,
    color: 0xaaaaaaff,
  };

  const resultsValueStyle = {
    fontFamily: "Roboto",
    fontSize: 20,
    lineHeight: 28,
    color: 0xffffffff,
  };

  // One label/value row in the results overlay
  const ResultRow = (rowProps: { y: number; label: string; value: string }) => (
    <view y={rowProps.y}>
      <text x={20} style={resultsLabelStyle}>
        {rowProps.label}
      </text>
      <text x={340} style={resultsValueStyle}>
        {rowProps.value}
      </text>
    </view>
  );

  const webGlLabel = (caps: RendererCapabilities) =>
    caps.renderMode === "webgl" ? `WebGL ${caps.webGlVersion ?? "?"}` : "Canvas2D";

  // contextSpyData entries (GL call → count for the sampled frame), busiest first.
  // Empty when context spy is disabled (enable with ?contextSpy=true) or on Canvas.
  const glEntries = (): [string, number][] => {
    const spy = contextSpy();
    if (!spy) return [];
    return Object.entries(spy).sort((a, b) => b[1] - a[1]);
  };

  // ── Reactive vertical layout for the results overlay ──
  const GL_HEADER_Y = 116;
  const glStartY = GL_HEADER_Y + 28; // first GL row sits below its header
  const glRowsHeight = () => Math.max(glEntries().length, 1) * ROW_H;
  const dividerY = () => glStartY + glRowsHeight() + 8;
  const capsStartY = () => dividerY() + 16;
  const overlayHeight = () => capsStartY() + 5 * ROW_H + 16;

  return (
    <Show when={dataLoaded()} fallback={<text x={960} y={540} fontSize={40} color={0xffffffff} mount={0.5}>Loading Data...</text>}>
      <view forwardFocus={2}>
        <view ref={solidLogo} width={300} height={150} x={162} y={80} zIndex={105}>
          <text x={80} fontSize={28} color={0xf6f6f699}>
            Built With:
          </text>
          <view y={32} src="./assets/solidWord.png" width={280} height={52} />

          <view x={0} y={110} src="./assets/tmdb.png" width={80} height={41} />
          <text x={90} y={110} contain="width" width={160} fontSize={12} color={0xf6f6f699}>
            This product uses the TMDB API but is not endorsed or certified by TMDB.
          </text>
        </view>

        <ContentBlock ref={contentBlock} y={300} x={162} content={heroContent()} />
        <LazyColumn
          ref={columnRef}
          y={500}
          upCount={3}
          each={props.data.rows}
          id="BenchmarkColumn"
          onSelectedChanged={onRowChanged}
          onEnter={() => setOpenPanel(true)}
          autofocus={props.data.rows[0].items()}
          gap={40}
          throttleInput={250}
          style={styles.Column}
        >
          {(row) =>
            row().type === "Hero" ? (
              <LazyRow
                gap={80}
                upCount={2}
                bufferSize={1}
                scroll="center"
                centerScroll
                each={row().items()}
                y={50}
                height={row().height}
              >
                {(item) => <Hero item={item()} />}
              </LazyRow>
            ) : (
              <TitleRow row={row()} title={row().title} height={row().height} items={row().items()} />
            )
          }
        </LazyColumn>

        {/* ── Benchmark Overlay ── */}
        <view x={610} y={20} zIndex={200} style={overlayBgStyle}>
          <text x={20} y={16} style={overlayTitleStyle}>
            Benchmark (version: ###)
          </text>
          <text
            x={360}
            y={20}
            width={320}
            contain="width"
            textAlign="right"
            fontSize={24}
            color={bundleType.includes("LEGACY") ? 0xffcc00ff : 0x00ff88ff}
          >
            {bundleType}
          </text>
          <text
            x={20}
            y={54}
            contain="width"
            width={660}
            style={overlayStatusStyle}
            color={benchmarkDone() ? 0x00ff88ff : benchmarkRunning() ? 0xffcc00ff : 0xaaaaaaff}
          >
            {benchmarkStatus()}
          </text>
          <text
            x={20}
            y={92}
            style={overlayStatusStyle}
            color={0x00ff88ff}
          >
            {renderTime() !== null ? `Initial Render: ${renderTime()?.toFixed(2)}ms` : "Rendering..."}
          </text>
        </view>

        {/* ── Results Overlay (top-left, appears when the test finishes) ── */}
        <Show when={benchmarkDone()}>
          <view x={40} y={20} zIndex={8000} width={OVERLAY_WIDTH} height={overlayHeight()} style={resultsBgStyle}>
            <text x={20} y={16} style={overlayTitleStyle}>
              Test Results
            </text>

            <ResultRow
              y={60}
              label="Draw Calls"
              value={drawStats() ? `${drawStats()!.renderOps}` : "—"}
            />
            <ResultRow
              y={88}
              label="Quads"
              value={drawStats() ? `${drawStats()!.quads}` : "—"}
            />

            {/* WebGL call breakdown (per sampled frame, from contextSpyData) */}
            <text x={20} y={GL_HEADER_Y} style={resultsLabelStyle}>
              GL Calls / frame
            </text>
            <Show
              when={glEntries().length > 0}
              fallback={
                <text x={200} y={GL_HEADER_Y} style={resultsValueStyle}>
                  off (?contextSpy=true)
                </text>
              }
            >
              <For each={glEntries()}>
                {([name, count], i) => (
                  <ResultRow y={glStartY + i() * ROW_H} label={name} value={`${count}`} />
                )}
              </For>
            </Show>

            <view y={dividerY()} width={OVERLAY_WIDTH - 40} height={1} x={20} color={0xffffff33} />

            <Show
              when={capabilities()}
              fallback={
                <text x={20} y={capsStartY()} style={resultsLabelStyle}>
                  Capabilities unavailable
                </text>
              }
            >
              <ResultRow y={capsStartY()} label="Render Mode" value={capabilities()!.renderMode} />
              <ResultRow y={capsStartY() + ROW_H} label="WebGL Version" value={webGlLabel(capabilities()!)} />
              <ResultRow
                y={capsStartY() + 2 * ROW_H}
                label="Vertex Array Obj"
                value={capabilities()!.vertexArrayObject ? "Yes" : "No"}
              />
              <ResultRow
                y={capsStartY() + 3 * ROW_H}
                label="Max Texture Size"
                value={`${capabilities()!.maxTextureSize}`}
              />
              <ResultRow
                y={capsStartY() + 4 * ROW_H}
                label="Max Texture Units"
                value={`${capabilities()!.maxTextureUnits}`}
              />
            </Show>
          </view>
        </Show>

        <AssetPanel
          onFocus={storeFocus}
          close={() => {
            setOpenPanel(false);
            restoreFocus();
            return true;
          }}
          open={openPanel()}
          item={heroContent()}
        />
      </view>
    </Show>
  );
};

export default Benchmark;
