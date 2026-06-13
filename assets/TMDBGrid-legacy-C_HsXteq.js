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
    System.register([ "./index-legacy-DVHXzDdi.js" ], function(exports, module) {
        "use strict";
        var createSignal, createEffect, untrack, createMemo, createElement, chainRefs, hasFocus, use, spread, mergeProps, chainFunctions, insert, createComponent, Index, ElementNode, debounce, setGlobalBackground, on, activeElement, insertNode, setProp, createTextNode, ContentBlock, Poster;
        return {
            setters: [ function(module) {
                createSignal = module.b;
                createEffect = module.i;
                untrack = module.w;
                createMemo = module.x;
                createElement = module.c;
                chainRefs = module.y;
                hasFocus = module.z;
                use = module.v;
                spread = module.A;
                mergeProps = module.q;
                chainFunctions = module.B;
                insert = module.k;
                createComponent = module.l;
                Index = module.I;
                ElementNode = module.E;
                debounce = module.D;
                setGlobalBackground = module.s;
                on = module.j;
                activeElement = module.G;
                insertNode = module.n;
                setProp = module.a;
                createTextNode = module.p;
                ContentBlock = module.H;
                Poster = module.P;
            } ],
            execute: function execute() {
                function Grid(props) {
                    var _createSignal = createSignal(0), _createSignal2 = _slicedToArray(_createSignal, 2), focusedIndex = _createSignal2[0], setFocusedIndex = _createSignal2[1];
                    var baseColumns = 4;
                    createEffect(function() {
                        var _props$items;
                        var currentIndex = untrack(focusedIndex);
                        if (props.selected === currentIndex) return;
                        if (props.selected !== void 0 && ((_props$items = props.items) === null || _props$items === void 0 ? void 0 : _props$items.length) > props.selected) {
                            moveFocus(props.selected - currentIndex);
                        }
                    });
                    var itemWidth = function itemWidth() {
                        var _props$itemWidth;
                        return (_props$itemWidth = props.itemWidth) !== null && _props$itemWidth !== void 0 ? _props$itemWidth : 300;
                    };
                    var itemHeight = function itemHeight() {
                        var _props$itemHeight;
                        return (_props$itemHeight = props.itemHeight) !== null && _props$itemHeight !== void 0 ? _props$itemHeight : 300;
                    };
                    var columns = createMemo(function() {
                        return props.columns || baseColumns;
                    });
                    var totalWidth = createMemo(function() {
                        var _props$itemOffset;
                        return itemWidth() + ((_props$itemOffset = props.itemOffset) !== null && _props$itemOffset !== void 0 ? _props$itemOffset : 0);
                    });
                    var totalHeight = createMemo(function() {
                        var _props$itemOffset2;
                        return itemHeight() + ((_props$itemOffset2 = props.itemOffset) !== null && _props$itemOffset2 !== void 0 ? _props$itemOffset2 : 0);
                    });
                    var rows = createMemo(function() {
                        return Math.ceil(props.items.length / columns());
                    });
                    function focus() {
                        var focusedElm = gridRef.children[focusedIndex()];
                        if (focusedElm instanceof ElementNode && !hasFocus(focusedElm)) {
                            var _props$onSelectedChan;
                            focusedElm.setFocus();
                            (_props$onSelectedChan = props.onSelectedChanged) === null || _props$onSelectedChan === void 0 || _props$onSelectedChan.call(gridRef, focusedIndex(), gridRef, focusedElm);
                            return true;
                        }
                        return false;
                    }
                    function moveFocus(delta) {
                        if (!props.items || props.items.length === 0) return false;
                        var newIndex = focusedIndex() + delta;
                        if (newIndex >= 0 && newIndex < props.items.length) {
                            setFocusedIndex(newIndex);
                        } else if (props.looping) {
                            var totalItems = props.items.length;
                            if (delta < 0) {
                                var lastRowStart = totalItems - totalItems % columns() || totalItems - columns();
                                var target = lastRowStart + focusedIndex() % columns();
                                setFocusedIndex(target < totalItems ? target : target - columns());
                            } else {
                                setFocusedIndex(focusedIndex() % columns());
                            }
                        } else {
                            return false;
                        }
                        return focus();
                    }
                    function handleHorizontalFocus(delta) {
                        if (!props.items || props.items.length === 0) return false;
                        var newIndex = focusedIndex() + delta;
                        var isWithinRow = Math.floor(newIndex / columns()) === Math.floor(focusedIndex() / columns());
                        if (newIndex >= 0 && newIndex < props.items.length && isWithinRow) {
                            setFocusedIndex(newIndex);
                        } else if (props.looping) {
                            var rowStart = Math.floor(focusedIndex() / columns()) * columns();
                            var rowEnd = Math.min(rowStart + columns() - 1, props.items.length - 1);
                            setFocusedIndex(delta > 0 ? newIndex > rowEnd ? rowStart : newIndex : newIndex < rowStart ? rowEnd : newIndex);
                        } else {
                            return false;
                        }
                        return focus();
                    }
                    createEffect(function() {
                        if (props.items && props.items.length > 0 && gridRef && hasFocus(gridRef)) {
                            queueMicrotask(focus);
                        }
                    });
                    function scrollToIndex(index) {
                        untrack(function() {
                            if (!props.items || props.items.length === 0) return;
                            if (!hasFocus(gridRef)) {
                                gridRef.setFocus();
                            }
                            var clampedIndex = Math.max(0, Math.min(index, props.items.length - 1));
                            setFocusedIndex(clampedIndex);
                            queueMicrotask(focus);
                        });
                    }
                    var scrollY = createMemo(function() {
                        var _props$y;
                        return props.scroll === "none" ? (_props$y = props.y) !== null && _props$y !== void 0 ? _props$y : 0 : -Math.floor(focusedIndex() / columns()) * totalHeight() + (props.y || 0);
                    });
                    var gridRef;
                    return function() {
                        var _el$ = createElement("view");
                        var _ref$ = chainRefs(function(el) {
                            return gridRef = el;
                        }, props.ref);
                        typeof _ref$ === "function" && use(_ref$, _el$);
                        spread(_el$, mergeProps(props, {
                            transition: {
                                y: true
                            },
                            get height() {
                                return totalHeight() * rows();
                            },
                            scrollToIndex: scrollToIndex,
                            get onUp() {
                                return chainFunctions(props.onUp, function() {
                                    return moveFocus(-columns());
                                });
                            },
                            get onDown() {
                                return chainFunctions(props.onDown, function() {
                                    return moveFocus(columns());
                                });
                            },
                            get onLeft() {
                                return chainFunctions(props.onLeft, function() {
                                    return handleHorizontalFocus(-1);
                                });
                            },
                            get onRight() {
                                return chainFunctions(props.onRight, function() {
                                    return handleHorizontalFocus(1);
                                });
                            },
                            get onFocus() {
                                return chainFunctions(props.onFocus, function() {
                                    return handleHorizontalFocus(0);
                                });
                            },
                            strictBounds: false,
                            get y() {
                                return scrollY();
                            }
                        }), true);
                        insert(_el$, createComponent(Index, {
                            get each() {
                                return props.items;
                            },
                            children: function children(item, index) {
                                return createComponent(props.children, {
                                    get item() {
                                        return item();
                                    },
                                    index: index,
                                    get width() {
                                        return itemWidth();
                                    },
                                    get height() {
                                        return itemHeight();
                                    },
                                    get x() {
                                        return index % columns() * totalWidth();
                                    },
                                    get y() {
                                        return Math.floor(index / columns()) * totalHeight();
                                    }
                                });
                            }
                        }));
                        return _el$;
                    }();
                }
                var TMDB = exports("default", function(props) {
                    var _createSignal3 = createSignal({}), _createSignal4 = _slicedToArray(_createSignal3, 2), heroContent = _createSignal4[0], setHeroContent = _createSignal4[1];
                    var contentBlock, solidLogo, firstRun = true;
                    var delayedBackgrounds = debounce(setGlobalBackground, 800);
                    var delayedHero = debounce(function(content) {
                        return setHeroContent(content || {});
                    }, 600);
                    createEffect(on(activeElement, function(elm) {
                        if (!elm) return;
                        if (firstRun) {
                            elm.backdrop && setGlobalBackground(elm.backdrop);
                            elm.heroContent && setHeroContent(elm.heroContent);
                            firstRun = false;
                        } else {
                            elm.backdrop && delayedBackgrounds(elm.backdrop);
                            elm.heroContent && delayedHero(elm.heroContent);
                        }
                    }, {
                        defer: true
                    }));
                    var items = createMemo(function() {
                        return props.data.rows.map(function(row) {
                            return row.items();
                        }).flat();
                    });
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
                        insertNode(_el$2, createTextNode("Built with"));
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
                    }(), createComponent(ContentBlock, {
                        ref: function ref(r$) {
                            var _ref$2 = contentBlock;
                            typeof _ref$2 === "function" ? _ref$2(r$) : contentBlock = r$;
                        },
                        y: 300,
                        x: 162,
                        get content() {
                            return heroContent();
                        }
                    }), function() {
                        var _el$8 = createElement("view");
                        setProp(_el$8, "x", 165);
                        setProp(_el$8, "y", 540);
                        setProp(_el$8, "clipping", true);
                        insert(_el$8, createComponent(Grid, {
                            x: 12,
                            y: 12,
                            get autofocus() {
                                return items();
                            },
                            itemWidth: 200,
                            get items() {
                                return items();
                            },
                            columns: 6,
                            itemOffset: 36,
                            children: function children(props2) {
                                return createComponent(Poster, props2);
                            }
                        }));
                        return _el$8;
                    }() ];
                });
            }
        };
    });
})();
