import { Y as createSignal, a as createElement, c as effect, et as onCleanup, i as createComponent, l as insert, m as setProp, s as createTextNode, tt as onMount, u as insertNode } from "./render-DoMuJa_u.js";

import { t as theme_default } from "./theme-CB9u0IsU.js";

import { n as setGlobalBackground } from "./state-C4mb-rWP.js";

function CountdownTimer(props) {
    var _props$countdown, _props$size;
    const total = (_props$countdown = props.countdown) !== null && _props$countdown !== void 0 ? _props$countdown : 10;
    const size = (_props$size = props.size) !== null && _props$size !== void 0 ? _props$size : 320;
    const strokeWidth = 16;
    const durationMs = total * 1e3;
    const [progress, setProgress] = createSignal(1);
    const [label, setLabel] = createSignal(total);
    let raf = 0;
    let cycle = 0;
    const start = performance.now();
    const tick = now => {
        const totalElapsed = now - start;
        const currentCycle = Math.floor(totalElapsed / durationMs);
        if (currentCycle > cycle) {
            var _props$onEnd;
            cycle = currentCycle;
            (_props$onEnd = props.onEnd) == null || _props$onEnd.call(props);
        }
        const p = 1 - totalElapsed % durationMs / durationMs;
        setProgress(p);
        setLabel(Math.ceil(p * total) || total);
        raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    onCleanup(() => cancelAnimationFrame(raf));
    return (() => {
        var _el$ = createElement("view"), _el$2 = createElement("view"), _el$3 = createElement("text");
        insertNode(_el$, _el$2);
        insertNode(_el$, _el$3);
        setProp(_el$, "width", size);
        setProp(_el$, "height", size);
        setProp(_el$, "centerX", true);
        setProp(_el$, "centerY", true);
        setProp(_el$2, "width", size);
        setProp(_el$2, "height", size);
        setProp(_el$2, "color", 0);
        setProp(_el$3, "x", size / 2);
        setProp(_el$3, "y", size / 2);
        setProp(_el$3, "mountX", .5);
        setProp(_el$3, "mountY", .5);
        setProp(_el$3, "textAlign", "center");
        setProp(_el$3, "fontSize", 120);
        setProp(_el$3, "fontWeight", "bold");
        insert(_el$3, () => String(label()));
        effect(_p$ => {
            var _v$ = [ "radialProgress", {
                width: strokeWidth,
                progress: progress(),
                colors: [ theme_default.color.white ],
                cap: 1
            } ], _v$2 = theme_default.color.white;
            _v$ !== _p$.e && (_p$.e = setProp(_el$2, "shader", _v$, _p$.e));
            _v$2 !== _p$.t && (_p$.t = setProp(_el$3, "color", _v$2, _p$.t));
            return _p$;
        }, {
            e: void 0,
            t: void 0
        });
        return _el$;
    })();
}

var CountdownTimerPage = () => {
    onMount(() => {
        setGlobalBackground(theme_default.backgroundDark);
    });
    return (() => {
        var _el$4 = createElement("view"), _el$5 = createElement("text"), _el$7 = createElement("text"), _el$8 = createTextNode(`Uses the radialProgress shader. The ring shrinks smoothly and loops every 10 seconds.`);
        insertNode(_el$4, _el$5);
        insertNode(_el$4, _el$7);
        setProp(_el$4, "autofocus", true);
        setProp(_el$4, "width", 1920);
        setProp(_el$4, "height", 1080);
        insertNode(_el$5, createTextNode(`Countdown Timer`));
        setProp(_el$5, "x", 200);
        setProp(_el$5, "y", 20);
        setProp(_el$5, "fontSize", 42);
        setProp(_el$5, "fontWeight", "bold");
        insertNode(_el$7, _el$8);
        setProp(_el$7, "x", 200);
        setProp(_el$7, "y", 80);
        setProp(_el$7, "fontSize", 18);
        insert(_el$4, createComponent(CountdownTimer, {
            countdown: 10
        }), null);
        effect(_p$ => {
            var _v$3 = theme_default.textPrimary, _v$4 = theme_default.textSecondary;
            _v$3 !== _p$.e && (_p$.e = setProp(_el$5, "color", _v$3, _p$.e));
            _v$4 !== _p$.t && (_p$.t = setProp(_el$7, "color", _v$4, _p$.t));
            return _p$;
        }, {
            e: void 0,
            t: void 0
        });
        return _el$4;
    })();
};

export { CountdownTimerPage as default };