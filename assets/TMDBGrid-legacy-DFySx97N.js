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
    System.register([ "./render-legacy-1jX59Y6X.js", "./mergeProps-legacy-8amjdkoE.js", "./chainFunctions-legacy-Bpapim5k.js", "./ContentBlock-legacy-BhIuJTeE.js", "./components-legacy-Drl7FtOT.js", "./state-legacy-B9YP9E7M.js", "./dist-legacy-DkoeBEbV.js" ], function(_export, _context) {
        var createMemo, activeElement, hasFocus, createEffect, on, ElementNode, createElement, use, spread, createComponent, untrack, Index, insert, setProp, createSignal, createTextNode, insertNode, mergeProps, chainRefs, chainFunctions, ContentBlock, Poster, setGlobalBackground, debounce;
        function Grid(props) {
            var _createSignal2 = _slicedToArray(createSignal(0), 2), focusedIndex = _createSignal2[0], setFocusedIndex = _createSignal2[1];
            createEffect(function() {
                var _props$items, currentIndex = untrack(focusedIndex);
                props.selected !== currentIndex && void 0 !== props.selected && (null == (_props$items = props.items) ? void 0 : _props$items.length) > props.selected && moveFocus(props.selected - currentIndex);
            });
            var itemWidth = function() {
                var _props$itemWidth;
                return null !== (_props$itemWidth = props.itemWidth) && void 0 !== _props$itemWidth ? _props$itemWidth : 300;
            }, itemHeight = function() {
                var _props$itemHeight;
                return null !== (_props$itemHeight = props.itemHeight) && void 0 !== _props$itemHeight ? _props$itemHeight : 300;
            }, columns = createMemo(function() {
                return props.columns || 4;
            }), totalWidth = createMemo(function() {
                var _props$itemOffset;
                return itemWidth() + (null !== (_props$itemOffset = props.itemOffset) && void 0 !== _props$itemOffset ? _props$itemOffset : 0);
            }), totalHeight = createMemo(function() {
                var _props$itemOffset2;
                return itemHeight() + (null !== (_props$itemOffset2 = props.itemOffset) && void 0 !== _props$itemOffset2 ? _props$itemOffset2 : 0);
            }), rows = createMemo(function() {
                return Math.ceil(props.items.length / columns());
            });
            function focus() {
                var _props$onSelectedChan, focusedElm = gridRef.children[focusedIndex()];
                return focusedElm instanceof ElementNode && !hasFocus(focusedElm) && (focusedElm.setFocus(), 
                null == (_props$onSelectedChan = props.onSelectedChanged) || _props$onSelectedChan.call(gridRef, focusedIndex(), gridRef, focusedElm), 
                !0);
            }
            function moveFocus(delta) {
                if (!props.items || 0 === props.items.length) return !1;
                var newIndex = focusedIndex() + delta;
                if (newIndex >= 0 && newIndex < props.items.length) setFocusedIndex(newIndex); else {
                    if (!props.looping) return !1;
                    var totalItems = props.items.length;
                    if (delta < 0) {
                        var target = (totalItems - totalItems % columns() || totalItems - columns()) + focusedIndex() % columns();
                        setFocusedIndex(target < totalItems ? target : target - columns());
                    } else setFocusedIndex(focusedIndex() % columns());
                }
                return focus();
            }
            function handleHorizontalFocus(delta) {
                if (!props.items || 0 === props.items.length) return !1;
                var newIndex = focusedIndex() + delta, isWithinRow = Math.floor(newIndex / columns()) === Math.floor(focusedIndex() / columns());
                if (newIndex >= 0 && newIndex < props.items.length && isWithinRow) setFocusedIndex(newIndex); else {
                    if (!props.looping) return !1;
                    var rowStart = Math.floor(focusedIndex() / columns()) * columns(), rowEnd = Math.min(rowStart + columns() - 1, props.items.length - 1);
                    setFocusedIndex(delta > 0 ? newIndex > rowEnd ? rowStart : newIndex : newIndex < rowStart ? rowEnd : newIndex);
                }
                return focus();
            }
            function scrollToIndex(index) {
                untrack(function() {
                    if (props.items && 0 !== props.items.length) {
                        hasFocus(gridRef) || gridRef.setFocus();
                        var clampedIndex = Math.max(0, Math.min(index, props.items.length - 1));
                        setFocusedIndex(clampedIndex), queueMicrotask(focus);
                    }
                });
            }
            createEffect(function() {
                props.items && props.items.length > 0 && gridRef && hasFocus(gridRef) && queueMicrotask(focus);
            });
            var gridRef, _el$, _ref$, scrollY = createMemo(function() {
                var _props$y;
                return "none" === props.scroll ? null !== (_props$y = props.y) && void 0 !== _props$y ? _props$y : 0 : -Math.floor(focusedIndex() / columns()) * totalHeight() + (props.y || 0);
            });
            return _el$ = createElement("view"), "function" == typeof (_ref$ = chainRefs(function(el) {
                return gridRef = el;
            }, props.ref)) && use(_ref$, _el$), spread(_el$, mergeProps(props, {
                transition: {
                    y: !0
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
                strictBounds: !1,
                get y() {
                    return scrollY();
                }
            }), !0), insert(_el$, createComponent(Index, {
                get each() {
                    return props.items;
                },
                children: function(item, index) {
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
            })), _el$;
        }
        return {
            setters: [ function(_renderLegacy002Js) {
                createMemo = _renderLegacy002Js.H, activeElement = _renderLegacy002Js.O, hasFocus = _renderLegacy002Js.S, 
                createEffect = _renderLegacy002Js.V, on = _renderLegacy002Js.Z, ElementNode = _renderLegacy002Js._, 
                createElement = _renderLegacy002Js.a, use = _renderLegacy002Js.g, spread = _renderLegacy002Js.h, 
                createComponent = _renderLegacy002Js.i, untrack = _renderLegacy002Js.it, Index = _renderLegacy002Js.j, 
                insert = _renderLegacy002Js.l, setProp = _renderLegacy002Js.m, createSignal = _renderLegacy002Js.q, 
                createTextNode = _renderLegacy002Js.s, insertNode = _renderLegacy002Js.u;
            }, function(_mergePropsLegacy005Js) {
                mergeProps = _mergePropsLegacy005Js.t;
            }, function(_chainFunctionsLegacy009Js) {
                chainRefs = _chainFunctionsLegacy009Js.n, chainFunctions = _chainFunctionsLegacy009Js.t;
            }, function(_ContentBlockLegacy00cJs) {
                ContentBlock = _ContentBlockLegacy00cJs.t;
            }, function(_componentsLegacy00eJs) {
                Poster = _componentsLegacy00eJs.s;
            }, function(_stateLegacy00jJs) {
                setGlobalBackground = _stateLegacy00jJs.n;
            }, function(_distLegacy00kJs) {
                debounce = _distLegacy00kJs.t;
            } ],
            execute: function() {
                _export("default", function(props) {
                    var contentBlock, solidLogo, _createSignal4 = _slicedToArray(createSignal({}), 2), heroContent = _createSignal4[0], setHeroContent = _createSignal4[1], firstRun = !0, delayedBackgrounds = debounce(setGlobalBackground, 800), delayedHero = debounce(function(content) {
                        return setHeroContent(content || {});
                    }, 600);
                    createEffect(on(activeElement, function(elm) {
                        elm && (firstRun ? (elm.backdrop && setGlobalBackground(elm.backdrop), elm.heroContent && setHeroContent(elm.heroContent), 
                        firstRun = !1) : (elm.backdrop && delayedBackgrounds(elm.backdrop), elm.heroContent && delayedHero(elm.heroContent)));
                    }, {
                        defer: !0
                    }));
                    var _el$8, items = createMemo(function() {
                        return props.data.rows.map(function(row) {
                            return row.items();
                        }).flat();
                    });
                    return [ function() {
                        var _el$ = createElement("view"), _el$2 = createElement("text"), _el$4 = createElement("view"), _el$5 = createElement("view"), _el$6 = createElement("text");
                        insertNode(_el$, _el$2), insertNode(_el$, _el$4), insertNode(_el$, _el$5), insertNode(_el$, _el$6);
                        return "function" == typeof solidLogo ? use(solidLogo, _el$) : solidLogo = _el$, 
                        setProp(_el$, "width", 300), setProp(_el$, "height", 150), setProp(_el$, "x", 162), 
                        setProp(_el$, "y", 80), setProp(_el$, "zIndex", 105), insertNode(_el$2, createTextNode("Built with")), 
                        setProp(_el$2, "x", 80), setProp(_el$2, "fontSize", 28), setProp(_el$2, "color", 4143380121), 
                        setProp(_el$4, "y", 32), setProp(_el$4, "src", "./assets/solidWord.png"), setProp(_el$4, "width", 280), 
                        setProp(_el$4, "height", 52), setProp(_el$5, "x", 0), setProp(_el$5, "y", 110), 
                        setProp(_el$5, "src", "./assets/tmdb.png"), setProp(_el$5, "width", 80), setProp(_el$5, "height", 41), 
                        insertNode(_el$6, createTextNode("This product uses the TMDB API but is not endorsed or certified by TMDB.")), 
                        setProp(_el$6, "x", 90), setProp(_el$6, "y", 110), setProp(_el$6, "contain", "width"), 
                        setProp(_el$6, "width", 160), setProp(_el$6, "fontSize", 12), setProp(_el$6, "color", 4143380121), 
                        _el$;
                    }(), createComponent(ContentBlock, {
                        ref: function(r$) {
                            "function" == typeof contentBlock ? contentBlock(r$) : contentBlock = r$;
                        },
                        y: 300,
                        x: 162,
                        get content() {
                            return heroContent();
                        }
                    }), (_el$8 = createElement("view"), setProp(_el$8, "x", 165), setProp(_el$8, "y", 540), 
                    setProp(_el$8, "clipping", !0), insert(_el$8, createComponent(Grid, {
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
                        children: function(props) {
                            return createComponent(Poster, props);
                        }
                    })), _el$8) ];
                });
            }
        };
    });
}();