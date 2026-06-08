import { U as onCleanup, b as createSignal, J as useFocusStack, i as createEffect, aa as renderer, D as debounce, s as setGlobalBackground, j as on, G as activeElement, l as createComponent, S as Show, c as createElement, n as insertNode, a as setProp, p as createTextNode, k as insert, H as ContentBlock, a5 as LazyColumn, L as LazyRow, ab as Hero, a6 as TitleRow, O as styles, N as memo, ac as AssetPanel, m as effect, ad as resetCounter, f as batch, v as use } from "./index-Dbq-Q8p_.js";

const TOTAL_CYCLES = 2;

const NAV_DELAY_MS = 300;

const Benchmark = props => {
    let cancelled = false;
    onCleanup(() => {
        cancelled = true;
    });
    const [heroContent, setHeroContent] = createSignal({});
    const [openPanel, setOpenPanel] = createSignal(false);
    const {storeFocus: storeFocus, restoreFocus: restoreFocus} = useFocusStack();
    let contentBlock, solidLogo, firstRun = true;
    let columnRef;
    const [benchmarkStatus, setBenchmarkStatus] = createSignal("Waiting for data...");
    const [benchmarkRunning, setBenchmarkRunning] = createSignal(false);
    const [benchmarkDone, setBenchmarkDone] = createSignal(false);
    const [dataLoaded, setDataLoaded] = createSignal(false);
    const [renderTime, setRenderTime] = createSignal(null);
    let fpsValues = [];
    let fpsListenerAttached = false;
    function attachFpsListener() {
        if (fpsListenerAttached) return;
        const root = renderer;
        if (!root) return;
        fpsListenerAttached = true;
        root.on("fpsUpdate", (_target, fpsData) => {
            const fps = typeof fpsData === "number" ? fpsData : fpsData.fps;
            if (fps > 5 && benchmarkRunning()) {
                fpsValues.push(fps);
            }
        });
    }
    function simulateKeyDown(key) {
        const event = new KeyboardEvent("keydown", {
            key: key,
            code: key === "ArrowDown" ? "ArrowDown" : "ArrowUp",
            bubbles: true,
            cancelable: true
        });
        document.dispatchEvent(event);
    }
    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    async function runBenchmark() {
        resetCounter();
        const totalRows = props.data.rows.length;
        if (totalRows === 0) {
            setBenchmarkStatus("No rows to benchmark");
            return;
        }
        fpsValues = [];
        setBenchmarkRunning(true);
        setBenchmarkDone(false);
        attachFpsListener();
        setBenchmarkStatus("Starting benchmark...");
        await sleep(1500);
        for (let cycle = 0; cycle < TOTAL_CYCLES; cycle++) {
            if (cancelled) return;
            for (let i = 0; i < totalRows - 1; i++) {
                if (cancelled) return;
                setBenchmarkStatus("Cycle ".concat(cycle + 1, "/").concat(TOTAL_CYCLES, " - Down ").concat(i + 1, "/").concat(totalRows - 1));
                simulateKeyDown("ArrowDown");
                await sleep(NAV_DELAY_MS);
            }
            if (cancelled) return;
            for (let i = 0; i < totalRows - 1; i++) {
                if (cancelled) return;
                setBenchmarkStatus("Cycle ".concat(cycle + 1, "/").concat(TOTAL_CYCLES, " - Up ").concat(i + 1, "/").concat(totalRows - 1));
                simulateKeyDown("ArrowUp");
                await sleep(NAV_DELAY_MS);
            }
        }
        if (cancelled) return;
        batch(() => {
            setBenchmarkDone(true);
            setBenchmarkRunning(false);
        });
        if (fpsValues.length > 0) {
            const sum = fpsValues.reduce((a, b) => a + b, 0);
            const avg = sum / fpsValues.length;
            const min = Math.min(...fpsValues);
            const max = Math.max(...fpsValues);
            setBenchmarkStatus("Avg: ".concat(avg.toFixed(1), " FPS  |  Min: ").concat(min.toFixed(1), "  |  Max: ").concat(max.toFixed(1), "  |  Samples: ").concat(fpsValues.length));
        } else {
            setBenchmarkStatus("Done - No FPS samples collected");
        }
    }
    createEffect(() => {
        var _a;
        const rows = (_a = props.data) == null ? void 0 : _a.rows;
        if (!rows || rows.length === 0) return;
        const firstItems = rows[0].items();
        if (firstItems && firstItems.length > 0) {
            if (!dataLoaded()) {
                const startTime = performance.now();
                setDataLoaded(true);
                renderer.on("idle", () => {
                    if (renderTime() === null) {
                        setRenderTime(performance.now() - startTime);
                    }
                });
            }
            if (!benchmarkDone() && !benchmarkRunning()) {
                attachFpsListener();
                const timeoutId = setTimeout(() => {
                    if (!cancelled) runBenchmark();
                }, 2e3);
                onCleanup(() => clearTimeout(timeoutId));
            }
        }
    });
    const delayedBackgrounds = debounce(setGlobalBackground, 800);
    const delayedHero = debounce(content => setHeroContent(content || {}), 600);
    createEffect(on(activeElement, elm => {
        if (!elm) return;
        const item = elm.item || {};
        if (firstRun) {
            item.backdrop && setGlobalBackground(item.backdrop);
            item.heroContent && setHeroContent(item.heroContent);
            firstRun = false;
        } else {
            item.backdrop && delayedBackgrounds(item.backdrop);
            item.heroContent && delayedHero(item.heroContent);
        }
    }, {
        defer: true
    }));
    function onRowChanged(selectedIndex, column, row, lastIndex) {
        if (selectedIndex === lastIndex) return;
        const values = selectedIndex === 0 ? {
            y: 300,
            alpha: 1
        } : {
            y: 200,
            alpha: 0
        };
        contentBlock.animate(values, {
            duration: 300,
            easing: "ease-in-out"
        }).start();
        const values2 = selectedIndex === 0 ? {
            y: 80,
            alpha: 1
        } : {
            y: 0,
            alpha: 0
        };
        solidLogo.animate(values2, {
            duration: 300,
            easing: "ease-in-out"
        }).start();
    }
    const overlayBgStyle = {
        width: 700,
        height: 140,
        color: 204,
        borderRadius: 12
    };
    const overlayTitleStyle = {
        fontFamily: "Roboto",
        fontSize: 28,
        color: 4294967295,
        lineHeight: 34
    };
    const overlayStatusStyle = {
        fontFamily: "Roboto",
        fontSize: 22,
        lineHeight: 28
    };
    return createComponent(Show, {
        get when() {
            return dataLoaded();
        },
        get fallback() {
            return (() => {
                var _el$12 = createElement("text");
                insertNode(_el$12, createTextNode("Loading Data..."));
                setProp(_el$12, "x", 960);
                setProp(_el$12, "y", 540);
                setProp(_el$12, "fontSize", 40);
                setProp(_el$12, "color", 4294967295);
                setProp(_el$12, "mount", .5);
                return _el$12;
            })();
        },
        get children() {
            var _el$ = createElement("view"), _el$2 = createElement("view"), _el$3 = createElement("text"), _el$5 = createElement("view"), _el$6 = createElement("view"), _el$7 = createElement("text"), _el$9 = createElement("view"), _el$0 = createElement("text"), _el$10 = createElement("text"), _el$11 = createElement("text");
            insertNode(_el$, _el$2);
            insertNode(_el$, _el$9);
            setProp(_el$, "forwardFocus", 2);
            insertNode(_el$2, _el$3);
            insertNode(_el$2, _el$5);
            insertNode(_el$2, _el$6);
            insertNode(_el$2, _el$7);
            var _ref$ = solidLogo;
            typeof _ref$ === "function" ? use(_ref$, _el$2) : solidLogo = _el$2;
            setProp(_el$2, "width", 300);
            setProp(_el$2, "height", 150);
            setProp(_el$2, "x", 162);
            setProp(_el$2, "y", 80);
            setProp(_el$2, "zIndex", 105);
            insertNode(_el$3, createTextNode("Built With:"));
            setProp(_el$3, "x", 80);
            setProp(_el$3, "fontSize", 28);
            setProp(_el$3, "color", 4143380121);
            setProp(_el$5, "y", 32);
            setProp(_el$5, "src", "./assets/solidWord.png");
            setProp(_el$5, "width", 280);
            setProp(_el$5, "height", 52);
            setProp(_el$6, "x", 0);
            setProp(_el$6, "y", 110);
            setProp(_el$6, "src", "./assets/tmdb.png");
            setProp(_el$6, "width", 80);
            setProp(_el$6, "height", 41);
            insertNode(_el$7, createTextNode("This product uses the TMDB API but is not endorsed or certified by TMDB."));
            setProp(_el$7, "x", 90);
            setProp(_el$7, "y", 110);
            setProp(_el$7, "contain", "width");
            setProp(_el$7, "width", 160);
            setProp(_el$7, "fontSize", 12);
            setProp(_el$7, "color", 4143380121);
            insert(_el$, createComponent(ContentBlock, {
                ref(r$) {
                    var _ref$2 = contentBlock;
                    typeof _ref$2 === "function" ? _ref$2(r$) : contentBlock = r$;
                },
                y: 300,
                x: 162,
                get content() {
                    return heroContent();
                }
            }), _el$9);
            insert(_el$, createComponent(LazyColumn, {
                ref(r$) {
                    var _ref$3 = columnRef;
                    typeof _ref$3 === "function" ? _ref$3(r$) : columnRef = r$;
                },
                y: 500,
                upCount: 3,
                get each() {
                    return props.data.rows;
                },
                id: "BenchmarkColumn",
                onSelectedChanged: onRowChanged,
                onEnter: () => setOpenPanel(true),
                get autofocus() {
                    return props.data.rows[0].items();
                },
                gap: 40,
                throttleInput: 250,
                get style() {
                    return styles.Column;
                },
                children: row => row().type === "Hero" ? createComponent(LazyRow, {
                    gap: 80,
                    upCount: 2,
                    bufferSize: 1,
                    scroll: "center",
                    centerScroll: true,
                    get each() {
                        return row().items();
                    },
                    y: 50,
                    get height() {
                        return row().height;
                    },
                    children: item => createComponent(Hero, {
                        get item() {
                            return item();
                        }
                    })
                }) : createComponent(TitleRow, {
                    get row() {
                        return row();
                    },
                    get title() {
                        return row().title;
                    },
                    get height() {
                        return row().height;
                    },
                    get items() {
                        return row().items();
                    }
                })
            }), _el$9);
            insertNode(_el$9, _el$0);
            insertNode(_el$9, _el$10);
            insertNode(_el$9, _el$11);
            setProp(_el$9, "x", 610);
            setProp(_el$9, "y", 20);
            setProp(_el$9, "zIndex", 200);
            setProp(_el$9, "style", overlayBgStyle);
            insertNode(_el$0, createTextNode("Benchmark (version: ###)"));
            setProp(_el$0, "x", 20);
            setProp(_el$0, "y", 16);
            setProp(_el$0, "style", overlayTitleStyle);
            setProp(_el$10, "x", 20);
            setProp(_el$10, "y", 54);
            setProp(_el$10, "contain", "width");
            setProp(_el$10, "width", 660);
            setProp(_el$10, "style", overlayStatusStyle);
            insert(_el$10, benchmarkStatus);
            setProp(_el$11, "x", 20);
            setProp(_el$11, "y", 92);
            setProp(_el$11, "style", overlayStatusStyle);
            setProp(_el$11, "color", 16746751);
            insert(_el$11, (() => {
                var _c$ = memo(() => renderTime() !== null);
                return () => {
                    var _a;
                    return _c$() ? "Initial Render: ".concat((_a = renderTime()) == null ? void 0 : _a.toFixed(2), "ms") : "Rendering...";
                };
            })());
            insert(_el$, createComponent(AssetPanel, {
                onFocus: storeFocus,
                close: () => {
                    setOpenPanel(false);
                    restoreFocus();
                    return true;
                },
                get open() {
                    return openPanel();
                },
                get item() {
                    return heroContent();
                }
            }), null);
            effect(_$p => setProp(_el$10, "color", benchmarkDone() ? 16746751 : benchmarkRunning() ? 4291559679 : 2863311615, _$p));
            return _el$;
        }
    });
};

export { Benchmark as default };
