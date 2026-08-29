import { $ as onMount, P as Suspense, Q as onCleanup, V as createEffect, W as createResource, a as createElement, g as use, i as createComponent, l as insert, m as setProp, q as createSignal, s as createTextNode, u as insertNode } from "./render-BKL9i0Et.js";

import { n as setGlobalBackground } from "./state-CoFTe403.js";

function fadeIn(el) {
    el.alpha = 0;
    el.animate({
        alpha: 1
    }, {
        duration: 250,
        easing: "ease-in-out"
    }).start();
}

function fadeOut(el) {
    return el.animate({
        alpha: 0
    }, {
        duration: 250,
        easing: "ease-in-out"
    }).start().waitUntilStopped();
}

function SuspensePage() {
    setGlobalBackground(255);
    let lastCount = 0;
    const [data, {refetch: refetch}] = createResource(async () => {
        await new Promise(r => setTimeout(r, 1600));
        return ++lastCount;
    });
    return (() => {
        var _el$ = createElement("view");
        setProp(_el$, "forwardFocus", 0);
        insert(_el$, createComponent(Suspense, {
            get fallback() {
                return (() => {
                    var _el$6 = createElement("view"), _el$7 = createElement("text");
                    insertNode(_el$6, _el$7);
                    setProp(_el$6, "onCreate", fadeIn);
                    setProp(_el$6, "onDestroy", fadeOut);
                    setProp(_el$6, "display", "flex");
                    setProp(_el$6, "center", true);
                    insertNode(_el$7, createTextNode(`Loading...`));
                    return _el$6;
                })();
            },
            get children() {
                var _el$2 = createElement("view"), _el$3 = createElement("text"), _el$4 = createTextNode(`Hello World`), _el$5 = createTextNode(` (Press Enter to refetch)`);
                insertNode(_el$2, _el$3);
                use(elm => {
                    const [count, setCount] = createSignal(0);
                    onMount(() => {
                        const interval = setInterval(() => {
                            setCount(prev => prev + 1);
                        }, 200);
                        onCleanup(() => {
                            clearInterval(interval);
                            elm.destroy();
                        });
                    });
                    createEffect(() => {
                        console.log("count", count());
                    });
                }, _el$2);
                setProp(_el$2, "autofocus", true);
                setProp(_el$2, "preserve", true);
                setProp(_el$2, "onCreate", fadeIn);
                setProp(_el$2, "onRender", fadeIn);
                setProp(_el$2, "onRemove", fadeOut);
                setProp(_el$2, "onEnter", () => {
                    refetch();
                });
                setProp(_el$2, "display", "flex");
                setProp(_el$2, "center", true);
                insertNode(_el$3, _el$4);
                insertNode(_el$3, _el$5);
                insert(_el$3, () => {
                    var _data;
                    return "!".repeat((_data = data()) !== null && _data !== void 0 ? _data : 0);
                }, _el$5);
                return _el$2;
            }
        }));
        return _el$;
    })();
}

export { SuspensePage as default };