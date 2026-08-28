(function() {
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
    System.register([ "./render-legacy-C75jKPoW.js", "./state-legacy-DghrRWJ1.js" ], function(_export, _context) {
        "use strict";
        var onMount, createElement, insert, setProp, createSignal, createTextNode, insertNode, setGlobalBackground, knownVersions, RendererVersionsPage;
        return {
            setters: [ function(_renderLegacy001Js) {
                onMount = _renderLegacy001Js.$;
                createElement = _renderLegacy001Js.a;
                insert = _renderLegacy001Js.l;
                setProp = _renderLegacy001Js.m;
                createSignal = _renderLegacy001Js.q;
                createTextNode = _renderLegacy001Js.s;
                insertNode = _renderLegacy001Js.u;
            }, function(_stateLegacy00iJs) {
                setGlobalBackground = _stateLegacy00iJs.n;
            } ],
            execute: function execute() {
                knownVersions = [ "Current", 300, 316, 320, 321, 322, 323, 324, 325, 326, 330, 331, 340 ];
                _export("default", RendererVersionsPage = function RendererVersionsPage() {
                    var _createSignal = createSignal("Current"), _createSignal2 = _slicedToArray(_createSignal, 2), version = _createSignal2[0], setVersion = _createSignal2[1];
                    onMount(function() {
                        setGlobalBackground(255);
                    });
                    var onRight = function onRight() {
                        var current = version();
                        var index = knownVersions.indexOf(current);
                        if (index >= 0 && index < knownVersions.length - 1) setVersion(knownVersions[index + 1]); else setVersion(knownVersions[0]);
                        return true;
                    };
                    var onLeft = function onLeft() {
                        var current = version();
                        var index = knownVersions.indexOf(current);
                        if (index > 0) setVersion(knownVersions[index - 1]); else setVersion(knownVersions[knownVersions.length - 1]);
                        return true;
                    };
                    var onUp = function onUp() {
                        setVersion(function(v) {
                            return v === "Current" ? 341 : v + 1;
                        });
                        return true;
                    };
                    var onDown = function onDown() {
                        setVersion(function(v) {
                            return v === "Current" ? 339 : Math.max(0, v - 1);
                        });
                        return true;
                    };
                    var onEnter = function onEnter() {
                        if (version() === "Current") window.location.hash = "#/benchmark"; else window.location.href = "https://solid-tv.github.io/solid-demo-app/".concat(version(), "/#/benchmark");
                        return true;
                    };
                    var Container = {
                        width: 1e3,
                        height: 500,
                        x: 460,
                        y: 200,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center"
                    };
                    var Title = {
                        fontSize: 48,
                        fontWeight: "bold",
                        marginBottom: 40
                    };
                    var VersionText = {
                        fontSize: 160,
                        fontWeight: "bold",
                        color: 14745599,
                        marginBottom: 40
                    };
                    var Instructions = {
                        fontSize: 28,
                        color: 3149642751,
                        textAlign: "center",
                        lineHeight: 40,
                        marginBottom: 10
                    };
                    return function() {
                        var _el$ = createElement("view"), _el$2 = createElement("text"), _el$4 = createElement("text"), _el$5 = createElement("text"), _el$7 = createElement("text"), _el$9 = createElement("text");
                        insertNode(_el$, _el$2);
                        insertNode(_el$, _el$4);
                        insertNode(_el$, _el$5);
                        insertNode(_el$, _el$7);
                        insertNode(_el$, _el$9);
                        setProp(_el$, "style", Container);
                        setProp(_el$, "autofocus", true);
                        setProp(_el$, "onRight", onRight);
                        setProp(_el$, "onLeft", onLeft);
                        setProp(_el$, "onUp", onUp);
                        setProp(_el$, "onDown", onDown);
                        setProp(_el$, "onEnter", onEnter);
                        insertNode(_el$2, createTextNode("Benchmark - Select Renderer Version To Run"));
                        setProp(_el$2, "style", Title);
                        setProp(_el$4, "style", VersionText);
                        insert(_el$4, function() {
                            return version().toString();
                        });
                        insertNode(_el$5, createTextNode("Use LEFT / RIGHT arrows to select a known version"));
                        setProp(_el$5, "style", Instructions);
                        insertNode(_el$7, createTextNode("Use UP / DOWN arrows to select a custom number"));
                        setProp(_el$7, "style", Instructions);
                        insertNode(_el$9, createTextNode("Press ENTER to launch benchmark for this version"));
                        setProp(_el$9, "style", Instructions);
                        return _el$;
                    }();
                });
            }
        };
    });
})();