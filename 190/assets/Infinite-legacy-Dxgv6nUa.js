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
    System.register([ "./render-legacy-BWVYYcsn.js", "./mergeProps-legacy-D2-w7VmI.js", "./components-legacy-BjVQ_G3e.js", "./state-legacy-DCkLOvQm.js" ], function(_export, _context) {
        var Show, createEffect, createElement, effect, use, createComponent, insert, setProp, createSignal, createTextNode, insertNode, mergeProps, List, Poster, setGlobalBackground;
        return {
            setters: [ function(_renderLegacy002Js) {
                Show = _renderLegacy002Js.N, createEffect = _renderLegacy002Js.V, createElement = _renderLegacy002Js.a, 
                effect = _renderLegacy002Js.c, use = _renderLegacy002Js.g, createComponent = _renderLegacy002Js.i, 
                insert = _renderLegacy002Js.l, setProp = _renderLegacy002Js.m, createSignal = _renderLegacy002Js.q, 
                createTextNode = _renderLegacy002Js.s, insertNode = _renderLegacy002Js.u;
            }, function(_mergePropsLegacy005Js) {
                mergeProps = _mergePropsLegacy005Js.t;
            }, function(_componentsLegacy00eJs) {
                List = _componentsLegacy00eJs.p, Poster = _componentsLegacy00eJs.s;
            }, function(_stateLegacy00jJs) {
                setGlobalBackground = _stateLegacy00jJs.n;
            } ],
            execute: function() {
                _export("default", function(props) {
                    var solidLogo, _createSignal2 = _slicedToArray(createSignal([]), 2), allItems = _createSignal2[0], setAllItems = _createSignal2[1], _createSignal4 = _slicedToArray(createSignal([]), 2), displayedItems = _createSignal4[0], setDisplayedItems = _createSignal4[1], _createSignal6 = _slicedToArray(createSignal(1), 2), resetCounter = _createSignal6[0], setResetCounter = _createSignal6[1], currentIndex = 0;
                    function updateDisplayedItems() {
                        var items = allItems(), start = Math.max(currentIndex, 0), end = Math.min(currentIndex + 5 + 2, items.length);
                        setDisplayedItems(items.slice(start, end));
                    }
                    function reset(_e, elm) {
                        return currentIndex = 0, setResetCounter(function(r) {
                            return r + 1;
                        }), updateDisplayedItems(), elm.children[1].setFocus(), !0;
                    }
                    function shiftLeft(_e, elm) {
                        return currentIndex > 0 && (currentIndex = Math.max(0, currentIndex - 1), elm.children[0].setFocus(), 
                        updateDisplayedItems()), !0;
                    }
                    function shiftRight(_e, elm) {
                        return currentIndex < allItems().length - 1 && (currentIndex = Math.min(allItems().length - 1, currentIndex + 1), 
                        elm.children[2].setFocus(), updateDisplayedItems()), !0;
                    }
                    function animateOut(node) {
                        return node.animate({
                            y: 200,
                            alpha: 0
                        }, {
                            duration: 500,
                            easing: "ease-in-out"
                        }).start().waitUntilStopped();
                    }
                    function animateIn(node) {
                        return node.alpha = 0, node.y = -100, node.animate({
                            y: 55,
                            alpha: 1
                        }, {
                            duration: 500,
                            easing: "ease-in-out"
                        }).start().waitUntilStopped();
                    }
                    createEffect(function() {
                        var all = [ {} ].concat(_toConsumableArray(props.data.rows.map(function(row) {
                            return row.items();
                        }).flat()));
                        setAllItems(all), setDisplayedItems(all.slice(0, 7));
                    }), setGlobalBackground(255);
                    var _el$8, _el$9, titleRowStyles = {
                        fontFamily: "Raleway",
                        fontSize: 24,
                        height: 32,
                        lineHeight: 32
                    }, withTransition = {
                        x: {
                            duration: 250
                        },
                        alpha: {
                            duration: 250
                        }
                    };
                    return [ function() {
                        var _el$ = createElement("view"), _el$2 = createElement("text"), _el$4 = createElement("view"), _el$5 = createElement("view"), _el$6 = createElement("text");
                        insertNode(_el$, _el$2), insertNode(_el$, _el$4), insertNode(_el$, _el$5), insertNode(_el$, _el$6);
                        return "function" == typeof solidLogo ? use(solidLogo, _el$) : solidLogo = _el$, 
                        setProp(_el$, "width", 300), setProp(_el$, "height", 150), setProp(_el$, "x", 162), 
                        setProp(_el$, "y", 80), setProp(_el$, "zIndex", 105), insertNode(_el$2, createTextNode("Built With:")), 
                        setProp(_el$2, "x", 80), setProp(_el$2, "fontSize", 28), setProp(_el$2, "color", 4143380121), 
                        setProp(_el$4, "y", 32), setProp(_el$4, "src", "./assets/solidWord.png"), setProp(_el$4, "width", 280), 
                        setProp(_el$4, "height", 52), setProp(_el$5, "x", 0), setProp(_el$5, "y", 110), 
                        setProp(_el$5, "src", "./assets/tmdb.png"), setProp(_el$5, "width", 80), setProp(_el$5, "height", 41), 
                        insertNode(_el$6, createTextNode("This product uses the TMDB API but is not endorsed or certified by TMDB.")), 
                        setProp(_el$6, "x", 90), setProp(_el$6, "y", 110), setProp(_el$6, "contain", "width"), 
                        setProp(_el$6, "width", 160), setProp(_el$6, "fontSize", 12), setProp(_el$6, "color", 4143380121), 
                        _el$;
                    }(), (_el$8 = createElement("view"), _el$9 = createElement("text"), insertNode(_el$8, _el$9), 
                    setProp(_el$8, "x", 160), setProp(_el$8, "y", 300), setProp(_el$8, "height", 300), 
                    insertNode(_el$9, createTextNode("Infinite Item List")), setProp(_el$9, "style", titleRowStyles), 
                    insert(_el$8, createComponent(Show, {
                        get when() {
                            return resetCounter();
                        },
                        keyed: !0,
                        get children() {
                            var _el$1 = createElement("view");
                            return setProp(_el$1, "onDestroy", animateOut), setProp(_el$1, "onCreate", animateIn), 
                            setProp(_el$1, "onFocus", function(elm) {
                                var _elm$children$;
                                return null == (_elm$children$ = elm.children[1]) ? void 0 : _elm$children$.setFocus();
                            }), setProp(_el$1, "onLeft", shiftLeft), setProp(_el$1, "onRight", shiftRight), 
                            setProp(_el$1, "onUp", reset), setProp(_el$1, "onDown", reset), setProp(_el$1, "y", 55), 
                            insert(_el$1, createComponent(List, {
                                get each() {
                                    return displayedItems();
                                },
                                children: function(item, index) {
                                    return createComponent(Poster, mergeProps(item, {
                                        get x() {
                                            return 210 * index() - 210;
                                        },
                                        get alpha() {
                                            return 0 === index() || index() === displayedItems().length - 1 ? 0 : 1;
                                        },
                                        transition: withTransition
                                    }));
                                }
                            })), effect(function(_$p) {
                                return setProp(_el$1, "autofocus", allItems(), _$p);
                            }), _el$1;
                        }
                    }), null), _el$8) ];
                });
            }
        };
    });
}();