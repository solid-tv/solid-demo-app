import { a as createSignal, B as useFocusStack, g as createEffect, y as debounce, s as setGlobalBackground, i as on, z as activeElement, c as createComponent, V as View, T as Text, A as ContentBlock, a3 as LazyColumn, L as LazyRow, a8 as Hero, a4 as TitleRow, J as styles, H as memo, a9 as AssetPanel, aa as renderer, ab as resetCounter, e as batch } from "./index-_Zc8cEoi.js";

const TOTAL_CYCLES = 2;

const NAV_DELAY_MS = 300;

const Benchmark = props => {
    const [heroContent, setHeroContent] = createSignal({});
    const [openPanel, setOpenPanel] = createSignal(false);
    const {storeFocus: storeFocus, restoreFocus: restoreFocus} = useFocusStack();
    let contentBlock, solidLogo, firstRun = true;
    let columnRef;
    const [benchmarkStatus, setBenchmarkStatus] = createSignal("Waiting for data...");
    const [benchmarkRunning, setBenchmarkRunning] = createSignal(false);
    const [benchmarkDone, setBenchmarkDone] = createSignal(false);
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
            for (let i = 0; i < totalRows - 1; i++) {
                setBenchmarkStatus("Cycle ".concat(cycle + 1, "/").concat(TOTAL_CYCLES, " - Down ").concat(i + 1, "/").concat(totalRows - 1));
                simulateKeyDown("ArrowDown");
                await sleep(NAV_DELAY_MS);
            }
            for (let i = 0; i < totalRows - 1; i++) {
                setBenchmarkStatus("Cycle ".concat(cycle + 1, "/").concat(TOTAL_CYCLES, " - Up ").concat(i + 1, "/").concat(totalRows - 1));
                simulateKeyDown("ArrowUp");
                await sleep(NAV_DELAY_MS);
            }
        }
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
        if (firstItems && firstItems.length > 0 && !benchmarkDone() && !benchmarkRunning()) {
            attachFpsListener();
            setTimeout(() => runBenchmark(), 2e3);
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
        height: 100,
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
    return createComponent(View, {
        forwardFocus: 2,
        get children() {
            return [ createComponent(View, {
                ref(r$) {
                    var _ref$ = solidLogo;
                    typeof _ref$ === "function" ? _ref$(r$) : solidLogo = r$;
                },
                width: 300,
                height: 150,
                x: 162,
                y: 80,
                zIndex: 105,
                get children() {
                    return [ createComponent(Text, {
                        x: 80,
                        fontSize: 28,
                        color: 4143380121,
                        children: "Built With:"
                    }), createComponent(View, {
                        y: 32,
                        src: "./assets/solidWord.png",
                        width: 280,
                        height: 52
                    }), createComponent(View, {
                        x: 0,
                        y: 110,
                        src: "./assets/tmdb.png",
                        width: 80,
                        height: 41
                    }), createComponent(Text, {
                        x: 90,
                        y: 110,
                        contain: "width",
                        width: 160,
                        fontSize: 12,
                        color: 4143380121,
                        children: "This product uses the TMDB API but is not endorsed or certified by TMDB."
                    }) ];
                }
            }), createComponent(ContentBlock, {
                ref(r$) {
                    var _ref$2 = contentBlock;
                    typeof _ref$2 === "function" ? _ref$2(r$) : contentBlock = r$;
                },
                y: 300,
                x: 162,
                get content() {
                    return heroContent();
                }
            }), createComponent(LazyColumn, {
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
            }), createComponent(View, {
                x: 610,
                y: 20,
                zIndex: 200,
                style: overlayBgStyle,
                get children() {
                    return [ createComponent(Text, {
                        x: 20,
                        y: 16,
                        style: overlayTitleStyle,
                        children: "Benchmark"
                    }), createComponent(Text, {
                        x: 20,
                        y: 54,
                        contain: "width",
                        width: 660,
                        style: overlayStatusStyle,
                        get color() {
                            return memo(() => !!benchmarkDone())() ? 16746751 : benchmarkRunning() ? 4291559679 : 2863311615;
                        },
                        get children() {
                            return benchmarkStatus();
                        }
                    }) ];
                }
            }), createComponent(AssetPanel, {
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
            }) ];
        }
    });
};

export { Benchmark as default };
