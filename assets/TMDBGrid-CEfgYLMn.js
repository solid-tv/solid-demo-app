import { H as createMemo, O as activeElement, S as hasFocus, V as createEffect, Z as on, _ as ElementNode, a as createElement, g as use, h as spread, i as createComponent, it as untrack, j as Index, l as insert, m as setProp, q as createSignal, s as createTextNode, u as insertNode } from "./render-RHsi_cL1.js";

import { t as mergeProps } from "./mergeProps-BM8W0ufM.js";

import { n as chainRefs, t as chainFunctions } from "./chainFunctions-DEvkSaCc.js";

import { t as ContentBlock } from "./ContentBlock-BvXoenWN.js";

import { o as Poster } from "./components-CZEUi1dp.js";

import { n as setGlobalBackground } from "./state-DfqXE9aC.js";

import { t as debounce } from "./dist-C8QKmvmB.js";

function Grid(props) {
    const [focusedIndex, setFocusedIndex] = createSignal(0);
    const baseColumns = 4;
    createEffect(() => {
        var _props$items;
        const currentIndex = untrack(focusedIndex);
        if (props.selected === currentIndex) return;
        if (props.selected !== void 0 && ((_props$items = props.items) == null ? void 0 : _props$items.length) > props.selected) moveFocus(props.selected - currentIndex);
    });
    const itemWidth = () => {
        var _props$itemWidth;
        return (_props$itemWidth = props.itemWidth) !== null && _props$itemWidth !== void 0 ? _props$itemWidth : 300;
    };
    const itemHeight = () => {
        var _props$itemHeight;
        return (_props$itemHeight = props.itemHeight) !== null && _props$itemHeight !== void 0 ? _props$itemHeight : 300;
    };
    const columns = createMemo(() => props.columns || baseColumns);
    const totalWidth = createMemo(() => {
        var _props$itemOffset;
        return itemWidth() + ((_props$itemOffset = props.itemOffset) !== null && _props$itemOffset !== void 0 ? _props$itemOffset : 0);
    });
    const totalHeight = createMemo(() => {
        var _props$itemOffset2;
        return itemHeight() + ((_props$itemOffset2 = props.itemOffset) !== null && _props$itemOffset2 !== void 0 ? _props$itemOffset2 : 0);
    });
    const rows = createMemo(() => Math.ceil(props.items.length / columns()));
    function focus() {
        const focusedElm = gridRef.children[focusedIndex()];
        if (focusedElm instanceof ElementNode && !hasFocus(focusedElm)) {
            var _props$onSelectedChan;
            focusedElm.setFocus();
            (_props$onSelectedChan = props.onSelectedChanged) == null || _props$onSelectedChan.call(gridRef, focusedIndex(), gridRef, focusedElm);
            return true;
        }
        return false;
    }
    function moveFocus(delta) {
        if (!props.items || props.items.length === 0) return false;
        const newIndex = focusedIndex() + delta;
        if (newIndex >= 0 && newIndex < props.items.length) setFocusedIndex(newIndex); else if (props.looping) {
            const totalItems = props.items.length;
            if (delta < 0) {
                const target = (totalItems - totalItems % columns() || totalItems - columns()) + focusedIndex() % columns();
                setFocusedIndex(target < totalItems ? target : target - columns());
            } else setFocusedIndex(focusedIndex() % columns());
        } else return false;
        return focus();
    }
    function handleHorizontalFocus(delta) {
        if (!props.items || props.items.length === 0) return false;
        const newIndex = focusedIndex() + delta;
        const isWithinRow = Math.floor(newIndex / columns()) === Math.floor(focusedIndex() / columns());
        if (newIndex >= 0 && newIndex < props.items.length && isWithinRow) setFocusedIndex(newIndex); else if (props.looping) {
            const rowStart = Math.floor(focusedIndex() / columns()) * columns();
            const rowEnd = Math.min(rowStart + columns() - 1, props.items.length - 1);
            setFocusedIndex(delta > 0 ? newIndex > rowEnd ? rowStart : newIndex : newIndex < rowStart ? rowEnd : newIndex);
        } else return false;
        return focus();
    }
    createEffect(() => {
        if (props.items && props.items.length > 0 && gridRef && hasFocus(gridRef)) queueMicrotask(focus);
    });
    function scrollToIndex(index) {
        untrack(() => {
            if (!props.items || props.items.length === 0) return;
            if (!hasFocus(gridRef)) gridRef.setFocus();
            const clampedIndex = Math.max(0, Math.min(index, props.items.length - 1));
            setFocusedIndex(clampedIndex);
            queueMicrotask(focus);
        });
    }
    const scrollY = createMemo(() => {
        var _props$y;
        return props.scroll === "none" ? (_props$y = props.y) !== null && _props$y !== void 0 ? _props$y : 0 : -Math.floor(focusedIndex() / columns()) * totalHeight() + (props.y || 0);
    });
    let gridRef;
    return (() => {
        var _el$ = createElement("view");
        var _ref$ = chainRefs(el => gridRef = el, props.ref);
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
                return chainFunctions(props.onUp, () => moveFocus(-columns()));
            },
            get onDown() {
                return chainFunctions(props.onDown, () => moveFocus(columns()));
            },
            get onLeft() {
                return chainFunctions(props.onLeft, () => handleHorizontalFocus(-1));
            },
            get onRight() {
                return chainFunctions(props.onRight, () => handleHorizontalFocus(1));
            },
            get onFocus() {
                return chainFunctions(props.onFocus, () => handleHorizontalFocus(0));
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
            children: (item, index) => createComponent(props.children, {
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
            })
        }));
        return _el$;
    })();
}

var TMDB = props => {
    const [heroContent, setHeroContent] = createSignal({});
    let contentBlock, solidLogo, firstRun = true;
    const delayedBackgrounds = debounce(setGlobalBackground, 800);
    const delayedHero = debounce(content => setHeroContent(content || {}), 600);
    createEffect(on(activeElement, elm => {
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
    const items = createMemo(() => props.data.rows.map(row => row.items()).flat());
    return [ (() => {
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
        insertNode(_el$2, createTextNode(`Built with`));
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
        insertNode(_el$6, createTextNode(`This product uses the TMDB API but is not endorsed or certified by TMDB.`));
        setProp(_el$6, "x", 90);
        setProp(_el$6, "y", 110);
        setProp(_el$6, "contain", "width");
        setProp(_el$6, "width", 160);
        setProp(_el$6, "fontSize", 12);
        setProp(_el$6, "color", 4143380121);
        return _el$;
    })(), createComponent(ContentBlock, {
        ref(r$) {
            var _ref$2 = contentBlock;
            typeof _ref$2 === "function" ? _ref$2(r$) : contentBlock = r$;
        },
        y: 300,
        x: 162,
        get content() {
            return heroContent();
        }
    }), (() => {
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
            children: props => createComponent(Poster, props)
        }));
        return _el$8;
    })() ];
};

export { TMDB as default };