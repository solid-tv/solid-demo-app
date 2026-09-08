System.register([ "./render-legacy-1jX59Y6X.js", "./utils-legacy-Dtp5ElZ_.js", "./mergeProps-legacy-8amjdkoE.js", "./chainFunctions-legacy-Bpapim5k.js" ], function(_export, _context) {
    var createElement, spread, setProp, combineStyles, mergeProps, defaultTransitionForward, navigableForwardFocus, scrollRow, defaultTransitionBack, chainFunctions, handleNavigation, RowStyles, onLeft, onRight;
    function scrollToIndex(index, options) {
        var _this$children$index, lastSelected = this.selected;
        this.selected = index, scrollRow(index, this, void 0, lastSelected === index ? void 0 : lastSelected), 
        (null == options ? void 0 : options.noFocus) || null == (_this$children$index = this.children[index]) || _this$children$index.setFocus();
    }
    return {
        setters: [ function(_renderLegacy002Js) {
            createElement = _renderLegacy002Js.a, spread = _renderLegacy002Js.h, setProp = _renderLegacy002Js.m;
        }, function(_utilsLegacy004Js) {
            combineStyles = _utilsLegacy004Js.n;
        }, function(_mergePropsLegacy005Js) {
            mergeProps = _mergePropsLegacy005Js.t;
        }, function(_chainFunctionsLegacy009Js) {
            defaultTransitionForward = _chainFunctionsLegacy009Js.c, navigableForwardFocus = _chainFunctionsLegacy009Js.d, 
            scrollRow = _chainFunctionsLegacy009Js.i, defaultTransitionBack = _chainFunctionsLegacy009Js.o, 
            chainFunctions = _chainFunctionsLegacy009Js.t, handleNavigation = _chainFunctionsLegacy009Js.u;
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