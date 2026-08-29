import { a as createElement, h as spread, m as setProp } from "./render-p5jfA6sq.js";

import { n as combineStyles } from "./utils-CrGY5GbP.js";

import { t as mergeProps } from "./mergeProps-D_tyQnJu.js";

import { d as navigableForwardFocus, l as defaultTransitionUp, r as scrollColumn, s as defaultTransitionDown, t as chainFunctions, u as handleNavigation } from "./chainFunctions-DSip4oOs.js";

var ColumnStyles = {
    display: "flex",
    flexDirection: "column",
    gap: 30
};

function scrollToIndex(index, options) {
    const lastSelected = this.selected;
    this.selected = index;
    scrollColumn(index, this, void 0, lastSelected === index ? void 0 : lastSelected);
    if (!(options == null ? void 0 : options.noFocus)) {
        var _this$children$index;
        (_this$children$index = this.children[index]) == null || _this$children$index.setFocus();
    }
}

var onUp = handleNavigation("up");

var onDown = handleNavigation("down");

var Column = props => (() => {
    var _el$ = createElement("view");
    setProp(_el$, "transitionUp", defaultTransitionUp);
    setProp(_el$, "transitionDown", defaultTransitionDown);
    spread(_el$, mergeProps(props, {
        onUp: chainFunctions(props.onUp, onUp),
        onDown: chainFunctions(props.onDown, onDown),
        get selected() {
            return props.selected || 0;
        },
        scrollToIndex: scrollToIndex,
        forwardFocus: navigableForwardFocus,
        onLayout: props.selected ? chainFunctions(props.onLayout, scrollColumn) : props.onLayout,
        onSelectedChanged: chainFunctions(props.onSelectedChanged, props.scroll !== "none" ? scrollColumn : void 0),
        style: combineStyles(props.style, ColumnStyles)
    }), false);
    return _el$;
})();

export { Column as t };