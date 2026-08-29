(function() {
    function _toConsumableArray(r) {
        return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread();
    }
    function _nonIterableSpread() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    function _iterableToArray(r) {
        if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);
    }
    function _arrayWithoutHoles(r) {
        if (Array.isArray(r)) return _arrayLikeToArray(r);
    }
    function _slicedToArray(r, e) {
        return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();
    }
    function _nonIterableRest() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    function _unsupportedIterableToArray(r, a) {
        if (r) {
            if ("string" == typeof r) return _arrayLikeToArray(r, a);
            var t = {}.toString.call(r).slice(8, -1);
            return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
        }
    }
    function _arrayLikeToArray(r, a) {
        (null == a || a > r.length) && (a = r.length);
        for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
        return n;
    }
    function _iterableToArrayLimit(r, l) {
        var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
        if (null != t) {
            var e, n, i, u, a = [], f = !0, o = !1;
            try {
                if (i = (t = t.call(r)).next, 0 === l) {
                    if (Object(t) !== t) return;
                    f = !1;
                } else for (;!(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0) ;
            } catch (r) {
                o = !0, n = r;
            } finally {
                try {
                    if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;
                } finally {
                    if (o) throw n;
                }
            }
            return a;
        }
    }
    function _arrayWithHoles(r) {
        if (Array.isArray(r)) return r;
    }
    System.register([ "./render-legacy-Dr9NQFGF.js" ], function(_export, _context) {
        "use strict";
        var createContext, onCleanup, useContext, createComponent, createSignal, FocusStackContext;
        function FocusStackProvider(props) {
            var _createSignal = createSignal([]), _createSignal2 = _slicedToArray(_createSignal, 2), _focusStack = _createSignal2[0], setFocusStack = _createSignal2[1];
            function storeFocus(element, prevElement) {
                var elm = prevElement || element;
                if (elm) setFocusStack(function(stack) {
                    return [].concat(_toConsumableArray(stack), [ elm ]);
                });
            }
            function restoreFocus() {
                var wasFocused = false;
                setFocusStack(function(stack) {
                    var prevElement = stack.pop();
                    if (prevElement && typeof prevElement.setFocus === "function") {
                        prevElement.setFocus();
                        wasFocused = true;
                    }
                    return _toConsumableArray(stack);
                });
                return wasFocused;
            }
            function clearFocusStack() {
                setFocusStack([]);
            }
            return createComponent(FocusStackContext.Provider, {
                value: {
                    storeFocus: storeFocus,
                    restoreFocus: restoreFocus,
                    clearFocusStack: clearFocusStack
                },
                get children() {
                    return props.children;
                }
            });
        }
        function useFocusStack() {
            var autoClear = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
            var context = useContext(FocusStackContext);
            if (!context) throw new Error("useFocusStack must be used within a FocusStackProvider");
            if (autoClear) onCleanup(function() {
                setTimeout(function() {
                    return context.clearFocusStack();
                }, 5);
            });
            return context;
        }
        _export({
            n: useFocusStack,
            t: FocusStackProvider
        });
        return {
            setters: [ function(_renderLegacy001Js) {
                createContext = _renderLegacy001Js.B;
                onCleanup = _renderLegacy001Js.Q;
                useContext = _renderLegacy001Js.at;
                createComponent = _renderLegacy001Js.i;
                createSignal = _renderLegacy001Js.q;
            } ],
            execute: function execute() {
                FocusStackContext = createContext(void 0);
            }
        };
    });
})();