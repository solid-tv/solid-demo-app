System.register([ "./render-legacy-CxzEZ3fD.js", "./utils-legacy-CZtWUjwM.js", "./mergeProps-legacy-CtA2QWa1.js", "./chainFunctions-legacy-DM_YMDII.js" ], function(_export, _context) {
    var createElement, spread, setProp, combineStyles, mergeProps, navigableForwardFocus, defaultTransitionUp, scrollColumn, defaultTransitionDown, chainFunctions, handleNavigation, ColumnStyles, onUp, onDown;
    function scrollToIndex(index, options) {
        var _this$children$index, lastSelected = this.selected;
        this.selected = index, scrollColumn(index, this, void 0, lastSelected === index ? void 0 : lastSelected), 
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
            navigableForwardFocus = _chainFunctionsLegacy006Js.d, defaultTransitionUp = _chainFunctionsLegacy006Js.l, 
            scrollColumn = _chainFunctionsLegacy006Js.r, defaultTransitionDown = _chainFunctionsLegacy006Js.s, 
            chainFunctions = _chainFunctionsLegacy006Js.t, handleNavigation = _chainFunctionsLegacy006Js.u;
        } ],
        execute: function() {
            ColumnStyles = {
                display: "flex",
                flexDirection: "column",
                gap: 30
            }, onUp = handleNavigation("up"), onDown = handleNavigation("down"), _export("t", function(props) {
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
            });
        }
    };
});