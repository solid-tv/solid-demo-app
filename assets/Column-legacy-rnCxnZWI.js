(function() {
    System.register([ "./render-legacy-D7c8BTw7.js", "./utils-legacy-CzRdMI-Y.js", "./chainFunctions-legacy-BzIdGfsv.js" ], function(_export, _context) {
        "use strict";
        var createElement, mergeProps, spread, setProp, combineStyles, navigableForwardFocus, defaultTransitionUp, scrollColumn, defaultTransitionDown, chainFunctions, handleNavigation, ColumnStyles, onUp, onDown, Column;
        function scrollToIndex(index, options) {
            this.selected = index;
            scrollColumn(index, this);
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
                navigableForwardFocus = _chainFunctionsLegacy006Js.d;
                defaultTransitionUp = _chainFunctionsLegacy006Js.l;
                scrollColumn = _chainFunctionsLegacy006Js.r;
                defaultTransitionDown = _chainFunctionsLegacy006Js.s;
                chainFunctions = _chainFunctionsLegacy006Js.t;
                handleNavigation = _chainFunctionsLegacy006Js.u;
            } ],
            execute: function execute() {
                ColumnStyles = {
                    display: "flex",
                    flexDirection: "column",
                    gap: 30
                };
                onUp = handleNavigation("up");
                onDown = handleNavigation("down");
                _export("t", Column = function Column(props) {
                    return function() {
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
                    }();
                });
            }
        };
    });
})();