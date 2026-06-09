import { b as createSignal, o as onMount, s as setGlobalBackground, U as onCleanup, c as createElement, n as insertNode, a as setProp, k as insert, v as use } from "./index-B5MTquYR.js";

const Viewport = () => {
    let ball, invervalTimer;
    const [ballStatus, setBallStatus] = createSignal([]);
    const styleBall = {
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
    };
    const Title = {
        fontSize: 32,
        x: 960,
        y: 540,
        mount: .5,
        lineheight: 52
    };
    const randomIntBetween = (from, to) => Math.floor(Math.random() * (to - from + 1) + from);
    onMount(() => {
        setGlobalBackground(255);
        ball.x = (1920 - 100) / 2;
        ball.y = (1080 - 100) / 2;
        invervalTimer = setInterval(() => {
            ball.rotation = randomIntBetween(-90, 90);
            ball.x = randomIntBetween(-300, 2220);
            ball.y = randomIntBetween(-300, 1380);
        }, 2500);
    });
    function logEvent(name, elm) {
        setBallStatus(prev => [ ...prev, name ].slice(-4));
        console.log(name);
    }
    onCleanup(() => {
        clearInterval(invervalTimer);
    });
    return (() => {
        var _el$ = createElement("view"), _el$2 = createElement("text"), _el$3 = createElement("view");
        insertNode(_el$, _el$2);
        insertNode(_el$, _el$3);
        setProp(_el$2, "style", Title);
        insert(_el$2, () => ballStatus().join("\n"));
        var _ref$ = ball;
        typeof _ref$ === "function" ? use(_ref$, _el$3) : ball = _el$3;
        setProp(_el$3, "autofocus", true);
        setProp(_el$3, "style", styleBall);
        setProp(_el$3, "onEvent", {
            inBounds: elm => logEvent("inBounds"),
            outOfBounds: elm => logEvent("outOfBounds"),
            inViewport: elm => logEvent("inViewport"),
            outOfViewport: elm => logEvent("outOfViewport")
        });
        return _el$;
    })();
};

export { Viewport as default };
