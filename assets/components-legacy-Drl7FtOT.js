!function() {
    function _typeof(o) {
        return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
            return typeof o;
        } : function(o) {
            return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
        }, _typeof(o);
    }
    function ownKeys(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var o = Object.getOwnPropertySymbols(e);
            r && (o = o.filter(function(r) {
                return Object.getOwnPropertyDescriptor(e, r).enumerable;
            })), t.push.apply(t, o);
        }
        return t;
    }
    function _objectSpread(e) {
        for (var r = 1; r < arguments.length; r++) {
            var t = null != arguments[r] ? arguments[r] : {};
            r % 2 ? ownKeys(Object(t), !0).forEach(function(r) {
                _defineProperty(e, r, t[r]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r) {
                Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
            });
        }
        return e;
    }
    function _defineProperty(e, r, t) {
        return (r = function(t) {
            var i = function(t, r) {
                if ("object" != _typeof(t) || !t) return t;
                var e = t[Symbol.toPrimitive];
                if (void 0 !== e) {
                    var i = e.call(t, r || "default");
                    if ("object" != _typeof(i)) return i;
                    throw new TypeError("@@toPrimitive must return a primitive value.");
                }
                return ("string" === r ? String : Number)(t);
            }(t, "string");
            return "symbol" == _typeof(i) ? i : i + "";
        }(r)) in e ? Object.defineProperty(e, r, {
            value: t,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[r] = t, e;
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
    System.register([ "./render-legacy-1jX59Y6X.js", "./utils-legacy-Dtp5ElZ_.js", "./mergeProps-legacy-8amjdkoE.js", "./chainFunctions-legacy-Bpapim5k.js", "./Column-legacy-B6ilkF_Y.js", "./Row-legacy-G2xS-YZ8.js", "./styles-legacy--qMSUlWV.js" ], function(_export, _context) {
        var Config, createRoot, createMemo, batch, Show, onCleanup, hasFocus, createEffect, on, ElementNode, createElement, effect, use, spread, createComponent, untrack, Index, $TRACK, insert, setProp, createSignal, Dynamic, insertNode, mod, combineStyles, clamp, mergeProps, defaultTransitionForward, navigableForwardFocus, defaultTransitionUp, chainRefs, defaultTransitionBack, defaultTransitionDown, chainFunctions, handleNavigation, Column, Row, buttonStyles, styles_default, SHOW_TEXT, DISPLAY_SIZE, POSTER_SCALE, scaled, heroTransition, titleRowStyles, posterStyles, posterTitleStyles, heroStyles, heroTextStyles, typeToComponent, BlockStyle;
        function disposeList(list) {
            for (var i = 0; i < list.length; i++) {
                var _list$i;
                null == (_list$i = list[i]) || _list$i.disposer();
            }
        }
        function listArray(list, mapFn) {
            var unusedItems, i, j, item, oldValue, oldIndex, newValue, fallback, fallbackDisposer, options = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, items = [], mapped = [];
            return onCleanup(function() {
                null == fallbackDisposer || fallbackDisposer(), fallbackDisposer = void 0, disposeList(items);
            }), function() {
                var newItems = list() || [];
                return newItems[$TRACK], untrack(function() {
                    newItems.length > 0 && fallbackDisposer && (fallbackDisposer(), fallbackDisposer = void 0, 
                    fallback = void 0);
                    var temp = new Array(newItems.length);
                    for (unusedItems = items.length, j = unusedItems - 1; j >= 0; --j) item = items[j], 
                    (oldIndex = item.index) < newItems.length && newItems[oldIndex] === item.value && (temp[oldIndex] = mapped[oldIndex], 
                    --unusedItems !== j && (items[j] = items[unusedItems], items[unusedItems] = item));
                    var matcher = new Map, matchedItems = new Uint8Array(unusedItems);
                    for (j = unusedItems - 1; j >= 0; --j) {
                        var _matcher$get$push, _matcher$get;
                        oldValue = items[j].value, null !== (_matcher$get$push = null == (_matcher$get = matcher.get(oldValue)) ? void 0 : _matcher$get.push(j)) && void 0 !== _matcher$get$push || matcher.set(oldValue, [ j ]);
                    }
                    for (i = 0; i < newItems.length; ++i) {
                        var _matcher$get$pop, _matcher$get2, _item$indexSetter;
                        if (!(i in temp)) if (newValue = newItems[i], (j = null !== (_matcher$get$pop = null == (_matcher$get2 = matcher.get(newValue)) ? void 0 : _matcher$get2.pop()) && void 0 !== _matcher$get$pop ? _matcher$get$pop : -1) >= 0) item = items[j], 
                        oldIndex = item.index, temp[i] = mapped[oldIndex], item.index = i, null == (_item$indexSetter = item.indexSetter) || _item$indexSetter.call(item, i), 
                        matchedItems[j] = 1;
                    }
                    for (j = matchedItems.length - 1; j >= 0; --j) matchedItems[j] && --unusedItems !== j && (item = items[j], 
                    items[j] = items[unusedItems], items[unusedItems] = item);
                    for (j = unusedItems - 1; j >= 0; --j) {
                        var _item$valueSetter;
                        if (item = items[j], !((oldIndex = item.index) in temp) && oldIndex < newItems.length) temp[oldIndex] = mapped[oldIndex], 
                        newValue = newItems[oldIndex], item.value = newValue, null == (_item$valueSetter = item.valueSetter) || _item$valueSetter.call(item, newValueGetter), 
                        --unusedItems !== j && (items[j] = items[unusedItems], items[unusedItems] = item);
                    }
                    for (i = 0; i < newItems.length; ++i) i in temp || (newValue = newItems[i], unusedItems > 0 ? (item = items[--unusedItems], 
                    temp[i] = mapped[item.index], batch(changeBoth)) : temp[i] = createRoot(mapper));
                    return disposeList(items.splice(0, unusedItems)), 0 === newItems.length && options.fallback ? (fallbackDisposer || (fallback = [ createRoot(function(d) {
                        return fallbackDisposer = d, options.fallback();
                    }) ]), fallback) : mapped = temp;
                });
            };
            function newValueGetter() {
                return newValue;
            }
            function changeBoth() {
                var _item$indexSetter2, _item$valueSetter2;
                item.index = i, null == (_item$indexSetter2 = item.indexSetter) || _item$indexSetter2.call(item, i), 
                item.value = newValue, null == (_item$valueSetter2 = item.valueSetter) || _item$valueSetter2.call(item, newValueGetter);
            }
            function mapper(disposer) {
                var t = {
                    value: newValue,
                    index: i,
                    disposer: disposer
                };
                items.push(t);
                var _sV = function() {
                    var _ref3 = _slicedToArray(createSignal(t.value), 2);
                    return _sV = _ref3[0], t.valueSetter = _ref3[1], _sV();
                }, _sI = function() {
                    var _ref5 = _slicedToArray(createSignal(t.index), 2);
                    return _sI = _ref5[0], t.indexSetter = _ref5[1], _sI();
                };
                return mapFn(function() {
                    return _sV();
                }, function() {
                    return _sI();
                });
            }
        }
        function List(props) {
            var fallback = "fallback" in props && {
                fallback: function() {
                    return props.fallback;
                }
            };
            return createMemo(listArray(function() {
                return props.each;
            }, props.children, fallback || void 0));
        }
        function createVirtual(component, props, keyHandlers) {
            var _props$selected, _props$selected2, cachedScaledSize, targetPosition, cachedAnimationController, viewRef, isRow = component === Row, axis = isRow ? "x" : "y", _createSignal2 = _slicedToArray(createSignal(null !== (_props$selected = props.selected) && void 0 !== _props$selected ? _props$selected : 0), 2), cursor = _createSignal2[0], setCursor = _createSignal2[1], bufferSize = createMemo(function() {
                return props.bufferSize || 2;
            }), scrollIndex = createMemo(function() {
                return props.scrollIndex || 0;
            }), items = createMemo(function() {
                return props.each || [];
            }), itemCount = createMemo(function() {
                return items().length;
            }), scrollType = createMemo(function() {
                return props.scroll || "auto";
            }), initiallyLocked = !!props.skipInitialWrap && !!props.wrap && 0 === (null !== (_props$selected2 = props.selected) && void 0 !== _props$selected2 ? _props$selected2 : 0), _createSignal4 = _slicedToArray(createSignal(!initiallyLocked), 2), wrapUnlocked = _createSignal4[0], setWrapUnlocked = _createSignal4[1], effectiveWrap = createMemo(function() {
                return !!props.wrap && wrapUnlocked();
            }), uniformSize = createMemo(function() {
                return !1 !== props.uniformSize;
            }), _createSignal6 = _slicedToArray(createSignal({
                start: 0,
                slice: [],
                selected: 0,
                delta: 0,
                shiftBy: 0,
                atStart: !0,
                cursor: 0
            }), 2), slice = _createSignal6[0], setSlice = _createSignal6[1];
            function computeSize() {
                var selected = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                if (uniformSize() && cachedScaledSize) return cachedScaledSize;
                if (viewRef) {
                    var gap = viewRef.gap || 0, dimension = isRow ? "width" : "height", prevSelectedChild = viewRef.children[selected];
                    if (prevSelectedChild instanceof ElementNode) {
                        var _prevSelectedChild$st, _ref, _focusStyle$scale, itemSize = prevSelectedChild[dimension] || 0, focusStyle = null == (_prevSelectedChild$st = prevSelectedChild.style) ? void 0 : _prevSelectedChild$st.focus, scale = null !== (_ref = null !== (_focusStyle$scale = null == focusStyle ? void 0 : focusStyle.scale) && void 0 !== _focusStyle$scale ? _focusStyle$scale : prevSelectedChild.scale) && void 0 !== _ref ? _ref : 1, scaledSize = itemSize * (props.factorScale ? scale : 1) + gap;
                        return cachedScaledSize = scaledSize, scaledSize;
                    }
                }
                return 0;
            }
            function computeSlice(c, delta, prev) {
                var total = itemCount();
                if (0 === total) return {
                    start: 0,
                    slice: [],
                    selected: 0,
                    delta: delta,
                    shiftBy: 0,
                    atStart: !0,
                    cursor: 0
                };
                if (total <= props.displaySize) return {
                    start: 0,
                    slice: items(),
                    selected: clamp(c, 0, total - 1),
                    delta: delta,
                    shiftBy: 0,
                    atStart: c <= 0,
                    cursor: clamp(c, 0, total - 1)
                };
                var length = props.displaySize + bufferSize(), start = prev.start, selected = prev.selected, atStart = prev.atStart, shiftBy = -delta;
                switch (scrollType()) {
                  case "always":
                    effectiveWrap() ? (start = mod(c - 1, total), selected = 1) : (start = clamp(c - bufferSize(), 0, Math.max(0, total - props.displaySize - bufferSize())), 
                    0 === delta && c > 3 ? (shiftBy = c < 3 ? -c : -2, selected = 2) : selected = c < bufferSize() ? c : c >= total - props.displaySize ? c - (total - props.displaySize) + bufferSize() : bufferSize());
                    break;

                  case "auto":
                    effectiveWrap() ? 0 === delta ? (selected = scrollIndex() || 1, start = mod(c - (scrollIndex() || 1), total)) : start = mod(c - (prev.selected || 1), total) : delta < 0 ? prev.start > 0 && prev.selected >= props.displaySize ? (start = prev.start, 
                    selected = prev.selected - 1) : prev.start > 0 ? (start = prev.start - 1, selected = prev.selected) : 0 !== prev.start || prev.atStart ? selected >= props.displaySize - 1 ? (start = 0, 
                    selected = prev.selected - 1) : (start = 0, selected = prev.selected - 1, shiftBy = 0) : (start = 0, 
                    selected = prev.selected - 1, atStart = !0) : delta > 0 ? prev.selected < scrollIndex() ? (start = prev.start, 
                    selected = prev.selected + 1, shiftBy = 0) : prev.selected === scrollIndex() || atStart ? (start = prev.start, 
                    selected = prev.selected + 1, atStart = !1) : 0 === prev.start && 0 === prev.selected ? (start = 0, 
                    selected = 1, atStart = !1) : prev.start >= total - props.displaySize ? (selected = c - (start = prev.start), 
                    shiftBy = 0) : (start = prev.start + 1, selected = Math.max(prev.selected, scrollIndex() + 1)) : c > 0 ? (start = Math.min(c - (scrollIndex() || 1), total - props.displaySize - bufferSize()), 
                    selected = Math.max(scrollIndex() || 1, c - start), shiftBy = total - c < 3 ? c - total : -1, 
                    atStart = !1) : c !== prev.cursor ? (start = c, 0 === c && (atStart = !0, selected = 0)) : (start = prev.start, 
                    selected = prev.selected);
                    break;

                  case "edge":
                    var startScrolling = Math.max(1, props.displaySize + (atStart ? -1 : 0));
                    effectiveWrap() ? delta > 0 ? prev.selected < startScrolling ? (selected = prev.selected + 1, 
                    shiftBy = 0) : prev.selected === startScrolling && atStart ? (selected = prev.selected + 1, 
                    atStart = !1) : (start = mod(prev.start + 1, total), selected = prev.selected) : delta < 0 ? prev.selected > 1 ? (selected = prev.selected - 1, 
                    shiftBy = 0) : (start = mod(prev.start - 1, total), selected = 1) : (start = mod(c - 1, total), 
                    selected = 1, shiftBy = -1, atStart = !1) : 0 === delta && c > 0 ? (selected = c > startScrolling ? startScrolling : c, 
                    start = Math.max(0, c - startScrolling + 1), shiftBy = c > startScrolling ? -1 : 0, 
                    atStart = c < startScrolling) : delta > 0 ? prev.selected < startScrolling ? (selected = prev.selected + 1, 
                    shiftBy = 0) : prev.selected === startScrolling && atStart ? (selected = prev.selected + 1, 
                    atStart = !1) : (start = prev.start + 1, selected = prev.selected, atStart = !1) : delta < 0 && (prev.selected > 1 ? (selected = prev.selected - 1, 
                    shiftBy = 0) : c > 1 ? (start = Math.max(0, c - 1), selected = 1) : 1 === c ? (start = 0, 
                    selected = 1) : (start = 0, selected = 0, shiftBy = atStart ? 0 : shiftBy, atStart = !0));
                    break;

                  default:
                    start = 0, selected = c, shiftBy = 0;
                }
                var newSlice = prev.slice;
                start === prev.start && 0 !== newSlice.length || (newSlice = effectiveWrap() ? Array.from({
                    length: length
                }, function(_, i) {
                    return items()[mod(start + i, total)];
                }) : items().slice(start, start + length));
                var state = {
                    start: start,
                    slice: newSlice,
                    selected: selected,
                    delta: delta,
                    shiftBy: shiftBy,
                    atStart: atStart,
                    cursor: c
                };
                return props.debugInfo && console.log("[Virtual]", {
                    cursor: c,
                    delta: delta,
                    start: start,
                    selected: selected,
                    shiftBy: shiftBy,
                    slice: state.slice
                }), state;
            }
            function scrollToIndex(index) {
                untrack(function() {
                    0 !== itemCount() && (lastNavTime = performance.now(), void 0 !== originalPosition && (viewRef.lng[axis] = originalPosition, 
                    targetPosition = originalPosition), hasFocus(viewRef) || viewRef.setFocus(), updateSelected([ clamp(index, 0, itemCount() - 1) ]));
                });
            }
            var originalPosition, lastNavTime = 0;
            function getAdaptiveDuration() {
                var duration = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 250, now = performance.now(), delta = now - lastNavTime;
                return lastNavTime = now, delta < duration ? delta : duration;
            }
            var _el$, _ref$, onSelectedChanged = function(_idx, elm, _active, _lastIdx) {
                var _originalPosition, _elm$children$length, _elm$children, _targetPosition, _this = this, idx = _idx, lastIdx = _lastIdx || 0, active = _active, noChange = idx === lastIdx, total = itemCount();
                if (originalPosition = null !== (_originalPosition = originalPosition) && void 0 !== _originalPosition ? _originalPosition : elm[axis], 
                props.onSelectedChanged && props.onSelectedChanged.call(this, idx, this, active, lastIdx), 
                !noChange) {
                    var rawDelta = idx - (null != lastIdx ? lastIdx : 0), windowLen = null !== (_elm$children$length = null == elm || null == (_elm$children = elm.children) ? void 0 : _elm$children.length) && void 0 !== _elm$children$length ? _elm$children$length : props.displaySize + bufferSize(), delta = effectiveWrap() ? function(delta, windowLen) {
                        if (!windowLen) return 0;
                        var half = windowLen / 2;
                        return delta > half ? delta - windowLen : delta < -half ? delta + windowLen : delta;
                    }(rawDelta, windowLen) : rawDelta;
                    setCursor(function(c) {
                        var next = c + delta;
                        return effectiveWrap() ? mod(next, total) : clamp(next, 0, total - 1);
                    });
                    var _props$onEndReached, newState = computeSlice(cursor(), delta, slice());
                    if (setSlice(newState), elm.selected = newState.selected, !wrapUnlocked() && rawDelta > 0 && setWrapUnlocked(!0), 
                    void 0 !== props.onEndReachedThreshold && cursor() >= itemCount() - props.onEndReachedThreshold) null == (_props$onEndReached = props.onEndReached) || _props$onEndReached.call(props);
                    if (0 !== newState.shiftBy) {
                        var prevChildPos = (null !== (_targetPosition = targetPosition) && void 0 !== _targetPosition ? _targetPosition : this[axis]) + active[axis];
                        queueMicrotask(function() {
                            elm.updateLayout();
                            var _this$animationSettin, childSize = computeSize(slice().selected);
                            (cachedAnimationController && "running" === cachedAnimationController.state && cachedAnimationController.stop(), 
                            Config.animationsEnabled) ? (_this.lng[axis] = prevChildPos - active[axis], targetPosition = _this.lng[axis] + childSize * slice().shiftBy, 
                            cachedAnimationController = _this.animate(_defineProperty({}, axis, targetPosition), _objectSpread(_objectSpread({}, _this.animationSettings), {}, {
                                duration: getAdaptiveDuration(null == (_this$animationSettin = _this.animationSettings) ? void 0 : _this$animationSettin.duration)
                            })).start()) : _this.lng[axis] = prevChildPos - active[axis] + childSize * slice().shiftBy;
                        });
                    }
                }
            }, updateSelected = function(_ref6) {
                var _ref7 = _slicedToArray(_ref6, 2), sel = _ref7[0];
                _ref7[1];
                if (viewRef && void 0 !== sel && 0 !== itemCount()) {
                    var safeSel = clamp(sel, 0, itemCount() - 1), item = items()[safeSel];
                    setCursor(safeSel);
                    var newState = computeSlice(safeSel, 0, slice());
                    setSlice(newState), queueMicrotask(function() {
                        var _originalPosition2, _targetPosition2;
                        viewRef.updateLayout();
                        var activeIndex = viewRef.children.findIndex(function(x) {
                            return x.item === item;
                        });
                        if (-1 !== activeIndex) {
                            var _viewRef$children$act;
                            if (viewRef.selected = activeIndex, hasFocus(viewRef)) null == (_viewRef$children$act = viewRef.children[activeIndex]) || _viewRef$children$act.setFocus();
                            if (0 !== newState.shiftBy) {
                                var childSize = computeSize(slice().selected);
                                originalPosition = null !== (_originalPosition2 = originalPosition) && void 0 !== _originalPosition2 ? _originalPosition2 : viewRef.lng[axis], 
                                targetPosition = null !== (_targetPosition2 = targetPosition) && void 0 !== _targetPosition2 ? _targetPosition2 : viewRef.lng[axis], 
                                viewRef.lng[axis] = (viewRef.lng[axis] || 0) + -1 * childSize;
                            }
                        }
                    });
                }
            }, doOnce = initiallyLocked;
            return createEffect(on([ effectiveWrap, items ], function() {
                viewRef && 0 !== itemCount() && effectiveWrap() && !doOnce && (doOnce = !0, itemCount() <= props.displaySize ? queueMicrotask(function() {
                    originalPosition = viewRef.lng[axis], targetPosition = viewRef.lng[axis];
                }) : queueMicrotask(function() {
                    var childSize = computeSize(slice().selected);
                    viewRef.lng[axis] = (viewRef.lng[axis] || 0) + -1 * childSize, originalPosition = viewRef.lng[axis], 
                    targetPosition = viewRef.lng[axis];
                }));
            })), createEffect(on([ function() {
                return props.selected;
            }, items ], updateSelected)), createEffect(on(items, function() {
                if (viewRef) {
                    var c = cursor();
                    c >= itemCount() && (c = Math.max(0, itemCount() - 1), setCursor(c));
                    var newState = computeSlice(c, 0, slice());
                    setSlice(newState), viewRef.selected = newState.selected;
                }
            })), _el$ = createElement("view"), "function" == typeof (_ref$ = chainRefs(function(el) {
                viewRef = el;
            }, props.ref)) && use(_ref$, _el$), setProp(_el$, "transitionLeft", isRow ? defaultTransitionBack : void 0), 
            setProp(_el$, "transitionRight", isRow ? defaultTransitionForward : void 0), setProp(_el$, "transitionUp", isRow ? void 0 : defaultTransitionUp), 
            setProp(_el$, "transitionDown", isRow ? void 0 : defaultTransitionDown), spread(_el$, mergeProps(props, keyHandlers, {
                get wrap() {
                    return effectiveWrap();
                },
                get selected() {
                    return itemCount() <= props.displaySize ? clamp(props.selected || 0, 0, Math.max(0, itemCount() - 1)) : props.wrap && !initiallyLocked ? Math.max(bufferSize(), scrollIndex()) : clamp(props.selected || 0, 0, Math.max(0, itemCount() - 1));
                },
                get cursor() {
                    return cursor();
                },
                forwardFocus: navigableForwardFocus,
                scrollToIndex: scrollToIndex,
                onSelectedChanged: onSelectedChanged,
                style: combineStyles(props.style, component === Row ? {
                    display: "flex",
                    gap: 30
                } : {
                    display: "flex",
                    flexDirection: "column",
                    gap: 30
                })
            }), !0), insert(_el$, createComponent(List, {
                get each() {
                    return slice().slice;
                },
                get children() {
                    return props.children;
                }
            })), _el$;
        }
        function VirtualRow(props) {
            return createVirtual(Row, props, {
                onLeft: chainFunctions(props.onLeft, handleNavigation("left")),
                onRight: chainFunctions(props.onRight, handleNavigation("right"))
            });
        }
        function Thumbnail(props) {
            return _el$ = createElement("view"), spread(_el$, mergeProps(props, {
                id: "thumbnail",
                get src() {
                    return props.item.src;
                },
                placeholder: "./assets/fallback.png",
                get item() {
                    return props.item;
                },
                get announce() {
                    return [ props.item.title, "PAUSE-1", props.item.overview ];
                },
                get style() {
                    return styles_default.Thumbnail;
                }
            }), !1), _el$;
            var _el$;
        }
        function Button(props) {
            return _el$3 = createElement("view"), _el$4 = createElement("text"), insertNode(_el$3, _el$4), 
            spread(_el$3, mergeProps(props, {
                get announce() {
                    return [ props.children, "button" ];
                },
                forwardStates: !0,
                get style() {
                    return buttonStyles.container;
                }
            }), !0), insert(_el$4, function() {
                return props.children || props.title;
            }), effect(function(_$p) {
                return setProp(_el$4, "style", buttonStyles.text, _$p);
            }), _el$3;
            var _el$3, _el$4;
        }
        function Poster(props) {
            return _el$9 = createElement("view"), setProp(_el$9, "onFail", function(node) {
                return node.src = "./assets/fallback.png";
            }), setProp(_el$9, "style", posterStyles), effect(function(_p$) {
                var _props$src, _props$item2, _props$title2, _props$item3, _props$backdrop, _props$item4, _v$3 = props.x, _v$4 = props.alpha, _v$5 = props.transition, _v$6 = props.item, _v$7 = props.index, _v$8 = props.group, _v$9 = null !== (_props$src = props.src) && void 0 !== _props$src ? _props$src : null == (_props$item2 = props.item) ? void 0 : _props$item2.src, _v$0 = null !== (_props$title2 = props.title) && void 0 !== _props$title2 ? _props$title2 : null == (_props$item3 = props.item) ? void 0 : _props$item3.shortTitle, _v$1 = null !== (_props$backdrop = props.backdrop) && void 0 !== _props$backdrop ? _props$backdrop : null == (_props$item4 = props.item) ? void 0 : _props$item4.backdrop;
                return _v$3 !== _p$.e && (_p$.e = setProp(_el$9, "x", _v$3, _p$.e)), _v$4 !== _p$.t && (_p$.t = setProp(_el$9, "alpha", _v$4, _p$.t)), 
                _v$5 !== _p$.a && (_p$.a = setProp(_el$9, "transition", _v$5, _p$.a)), _v$6 !== _p$.o && (_p$.o = setProp(_el$9, "item", _v$6, _p$.o)), 
                _v$7 !== _p$.i && (_p$.i = setProp(_el$9, "index", _v$7, _p$.i)), _v$8 !== _p$.n && (_p$.n = setProp(_el$9, "group", _v$8, _p$.n)), 
                _v$9 !== _p$.s && (_p$.s = setProp(_el$9, "src", _v$9, _p$.s)), _v$0 !== _p$.h && (_p$.h = setProp(_el$9, "title", _v$0, _p$.h)), 
                _v$1 !== _p$.r && (_p$.r = setProp(_el$9, "backdrop", _v$1, _p$.r)), _p$;
            }, {
                e: void 0,
                t: void 0,
                a: void 0,
                o: void 0,
                i: void 0,
                n: void 0,
                s: void 0,
                h: void 0,
                r: void 0
            }), _el$9;
            var _el$9;
        }
        function PosterTitle(props) {
            return _el$0 = createElement("view"), setProp(_el$0, "onFail", function(node) {
                return node.src = "./assets/fallback.png";
            }), setProp(_el$0, "style", posterStyles), setProp(_el$0, "forwardStates", !0), 
            insert(_el$0, createComponent(Show, {
                when: SHOW_TEXT,
                get children() {
                    var _el$1 = createElement("text");
                    return setProp(_el$1, "style", posterTitleStyles), insert(_el$1, function() {
                        var _props$item5;
                        return null == (_props$item5 = props.item) ? void 0 : _props$item5.title;
                    }), _el$1;
                }
            })), effect(function(_p$) {
                var _props$item6, _props$item7, _v$10 = props.item, _v$11 = props.index, _v$12 = props.group, _v$13 = null == (_props$item6 = props.item) ? void 0 : _props$item6.src, _v$14 = null == (_props$item7 = props.item) ? void 0 : _props$item7.backdrop;
                return _v$10 !== _p$.e && (_p$.e = setProp(_el$0, "item", _v$10, _p$.e)), _v$11 !== _p$.t && (_p$.t = setProp(_el$0, "index", _v$11, _p$.t)), 
                _v$12 !== _p$.a && (_p$.a = setProp(_el$0, "group", _v$12, _p$.a)), _v$13 !== _p$.o && (_p$.o = setProp(_el$0, "src", _v$13, _p$.o)), 
                _v$14 !== _p$.i && (_p$.i = setProp(_el$0, "backdrop", _v$14, _p$.i)), _p$;
            }, {
                e: void 0,
                t: void 0,
                a: void 0,
                o: void 0,
                i: void 0
            }), _el$0;
            var _el$0;
        }
        function Hero(props) {
            var _el$10, _el$11, _el$12, _el$13, _el$14, _createSignal8 = _slicedToArray(createSignal(!1), 2), hasFocus = _createSignal8[0], setHasFocus = _createSignal8[1];
            return _el$10 = createElement("view"), _el$11 = createElement("view"), _el$12 = createElement("view"), 
            _el$13 = createElement("text"), _el$14 = createElement("text"), insertNode(_el$10, _el$11), 
            spread(_el$10, mergeProps(props, {
                get src() {
                    return props.item.backdrop;
                },
                style: heroStyles,
                onFocusChanged: setHasFocus,
                forwardStates: !0
            }), !0), insertNode(_el$11, _el$12), insertNode(_el$11, _el$13), insertNode(_el$11, _el$14), 
            setProp(_el$11, "transition", {
                alpha: heroTransition
            }), setProp(_el$12, "width", 185), setProp(_el$12, "height", 278), setProp(_el$12, "x", 54), 
            setProp(_el$12, "y", 220), setProp(_el$13, "y", 520), setProp(_el$13, "x", 54), 
            setProp(_el$13, "fontSize", 64), setProp(_el$13, "width", 1e3), setProp(_el$13, "maxLines", 1), 
            setProp(_el$13, "style", heroTextStyles), insert(_el$13, function() {
                return props.item.title;
            }), setProp(_el$14, "y", 620), setProp(_el$14, "x", 60), setProp(_el$14, "fontSize", 21), 
            setProp(_el$14, "width", 1e3), setProp(_el$14, "maxLines", 2), setProp(_el$14, "lineHeight", 36), 
            setProp(_el$14, "color", 3435973887), setProp(_el$14, "style", heroTextStyles), 
            insert(_el$14, function() {
                return props.item.overview;
            }), effect(function(_p$) {
                var _v$15 = hasFocus() ? 1 : 0, _v$16 = props.item.src;
                return _v$15 !== _p$.e && (_p$.e = setProp(_el$11, "alpha", _v$15, _p$.e)), _v$16 !== _p$.t && (_p$.t = setProp(_el$12, "src", _v$16, _p$.t)), 
                _p$;
            }, {
                e: void 0,
                t: void 0
            }), _el$10;
        }
        return _export({
            a: Hero,
            d: function(props) {
                var _el$7;
                return _el$7 = createElement("view"), setProp(_el$7, "forwardFocus", 1), insert(_el$7, createComponent(Show, {
                    when: SHOW_TEXT,
                    get children() {
                        var _el$8 = createElement("text");
                        return setProp(_el$8, "skipFocus", !0), setProp(_el$8, "style", titleRowStyles), 
                        insert(_el$8, function() {
                            return props.title;
                        }), _el$8;
                    }
                }), null), insert(_el$7, createComponent(VirtualRow, {
                    get gap() {
                        return scaled(20);
                    },
                    displaySize: DISPLAY_SIZE,
                    bufferSize: 3,
                    get each() {
                        return props.items;
                    },
                    get y() {
                        return scaled(50);
                    },
                    get scroll() {
                        return props.scroll;
                    },
                    get wrap() {
                        return props.wrap;
                    },
                    get selected() {
                        return props.selected;
                    },
                    debugInfo: !0,
                    children: function(item, index) {
                        return createComponent(Dynamic, {
                            get component() {
                                var _props$row;
                                return typeToComponent[props.rowType || (null == (_props$row = props.row) ? void 0 : _props$row.type)];
                            },
                            get index() {
                                return index();
                            },
                            get item() {
                                return item();
                            },
                            get group() {
                                return (null == (_props$title = props.title) ? void 0 : _props$title.toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]+/g, "")) || "row";
                                var _props$title;
                            }
                        });
                    }
                }), null), effect(function(_p$) {
                    var _v$ = void 0 === props.height ? void 0 : scaled(props.height), _v$2 = scaled(30);
                    return _v$ !== _p$.e && (_p$.e = setProp(_el$7, "height", _v$, _p$.e)), _v$2 !== _p$.t && (_p$.t = setProp(_el$7, "marginTop", _v$2, _p$.t)), 
                    _p$;
                }, {
                    e: void 0,
                    t: void 0
                }), _el$7;
            },
            l: Thumbnail,
            n: function(props) {
                return _el$15 = createElement("view"), spread(_el$15, mergeProps(props, {
                    width: 100,
                    height: 100,
                    style: BlockStyle,
                    get color() {
                        return props.color || 3772834047;
                    }
                }), !1), _el$15;
                var _el$15;
            },
            p: List,
            r: Button,
            s: Poster,
            t: function(props) {
                var panelRef, actionRef;
                return createEffect(function() {
                    props.open ? (panelRef.animate({
                        x: 1470
                    }, {
                        duration: 400,
                        easing: "ease-in-out"
                    }).start(), actionRef.setFocus()) : panelRef.rendered && panelRef.animate({
                        x: 1920
                    }, {
                        duration: 400,
                        easing: "ease-in-out"
                    }).start();
                }), function() {
                    var _el$5 = createElement("view"), _el$6 = createElement("text");
                    insertNode(_el$5, _el$6);
                    return "function" == typeof panelRef ? use(panelRef, _el$5) : panelRef = _el$5, 
                    spread(_el$5, mergeProps(props, {
                        x: 1920,
                        color: 255,
                        width: 450,
                        height: 1080,
                        zIndex: 5
                    }), !0), setProp(_el$6, "x", 75), setProp(_el$6, "y", 50), setProp(_el$6, "fontSize", 32), 
                    insert(_el$6, function() {
                        var _props$item;
                        return null == (_props$item = props.item) ? void 0 : _props$item.title;
                    }), insert(_el$5, createComponent(Column, {
                        ref: function(r$) {
                            "function" == typeof actionRef ? actionRef(r$) : actionRef = r$;
                        },
                        get onLeft() {
                            return props.close;
                        },
                        get onBack() {
                            return props.close;
                        },
                        x: 75,
                        y: 200,
                        get children() {
                            return [ createComponent(Button, {
                                get onEnter() {
                                    return props.close;
                                },
                                children: "Record"
                            }), createComponent(Button, {
                                get onEnter() {
                                    return props.close;
                                },
                                children: "Watch"
                            }), createComponent(Button, {
                                get onEnter() {
                                    return props.close;
                                },
                                children: "Close"
                            }) ];
                        }
                    }), null), _el$5;
                }();
            },
            u: function(props) {
                return createComponent(Row, mergeProps(props, {
                    get style() {
                        return styles_default.Row;
                    },
                    get children() {
                        return createComponent(Index, {
                            get each() {
                                return props.items;
                            },
                            children: function(item, index) {
                                return createComponent(Thumbnail, {
                                    get item() {
                                        return item();
                                    },
                                    get announceContext() {
                                        return "".concat(index + 1, " of ").concat(props.items.length);
                                    }
                                });
                            }
                        });
                    }
                }));
            }
        }), {
            setters: [ function(_renderLegacy002Js) {
                Config = _renderLegacy002Js.D, createRoot = _renderLegacy002Js.G, createMemo = _renderLegacy002Js.H, 
                batch = _renderLegacy002Js.I, Show = _renderLegacy002Js.N, onCleanup = _renderLegacy002Js.Q, 
                hasFocus = _renderLegacy002Js.S, createEffect = _renderLegacy002Js.V, on = _renderLegacy002Js.Z, 
                ElementNode = _renderLegacy002Js._, createElement = _renderLegacy002Js.a, effect = _renderLegacy002Js.c, 
                use = _renderLegacy002Js.g, spread = _renderLegacy002Js.h, createComponent = _renderLegacy002Js.i, 
                untrack = _renderLegacy002Js.it, Index = _renderLegacy002Js.j, $TRACK = _renderLegacy002Js.k, 
                insert = _renderLegacy002Js.l, setProp = _renderLegacy002Js.m, createSignal = _renderLegacy002Js.q, 
                Dynamic = _renderLegacy002Js.t, insertNode = _renderLegacy002Js.u;
            }, function(_utilsLegacy004Js) {
                mod = _utilsLegacy004Js.i, combineStyles = _utilsLegacy004Js.n, clamp = _utilsLegacy004Js.t;
            }, function(_mergePropsLegacy005Js) {
                mergeProps = _mergePropsLegacy005Js.t;
            }, function(_chainFunctionsLegacy009Js) {
                defaultTransitionForward = _chainFunctionsLegacy009Js.c, navigableForwardFocus = _chainFunctionsLegacy009Js.d, 
                defaultTransitionUp = _chainFunctionsLegacy009Js.l, chainRefs = _chainFunctionsLegacy009Js.n, 
                defaultTransitionBack = _chainFunctionsLegacy009Js.o, defaultTransitionDown = _chainFunctionsLegacy009Js.s, 
                chainFunctions = _chainFunctionsLegacy009Js.t, handleNavigation = _chainFunctionsLegacy009Js.u;
            }, function(_ColumnLegacy00aJs) {
                Column = _ColumnLegacy00aJs.t;
            }, function(_RowLegacy00bJs) {
                Row = _RowLegacy00bJs.t;
            }, function(_stylesLegacy00iJs) {
                buttonStyles = _stylesLegacy00iJs.n, styles_default = _stylesLegacy00iJs.r;
            } ],
            execute: function() {
                _export("c", SHOW_TEXT = "undefined" == typeof window || "true" !== new URLSearchParams(window.location.search).get("noText")), 
                _export("i", DISPLAY_SIZE = function() {
                    if ("undefined" == typeof window) return 8;
                    var raw = new URLSearchParams(window.location.search).get("displaySize");
                    if (null === raw) return 8;
                    var parsed = parseInt(raw, 10);
                    return isNaN(parsed) || parsed < 1 ? 8 : parsed;
                }()), _export("o", POSTER_SCALE = function() {
                    if ("undefined" == typeof window) return 1;
                    var raw = new URLSearchParams(window.location.search).get("posterScale");
                    if (null === raw) return 1;
                    var parsed = parseFloat(raw);
                    return isNaN(parsed) || parsed <= 0 ? 1 : parsed;
                }()), _export("f", scaled = function(value) {
                    return Math.round(value * POSTER_SCALE);
                }), heroTransition = {
                    duration: 300,
                    easing: "cubic-bezier(0.20, 1.00, 0.80, 1.00)"
                }, titleRowStyles = {
                    fontFamily: "Raleway",
                    fontSize: scaled(24),
                    height: scaled(32),
                    lineHeight: scaled(32)
                }, posterStyles = {
                    width: scaled(185),
                    height: scaled(278),
                    scale: 1,
                    color: 2964369663,
                    placeholderColor: 623654911,
                    borderRadius: 8,
                    transition: {
                        scale: {
                            duration: 200,
                            easing: "linear"
                        }
                    },
                    $focus: {
                        scale: 1.1,
                        color: 4294967295
                    }
                }, posterTitleStyles = {
                    fontFamily: "Raleway",
                    fontSize: scaled(22),
                    lineHeight: scaled(22),
                    height: scaled(22),
                    x: scaled(10),
                    y: scaled(288),
                    contain: "width",
                    width: scaled(185),
                    maxLines: 2,
                    alpha: 1,
                    transition: {
                        y: heroTransition,
                        alpha: heroTransition
                    }
                }, heroStyles = {
                    width: 1280,
                    height: 720,
                    scale: 1,
                    zIndex: 2,
                    colorTop: 4294967295,
                    colorBottom: 255,
                    transition: {
                        scale: heroTransition
                    },
                    $focus: {
                        scale: 1.05
                    }
                }, heroTextStyles = {
                    fontFamily: "Raleway",
                    contain: "width"
                }, typeToComponent = {
                    Poster: Poster,
                    Hero: Hero,
                    PosterTitle: PosterTitle
                }, BlockStyle = {
                    alpha: .85,
                    border: {
                        width: 0,
                        color: 255
                    },
                    $focus: {
                        border: {
                            width: 4,
                            color: 4294967295
                        },
                        alpha: 1
                    }
                };
            }
        };
    });
}();