System.register([ "./render-legacy-t4wUAioc.js", "./utils-legacy-B35bImB8.js", "./chainFunctions-legacy-iSOIOqjU.js" ], function(_export, _context) {
    var createElement, mergeProps, spread, setProp, combineStyles, navigableForwardFocus, defaultTransitionUp, scrollColumn, defaultTransitionDown, chainFunctions, handleNavigation, ColumnStyles, onUp, onDown;
    function scrollToIndex(index, options) {
        var _this$children$index, lastSelected = this.selected;
        this.selected = index, scrollColumn(index, this, void 0, lastSelected === index ? void 0 : lastSelected), 
        (null == options ? void 0 : options.noFocus) || null == (_this$children$index = this.children[index]) || _this$children$index.setFocus();
    }
    return {
        setters: [ function(_renderLegacy002Js) {
            createElement = _renderLegacy002Js.a, mergeProps = _renderLegacy002Js.f, spread = _renderLegacy002Js.g, 
            setProp = _renderLegacy002Js.h;
        }, function(_utilsLegacy004Js) {
            combineStyles = _utilsLegacy004Js.n;
        }, function(_chainFunctionsLegacy008Js) {
            navigableForwardFocus = _chainFunctionsLegacy008Js.d, defaultTransitionUp = _chainFunctionsLegacy008Js.l, 
            scrollColumn = _chainFunctionsLegacy008Js.r, defaultTransitionDown = _chainFunctionsLegacy008Js.s, 
            chainFunctions = _chainFunctionsLegacy008Js.t, handleNavigation = _chainFunctionsLegacy008Js.u;
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