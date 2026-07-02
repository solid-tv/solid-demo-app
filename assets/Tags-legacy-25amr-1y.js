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
    System.register([ "./index-legacy-C6-9AEgH.js" ], function(exports, module) {
        "use strict";
        var createSignal, createElement, setProp, rootNode, insert, effect, spread, mergeProps, setGlobalBackground, insertNode, createTextNode, onCleanup, createComponent;
        return {
            setters: [ function(module) {
                createSignal = module.b;
                createElement = module.c;
                setProp = module.a;
                rootNode = module.a7;
                insert = module.k;
                effect = module.m;
                spread = module.A;
                mergeProps = module.q;
                setGlobalBackground = module.s;
                insertNode = module.n;
                createTextNode = module.p;
                onCleanup = module.U;
                createComponent = module.l;
            } ],
            execute: function execute() {
                function createTag(children) {
                    var _createSignal = createSignal(null), _createSignal2 = _slicedToArray(_createSignal, 2), texture = _createSignal2[0], setTexture = _createSignal2[1];
                    var Tag = function() {
                        var _el$ = createElement("view");
                        setProp(_el$, "display", "flex");
                        setProp(_el$, "onLayout", function(n) {
                            if (n.preFlexwidth && n.width !== n.preFlexwidth) {
                                n.rtt = true;
                                setTimeout(function() {
                                    return setTexture(n.texture);
                                }, 1);
                            }
                        });
                        setProp(_el$, "parent", rootNode);
                        setProp(_el$, "textureOptions", {
                            preventCleanup: true
                        });
                        insert(_el$, children);
                        effect(function(_p$) {
                            var _v$ = rootNode.w - 1, _v$2 = rootNode.h - 1;
                            _v$ !== _p$.e && (_p$.e = setProp(_el$, "x", _v$, _p$.e));
                            _v$2 !== _p$.t && (_p$.t = setProp(_el$, "y", _v$2, _p$.t));
                            return _p$;
                        }, {
                            e: void 0,
                            t: void 0
                        });
                        return _el$;
                    }();
                    Tag.render(false);
                    var TagComponent = function TagComponent(props) {
                        return function() {
                            var _el$2 = createElement("view");
                            setProp(_el$2, "color", 4294967295);
                            setProp(_el$2, "autosize", true);
                            spread(_el$2, mergeProps(props, {
                                get texture() {
                                    return texture();
                                }
                            }), false);
                            return _el$2;
                        }();
                    };
                    TagComponent.destroy = function() {
                        return Tag.destroy();
                    };
                    return TagComponent;
                }
                var TagsPage = exports("default", function() {
                    setGlobalBackground(286331391);
                    var watchIconTextStyle = {
                        fontWeight: 400,
                        fontSize: 22,
                        lineHeight: 40,
                        y: 1
                    };
                    var ActionTag = createTag(function() {
                        var _el$ = createElement("view"), _el$2 = createElement("text");
                        insertNode(_el$, _el$2);
                        setProp(_el$, "color", 293806847);
                        setProp(_el$, "borderRadius", 8);
                        setProp(_el$, "display", "flex");
                        setProp(_el$, "padding", [ 0, 8 ]);
                        insertNode(_el$2, createTextNode("Action"));
                        setProp(_el$2, "style", watchIconTextStyle);
                        return _el$;
                    }());
                    var ComedyTag = createTag(function() {
                        var _el$4 = createElement("view"), _el$5 = createElement("text");
                        insertNode(_el$4, _el$5);
                        setProp(_el$4, "color", 621793023);
                        setProp(_el$4, "borderRadius", 8);
                        setProp(_el$4, "display", "flex");
                        setProp(_el$4, "padding", [ 0, 8 ]);
                        insertNode(_el$5, createTextNode("Comedy"));
                        setProp(_el$5, "style", watchIconTextStyle);
                        return _el$4;
                    }());
                    var DramaTag = createTag(function() {
                        var _el$7 = createElement("view"), _el$8 = createElement("text");
                        insertNode(_el$7, _el$8);
                        setProp(_el$7, "color", 4278190335);
                        setProp(_el$7, "borderRadius", 8);
                        setProp(_el$7, "display", "flex");
                        setProp(_el$7, "padding", [ 0, 8 ]);
                        insertNode(_el$8, createTextNode("Drama"));
                        setProp(_el$8, "style", watchIconTextStyle);
                        return _el$7;
                    }());
                    var NewEpisodeTag = createTag(function() {
                        var _el$0 = createElement("view"), _el$1 = createElement("text");
                        insertNode(_el$0, _el$1);
                        setProp(_el$0, "color", 4294967295);
                        setProp(_el$0, "borderRadius", 8);
                        setProp(_el$0, "display", "flex");
                        setProp(_el$0, "padding", [ 0, 8 ]);
                        setProp(_el$0, "effects", {
                            rounded: {
                                radius: [ 10, 0, 10, 0 ]
                            }
                        });
                        insertNode(_el$1, createTextNode("New Episode"));
                        setProp(_el$1, "style", watchIconTextStyle);
                        setProp(_el$1, "color", 255);
                        setProp(_el$1, "fontWeight", 400);
                        return _el$0;
                    }());
                    onCleanup(function() {
                        ActionTag.destroy();
                        ComedyTag.destroy();
                        DramaTag.destroy();
                        NewEpisodeTag.destroy();
                    });
                    return [ function() {
                        var _el$11 = createElement("text");
                        insertNode(_el$11, createTextNode("Tags Page"));
                        setProp(_el$11, "x", 100);
                        setProp(_el$11, "y", 100);
                        setProp(_el$11, "fontSize", 50);
                        setProp(_el$11, "color", 4294967295);
                        return _el$11;
                    }(), function() {
                        var _el$13 = createElement("view");
                        setProp(_el$13, "x", 150);
                        setProp(_el$13, "y", 200);
                        setProp(_el$13, "display", "flex");
                        setProp(_el$13, "flexDirection", "row");
                        setProp(_el$13, "gap", 16);
                        setProp(_el$13, "flexWrap", "wrap");
                        setProp(_el$13, "autofocus", true);
                        insert(_el$13, createComponent(ComedyTag, {}), null);
                        insert(_el$13, createComponent(DramaTag, {}), null);
                        insert(_el$13, createComponent(ActionTag, {}), null);
                        insert(_el$13, createComponent(NewEpisodeTag, {}), null);
                        insert(_el$13, createComponent(ComedyTag, {}), null);
                        insert(_el$13, createComponent(DramaTag, {}), null);
                        insert(_el$13, createComponent(ActionTag, {}), null);
                        insert(_el$13, createComponent(NewEpisodeTag, {}), null);
                        insert(_el$13, createComponent(ComedyTag, {}), null);
                        insert(_el$13, createComponent(DramaTag, {}), null);
                        insert(_el$13, createComponent(ActionTag, {}), null);
                        insert(_el$13, createComponent(NewEpisodeTag, {}), null);
                        insert(_el$13, createComponent(ComedyTag, {}), null);
                        insert(_el$13, createComponent(DramaTag, {}), null);
                        insert(_el$13, createComponent(ActionTag, {}), null);
                        insert(_el$13, createComponent(NewEpisodeTag, {}), null);
                        insert(_el$13, createComponent(ComedyTag, {}), null);
                        insert(_el$13, createComponent(DramaTag, {}), null);
                        insert(_el$13, createComponent(ActionTag, {}), null);
                        insert(_el$13, createComponent(NewEpisodeTag, {}), null);
                        insert(_el$13, createComponent(ComedyTag, {}), null);
                        insert(_el$13, createComponent(DramaTag, {}), null);
                        insert(_el$13, createComponent(ActionTag, {}), null);
                        insert(_el$13, createComponent(NewEpisodeTag, {}), null);
                        insert(_el$13, createComponent(ComedyTag, {}), null);
                        insert(_el$13, createComponent(DramaTag, {}), null);
                        insert(_el$13, createComponent(ActionTag, {}), null);
                        insert(_el$13, createComponent(NewEpisodeTag, {}), null);
                        insert(_el$13, createComponent(ComedyTag, {}), null);
                        insert(_el$13, createComponent(DramaTag, {}), null);
                        insert(_el$13, createComponent(ActionTag, {}), null);
                        insert(_el$13, createComponent(NewEpisodeTag, {}), null);
                        insert(_el$13, createComponent(ComedyTag, {}), null);
                        insert(_el$13, createComponent(DramaTag, {}), null);
                        insert(_el$13, createComponent(ActionTag, {}), null);
                        return _el$13;
                    }() ];
                });
            }
        };
    });
})();
