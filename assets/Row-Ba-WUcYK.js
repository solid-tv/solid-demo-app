import { a as createElement, h as spread, m as setProp } from "./render-CkIU5n3A.js";

import { n as combineStyles } from "./utils-Dk3Jkh7F.js";

import { t as mergeProps } from "./mergeProps-CwsREE-h.js";

import { c as defaultTransitionForward, d as navigableForwardFocus, i as scrollRow, o as defaultTransitionBack, t as chainFunctions, u as handleNavigation } from "./chainFunctions-DA9Du179.js";

var RowStyles = {
    display: "flex",
    gap: 30
};

function scrollToIndex(index, options) {
    const lastSelected = this.selected;
    this.selected = index;
    scrollRow(index, this, void 0, lastSelected === index ? void 0 : lastSelected);
    if (!(options == null ? void 0 : options.noFocus)) {
        var _this$children$index;
        (_this$children$index = this.children[index]) == null || _this$children$index.setFocus();
    }
}

var onLeft = handleNavigation("left");

var onRight = handleNavigation("right");

var Row = props => (() => {
    var _el$ = createElement("view");
    setProp(_el$, "transitionLeft", defaultTransitionBack);
    setProp(_el$, "transitionRight", defaultTransitionForward);
    spread(_el$, mergeProps(props, {
        get selected() {
            return props.selected || 0;
        },
        onLeft: chainFunctions(props.onLeft, onLeft),
        onRight: chainFunctions(props.onRight, onRight),
        forwardFocus: navigableForwardFocus,
        scrollToIndex: scrollToIndex,
        onLayout: props.selected ? chainFunctions(props.onLayout, scrollRow) : props.onLayout,
        onSelectedChanged: chainFunctions(props.onSelectedChanged, props.scroll !== "none" ? scrollRow : void 0),
        style: combineStyles(props.style, RowStyles)
    }), false);
    return _el$;
})();

export { Row as t };
//# sourceMappingURL=Row-Ba-WUcYK.js.map