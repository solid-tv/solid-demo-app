import { $ as onCleanup, C as hasFocus, H as createEffect, J as createSignal, M as Index, U as createMemo, W as createRenderEffect, at as untrack, f as mergeProps, i as createComponent, m as scheduleTask, t as Dynamic } from "./render-UQXSDH2t.js";

import { n as chainRefs } from "./chainFunctions-C_8INzqg.js";

import { t as Column } from "./Column-B6a6wQRf.js";

import { t as Row } from "./Row-_H-XSkgI.js";

function createLazy(component, props, keyHandler) {
    const [offset, setOffset] = createSignal(props.sync ? props.upCount : 0);
    let viewRef, preloadTimer = null, navDelayTimer = null, disposed = !1, itemLength = 0;
    onCleanup(() => {
        disposed = !0, preloadTimer && clearTimeout(preloadTimer), navDelayTimer && clearTimeout(navDelayTimer);
    });
    const buffer = createMemo(() => {
        var _props$style;
        if ("number" == typeof props.buffer) return props.buffer;
        const scroll = props.scroll || (null == (_props$style = props.style) ? void 0 : _props$style.scroll);
        return scroll && "auto" !== scroll && "always" !== scroll && "bounded" !== scroll ? "center" === scroll ? Math.ceil(props.upCount / 2) + 1 : 2 : props.upCount + 1;
    });
    createRenderEffect(() => setOffset(offset => Math.max(offset, (props.selected || 0) + buffer()))), 
    props.sync && !props.eagerLoad || createEffect(() => {
        if (!props.each) return;
        preloadTimer && (clearTimeout(preloadTimer), preloadTimer = null);
        const loadItems = () => {
            if (disposed) return;
            const count = untrack(offset);
            if (count < props.upCount) setOffset(count + 1), preloadTimer = setTimeout(loadItems, 16); else if (props.eagerLoad) {
                const maxOffset = props.each ? props.each.length : 0;
                if (count >= maxOffset) return;
                setOffset(prev => Math.min(prev + 1, maxOffset)), scheduleTask(loadItems);
            }
        };
        loadItems();
    }), createEffect(() => {
        if (!Array.isArray(props.each)) return void (itemLength = 0);
        const len = props.each.length;
        itemLength !== len && (itemLength = len, viewRef && !viewRef.noRefocus && hasFocus(viewRef) && ("number" == typeof viewRef.selected && viewRef.selected >= len && (viewRef.selected = Math.max(0, len - 1)), 
        viewRef.setFocus()));
    });
    const items = createMemo(() => Array.isArray(props.each) ? props.each.slice(0, offset()) : []);
    const handler = keyHandler((_event, container) => {
        const maxOffset = props.each ? props.each.length : 0, selected = container.selected || 0, rendered = container.children.length;
        if (offset() >= maxOffset || selected < rendered - buffer()) return;
        const bump = () => setOffset(prev => Math.min(prev + 1, maxOffset));
        props.delay ? (navDelayTimer && (clearTimeout(navDelayTimer), bump()), navDelayTimer = setTimeout(() => {
            bump(), navDelayTimer = null;
        }, props.delay)) : bump();
    });
    return createComponent(Dynamic, mergeProps(props, {
        component: component
    }, handler, {
        lazyScrollToIndex: function(index, options) {
            setOffset(Math.max(index, 0) + buffer()), queueMicrotask(() => viewRef.scrollToIndex(index, options));
        },
        ref(r$) {
            var _ref$ = chainRefs(el => {
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

function LazyRow(props) {
    return createLazy(Row, props, updateOffset => ({
        onRight: updateOffset
    }));
}

function LazyColumn(props) {
    return createLazy(Column, props, updateOffset => ({
        onDown: updateOffset
    }));
}

export { LazyRow as n, LazyColumn as t };