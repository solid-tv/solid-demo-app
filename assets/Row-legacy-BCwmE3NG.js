(function() {
    System.register([ "./render-legacy-BkFHmMEJ.js", "./utils-legacy-mXgqwEnV.js", "./mergeProps-legacy-C8INvfCm.js", "./chainFunctions-legacy-dVfRmE7u.js" ], function(_export, _context) {
        "use strict";
        var createElement, spread, setProp, combineStyles, mergeProps, defaultTransitionForward, navigableForwardFocus, scrollRow, defaultTransitionBack, chainFunctions, handleNavigation, RowStyles, onLeft, onRight, Row;
        function scrollToIndex(index, options) {
            var lastSelected = this.selected;
            this.selected = index;
            scrollRow(index, this, void 0, lastSelected === index ? void 0 : lastSelected);
            if (!(options == null ? void 0 : options.noFocus)) {
                var _this$children$index;
                (_this$children$index = this.children[index]) == null || _this$children$index.setFocus();
            }
        }
        return {
            setters: [ function(_renderLegacy001Js) {
                createElement = _renderLegacy001Js.a;
                spread = _renderLegacy001Js.h;
                setProp = _renderLegacy001Js.m;
            }, function(_utilsLegacy002Js) {
                combineStyles = _utilsLegacy002Js.n;
            }, function(_mergePropsLegacy003Js) {
                mergeProps = _mergePropsLegacy003Js.t;
            }, function(_chainFunctionsLegacy007Js) {
                defaultTransitionForward = _chainFunctionsLegacy007Js.c;
                navigableForwardFocus = _chainFunctionsLegacy007Js.d;
                scrollRow = _chainFunctionsLegacy007Js.i;
                defaultTransitionBack = _chainFunctionsLegacy007Js.o;
                chainFunctions = _chainFunctionsLegacy007Js.t;
                handleNavigation = _chainFunctionsLegacy007Js.u;
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