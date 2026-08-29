(function() {
    function _typeof(o) {
        "@babel/helpers - typeof";
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
        return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
            value: t,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[r] = t, e;
    }
    function _toPropertyKey(t) {
        var i = _toPrimitive(t, "string");
        return "symbol" == _typeof(i) ? i : i + "";
    }
    function _toPrimitive(t, r) {
        if ("object" != _typeof(t) || !t) return t;
        var e = t[Symbol.toPrimitive];
        if (void 0 !== e) {
            var i = e.call(t, r || "default");
            if ("object" != _typeof(i)) return i;
            throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return ("string" === r ? String : Number)(t);
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
    System.register([ "./render-legacy-C75jKPoW.js", "./utils-legacy-k1OK4H3A.js", "./mergeProps-legacy-CDlswesM.js", "./chainFunctions-legacy-BWcoWg5K.js", "./Column-legacy-CcQuWn8X.js", "./Row-legacy-BdsWWaQk.js", "./styles-legacy-BOzjtbic.js" ], function(_export, _context) {
        "use strict";
        var Config, createRoot, createMemo, batch, Show, onCleanup, hasFocus, createEffect, on, ElementNode, createElement, effect, use, spread, createComponent, untrack, Index, $TRACK, insert, setProp, createSignal, Dynamic, insertNode, mod, combineStyles, clamp, mergeProps, defaultTransitionForward, navigableForwardFocus, defaultTransitionUp, chainRefs, defaultTransitionBack, defaultTransitionDown, chainFunctions, handleNavigation, Column, Row, buttonStyles, styles_default, SHOW_TEXT, DISPLAY_SIZE, heroTransition, titleRowStyles, posterStyles, posterTitleStyles, heroStyles, heroTextStyles, typeToComponent, BlockStyle;
        function disposeList(list) {
            for (var i = 0; i < list.length; i++) {
                var _list$i;
                (_list$i = list[i]) == null || _list$i.disposer();
            }
        }
        function listArray(list, mapFn) {
            var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
            var items = [];
            var mapped = [], unusedItems, i, j, item, oldValue, oldIndex, newValue, fallback, fallbackDisposer;
            onCleanup(function() {
                fallbackDisposer == null || fallbackDisposer();
                fallbackDisposer = void 0;
                disposeList(items);
            });
            return function() {
                var newItems = list() || [];
                newItems[$TRACK];
                return untrack(function() {
                    if (newItems.length > 0 && fallbackDisposer) {
                        fallbackDisposer();
                        fallbackDisposer = void 0;
                        fallback = void 0;
                    }
                    var temp = new Array(newItems.length);
                    unusedItems = items.length;
                    for (j = unusedItems - 1; j >= 0; --j) {
                        item = items[j];
                        oldIndex = item.index;
                        if (oldIndex < newItems.length && newItems[oldIndex] === item.value) {
                            temp[oldIndex] = mapped[oldIndex];
                            if (--unusedItems !== j) {
                                items[j] = items[unusedItems];
                                items[unusedItems] = item;
                            }
                        }
                    }
                    var matcher = new Map;
                    var matchedItems = new Uint8Array(unusedItems);
                    for (j = unusedItems - 1; j >= 0; --j) {
                        var _matcher$get$push, _matcher$get;
                        oldValue = items[j].value;
                        (_matcher$get$push = (_matcher$get = matcher.get(oldValue)) == null ? void 0 : _matcher$get.push(j)) !== null && _matcher$get$push !== void 0 || matcher.set(oldValue, [ j ]);
                    }
                    for (i = 0; i < newItems.length; ++i) {
                        var _matcher$get$pop, _matcher$get2;
                        if (i in temp) continue;
                        newValue = newItems[i];
                        j = (_matcher$get$pop = (_matcher$get2 = matcher.get(newValue)) == null ? void 0 : _matcher$get2.pop()) !== null && _matcher$get$pop !== void 0 ? _matcher$get$pop : -1;
                        if (j >= 0) {
                            var _item$indexSetter;
                            item = items[j];
                            oldIndex = item.index;
                            temp[i] = mapped[oldIndex];
                            item.index = i;
                            (_item$indexSetter = item.indexSetter) == null || _item$indexSetter.call(item, i);
                            matchedItems[j] = 1;
                        }
                    }
                    for (j = matchedItems.length - 1; j >= 0; --j) if (matchedItems[j] && --unusedItems !== j) {
                        item = items[j];
                        items[j] = items[unusedItems];
                        items[unusedItems] = item;
                    }
                    for (j = unusedItems - 1; j >= 0; --j) {
                        item = items[j];
                        oldIndex = item.index;
                        if (!(oldIndex in temp) && oldIndex < newItems.length) {
                            var _item$valueSetter;
                            temp[oldIndex] = mapped[oldIndex];
                            newValue = newItems[oldIndex];
                            item.value = newValue;
                            (_item$valueSetter = item.valueSetter) == null || _item$valueSetter.call(item, newValueGetter);
                            if (--unusedItems !== j) {
                                items[j] = items[unusedItems];
                                items[unusedItems] = item;
                            }
                        }
                    }
                    for (i = 0; i < newItems.length; ++i) {
                        if (i in temp) continue;
                        newValue = newItems[i];
                        if (unusedItems > 0) {
                            item = items[--unusedItems];
                            temp[i] = mapped[item.index];
                            batch(changeBoth);
                        } else temp[i] = createRoot(mapper);
                    }
                    disposeList(items.splice(0, unusedItems));
                    if (newItems.length === 0 && options.fallback) {
                        if (!fallbackDisposer) fallback = [ createRoot(function(d) {
                            fallbackDisposer = d;
                            return options.fallback();
                        }) ];
                        return fallback;
                    }
                    return mapped = temp;
                });
            };
            function newValueGetter() {
                return newValue;
            }
            function changeBoth() {
                var _item$indexSetter2, _item$valueSetter2;
                item.index = i;
                (_item$indexSetter2 = item.indexSetter) == null || _item$indexSetter2.call(item, i);
                item.value = newValue;
                (_item$valueSetter2 = item.valueSetter) == null || _item$valueSetter2.call(item, newValueGetter);
            }
            function mapper(disposer) {
                var t = {
                    value: newValue,
                    index: i,
                    disposer: disposer
                };
                items.push(t);
                var _sV = function sV() {
                    var _ref2 = false ? createSignal(t.value, {
                        name: "value"
                    }) : createSignal(t.value);
                    var _ref3 = _slicedToArray(_ref2, 2);
                    _sV = _ref3[0];
                    t.valueSetter = _ref3[1];
                    return _sV();
                }, _sI = function sI() {
                    var _ref4 = false ? createSignal(t.index, {
                        name: "index"
                    }) : createSignal(t.index);
                    var _ref5 = _slicedToArray(_ref4, 2);
                    _sI = _ref5[0];
                    t.indexSetter = _ref5[1];
                    return _sI();
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
                fallback: function fallback() {
                    return props.fallback;
                }
            };
            return false ? createMemo(listArray(function() {
                return props.each;
            }, props.children, fallback || void 0), void 0, {
                name: "value"
            }) : createMemo(listArray(function() {
                return props.each;
            }, props.children, fallback || void 0));
        }
        function createVirtual(component, props, keyHandlers) {
            var _props$selected, _props$selected2;
            var isRow = component === Row;
            var axis = isRow ? "x" : "y";
            var _createSignal = createSignal((_props$selected = props.selected) !== null && _props$selected !== void 0 ? _props$selected : 0), _createSignal2 = _slicedToArray(_createSignal, 2), cursor = _createSignal2[0], setCursor = _createSignal2[1];
            var bufferSize = createMemo(function() {
                return props.bufferSize || 2;
            });
            var scrollIndex = createMemo(function() {
                return props.scrollIndex || 0;
            });
            var items = createMemo(function() {
                return props.each || [];
            });
            var itemCount = createMemo(function() {
                return items().length;
            });
            var scrollType = createMemo(function() {
                return props.scroll || "auto";
            });
            var initiallyLocked = !!props.skipInitialWrap && !!props.wrap && ((_props$selected2 = props.selected) !== null && _props$selected2 !== void 0 ? _props$selected2 : 0) === 0;
            var _createSignal3 = createSignal(!initiallyLocked), _createSignal4 = _slicedToArray(_createSignal3, 2), wrapUnlocked = _createSignal4[0], setWrapUnlocked = _createSignal4[1];
            var effectiveWrap = createMemo(function() {
                return !!props.wrap && wrapUnlocked();
            });
            var selected = function selected() {
                if (itemCount() <= props.displaySize) return clamp(props.selected || 0, 0, Math.max(0, itemCount() - 1));
                if (props.wrap && !initiallyLocked) return Math.max(bufferSize(), scrollIndex());
                return clamp(props.selected || 0, 0, Math.max(0, itemCount() - 1));
            };
            var cachedScaledSize;
            var targetPosition;
            var cachedAnimationController;
            var uniformSize = createMemo(function() {
                return props.uniformSize !== false;
            });
            var _createSignal5 = createSignal({
                start: 0,
                slice: [],
                selected: 0,
                delta: 0,
                shiftBy: 0,
                atStart: true,
                cursor: 0
            }), _createSignal6 = _slicedToArray(_createSignal5, 2), slice = _createSignal6[0], setSlice = _createSignal6[1];
            function normalizeDeltaForWindow(delta, windowLen) {
                if (!windowLen) return 0;
                var half = windowLen / 2;
                if (delta > half) return delta - windowLen;
                if (delta < -half) return delta + windowLen;
                return delta;
            }
            function computeSize() {
                var selected = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
                if (uniformSize() && cachedScaledSize) return cachedScaledSize; else if (viewRef) {
                    var gap = viewRef.gap || 0;
                    var dimension = isRow ? "width" : "height";
                    var prevSelectedChild = viewRef.children[selected];
                    if (prevSelectedChild instanceof ElementNode) {
                        var _prevSelectedChild$st, _ref, _focusStyle$scale;
                        var itemSize = prevSelectedChild[dimension] || 0;
                        var focusStyle = (_prevSelectedChild$st = prevSelectedChild.style) == null ? void 0 : _prevSelectedChild$st.focus;
                        var scale = (_ref = (_focusStyle$scale = focusStyle == null ? void 0 : focusStyle.scale) !== null && _focusStyle$scale !== void 0 ? _focusStyle$scale : prevSelectedChild.scale) !== null && _ref !== void 0 ? _ref : 1;
                        var scaledSize = itemSize * (props.factorScale ? scale : 1) + gap;
                        cachedScaledSize = scaledSize;
                        return scaledSize;
                    }
                }
                return 0;
            }
            function computeSlice(c, delta, prev) {
                var total = itemCount();
                if (total === 0) return {
                    start: 0,
                    slice: [],
                    selected: 0,
                    delta: delta,
                    shiftBy: 0,
                    atStart: true,
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
                var length = props.displaySize + bufferSize();
                var start = prev.start;
                var selected = prev.selected;
                var atStart = prev.atStart;
                var shiftBy = -delta;
                switch (scrollType()) {
                  case "always":
                    if (effectiveWrap()) {
                        start = mod(c - 1, total);
                        selected = 1;
                    } else {
                        start = clamp(c - bufferSize(), 0, Math.max(0, total - props.displaySize - bufferSize()));
                        if (delta === 0 && c > 3) {
                            shiftBy = c < 3 ? -c : -2;
                            selected = 2;
                        } else selected = c < bufferSize() ? c : c >= total - props.displaySize ? c - (total - props.displaySize) + bufferSize() : bufferSize();
                    }
                    break;

                  case "auto":
                    if (effectiveWrap()) {
                        if (delta === 0) {
                            selected = scrollIndex() || 1;
                            start = mod(c - (scrollIndex() || 1), total);
                        } else start = mod(c - (prev.selected || 1), total);
                    } else if (delta < 0) {
                        if (prev.start > 0 && prev.selected >= props.displaySize) {
                            start = prev.start;
                            selected = prev.selected - 1;
                        } else if (prev.start > 0) {
                            start = prev.start - 1;
                            selected = prev.selected;
                        } else if (prev.start === 0 && !prev.atStart) {
                            start = 0;
                            selected = prev.selected - 1;
                            atStart = true;
                        } else if (selected >= props.displaySize - 1) {
                            start = 0;
                            selected = prev.selected - 1;
                        } else {
                            start = 0;
                            selected = prev.selected - 1;
                            shiftBy = 0;
                        }
                    } else if (delta > 0) {
                        if (prev.selected < scrollIndex()) {
                            start = prev.start;
                            selected = prev.selected + 1;
                            shiftBy = 0;
                        } else if (prev.selected === scrollIndex() || atStart) {
                            start = prev.start;
                            selected = prev.selected + 1;
                            atStart = false;
                        } else if (prev.start === 0 && prev.selected === 0) {
                            start = 0;
                            selected = 1;
                            atStart = false;
                        } else if (prev.start >= total - props.displaySize) {
                            start = prev.start;
                            selected = c - start;
                            shiftBy = 0;
                        } else {
                            start = prev.start + 1;
                            selected = Math.max(prev.selected, scrollIndex() + 1);
                        }
                    } else if (c > 0) {
                        start = Math.min(c - (scrollIndex() || 1), total - props.displaySize - bufferSize());
                        selected = Math.max(scrollIndex() || 1, c - start);
                        shiftBy = total - c < 3 ? c - total : -1;
                        atStart = false;
                    } else if (c !== prev.cursor) {
                        start = c;
                        if (c === 0) {
                            atStart = true;
                            selected = 0;
                        }
                    } else {
                        start = prev.start;
                        selected = prev.selected;
                    }
                    break;

                  case "edge":
                    {
                        var startScrolling = Math.max(1, props.displaySize + (atStart ? -1 : 0));
                        if (effectiveWrap()) {
                            if (delta > 0) {
                                if (prev.selected < startScrolling) {
                                    selected = prev.selected + 1;
                                    shiftBy = 0;
                                } else if (prev.selected === startScrolling && atStart) {
                                    selected = prev.selected + 1;
                                    atStart = false;
                                } else {
                                    start = mod(prev.start + 1, total);
                                    selected = prev.selected;
                                }
                            } else if (delta < 0) {
                                if (prev.selected > 1) {
                                    selected = prev.selected - 1;
                                    shiftBy = 0;
                                } else {
                                    start = mod(prev.start - 1, total);
                                    selected = 1;
                                }
                            } else {
                                start = mod(c - 1, total);
                                selected = 1;
                                shiftBy = -1;
                                atStart = false;
                            }
                        } else if (delta === 0 && c > 0) {
                            selected = c > startScrolling ? startScrolling : c;
                            start = Math.max(0, c - startScrolling + 1);
                            shiftBy = c > startScrolling ? -1 : 0;
                            atStart = c < startScrolling;
                        } else if (delta > 0) {
                            if (prev.selected < startScrolling) {
                                selected = prev.selected + 1;
                                shiftBy = 0;
                            } else if (prev.selected === startScrolling && atStart) {
                                selected = prev.selected + 1;
                                atStart = false;
                            } else {
                                start = prev.start + 1;
                                selected = prev.selected;
                                atStart = false;
                            }
                        } else if (delta < 0) if (prev.selected > 1) {
                            selected = prev.selected - 1;
                            shiftBy = 0;
                        } else if (c > 1) {
                            start = Math.max(0, c - 1);
                            selected = 1;
                        } else if (c === 1) {
                            start = 0;
                            selected = 1;
                        } else {
                            start = 0;
                            selected = 0;
                            shiftBy = atStart ? 0 : shiftBy;
                            atStart = true;
                        }
                        break;
                    }

                  default:
                    start = 0;
                    selected = c;
                    shiftBy = 0;
                    break;
                }
                var newSlice = prev.slice;
                if (start !== prev.start || newSlice.length === 0) newSlice = effectiveWrap() ? Array.from({
                    length: length
                }, function(_, i) {
                    return items()[mod(start + i, total)];
                }) : items().slice(start, start + length);
                var state = {
                    start: start,
                    slice: newSlice,
                    selected: selected,
                    delta: delta,
                    shiftBy: shiftBy,
                    atStart: atStart,
                    cursor: c
                };
                if (props.debugInfo) console.log("[Virtual]", {
                    cursor: c,
                    delta: delta,
                    start: start,
                    selected: selected,
                    shiftBy: shiftBy,
                    slice: state.slice
                });
                return state;
            }
            var viewRef;
            function scrollToIndex(index) {
                untrack(function() {
                    if (itemCount() === 0) return;
                    lastNavTime = performance.now();
                    if (originalPosition !== void 0) {
                        viewRef.lng[axis] = originalPosition;
                        targetPosition = originalPosition;
                    }
                    if (!hasFocus(viewRef)) viewRef.setFocus();
                    updateSelected([ clamp(index, 0, itemCount() - 1) ]);
                });
            }
            var lastNavTime = 0;
            function getAdaptiveDuration() {
                var duration = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 250;
                var now = performance.now();
                var delta = now - lastNavTime;
                lastNavTime = now;
                if (delta < duration) return delta;
                return duration;
            }
            var originalPosition;
            var onSelectedChanged = function onSelectedChanged(_idx, elm, _active, _lastIdx) {
                var _this = this;
                var _originalPosition, _elm$children$length, _elm$children, _targetPosition;
                var idx = _idx;
                var lastIdx = _lastIdx || 0;
                var active = _active;
                var noChange = idx === lastIdx;
                var total = itemCount();
                originalPosition = (_originalPosition = originalPosition) !== null && _originalPosition !== void 0 ? _originalPosition : elm[axis];
                if (props.onSelectedChanged) props.onSelectedChanged.call(this, idx, this, active, lastIdx);
                if (noChange) return;
                var rawDelta = idx - (lastIdx !== null && lastIdx !== void 0 ? lastIdx : 0);
                var windowLen = (_elm$children$length = elm == null || (_elm$children = elm.children) == null ? void 0 : _elm$children.length) !== null && _elm$children$length !== void 0 ? _elm$children$length : props.displaySize + bufferSize();
                var delta = effectiveWrap() ? normalizeDeltaForWindow(rawDelta, windowLen) : rawDelta;
                setCursor(function(c) {
                    var next = c + delta;
                    return effectiveWrap() ? mod(next, total) : clamp(next, 0, total - 1);
                });
                var newState = computeSlice(cursor(), delta, slice());
                setSlice(newState);
                elm.selected = newState.selected;
                if (!wrapUnlocked() && rawDelta > 0) setWrapUnlocked(true);
                if (props.onEndReachedThreshold !== void 0 && cursor() >= itemCount() - props.onEndReachedThreshold) {
                    var _props$onEndReached;
                    (_props$onEndReached = props.onEndReached) == null || _props$onEndReached.call(props);
                }
                if (newState.shiftBy === 0) return;
                var prevChildPos = ((_targetPosition = targetPosition) !== null && _targetPosition !== void 0 ? _targetPosition : this[axis]) + active[axis];
                queueMicrotask(function() {
                    elm.updateLayout();
                    var childSize = computeSize(slice().selected);
                    if (cachedAnimationController && cachedAnimationController.state === "running") cachedAnimationController.stop();
                    if (Config.animationsEnabled) {
                        var _this$animationSettin;
                        _this.lng[axis] = prevChildPos - active[axis];
                        targetPosition = _this.lng[axis] + childSize * slice().shiftBy;
                        cachedAnimationController = _this.animate(_defineProperty({}, axis, targetPosition), _objectSpread(_objectSpread({}, _this.animationSettings), {}, {
                            duration: getAdaptiveDuration((_this$animationSettin = _this.animationSettings) == null ? void 0 : _this$animationSettin.duration)
                        })).start();
                    } else _this.lng[axis] = prevChildPos - active[axis] + childSize * slice().shiftBy;
                });
            };
            var updateSelected = function updateSelected(_ref6) {
                var _ref7 = _slicedToArray(_ref6, 2), sel = _ref7[0], _items = _ref7[1];
                if (!viewRef || sel === void 0 || itemCount() === 0) return;
                var safeSel = clamp(sel, 0, itemCount() - 1);
                var item = items()[safeSel];
                setCursor(safeSel);
                var newState = computeSlice(safeSel, 0, slice());
                setSlice(newState);
                queueMicrotask(function() {
                    var _originalPosition2, _targetPosition2;
                    viewRef.updateLayout();
                    var activeIndex = viewRef.children.findIndex(function(x) {
                        return x.item === item;
                    });
                    if (activeIndex === -1) return;
                    viewRef.selected = activeIndex;
                    if (hasFocus(viewRef)) {
                        var _viewRef$children$act;
                        (_viewRef$children$act = viewRef.children[activeIndex]) == null || _viewRef$children$act.setFocus();
                    }
                    if (newState.shiftBy === 0) return;
                    var childSize = computeSize(slice().selected);
                    originalPosition = (_originalPosition2 = originalPosition) !== null && _originalPosition2 !== void 0 ? _originalPosition2 : viewRef.lng[axis];
                    targetPosition = (_targetPosition2 = targetPosition) !== null && _targetPosition2 !== void 0 ? _targetPosition2 : viewRef.lng[axis];
                    viewRef.lng[axis] = (viewRef.lng[axis] || 0) + childSize * -1;
                });
            };
            var doOnce = initiallyLocked;
            createEffect(on([ effectiveWrap, items ], function() {
                if (!viewRef || itemCount() === 0 || !effectiveWrap() || doOnce) return;
                doOnce = true;
                if (itemCount() <= props.displaySize) {
                    queueMicrotask(function() {
                        originalPosition = viewRef.lng[axis];
                        targetPosition = viewRef.lng[axis];
                    });
                    return;
                }
                queueMicrotask(function() {
                    var childSize = computeSize(slice().selected);
                    viewRef.lng[axis] = (viewRef.lng[axis] || 0) + childSize * -1;
                    originalPosition = viewRef.lng[axis];
                    targetPosition = viewRef.lng[axis];
                });
            }));
            createEffect(on([ function() {
                return props.selected;
            }, items ], updateSelected));
            createEffect(on(items, function() {
                if (!viewRef) return;
                var c = cursor();
                if (c >= itemCount()) {
                    c = Math.max(0, itemCount() - 1);
                    setCursor(c);
                }
                var newState = computeSlice(c, 0, slice());
                setSlice(newState);
                viewRef.selected = newState.selected;
            }));
            return function() {
                var _el$ = createElement("view");
                var _ref$ = chainRefs(function(el) {
                    viewRef = el;
                }, props.ref);
                typeof _ref$ === "function" && use(_ref$, _el$);
                setProp(_el$, "transitionLeft", isRow ? defaultTransitionBack : void 0);
                setProp(_el$, "transitionRight", isRow ? defaultTransitionForward : void 0);
                setProp(_el$, "transitionUp", !isRow ? defaultTransitionUp : void 0);
                setProp(_el$, "transitionDown", !isRow ? defaultTransitionDown : void 0);
                spread(_el$, mergeProps(props, keyHandlers, {
                    get wrap() {
                        return effectiveWrap();
                    },
                    get selected() {
                        return selected();
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
                }), true);
                insert(_el$, createComponent(List, {
                    get each() {
                        return slice().slice;
                    },
                    get children() {
                        return props.children;
                    }
                }));
                return _el$;
            }();
        }
        function VirtualRow(props) {
            return createVirtual(Row, props, {
                onLeft: chainFunctions(props.onLeft, handleNavigation("left")),
                onRight: chainFunctions(props.onRight, handleNavigation("right"))
            });
        }
        function Thumbnail(props) {
            return function() {
                var _el$ = createElement("view");
                spread(_el$, mergeProps(props, {
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
                }), false);
                return _el$;
            }();
        }
        function TileRow(props) {
            return createComponent(Row, mergeProps(props, {
                get style() {
                    return styles_default.Row;
                },
                get children() {
                    return createComponent(Index, {
                        get each() {
                            return props.items;
                        },
                        children: function children(item, index) {
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
        function Button(props) {
            return function() {
                var _el$3 = createElement("view"), _el$4 = createElement("text");
                insertNode(_el$3, _el$4);
                spread(_el$3, mergeProps(props, {
                    get announce() {
                        return [ props.children, "button" ];
                    },
                    forwardStates: true,
                    get style() {
                        return buttonStyles.container;
                    }
                }), true);
                insert(_el$4, function() {
                    return props.children || props.title;
                });
                effect(function(_$p) {
                    return setProp(_el$4, "style", buttonStyles.text, _$p);
                });
                return _el$3;
            }();
        }
        function AssetPanel(props) {
            var panelRef, actionRef;
            createEffect(function() {
                if (props.open) {
                    panelRef.animate({
                        x: 1470
                    }, {
                        duration: 400,
                        easing: "ease-in-out"
                    }).start();
                    actionRef.setFocus();
                } else if (panelRef.rendered) panelRef.animate({
                    x: 1920
                }, {
                    duration: 400,
                    easing: "ease-in-out"
                }).start();
            });
            return function() {
                var _el$5 = createElement("view"), _el$6 = createElement("text");
                insertNode(_el$5, _el$6);
                var _ref$ = panelRef;
                typeof _ref$ === "function" ? use(_ref$, _el$5) : panelRef = _el$5;
                spread(_el$5, mergeProps(props, {
                    x: 1920,
                    color: 255,
                    width: 450,
                    height: 1080,
                    zIndex: 5
                }), true);
                setProp(_el$6, "x", 75);
                setProp(_el$6, "y", 50);
                setProp(_el$6, "fontSize", 32);
                insert(_el$6, function() {
                    var _props$item;
                    return (_props$item = props.item) == null ? void 0 : _props$item.title;
                });
                insert(_el$5, createComponent(Column, {
                    ref: function ref(r$) {
                        var _ref$2 = actionRef;
                        typeof _ref$2 === "function" ? _ref$2(r$) : actionRef = r$;
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
                }), null);
                return _el$5;
            }();
        }
        function TitleRow(props) {
            var slug = function slug() {
                var _props$title;
                return ((_props$title = props.title) == null ? void 0 : _props$title.toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]+/g, "")) || "row";
            };
            return function() {
                var _el$7 = createElement("view");
                setProp(_el$7, "forwardFocus", 1);
                setProp(_el$7, "marginTop", 30);
                insert(_el$7, createComponent(Show, {
                    when: SHOW_TEXT,
                    get children() {
                        var _el$8 = createElement("text");
                        setProp(_el$8, "skipFocus", true);
                        setProp(_el$8, "style", titleRowStyles);
                        insert(_el$8, function() {
                            return props.title;
                        });
                        return _el$8;
                    }
                }), null);
                insert(_el$7, createComponent(VirtualRow, {
                    gap: 20,
                    displaySize: DISPLAY_SIZE,
                    bufferSize: 3,
                    get each() {
                        return props.items;
                    },
                    y: 50,
                    get scroll() {
                        return props.scroll;
                    },
                    get wrap() {
                        return props.wrap;
                    },
                    get selected() {
                        return props.selected;
                    },
                    debugInfo: true,
                    children: function children(item, index) {
                        return createComponent(Dynamic, {
                            get component() {
                                var _props$row;
                                return typeToComponent[props.rowType || ((_props$row = props.row) == null ? void 0 : _props$row.type)];
                            },
                            get index() {
                                return index();
                            },
                            get item() {
                                return item();
                            },
                            get group() {
                                return slug();
                            }
                        });
                    }
                }), null);
                effect(function(_$p) {
                    return setProp(_el$7, "height", props.height, _$p);
                });
                return _el$7;
            }();
        }
        function Poster(props) {
            return function() {
                var _el$9 = createElement("view");
                spread(_el$9, mergeProps({
                    get src() {
                        var _props$item2;
                        return (_props$item2 = props.item) == null ? void 0 : _props$item2.src;
                    },
                    get title() {
                        var _props$item3;
                        return (_props$item3 = props.item) == null ? void 0 : _props$item3.shortTitle;
                    },
                    get backdrop() {
                        var _props$item4;
                        return (_props$item4 = props.item) == null ? void 0 : _props$item4.backdrop;
                    }
                }, props, {
                    onFail: function onFail(node) {
                        return node.src = "./assets/fallback.png";
                    },
                    style: posterStyles
                }), false);
                return _el$9;
            }();
        }
        function PosterTitle(props) {
            return function() {
                var _el$0 = createElement("view");
                spread(_el$0, mergeProps(props, {
                    get src() {
                        var _props$item5;
                        return (_props$item5 = props.item) == null ? void 0 : _props$item5.src;
                    },
                    get backdrop() {
                        var _props$item6;
                        return (_props$item6 = props.item) == null ? void 0 : _props$item6.backdrop;
                    },
                    onFail: function onFail(node) {
                        return node.src = "./assets/fallback.png";
                    },
                    style: posterStyles,
                    forwardStates: true
                }), true);
                insert(_el$0, createComponent(Show, {
                    when: SHOW_TEXT,
                    get children() {
                        var _el$1 = createElement("text");
                        setProp(_el$1, "style", posterTitleStyles);
                        insert(_el$1, function() {
                            var _props$item7;
                            return (_props$item7 = props.item) == null ? void 0 : _props$item7.title;
                        });
                        return _el$1;
                    }
                }));
                return _el$0;
            }();
        }
        function Hero(props) {
            var _createSignal7 = createSignal(false), _createSignal8 = _slicedToArray(_createSignal7, 2), hasFocus = _createSignal8[0], setHasFocus = _createSignal8[1];
            return function() {
                var _el$10 = createElement("view"), _el$11 = createElement("view"), _el$12 = createElement("view"), _el$13 = createElement("text"), _el$14 = createElement("text");
                insertNode(_el$10, _el$11);
                spread(_el$10, mergeProps(props, {
                    get src() {
                        return props.item.backdrop;
                    },
                    style: heroStyles,
                    onFocusChanged: setHasFocus,
                    forwardStates: true
                }), true);
                insertNode(_el$11, _el$12);
                insertNode(_el$11, _el$13);
                insertNode(_el$11, _el$14);
                setProp(_el$11, "transition", {
                    alpha: heroTransition
                });
                setProp(_el$12, "width", 185);
                setProp(_el$12, "height", 278);
                setProp(_el$12, "x", 54);
                setProp(_el$12, "y", 220);
                setProp(_el$13, "y", 520);
                setProp(_el$13, "x", 54);
                setProp(_el$13, "fontSize", 64);
                setProp(_el$13, "width", 1e3);
                setProp(_el$13, "maxLines", 1);
                setProp(_el$13, "style", heroTextStyles);
                insert(_el$13, function() {
                    return props.item.title;
                });
                setProp(_el$14, "y", 620);
                setProp(_el$14, "x", 60);
                setProp(_el$14, "fontSize", 21);
                setProp(_el$14, "width", 1e3);
                setProp(_el$14, "maxLines", 2);
                setProp(_el$14, "lineHeight", 36);
                setProp(_el$14, "color", 3435973887);
                setProp(_el$14, "style", heroTextStyles);
                insert(_el$14, function() {
                    return props.item.overview;
                });
                effect(function(_p$) {
                    var _v$ = hasFocus() ? 1 : 0, _v$2 = props.item.src;
                    _v$ !== _p$.e && (_p$.e = setProp(_el$11, "alpha", _v$, _p$.e));
                    _v$2 !== _p$.t && (_p$.t = setProp(_el$12, "src", _v$2, _p$.t));
                    return _p$;
                }, {
                    e: void 0,
                    t: void 0
                });
                return _el$10;
            }();
        }
        function Block(props) {
            return function() {
                var _el$15 = createElement("view");
                spread(_el$15, mergeProps(props, {
                    width: 100,
                    height: 100,
                    style: BlockStyle,
                    get color() {
                        return props.color || 3772834047;
                    }
                }), false);
                return _el$15;
            }();
        }
        _export({
            a: Hero,
            c: Thumbnail,
            d: List,
            l: TileRow,
            n: Block,
            o: Poster,
            r: Button,
            t: AssetPanel,
            u: TitleRow
        });
        return {
            setters: [ function(_renderLegacy001Js) {
                Config = _renderLegacy001Js.D;
                createRoot = _renderLegacy001Js.G;
                createMemo = _renderLegacy001Js.H;
                batch = _renderLegacy001Js.I;
                Show = _renderLegacy001Js.N;
                onCleanup = _renderLegacy001Js.Q;
                hasFocus = _renderLegacy001Js.S;
                createEffect = _renderLegacy001Js.V;
                on = _renderLegacy001Js.Z;
                ElementNode = _renderLegacy001Js._;
                createElement = _renderLegacy001Js.a;
                effect = _renderLegacy001Js.c;
                use = _renderLegacy001Js.g;
                spread = _renderLegacy001Js.h;
                createComponent = _renderLegacy001Js.i;
                untrack = _renderLegacy001Js.it;
                Index = _renderLegacy001Js.j;
                $TRACK = _renderLegacy001Js.k;
                insert = _renderLegacy001Js.l;
                setProp = _renderLegacy001Js.m;
                createSignal = _renderLegacy001Js.q;
                Dynamic = _renderLegacy001Js.t;
                insertNode = _renderLegacy001Js.u;
            }, function(_utilsLegacy002Js) {
                mod = _utilsLegacy002Js.i;
                combineStyles = _utilsLegacy002Js.n;
                clamp = _utilsLegacy002Js.t;
            }, function(_mergePropsLegacy003Js) {
                mergeProps = _mergePropsLegacy003Js.t;
            }, function(_chainFunctionsLegacy007Js) {
                defaultTransitionForward = _chainFunctionsLegacy007Js.c;
                navigableForwardFocus = _chainFunctionsLegacy007Js.d;
                defaultTransitionUp = _chainFunctionsLegacy007Js.l;
                chainRefs = _chainFunctionsLegacy007Js.n;
                defaultTransitionBack = _chainFunctionsLegacy007Js.o;
                defaultTransitionDown = _chainFunctionsLegacy007Js.s;
                chainFunctions = _chainFunctionsLegacy007Js.t;
                handleNavigation = _chainFunctionsLegacy007Js.u;
            }, function(_ColumnLegacy008Js) {
                Column = _ColumnLegacy008Js.t;
            }, function(_RowLegacy009Js) {
                Row = _RowLegacy009Js.t;
            }, function(_stylesLegacy00hJs) {
                buttonStyles = _stylesLegacy00hJs.n;
                styles_default = _stylesLegacy00hJs.r;
            } ],
            execute: function execute() {
                _export("s", SHOW_TEXT = typeof window === "undefined" || new URLSearchParams(window.location.search).get("noText") !== "true");
                _export("i", DISPLAY_SIZE = function() {
                    var fallback = 8;
                    if (typeof window === "undefined") return fallback;
                    var raw = new URLSearchParams(window.location.search).get("displaySize");
                    if (raw === null) return fallback;
                    var parsed = parseInt(raw, 10);
                    return isNaN(parsed) || parsed < 1 ? fallback : parsed;
                }());
                heroTransition = {
                    duration: 300,
                    easing: "cubic-bezier(0.20, 1.00, 0.80, 1.00)"
                };
                titleRowStyles = {
                    fontFamily: "Raleway",
                    fontSize: 24,
                    height: 32,
                    lineHeight: 32
                };
                posterStyles = {
                    width: 185,
                    height: 278,
                    scale: 1,
                    color: 2964369663,
                    placeholderColor: 4278190335,
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
                };
                posterTitleStyles = {
                    fontFamily: "Raleway",
                    fontSize: 22,
                    lineHeight: 22,
                    height: 22,
                    x: 10,
                    y: 288,
                    contain: "width",
                    width: 185,
                    maxLines: 2,
                    alpha: 1,
                    transition: {
                        y: heroTransition,
                        alpha: heroTransition
                    }
                };
                heroStyles = {
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
                };
                heroTextStyles = {
                    fontFamily: "Raleway",
                    contain: "width"
                };
                typeToComponent = {
                    Poster: Poster,
                    Hero: Hero,
                    PosterTitle: PosterTitle
                };
                BlockStyle = {
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
})();