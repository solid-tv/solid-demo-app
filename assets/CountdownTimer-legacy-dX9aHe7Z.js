(function() {
    function _slicedToArray(r, e) {
        return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();
    }
    function _nonIterableRest() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    function _unsupportedIterableToArray(r, a) {
        if (r) {
            if ("string" == typeof r) return _arrayLikeToArray(r, a);
            var t = {}.toString.call(r).slice(8, -1);
            return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
        }
    }
    function _arrayLikeToArray(r, a) {
        (null == a || a > r.length) && (a = r.length);
        for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
        return n;
    }
    function _iterableToArrayLimit(r, l) {
        var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
        if (null != t) {
            var e, n, i, u, a = [], f = !0, o = !1;
            try {
                if (i = (t = t.call(r)).next, 0 === l) {
                    if (Object(t) !== t) return;
                    f = !1;
                } else for (;!(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0) ;
            } catch (r) {
                o = !0, n = r;
            } finally {
                try {
                    if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;
                } finally {
                    if (o) throw n;
                }
            }
            return a;
        }
    }
    function _arrayWithHoles(r) {
        if (Array.isArray(r)) return r;
    }
    System.register([ "./index-legacy-DE1hZhQ5.js" ], function(exports, module) {
        "use strict";
        var onMount, setGlobalBackground, theme, createElement, createTextNode, insertNode, setProp, insert, createComponent, effect, createSignal, onCleanup;
        return {
            setters: [ function(module) {
                onMount = module.o;
                setGlobalBackground = module.s;
                theme = module.t;
                createElement = module.c;
                createTextNode = module.p;
                insertNode = module.n;
                setProp = module.a;
                insert = module.k;
                createComponent = module.l;
                effect = module.m;
                createSignal = module.b;
                onCleanup = module.U;
            } ],
            execute: function execute() {
                function CountdownTimer(props) {
                    var _props$countdown, _props$size;
                    var total = (_props$countdown = props.countdown) != null ? _props$countdown : 10;
                    var size = (_props$size = props.size) != null ? _props$size : 320;
                    var strokeWidth = 16;
                    var durationMs = total * 1e3;
                    var _createSignal = createSignal(1), _createSignal2 = _slicedToArray(_createSignal, 2), progress = _createSignal2[0], setProgress = _createSignal2[1];
                    var _createSignal3 = createSignal(total), _createSignal4 = _slicedToArray(_createSignal3, 2), label = _createSignal4[0], setLabel = _createSignal4[1];
                    var raf = 0;
                    var cycle = 0;
                    var start = performance.now();
                    var _tick = function tick(now) {
                        var totalElapsed = now - start;
                        var currentCycle = Math.floor(totalElapsed / durationMs);
                        if (currentCycle > cycle) {
                            var _props$onEnd;
                            cycle = currentCycle;
                            (_props$onEnd = props.onEnd) == null || _props$onEnd.call(props);
                        }
                        var elapsed = totalElapsed % durationMs;
                        var p = 1 - elapsed / durationMs;
                        setProgress(p);
                        setLabel(Math.ceil(p * total) || total);
                        raf = requestAnimationFrame(_tick);
                    };
                    raf = requestAnimationFrame(_tick);
                    onCleanup(function() {
                        return cancelAnimationFrame(raf);
                    });
                    return function() {
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
                        insert(_el$3, function() {
                            return String(label());
                        });
                        effect(function(_p$) {
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
                    }();
                }
                var CountdownTimerPage = exports("default", function() {
                    onMount(function() {
                        setGlobalBackground(theme.backgroundDark);
                    });
                    return function() {
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
                        effect(function(_p$) {
                            var _v$3 = theme.textPrimary, _v$4 = theme.textSecondary;
                            _v$3 !== _p$.e && (_p$.e = setProp(_el$5, "color", _v$3, _p$.e));
                            _v$4 !== _p$.t && (_p$.t = setProp(_el$7, "color", _v$4, _p$.t));
                            return _p$;
                        }, {
                            e: void 0,
                            t: void 0
                        });
                        return _el$4;
                    }();
                });
            }
        };
    });
})();
//# sourceMappingURL=CountdownTimer-legacy-dX9aHe7Z.js.map
