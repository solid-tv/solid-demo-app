import { b as createSignal, o as onMount, c as createElement, n as insertNode, a as setProp, k as insert, l as createComponent, F as For, m as effect } from "./index-DPgGbeDn.js";

const TextureCompressionPerformance = () => {
    const [images, setImages] = createSignal([]);
    const [loadTime, setLoadTime] = createSignal("");
    const [status, setStatus] = createSignal("Initializing...");
    const [loadedCount, setLoadedCount] = createSignal(0);
    const basePath = "/solid-demo-app/";
    let startTime = 0;
    const imageLoadTimes = {};
    const totalImages = 25;
    const fetchImages = async () => {
        try {
            setStatus("Preparing images...");
            const newImages = Array.from({
                length: totalImages
            }, (_, i) => {
                const id = i + 1;
                return {
                    id: "img-".concat(id),
                    src: "".concat(basePath, "assets/ktx/image-").concat(id, ".ktx"),
                    title: "Image ".concat(id)
                };
            });
            startTime = performance.now();
            setImages(newImages);
            setStatus("Loading... 0/".concat(totalImages));
        } catch (error) {
            console.error("Error setting up images:", error);
            setStatus("Error setting up images");
        }
    };
    const handleImageLoaded = (index, id) => {
        const now = performance.now();
        const elapsed = now - startTime;
        imageLoadTimes[id] = elapsed;
        const currentCount = loadedCount() + 1;
        setLoadedCount(currentCount);
        setStatus("Loading... ".concat(currentCount, "/").concat(totalImages));
        if (currentCount % 5 === 0) {
            performance.mark("images-loaded-".concat(currentCount));
        }
        if (currentCount === totalImages) {
            const totalTime = now - startTime;
            setLoadTime("".concat(totalTime.toFixed(2), "ms"));
            setStatus("Loaded in ".concat(totalTime.toFixed(2), "ms"));
            console.log("Individual KTX Image Load Times:", imageLoadTimes);
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
            width: 185,
            height: 278
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
                const col = index() % 5;
                const row = Math.floor(index() / 5);
                const x = 175 + col * 377.5;
                const y = 50 + row * 175.5;
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

export { TextureCompressionPerformance as default };
