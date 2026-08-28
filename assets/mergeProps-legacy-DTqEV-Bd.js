(function() {
    function _toConsumableArray(r) {
        return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread();
    }
    function _nonIterableSpread() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    function _unsupportedIterableToArray(r, a) {
        if (r) {
            if ("string" == typeof r) return _arrayLikeToArray(r, a);
            var t = {}.toString.call(r).slice(8, -1);
            return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
        }
    }
    function _iterableToArray(r) {
        if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);
    }
    function _arrayWithoutHoles(r) {
        if (Array.isArray(r)) return _arrayLikeToArray(r);
    }
    function _arrayLikeToArray(r, a) {
        (null == a || a > r.length) && (a = r.length);
        for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
        return n;
    }
    System.register([ "./render-legacy-_Pj-Zqug.js" ], function(_export, _context) {
        "use strict";
        var mergeProps$1, SUPPORTS_PROXY, mergeProps;
        function resolveSource(source) {
            var value = typeof source === "function" ? source() : source;
            return value == null ? {} : value;
        }
        return {
            setters: [ function(_renderLegacy001Js) {
                mergeProps$1 = _renderLegacy001Js.X;
            } ],
            execute: function execute() {
                SUPPORTS_PROXY = typeof Proxy === "function";
                _export("t", mergeProps = function mergeProps() {
                    for (var _len = arguments.length, sources = new Array(_len), _key = 0; _key < _len; _key++) {
                        sources[_key] = arguments[_key];
                    }
                    if (SUPPORTS_PROXY) return mergeProps$1.apply(void 0, sources);
                    return mergeProps$1.apply(void 0, _toConsumableArray(sources.map(function(source) {
                        return typeof source === "function" ? resolveSource(source) : source;
                    })));
                });
            }
        };
    });
})();