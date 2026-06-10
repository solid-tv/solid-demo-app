import { o as onMount, s as setGlobalBackground, t as theme, c as createElement, p as createTextNode, n as insertNode, a as setProp, k as insert, l as createComponent, m as effect, b as createSignal, U as onCleanup } from "./index-CQiNbWSo.js";

function CountdownTimer(props) {
    var _a, _b;
    const total = (_a = props.countdown) != null ? _a : 10;
    const size = (_b = props.size) != null ? _b : 320;
    const strokeWidth = 16;
    const durationMs = total * 1e3;
    const [progress, setProgress] = createSignal(1);
    const [label, setLabel] = createSignal(total);
    let raf = 0;
    let cycle = 0;
    const start = performance.now();
    const tick = now => {
        var _a2;
        const totalElapsed = now - start;
        const currentCycle = Math.floor(totalElapsed / durationMs);
        if (currentCycle > cycle) {
            cycle = currentCycle;
            (_a2 = props.onEnd) == null ? void 0 : _a2.call(props);
        }
        const elapsed = totalElapsed % durationMs;
        const p = 1 - elapsed / durationMs;
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
                colors: [ theme.color.white ],
                cap: 1
            } ], _v$2 = theme.color.white;
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

const CountdownTimerPage = () => {
    onMount(() => {
        setGlobalBackground(theme.backgroundDark);
    });
    return (() => {
        var _el$4 = createElement("view"), _el$5 = createElement("text"), _el$7 = createElement("text"), _el$8 = createTextNode("Uses the radialProgress shader. The ring shrinks smoothly and loops every 10 seconds.");
        insertNode(_el$4, _el$5);
        insertNode(_el$4, _el$7);
        setProp(_el$4, "autofocus", true);
        setProp(_el$4, "width", 1920);
        setProp(_el$4, "height", 1080);
        insertNode(_el$5, createTextNode("Countdown Timer"));
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
            var _v$3 = theme.textPrimary, _v$4 = theme.textSecondary;
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
