import { $ as onMount, A as For, a as createElement, c as effect, i as createComponent, l as insert, m as setProp, q as createSignal, u as insertNode } from "./render-aZV73JYm.js";

import { n as getImageUrl, t as api_default } from "./api-BLXElZOg.js";

import { t as createImagePerfRun } from "./imagePerf-CiF-olb1.js";

var LargeImagePerformance = () => {
    const [images, setImages] = createSignal([]), [loadTime, setLoadTime] = createSignal(""), [status, setStatus] = createSignal("Initializing..."), [loadedCount, setLoadedCount] = createSignal(0);
    let startTime = 0;
    const imageLoadTimes = {}, perf = createImagePerfRun("image-large", 4);
    onMount(() => {
        (async () => {
            try {
                setStatus("Fetching images...");
                const newImages = (await api_default.get("/movie/popular?page=1")).results.slice(0, 4).map(item => ({
                    id: item.id,
                    src: perf.bust(getImageUrl(item.backdrop_path || item.poster_path, "original")),
                    title: item.title
                }));
                startTime = performance.now(), perf.start(), setImages(newImages), setStatus("Loading... 0/4");
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
    }, styles_poster = {
        width: 800,
        height: 450
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
            let x = 0, y = 0;
            return 0 === i ? (x = 170, y = 50) : 1 === i ? (x = 1070, y = 50) : 2 === i ? (x = 170, 
            y = 580) : 3 === i && (x = 1070, y = 580), _el$6 = createElement("view"), setProp(_el$6, "x", x), 
            setProp(_el$6, "y", y), setProp(_el$6, "onEvent", {
                loaded: () => ((index, id) => {
                    perf.onLoaded();
                    const now = performance.now(), elapsed = now - startTime;
                    imageLoadTimes[id] = elapsed;
                    const currentCount = loadedCount() + 1;
                    if (setLoadedCount(currentCount), setStatus(`Loading... ${currentCount}/4`), performance.mark(`large-images-loaded-${currentCount}`), 
                    4 === currentCount) {
                        const totalTime = now - startTime;
                        setLoadTime(`${totalTime.toFixed(2)}ms`), setStatus(`Loaded in ${totalTime.toFixed(2)}ms`), 
                        console.log("Individual Large Image Load Times:", imageLoadTimes);
                    }
                })(index(), item.id)
            }), effect(_p$ => {
                var _v$4 = styles_poster, _v$5 = item.src;
                return _v$4 !== _p$.e && (_p$.e = setProp(_el$6, "style", _v$4, _p$.e)), _v$5 !== _p$.t && (_p$.t = setProp(_el$6, "src", _v$5, _p$.t)), 
                _p$;
            }, {
                e: void 0,
                t: void 0
            }), _el$6;
            var _el$6;
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

export { LargeImagePerformance as default };