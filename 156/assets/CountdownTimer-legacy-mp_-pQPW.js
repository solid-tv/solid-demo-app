!function() {
    function _slicedToArray(r, e) {
        return function(r) {
            if (Array.isArray(r)) return r;
        }(r) || function(r, l) {
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
        }(r, e) || function(r, a) {
            if (r) {
                if ("string" == typeof r) return _arrayLikeToArray(r, a);
                var t = {}.toString.call(r).slice(8, -1);
                return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
            }
        }(r, e) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }();
    }
    function _arrayLikeToArray(r, a) {
        (null == a || a > r.length) && (a = r.length);
        for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
        return n;
    }
    System.register([ "./render-legacy-t4wUAioc.js", "./theme-legacy-Bdf29FvE.js", "./state-legacy-CIkOTHs-.js" ], function(_export, _context) {
        var onCleanup, createSignal, createElement, effect, onMount, setProp, createComponent, insert, createTextNode, insertNode, theme_default, setGlobalBackground;
        function CountdownTimer(props) {
            var _props$countdown, _props$size, _el$, _el$2, _el$3, total = null !== (_props$countdown = props.countdown) && void 0 !== _props$countdown ? _props$countdown : 10, size = null !== (_props$size = props.size) && void 0 !== _props$size ? _props$size : 320, durationMs = 1e3 * total, _createSignal2 = _slicedToArray(createSignal(1), 2), progress = _createSignal2[0], setProgress = _createSignal2[1], _createSignal4 = _slicedToArray(createSignal(total), 2), label = _createSignal4[0], setLabel = _createSignal4[1], raf = 0, cycle = 0, start = performance.now(), _tick = function(now) {
                var _props$onEnd, totalElapsed = now - start, currentCycle = Math.floor(totalElapsed / durationMs);
                currentCycle > cycle && (cycle = currentCycle, null == (_props$onEnd = props.onEnd) || _props$onEnd.call(props));
                var p = 1 - totalElapsed % durationMs / durationMs;
                setProgress(p), setLabel(Math.ceil(p * total) || total), raf = requestAnimationFrame(_tick);
            };
            return raf = requestAnimationFrame(_tick), onCleanup(function() {
                return cancelAnimationFrame(raf);
            }), _el$ = createElement("view"), _el$2 = createElement("view"), _el$3 = createElement("text"), 
            insertNode(_el$, _el$2), insertNode(_el$, _el$3), setProp(_el$, "width", size), 
            setProp(_el$, "height", size), setProp(_el$, "centerX", !0), setProp(_el$, "centerY", !0), 
            setProp(_el$2, "width", size), setProp(_el$2, "height", size), setProp(_el$2, "color", 0), 
            setProp(_el$3, "x", size / 2), setProp(_el$3, "y", size / 2), setProp(_el$3, "mountX", .5), 
            setProp(_el$3, "mountY", .5), setProp(_el$3, "textAlign", "center"), setProp(_el$3, "fontSize", 120), 
            setProp(_el$3, "fontWeight", "bold"), insert(_el$3, function() {
                return String(label());
            }), effect(function(_p$) {
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
        }
        return {
            setters: [ function(_renderLegacy002Js) {
                onCleanup = _renderLegacy002Js.$, createSignal = _renderLegacy002Js.J, createElement = _renderLegacy002Js.a, 
                effect = _renderLegacy002Js.c, onMount = _renderLegacy002Js.et, setProp = _renderLegacy002Js.h, 
                createComponent = _renderLegacy002Js.i, insert = _renderLegacy002Js.l, createTextNode = _renderLegacy002Js.s, 
                insertNode = _renderLegacy002Js.u;
            }, function(_themeLegacy00gJs) {
                theme_default = _themeLegacy00gJs.t;
            }, function(_stateLegacy00iJs) {
                setGlobalBackground = _stateLegacy00iJs.n;
            } ],
            execute: function() {
                _export("default", function() {
                    return onMount(function() {
                        setGlobalBackground(theme_default.backgroundDark);
                    }), _el$4 = createElement("view"), _el$5 = createElement("text"), _el$7 = createElement("text"), 
                    _el$8 = createTextNode("Uses the radialProgress shader. The ring shrinks smoothly and loops every 10 seconds."), 
                    insertNode(_el$4, _el$5), insertNode(_el$4, _el$7), setProp(_el$4, "autofocus", !0), 
                    setProp(_el$4, "width", 1920), setProp(_el$4, "height", 1080), insertNode(_el$5, createTextNode("Countdown Timer")), 
                    setProp(_el$5, "x", 200), setProp(_el$5, "y", 20), setProp(_el$5, "fontSize", 42), 
                    setProp(_el$5, "fontWeight", "bold"), insertNode(_el$7, _el$8), setProp(_el$7, "x", 200), 
                    setProp(_el$7, "y", 80), setProp(_el$7, "fontSize", 18), insert(_el$4, createComponent(CountdownTimer, {
                        countdown: 10
                    }), null), effect(function(_p$) {
                        var _v$3 = theme_default.textPrimary, _v$4 = theme_default.textSecondary;
                        return _v$3 !== _p$.e && (_p$.e = setProp(_el$5, "color", _v$3, _p$.e)), _v$4 !== _p$.t && (_p$.t = setProp(_el$7, "color", _v$4, _p$.t)), 
                        _p$;
                    }, {
                        e: void 0,
                        t: void 0
                    }), _el$4;
                    var _el$4, _el$5, _el$7, _el$8;
                });
            }
        };
    });
}();