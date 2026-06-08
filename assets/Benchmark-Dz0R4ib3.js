import { U as onCleanup, b as createSignal, J as useFocusStack, i as createEffect, aa as renderer, D as debounce, s as setGlobalBackground, j as on, G as activeElement, l as createComponent, S as Show, c as createElement, n as insertNode, a as setProp, p as createTextNode, k as insert, H as ContentBlock, a5 as LazyColumn, L as LazyRow, ab as Hero, a6 as TitleRow, O as styles, N as memo, ac as AssetPanel, m as effect, ad as resetCounter, f as batch, v as use } from "./index-B8BJwnj9.js";

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
    const [capabilities, setCapabilities] = createSignal(null);
    const [drawStats, setDrawStats] = createSignal(null);
    let fpsValues = [];
    let maxRenderOps = 0;
    let maxQuads = 0;
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
                if (typeof fpsData === "object" && fpsData) {
                    if (typeof fpsData.renderOps === "number") {
                        maxRenderOps = Math.max(maxRenderOps, fpsData.renderOps);
                    }
                    if (typeof fpsData.quads === "number") {
                        maxQuads = Math.max(maxQuads, fpsData.quads);
                    }
                    if (fpsData.capabilities && !capabilities()) {
                        setCapabilities(fpsData.capabilities);
                    }
                }
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
        maxRenderOps = 0;
        maxQuads = 0;
        setDrawStats(null);
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
        setDrawStats({
            renderOps: maxRenderOps,
            quads: maxQuads
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
    const resultsBgStyle = {
        width: 460,
        height: 296,
        color: 204,
        borderRadius: 12
    };
    const resultsLabelStyle = {
        fontFamily: "Roboto",
        fontSize: 20,
        lineHeight: 28,
        color: 2863311615
    };
    const resultsValueStyle = {
        fontFamily: "Roboto",
        fontSize: 20,
        lineHeight: 28,
        color: 4294967295
    };
    const ResultRow = rowProps => (() => {
        var _el$ = createElement("view"), _el$2 = createElement("text"), _el$3 = createElement("text");
        insertNode(_el$, _el$2);
        insertNode(_el$, _el$3);
        setProp(_el$2, "x", 20);
        setProp(_el$2, "style", resultsLabelStyle);
        insert(_el$2, () => rowProps.label);
        setProp(_el$3, "x", 240);
        setProp(_el$3, "style", resultsValueStyle);
        insert(_el$3, () => rowProps.value);
        effect(_$p => setProp(_el$, "y", rowProps.y, _$p));
        return _el$;
    })();
    const webGlLabel = caps => {
        var _a;
        return caps.renderMode === "webgl" ? "WebGL ".concat((_a = caps.webGlVersion) != null ? _a : "?") : "Canvas2D";
    };
    return createComponent(Show, {
        get when() {
            return dataLoaded();
        },
        get fallback() {
            return (() => {
                var _el$19 = createElement("text");
                insertNode(_el$19, createTextNode("Loading Data..."));
                setProp(_el$19, "x", 960);
                setProp(_el$19, "y", 540);
                setProp(_el$19, "fontSize", 40);
                setProp(_el$19, "color", 4294967295);
                setProp(_el$19, "mount", .5);
                return _el$19;
            })();
        },
        get children() {
            var _el$4 = createElement("view"), _el$5 = createElement("view"), _el$6 = createElement("text"), _el$8 = createElement("view"), _el$9 = createElement("view"), _el$0 = createElement("text"), _el$10 = createElement("view"), _el$11 = createElement("text"), _el$13 = createElement("text"), _el$14 = createElement("text");
            insertNode(_el$4, _el$5);
            insertNode(_el$4, _el$10);
            setProp(_el$4, "forwardFocus", 2);
            insertNode(_el$5, _el$6);
            insertNode(_el$5, _el$8);
            insertNode(_el$5, _el$9);
            insertNode(_el$5, _el$0);
            var _ref$ = solidLogo;
            typeof _ref$ === "function" ? use(_ref$, _el$5) : solidLogo = _el$5;
            setProp(_el$5, "width", 300);
            setProp(_el$5, "height", 150);
            setProp(_el$5, "x", 162);
            setProp(_el$5, "y", 80);
            setProp(_el$5, "zIndex", 105);
            insertNode(_el$6, createTextNode("Built With:"));
            setProp(_el$6, "x", 80);
            setProp(_el$6, "fontSize", 28);
            setProp(_el$6, "color", 4143380121);
            setProp(_el$8, "y", 32);
            setProp(_el$8, "src", "./assets/solidWord.png");
            setProp(_el$8, "width", 280);
            setProp(_el$8, "height", 52);
            setProp(_el$9, "x", 0);
            setProp(_el$9, "y", 110);
            setProp(_el$9, "src", "./assets/tmdb.png");
            setProp(_el$9, "width", 80);
            setProp(_el$9, "height", 41);
            insertNode(_el$0, createTextNode("This product uses the TMDB API but is not endorsed or certified by TMDB."));
            setProp(_el$0, "x", 90);
            setProp(_el$0, "y", 110);
            setProp(_el$0, "contain", "width");
            setProp(_el$0, "width", 160);
            setProp(_el$0, "fontSize", 12);
            setProp(_el$0, "color", 4143380121);
            insert(_el$4, createComponent(ContentBlock, {
                ref(r$) {
                    var _ref$2 = contentBlock;
                    typeof _ref$2 === "function" ? _ref$2(r$) : contentBlock = r$;
                },
                y: 300,
                x: 162,
                get content() {
                    return heroContent();
                }
            }), _el$10);
            insert(_el$4, createComponent(LazyColumn, {
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
            }), _el$10);
            insertNode(_el$10, _el$11);
            insertNode(_el$10, _el$13);
            insertNode(_el$10, _el$14);
            setProp(_el$10, "x", 610);
            setProp(_el$10, "y", 20);
            setProp(_el$10, "zIndex", 200);
            setProp(_el$10, "style", overlayBgStyle);
            insertNode(_el$11, createTextNode("Benchmark (version: ###)"));
            setProp(_el$11, "x", 20);
            setProp(_el$11, "y", 16);
            setProp(_el$11, "style", overlayTitleStyle);
            setProp(_el$13, "x", 20);
            setProp(_el$13, "y", 54);
            setProp(_el$13, "contain", "width");
            setProp(_el$13, "width", 660);
            setProp(_el$13, "style", overlayStatusStyle);
            insert(_el$13, benchmarkStatus);
            setProp(_el$14, "x", 20);
            setProp(_el$14, "y", 92);
            setProp(_el$14, "style", overlayStatusStyle);
            setProp(_el$14, "color", 16746751);
            insert(_el$14, (() => {
                var _c$ = memo(() => renderTime() !== null);
                return () => {
                    var _a;
                    return _c$() ? "Initial Render: ".concat((_a = renderTime()) == null ? void 0 : _a.toFixed(2), "ms") : "Rendering...";
                };
            })());
            insert(_el$4, createComponent(Show, {
                get when() {
                    return benchmarkDone();
                },
                get children() {
                    var _el$15 = createElement("view"), _el$16 = createElement("text"), _el$18 = createElement("view");
                    insertNode(_el$15, _el$16);
                    insertNode(_el$15, _el$18);
                    setProp(_el$15, "x", 40);
                    setProp(_el$15, "y", 20);
                    setProp(_el$15, "zIndex", 210);
                    setProp(_el$15, "style", resultsBgStyle);
                    insertNode(_el$16, createTextNode("Test Results"));
                    setProp(_el$16, "x", 20);
                    setProp(_el$16, "y", 16);
                    setProp(_el$16, "style", overlayTitleStyle);
                    insert(_el$15, createComponent(ResultRow, {
                        y: 60,
                        label: "Draw Calls",
                        get value() {
                            return memo(() => !!drawStats())() ? "".concat(drawStats().renderOps) : "—";
                        }
                    }), _el$18);
                    insert(_el$15, createComponent(ResultRow, {
                        y: 88,
                        label: "Quads",
                        get value() {
                            return memo(() => !!drawStats())() ? "".concat(drawStats().quads) : "—";
                        }
                    }), _el$18);
                    setProp(_el$18, "y", 128);
                    setProp(_el$18, "width", 420);
                    setProp(_el$18, "height", 1);
                    setProp(_el$18, "x", 20);
                    setProp(_el$18, "color", 4294967091);
                    insert(_el$15, createComponent(Show, {
                        get when() {
                            return capabilities();
                        },
                        get fallback() {
                            return (() => {
                                var _el$21 = createElement("text");
                                insertNode(_el$21, createTextNode("Capabilities unavailable"));
                                setProp(_el$21, "x", 20);
                                setProp(_el$21, "y", 140);
                                setProp(_el$21, "style", resultsLabelStyle);
                                return _el$21;
                            })();
                        },
                        get children() {
                            return [ createComponent(ResultRow, {
                                y: 140,
                                label: "Render Mode",
                                get value() {
                                    return capabilities().renderMode;
                                }
                            }), createComponent(ResultRow, {
                                y: 168,
                                label: "WebGL Version",
                                get value() {
                                    return webGlLabel(capabilities());
                                }
                            }), createComponent(ResultRow, {
                                y: 196,
                                label: "Vertex Array Obj",
                                get value() {
                                    return capabilities().vertexArrayObject ? "Yes" : "No";
                                }
                            }), createComponent(ResultRow, {
                                y: 224,
                                label: "Max Texture Size",
                                get value() {
                                    return "".concat(capabilities().maxTextureSize);
                                }
                            }), createComponent(ResultRow, {
                                y: 252,
                                label: "Max Texture Units",
                                get value() {
                                    return "".concat(capabilities().maxTextureUnits);
                                }
                            }) ];
                        }
                    }), null);
                    return _el$15;
                }
            }), null);
            insert(_el$4, createComponent(AssetPanel, {
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
            effect(_$p => setProp(_el$13, "color", benchmarkDone() ? 16746751 : benchmarkRunning() ? 4291559679 : 2863311615, _$p));
            return _el$4;
        }
    });
};

export { Benchmark as default };
