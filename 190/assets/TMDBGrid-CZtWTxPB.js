import { H as createMemo, O as activeElement, S as hasFocus, V as createEffect, Z as on, _ as ElementNode, a as createElement, g as use, h as spread, i as createComponent, it as untrack, j as Index, l as insert, m as setProp, q as createSignal, s as createTextNode, u as insertNode } from "./render-pt2tmeLm.js";

import { t as mergeProps } from "./mergeProps-Dy_Gh_AM.js";

import { n as chainRefs, t as chainFunctions } from "./chainFunctions-D2e_4pwc.js";

import { t as ContentBlock } from "./ContentBlock-x5uJS8Av.js";

import { s as Poster } from "./components-BAwFHbW5.js";

import { n as setGlobalBackground } from "./state-BeIgwke9.js";

import { t as debounce } from "./dist-yNGSwGp1.js";

function Grid(props) {
    const [focusedIndex, setFocusedIndex] = createSignal(0);
    createEffect(() => {
        var _props$items;
        const currentIndex = untrack(focusedIndex);
        props.selected !== currentIndex && void 0 !== props.selected && (null == (_props$items = props.items) ? void 0 : _props$items.length) > props.selected && moveFocus(props.selected - currentIndex);
    });
    const itemWidth = () => {
        var _props$itemWidth;
        return null !== (_props$itemWidth = props.itemWidth) && void 0 !== _props$itemWidth ? _props$itemWidth : 300;
    }, itemHeight = () => {
        var _props$itemHeight;
        return null !== (_props$itemHeight = props.itemHeight) && void 0 !== _props$itemHeight ? _props$itemHeight : 300;
    }, columns = createMemo(() => props.columns || 4), totalWidth = createMemo(() => {
        var _props$itemOffset;
        return itemWidth() + (null !== (_props$itemOffset = props.itemOffset) && void 0 !== _props$itemOffset ? _props$itemOffset : 0);
    }), totalHeight = createMemo(() => {
        var _props$itemOffset2;
        return itemHeight() + (null !== (_props$itemOffset2 = props.itemOffset) && void 0 !== _props$itemOffset2 ? _props$itemOffset2 : 0);
    }), rows = createMemo(() => Math.ceil(props.items.length / columns()));
    function focus() {
        const focusedElm = gridRef.children[focusedIndex()];
        var _props$onSelectedChan;
        return focusedElm instanceof ElementNode && !hasFocus(focusedElm) && (focusedElm.setFocus(), 
        null == (_props$onSelectedChan = props.onSelectedChanged) || _props$onSelectedChan.call(gridRef, focusedIndex(), gridRef, focusedElm), 
        !0);
    }
    function moveFocus(delta) {
        if (!props.items || 0 === props.items.length) return !1;
        const newIndex = focusedIndex() + delta;
        if (newIndex >= 0 && newIndex < props.items.length) setFocusedIndex(newIndex); else {
            if (!props.looping) return !1;
            {
                const totalItems = props.items.length;
                if (delta < 0) {
                    const target = (totalItems - totalItems % columns() || totalItems - columns()) + focusedIndex() % columns();
                    setFocusedIndex(target < totalItems ? target : target - columns());
                } else setFocusedIndex(focusedIndex() % columns());
            }
        }
        return focus();
    }
    function handleHorizontalFocus(delta) {
        if (!props.items || 0 === props.items.length) return !1;
        const newIndex = focusedIndex() + delta, isWithinRow = Math.floor(newIndex / columns()) === Math.floor(focusedIndex() / columns());
        if (newIndex >= 0 && newIndex < props.items.length && isWithinRow) setFocusedIndex(newIndex); else {
            if (!props.looping) return !1;
            {
                const rowStart = Math.floor(focusedIndex() / columns()) * columns(), rowEnd = Math.min(rowStart + columns() - 1, props.items.length - 1);
                setFocusedIndex(delta > 0 ? newIndex > rowEnd ? rowStart : newIndex : newIndex < rowStart ? rowEnd : newIndex);
            }
        }
        return focus();
    }
    function scrollToIndex(index) {
        untrack(() => {
            if (!props.items || 0 === props.items.length) return;
            hasFocus(gridRef) || gridRef.setFocus();
            const clampedIndex = Math.max(0, Math.min(index, props.items.length - 1));
            setFocusedIndex(clampedIndex), queueMicrotask(focus);
        });
    }
    createEffect(() => {
        props.items && props.items.length > 0 && gridRef && hasFocus(gridRef) && queueMicrotask(focus);
    });
    const scrollY = createMemo(() => {
        var _props$y;
        return "none" === props.scroll ? null !== (_props$y = props.y) && void 0 !== _props$y ? _props$y : 0 : -Math.floor(focusedIndex() / columns()) * totalHeight() + (props.y || 0);
    });
    let gridRef;
    return _el$ = createElement("view"), "function" == typeof (_ref$ = chainRefs(el => gridRef = el, props.ref)) && use(_ref$, _el$), 
    spread(_el$, mergeProps(props, {
        transition: {
            y: !0
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
        strictBounds: !1,
        get y() {
            return scrollY();
        }
    }), !0), insert(_el$, createComponent(Index, {
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
    })), _el$;
    var _el$, _ref$;
}

var TMDB = props => {
    const [heroContent, setHeroContent] = createSignal({});
    let contentBlock, solidLogo, firstRun = !0;
    const delayedBackgrounds = debounce(setGlobalBackground, 800), delayedHero = debounce(content => setHeroContent(content || {}), 600);
    createEffect(on(activeElement, elm => {
        elm && (firstRun ? (elm.backdrop && setGlobalBackground(elm.backdrop), elm.heroContent && setHeroContent(elm.heroContent), 
        firstRun = !1) : (elm.backdrop && delayedBackgrounds(elm.backdrop), elm.heroContent && delayedHero(elm.heroContent)));
    }, {
        defer: !0
    }));
    const items = createMemo(() => props.data.rows.map(row => row.items()).flat());
    return [ (() => {
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
    })(), createComponent(ContentBlock, {
        ref(r$) {
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
        children: props => createComponent(Poster, props)
    })), _el$8) ];
    var _el$8;
};

export { TMDB as default };