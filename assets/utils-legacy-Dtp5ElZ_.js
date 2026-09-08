!function() {
    function _typeof(o) {
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
        return (r = function(t) {
            var i = function(t, r) {
                if ("object" != _typeof(t) || !t) return t;
                var e = t[Symbol.toPrimitive];
                if (void 0 !== e) {
                    var i = e.call(t, r || "default");
                    if ("object" != _typeof(i)) return i;
                    throw new TypeError("@@toPrimitive must return a primitive value.");
                }
                return ("string" === r ? String : Number)(t);
            }(t, "string");
            return "symbol" == _typeof(i) ? i : i + "";
        }(r)) in e ? Object.defineProperty(e, r, {
            value: t,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[r] = t, e;
    }
    System.register([ "./render-legacy-1jX59Y6X.js" ], function(_export, _context) {
        var isInteger;
        return _export({
            i: function(n, m) {
                return 0 === m ? 0 : (n % m + m) % m;
            },
            n: function(style1, style2) {
                return style1 ? style2 ? _objectSpread(_objectSpread({}, style2), style1) : style1 : style2;
            },
            r: function() {
                var hex, color = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                return isInteger(color) ? color : "string" == typeof color ? (hex = 35 === color.charCodeAt(0) ? 7 === color.length ? color.slice(1) + "ff" : color.slice(1) : 48 === color.charCodeAt(0) && 120 === color.charCodeAt(1) ? color.slice(2) : 6 === color.length ? color + "ff" : color, 
                parseInt(hex, 16)) : 0;
            }
        }), {
            setters: [ function(_renderLegacy002Js) {
                isInteger = _renderLegacy002Js.E;
            } ],
            execute: function() {
                _export("t", function(value, min, max) {
                    return min < max ? Math.min(Math.max(value, min), max) : Math.min(Math.max(value, max), min);
                });
            }
        };
    });
}();