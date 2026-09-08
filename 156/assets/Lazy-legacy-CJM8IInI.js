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
    System.register([ "./render-legacy-t4wUAioc.js", "./chainFunctions-legacy-iSOIOqjU.js", "./Column-legacy-IFAmq0kZ.js", "./Row-legacy-C4R_D95v.js" ], function(_export, _context) {
        var onCleanup, hasFocus, createEffect, createSignal, Index, createMemo, createRenderEffect, untrack, mergeProps, createComponent, scheduleTask, Dynamic, chainRefs, Column, Row;
        function createLazy(component, props, keyHandler) {
            var viewRef, _createSignal2 = _slicedToArray(createSignal(props.sync ? props.upCount : 0), 2), offset = _createSignal2[0], setOffset = _createSignal2[1], preloadTimer = null, navDelayTimer = null, disposed = !1, itemLength = 0;
            onCleanup(function() {
                disposed = !0, preloadTimer && clearTimeout(preloadTimer), navDelayTimer && clearTimeout(navDelayTimer);
            });
            var buffer = createMemo(function() {
                var _props$style;
                if ("number" == typeof props.buffer) return props.buffer;
                var scroll = props.scroll || (null == (_props$style = props.style) ? void 0 : _props$style.scroll);
                return scroll && "auto" !== scroll && "always" !== scroll && "bounded" !== scroll ? "center" === scroll ? Math.ceil(props.upCount / 2) + 1 : 2 : props.upCount + 1;
            });
            createRenderEffect(function() {
                return setOffset(function(offset) {
                    return Math.max(offset, (props.selected || 0) + buffer());
                });
            }), props.sync && !props.eagerLoad || createEffect(function() {
                if (props.each) {
                    preloadTimer && (clearTimeout(preloadTimer), preloadTimer = null);
                    var _loadItems = function() {
                        if (!disposed) {
                            var count = untrack(offset);
                            if (count < props.upCount) setOffset(count + 1), preloadTimer = setTimeout(_loadItems, 16); else if (props.eagerLoad) {
                                var maxOffset = props.each ? props.each.length : 0;
                                if (count >= maxOffset) return;
                                setOffset(function(prev) {
                                    return Math.min(prev + 1, maxOffset);
                                }), scheduleTask(_loadItems);
                            }
                        }
                    };
                    _loadItems();
                }
            }), createEffect(function() {
                if (Array.isArray(props.each)) {
                    var len = props.each.length;
                    itemLength !== len && (itemLength = len, viewRef && !viewRef.noRefocus && hasFocus(viewRef) && ("number" == typeof viewRef.selected && viewRef.selected >= len && (viewRef.selected = Math.max(0, len - 1)), 
                    viewRef.setFocus()));
                } else itemLength = 0;
            });
            var items = createMemo(function() {
                return Array.isArray(props.each) ? props.each.slice(0, offset()) : [];
            });
            var handler = keyHandler(function(_event, container) {
                var maxOffset = props.each ? props.each.length : 0, selected = container.selected || 0, rendered = container.children.length;
                if (!(offset() >= maxOffset || selected < rendered - buffer())) {
                    var bump = function() {
                        return setOffset(function(prev) {
                            return Math.min(prev + 1, maxOffset);
                        });
                    };
                    props.delay ? (navDelayTimer && (clearTimeout(navDelayTimer), bump()), navDelayTimer = setTimeout(function() {
                        bump(), navDelayTimer = null;
                    }, props.delay)) : bump();
                }
            });
            return createComponent(Dynamic, mergeProps(props, {
                component: component
            }, handler, {
                lazyScrollToIndex: function(index, options) {
                    setOffset(Math.max(index, 0) + buffer()), queueMicrotask(function() {
                        return viewRef.scrollToIndex(index, options);
                    });
                },
                ref: function(r$) {
                    var _ref$ = chainRefs(function(el) {
                        viewRef = el;
                    }, props.ref);
                    "function" == typeof _ref$ && _ref$(r$);
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
        return _export({
            n: function(props) {
                return createLazy(Row, props, function(updateOffset) {
                    return {
                        onRight: updateOffset
                    };
                });
            },
            t: function(props) {
                return createLazy(Column, props, function(updateOffset) {
                    return {
                        onDown: updateOffset
                    };
                });
            }
        }), {
            setters: [ function(_renderLegacy002Js) {
                onCleanup = _renderLegacy002Js.$, hasFocus = _renderLegacy002Js.C, createEffect = _renderLegacy002Js.H, 
                createSignal = _renderLegacy002Js.J, Index = _renderLegacy002Js.M, createMemo = _renderLegacy002Js.U, 
                createRenderEffect = _renderLegacy002Js.W, untrack = _renderLegacy002Js.at, mergeProps = _renderLegacy002Js.f, 
                createComponent = _renderLegacy002Js.i, scheduleTask = _renderLegacy002Js.m, Dynamic = _renderLegacy002Js.t;
            }, function(_chainFunctionsLegacy008Js) {
                chainRefs = _chainFunctionsLegacy008Js.n;
            }, function(_ColumnLegacy009Js) {
                Column = _ColumnLegacy009Js.t;
            }, function(_RowLegacy00aJs) {
                Row = _RowLegacy00aJs.t;
            } ],
            execute: function() {}
        };
    });
}();