!function() {
    function _typeof(o) {
        return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
            return typeof o;
        } : function(o) {
            return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
        }, _typeof(o);
    }
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
    System.register([ "./render-legacy-t4wUAioc.js", "./Column-legacy-IFAmq0kZ.js", "./components-legacy-CMcgiR3G.js", "./routing-legacy-N-DqMbax.js", "./theme-legacy-Bdf29FvE.js", "./styles-legacy-ByBLMtKI.js", "./state-legacy-CIkOTHs-.js", "./api-legacy-BrsqDpuo.js", "./ItemFormatter-legacy-DjkA_he1.js" ], function(_export, _context) {
        var createResource, Show, createElement, effect, onMount, setProp, createComponent, insert, createTextNode, insertNode, Column, TileRow, useNavigate, useParams, theme_default, styles_default, setGlobalBackground, getImageUrl, api_default, convertItemsToTiles;
        function getCredits(_ref) {
            var id = _ref.id;
            return api_default.get("/person/".concat(id, "/combined_credits")).then(function(_ref2) {
                var cast = _ref2.cast;
                return convertItemsToTiles(cast.slice(0, 7));
            });
        }
        function getInfo(_ref3) {
            var id = _ref3.id;
            return api_default.get("/person/".concat(id)).then(function(data) {
                return _objectSpread({
                    backgroundImage: getImageUrl(data.profile_path, "original"),
                    heroContent: {
                        title: data.title || data.name,
                        description: data.biography
                    }
                }, data);
            });
        }
        return {
            setters: [ function(_renderLegacy002Js) {
                _renderLegacy002Js.At, createResource = _renderLegacy002Js.G, Show = _renderLegacy002Js.P, 
                createElement = _renderLegacy002Js.a, effect = _renderLegacy002Js.c, onMount = _renderLegacy002Js.et, 
                setProp = _renderLegacy002Js.h, createComponent = _renderLegacy002Js.i, insert = _renderLegacy002Js.l, 
                createTextNode = _renderLegacy002Js.s, insertNode = _renderLegacy002Js.u;
            }, function(_ColumnLegacy009Js) {
                Column = _ColumnLegacy009Js.t;
            }, function(_componentsLegacy00dJs) {
                TileRow = _componentsLegacy00dJs.u;
            }, function(_routingLegacy00fJs) {
                useNavigate = _routingLegacy00fJs.d, useParams = _routingLegacy00fJs.f;
            }, function(_themeLegacy00gJs) {
                theme_default = _themeLegacy00gJs.t;
            }, function(_stylesLegacy00hJs) {
                styles_default = _stylesLegacy00hJs.r;
            }, function(_stateLegacy00iJs) {
                setGlobalBackground = _stateLegacy00iJs.n;
            }, function(_apiLegacy00kJs) {
                getImageUrl = _apiLegacy00kJs.n, api_default = _apiLegacy00kJs.t;
            }, function(_ItemFormatterLegacy00lJs) {
                convertItemsToTiles = _ItemFormatterLegacy00lJs.t;
            } ],
            execute: function() {
                _export("default", function() {
                    var params = useParams(), navigate = useNavigate(), data = _slicedToArray(createResource(function() {
                        return _objectSpread({}, params);
                    }, getInfo), 1)[0], credits = _slicedToArray(createResource(function() {
                        return _objectSpread({}, params);
                    }, getCredits), 1)[0], Backdrop = {
                        color: 255,
                        alpha: .8,
                        width: 800,
                        height: 440,
                        x: 130,
                        y: 180,
                        borderRadius: 30
                    };
                    function onEnter() {
                        var entity = this.children[this.selected || 0];
                        entity && entity.href, navigate(entity.href);
                    }
                    return onMount(function() {
                        setGlobalBackground(858993663);
                    }), createComponent(Show, {
                        get when() {
                            return data();
                        },
                        keyed: !0,
                        get children() {
                            return [ (_el$ = createElement("view"), setProp(_el$, "height", 1e3), setProp(_el$, "width", 1e3), 
                            setProp(_el$, "textureOptions", {
                                resizeMode: {
                                    type: "contain"
                                }
                            }), setProp(_el$, "y", 40), setProp(_el$, "right", 400), effect(function(_$p) {
                                return setProp(_el$, "src", data().backgroundImage, _$p);
                            }), _el$), (_el$2 = createElement("view"), _el$3 = createElement("text"), _el$4 = createElement("text"), 
                            insertNode(_el$2, _el$3), insertNode(_el$2, _el$4), setProp(_el$2, "x", 150), setProp(_el$2, "y", 200), 
                            setProp(_el$2, "width", 800), setProp(_el$2, "gap", 24), setProp(_el$2, "zIndex", 3), 
                            setProp(_el$3, "contain", "width"), setProp(_el$3, "fontFamily", "Roboto"), insert(_el$3, function() {
                                return data().name;
                            }), setProp(_el$4, "contain", "both"), insert(_el$4, function() {
                                return data().biography;
                            }), effect(function(_p$) {
                                var _v$ = styles_default.Column, _v$2 = theme_default.typography.display2, _v$3 = styles_default.peopleBio;
                                return _v$ !== _p$.e && (_p$.e = setProp(_el$2, "style", _v$, _p$.e)), _v$2 !== _p$.t && (_p$.t = setProp(_el$3, "style", _v$2, _p$.t)), 
                                _v$3 !== _p$.a && (_p$.a = setProp(_el$4, "style", _v$3, _p$.a)), _p$;
                            }, {
                                e: void 0,
                                t: void 0,
                                a: void 0
                            }), _el$2), (_el$5 = createElement("view"), setProp(_el$5, "style", Backdrop), _el$5), createComponent(Column, {
                                y: 670,
                                x: 140,
                                get style() {
                                    return styles_default.Column;
                                },
                                scroll: "none",
                                get children() {
                                    return createComponent(Show, {
                                        get when() {
                                            return credits();
                                        },
                                        get children() {
                                            return [ (_el$6 = createElement("text"), insertNode(_el$6, createTextNode("Credits")), 
                                            setProp(_el$6, "skipFocus", !0), effect(function(_$p) {
                                                return setProp(_el$6, "style", styles_default.RowTitle, _$p);
                                            }), _el$6), createComponent(TileRow, {
                                                autofocus: !0,
                                                onEnter: onEnter,
                                                get items() {
                                                    return credits();
                                                }
                                            }) ];
                                            var _el$6;
                                        }
                                    });
                                }
                            }) ];
                            var _el$5, _el$2, _el$3, _el$4, _el$;
                        }
                    });
                });
            }
        };
    });
}();