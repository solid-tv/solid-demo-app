import { $ as onCleanup, A as $TRACK, C as hasFocus, H as createEffect, J as createSignal, K as createRoot, L as batch, M as Index, O as Config, P as Show, Q as on, U as createMemo, _ as use, a as createElement, at as untrack, c as effect, f as mergeProps, g as spread, h as setProp, i as createComponent, l as insert, t as Dynamic, u as insertNode, v as ElementNode } from "./render-UQXSDH2t.js";

import { i as mod, n as combineStyles, t as clamp } from "./utils-9p-Z_DoP.js";

import { c as defaultTransitionForward, d as navigableForwardFocus, l as defaultTransitionUp, n as chainRefs, o as defaultTransitionBack, s as defaultTransitionDown, t as chainFunctions, u as handleNavigation } from "./chainFunctions-C_8INzqg.js";

import { t as Column } from "./Column-B6a6wQRf.js";

import { t as Row } from "./Row-_H-XSkgI.js";

import { n as buttonStyles, r as styles_default } from "./styles-xHyKpT0b.js";

function disposeList(list) {
    for (let i = 0; i < list.length; i++) {
        var _list$i;
        null == (_list$i = list[i]) || _list$i.disposer();
    }
}

function listArray(list, mapFn, options = {}) {
    const items = [];
    let unusedItems, i, j, item, oldValue, oldIndex, newValue, fallback, fallbackDisposer, mapped = [];
    return onCleanup(() => {
        null == fallbackDisposer || fallbackDisposer(), fallbackDisposer = void 0, disposeList(items);
    }), () => {
        const newItems = list() || [];
        return newItems[$TRACK], untrack(() => {
            newItems.length > 0 && fallbackDisposer && (fallbackDisposer(), fallbackDisposer = void 0, 
            fallback = void 0);
            const temp = new Array(newItems.length);
            for (unusedItems = items.length, j = unusedItems - 1; j >= 0; --j) item = items[j], 
            oldIndex = item.index, oldIndex < newItems.length && newItems[oldIndex] === item.value && (temp[oldIndex] = mapped[oldIndex], 
            --unusedItems !== j && (items[j] = items[unusedItems], items[unusedItems] = item));
            const matcher = new Map, matchedItems = new Uint8Array(unusedItems);
            for (j = unusedItems - 1; j >= 0; --j) {
                var _matcher$get$push, _matcher$get;
                oldValue = items[j].value, null !== (_matcher$get$push = null == (_matcher$get = matcher.get(oldValue)) ? void 0 : _matcher$get.push(j)) && void 0 !== _matcher$get$push || matcher.set(oldValue, [ j ]);
            }
            for (i = 0; i < newItems.length; ++i) {
                var _matcher$get$pop, _matcher$get2, _item$indexSetter;
                if (!(i in temp)) if (newValue = newItems[i], j = null !== (_matcher$get$pop = null == (_matcher$get2 = matcher.get(newValue)) ? void 0 : _matcher$get2.pop()) && void 0 !== _matcher$get$pop ? _matcher$get$pop : -1, 
                j >= 0) item = items[j], oldIndex = item.index, temp[i] = mapped[oldIndex], item.index = i, 
                null == (_item$indexSetter = item.indexSetter) || _item$indexSetter.call(item, i), 
                matchedItems[j] = 1;
            }
            for (j = matchedItems.length - 1; j >= 0; --j) matchedItems[j] && --unusedItems !== j && (item = items[j], 
            items[j] = items[unusedItems], items[unusedItems] = item);
            for (j = unusedItems - 1; j >= 0; --j) {
                var _item$valueSetter;
                if (item = items[j], oldIndex = item.index, !(oldIndex in temp) && oldIndex < newItems.length) temp[oldIndex] = mapped[oldIndex], 
                newValue = newItems[oldIndex], item.value = newValue, null == (_item$valueSetter = item.valueSetter) || _item$valueSetter.call(item, newValueGetter), 
                --unusedItems !== j && (items[j] = items[unusedItems], items[unusedItems] = item);
            }
            for (i = 0; i < newItems.length; ++i) i in temp || (newValue = newItems[i], unusedItems > 0 ? (item = items[--unusedItems], 
            temp[i] = mapped[item.index], batch(changeBoth)) : temp[i] = createRoot(mapper));
            return disposeList(items.splice(0, unusedItems)), 0 === newItems.length && options.fallback ? (fallbackDisposer || (fallback = [ createRoot(d => (fallbackDisposer = d, 
            options.fallback())) ]), fallback) : mapped = temp;
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
        const t = {
            value: newValue,
            index: i,
            disposer: disposer
        };
        items.push(t);
        let sV = () => ([sV, t.valueSetter] = createSignal(t.value), sV()), sI = () => ([sI, t.indexSetter] = createSignal(t.index), 
        sI());
        return mapFn(() => sV(), () => sI());
    }
}

function List(props) {
    const fallback = "fallback" in props && {
        fallback: () => props.fallback
    };
    return createMemo(listArray(() => props.each, props.children, fallback || void 0));
}

function createVirtual(component, props, keyHandlers) {
    var _props$selected, _props$selected2;
    const isRow = component === Row, axis = isRow ? "x" : "y", [cursor, setCursor] = createSignal(null !== (_props$selected = props.selected) && void 0 !== _props$selected ? _props$selected : 0), bufferSize = createMemo(() => props.bufferSize || 2), scrollIndex = createMemo(() => props.scrollIndex || 0), items = createMemo(() => props.each || []), itemCount = createMemo(() => items().length), scrollType = createMemo(() => props.scroll || "auto"), initiallyLocked = !!props.skipInitialWrap && !!props.wrap && 0 === (null !== (_props$selected2 = props.selected) && void 0 !== _props$selected2 ? _props$selected2 : 0), [wrapUnlocked, setWrapUnlocked] = createSignal(!initiallyLocked), effectiveWrap = createMemo(() => !!props.wrap && wrapUnlocked());
    let cachedScaledSize, targetPosition, cachedAnimationController;
    const uniformSize = createMemo(() => !1 !== props.uniformSize), [slice, setSlice] = createSignal({
        start: 0,
        slice: [],
        selected: 0,
        delta: 0,
        shiftBy: 0,
        atStart: !0,
        cursor: 0
    });
    function computeSize(selected = 0) {
        if (uniformSize() && cachedScaledSize) return cachedScaledSize;
        if (viewRef) {
            const gap = viewRef.gap || 0, dimension = isRow ? "width" : "height", prevSelectedChild = viewRef.children[selected];
            if (prevSelectedChild instanceof ElementNode) {
                var _prevSelectedChild$st, _ref, _focusStyle$scale;
                const itemSize = prevSelectedChild[dimension] || 0, focusStyle = null == (_prevSelectedChild$st = prevSelectedChild.style) ? void 0 : _prevSelectedChild$st.focus, scale = null !== (_ref = null !== (_focusStyle$scale = null == focusStyle ? void 0 : focusStyle.scale) && void 0 !== _focusStyle$scale ? _focusStyle$scale : prevSelectedChild.scale) && void 0 !== _ref ? _ref : 1, scaledSize = itemSize * (props.factorScale ? scale : 1) + gap;
                return cachedScaledSize = scaledSize, scaledSize;
            }
        }
        return 0;
    }
    function computeSlice(c, delta, prev) {
        const total = itemCount();
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
        const length = props.displaySize + bufferSize();
        let start = prev.start, selected = prev.selected, atStart = prev.atStart, shiftBy = -delta;
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
            selected = 1, atStart = !1) : prev.start >= total - props.displaySize ? (start = prev.start, 
            selected = c - start, shiftBy = 0) : (start = prev.start + 1, selected = Math.max(prev.selected, scrollIndex() + 1)) : c > 0 ? (start = Math.min(c - (scrollIndex() || 1), total - props.displaySize - bufferSize()), 
            selected = Math.max(scrollIndex() || 1, c - start), shiftBy = total - c < 3 ? c - total : -1, 
            atStart = !1) : c !== prev.cursor ? (start = c, 0 === c && (atStart = !0, selected = 0)) : (start = prev.start, 
            selected = prev.selected);
            break;

          case "edge":
            {
                const startScrolling = Math.max(1, props.displaySize + (atStart ? -1 : 0));
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
            }

          default:
            start = 0, selected = c, shiftBy = 0;
        }
        let newSlice = prev.slice;
        start === prev.start && 0 !== newSlice.length || (newSlice = effectiveWrap() ? Array.from({
            length: length
        }, (_, i) => items()[mod(start + i, total)]) : items().slice(start, start + length));
        const state = {
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
    let viewRef;
    function scrollToIndex(index) {
        untrack(() => {
            0 !== itemCount() && (lastNavTime = performance.now(), void 0 !== originalPosition && (viewRef.lng[axis] = originalPosition, 
            targetPosition = originalPosition), hasFocus(viewRef) || viewRef.setFocus(), updateSelected([ clamp(index, 0, itemCount() - 1) ]));
        });
    }
    let originalPosition, lastNavTime = 0;
    function getAdaptiveDuration(duration = 250) {
        const now = performance.now(), delta = now - lastNavTime;
        return lastNavTime = now, delta < duration ? delta : duration;
    }
    const onSelectedChanged = function(_idx, elm, _active, _lastIdx) {
        var _originalPosition, _elm$children$length, _elm$children, _targetPosition;
        const idx = _idx, lastIdx = _lastIdx || 0, active = _active, noChange = idx === lastIdx, total = itemCount();
        if (originalPosition = null !== (_originalPosition = originalPosition) && void 0 !== _originalPosition ? _originalPosition : elm[axis], 
        props.onSelectedChanged && props.onSelectedChanged.call(this, idx, this, active, lastIdx), 
        noChange) return;
        const rawDelta = idx - (null != lastIdx ? lastIdx : 0), windowLen = null !== (_elm$children$length = null == elm || null == (_elm$children = elm.children) ? void 0 : _elm$children.length) && void 0 !== _elm$children$length ? _elm$children$length : props.displaySize + bufferSize(), delta = effectiveWrap() ? function(delta, windowLen) {
            if (!windowLen) return 0;
            const half = windowLen / 2;
            return delta > half ? delta - windowLen : delta < -half ? delta + windowLen : delta;
        }(rawDelta, windowLen) : rawDelta;
        setCursor(c => {
            const next = c + delta;
            return effectiveWrap() ? mod(next, total) : clamp(next, 0, total - 1);
        });
        const newState = computeSlice(cursor(), delta, slice());
        var _props$onEndReached;
        (setSlice(newState), elm.selected = newState.selected, !wrapUnlocked() && rawDelta > 0 && setWrapUnlocked(!0), 
        void 0 !== props.onEndReachedThreshold && cursor() >= itemCount() - props.onEndReachedThreshold) && (null == (_props$onEndReached = props.onEndReached) || _props$onEndReached.call(props));
        if (0 === newState.shiftBy) return;
        const prevChildPos = (null !== (_targetPosition = targetPosition) && void 0 !== _targetPosition ? _targetPosition : this[axis]) + active[axis];
        queueMicrotask(() => {
            elm.updateLayout();
            const childSize = computeSize(slice().selected);
            var _this$animationSettin;
            (cachedAnimationController && "running" === cachedAnimationController.state && cachedAnimationController.stop(), 
            Config.animationsEnabled) ? (this.lng[axis] = prevChildPos - active[axis], targetPosition = this.lng[axis] + childSize * slice().shiftBy, 
            cachedAnimationController = this.animate({
                [axis]: targetPosition
            }, {
                ...this.animationSettings,
                duration: getAdaptiveDuration(null == (_this$animationSettin = this.animationSettings) ? void 0 : _this$animationSettin.duration)
            }).start()) : this.lng[axis] = prevChildPos - active[axis] + childSize * slice().shiftBy;
        });
    }, updateSelected = ([sel, _items]) => {
        if (!viewRef || void 0 === sel || 0 === itemCount()) return;
        const safeSel = clamp(sel, 0, itemCount() - 1), item = items()[safeSel];
        setCursor(safeSel);
        const newState = computeSlice(safeSel, 0, slice());
        setSlice(newState), queueMicrotask(() => {
            var _originalPosition2, _targetPosition2;
            viewRef.updateLayout();
            const activeIndex = viewRef.children.findIndex(x => x.item === item);
            if (-1 === activeIndex) return;
            var _viewRef$children$act;
            (viewRef.selected = activeIndex, hasFocus(viewRef)) && (null == (_viewRef$children$act = viewRef.children[activeIndex]) || _viewRef$children$act.setFocus());
            if (0 === newState.shiftBy) return;
            const childSize = computeSize(slice().selected);
            originalPosition = null !== (_originalPosition2 = originalPosition) && void 0 !== _originalPosition2 ? _originalPosition2 : viewRef.lng[axis], 
            targetPosition = null !== (_targetPosition2 = targetPosition) && void 0 !== _targetPosition2 ? _targetPosition2 : viewRef.lng[axis], 
            viewRef.lng[axis] = (viewRef.lng[axis] || 0) + -1 * childSize;
        });
    };
    let doOnce = initiallyLocked;
    return createEffect(on([ effectiveWrap, items ], () => {
        viewRef && 0 !== itemCount() && effectiveWrap() && !doOnce && (doOnce = !0, itemCount() <= props.displaySize ? queueMicrotask(() => {
            originalPosition = viewRef.lng[axis], targetPosition = viewRef.lng[axis];
        }) : queueMicrotask(() => {
            const childSize = computeSize(slice().selected);
            viewRef.lng[axis] = (viewRef.lng[axis] || 0) + -1 * childSize, originalPosition = viewRef.lng[axis], 
            targetPosition = viewRef.lng[axis];
        }));
    })), createEffect(on([ () => props.selected, items ], updateSelected)), createEffect(on(items, () => {
        if (!viewRef) return;
        let c = cursor();
        c >= itemCount() && (c = Math.max(0, itemCount() - 1), setCursor(c));
        const newState = computeSlice(c, 0, slice());
        setSlice(newState), viewRef.selected = newState.selected;
    })), _el$ = createElement("view"), "function" == typeof (_ref$ = chainRefs(el => {
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
    var _el$, _ref$;
}

function VirtualRow(props) {
    return createVirtual(Row, props, {
        onLeft: chainFunctions(props.onLeft, handleNavigation("left")),
        onRight: chainFunctions(props.onRight, handleNavigation("right"))
    });
}

var SHOW_TEXT = "undefined" == typeof window || "true" !== new URLSearchParams(window.location.search).get("noText"), DISPLAY_SIZE = (() => {
    if ("undefined" == typeof window) return 8;
    const raw = new URLSearchParams(window.location.search).get("displaySize");
    if (null === raw) return 8;
    const parsed = parseInt(raw, 10);
    return isNaN(parsed) || parsed < 1 ? 8 : parsed;
})(), POSTER_SCALE = (() => {
    if ("undefined" == typeof window) return 1;
    const raw = new URLSearchParams(window.location.search).get("posterScale");
    if (null === raw) return 1;
    const parsed = parseFloat(raw);
    return isNaN(parsed) || parsed <= 0 ? 1 : parsed;
})(), scaled = value => Math.round(value * POSTER_SCALE);

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
    return _el$3 = createElement("view"), _el$4 = createElement("text"), insertNode(_el$3, _el$4), 
    spread(_el$3, mergeProps(props, {
        get announce() {
            return [ props.children, "button" ];
        },
        forwardStates: !0,
        get style() {
            return buttonStyles.container;
        }
    }), !0), insert(_el$4, () => props.children || props.title), effect(_$p => setProp(_el$4, "style", buttonStyles.text, _$p)), 
    _el$3;
    var _el$3, _el$4;
}

function AssetPanel(props) {
    let panelRef, actionRef;
    return createEffect(() => {
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
    }), (() => {
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
        insert(_el$6, () => {
            var _props$item;
            return null == (_props$item = props.item) ? void 0 : _props$item.title;
        }), insert(_el$5, createComponent(Column, {
            ref(r$) {
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
    })();
}

var heroTransition = {
    duration: 300,
    easing: "cubic-bezier(0.20, 1.00, 0.80, 1.00)"
}, titleRowStyles = {
    fontFamily: "Raleway",
    fontSize: scaled(24),
    height: scaled(32),
    lineHeight: scaled(32)
};

function TitleRow(props) {
    return _el$7 = createElement("view"), setProp(_el$7, "forwardFocus", 1), insert(_el$7, createComponent(Show, {
        when: SHOW_TEXT,
        get children() {
            var _el$8 = createElement("text");
            return setProp(_el$8, "skipFocus", !0), setProp(_el$8, "style", titleRowStyles), 
            insert(_el$8, () => props.title), _el$8;
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
        children: (item, index) => createComponent(Dynamic, {
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
        })
    }), null), effect(_p$ => {
        var _v$ = void 0 === props.height ? void 0 : scaled(props.height), _v$2 = scaled(30);
        return _v$ !== _p$.e && (_p$.e = setProp(_el$7, "height", _v$, _p$.e)), _v$2 !== _p$.t && (_p$.t = setProp(_el$7, "marginTop", _v$2, _p$.t)), 
        _p$;
    }, {
        e: void 0,
        t: void 0
    }), _el$7;
    var _el$7;
}

var posterStyles = {
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
};

function Poster(props) {
    return _el$9 = createElement("view"), setProp(_el$9, "onFail", node => node.src = "./assets/fallback.png"), 
    setProp(_el$9, "style", posterStyles), effect(_p$ => {
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

var posterTitleStyles = {
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
};

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
}, heroTextStyles = {
    fontFamily: "Raleway",
    contain: "width"
};

function Hero(props) {
    const [hasFocus, setHasFocus] = createSignal(!1);
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
    setProp(_el$13, "style", heroTextStyles), insert(_el$13, () => props.item.title), 
    setProp(_el$14, "y", 620), setProp(_el$14, "x", 60), setProp(_el$14, "fontSize", 21), 
    setProp(_el$14, "width", 1e3), setProp(_el$14, "maxLines", 2), setProp(_el$14, "lineHeight", 36), 
    setProp(_el$14, "color", 3435973887), setProp(_el$14, "style", heroTextStyles), 
    insert(_el$14, () => props.item.overview), effect(_p$ => {
        var _v$15 = hasFocus() ? 1 : 0, _v$16 = props.item.src;
        return _v$15 !== _p$.e && (_p$.e = setProp(_el$11, "alpha", _v$15, _p$.e)), _v$16 !== _p$.t && (_p$.t = setProp(_el$12, "src", _v$16, _p$.t)), 
        _p$;
    }, {
        e: void 0,
        t: void 0
    }), _el$10;
    var _el$10, _el$11, _el$12, _el$13, _el$14;
}

var typeToComponent = {
    Poster: Poster,
    Hero: Hero,
    PosterTitle: function(props) {
        return _el$0 = createElement("view"), setProp(_el$0, "onFail", node => node.src = "./assets/fallback.png"), 
        setProp(_el$0, "style", posterStyles), setProp(_el$0, "forwardStates", !0), insert(_el$0, createComponent(Show, {
            when: SHOW_TEXT,
            get children() {
                var _el$1 = createElement("text");
                return setProp(_el$1, "style", posterTitleStyles), insert(_el$1, () => {
                    var _props$item5;
                    return null == (_props$item5 = props.item) ? void 0 : _props$item5.title;
                }), _el$1;
            }
        })), effect(_p$ => {
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

function Block(props) {
    return _el$15 = createElement("view"), spread(_el$15, mergeProps(props, {
        width: 100,
        height: 100,
        style: BlockStyle,
        get color() {
            return props.color || 3772834047;
        }
    }), !1), _el$15;
    var _el$15;
}

export { Hero as a, SHOW_TEXT as c, TitleRow as d, scaled as f, DISPLAY_SIZE as i, Thumbnail as l, Block as n, POSTER_SCALE as o, List as p, Button as r, Poster as s, AssetPanel as t, TileRow as u };