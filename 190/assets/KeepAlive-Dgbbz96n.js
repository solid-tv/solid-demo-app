import { D as Config, G as createRoot, Q as onCleanup, V as createEffect, Y as getOwner, a as createElement, c as effect, d as memo, g as use, i as createComponent, l as insert, m as setProp, q as createSignal, u as insertNode } from "./render-pt2tmeLm.js";

function KeepAlivePage() {
    const [counter, setCounter] = createSignal(0);
    setInterval(() => {
        setCounter(prev => prev + 1);
    }, 1e3);
    const Comp = function(fn) {
        let result, owner, dispose = null, [props, setProps] = createSignal(null), detachedOwner = getOwner();
        return p => {
            setProps(() => p), null == dispose && createRoot(d => {
                dispose = d, result = fn(props);
            }, detachedOwner);
            let o = owner = getOwner();
            return onCleanup(() => {
                queueMicrotask(() => {
                    null != dispose && owner === o && (dispose(), dispose = owner = result = null);
                });
            }), result;
        };
    }(props => {
        return _el$ = createElement("view"), _el$2 = createElement("text"), insertNode(_el$, _el$2), 
        use(el => {
            createEffect(rect => {
                props();
                let r = function(el) {
                    let {width: width, height: height} = el, x = 0, y = 0;
                    null != el.scaleX && (width *= el.scaleX), null != el.scaleY && (height *= el.scaleY);
                    let curr = el;
                    for (;null != curr; ) x += curr.x, y += curr.y, null != curr.scaleX && (x += curr.width / 2 * (1 - curr.scaleX)), 
                    null != curr.scaleY && (y += curr.height / 2 * (1 - curr.scaleY)), curr = curr.parent;
                    if (null != Config.rendererOptions) {
                        let dpr = Config.rendererOptions.deviceLogicalPixelRatio;
                        null != dpr && (x *= dpr, y *= dpr, width *= dpr, height *= dpr);
                    }
                    return {
                        x: x,
                        y: y,
                        width: width,
                        height: height
                    };
                }(el);
                var _el$lng$x, _el$lng$y;
                return null != rect && (el.lng.x = (null !== (_el$lng$x = el.lng.x) && void 0 !== _el$lng$x ? _el$lng$x : 0) - (r.x - rect.x), 
                el.lng.y = (null !== (_el$lng$y = el.lng.y) && void 0 !== _el$lng$y ? _el$lng$y : 0) - (r.y - rect.y), 
                el.animate({
                    x: 40 * Math.random(),
                    y: 60 * Math.random(),
                    alpha: 1
                }, {
                    duration: 250,
                    easing: "ease-in-out"
                }).start()), r;
            });
        }, _el$), setProp(_el$, "height", 80), setProp(_el$, "width", 120), setProp(_el$, "onCreate", el => {
            el.alpha = 0, el.animate({
                alpha: 1
            }, {
                duration: 250,
                easing: "ease-in-out"
            }).start();
        }), setProp(_el$, "onDestroy", el => (el.rtt = !0, el.animate({
            alpha: 0
        }, {
            duration: 250,
            easing: "ease-in-out"
        }).start().waitUntilStopped())), setProp(_el$2, "color", 4294967295), insert(_el$2, () => props().text), 
        effect(_p$ => {
            var _v$ = Math.floor(16777215 * Math.random()) << 8 | 255, _v$2 = 40 * Math.random(), _v$3 = 60 * Math.random();
            return _v$ !== _p$.e && (_p$.e = setProp(_el$, "color", _v$, _p$.e)), _v$2 !== _p$.t && (_p$.t = setProp(_el$, "x", _v$2, _p$.t)), 
            _v$3 !== _p$.a && (_p$.a = setProp(_el$, "y", _v$3, _p$.a)), _p$;
        }, {
            e: void 0,
            t: void 0,
            a: void 0
        }), _el$;
        var _el$, _el$2;
    });
    return _el$3 = createElement("view"), _el$4 = createElement("view"), _el$5 = createElement("view"), 
    insertNode(_el$3, _el$4), insertNode(_el$3, _el$5), setProp(_el$3, "display", "flex"), 
    setProp(_el$3, "flexDirection", "row"), setProp(_el$4, "color", 286331391), setProp(_el$4, "width", 160), 
    setProp(_el$4, "height", 160), insert(_el$4, (_c$ = memo(() => counter() % 3 == 0), 
    () => _c$() && createComponent(Comp, {
        text: "one"
    }))), setProp(_el$5, "color", 572662527), setProp(_el$5, "width", 160), setProp(_el$5, "height", 160), 
    insert(_el$5, (_c$2 = memo(() => counter() % 3 == 1), () => _c$2() && createComponent(Comp, {
        text: "two"
    }))), _el$3;
    var _c$, _c$2, _el$3, _el$4, _el$5;
}

export { KeepAlivePage as default };