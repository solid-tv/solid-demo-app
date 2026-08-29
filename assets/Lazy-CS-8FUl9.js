import { $ as onCleanup, C as hasFocus, H as createEffect, J as createSignal, M as Index, U as createMemo, W as createRenderEffect, at as untrack, f as mergeProps, i as createComponent, m as scheduleTask, t as Dynamic } from "./render-o0EKBQJM.js";

import { n as chainRefs } from "./chainFunctions-PE67vVDV.js";

import { t as Column } from "./Column-CR7n6gHn.js";

import { t as Row } from "./Row-Dkp37IQW.js";

function createLazy(component, props, keyHandler) {
    const [offset, setOffset] = createSignal(props.sync ? props.upCount : 0);
    let preloadTimer = null;
    let navDelayTimer = null;
    let disposed = false;
    let viewRef;
    let itemLength = 0;
    onCleanup(() => {
        disposed = true;
        if (preloadTimer) clearTimeout(preloadTimer);
        if (navDelayTimer) clearTimeout(navDelayTimer);
    });
    const buffer = createMemo(() => {
        var _props$style;
        if (typeof props.buffer === "number") return props.buffer;
        const scroll = props.scroll || ((_props$style = props.style) == null ? void 0 : _props$style.scroll);
        if (!scroll || scroll === "auto" || scroll === "always" || scroll === "bounded") return props.upCount + 1;
        if (scroll === "center") return Math.ceil(props.upCount / 2) + 1;
        return 2;
    });
    createRenderEffect(() => setOffset(offset => Math.max(offset, (props.selected || 0) + buffer())));
    if (!props.sync || props.eagerLoad) createEffect(() => {
        if (!props.each) return;
        if (preloadTimer) {
            clearTimeout(preloadTimer);
            preloadTimer = null;
        }
        const loadItems = () => {
            if (disposed) return;
            const count = untrack(offset);
            if (count < props.upCount) {
                setOffset(count + 1);
                preloadTimer = setTimeout(loadItems, 16);
            } else if (props.eagerLoad) {
                const maxOffset = props.each ? props.each.length : 0;
                if (count >= maxOffset) return;
                setOffset(prev => Math.min(prev + 1, maxOffset));
                scheduleTask(loadItems);
            }
        };
        loadItems();
    });
    createEffect(() => {
        if (!Array.isArray(props.each)) {
            itemLength = 0;
            return;
        }
        const len = props.each.length;
        if (itemLength !== len) {
            itemLength = len;
            if (viewRef && !viewRef.noRefocus && hasFocus(viewRef)) {
                if (typeof viewRef.selected === "number" && viewRef.selected >= len) viewRef.selected = Math.max(0, len - 1);
                viewRef.setFocus();
            }
        }
    });
    const items = createMemo(() => Array.isArray(props.each) ? props.each.slice(0, offset()) : []);
    function lazyScrollToIndex(index, options) {
        setOffset(Math.max(index, 0) + buffer());
        queueMicrotask(() => viewRef.scrollToIndex(index, options));
    }
    const updateOffset = (_event, container) => {
        const maxOffset = props.each ? props.each.length : 0;
        const selected = container.selected || 0;
        const rendered = offset();
        if (rendered >= maxOffset || selected < rendered - buffer()) return;
        const bump = () => setOffset(prev => Math.min(prev + 1, maxOffset));
        if (!props.delay) {
            bump();
            return;
        }
        if (navDelayTimer) {
            clearTimeout(navDelayTimer);
            bump();
        }
        navDelayTimer = setTimeout(() => {
            bump();
            navDelayTimer = null;
        }, props.delay);
    };
    const handler = keyHandler(updateOffset);
    return createComponent(Dynamic, mergeProps(props, {
        component: component
    }, handler, {
        lazyScrollToIndex: lazyScrollToIndex,
        ref(r$) {
            var _ref$ = chainRefs(el => {
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