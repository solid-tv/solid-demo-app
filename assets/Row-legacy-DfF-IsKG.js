System.register([ "./render-legacy-BxvcalZ-.js", "./utils-legacy-DO4k3ZyV.js", "./mergeProps-legacy-BTRRn5TW.js", "./chainFunctions-legacy-B56_1Kk7.js" ], function(_export, _context) {
    var createElement, spread, setProp, combineStyles, mergeProps, defaultTransitionForward, navigableForwardFocus, scrollRow, defaultTransitionBack, chainFunctions, handleNavigation, RowStyles, onLeft, onRight;
    function scrollToIndex(index, options) {
        var _this$children$index, lastSelected = this.selected;
        this.selected = index, scrollRow(index, this, void 0, lastSelected === index ? void 0 : lastSelected), 
        (null == options ? void 0 : options.noFocus) || null == (_this$children$index = this.children[index]) || _this$children$index.setFocus();
    }
    return {
        setters: [ function(_renderLegacy001Js) {
            createElement = _renderLegacy001Js.a, spread = _renderLegacy001Js.h, setProp = _renderLegacy001Js.m;
        }, function(_utilsLegacy002Js) {
            combineStyles = _utilsLegacy002Js.n;
        }, function(_mergePropsLegacy003Js) {
            mergeProps = _mergePropsLegacy003Js.t;
        }, function(_chainFunctionsLegacy006Js) {
            defaultTransitionForward = _chainFunctionsLegacy006Js.c, navigableForwardFocus = _chainFunctionsLegacy006Js.d, 
            scrollRow = _chainFunctionsLegacy006Js.i, defaultTransitionBack = _chainFunctionsLegacy006Js.o, 
            chainFunctions = _chainFunctionsLegacy006Js.t, handleNavigation = _chainFunctionsLegacy006Js.u;
        } ],
        execute: function() {
            RowStyles = {
                display: "flex",
                gap: 30
            }, onLeft = handleNavigation("left"), onRight = handleNavigation("right"), _export("t", function(props) {
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
            });
        }
    };
});