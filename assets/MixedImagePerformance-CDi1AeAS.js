import { b as createSignal, o as onMount, c as createElement, n as insertNode, a as setProp, k as insert, l as createComponent, F as For, m as effect, $ as api, a0 as getImageUrl } from "./index-CdkOUEg0.js";

const MixedImagePerformance = () => {
    const [images, setImages] = createSignal([]);
    const [loadTime, setLoadTime] = createSignal("");
    const [status, setStatus] = createSignal("Initializing...");
    const [loadedCount, setLoadedCount] = createSignal(0);
    let startTime = 0;
    const imageLoadTimes = {};
    const totalImages = 11;
    const fetchImages = async () => {
        try {
            setStatus("Fetching images...");
            const page1 = await api.get("/movie/popular?page=1");
            const combined = page1.results.slice(0, 11);
            const newImages = combined.map((item, index) => {
                const isMain = index === 0;
                const size = isMain ? "original" : "w342";
                const path = isMain && item.backdrop_path ? item.backdrop_path : item.poster_path;
                return {
                    id: item.id,
                    src: getImageUrl(path, size),
                    title: item.title,
                    isMain: isMain
                };
            });
            startTime = performance.now();
            setImages(newImages);
            setStatus("Loading... 0/".concat(totalImages));
        } catch (error) {
            console.error("Error fetching images:", error);
            setStatus("Error fetching images");
        }
    };
    const handleImageLoaded = (index, id) => {
        const now = performance.now();
        const elapsed = now - startTime;
        imageLoadTimes[id] = elapsed;
        const currentCount = loadedCount() + 1;
        setLoadedCount(currentCount);
        setStatus("Loading... ".concat(currentCount, "/").concat(totalImages));
        performance.mark("mixed-images-loaded-".concat(currentCount));
        if (currentCount === totalImages) {
            const totalTime = now - startTime;
            setLoadTime("".concat(totalTime.toFixed(2), "ms"));
            setStatus("Loaded in ".concat(totalTime.toFixed(2), "ms"));
            console.log("Individual Mixed Image Load Times:", imageLoadTimes);
        }
    };
    onMount(() => {
        fetchImages();
    });
    const styles = {
        container: {
            width: 1920,
            height: 1080,
            x: 0,
            y: 0
        },
        mainImage: {
            width: 1152,
            height: 648,
            x: (1920 - 1152) / 2,
            y: 50
        },
        poster: {
            width: 150,
            height: 225
        },
        statusContainer: {
            width: 1920,
            height: 1080,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 100,
            position: "absolute"
        },
        statusText: {
            fontSize: 90,
            color: 4294967295
        }
    };
    return (() => {
        var _el$ = createElement("view"), _el$2 = createElement("view"), _el$3 = createElement("view"), _el$4 = createElement("view"), _el$5 = createElement("text");
        insertNode(_el$, _el$2);
        insertNode(_el$, _el$3);
        setProp(_el$2, "autofocus", true);
        insert(_el$2, createComponent(For, {
            get each() {
                return images();
            },
            children: (item, index) => {
                const i = index();
                if (item.isMain) {
                    return (() => {
                        var _el$6 = createElement("view");
                        setProp(_el$6, "onEvent", {
                            loaded: () => handleImageLoaded(i, item.id)
                        });
                        effect(_p$ => {
                            var _v$4 = styles.mainImage, _v$5 = item.src;
                            _v$4 !== _p$.e && (_p$.e = setProp(_el$6, "style", _v$4, _p$.e));
                            _v$5 !== _p$.t && (_p$.t = setProp(_el$6, "src", _v$5, _p$.t));
                            return _p$;
                        }, {
                            e: void 0,
                            t: void 0
                        });
                        return _el$6;
                    })();
                }
                const posterIndex = i - 1;
                const gap = 20;
                const startX = 120;
                const startY = 750;
                const x = startX + posterIndex * (150 + gap);
                const y = startY;
                return (() => {
                    var _el$7 = createElement("view");
                    setProp(_el$7, "x", x);
                    setProp(_el$7, "y", y);
                    setProp(_el$7, "onEvent", {
                        loaded: () => handleImageLoaded(i, item.id)
                    });
                    effect(_p$ => {
                        var _v$6 = styles.poster, _v$7 = item.src;
                        _v$6 !== _p$.e && (_p$.e = setProp(_el$7, "style", _v$6, _p$.e));
                        _v$7 !== _p$.t && (_p$.t = setProp(_el$7, "src", _v$7, _p$.t));
                        return _p$;
                    }, {
                        e: void 0,
                        t: void 0
                    });
                    return _el$7;
                })();
            }
        }));
        insertNode(_el$3, _el$4);
        setProp(_el$3, "pointerEvents", "none");
        insertNode(_el$4, _el$5);
        setProp(_el$4, "display", "flex");
        setProp(_el$4, "justifyContent", "center");
        setProp(_el$4, "alignItems", "center");
        setProp(_el$4, "color", 204);
        setProp(_el$4, "width", 900);
        setProp(_el$4, "height", 200);
        setProp(_el$4, "padding", 20);
        insert(_el$5, status);
        effect(_p$ => {
            var _v$ = styles.container, _v$2 = styles.statusContainer, _v$3 = styles.statusText;
            _v$ !== _p$.e && (_p$.e = setProp(_el$2, "style", _v$, _p$.e));
            _v$2 !== _p$.t && (_p$.t = setProp(_el$3, "style", _v$2, _p$.t));
            _v$3 !== _p$.a && (_p$.a = setProp(_el$5, "style", _v$3, _p$.a));
            return _p$;
        }, {
            e: void 0,
            t: void 0,
            a: void 0
        });
        return _el$;
    })();
};

export { MixedImagePerformance as default };
//# sourceMappingURL=MixedImagePerformance-CDi1AeAS.js.map
