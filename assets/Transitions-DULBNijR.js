import { s as setGlobalBackground, b as createSignal, c as createElement, n as insertNode, a as setProp, m as effect } from "./index--ykn9_pX.js";

const Default = () => {
    setGlobalBackground(506018815);
    const [y, setY] = createSignal(50);
    setTimeout(() => {
        setY(1080 - 50 - 200);
    }, 1750);
    function onStart() {
        console.log("start");
    }
    function onEnd() {
        console.log("end");
    }
    return (() => {
        var _el$ = createElement("view"), _el$2 = createElement("view"), _el$3 = createElement("view"), _el$4 = createElement("view"), _el$5 = createElement("view"), _el$6 = createElement("view"), _el$7 = createElement("view"), _el$8 = createElement("view");
        insertNode(_el$, _el$2);
        insertNode(_el$, _el$3);
        insertNode(_el$, _el$4);
        insertNode(_el$, _el$5);
        insertNode(_el$, _el$6);
        insertNode(_el$, _el$7);
        insertNode(_el$, _el$8);
        setProp(_el$, "x", 150);
        setProp(_el$, "autofocus", true);
        setProp(_el$2, "width", 200);
        setProp(_el$2, "height", 200);
        setProp(_el$2, "x", 50);
        setProp(_el$2, "color", 3689611007);
        setProp(_el$2, "transition", true);
        setProp(_el$3, "width", 200);
        setProp(_el$3, "height", 200);
        setProp(_el$3, "x", 300);
        setProp(_el$3, "color", 3218865919);
        setProp(_el$3, "transition", {
            y: true
        });
        setProp(_el$4, "width", 200);
        setProp(_el$4, "height", 200);
        setProp(_el$4, "x", 550);
        setProp(_el$4, "color", 2479226367);
        setProp(_el$4, "transition", {
            y: {
                duration: 1e3
            }
        });
        setProp(_el$4, "onAnimation", {
            animating: onStart,
            stopped: onEnd
        });
        setProp(_el$5, "width", 200);
        setProp(_el$5, "height", 200);
        setProp(_el$5, "x", 800);
        setProp(_el$5, "color", 1621490431);
        setProp(_el$5, "transition", {
            y: {
                duration: 500,
                delay: 1e3
            }
        });
        setProp(_el$5, "onAnimation", {
            animating: onStart,
            stopped: onEnd
        });
        setProp(_el$6, "width", 200);
        setProp(_el$6, "height", 200);
        setProp(_el$6, "x", 1050);
        setProp(_el$6, "color", 998438655);
        setProp(_el$6, "transition", {
            y: {
                duration: 500,
                easing: "ease-in-out"
            }
        });
        setProp(_el$6, "onAnimation", {
            stopped: onEnd
        });
        setProp(_el$7, "width", 200);
        setProp(_el$7, "height", 200);
        setProp(_el$7, "x", 1300);
        setProp(_el$7, "color", 627305471);
        setProp(_el$7, "transition", {
            y: {
                duration: 3e3,
                easing: "ease-in-out-back"
            }
        });
        setProp(_el$7, "onAnimation", {
            stopped: onEnd
        });
        setProp(_el$8, "width", 200);
        setProp(_el$8, "height", 200);
        setProp(_el$8, "x", 1550);
        setProp(_el$8, "color", 507153151);
        setProp(_el$8, "transition", {
            y: {
                duration: 800,
                easing: "cubic-bezier(1,-0.64,.39,1.44)"
            }
        });
        effect(_p$ => {
            var _v$ = y(), _v$2 = y(), _v$3 = y(), _v$4 = y(), _v$5 = y(), _v$6 = y(), _v$7 = y();
            _v$ !== _p$.e && (_p$.e = setProp(_el$2, "y", _v$, _p$.e));
            _v$2 !== _p$.t && (_p$.t = setProp(_el$3, "y", _v$2, _p$.t));
            _v$3 !== _p$.a && (_p$.a = setProp(_el$4, "y", _v$3, _p$.a));
            _v$4 !== _p$.o && (_p$.o = setProp(_el$5, "y", _v$4, _p$.o));
            _v$5 !== _p$.i && (_p$.i = setProp(_el$6, "y", _v$5, _p$.i));
            _v$6 !== _p$.n && (_p$.n = setProp(_el$7, "y", _v$6, _p$.n));
            _v$7 !== _p$.s && (_p$.s = setProp(_el$8, "y", _v$7, _p$.s));
            return _p$;
        }, {
            e: void 0,
            t: void 0,
            a: void 0,
            o: void 0,
            i: void 0,
            n: void 0,
            s: void 0
        });
        return _el$;
    })();
};

export { Default as default };
//# sourceMappingURL=Transitions-DULBNijR.js.map
