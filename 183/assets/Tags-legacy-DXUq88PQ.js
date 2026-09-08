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
    System.register([ "./render-legacy-dLzA91Db.js", "./mergeProps-legacy-wREr8h3i.js", "./state-legacy-C4TEpoVI.js" ], function(_export, _context) {
        var onCleanup, createElement, effect, rootNode, spread, createComponent, insert, setProp, createSignal, createTextNode, insertNode, mergeProps, setGlobalBackground;
        function createTag(children) {
            var _el$, _createSignal2 = _slicedToArray(createSignal(null), 2), texture = _createSignal2[0], setTexture = _createSignal2[1], Tag = (_el$ = createElement("view"), 
            setProp(_el$, "display", "flex"), setProp(_el$, "onLayout", function(n) {
                n.preFlexwidth && n.width !== n.preFlexwidth && (n.rtt = !0, setTimeout(function() {
                    return setTexture(n.texture);
                }, 1));
            }), setProp(_el$, "parent", rootNode), setProp(_el$, "textureOptions", {
                preventCleanup: !0
            }), insert(_el$, children), effect(function(_p$) {
                var _v$ = rootNode.w - 1, _v$2 = rootNode.h - 1;
                return _v$ !== _p$.e && (_p$.e = setProp(_el$, "x", _v$, _p$.e)), _v$2 !== _p$.t && (_p$.t = setProp(_el$, "y", _v$2, _p$.t)), 
                _p$;
            }, {
                e: void 0,
                t: void 0
            }), _el$);
            Tag.render(!1);
            var TagComponent = function(props) {
                return _el$2 = createElement("view"), setProp(_el$2, "color", 4294967295), setProp(_el$2, "autosize", !0), 
                spread(_el$2, mergeProps(props, {
                    get texture() {
                        return texture();
                    }
                }), !1), _el$2;
                var _el$2;
            };
            return TagComponent.destroy = function() {
                return Tag.destroy();
            }, TagComponent;
        }
        return {
            setters: [ function(_renderLegacy002Js) {
                onCleanup = _renderLegacy002Js.Q, createElement = _renderLegacy002Js.a, effect = _renderLegacy002Js.c, 
                rootNode = _renderLegacy002Js.f, spread = _renderLegacy002Js.h, createComponent = _renderLegacy002Js.i, 
                insert = _renderLegacy002Js.l, setProp = _renderLegacy002Js.m, createSignal = _renderLegacy002Js.q, 
                createTextNode = _renderLegacy002Js.s, insertNode = _renderLegacy002Js.u;
            }, function(_mergePropsLegacy005Js) {
                mergeProps = _mergePropsLegacy005Js.t;
            }, function(_stateLegacy00jJs) {
                setGlobalBackground = _stateLegacy00jJs.n;
            } ],
            execute: function() {
                _export("default", function() {
                    setGlobalBackground(286331391);
                    var _el$, _el$2, _el$4, _el$5, _el$7, _el$8, _el$0, _el$1, _el$13, _el$11, watchIconTextStyle = {
                        fontWeight: 400,
                        fontSize: 22,
                        lineHeight: 40,
                        y: 1
                    }, ActionTag = createTag((_el$ = createElement("view"), _el$2 = createElement("text"), 
                    insertNode(_el$, _el$2), setProp(_el$, "color", 293806847), setProp(_el$, "borderRadius", 8), 
                    setProp(_el$, "display", "flex"), setProp(_el$, "padding", [ 0, 8 ]), insertNode(_el$2, createTextNode("Action")), 
                    setProp(_el$2, "style", watchIconTextStyle), _el$)), ComedyTag = createTag((_el$4 = createElement("view"), 
                    _el$5 = createElement("text"), insertNode(_el$4, _el$5), setProp(_el$4, "color", 621793023), 
                    setProp(_el$4, "borderRadius", 8), setProp(_el$4, "display", "flex"), setProp(_el$4, "padding", [ 0, 8 ]), 
                    insertNode(_el$5, createTextNode("Comedy")), setProp(_el$5, "style", watchIconTextStyle), 
                    _el$4)), DramaTag = createTag((_el$7 = createElement("view"), _el$8 = createElement("text"), 
                    insertNode(_el$7, _el$8), setProp(_el$7, "color", 4278190335), setProp(_el$7, "borderRadius", 8), 
                    setProp(_el$7, "display", "flex"), setProp(_el$7, "padding", [ 0, 8 ]), insertNode(_el$8, createTextNode("Drama")), 
                    setProp(_el$8, "style", watchIconTextStyle), _el$7)), NewEpisodeTag = createTag((_el$0 = createElement("view"), 
                    _el$1 = createElement("text"), insertNode(_el$0, _el$1), setProp(_el$0, "color", 4294967295), 
                    setProp(_el$0, "borderRadius", 8), setProp(_el$0, "display", "flex"), setProp(_el$0, "padding", [ 0, 8 ]), 
                    setProp(_el$0, "effects", {
                        rounded: {
                            radius: [ 10, 0, 10, 0 ]
                        }
                    }), insertNode(_el$1, createTextNode("New Episode")), setProp(_el$1, "style", watchIconTextStyle), 
                    setProp(_el$1, "color", 255), setProp(_el$1, "fontWeight", 400), _el$0));
                    return onCleanup(function() {
                        ActionTag.destroy(), ComedyTag.destroy(), DramaTag.destroy(), NewEpisodeTag.destroy();
                    }), [ (_el$11 = createElement("text"), insertNode(_el$11, createTextNode("Tags Page")), 
                    setProp(_el$11, "x", 100), setProp(_el$11, "y", 100), setProp(_el$11, "fontSize", 50), 
                    setProp(_el$11, "color", 4294967295), _el$11), (_el$13 = createElement("view"), 
                    setProp(_el$13, "x", 150), setProp(_el$13, "y", 200), setProp(_el$13, "display", "flex"), 
                    setProp(_el$13, "flexDirection", "row"), setProp(_el$13, "gap", 16), setProp(_el$13, "flexWrap", "wrap"), 
                    setProp(_el$13, "autofocus", !0), insert(_el$13, createComponent(ComedyTag, {}), null), 
                    insert(_el$13, createComponent(DramaTag, {}), null), insert(_el$13, createComponent(ActionTag, {}), null), 
                    insert(_el$13, createComponent(NewEpisodeTag, {}), null), insert(_el$13, createComponent(ComedyTag, {}), null), 
                    insert(_el$13, createComponent(DramaTag, {}), null), insert(_el$13, createComponent(ActionTag, {}), null), 
                    insert(_el$13, createComponent(NewEpisodeTag, {}), null), insert(_el$13, createComponent(ComedyTag, {}), null), 
                    insert(_el$13, createComponent(DramaTag, {}), null), insert(_el$13, createComponent(ActionTag, {}), null), 
                    insert(_el$13, createComponent(NewEpisodeTag, {}), null), insert(_el$13, createComponent(ComedyTag, {}), null), 
                    insert(_el$13, createComponent(DramaTag, {}), null), insert(_el$13, createComponent(ActionTag, {}), null), 
                    insert(_el$13, createComponent(NewEpisodeTag, {}), null), insert(_el$13, createComponent(ComedyTag, {}), null), 
                    insert(_el$13, createComponent(DramaTag, {}), null), insert(_el$13, createComponent(ActionTag, {}), null), 
                    insert(_el$13, createComponent(NewEpisodeTag, {}), null), insert(_el$13, createComponent(ComedyTag, {}), null), 
                    insert(_el$13, createComponent(DramaTag, {}), null), insert(_el$13, createComponent(ActionTag, {}), null), 
                    insert(_el$13, createComponent(NewEpisodeTag, {}), null), insert(_el$13, createComponent(ComedyTag, {}), null), 
                    insert(_el$13, createComponent(DramaTag, {}), null), insert(_el$13, createComponent(ActionTag, {}), null), 
                    insert(_el$13, createComponent(NewEpisodeTag, {}), null), insert(_el$13, createComponent(ComedyTag, {}), null), 
                    insert(_el$13, createComponent(DramaTag, {}), null), insert(_el$13, createComponent(ActionTag, {}), null), 
                    insert(_el$13, createComponent(NewEpisodeTag, {}), null), insert(_el$13, createComponent(ComedyTag, {}), null), 
                    insert(_el$13, createComponent(DramaTag, {}), null), insert(_el$13, createComponent(ActionTag, {}), null), 
                    _el$13) ];
                });
            }
        };
    });
}();