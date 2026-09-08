!function() {
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
        }(r, e) || function(r, a) {
            if (r) {
                if ("string" == typeof r) return _arrayLikeToArray(r, a);
                var t = {}.toString.call(r).slice(8, -1);
                return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
            }
        }(r, e) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }();
    }
    function _arrayLikeToArray(r, a) {
        (null == a || a > r.length) && (a = r.length);
        for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
        return n;
    }
    System.register([ "./render-legacy-1jX59Y6X.js", "./state-legacy-B9YP9E7M.js" ], function(_export, _context) {
        var onMount, createElement, insert, setProp, createSignal, createTextNode, insertNode, setGlobalBackground, knownVersions;
        return {
            setters: [ function(_renderLegacy002Js) {
                onMount = _renderLegacy002Js.$, createElement = _renderLegacy002Js.a, insert = _renderLegacy002Js.l, 
                setProp = _renderLegacy002Js.m, createSignal = _renderLegacy002Js.q, createTextNode = _renderLegacy002Js.s, 
                insertNode = _renderLegacy002Js.u;
            }, function(_stateLegacy00jJs) {
                setGlobalBackground = _stateLegacy00jJs.n;
            } ],
            execute: function() {
                knownVersions = [ "Current", 156, 183, 190, 300, 316, 320, 321, 322, 323, 324, 325, 326, 330, 331, 340 ], 
                _export("default", function() {
                    var _createSignal2 = _slicedToArray(createSignal("Current"), 2), version = _createSignal2[0], setVersion = _createSignal2[1];
                    onMount(function() {
                        setGlobalBackground(255);
                    });
                    var _el$, _el$2, _el$4, _el$5, _el$7, _el$9, onRight = function() {
                        var current = version(), index = knownVersions.indexOf(current);
                        return index >= 0 && index < knownVersions.length - 1 ? setVersion(knownVersions[index + 1]) : setVersion(knownVersions[0]), 
                        !0;
                    }, onLeft = function() {
                        var current = version(), index = knownVersions.indexOf(current);
                        return setVersion(index > 0 ? knownVersions[index - 1] : knownVersions[knownVersions.length - 1]), 
                        !0;
                    }, onUp = function() {
                        return setVersion(function(v) {
                            return "Current" === v ? 341 : v + 1;
                        }), !0;
                    }, onDown = function() {
                        return setVersion(function(v) {
                            return "Current" === v ? 339 : Math.max(0, v - 1);
                        }), !0;
                    }, onEnter = function() {
                        return "Current" === version() ? window.location.hash = "#/benchmark" : window.location.href = "https://solid-tv.github.io/solid-demo-app/".concat(version(), "/#/benchmark"), 
                        !0;
                    }, Container = {
                        width: 1e3,
                        height: 500,
                        x: 460,
                        y: 200,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center"
                    }, Title = {
                        fontSize: 48,
                        fontWeight: "bold",
                        marginBottom: 40
                    }, VersionText = {
                        fontSize: 160,
                        fontWeight: "bold",
                        color: 14745599,
                        marginBottom: 40
                    }, Instructions = {
                        fontSize: 28,
                        color: 3149642751,
                        textAlign: "center",
                        lineHeight: 40,
                        marginBottom: 10
                    };
                    return _el$ = createElement("view"), _el$2 = createElement("text"), _el$4 = createElement("text"), 
                    _el$5 = createElement("text"), _el$7 = createElement("text"), _el$9 = createElement("text"), 
                    insertNode(_el$, _el$2), insertNode(_el$, _el$4), insertNode(_el$, _el$5), insertNode(_el$, _el$7), 
                    insertNode(_el$, _el$9), setProp(_el$, "style", Container), setProp(_el$, "autofocus", !0), 
                    setProp(_el$, "onRight", onRight), setProp(_el$, "onLeft", onLeft), setProp(_el$, "onUp", onUp), 
                    setProp(_el$, "onDown", onDown), setProp(_el$, "onEnter", onEnter), insertNode(_el$2, createTextNode("Benchmark - Select Renderer Version To Run")), 
                    setProp(_el$2, "style", Title), setProp(_el$4, "style", VersionText), insert(_el$4, function() {
                        return version().toString();
                    }), insertNode(_el$5, createTextNode("Use LEFT / RIGHT arrows to select a known version")), 
                    setProp(_el$5, "style", Instructions), insertNode(_el$7, createTextNode("Use UP / DOWN arrows to select a custom number")), 
                    setProp(_el$7, "style", Instructions), insertNode(_el$9, createTextNode("Press ENTER to launch benchmark for this version")), 
                    setProp(_el$9, "style", Instructions), _el$;
                });
            }
        };
    });
}();