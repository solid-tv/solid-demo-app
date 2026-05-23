import { createEffect, on, createSignal, batch, Show, onCleanup } from "solid-js";
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

  // ── Benchmark state ──
  const [benchmarkStatus, setBenchmarkStatus] = createSignal("Waiting for data...");
  const [benchmarkRunning, setBenchmarkRunning] = createSignal(false);
  const [benchmarkDone, setBenchmarkDone] = createSignal(false);
  const [dataLoaded, setDataLoaded] = createSignal(false);
  const [renderTime, setRenderTime] = createSignal<number | null>(null);

  // FPS tracking
  let fpsValues: number[] = [];
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
      }
    });
  }

  // ── Simulated navigation helpers ──
  function simulateKeyDown(key: string) {
    const event = new KeyboardEvent("keydown", {
      key,
      code: key === "ArrowDown" ? "ArrowDown" : "ArrowUp",
      bubbles: true,
      cancelable: true,
    });
    document.dispatchEvent(event);
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
