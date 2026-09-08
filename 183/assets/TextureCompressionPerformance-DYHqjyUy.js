import { $ as onMount, A as For, a as createElement, c as effect, i as createComponent, l as insert, m as setProp, q as createSignal, u as insertNode } from "./render-BluGTzme.js";

var TextureCompressionPerformance = () => {
    const [images, setImages] = createSignal([]), [loadTime, setLoadTime] = createSignal(""), [status, setStatus] = createSignal("Initializing..."), [loadedCount, setLoadedCount] = createSignal(0);
    let startTime = 0;
    const imageLoadTimes = {};
    onMount(() => {
        (async () => {
            try {
                setStatus("Preparing images...");
                const newImages = Array.from({
                    length: 25
                }, (_, i) => {
                    const id = i + 1;
                    return {
                        id: `img-${id}`,
                        src: `/solid-demo-app/183/assets/ktx/image-${id}.ktx`,
                        title: `Image ${id}`
                    };
                });
                startTime = performance.now(), setImages(newImages), setStatus("Loading... 0/25");
            } catch (error) {
                console.error("Error setting up images:", error), setStatus("Error setting up images");
            }
        })();
    });
    const styles_container = {
        width: 1920,
        height: 1080,
        x: 0,
        y: 0
    }, styles_poster = {
        width: 185,
        height: 278
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
            const col = index() % 5, row = Math.floor(index() / 5), x = 175 + 377.5 * col, y = 50 + 175.5 * row;
            return _el$6 = createElement("view"), setProp(_el$6, "x", x), setProp(_el$6, "y", y), 
            setProp(_el$6, "onEvent", {
                loaded: () => ((index, id) => {
                    const now = performance.now(), elapsed = now - startTime;
                    imageLoadTimes[id] = elapsed;
                    const currentCount = loadedCount() + 1;
                    if (setLoadedCount(currentCount), setStatus(`Loading... ${currentCount}/25`), currentCount % 5 == 0 && performance.mark(`images-loaded-${currentCount}`), 
                    25 === currentCount) {
                        const totalTime = now - startTime;
                        setLoadTime(`${totalTime.toFixed(2)}ms`), setStatus(`Loaded in ${totalTime.toFixed(2)}ms`), 
                        console.log("Individual KTX Image Load Times:", imageLoadTimes);
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
    })), insertNode(_el$3, _el$4), insertNode(_el$4, _el$5), setProp(_el$4, "display", "flex"), 
    setProp(_el$4, "justifyContent", "center"), setProp(_el$4, "alignItems", "center"), 
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

export { TextureCompressionPerformance as default };