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
    System.register([], function(_export, _context) {
        var API_BASE, tmdbConfig, baseImageUrl, basePosterSize, defaultFetchParams;
        function get(path) {
            var params = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            return tmdbConfig ? _get(path, params) : loadConfig().then(function() {
                return _get(path, params);
            });
        }
        function _get(path) {
            var params = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            return fetch(API_BASE + path, _objectSpread(_objectSpread({}, defaultFetchParams), params)).then(function(r) {
                return r.json();
            });
        }
        function loadConfig() {
            return _get("/configuration").then(function(data) {
                var _data$images;
                return tmdbConfig = data, baseImageUrl = null == (_data$images = data.images) ? void 0 : _data$images.secure_base_url, 
                data;
            });
        }
        return _export("n", function(path) {
            return path ? baseImageUrl + (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : basePosterSize) + path : "./assets/fallback.png";
        }), {
            setters: [],
            execute: function() {
                API_BASE = "https://api.themoviedb.org/3", basePosterSize = new URLSearchParams(window.location.search).get("posterSize") || "w185", 
                defaultFetchParams = {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZDE4YjEwMTA0YjdiZTlkNjFiMWYwYjVlMGEwNzM2OCIsInN1YiI6IjYwZTVjMTdlNGNhNjc2MDA3NTA4Njc3MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.D_nqH9kd-bhhWzeVsTDPYhHnsUaNAuyAa6YATmKHqsA"
                    }
                }, _export("t", {
                    get: get,
                    loadConfig: loadConfig
                });
            }
        };
    });
}();