import { $ as onMount, A as For, a as createElement, c as effect, i as createComponent, l as insert, m as setProp, q as createSignal, u as insertNode } from "./render-p5jfA6sq.js";

import { n as getImageUrl, t as api_default } from "./api-BiLDTsHT.js";

import { t as createImagePerfRun } from "./imagePerf-z9G4K_aU.js";

var ImagePerformance = () => {
    const [images, setImages] = createSignal([]);
    const [loadTime, setLoadTime] = createSignal("");
    const [status, setStatus] = createSignal("Initializing...");
    const [loadedCount, setLoadedCount] = createSignal(0);
    let startTime = 0;
    const imageLoadTimes = {};
    const totalImages = 40;
    const perf = createImagePerfRun("image-40", totalImages);
    const fetchImages = async () => {
        try {
            setStatus("Fetching images...");
            const page1 = await api_default.get("/movie/popular?page=1");
            const page2 = await api_default.get("/movie/popular?page=2");
            const newImages = [ ...page1.results, ...page2.results ].slice(0, 40).map(item => ({
                id: item.id,
                src: perf.bust(getImageUrl(item.poster_path, "w185")),
                title: item.title
            }));
            startTime = performance.now();
            perf.start();
            setImages(newImages);
            setStatus(`Loading... 0/${totalImages}`);
        } catch (error) {
            console.error("Error fetching images:", error);
            setStatus("Error fetching images");
        }
    };
    const handleImageLoaded = (index, id) => {
        perf.onLoaded();
        const now = performance.now();
        const elapsed = now - startTime;
        imageLoadTimes[id] = elapsed;
        const currentCount = loadedCount() + 1;
        setLoadedCount(currentCount);
        setStatus(`Loading... ${currentCount}/${totalImages}`);
        if (currentCount % 10 === 0) performance.mark(`images-loaded-${currentCount}`);
        if (currentCount === totalImages) {
            const totalTime = now - startTime;
            setLoadTime(`${totalTime.toFixed(2)}ms`);
            setStatus(`Loaded in ${totalTime.toFixed(2)}ms`);
            console.log("Individual Image Load Times:", imageLoadTimes);
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
                const col = index() % 8;
                const row = Math.floor(index() / 8);
                const x = 175 + col * 220.71;
                const y = 50 + row * 188.75;
                return (() => {
                    var _el$6 = createElement("view");
                    setProp(_el$6, "x", x);
                    setProp(_el$6, "y", y);
                    setProp(_el$6, "onEvent", {
                        loaded: () => handleImageLoaded(index(), item.id)
                    });
                    effect(_p$ => {
                        var _v$4 = styles.poster, _v$5 = item.src;
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
        }));
        insertNode(_el$3, _el$4);
        insertNode(_el$4, _el$5);
        setProp(_el$4, "display", "flex");
        setProp(_el$4, "justifyContent", "center");
        setProp(_el$4, "alignItems", "center");
        setProp(_el$4, "color", 204);
        setProp(_el$4, "width", 900);
        setProp(_el$4, "height", 200);
        setProp(_el$4, "padding", [ 0, 20 ]);
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

export { ImagePerformance as default };