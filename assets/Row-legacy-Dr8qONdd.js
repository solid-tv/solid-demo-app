(function() {
    System.register([ "./render-legacy-D7c8BTw7.js", "./utils-legacy-CzRdMI-Y.js", "./chainFunctions-legacy-BzIdGfsv.js" ], function(_export, _context) {
        "use strict";
        var createElement, mergeProps, spread, setProp, combineStyles, defaultTransitionForward, navigableForwardFocus, scrollRow, defaultTransitionBack, chainFunctions, handleNavigation, RowStyles, onLeft, onRight, Row;
        function scrollToIndex(index, options) {
            this.selected = index;
            scrollRow(index, this);
            if (!(options == null ? void 0 : options.noFocus)) {
                var _this$children$index;
                (_this$children$index = this.children[index]) == null || _this$children$index.setFocus();
            }
        }
        return {
            setters: [ function(_renderLegacy001Js) {
                createElement = _renderLegacy001Js.a;
                mergeProps = _renderLegacy001Js.f;
                spread = _renderLegacy001Js.g;
                setProp = _renderLegacy001Js.h;
            }, function(_utilsLegacy002Js) {
                combineStyles = _utilsLegacy002Js.n;
            }, function(_chainFunctionsLegacy006Js) {
                defaultTransitionForward = _chainFunctionsLegacy006Js.c;
                navigableForwardFocus = _chainFunctionsLegacy006Js.d;
                scrollRow = _chainFunctionsLegacy006Js.i;
                defaultTransitionBack = _chainFunctionsLegacy006Js.o;
                chainFunctions = _chainFunctionsLegacy006Js.t;
                handleNavigation = _chainFunctionsLegacy006Js.u;
            } ],
            execute: function execute() {
                RowStyles = {
                    display: "flex",
                    gap: 30
                };
                onLeft = handleNavigation("left");
                onRight = handleNavigation("right");
                _export("t", Row = function Row(props) {
                    return function() {
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
                    }();
                });
            }
        };
    });
})();