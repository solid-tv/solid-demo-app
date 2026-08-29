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
    System.register([ "./render-legacy-DZhvr1vn.js", "./mergeProps-legacy-D9f-R3Ah.js", "./chainFunctions-legacy-Can9TFo8.js", "./Column-legacy-Bb-rsg2O.js", "./Row-legacy-DtskkliG.js" ], function(_export, _context) {
        "use strict";
        var createMemo, onCleanup, hasFocus, createRenderEffect, createEffect, createComponent, untrack, Index, scheduleTask, createSignal, Dynamic, mergeProps, chainRefs, Column, Row;
        function createLazy(component, props, keyHandler) {
            var _createSignal = createSignal(props.sync ? props.upCount : 0), _createSignal2 = _slicedToArray(_createSignal, 2), offset = _createSignal2[0], setOffset = _createSignal2[1];
            var preloadTimer = null;
            var navDelayTimer = null;
            var disposed = false;
            var viewRef;
            var itemLength = 0;
            onCleanup(function() {
                disposed = true;
                if (preloadTimer) clearTimeout(preloadTimer);
                if (navDelayTimer) clearTimeout(navDelayTimer);
            });
            var buffer = createMemo(function() {
                var _props$style;
                if (typeof props.buffer === "number") return props.buffer;
                var scroll = props.scroll || ((_props$style = props.style) == null ? void 0 : _props$style.scroll);
                if (!scroll || scroll === "auto" || scroll === "always" || scroll === "bounded") return props.upCount + 1;
                if (scroll === "center") return Math.ceil(props.upCount / 2) + 1;
                return 2;
            });
            createRenderEffect(function() {
                return setOffset(function(offset) {
                    return Math.max(offset, (props.selected || 0) + buffer());
                });
            });
            if (!props.sync || props.eagerLoad) createEffect(function() {
                if (!props.each) return;
                if (preloadTimer) {
                    clearTimeout(preloadTimer);
                    preloadTimer = null;
                }
                var _loadItems = function loadItems() {
                    if (disposed) return;
                    var count = untrack(offset);
                    if (count < props.upCount) {
                        setOffset(count + 1);
                        preloadTimer = setTimeout(_loadItems, 16);
                    } else if (props.eagerLoad) {
                        var maxOffset = props.each ? props.each.length : 0;
                        if (count >= maxOffset) return;
                        setOffset(function(prev) {
                            return Math.min(prev + 1, maxOffset);
                        });
                        scheduleTask(_loadItems);
                    }
                };
                _loadItems();
            });
            createEffect(function() {
                if (!Array.isArray(props.each)) {
                    itemLength = 0;
                    return;
                }
                var len = props.each.length;
                if (itemLength !== len) {
                    itemLength = len;
                    if (viewRef && !viewRef.noRefocus && hasFocus(viewRef)) {
                        if (typeof viewRef.selected === "number" && viewRef.selected >= len) viewRef.selected = Math.max(0, len - 1);
                        viewRef.setFocus();
                    }
                }
            });
            var items = createMemo(function() {
                return Array.isArray(props.each) ? props.each.slice(0, offset()) : [];
            });
            function lazyScrollToIndex(index, options) {
                setOffset(Math.max(index, 0) + buffer());
                queueMicrotask(function() {
                    return viewRef.scrollToIndex(index, options);
                });
            }
            var updateOffset = function updateOffset(_event, container) {
                var maxOffset = props.each ? props.each.length : 0;
                var selected = container.selected || 0;
                var rendered = container.children.length;
                if (offset() >= maxOffset || selected < rendered - buffer()) return;
                var bump = function bump() {
                    return setOffset(function(prev) {
                        return Math.min(prev + 1, maxOffset);
                    });
                };
                if (!props.delay) {
                    bump();
                    return;
                }
                if (navDelayTimer) {
                    clearTimeout(navDelayTimer);
                    bump();
                }
                navDelayTimer = setTimeout(function() {
                    bump();
                    navDelayTimer = null;
                }, props.delay);
            };
            var handler = keyHandler(updateOffset);
            return createComponent(Dynamic, mergeProps(props, {
                component: component
            }, handler, {
                lazyScrollToIndex: lazyScrollToIndex,
                ref: function ref(r$) {
                    var _ref$ = chainRefs(function(el) {
                        viewRef = el;
                    }, props.ref);
                    typeof _ref$ === "function" && _ref$(r$);
                },
                get children() {
                    return createComponent(Index, {
                        get each() {
                            return items();
                        },
                        get children() {
                            return props.children;
                        }
                    });
                }
            }));
        }
        function LazyRow(props) {
            return createLazy(Row, props, function(updateOffset) {
                return {
                    onRight: updateOffset
                };
            });
        }
        function LazyColumn(props) {
            return createLazy(Column, props, function(updateOffset) {
                return {
                    onDown: updateOffset
                };
            });
        }
        _export({
            n: LazyRow,
            t: LazyColumn
        });
        return {
            setters: [ function(_renderLegacy001Js) {
                createMemo = _renderLegacy001Js.H;
                onCleanup = _renderLegacy001Js.Q;
                hasFocus = _renderLegacy001Js.S;
                createRenderEffect = _renderLegacy001Js.U;
                createEffect = _renderLegacy001Js.V;
                createComponent = _renderLegacy001Js.i;
                untrack = _renderLegacy001Js.it;
                Index = _renderLegacy001Js.j;
                scheduleTask = _renderLegacy001Js.p;
                createSignal = _renderLegacy001Js.q;
                Dynamic = _renderLegacy001Js.t;
            }, function(_mergePropsLegacy003Js) {
                mergeProps = _mergePropsLegacy003Js.t;
            }, function(_chainFunctionsLegacy007Js) {
                chainRefs = _chainFunctionsLegacy007Js.n;
            }, function(_ColumnLegacy008Js) {
                Column = _ColumnLegacy008Js.t;
            }, function(_RowLegacy009Js) {
                Row = _RowLegacy009Js.t;
            } ],
            execute: function execute() {}
        };
    });
})();