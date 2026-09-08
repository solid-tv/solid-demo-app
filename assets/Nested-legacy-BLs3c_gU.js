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
    System.register([ "./render-legacy-1jX59Y6X.js", "./Column-legacy-B6ilkF_Y.js", "./components-legacy-Drl7FtOT.js", "./state-legacy-B9YP9E7M.js" ], function(_export, _context) {
        var createElement, effect, createComponent, insert, setProp, createSignal, Column, Button, setGlobalBackground;
        return {
            setters: [ function(_renderLegacy002Js) {
                createElement = _renderLegacy002Js.a, effect = _renderLegacy002Js.c, createComponent = _renderLegacy002Js.i, 
                insert = _renderLegacy002Js.l, setProp = _renderLegacy002Js.m, createSignal = _renderLegacy002Js.q;
            }, function(_ColumnLegacy00aJs) {
                Column = _ColumnLegacy00aJs.t;
            }, function(_componentsLegacy00eJs) {
                Button = _componentsLegacy00eJs.r;
            }, function(_stateLegacy00jJs) {
                setGlobalBackground = _stateLegacy00jJs.n;
            } ],
            execute: function() {
                _export("default", function() {
                    setGlobalBackground(858993663);
                    var styles_container = {
                        x: 400,
                        width: 400,
                        height: 1080,
                        color: 2576980479,
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "spaceBetween",
                        padding: [ 0, 10 ]
                    }, _createSignal2 = _slicedToArray(createSignal(0), 2), currentIndex = _createSignal2[0], setCurrentIndex = _createSignal2[1];
                    return createComponent(Column, {
                        get style() {
                            return styles_container;
                        },
                        scroll: "none",
                        get children() {
                            return [ (_el$ = createElement("view"), setProp(_el$, "forwardFocus", 0), setProp(_el$, "clipping", !0), 
                            setProp(_el$, "height", 600), setProp(_el$, "x", 50), insert(_el$, createComponent(Column, {
                                scrollIndex: 3,
                                onSelectedChanged: setCurrentIndex,
                                get children() {
                                    return [ createComponent(Button, {
                                        title: "Button 1A",
                                        autofocus: !0,
                                        onEnter: function() {
                                            return console.log("Button 1A pressed");
                                        }
                                    }), createComponent(Button, {
                                        title: "Button 1B",
                                        onEnter: function() {
                                            return console.log("Button 1B pressed");
                                        }
                                    }), createComponent(Button, {
                                        title: "Button 1C",
                                        onEnter: function() {
                                            return console.log("Button 1C pressed");
                                        }
                                    }), createComponent(Button, {
                                        title: "Button 1D",
                                        onEnter: function() {
                                            return console.log("Button 1C pressed");
                                        }
                                    }), createComponent(Button, {
                                        title: "Button 1E",
                                        onEnter: function() {
                                            return console.log("Button 1C pressed");
                                        }
                                    }), createComponent(Button, {
                                        title: "Button 1F",
                                        onEnter: function() {
                                            return console.log("Button 1C pressed");
                                        }
                                    }), createComponent(Button, {
                                        title: "Button 1G",
                                        onEnter: function() {
                                            return console.log("Button 1C pressed");
                                        }
                                    }), createComponent(Button, {
                                        title: "Button 1H",
                                        onEnter: function() {
                                            return console.log("Button 1C pressed");
                                        }
                                    }) ];
                                }
                            })), _el$), (_el$2 = createElement("view"), setProp(_el$2, "colorTop", 2576980479), 
                            setProp(_el$2, "colorBottom", 2576980224), setProp(_el$2, "height", 100), setProp(_el$2, "y", 10), 
                            setProp(_el$2, "skipFocus", !0), setProp(_el$2, "flexItem", !1), effect(function(_$p) {
                                return setProp(_el$2, "alpha", currentIndex() > 0 ? 1 : 0, _$p);
                            }), _el$2), (_el$3 = createElement("view"), setProp(_el$3, "colorTop", 2576980224), 
                            setProp(_el$3, "colorBottom", 2576980479), setProp(_el$3, "height", 100), setProp(_el$3, "y", 510), 
                            setProp(_el$3, "skipFocus", !0), setProp(_el$3, "flexItem", !1), effect(function(_$p) {
                                return setProp(_el$3, "alpha", 7 === currentIndex() ? 0 : 1, _$p);
                            }), _el$3), (_el$4 = createElement("view"), setProp(_el$4, "height", 4), setProp(_el$4, "color", 3284386815), 
                            setProp(_el$4, "skipFocus", !0), _el$4), (_el$5 = createElement("view"), setProp(_el$5, "forwardFocus", 0), 
                            setProp(_el$5, "clipping", !0), setProp(_el$5, "height", 400), setProp(_el$5, "x", 50), 
                            insert(_el$5, createComponent(Column, {
                                get children() {
                                    return [ createComponent(Button, {
                                        title: "Button 3A",
                                        onEnter: function() {
                                            return console.log("Button 3A pressed");
                                        }
                                    }), createComponent(Button, {
                                        title: "Button 3B",
                                        onEnter: function() {
                                            return console.log("Button 3B pressed");
                                        }
                                    }), createComponent(Button, {
                                        title: "Button 3C",
                                        onEnter: function() {
                                            return console.log("Button 3C pressed");
                                        }
                                    }) ];
                                }
                            })), _el$5) ];
                            var _el$5, _el$4, _el$3, _el$2, _el$;
                        }
                    });
                });
            }
        };
    });
}();