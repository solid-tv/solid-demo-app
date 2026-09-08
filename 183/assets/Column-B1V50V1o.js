import { a as createElement, h as spread, m as setProp } from "./render-BluGTzme.js";

import { n as combineStyles } from "./utils-Bg0bHO1m.js";

import { t as mergeProps } from "./mergeProps-DtfyMHzu.js";

import { d as navigableForwardFocus, l as defaultTransitionUp, r as scrollColumn, s as defaultTransitionDown, t as chainFunctions, u as handleNavigation } from "./chainFunctions-YbeUFJCe.js";

var ColumnStyles = {
    display: "flex",
    flexDirection: "column",
    gap: 30
};

function scrollToIndex(index, options) {
    const lastSelected = this.selected;
    var _this$children$index;
    (this.selected = index, scrollColumn(index, this, void 0, lastSelected === index ? void 0 : lastSelected), 
    null == options ? void 0 : options.noFocus) || (null == (_this$children$index = this.children[index]) || _this$children$index.setFocus());
}

var onUp = handleNavigation("up"), onDown = handleNavigation("down"), Column = props => {
    return _el$ = createElement("view"), setProp(_el$, "transitionUp", defaultTransitionUp), 
    setProp(_el$, "transitionDown", defaultTransitionDown), spread(_el$, mergeProps(props, {
        onUp: chainFunctions(props.onUp, onUp),
        onDown: chainFunctions(props.onDown, onDown),
        get selected() {
            return props.selected || 0;
        },
        scrollToIndex: scrollToIndex,
        forwardFocus: navigableForwardFocus,
        onLayout: props.selected ? chainFunctions(props.onLayout, scrollColumn) : props.onLayout,
        onSelectedChanged: chainFunctions(props.onSelectedChanged, "none" !== props.scroll ? scrollColumn : void 0),
        style: combineStyles(props.style, ColumnStyles)
    }), !1), _el$;
    var _el$;
};

export { Column as t };