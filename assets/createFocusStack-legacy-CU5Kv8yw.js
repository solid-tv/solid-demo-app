!function() {
    function _toConsumableArray(r) {
        return function(r) {
            if (Array.isArray(r)) return _arrayLikeToArray(r);
        }(r) || function(r) {
            if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);
        }(r) || _unsupportedIterableToArray(r) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }();
    }
    function _slicedToArray(r, e) {
        return function(r) {
            if (Array.isArray(r)) return r;
        }(r) || function(r, l) {
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
        }(r, e) || _unsupportedIterableToArray(r, e) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }();
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
    System.register([ "./render-legacy-1jX59Y6X.js" ], function(_export, _context) {
        var createContext, onCleanup, useContext, createComponent, createSignal, FocusStackContext;
        return _export({
            n: function() {
                var autoClear = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0], context = useContext(FocusStackContext);
                if (!context) throw new Error("useFocusStack must be used within a FocusStackProvider");
                return autoClear && onCleanup(function() {
                    setTimeout(function() {
                        return context.clearFocusStack();
                    }, 5);
                }), context;
            },
            t: function(props) {
                var _createSignal2 = _slicedToArray(createSignal([]), 2), setFocusStack = (_createSignal2[0], 
                _createSignal2[1]);
                return createComponent(FocusStackContext.Provider, {
                    value: {
                        storeFocus: function(element, prevElement) {
                            var elm = prevElement || element;
                            elm && setFocusStack(function(stack) {
                                return [].concat(_toConsumableArray(stack), [ elm ]);
                            });
                        },
                        restoreFocus: function() {
                            var wasFocused = !1;
                            return setFocusStack(function(stack) {
                                var prevElement = stack.pop();
                                return prevElement && "function" == typeof prevElement.setFocus && (prevElement.setFocus(), 
                                wasFocused = !0), _toConsumableArray(stack);
                            }), wasFocused;
                        },
                        clearFocusStack: function() {
                            setFocusStack([]);
                        }
                    },
                    get children() {
                        return props.children;
                    }
                });
            }
        }), {
            setters: [ function(_renderLegacy002Js) {
                createContext = _renderLegacy002Js.B, onCleanup = _renderLegacy002Js.Q, useContext = _renderLegacy002Js.at, 
                createComponent = _renderLegacy002Js.i, createSignal = _renderLegacy002Js.q;
            } ],
            execute: function() {
                FocusStackContext = createContext(void 0);
            }
        };
    });
}();