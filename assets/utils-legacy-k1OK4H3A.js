(function() {
    function _typeof(o) {
        "@babel/helpers - typeof";
        return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
            return typeof o;
        } : function(o) {
            return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
        }, _typeof(o);
    }
    function ownKeys(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var o = Object.getOwnPropertySymbols(e);
            r && (o = o.filter(function(r) {
                return Object.getOwnPropertyDescriptor(e, r).enumerable;
            })), t.push.apply(t, o);
        }
        return t;
    }
    function _objectSpread(e) {
        for (var r = 1; r < arguments.length; r++) {
            var t = null != arguments[r] ? arguments[r] : {};
            r % 2 ? ownKeys(Object(t), !0).forEach(function(r) {
                _defineProperty(e, r, t[r]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r) {
                Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
            });
        }
        return e;
    }
    function _defineProperty(e, r, t) {
        return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
            value: t,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[r] = t, e;
    }
    function _toPropertyKey(t) {
        var i = _toPrimitive(t, "string");
        return "symbol" == _typeof(i) ? i : i + "";
    }
    function _toPrimitive(t, r) {
        if ("object" != _typeof(t) || !t) return t;
        var e = t[Symbol.toPrimitive];
        if (void 0 !== e) {
            var i = e.call(t, r || "default");
            if ("object" != _typeof(i)) return i;
            throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return ("string" === r ? String : Number)(t);
    }
    System.register([ "./render-legacy-C75jKPoW.js" ], function(_export, _context) {
        "use strict";
        var isInteger, clamp;
        function hexColor() {
            var color = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
            if (isInteger(color)) return color;
            if (typeof color === "string") {
                var hex;
                if (color.charCodeAt(0) === 35) hex = color.length === 7 ? color.slice(1) + "ff" : color.slice(1); else if (color.charCodeAt(0) === 48 && color.charCodeAt(1) === 120) hex = color.slice(2); else hex = color.length === 6 ? color + "ff" : color;
                return parseInt(hex, 16);
            }
            return 0;
        }
        function combineStyles(style1, style2) {
            if (!style1) return style2;
            if (!style2) return style1;
            return _objectSpread(_objectSpread({}, style2), style1);
        }
        function mod(n, m) {
            if (m === 0) return 0;
            return (n % m + m) % m;
        }
        _export({
            i: mod,
            n: combineStyles,
            r: hexColor
        });
        return {
            setters: [ function(_renderLegacy001Js) {
                isInteger = _renderLegacy001Js.E;
            } ],
            execute: function execute() {
                _export("t", clamp = function clamp(value, min, max) {
                    return min < max ? Math.min(Math.max(value, min), max) : Math.min(Math.max(value, max), min);
                });
            }
        };
    });
})();