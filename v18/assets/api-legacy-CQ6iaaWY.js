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
    System.register([], function(_export, _context) {
        "use strict";
        var key_default, API_BASE, tmdbConfig, baseImageUrl, basePosterSize, defaultFetchParams, api_default;
        function getImageUrl(path) {
            var posterSize = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : basePosterSize;
            if (!path) return "./assets/fallback.png";
            return baseImageUrl + posterSize + path;
        }
        function get(path) {
            var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            if (tmdbConfig) return _get(path, params); else return loadConfig().then(function() {
                return _get(path, params);
            });
        }
        function _get(path) {
            var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            return fetch(API_BASE + path, _objectSpread(_objectSpread({}, defaultFetchParams), params)).then(function(r) {
                return r.json();
            });
        }
        function loadConfig() {
            return _get("/configuration").then(function(data) {
                var _data$images;
                tmdbConfig = data;
                baseImageUrl = (_data$images = data.images) == null ? void 0 : _data$images.secure_base_url;
                return data;
            });
        }
        _export("n", getImageUrl);
        return {
            setters: [],
            execute: function execute() {
                key_default = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZDE4YjEwMTA0YjdiZTlkNjFiMWYwYjVlMGEwNzM2OCIsInN1YiI6IjYwZTVjMTdlNGNhNjc2MDA3NTA4Njc3MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.D_nqH9kd-bhhWzeVsTDPYhHnsUaNAuyAa6YATmKHqsA";
                API_BASE = "https://api.themoviedb.org/3";
                basePosterSize = new URLSearchParams(window.location.search).get("posterSize") || "w185";
                defaultFetchParams = {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: "Bearer " + key_default
                    }
                };
                _export("t", api_default = {
                    get: get,
                    loadConfig: loadConfig
                });
            }
        };
    });
})();