!function() {
    function _toConsumableArray(r) {
        return function(r) {
            if (Array.isArray(r)) return _arrayLikeToArray(r);
        }(r) || function(r) {
            if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);
        }(r) || _unsupportedIterableToArray(r) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }();
    }
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
        }(r, e) || _unsupportedIterableToArray(r, e) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }();
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
    System.register([ "./render-legacy-t4wUAioc.js", "./state-legacy-CIkOTHs-.js" ], function(_export, _context) {
        var onCleanup, createSignal, use, createElement, onMount, setProp, insert, insertNode, setGlobalBackground;
        return {
            setters: [ function(_renderLegacy002Js) {
                onCleanup = _renderLegacy002Js.$, createSignal = _renderLegacy002Js.J, use = _renderLegacy002Js._, 
                createElement = _renderLegacy002Js.a, onMount = _renderLegacy002Js.et, setProp = _renderLegacy002Js.h, 
                insert = _renderLegacy002Js.l, insertNode = _renderLegacy002Js.u;
            }, function(_stateLegacy00iJs) {
                setGlobalBackground = _stateLegacy00iJs.n;
            } ],
            execute: function() {
                _export("default", function() {
                    var ball, invervalTimer, _createSignal2 = _slicedToArray(createSignal([]), 2), ballStatus = _createSignal2[0], setBallStatus = _createSignal2[1], styleBall = {
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
                    }, randomIntBetween = function(from, to) {
                        return Math.floor(Math.random() * (to - from + 1) + from);
                    };
                    function logEvent(name, elm) {
                        setBallStatus(function(prev) {
                            return [].concat(_toConsumableArray(prev), [ name ]).slice(-4);
                        }), console.log(name);
                    }
                    return onMount(function() {
                        setGlobalBackground(255), ball.x = 910, ball.y = 490, invervalTimer = setInterval(function() {
                            ball.rotation = randomIntBetween(-90, 90), ball.x = randomIntBetween(-300, 2220), 
                            ball.y = randomIntBetween(-300, 1380);
                        }, 2500);
                    }), onCleanup(function() {
                        clearInterval(invervalTimer);
                    }), function() {
                        var _el$ = createElement("view"), _el$2 = createElement("text"), _el$3 = createElement("view");
                        insertNode(_el$, _el$2), insertNode(_el$, _el$3), setProp(_el$2, "style", Title), 
                        insert(_el$2, function() {
                            return ballStatus().join("\n");
                        });
                        return "function" == typeof ball ? use(ball, _el$3) : ball = _el$3, setProp(_el$3, "autofocus", !0), 
                        setProp(_el$3, "style", styleBall), setProp(_el$3, "onEvent", {
                            inBounds: function(elm) {
                                return logEvent("inBounds");
                            },
                            outOfBounds: function(elm) {
                                return logEvent("outOfBounds");
                            },
                            inViewport: function(elm) {
                                return logEvent("inViewport");
                            },
                            outOfViewport: function(elm) {
                                return logEvent("outOfViewport");
                            }
                        }), _el$;
                    }();
                });
            }
        };
    });
}();