(function() {
    System.register([ "./render-legacy-BcGhlmZk.js", "./utils-legacy-I5pIoiB4.js", "./mergeProps-legacy-CW0lxKJl.js", "./chainFunctions-legacy-D8RSddZy.js" ], function(_export, _context) {
        "use strict";
        var createElement, spread, setProp, combineStyles, mergeProps, navigableForwardFocus, defaultTransitionUp, scrollColumn, defaultTransitionDown, chainFunctions, handleNavigation, ColumnStyles, onUp, onDown, Column;
        function scrollToIndex(index, options) {
            var lastSelected = this.selected;
            this.selected = index;
            scrollColumn(index, this, void 0, lastSelected === index ? void 0 : lastSelected);
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
                navigableForwardFocus = _chainFunctionsLegacy007Js.d;
                defaultTransitionUp = _chainFunctionsLegacy007Js.l;
                scrollColumn = _chainFunctionsLegacy007Js.r;
                defaultTransitionDown = _chainFunctionsLegacy007Js.s;
                chainFunctions = _chainFunctionsLegacy007Js.t;
                handleNavigation = _chainFunctionsLegacy007Js.u;
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
//# sourceMappingURL=Column-legacy-BHaIz8zK.js.map