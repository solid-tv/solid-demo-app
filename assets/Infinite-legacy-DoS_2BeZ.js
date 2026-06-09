(function() {
    function _toConsumableArray(r) {
        return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread();
    }
    function _nonIterableSpread() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    function _iterableToArray(r) {
        if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);
    }
    function _arrayWithoutHoles(r) {
        if (Array.isArray(r)) return _arrayLikeToArray(r);
    }
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
    System.register([ "./index-legacy-Dtm_2sYG.js" ], function(exports, module) {
        "use strict";
        var createSignal, createEffect, setGlobalBackground, createElement, insertNode, setProp, createTextNode, insert, createComponent, Show, List, Poster, mergeProps, effect, use;
        return {
            setters: [ function(module) {
                createSignal = module.b;
                createEffect = module.i;
                setGlobalBackground = module.s;
                createElement = module.c;
                insertNode = module.n;
                setProp = module.a;
                createTextNode = module.p;
                insert = module.k;
                createComponent = module.l;
                Show = module.S;
                List = module.r;
                Poster = module.P;
                mergeProps = module.q;
                effect = module.m;
                use = module.v;
            } ],
            execute: function execute() {
                var Loops = exports("default", function(props) {
                    var _createSignal = createSignal([]), _createSignal2 = _slicedToArray(_createSignal, 2), allItems = _createSignal2[0], setAllItems = _createSignal2[1];
                    var _createSignal3 = createSignal([]), _createSignal4 = _slicedToArray(_createSignal3, 2), displayedItems = _createSignal4[0], setDisplayedItems = _createSignal4[1];
                    var _createSignal5 = createSignal(1), _createSignal6 = _slicedToArray(_createSignal5, 2), resetCounter = _createSignal6[0], setResetCounter = _createSignal6[1];
                    var displaySize = 5;
                    var bufferSize = 2;
                    var currentIndex = 0, solidLogo;
                    createEffect(function() {
                        var all = [ {} ].concat(_toConsumableArray(props.data.rows.map(function(row) {
                            return row.items();
                        }).flat()));
                        setAllItems(all);
                        setDisplayedItems(all.slice(0, displaySize + bufferSize));
                    });
                    function updateDisplayedItems() {
                        var items = allItems();
                        var start = Math.max(currentIndex, 0);
                        var end = Math.min(currentIndex + displaySize + bufferSize, items.length);
                        setDisplayedItems(items.slice(start, end));
                    }
                    function reset(_e, elm) {
                        currentIndex = 0;
                        setResetCounter(function(r) {
                            return r + 1;
                        });
                        updateDisplayedItems();
                        elm.children[1].setFocus();
                        return true;
                    }
                    function shiftLeft(_e, elm) {
                        if (currentIndex > 0) {
                            currentIndex = Math.max(0, currentIndex - 1);
                            elm.children[0].setFocus();
                            updateDisplayedItems();
                        }
                        return true;
                    }
                    function shiftRight(_e, elm) {
                        if (currentIndex < allItems().length - 1) {
                            currentIndex = Math.min(allItems().length - 1, currentIndex + 1);
                            elm.children[2].setFocus();
                            updateDisplayedItems();
                        }
                        return true;
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
                        node.alpha = 0;
                        node.y = -100;
                        return node.animate({
                            y: 55,
                            alpha: 1
                        }, {
                            duration: 500,
                            easing: "ease-in-out"
                        }).start().waitUntilStopped();
                    }
                    setGlobalBackground(255);
                    var titleRowStyles = {
                        fontFamily: "Raleway",
                        fontSize: 24,
                        height: 32,
                        lineHeight: 32
                    };
                    var withTransition = {
                        x: {
                            duration: 250
                        },
                        alpha: {
                            duration: 250
                        }
                    };
                    return [ function() {
                        var _el$ = createElement("view"), _el$2 = createElement("text"), _el$4 = createElement("view"), _el$5 = createElement("view"), _el$6 = createElement("text");
                        insertNode(_el$, _el$2);
                        insertNode(_el$, _el$4);
                        insertNode(_el$, _el$5);
                        insertNode(_el$, _el$6);
                        var _ref$ = solidLogo;
                        typeof _ref$ === "function" ? use(_ref$, _el$) : solidLogo = _el$;
                        setProp(_el$, "width", 300);
                        setProp(_el$, "height", 150);
                        setProp(_el$, "x", 162);
                        setProp(_el$, "y", 80);
                        setProp(_el$, "zIndex", 105);
                        insertNode(_el$2, createTextNode("Built With:"));
                        setProp(_el$2, "x", 80);
                        setProp(_el$2, "fontSize", 28);
                        setProp(_el$2, "color", 4143380121);
                        setProp(_el$4, "y", 32);
                        setProp(_el$4, "src", "./assets/solidWord.png");
                        setProp(_el$4, "width", 280);
                        setProp(_el$4, "height", 52);
                        setProp(_el$5, "x", 0);
                        setProp(_el$5, "y", 110);
                        setProp(_el$5, "src", "./assets/tmdb.png");
                        setProp(_el$5, "width", 80);
                        setProp(_el$5, "height", 41);
                        insertNode(_el$6, createTextNode("This product uses the TMDB API but is not endorsed or certified by TMDB."));
                        setProp(_el$6, "x", 90);
                        setProp(_el$6, "y", 110);
                        setProp(_el$6, "contain", "width");
                        setProp(_el$6, "width", 160);
                        setProp(_el$6, "fontSize", 12);
                        setProp(_el$6, "color", 4143380121);
                        return _el$;
                    }(), function() {
                        var _el$8 = createElement("view"), _el$9 = createElement("text");
                        insertNode(_el$8, _el$9);
                        setProp(_el$8, "x", 160);
                        setProp(_el$8, "y", 300);
                        setProp(_el$8, "height", 300);
                        insertNode(_el$9, createTextNode("Infinite Item List"));
                        setProp(_el$9, "style", titleRowStyles);
                        insert(_el$8, createComponent(Show, {
                            get when() {
                                return resetCounter();
                            },
                            keyed: true,
                            get children() {
                                var _el$1 = createElement("view");
                                setProp(_el$1, "onDestroy", animateOut);
                                setProp(_el$1, "onCreate", animateIn);
                                setProp(_el$1, "onFocus", function(elm) {
                                    var _elm$children$;
                                    return (_elm$children$ = elm.children[1]) === null || _elm$children$ === void 0 ? void 0 : _elm$children$.setFocus();
                                });
                                setProp(_el$1, "onLeft", shiftLeft);
                                setProp(_el$1, "onRight", shiftRight);
                                setProp(_el$1, "onUp", reset);
                                setProp(_el$1, "onDown", reset);
                                setProp(_el$1, "y", 55);
                                insert(_el$1, createComponent(List, {
                                    get each() {
                                        return displayedItems();
                                    },
                                    children: function children(item, index) {
                                        var isEdgeItem = function isEdgeItem() {
                                            return index() === 0 || index() === displayedItems().length - 1;
                                        };
                                        return createComponent(Poster, mergeProps(item, {
                                            get x() {
                                                return index() * 210 - 210;
                                            },
                                            get alpha() {
                                                return isEdgeItem() ? 0 : 1;
                                            },
                                            transition: withTransition
                                        }));
                                    }
                                }));
                                effect(function(_$p) {
                                    return setProp(_el$1, "autofocus", allItems(), _$p);
                                });
                                return _el$1;
                            }
                        }), null);
                        return _el$8;
                    }() ];
                });
            }
        };
    });
})();
