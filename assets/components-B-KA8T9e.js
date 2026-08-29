import { $ as on, F as Show, N as Index, R as batch, U as createEffect, W as createMemo, Y as createSignal, _ as ElementNode, a as createElement, c as effect, et as onCleanup, g as use, h as spread, i as createComponent, j as $TRACK, k as Config, l as insert, m as setProp, ot as untrack, q as createRoot, t as Dynamic, u as insertNode, w as hasFocus } from "./render-DoMuJa_u.js";

import { i as mod, n as combineStyles, t as clamp } from "./utils-Bj6ppHdD.js";

import { t as mergeProps } from "./mergeProps-CZhOiis0.js";

import { c as defaultTransitionForward, d as navigableForwardFocus, l as defaultTransitionUp, n as chainRefs, o as defaultTransitionBack, s as defaultTransitionDown, t as chainFunctions, u as handleNavigation } from "./chainFunctions-CXDf0f9f.js";

import { t as Column } from "./Column-DmJFA_vu.js";

import { t as Row } from "./Row-Ci1n9-QF.js";

import { n as buttonStyles, r as styles_default } from "./styles-BcDKugwt.js";

function disposeList(list) {
    for (let i = 0; i < list.length; i++) {
        var _list$i;
        (_list$i = list[i]) == null || _list$i.disposer();
    }
}

function listArray(list, mapFn, options = {}) {
    const items = [];
    let mapped = [], unusedItems, i, j, item, oldValue, oldIndex, newValue, fallback, fallbackDisposer;
    onCleanup(() => {
        fallbackDisposer == null || fallbackDisposer();
        fallbackDisposer = void 0;
        disposeList(items);
    });
    return () => {
        const newItems = list() || [];
        newItems[$TRACK];
        return untrack(() => {
            if (newItems.length > 0 && fallbackDisposer) {
                fallbackDisposer();
                fallbackDisposer = void 0;
                fallback = void 0;
            }
            const temp = new Array(newItems.length);
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
            const matcher = new Map;
            const matchedItems = new Uint8Array(unusedItems);
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
                if (!fallbackDisposer) fallback = [ createRoot(d => {
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
        const t = {
            value: newValue,
            index: i,
            disposer: disposer
        };
        items.push(t);
        let sV = () => {
            [sV, t.valueSetter] = false ? createSignal(t.value, {
                name: "value"
            }) : createSignal(t.value);
            return sV();
        }, sI = () => {
            [sI, t.indexSetter] = false ? createSignal(t.index, {
                name: "index"
            }) : createSignal(t.index);
            return sI();
        };
        return mapFn(() => sV(), () => sI());
    }
}

function List(props) {
    const fallback = "fallback" in props && {
        fallback: () => props.fallback
    };
    return false ? createMemo(listArray(() => props.each, props.children, fallback || void 0), void 0, {
        name: "value"
    }) : createMemo(listArray(() => props.each, props.children, fallback || void 0));
}

function createVirtual(component, props, keyHandlers) {
    var _props$selected, _props$selected2;
    const isRow = component === Row;
    const axis = isRow ? "x" : "y";
    const [cursor, setCursor] = createSignal((_props$selected = props.selected) !== null && _props$selected !== void 0 ? _props$selected : 0);
    const bufferSize = createMemo(() => props.bufferSize || 2);
    const scrollIndex = createMemo(() => props.scrollIndex || 0);
    const items = createMemo(() => props.each || []);
    const itemCount = createMemo(() => items().length);
    const scrollType = createMemo(() => props.scroll || "auto");
    const initiallyLocked = !!props.skipInitialWrap && !!props.wrap && ((_props$selected2 = props.selected) !== null && _props$selected2 !== void 0 ? _props$selected2 : 0) === 0;
    const [wrapUnlocked, setWrapUnlocked] = createSignal(!initiallyLocked);
    const effectiveWrap = createMemo(() => !!props.wrap && wrapUnlocked());
    const selected = () => {
        if (itemCount() <= props.displaySize) return clamp(props.selected || 0, 0, Math.max(0, itemCount() - 1));
        if (props.wrap && !initiallyLocked) return Math.max(bufferSize(), scrollIndex());
        return clamp(props.selected || 0, 0, Math.max(0, itemCount() - 1));
    };
    let cachedScaledSize;
    let targetPosition;
    let cachedAnimationController;
    const uniformSize = createMemo(() => props.uniformSize !== false);
    const [slice, setSlice] = createSignal({
        start: 0,
        slice: [],
        selected: 0,
        delta: 0,
        shiftBy: 0,
        atStart: true,
        cursor: 0
    });
    function normalizeDeltaForWindow(delta, windowLen) {
        if (!windowLen) return 0;
        const half = windowLen / 2;
        if (delta > half) return delta - windowLen;
        if (delta < -half) return delta + windowLen;
        return delta;
    }
    function computeSize(selected = 0) {
        if (uniformSize() && cachedScaledSize) return cachedScaledSize; else if (viewRef) {
            const gap = viewRef.gap || 0;
            const dimension = isRow ? "width" : "height";
            const prevSelectedChild = viewRef.children[selected];
            if (prevSelectedChild instanceof ElementNode) {
                var _prevSelectedChild$st, _ref, _focusStyle$scale;
                const itemSize = prevSelectedChild[dimension] || 0;
                const focusStyle = (_prevSelectedChild$st = prevSelectedChild.style) == null ? void 0 : _prevSelectedChild$st.focus;
                const scale = (_ref = (_focusStyle$scale = focusStyle == null ? void 0 : focusStyle.scale) !== null && _focusStyle$scale !== void 0 ? _focusStyle$scale : prevSelectedChild.scale) !== null && _ref !== void 0 ? _ref : 1;
                const scaledSize = itemSize * (props.factorScale ? scale : 1) + gap;
                cachedScaledSize = scaledSize;
                return scaledSize;
            }
        }
        return 0;
    }
    function computeSlice(c, delta, prev) {
        const total = itemCount();
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
        const length = props.displaySize + bufferSize();
        let start = prev.start;
        let selected = prev.selected;
        let atStart = prev.atStart;
        let shiftBy = -delta;
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
            if (effectiveWrap()) if (delta === 0) {
                selected = scrollIndex() || 1;
                start = mod(c - (scrollIndex() || 1), total);
            } else start = mod(c - (prev.selected || 1), total); else if (delta < 0) if (prev.start > 0 && prev.selected >= props.displaySize) {
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
            } else if (delta > 0) if (prev.selected < scrollIndex()) {
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
                const startScrolling = Math.max(1, props.displaySize + (atStart ? -1 : 0));
                if (effectiveWrap()) if (delta > 0) if (prev.selected < startScrolling) {
                    selected = prev.selected + 1;
                    shiftBy = 0;
                } else if (prev.selected === startScrolling && atStart) {
                    selected = prev.selected + 1;
                    atStart = false;
                } else {
                    start = mod(prev.start + 1, total);
                    selected = prev.selected;
                } else if (delta < 0) if (prev.selected > 1) {
                    selected = prev.selected - 1;
                    shiftBy = 0;
                } else {
                    start = mod(prev.start - 1, total);
                    selected = 1;
                } else {
                    start = mod(c - 1, total);
                    selected = 1;
                    shiftBy = -1;
                    atStart = false;
                } else if (delta === 0 && c > 0) {
                    selected = c > startScrolling ? startScrolling : c;
                    start = Math.max(0, c - startScrolling + 1);
                    shiftBy = c > startScrolling ? -1 : 0;
                    atStart = c < startScrolling;
                } else if (delta > 0) if (prev.selected < startScrolling) {
                    selected = prev.selected + 1;
                    shiftBy = 0;
                } else if (prev.selected === startScrolling && atStart) {
                    selected = prev.selected + 1;
                    atStart = false;
                } else {
                    start = prev.start + 1;
                    selected = prev.selected;
                    atStart = false;
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
        let newSlice = prev.slice;
        if (start !== prev.start || newSlice.length === 0) newSlice = effectiveWrap() ? Array.from({
            length: length
        }, (_, i) => items()[mod(start + i, total)]) : items().slice(start, start + length);
        const state = {
            start: start,
            slice: newSlice,
            selected: selected,
            delta: delta,
            shiftBy: shiftBy,
            atStart: atStart,
            cursor: c
        };
        if (props.debugInfo) console.log(`[Virtual]`, {
            cursor: c,
            delta: delta,
            start: start,
            selected: selected,
            shiftBy: shiftBy,
            slice: state.slice
        });
        return state;
    }
    let viewRef;
    function scrollToIndex(index) {
        untrack(() => {
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
    let lastNavTime = 0;
    function getAdaptiveDuration(duration = 250) {
        const now = performance.now();
        const delta = now - lastNavTime;
        lastNavTime = now;
        if (delta < duration) return delta;
        return duration;
    }
    let originalPosition;
    const onSelectedChanged = function(_idx, elm, _active, _lastIdx) {
        var _originalPosition, _elm$children$length, _elm$children, _targetPosition;
        const idx = _idx;
        const lastIdx = _lastIdx || 0;
        const active = _active;
        const noChange = idx === lastIdx;
        const total = itemCount();
        originalPosition = (_originalPosition = originalPosition) !== null && _originalPosition !== void 0 ? _originalPosition : elm[axis];
        if (props.onSelectedChanged) props.onSelectedChanged.call(this, idx, this, active, lastIdx);
        if (noChange) return;
        const rawDelta = idx - (lastIdx !== null && lastIdx !== void 0 ? lastIdx : 0);
        const windowLen = (_elm$children$length = elm == null || (_elm$children = elm.children) == null ? void 0 : _elm$children.length) !== null && _elm$children$length !== void 0 ? _elm$children$length : props.displaySize + bufferSize();
        const delta = effectiveWrap() ? normalizeDeltaForWindow(rawDelta, windowLen) : rawDelta;
        setCursor(c => {
            const next = c + delta;
            return effectiveWrap() ? mod(next, total) : clamp(next, 0, total - 1);
        });
        const newState = computeSlice(cursor(), delta, slice());
        setSlice(newState);
        elm.selected = newState.selected;
        if (!wrapUnlocked() && rawDelta > 0) setWrapUnlocked(true);
        if (props.onEndReachedThreshold !== void 0 && cursor() >= itemCount() - props.onEndReachedThreshold) {
            var _props$onEndReached;
            (_props$onEndReached = props.onEndReached) == null || _props$onEndReached.call(props);
        }
        if (newState.shiftBy === 0) return;
        const prevChildPos = ((_targetPosition = targetPosition) !== null && _targetPosition !== void 0 ? _targetPosition : this[axis]) + active[axis];
        queueMicrotask(() => {
            elm.updateLayout();
            const childSize = computeSize(slice().selected);
            if (cachedAnimationController && cachedAnimationController.state === "running") cachedAnimationController.stop();
            if (Config.animationsEnabled) {
                var _this$animationSettin;
                this.lng[axis] = prevChildPos - active[axis];
                targetPosition = this.lng[axis] + childSize * slice().shiftBy;
                cachedAnimationController = this.animate({
                    [axis]: targetPosition
                }, {
                    ...this.animationSettings,
                    duration: getAdaptiveDuration((_this$animationSettin = this.animationSettings) == null ? void 0 : _this$animationSettin.duration)
                }).start();
            } else this.lng[axis] = prevChildPos - active[axis] + childSize * slice().shiftBy;
        });
    };
    const updateSelected = ([sel, _items]) => {
        if (!viewRef || sel === void 0 || itemCount() === 0) return;
        const safeSel = clamp(sel, 0, itemCount() - 1);
        const item = items()[safeSel];
        setCursor(safeSel);
        const newState = computeSlice(safeSel, 0, slice());
        setSlice(newState);
        queueMicrotask(() => {
            var _originalPosition2, _targetPosition2;
            viewRef.updateLayout();
            const activeIndex = viewRef.children.findIndex(x => x.item === item);
            if (activeIndex === -1) return;
            viewRef.selected = activeIndex;
            if (hasFocus(viewRef)) {
                var _viewRef$children$act;
                (_viewRef$children$act = viewRef.children[activeIndex]) == null || _viewRef$children$act.setFocus();
            }
            if (newState.shiftBy === 0) return;
            const childSize = computeSize(slice().selected);
            originalPosition = (_originalPosition2 = originalPosition) !== null && _originalPosition2 !== void 0 ? _originalPosition2 : viewRef.lng[axis];
            targetPosition = (_targetPosition2 = targetPosition) !== null && _targetPosition2 !== void 0 ? _targetPosition2 : viewRef.lng[axis];
            viewRef.lng[axis] = (viewRef.lng[axis] || 0) + childSize * -1;
        });
    };
    let doOnce = initiallyLocked;
    createEffect(on([ effectiveWrap, items ], () => {
        if (!viewRef || itemCount() === 0 || !effectiveWrap() || doOnce) return;
        doOnce = true;
        if (itemCount() <= props.displaySize) {
            queueMicrotask(() => {
                originalPosition = viewRef.lng[axis];
                targetPosition = viewRef.lng[axis];
            });
            return;
        }
        queueMicrotask(() => {
            const childSize = computeSize(slice().selected);
            viewRef.lng[axis] = (viewRef.lng[axis] || 0) + childSize * -1;
            originalPosition = viewRef.lng[axis];
            targetPosition = viewRef.lng[axis];
        });
    }));
    createEffect(on([ () => props.selected, items ], updateSelected));
    createEffect(on(items, () => {
        if (!viewRef) return;
        let c = cursor();
        if (c >= itemCount()) {
            c = Math.max(0, itemCount() - 1);
            setCursor(c);
        }
        const newState = computeSlice(c, 0, slice());
        setSlice(newState);
        viewRef.selected = newState.selected;
    }));
    return (() => {
        var _el$ = createElement("view");
        var _ref$ = chainRefs(el => {
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
    })();
}

function VirtualRow(props) {
    return createVirtual(Row, props, {
        onLeft: chainFunctions(props.onLeft, handleNavigation("left")),
        onRight: chainFunctions(props.onRight, handleNavigation("right"))
    });
}

var SHOW_TEXT = typeof window === "undefined" || new URLSearchParams(window.location.search).get("noText") !== "true";

var DISPLAY_SIZE = (() => {
    const fallback = 8;
    if (typeof window === "undefined") return fallback;
    const raw = new URLSearchParams(window.location.search).get("displaySize");
    if (raw === null) return fallback;
    const parsed = parseInt(raw, 10);
    return isNaN(parsed) || parsed < 1 ? fallback : parsed;
})();

function Thumbnail(props) {
    return (() => {
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
    })();
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
                children: (item, index) => createComponent(Thumbnail, {
                    get item() {
                        return item();
                    },
                    get announceContext() {
                        return `${index + 1} of ${props.items.length}`;
                    }
                })
            });
        }
    }));
}

function Button(props) {
    return (() => {
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
        insert(_el$4, () => props.children || props.title);
        effect(_$p => setProp(_el$4, "style", buttonStyles.text, _$p));
        return _el$3;
    })();
}

function AssetPanel(props) {
    let panelRef, actionRef;
    createEffect(() => {
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
    return (() => {
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
        insert(_el$6, () => {
            var _props$item;
            return (_props$item = props.item) == null ? void 0 : _props$item.title;
        });
        insert(_el$5, createComponent(Column, {
            ref(r$) {
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
    })();
}

var heroTransition = {
    duration: 300,
    easing: "cubic-bezier(0.20, 1.00, 0.80, 1.00)"
};

var titleRowStyles = {
    fontFamily: "Raleway",
    fontSize: 24,
    height: 32,
    lineHeight: 32
};

function TitleRow(props) {
    const slug = () => {
        var _props$title;
        return ((_props$title = props.title) == null ? void 0 : _props$title.toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]+/g, "")) || "row";
    };
    return (() => {
        var _el$7 = createElement("view");
        setProp(_el$7, "forwardFocus", 1);
        setProp(_el$7, "marginTop", 30);
        insert(_el$7, createComponent(Show, {
            when: SHOW_TEXT,
            get children() {
                var _el$8 = createElement("text");
                setProp(_el$8, "skipFocus", true);
                setProp(_el$8, "style", titleRowStyles);
                insert(_el$8, () => props.title);
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
            children: (item, index) => createComponent(Dynamic, {
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
            })
        }), null);
        effect(_$p => setProp(_el$7, "height", props.height, _$p));
        return _el$7;
    })();
}

var posterStyles = {
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

function Poster(props) {
    return (() => {
        var _el$9 = createElement("view");
        setProp(_el$9, "onFail", node => node.src = "./assets/fallback.png");
        setProp(_el$9, "style", posterStyles);
        effect(_p$ => {
            var _props$src, _props$item2, _props$title2, _props$item3, _props$backdrop, _props$item4;
            var _v$ = props.x, _v$2 = props.alpha, _v$3 = props.transition, _v$4 = props.item, _v$5 = props.index, _v$6 = props.group, _v$7 = (_props$src = props.src) !== null && _props$src !== void 0 ? _props$src : (_props$item2 = props.item) == null ? void 0 : _props$item2.src, _v$8 = (_props$title2 = props.title) !== null && _props$title2 !== void 0 ? _props$title2 : (_props$item3 = props.item) == null ? void 0 : _props$item3.shortTitle, _v$9 = (_props$backdrop = props.backdrop) !== null && _props$backdrop !== void 0 ? _props$backdrop : (_props$item4 = props.item) == null ? void 0 : _props$item4.backdrop;
            _v$ !== _p$.e && (_p$.e = setProp(_el$9, "x", _v$, _p$.e));
            _v$2 !== _p$.t && (_p$.t = setProp(_el$9, "alpha", _v$2, _p$.t));
            _v$3 !== _p$.a && (_p$.a = setProp(_el$9, "transition", _v$3, _p$.a));
            _v$4 !== _p$.o && (_p$.o = setProp(_el$9, "item", _v$4, _p$.o));
            _v$5 !== _p$.i && (_p$.i = setProp(_el$9, "index", _v$5, _p$.i));
            _v$6 !== _p$.n && (_p$.n = setProp(_el$9, "group", _v$6, _p$.n));
            _v$7 !== _p$.s && (_p$.s = setProp(_el$9, "src", _v$7, _p$.s));
            _v$8 !== _p$.h && (_p$.h = setProp(_el$9, "title", _v$8, _p$.h));
            _v$9 !== _p$.r && (_p$.r = setProp(_el$9, "backdrop", _v$9, _p$.r));
            return _p$;
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
        });
        return _el$9;
    })();
}

var posterTitleStyles = {
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

function PosterTitle(props) {
    return (() => {
        var _el$0 = createElement("view");
        setProp(_el$0, "onFail", node => node.src = "./assets/fallback.png");
        setProp(_el$0, "style", posterStyles);
        setProp(_el$0, "forwardStates", true);
        insert(_el$0, createComponent(Show, {
            when: SHOW_TEXT,
            get children() {
                var _el$1 = createElement("text");
                setProp(_el$1, "style", posterTitleStyles);
                insert(_el$1, () => {
                    var _props$item5;
                    return (_props$item5 = props.item) == null ? void 0 : _props$item5.title;
                });
                return _el$1;
            }
        }));
        effect(_p$ => {
            var _props$item6, _props$item7;
            var _v$0 = props.item, _v$1 = props.index, _v$10 = props.group, _v$11 = (_props$item6 = props.item) == null ? void 0 : _props$item6.src, _v$12 = (_props$item7 = props.item) == null ? void 0 : _props$item7.backdrop;
            _v$0 !== _p$.e && (_p$.e = setProp(_el$0, "item", _v$0, _p$.e));
            _v$1 !== _p$.t && (_p$.t = setProp(_el$0, "index", _v$1, _p$.t));
            _v$10 !== _p$.a && (_p$.a = setProp(_el$0, "group", _v$10, _p$.a));
            _v$11 !== _p$.o && (_p$.o = setProp(_el$0, "src", _v$11, _p$.o));
            _v$12 !== _p$.i && (_p$.i = setProp(_el$0, "backdrop", _v$12, _p$.i));
            return _p$;
        }, {
            e: void 0,
            t: void 0,
            a: void 0,
            o: void 0,
            i: void 0
        });
        return _el$0;
    })();
}

var heroStyles = {
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

var heroTextStyles = {
    fontFamily: "Raleway",
    contain: "width"
};

function Hero(props) {
    const [hasFocus, setHasFocus] = createSignal(false);
    return (() => {
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
        insert(_el$13, () => props.item.title);
        setProp(_el$14, "y", 620);
        setProp(_el$14, "x", 60);
        setProp(_el$14, "fontSize", 21);
        setProp(_el$14, "width", 1e3);
        setProp(_el$14, "maxLines", 2);
        setProp(_el$14, "lineHeight", 36);
        setProp(_el$14, "color", 3435973887);
        setProp(_el$14, "style", heroTextStyles);
        insert(_el$14, () => props.item.overview);
        effect(_p$ => {
            var _v$13 = hasFocus() ? 1 : 0, _v$14 = props.item.src;
            _v$13 !== _p$.e && (_p$.e = setProp(_el$11, "alpha", _v$13, _p$.e));
            _v$14 !== _p$.t && (_p$.t = setProp(_el$12, "src", _v$14, _p$.t));
            return _p$;
        }, {
            e: void 0,
            t: void 0
        });
        return _el$10;
    })();
}

var typeToComponent = {
    Poster: Poster,
    Hero: Hero,
    PosterTitle: PosterTitle
};

var BlockStyle = {
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

function Block(props) {
    return (() => {
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
    })();
}

export { Hero as a, Thumbnail as c, List as d, DISPLAY_SIZE as i, TileRow as l, Block as n, Poster as o, Button as r, SHOW_TEXT as s, AssetPanel as t, TitleRow as u };