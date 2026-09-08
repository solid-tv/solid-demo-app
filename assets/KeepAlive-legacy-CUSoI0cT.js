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
    System.register([ "./render-legacy-1jX59Y6X.js" ], function(_export, _context) {
        var Config, createRoot, onCleanup, createEffect, getOwner, createElement, effect, memo, use, createComponent, insert, setProp, createSignal, insertNode;
        return _export("default", function() {
            var _createSignal4 = _slicedToArray(createSignal(0), 2), counter = _createSignal4[0], setCounter = _createSignal4[1];
            setInterval(function() {
                setCounter(function(prev) {
                    return prev + 1;
                });
            }, 1e3);
            var fn, result, owner, dispose, _createSignal2, props, setProps, detachedOwner, _c$, _c$2, _el$3, _el$4, _el$5, Comp = (fn = function(props) {
                return _el$ = createElement("view"), _el$2 = createElement("text"), insertNode(_el$, _el$2), 
                use(function(el) {
                    createEffect(function(rect) {
                        props();
                        var _el$lng$x, _el$lng$y, r = function(el) {
                            var width = el.width, height = el.height, x = 0, y = 0;
                            null != el.scaleX && (width *= el.scaleX), null != el.scaleY && (height *= el.scaleY);
                            for (var curr = el; null != curr; ) x += curr.x, y += curr.y, null != curr.scaleX && (x += curr.width / 2 * (1 - curr.scaleX)), 
                            null != curr.scaleY && (y += curr.height / 2 * (1 - curr.scaleY)), curr = curr.parent;
                            if (null != Config.rendererOptions) {
                                var dpr = Config.rendererOptions.deviceLogicalPixelRatio;
                                null != dpr && (x *= dpr, y *= dpr, width *= dpr, height *= dpr);
                            }
                            return {
                                x: x,
                                y: y,
                                width: width,
                                height: height
                            };
                        }(el);
                        return null != rect && (el.lng.x = (null !== (_el$lng$x = el.lng.x) && void 0 !== _el$lng$x ? _el$lng$x : 0) - (r.x - rect.x), 
                        el.lng.y = (null !== (_el$lng$y = el.lng.y) && void 0 !== _el$lng$y ? _el$lng$y : 0) - (r.y - rect.y), 
                        el.animate({
                            x: 40 * Math.random(),
                            y: 60 * Math.random(),
                            alpha: 1
                        }, {
                            duration: 250,
                            easing: "ease-in-out"
                        }).start()), r;
                    });
                }, _el$), setProp(_el$, "height", 80), setProp(_el$, "width", 120), setProp(_el$, "onCreate", function(el) {
                    el.alpha = 0, el.animate({
                        alpha: 1
                    }, {
                        duration: 250,
                        easing: "ease-in-out"
                    }).start();
                }), setProp(_el$, "onDestroy", function(el) {
                    return el.rtt = !0, el.animate({
                        alpha: 0
                    }, {
                        duration: 250,
                        easing: "ease-in-out"
                    }).start().waitUntilStopped();
                }), setProp(_el$2, "color", 4294967295), insert(_el$2, function() {
                    return props().text;
                }), effect(function(_p$) {
                    var _v$ = Math.floor(16777215 * Math.random()) << 8 | 255, _v$2 = 40 * Math.random(), _v$3 = 60 * Math.random();
                    return _v$ !== _p$.e && (_p$.e = setProp(_el$, "color", _v$, _p$.e)), _v$2 !== _p$.t && (_p$.t = setProp(_el$, "x", _v$2, _p$.t)), 
                    _v$3 !== _p$.a && (_p$.a = setProp(_el$, "y", _v$3, _p$.a)), _p$;
                }, {
                    e: void 0,
                    t: void 0,
                    a: void 0
                }), _el$;
                var _el$, _el$2;
            }, dispose = null, _createSignal2 = _slicedToArray(createSignal(null), 2), props = _createSignal2[0], 
            setProps = _createSignal2[1], detachedOwner = getOwner(), function(p) {
                setProps(function() {
                    return p;
                }), null == dispose && createRoot(function(d) {
                    dispose = d, result = fn(props);
                }, detachedOwner);
                var o = owner = getOwner();
                return onCleanup(function() {
                    queueMicrotask(function() {
                        null != dispose && owner === o && (dispose(), dispose = owner = result = null);
                    });
                }), result;
            });
            return _el$3 = createElement("view"), _el$4 = createElement("view"), _el$5 = createElement("view"), 
            insertNode(_el$3, _el$4), insertNode(_el$3, _el$5), setProp(_el$3, "display", "flex"), 
            setProp(_el$3, "flexDirection", "row"), setProp(_el$4, "color", 286331391), setProp(_el$4, "width", 160), 
            setProp(_el$4, "height", 160), insert(_el$4, (_c$ = memo(function() {
                return counter() % 3 == 0;
            }), function() {
                return _c$() && createComponent(Comp, {
                    text: "one"
                });
            })), setProp(_el$5, "color", 572662527), setProp(_el$5, "width", 160), setProp(_el$5, "height", 160), 
            insert(_el$5, (_c$2 = memo(function() {
                return counter() % 3 == 1;
            }), function() {
                return _c$2() && createComponent(Comp, {
                    text: "two"
                });
            })), _el$3;
        }), {
            setters: [ function(_renderLegacy002Js) {
                Config = _renderLegacy002Js.D, createRoot = _renderLegacy002Js.G, onCleanup = _renderLegacy002Js.Q, 
                createEffect = _renderLegacy002Js.V, getOwner = _renderLegacy002Js.Y, createElement = _renderLegacy002Js.a, 
                effect = _renderLegacy002Js.c, memo = _renderLegacy002Js.d, use = _renderLegacy002Js.g, 
                createComponent = _renderLegacy002Js.i, insert = _renderLegacy002Js.l, setProp = _renderLegacy002Js.m, 
                createSignal = _renderLegacy002Js.q, insertNode = _renderLegacy002Js.u;
            } ],
            execute: function() {}
        };
    });
}();