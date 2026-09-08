import { $ as onMount, Q as onCleanup, a as createElement, g as use, l as insert, m as setProp, q as createSignal, u as insertNode } from "./render-aZV73JYm.js";

import { n as setGlobalBackground } from "./state-DcDkvIU9.js";

var Viewport_default = () => {
    let ball, invervalTimer;
    const [ballStatus, setBallStatus] = createSignal([]), styleBall = {
        width: 100,
        height: 100,
        x: -400,
        y: -400,
        rotation: 0,
        borderRadius: 50,
        color: 1116206591,
        transition: {
            x: {
                duration: 1250,
                easing: "linear"
            },
            y: {
                duration: 1250,
                easing: "linear"
            },
            rotation: {
                duration: 1400,
                easing: "ease-in-out"
            }
        }
    }, Title = {
        fontSize: 32,
        x: 960,
        y: 540,
        mount: .5,
        lineheight: 52
    }, randomIntBetween = (from, to) => Math.floor(Math.random() * (to - from + 1) + from);
    function logEvent(name, elm) {
        setBallStatus(prev => [ ...prev, name ].slice(-4)), console.log(name);
    }
    return onMount(() => {
        setGlobalBackground(255), ball.x = 910, ball.y = 490, invervalTimer = setInterval(() => {
            ball.rotation = randomIntBetween(-90, 90), ball.x = randomIntBetween(-300, 2220), 
            ball.y = randomIntBetween(-300, 1380);
        }, 2500);
    }), onCleanup(() => {
        clearInterval(invervalTimer);
    }), (() => {
        var _el$ = createElement("view"), _el$2 = createElement("text"), _el$3 = createElement("view");
        insertNode(_el$, _el$2), insertNode(_el$, _el$3), setProp(_el$2, "style", Title), 
        insert(_el$2, () => ballStatus().join("\n"));
        return "function" == typeof ball ? use(ball, _el$3) : ball = _el$3, setProp(_el$3, "autofocus", !0), 
        setProp(_el$3, "style", styleBall), setProp(_el$3, "onEvent", {
            inBounds: elm => logEvent("inBounds"),
            outOfBounds: elm => logEvent("outOfBounds"),
            inViewport: elm => logEvent("inViewport"),
            outOfViewport: elm => logEvent("outOfViewport")
        }), _el$;
    })();
};

export { Viewport_default as default };