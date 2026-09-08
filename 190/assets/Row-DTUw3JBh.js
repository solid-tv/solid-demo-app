import { a as createElement, h as spread, m as setProp } from "./render-pt2tmeLm.js";

import { n as combineStyles } from "./utils-CpUHhvSN.js";

import { t as mergeProps } from "./mergeProps-Dy_Gh_AM.js";

import { c as defaultTransitionForward, d as navigableForwardFocus, i as scrollRow, o as defaultTransitionBack, t as chainFunctions, u as handleNavigation } from "./chainFunctions-D2e_4pwc.js";

var RowStyles = {
    display: "flex",
    gap: 30
};

function scrollToIndex(index, options) {
    const lastSelected = this.selected;
    var _this$children$index;
    (this.selected = index, scrollRow(index, this, void 0, lastSelected === index ? void 0 : lastSelected), 
    null == options ? void 0 : options.noFocus) || (null == (_this$children$index = this.children[index]) || _this$children$index.setFocus());
}

var onLeft = handleNavigation("left"), onRight = handleNavigation("right"), Row = props => {
    return _el$ = createElement("view"), setProp(_el$, "transitionLeft", defaultTransitionBack), 
    setProp(_el$, "transitionRight", defaultTransitionForward), spread(_el$, mergeProps(props, {
        get selected() {
            return props.selected || 0;
        },
        onLeft: chainFunctions(props.onLeft, onLeft),
        onRight: chainFunctions(props.onRight, onRight),
        forwardFocus: navigableForwardFocus,
        scrollToIndex: scrollToIndex,
        onLayout: props.selected ? chainFunctions(props.onLayout, scrollRow) : props.onLayout,
        onSelectedChanged: chainFunctions(props.onSelectedChanged, "none" !== props.scroll ? scrollRow : void 0),
        style: combineStyles(props.style, RowStyles)
    }), !1), _el$;
    var _el$;
};

export { Row as t };