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
    System.register([ "./render-legacy-DZhvr1vn.js", "./theme-legacy-CRa-Zkyx.js", "./state-legacy-B9JNrv8i.js" ], function(_export, _context) {
        "use strict";
        var onMount, onCleanup, createElement, effect, createComponent, insert, setProp, createSignal, createTextNode, insertNode, theme_default, setGlobalBackground, CountdownTimerPage;
        function CountdownTimer(props) {
            var _props$countdown, _props$size;
            var total = (_props$countdown = props.countdown) !== null && _props$countdown !== void 0 ? _props$countdown : 10;
            var size = (_props$size = props.size) !== null && _props$size !== void 0 ? _props$size : 320;
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
                var p = 1 - totalElapsed % durationMs / durationMs;
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
            }();
        }
        return {
            setters: [ function(_renderLegacy001Js) {
                onMount = _renderLegacy001Js.$;
                onCleanup = _renderLegacy001Js.Q;
                createElement = _renderLegacy001Js.a;
                effect = _renderLegacy001Js.c;
                createComponent = _renderLegacy001Js.i;
                insert = _renderLegacy001Js.l;
                setProp = _renderLegacy001Js.m;
                createSignal = _renderLegacy001Js.q;
                createTextNode = _renderLegacy001Js.s;
                insertNode = _renderLegacy001Js.u;
            }, function(_themeLegacy00gJs) {
                theme_default = _themeLegacy00gJs.t;
            }, function(_stateLegacy00iJs) {
                setGlobalBackground = _stateLegacy00iJs.n;
            } ],
            execute: function execute() {
                _export("default", CountdownTimerPage = function CountdownTimerPage() {
                    onMount(function() {
                        setGlobalBackground(theme_default.backgroundDark);
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
                            var _v$3 = theme_default.textPrimary, _v$4 = theme_default.textSecondary;
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