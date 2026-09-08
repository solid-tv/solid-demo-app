import { $ as onMount, A as For, a as createElement, c as effect, i as createComponent, l as insert, m as setProp, q as createSignal, u as insertNode } from "./render-aZV73JYm.js";

import { n as getImageUrl, t as api_default } from "./api-BLXElZOg.js";

import { t as createImagePerfRun } from "./imagePerf-CiF-olb1.js";

var MixedImagePerformance = () => {
    const [images, setImages] = createSignal([]), [loadTime, setLoadTime] = createSignal(""), [status, setStatus] = createSignal("Initializing..."), [loadedCount, setLoadedCount] = createSignal(0);
    let startTime = 0;
    const imageLoadTimes = {}, perf = createImagePerfRun("image-mixed", 11), handleImageLoaded = (index, id) => {
        perf.onLoaded();
        const now = performance.now(), elapsed = now - startTime;
        imageLoadTimes[id] = elapsed;
        const currentCount = loadedCount() + 1;
        if (setLoadedCount(currentCount), setStatus(`Loading... ${currentCount}/11`), performance.mark(`mixed-images-loaded-${currentCount}`), 
        11 === currentCount) {
            const totalTime = now - startTime;
            setLoadTime(`${totalTime.toFixed(2)}ms`), setStatus(`Loaded in ${totalTime.toFixed(2)}ms`), 
            console.log("Individual Mixed Image Load Times:", imageLoadTimes);
        }
    };
    onMount(() => {
        (async () => {
            try {
                setStatus("Fetching images...");
                const newImages = (await api_default.get("/movie/popular?page=1")).results.slice(0, 11).map((item, index) => {
                    const isMain = 0 === index, size = isMain ? "original" : "w342", path = isMain && item.backdrop_path ? item.backdrop_path : item.poster_path;
                    return {
                        id: item.id,
                        src: perf.bust(getImageUrl(path, size)),
                        title: item.title,
                        isMain: isMain
                    };
                });
                startTime = performance.now(), perf.start(), setImages(newImages), setStatus("Loading... 0/11");
            } catch (error) {
                console.error("Error fetching images:", error), setStatus("Error fetching images");
            }
        })();
    });
    const styles_container = {
        width: 1920,
        height: 1080,
        x: 0,
        y: 0
    }, styles_mainImage = {
        width: 1152,
        height: 648,
        x: 384,
        y: 50
    }, styles_poster = {
        width: 150,
        height: 225
    }, styles_statusContainer = {
        width: 1920,
        height: 1080,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 100,
        position: "absolute"
    }, styles_statusText = {
        fontSize: 90,
        color: 4294967295
    };
    return _el$ = createElement("view"), _el$2 = createElement("view"), _el$3 = createElement("view"), 
    _el$4 = createElement("view"), _el$5 = createElement("text"), insertNode(_el$, _el$2), 
    insertNode(_el$, _el$3), setProp(_el$2, "autofocus", !0), insert(_el$2, createComponent(For, {
        get each() {
            return images();
        },
        children: (item, index) => {
            const i = index();
            if (item.isMain) return _el$6 = createElement("view"), setProp(_el$6, "onEvent", {
                loaded: () => handleImageLoaded(0, item.id)
            }), effect(_p$ => {
                var _v$4 = styles_mainImage, _v$5 = item.src;
                return _v$4 !== _p$.e && (_p$.e = setProp(_el$6, "style", _v$4, _p$.e)), _v$5 !== _p$.t && (_p$.t = setProp(_el$6, "src", _v$5, _p$.t)), 
                _p$;
            }, {
                e: void 0,
                t: void 0
            }), _el$6;
            var _el$6;
            const x = 120 + 170 * (i - 1);
            return _el$7 = createElement("view"), setProp(_el$7, "x", x), setProp(_el$7, "y", 750), 
            setProp(_el$7, "onEvent", {
                loaded: () => handleImageLoaded(0, item.id)
            }), effect(_p$ => {
                var _v$6 = styles_poster, _v$7 = item.src;
                return _v$6 !== _p$.e && (_p$.e = setProp(_el$7, "style", _v$6, _p$.e)), _v$7 !== _p$.t && (_p$.t = setProp(_el$7, "src", _v$7, _p$.t)), 
                _p$;
            }, {
                e: void 0,
                t: void 0
            }), _el$7;
            var _el$7;
        }
    })), insertNode(_el$3, _el$4), setProp(_el$3, "pointerEvents", "none"), insertNode(_el$4, _el$5), 
    setProp(_el$4, "display", "flex"), setProp(_el$4, "justifyContent", "center"), setProp(_el$4, "alignItems", "center"), 
    setProp(_el$4, "color", 204), setProp(_el$4, "width", 900), setProp(_el$4, "height", 200), 
    setProp(_el$4, "padding", [ 0, 20 ]), insert(_el$5, status), effect(_p$ => {
        var _v$ = styles_container, _v$2 = styles_statusContainer, _v$3 = styles_statusText;
        return _v$ !== _p$.e && (_p$.e = setProp(_el$2, "style", _v$, _p$.e)), _v$2 !== _p$.t && (_p$.t = setProp(_el$3, "style", _v$2, _p$.t)), 
        _v$3 !== _p$.a && (_p$.a = setProp(_el$5, "style", _v$3, _p$.a)), _p$;
    }, {
        e: void 0,
        t: void 0,
        a: void 0
    }), _el$;
    var _el$, _el$2, _el$3, _el$4, _el$5;
};

export { MixedImagePerformance as default };