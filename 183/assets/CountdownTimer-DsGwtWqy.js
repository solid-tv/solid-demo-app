import { $ as onMount, Q as onCleanup, a as createElement, c as effect, i as createComponent, l as insert, m as setProp, q as createSignal, s as createTextNode, u as insertNode } from "./render-BluGTzme.js";

import { t as theme_default } from "./theme-CB9u0IsU.js";

import { n as setGlobalBackground } from "./state-CPvSHvfN.js";

function CountdownTimer(props) {
    var _props$countdown, _props$size;
    const total = null !== (_props$countdown = props.countdown) && void 0 !== _props$countdown ? _props$countdown : 10, size = null !== (_props$size = props.size) && void 0 !== _props$size ? _props$size : 320, durationMs = 1e3 * total, [progress, setProgress] = createSignal(1), [label, setLabel] = createSignal(total);
    let raf = 0, cycle = 0;
    const start = performance.now(), tick = now => {
        const totalElapsed = now - start, currentCycle = Math.floor(totalElapsed / durationMs);
        var _props$onEnd;
        currentCycle > cycle && (cycle = currentCycle, null == (_props$onEnd = props.onEnd) || _props$onEnd.call(props));
        const p = 1 - totalElapsed % durationMs / durationMs;
        setProgress(p), setLabel(Math.ceil(p * total) || total), raf = requestAnimationFrame(tick);
    };
    return raf = requestAnimationFrame(tick), onCleanup(() => cancelAnimationFrame(raf)), 
    _el$ = createElement("view"), _el$2 = createElement("view"), _el$3 = createElement("text"), 
    insertNode(_el$, _el$2), insertNode(_el$, _el$3), setProp(_el$, "width", size), 
    setProp(_el$, "height", size), setProp(_el$, "centerX", !0), setProp(_el$, "centerY", !0), 
    setProp(_el$2, "width", size), setProp(_el$2, "height", size), setProp(_el$2, "color", 0), 
    setProp(_el$3, "x", size / 2), setProp(_el$3, "y", size / 2), setProp(_el$3, "mountX", .5), 
    setProp(_el$3, "mountY", .5), setProp(_el$3, "textAlign", "center"), setProp(_el$3, "fontSize", 120), 
    setProp(_el$3, "fontWeight", "bold"), insert(_el$3, () => String(label())), effect(_p$ => {
        var _v$ = [ "radialProgress", {
            width: 16,
            progress: progress(),
            colors: [ theme_default.color.white ],
            cap: 1
        } ], _v$2 = theme_default.color.white;
        return _v$ !== _p$.e && (_p$.e = setProp(_el$2, "shader", _v$, _p$.e)), _v$2 !== _p$.t && (_p$.t = setProp(_el$3, "color", _v$2, _p$.t)), 
        _p$;
    }, {
        e: void 0,
        t: void 0
    }), _el$;
    var _el$, _el$2, _el$3;
}

var CountdownTimerPage = () => {
    return onMount(() => {
        setGlobalBackground(theme_default.backgroundDark);
    }), _el$4 = createElement("view"), _el$5 = createElement("text"), _el$7 = createElement("text"), 
    _el$8 = createTextNode("Uses the radialProgress shader. The ring shrinks smoothly and loops every 10 seconds."), 
    insertNode(_el$4, _el$5), insertNode(_el$4, _el$7), setProp(_el$4, "autofocus", !0), 
    setProp(_el$4, "width", 1920), setProp(_el$4, "height", 1080), insertNode(_el$5, createTextNode("Countdown Timer")), 
    setProp(_el$5, "x", 200), setProp(_el$5, "y", 20), setProp(_el$5, "fontSize", 42), 
    setProp(_el$5, "fontWeight", "bold"), insertNode(_el$7, _el$8), setProp(_el$7, "x", 200), 
    setProp(_el$7, "y", 80), setProp(_el$7, "fontSize", 18), insert(_el$4, createComponent(CountdownTimer, {
        countdown: 10
    }), null), effect(_p$ => {
        var _v$3 = theme_default.textPrimary, _v$4 = theme_default.textSecondary;
        return _v$3 !== _p$.e && (_p$.e = setProp(_el$5, "color", _v$3, _p$.e)), _v$4 !== _p$.t && (_p$.t = setProp(_el$7, "color", _v$4, _p$.t)), 
        _p$;
    }, {
        e: void 0,
        t: void 0
    }), _el$4;
    var _el$4, _el$5, _el$7, _el$8;
};

export { CountdownTimerPage as default };