!function() {
    function _toConsumableArray(r) {
        return function(r) {
            if (Array.isArray(r)) return _arrayLikeToArray(r);
        }(r) || function(r) {
            if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);
        }(r) || function(r, a) {
            if (r) {
                if ("string" == typeof r) return _arrayLikeToArray(r, a);
                var t = {}.toString.call(r).slice(8, -1);
                return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
            }
        }(r) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }();
    }
    function _arrayLikeToArray(r, a) {
        (null == a || a > r.length) && (a = r.length);
        for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
        return n;
    }
    System.register([ "./render-legacy-1jX59Y6X.js" ], function(_export, _context) {
        var mergeProps$1, SUPPORTS_PROXY;
        return {
            setters: [ function(_renderLegacy002Js) {
                mergeProps$1 = _renderLegacy002Js.X;
            } ],
            execute: function() {
                SUPPORTS_PROXY = "function" == typeof Proxy, _export("t", function() {
                    for (var _len = arguments.length, sources = new Array(_len), _key = 0; _key < _len; _key++) sources[_key] = arguments[_key];
                    return SUPPORTS_PROXY ? mergeProps$1.apply(void 0, sources) : mergeProps$1.apply(void 0, _toConsumableArray(sources.map(function(source) {
                        return "function" == typeof source ? function(source) {
                            var value = "function" == typeof source ? source() : source;
                            return null == value ? {} : value;
                        }(source) : source;
                    })));
                });
            }
        };
    });
}();