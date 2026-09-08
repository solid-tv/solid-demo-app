!function() {
    function _regenerator() {
        var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag";
        function i(r, n, o, i) {
            var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype);
            return _regeneratorDefine2(u, "_invoke", function(r, n, o) {
                var i, c, u, f = 0, p = o || [], y = !1, G = {
                    p: 0,
                    n: 0,
                    v: e,
                    a: d,
                    f: d.bind(e, 4),
                    d: function(t, r) {
                        return i = t, c = 0, u = e, G.n = r, a;
                    }
                };
                function d(r, n) {
                    for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) {
                        var o, i = p[t], d = G.p, l = i[2];
                        r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, 
                        G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, 
                        G.n = l, c = 0));
                    }
                    if (o || r > 1) return a;
                    throw y = !0, n;
                }
                return function(o, p, l) {
                    if (f > 1) throw TypeError("Generator is already running");
                    for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y; ) {
                        i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u);
                        try {
                            if (f = 2, i) {
                                if (c || (o = "next"), t = i[o]) {
                                    if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object");
                                    if (!t.done) return t;
                                    u = t.value, c < 2 && (c = 0);
                                } else 1 === c && (t = i.return) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), 
                                c = 1);
                                i = e;
                            } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break;
                        } catch (t) {
                            i = e, c = 1, u = t;
                        } finally {
                            f = 1;
                        }
                    }
                    return {
                        value: t,
                        done: y
                    };
                };
            }(r, o, i), !0), u;
        }
        var a = {};
        function Generator() {}
        function GeneratorFunction() {}
        function GeneratorFunctionPrototype() {}
        t = Object.getPrototypeOf;
        var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function() {
            return this;
        }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c);
        function f(e) {
            return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, 
            _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), 
            e;
        }
        return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), 
        _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), 
        GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), 
        _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function() {
            return this;
        }), _regeneratorDefine2(u, "toString", function() {
            return "[object Generator]";
        }), (_regenerator = function() {
            return {
                w: i,
                m: f
            };
        })();
    }
    function _regeneratorDefine2(e, r, n, t) {
        var i = Object.defineProperty;
        try {
            i({}, "", {});
        } catch (e) {
            i = 0;
        }
        _regeneratorDefine2 = function(e, r, n, t) {
            function o(r, n) {
                _regeneratorDefine2(e, r, function(e) {
                    return this._invoke(r, n, e);
                });
            }
            r ? i ? i(e, r, {
                value: n,
                enumerable: !t,
                configurable: !t,
                writable: !t
            }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2));
        }, _regeneratorDefine2(e, r, n, t);
    }
    function asyncGeneratorStep(n, t, e, r, o, a, c) {
        try {
            var i = n[a](c), u = i.value;
        } catch (n) {
            return void e(n);
        }
        i.done ? t(u) : Promise.resolve(u).then(r, o);
    }
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
    System.register([ "./rolldown-runtime-legacy-c5pELP7v.js", "./render-legacy-dLzA91Db.js", "./FPSCounter-legacy-CCOet21C.js", "./Lazy-legacy-fV0h1mPk.js", "./ContentBlock-legacy-CfNZlu1F.js", "./createFocusStack-legacy-yGNACtiA.js", "./components-legacy-DpfK7YJT.js", "./styles-legacy--qMSUlWV.js", "./state-legacy-C4TEpoVI.js", "./dist-legacy-DQONkt3w.js" ], function(_export, _context) {
        var __exportAll, For, ImageTexture, Config, batch, Texture, Show, activeElement, onCleanup, TextureType, isTextureError, createEffect, on, isAdvancedShaderProp, createElement, TextureError, effect, memo, resolveTargetFPS, frameTimeBucketLowerBound$1, use, CoreShaderNode, createComponent, insert, setProp, clearFontPrefetch, createSignal, createTextNode, prefetchFont, insertNode, RendererMain, resolveShaderProps, renderer, TextureErrorCode, CoreTextureManager, closeImageBitmap, LinearGradientTemplate, RoundedTemplate, HolePunchTemplate, WebGlShaderProgram, ShadowTemplate, getBorderProps, resetCounter, BorderTemplate, RadialGradientTemplate, getShadowProps, LazyRow, LazyColumn, ContentBlock, useFocusStack, Hero, SHOW_TEXT, TitleRow, scaled, DISPLAY_SIZE, POSTER_SCALE, AssetPanel, styles_default, setGlobalBackground, debounce, _EdgeFadeTemplate, exports_exports, _histogram$FRAME_TIME, _histogram$frameTimeB, histogram, FRAME_TIME_BUCKET_COUNT, frameTimeBucketLowerBound;
        function getImageWorkersCount() {
            try {
                var _root$stage, _root$settings, _Config$rendererOptio;
                if ("undefined" != typeof window) {
                    var param = new URLSearchParams(window.location.search).get("numImageWorkers");
                    if (null !== param) {
                        var parsed = parseInt(param, 10);
                        if (!isNaN(parsed)) return parsed;
                    }
                }
                var root = renderer;
                if (void 0 !== (null == root || null == (_root$stage = root.stage) || null == (_root$stage = _root$stage.options) ? void 0 : _root$stage.numImageWorkers)) return root.stage.options.numImageWorkers;
                if (void 0 !== (null == root || null == (_root$settings = root.settings) ? void 0 : _root$settings.numImageWorkers)) return root.settings.numImageWorkers;
                if (void 0 !== (null == Config || null == (_Config$rendererOptio = Config.rendererOptions) ? void 0 : _Config$rendererOptio.numImageWorkers)) return Config.rendererOptions.numImageWorkers;
            } catch (e) {}
            return "undefined" != typeof window && window.createImageBitmap ? 1 : 0;
        }
        function getTextureProcessingTimeLimit() {
            try {
                var _root$stage2, _root$settings2, _Config$rendererOptio2;
                if ("undefined" != typeof window) {
                    var param = new URLSearchParams(window.location.search).get("textureProcessingTimeLimit");
                    if (null !== param) {
                        var parsed = parseFloat(param);
                        if (!isNaN(parsed)) return parsed;
                    }
                }
                var root = renderer;
                if (void 0 !== (null == root || null == (_root$stage2 = root.stage) || null == (_root$stage2 = _root$stage2.options) ? void 0 : _root$stage2.textureProcessingTimeLimit)) return root.stage.options.textureProcessingTimeLimit;
                if (void 0 !== (null == root || null == (_root$settings2 = root.settings) ? void 0 : _root$settings2.textureProcessingTimeLimit)) return root.settings.textureProcessingTimeLimit;
                if (void 0 !== (null == Config || null == (_Config$rendererOptio2 = Config.rendererOptions) ? void 0 : _Config$rendererOptio2.textureProcessingTimeLimit)) return Config.rendererOptions.textureProcessingTimeLimit;
            } catch (e) {}
            return 10;
        }
        function getDeviceCores() {
            try {
                if ("undefined" != typeof navigator && "number" == typeof navigator.hardwareConcurrency && navigator.hardwareConcurrency > 0) return "".concat(navigator.hardwareConcurrency, " cores");
            } catch (e) {}
            return "cores ?";
        }
        function getPixelRatios() {
            var logical = "undefined" != typeof window ? window.innerHeight / 1080 : 1, physical = "undefined" != typeof window && window.devicePixelRatio || 1, dpr = "undefined" != typeof window && window.devicePixelRatio || 1;
            try {
                var _root$stage3, _Config$rendererOptio3, _root$stage4, _Config$rendererOptio4, root = renderer;
                void 0 !== (null == root || null == (_root$stage3 = root.stage) || null == (_root$stage3 = _root$stage3.options) ? void 0 : _root$stage3.deviceLogicalPixelRatio) ? logical = root.stage.options.deviceLogicalPixelRatio : void 0 !== (null == Config || null == (_Config$rendererOptio3 = Config.rendererOptions) ? void 0 : _Config$rendererOptio3.deviceLogicalPixelRatio) && (logical = Config.rendererOptions.deviceLogicalPixelRatio), 
                void 0 !== (null == root || null == (_root$stage4 = root.stage) || null == (_root$stage4 = _root$stage4.options) ? void 0 : _root$stage4.devicePhysicalPixelRatio) ? physical = root.stage.options.devicePhysicalPixelRatio : void 0 !== (null == Config || null == (_Config$rendererOptio4 = Config.rendererOptions) ? void 0 : _Config$rendererOptio4.devicePhysicalPixelRatio) && (physical = Config.rendererOptions.devicePhysicalPixelRatio);
            } catch (e) {}
            return {
                logical: logical,
                physical: physical,
                dpr: dpr
            };
        }
        function createZeroArray(length) {
            for (var arr = new Array(length), i = 0; i < length; i++) arr[i] = 0;
            return arr;
        }
        function percentileMs(buckets, fraction) {
            if (!buckets || 0 === buckets.length) return 0;
            for (var total = 0, i = 0; i < buckets.length; i++) total += buckets[i] || 0;
            if (0 === total) return 0;
            for (var target = total * fraction, seen = 0, _i = 0; _i < buckets.length; _i++) if ((seen += buckets[_i] || 0) >= target) return frameTimeBucketLowerBound(_i);
            return frameTimeBucketLowerBound(buckets.length - 1);
        }
        return {
            setters: [ function(_rolldownRuntimeLegacy001Js) {
                __exportAll = _rolldownRuntimeLegacy001Js.n;
            }, function(_renderLegacy002Js) {
                For = _renderLegacy002Js.A, ImageTexture = _renderLegacy002Js.Ct, Config = _renderLegacy002Js.D, 
                batch = _renderLegacy002Js.I, Texture = _renderLegacy002Js.Lt, Show = _renderLegacy002Js.N, 
                activeElement = _renderLegacy002Js.O, onCleanup = _renderLegacy002Js.Q, TextureType = _renderLegacy002Js.Rt, 
                isTextureError = _renderLegacy002Js.St, createEffect = _renderLegacy002Js.V, on = _renderLegacy002Js.Z, 
                isAdvancedShaderProp = _renderLegacy002Js._t, createElement = _renderLegacy002Js.a, 
                TextureError = _renderLegacy002Js.bt, effect = _renderLegacy002Js.c, memo = _renderLegacy002Js.d, 
                resolveTargetFPS = _renderLegacy002Js.dt, frameTimeBucketLowerBound$1 = _renderLegacy002Js.ft, 
                use = _renderLegacy002Js.g, CoreShaderNode = _renderLegacy002Js.gt, createComponent = _renderLegacy002Js.i, 
                insert = _renderLegacy002Js.l, setProp = _renderLegacy002Js.m, clearFontPrefetch = _renderLegacy002Js.ot, 
                createSignal = _renderLegacy002Js.q, createTextNode = _renderLegacy002Js.s, prefetchFont = _renderLegacy002Js.st, 
                insertNode = _renderLegacy002Js.u, RendererMain = _renderLegacy002Js.ut, resolveShaderProps = _renderLegacy002Js.vt, 
                renderer = _renderLegacy002Js.x, TextureErrorCode = _renderLegacy002Js.xt, CoreTextureManager = _renderLegacy002Js.yt, 
                closeImageBitmap = _renderLegacy002Js.zt;
            }, function(_FPSCounterLegacy003Js) {
                LinearGradientTemplate = _FPSCounterLegacy003Js.c, RoundedTemplate = _FPSCounterLegacy003Js.d, 
                HolePunchTemplate = _FPSCounterLegacy003Js.f, WebGlShaderProgram = _FPSCounterLegacy003Js.i, 
                ShadowTemplate = _FPSCounterLegacy003Js.l, getBorderProps = _FPSCounterLegacy003Js.m, 
                resetCounter = _FPSCounterLegacy003Js.n, BorderTemplate = _FPSCounterLegacy003Js.p, 
                RadialGradientTemplate = _FPSCounterLegacy003Js.s, getShadowProps = _FPSCounterLegacy003Js.u;
            }, function(_LazyLegacy008Js) {
                LazyRow = _LazyLegacy008Js.n, LazyColumn = _LazyLegacy008Js.t;
            }, function(_ContentBlockLegacy00cJs) {
                ContentBlock = _ContentBlockLegacy00cJs.t;
            }, function(_createFocusStackLegacy00dJs) {
                useFocusStack = _createFocusStackLegacy00dJs.n;
            }, function(_componentsLegacy00eJs) {
                Hero = _componentsLegacy00eJs.a, SHOW_TEXT = _componentsLegacy00eJs.c, TitleRow = _componentsLegacy00eJs.d, 
                scaled = _componentsLegacy00eJs.f, DISPLAY_SIZE = _componentsLegacy00eJs.i, POSTER_SCALE = _componentsLegacy00eJs.o, 
                AssetPanel = _componentsLegacy00eJs.t;
            }, function(_stylesLegacy00iJs) {
                styles_default = _stylesLegacy00iJs.r;
            }, function(_stateLegacy00jJs) {
                setGlobalBackground = _stateLegacy00jJs.n;
            }, function(_distLegacy00kJs) {
                debounce = _distLegacy00kJs.t;
            } ],
            execute: function() {
                _EdgeFadeTemplate = {
                    props: {
                        left: 0,
                        top: 0,
                        right: 0,
                        bottom: 0
                    }
                }, exports_exports = __exportAll({
                    BorderTemplate: function(_BorderTemplate) {
                        function BorderTemplate() {
                            return _BorderTemplate.apply(this, arguments);
                        }
                        return BorderTemplate.toString = function() {
                            return _BorderTemplate.toString();
                        }, BorderTemplate;
                    }(function() {
                        return BorderTemplate;
                    }),
                    CoreShaderNode: function(_CoreShaderNode) {
                        function CoreShaderNode() {
                            return _CoreShaderNode.apply(this, arguments);
                        }
                        return CoreShaderNode.toString = function() {
                            return _CoreShaderNode.toString();
                        }, CoreShaderNode;
                    }(function() {
                        return CoreShaderNode;
                    }),
                    CoreTextureManager: function(_CoreTextureManager) {
                        function CoreTextureManager() {
                            return _CoreTextureManager.apply(this, arguments);
                        }
                        return CoreTextureManager.toString = function() {
                            return _CoreTextureManager.toString();
                        }, CoreTextureManager;
                    }(function() {
                        return CoreTextureManager;
                    }),
                    EdgeFadeTemplate: function() {
                        return _EdgeFadeTemplate;
                    },
                    FRAME_TIME_BUCKET_COUNT: function() {
                        return 45;
                    },
                    FRAME_TIME_COARSE_MS: function() {
                        return 8;
                    },
                    FRAME_TIME_FINE_MS: function() {
                        return 1;
                    },
                    FRAME_TIME_MAX_MS: function() {
                        return 128;
                    },
                    FRAME_TIME_SPLIT_MS: function() {
                        return 32;
                    },
                    HolePunchTemplate: function(_HolePunchTemplate) {
                        function HolePunchTemplate() {
                            return _HolePunchTemplate.apply(this, arguments);
                        }
                        return HolePunchTemplate.toString = function() {
                            return _HolePunchTemplate.toString();
                        }, HolePunchTemplate;
                    }(function() {
                        return HolePunchTemplate;
                    }),
                    ImageTexture: function(_ImageTexture) {
                        function ImageTexture() {
                            return _ImageTexture.apply(this, arguments);
                        }
                        return ImageTexture.toString = function() {
                            return _ImageTexture.toString();
                        }, ImageTexture;
                    }(function() {
                        return ImageTexture;
                    }),
                    LinearGradientTemplate: function(_LinearGradientTemplate) {
                        function LinearGradientTemplate() {
                            return _LinearGradientTemplate.apply(this, arguments);
                        }
                        return LinearGradientTemplate.toString = function() {
                            return _LinearGradientTemplate.toString();
                        }, LinearGradientTemplate;
                    }(function() {
                        return LinearGradientTemplate;
                    }),
                    RadialGradientTemplate: function(_RadialGradientTemplate) {
                        function RadialGradientTemplate() {
                            return _RadialGradientTemplate.apply(this, arguments);
                        }
                        return RadialGradientTemplate.toString = function() {
                            return _RadialGradientTemplate.toString();
                        }, RadialGradientTemplate;
                    }(function() {
                        return RadialGradientTemplate;
                    }),
                    RendererMain: function(_RendererMain) {
                        function RendererMain() {
                            return _RendererMain.apply(this, arguments);
                        }
                        return RendererMain.toString = function() {
                            return _RendererMain.toString();
                        }, RendererMain;
                    }(function() {
                        return RendererMain;
                    }),
                    RoundedTemplate: function(_RoundedTemplate) {
                        function RoundedTemplate() {
                            return _RoundedTemplate.apply(this, arguments);
                        }
                        return RoundedTemplate.toString = function() {
                            return _RoundedTemplate.toString();
                        }, RoundedTemplate;
                    }(function() {
                        return RoundedTemplate;
                    }),
                    ShadowTemplate: function(_ShadowTemplate) {
                        function ShadowTemplate() {
                            return _ShadowTemplate.apply(this, arguments);
                        }
                        return ShadowTemplate.toString = function() {
                            return _ShadowTemplate.toString();
                        }, ShadowTemplate;
                    }(function() {
                        return ShadowTemplate;
                    }),
                    Texture: function(_Texture) {
                        function Texture() {
                            return _Texture.apply(this, arguments);
                        }
                        return Texture.toString = function() {
                            return _Texture.toString();
                        }, Texture;
                    }(function() {
                        return Texture;
                    }),
                    TextureError: function(_TextureError) {
                        function TextureError() {
                            return _TextureError.apply(this, arguments);
                        }
                        return TextureError.toString = function() {
                            return _TextureError.toString();
                        }, TextureError;
                    }(function() {
                        return TextureError;
                    }),
                    TextureErrorCode: function(_TextureErrorCode) {
                        function TextureErrorCode() {
                            return _TextureErrorCode.apply(this, arguments);
                        }
                        return TextureErrorCode.toString = function() {
                            return _TextureErrorCode.toString();
                        }, TextureErrorCode;
                    }(function() {
                        return TextureErrorCode;
                    }),
                    TextureType: function(_TextureType) {
                        function TextureType() {
                            return _TextureType.apply(this, arguments);
                        }
                        return TextureType.toString = function() {
                            return _TextureType.toString();
                        }, TextureType;
                    }(function() {
                        return TextureType;
                    }),
                    WebGlShaderProgram: function(_WebGlShaderProgram) {
                        function WebGlShaderProgram() {
                            return _WebGlShaderProgram.apply(this, arguments);
                        }
                        return WebGlShaderProgram.toString = function() {
                            return _WebGlShaderProgram.toString();
                        }, WebGlShaderProgram;
                    }(function() {
                        return WebGlShaderProgram;
                    }),
                    clearFontPrefetch: function(_clearFontPrefetch) {
                        function clearFontPrefetch() {
                            return _clearFontPrefetch.apply(this, arguments);
                        }
                        return clearFontPrefetch.toString = function() {
                            return _clearFontPrefetch.toString();
                        }, clearFontPrefetch;
                    }(function() {
                        return clearFontPrefetch;
                    }),
                    closeImageBitmap: function(_closeImageBitmap) {
                        function closeImageBitmap() {
                            return _closeImageBitmap.apply(this, arguments);
                        }
                        return closeImageBitmap.toString = function() {
                            return _closeImageBitmap.toString();
                        }, closeImageBitmap;
                    }(function() {
                        return closeImageBitmap;
                    }),
                    frameTimeBucketLowerBound: function() {
                        return frameTimeBucketLowerBound$1;
                    },
                    getBorderProps: function(_getBorderProps) {
                        function getBorderProps() {
                            return _getBorderProps.apply(this, arguments);
                        }
                        return getBorderProps.toString = function() {
                            return _getBorderProps.toString();
                        }, getBorderProps;
                    }(function() {
                        return getBorderProps;
                    }),
                    getShadowProps: function(_getShadowProps) {
                        function getShadowProps() {
                            return _getShadowProps.apply(this, arguments);
                        }
                        return getShadowProps.toString = function() {
                            return _getShadowProps.toString();
                        }, getShadowProps;
                    }(function() {
                        return getShadowProps;
                    }),
                    isAdvancedShaderProp: function(_isAdvancedShaderProp) {
                        function isAdvancedShaderProp() {
                            return _isAdvancedShaderProp.apply(this, arguments);
                        }
                        return isAdvancedShaderProp.toString = function() {
                            return _isAdvancedShaderProp.toString();
                        }, isAdvancedShaderProp;
                    }(function() {
                        return isAdvancedShaderProp;
                    }),
                    isTextureError: function(_isTextureError) {
                        function isTextureError() {
                            return _isTextureError.apply(this, arguments);
                        }
                        return isTextureError.toString = function() {
                            return _isTextureError.toString();
                        }, isTextureError;
                    }(function() {
                        return isTextureError;
                    }),
                    prefetchFont: function(_prefetchFont) {
                        function prefetchFont() {
                            return _prefetchFont.apply(this, arguments);
                        }
                        return prefetchFont.toString = function() {
                            return _prefetchFont.toString();
                        }, prefetchFont;
                    }(function() {
                        return prefetchFont;
                    }),
                    resolveShaderProps: function(_resolveShaderProps) {
                        function resolveShaderProps() {
                            return _resolveShaderProps.apply(this, arguments);
                        }
                        return resolveShaderProps.toString = function() {
                            return _resolveShaderProps.toString();
                        }, resolveShaderProps;
                    }(function() {
                        return resolveShaderProps;
                    }),
                    resolveTargetFPS: function(_resolveTargetFPS) {
                        function resolveTargetFPS() {
                            return _resolveTargetFPS.apply(this, arguments);
                        }
                        return resolveTargetFPS.toString = function() {
                            return _resolveTargetFPS.toString();
                        }, resolveTargetFPS;
                    }(function() {
                        return resolveTargetFPS;
                    })
                }), FRAME_TIME_BUCKET_COUNT = null !== (_histogram$FRAME_TIME = (histogram = exports_exports).FRAME_TIME_BUCKET_COUNT) && void 0 !== _histogram$FRAME_TIME ? _histogram$FRAME_TIME : 0, 
                frameTimeBucketLowerBound = null !== (_histogram$frameTimeB = histogram.frameTimeBucketLowerBound) && void 0 !== _histogram$frameTimeB ? _histogram$frameTimeB : function() {
                    return 0;
                }, _export("default", function(props) {
                    var cancelled = !1;
                    onCleanup(function() {
                        cancelled = !0;
                    });
                    var contentBlock, solidLogo, columnRef, relaunchBtnRef, _createSignal2 = _slicedToArray(createSignal({}), 2), heroContent = _createSignal2[0], setHeroContent = _createSignal2[1], _createSignal4 = _slicedToArray(createSignal(!1), 2), openPanel = _createSignal4[0], setOpenPanel = _createSignal4[1], _useFocusStack = useFocusStack(), storeFocus = _useFocusStack.storeFocus, restoreFocus = _useFocusStack.restoreFocus, firstRun = !0, bundleType = "undefined" != typeof window && window.bundleType ? String(window.bundleType) : "unknown", _createSignal6 = _slicedToArray(createSignal("Waiting for data..."), 2), benchmarkStatus = _createSignal6[0], setBenchmarkStatus = _createSignal6[1], _createSignal8 = _slicedToArray(createSignal(!1), 2), benchmarkRunning = _createSignal8[0], setBenchmarkRunning = _createSignal8[1], _createSignal0 = _slicedToArray(createSignal(!1), 2), benchmarkDone = _createSignal0[0], setBenchmarkDone = _createSignal0[1], _createSignal10 = _slicedToArray(createSignal(!1), 2), dataLoaded = _createSignal10[0], setDataLoaded = _createSignal10[1], _createSignal12 = _slicedToArray(createSignal(null), 2), renderTime = _createSignal12[0], setRenderTime = _createSignal12[1], _createSignal14 = _slicedToArray(createSignal(null), 2), capabilities = _createSignal14[0], setCapabilities = _createSignal14[1], _createSignal16 = _slicedToArray(createSignal(null), 2), perfStats = _createSignal16[0], setPerfStats = _createSignal16[1], _createSignal18 = _slicedToArray(createSignal(null), 2), drawStats = _createSignal18[0], setDrawStats = _createSignal18[1], _createSignal20 = _slicedToArray(createSignal(null), 2), contextSpy = _createSignal20[0], setContextSpy = _createSignal20[1], fpsValues = [], animatedFpsValues = [], cumulativeAllBuckets = createZeroArray(FRAME_TIME_BUCKET_COUNT), cumulativeAnimBuckets = createZeroArray(FRAME_TIME_BUCKET_COUNT), totalRenderedFrames = 0, totalSampledFrames = 0, totalRenderedMs = 0, totalIdleTicks = 0, totalAnimatedFrames = 0, totalAnimatedMs = 0, worstMaxFrameTime = 0, worstAnimatedMaxFrameTime = 0, totalUpdateMs = 0, totalRenderMs = 0, totalUploadMs = 0, worstMaxUpdateMs = 0, worstMaxRenderMs = 0, worstMaxUploadMs = 0, totalUploadedTextures = 0, totalUploadFrames = 0, worstMaxUploadQueueSize = 0, activeAnimationsWeightedSum = 0, worstMaxActiveAnimations = 0, maxRenderOps = 0, maxQuads = 0, totalKeyHandlerMs = 0, worstKeyHandlerMs = 0, totalKeyTaskMs = 0, worstKeyTaskMs = 0, keyDispatchCount = 0, keyPressSamples = [], lastContextSpy = null, fpsListenerAttached = !1;
                    function safeFetchCapabilities() {
                        try {
                            var root = renderer;
                            if (root && "function" == typeof root.getCapabilities && !capabilities()) {
                                var caps = root.getCapabilities();
                                caps && setCapabilities(caps);
                            }
                        } catch (e) {
                            console.warn("Unable to fetch capabilities:", e);
                        }
                    }
                    function attachFpsListener() {
                        if (!fpsListenerAttached) {
                            var root = renderer;
                            root && "function" == typeof root.on && (fpsListenerAttached = !0, safeFetchCapabilities(), 
                            root.on("fpsUpdate", function(_target, fpsData) {
                                if (benchmarkRunning()) {
                                    var fps = "number" == typeof fpsData ? fpsData : null == fpsData ? void 0 : fpsData.fps;
                                    if ("number" == typeof fps && fps > 0 && fpsValues.push(fps), "object" === _typeof(fpsData) && null !== fpsData) {
                                        var payload = fpsData;
                                        if ("number" == typeof payload.animatedFps && payload.animatedFrames > 0 && animatedFpsValues.push(payload.animatedFps), 
                                        Array.isArray(payload.frameTimeBuckets)) for (var i = 0; i < Math.min(payload.frameTimeBuckets.length, cumulativeAllBuckets.length); i++) cumulativeAllBuckets[i] += payload.frameTimeBuckets[i] || 0;
                                        if (Array.isArray(payload.animatedFrameTimeBuckets)) for (var _i2 = 0; _i2 < Math.min(payload.animatedFrameTimeBuckets.length, cumulativeAnimBuckets.length); _i2++) cumulativeAnimBuckets[_i2] += payload.animatedFrameTimeBuckets[_i2] || 0;
                                        totalRenderedFrames += payload.renderedFrames || 0, totalSampledFrames += payload.sampledFrames || 0, 
                                        totalRenderedMs += payload.renderedMs || 0, totalIdleTicks += payload.idleTicks || 0, 
                                        totalAnimatedFrames += payload.animatedFrames || 0, totalAnimatedMs += payload.animatedMs || 0, 
                                        "number" == typeof payload.maxFrameTime && (worstMaxFrameTime = Math.max(worstMaxFrameTime, payload.maxFrameTime)), 
                                        "number" == typeof payload.animatedMaxFrameTime && (worstAnimatedMaxFrameTime = Math.max(worstAnimatedMaxFrameTime, payload.animatedMaxFrameTime)), 
                                        totalUpdateMs += payload.updateMs || 0, totalRenderMs += payload.renderMs || 0, 
                                        totalUploadMs += payload.uploadMs || 0, "number" == typeof payload.maxUpdateMs && (worstMaxUpdateMs = Math.max(worstMaxUpdateMs, payload.maxUpdateMs)), 
                                        "number" == typeof payload.maxRenderMs && (worstMaxRenderMs = Math.max(worstMaxRenderMs, payload.maxRenderMs)), 
                                        "number" == typeof payload.maxUploadMs && (worstMaxUploadMs = Math.max(worstMaxUploadMs, payload.maxUploadMs)), 
                                        totalUploadedTextures += payload.uploadedTextures || 0, totalUploadFrames += payload.uploadFrames || 0, 
                                        "number" == typeof payload.maxUploadQueueSize && (worstMaxUploadQueueSize = Math.max(worstMaxUploadQueueSize, payload.maxUploadQueueSize)), 
                                        "number" == typeof payload.meanActiveAnimations && (activeAnimationsWeightedSum += payload.meanActiveAnimations * (payload.renderedFrames || 0)), 
                                        "number" == typeof payload.maxActiveAnimations && (worstMaxActiveAnimations = Math.max(worstMaxActiveAnimations, payload.maxActiveAnimations)), 
                                        "number" == typeof payload.renderOps && (maxRenderOps = Math.max(maxRenderOps, payload.renderOps)), 
                                        "number" == typeof payload.quads && (maxQuads = Math.max(maxQuads, payload.quads)), 
                                        payload.contextSpyData && (lastContextSpy = payload.contextSpyData);
                                    }
                                }
                            }));
                        }
                    }
                    function simulateKeyDown(key, cycle, index) {
                        try {
                            var event = document.createEvent("Event");
                            event.initEvent("keydown", !0, !0), Object.defineProperty(event, "key", {
                                value: key,
                                enumerable: !0,
                                configurable: !0
                            }), Object.defineProperty(event, "code", {
                                value: "ArrowDown" === key ? "ArrowDown" : "ArrowUp",
                                enumerable: !0,
                                configurable: !0
                            });
                            var dispatchStart = performance.now();
                            document.dispatchEvent(event);
                            var handlerMs = performance.now() - dispatchStart;
                            keyDispatchCount++, totalKeyHandlerMs += handlerMs, handlerMs > worstKeyHandlerMs && (worstKeyHandlerMs = handlerMs);
                            var sample = {
                                press: keyDispatchCount,
                                cycle: cycle,
                                direction: "ArrowDown" === key ? "down" : "up",
                                index: index,
                                handlerMs: handlerMs,
                                taskMs: handlerMs
                            };
                            keyPressSamples.push(sample);
                            var closeSample = function() {
                                var taskMs = performance.now() - dispatchStart;
                                sample.taskMs = taskMs, totalKeyTaskMs += taskMs, taskMs > worstKeyTaskMs && (worstKeyTaskMs = taskMs);
                            };
                            "function" == typeof queueMicrotask ? queueMicrotask(closeSample) : Promise.resolve().then(closeSample);
                        } catch (e) {
                            console.error("Failed to simulate key down:", e);
                        }
                    }
                    function sleep(ms) {
                        return new Promise(function(resolve) {
                            return setTimeout(resolve, ms);
                        });
                    }
                    function _runBenchmark() {
                        var n;
                        return n = _regenerator().m(function _callee() {
                            var _props$data, _currentCaps$webGlVer, _currentCaps$vertexAr, totalRows, cycle, i, _i3, avgAnimatedFps, avgFps, minFps, maxFps, animP95, animP99, allP95, allP99, avgActiveAnims, meanUploadCost, meanKeyTask, worstKeyPresses, calculatedStats, currentCaps, benchmarkResultsJson, prior, animRateStr;
                            return _regenerator().w(function(_context2) {
                                for (;;) switch (_context2.n) {
                                  case 0:
                                    if (resetCounter(), 0 !== (totalRows = (null == (_props$data = props.data) || null == (_props$data = _props$data.rows) ? void 0 : _props$data.length) || 0)) {
                                        _context2.n = 1;
                                        break;
                                    }
                                    return setBenchmarkStatus("No rows to benchmark"), _context2.a(2);

                                  case 1:
                                    return fpsValues = [], animatedFpsValues = [], cumulativeAllBuckets = createZeroArray(FRAME_TIME_BUCKET_COUNT), 
                                    cumulativeAnimBuckets = createZeroArray(FRAME_TIME_BUCKET_COUNT), totalRenderedFrames = 0, 
                                    totalSampledFrames = 0, totalRenderedMs = 0, totalIdleTicks = 0, totalAnimatedFrames = 0, 
                                    totalAnimatedMs = 0, worstMaxFrameTime = 0, worstAnimatedMaxFrameTime = 0, totalUpdateMs = 0, 
                                    totalRenderMs = 0, totalUploadMs = 0, worstMaxUpdateMs = 0, worstMaxRenderMs = 0, 
                                    worstMaxUploadMs = 0, totalUploadedTextures = 0, totalUploadFrames = 0, worstMaxUploadQueueSize = 0, 
                                    activeAnimationsWeightedSum = 0, worstMaxActiveAnimations = 0, maxRenderOps = 0, 
                                    maxQuads = 0, totalKeyHandlerMs = 0, worstKeyHandlerMs = 0, totalKeyTaskMs = 0, 
                                    worstKeyTaskMs = 0, keyDispatchCount = 0, keyPressSamples = [], lastContextSpy = null, 
                                    setPerfStats(null), setDrawStats(null), setContextSpy(null), setBenchmarkRunning(!0), 
                                    setBenchmarkDone(!1), attachFpsListener(), setBenchmarkStatus("Starting benchmark..."), 
                                    _context2.n = 2, sleep(1500);

                                  case 2:
                                    cycle = 0;

                                  case 3:
                                    if (!(cycle < 2)) {
                                        _context2.n = 14;
                                        break;
                                    }
                                    if (!cancelled) {
                                        _context2.n = 4;
                                        break;
                                    }
                                    return _context2.a(2);

                                  case 4:
                                    i = 0;

                                  case 5:
                                    if (!(i < totalRows - 1)) {
                                        _context2.n = 8;
                                        break;
                                    }
                                    if (!cancelled) {
                                        _context2.n = 6;
                                        break;
                                    }
                                    return _context2.a(2);

                                  case 6:
                                    return setBenchmarkStatus("Cycle ".concat(cycle + 1, "/").concat(2, " - Down ").concat(i + 1, "/").concat(totalRows - 1)), 
                                    simulateKeyDown("ArrowDown", cycle + 1, i + 1), _context2.n = 7, sleep(500);

                                  case 7:
                                    i++, _context2.n = 5;
                                    break;

                                  case 8:
                                    if (!cancelled) {
                                        _context2.n = 9;
                                        break;
                                    }
                                    return _context2.a(2);

                                  case 9:
                                    _i3 = 0;

                                  case 10:
                                    if (!(_i3 < totalRows - 1)) {
                                        _context2.n = 13;
                                        break;
                                    }
                                    if (!cancelled) {
                                        _context2.n = 11;
                                        break;
                                    }
                                    return _context2.a(2);

                                  case 11:
                                    return setBenchmarkStatus("Cycle ".concat(cycle + 1, "/").concat(2, " - Up ").concat(_i3 + 1, "/").concat(totalRows - 1)), 
                                    simulateKeyDown("ArrowUp", cycle + 1, _i3 + 1), _context2.n = 12, sleep(500);

                                  case 12:
                                    _i3++, _context2.n = 10;
                                    break;

                                  case 13:
                                    cycle++, _context2.n = 3;
                                    break;

                                  case 14:
                                    if (!cancelled) {
                                        _context2.n = 15;
                                        break;
                                    }
                                    return _context2.a(2);

                                  case 15:
                                    avgAnimatedFps = totalAnimatedMs > 0 && totalAnimatedFrames > 0 ? totalAnimatedFrames / (totalAnimatedMs / 1e3) : animatedFpsValues.length > 0 ? animatedFpsValues.reduce(function(a, b) {
                                        return a + b;
                                    }, 0) / animatedFpsValues.length : 0, avgFps = totalRenderedMs > 0 && totalSampledFrames > 0 ? totalSampledFrames / (totalRenderedMs / 1e3) : fpsValues.length > 0 ? fpsValues.reduce(function(a, b) {
                                        return a + b;
                                    }, 0) / fpsValues.length : 0, minFps = fpsValues.length > 0 ? Math.min.apply(null, fpsValues) : 0, 
                                    maxFps = fpsValues.length > 0 ? Math.max.apply(null, fpsValues) : 0, animP95 = percentileMs(cumulativeAnimBuckets, .95), 
                                    animP99 = percentileMs(cumulativeAnimBuckets, .99), allP95 = percentileMs(cumulativeAllBuckets, .95), 
                                    allP99 = percentileMs(cumulativeAllBuckets, .99), avgActiveAnims = totalRenderedFrames > 0 ? activeAnimationsWeightedSum / totalRenderedFrames : 0, 
                                    meanUploadCost = totalUploadedTextures > 0 ? totalUploadMs / totalUploadedTextures : 0, 
                                    meanKeyTask = keyDispatchCount > 0 ? totalKeyTaskMs / keyDispatchCount : 0, worstKeyPresses = keyPressSamples.slice().sort(function(a, b) {
                                        return b.taskMs - a.taskMs;
                                    }).slice(0, 5), calculatedStats = {
                                        avgFps: avgFps,
                                        minFps: minFps,
                                        maxFps: maxFps,
                                        totalRenderedFrames: totalRenderedFrames,
                                        totalRenderedMs: totalRenderedMs,
                                        totalIdleTicks: totalIdleTicks,
                                        avgAnimatedFps: avgAnimatedFps,
                                        totalAnimatedFrames: totalAnimatedFrames,
                                        totalAnimatedMs: totalAnimatedMs,
                                        animP95: animP95,
                                        animP99: animP99,
                                        animMaxFrameTime: worstAnimatedMaxFrameTime,
                                        p95: allP95,
                                        p99: allP99,
                                        maxFrameTime: worstMaxFrameTime,
                                        totalUpdateMs: totalUpdateMs,
                                        totalRenderMs: totalRenderMs,
                                        totalUploadMs: totalUploadMs,
                                        maxUpdateMs: worstMaxUpdateMs,
                                        maxRenderMs: worstMaxRenderMs,
                                        maxUploadMs: worstMaxUploadMs,
                                        uploadedTextures: totalUploadedTextures,
                                        uploadFrames: totalUploadFrames,
                                        meanUploadCostMs: meanUploadCost,
                                        maxUploadQueueSize: worstMaxUploadQueueSize,
                                        avgActiveAnimations: avgActiveAnims,
                                        maxActiveAnimations: worstMaxActiveAnimations,
                                        renderOps: maxRenderOps,
                                        quads: maxQuads,
                                        keyPresses: keyDispatchCount,
                                        totalKeyHandlerMs: totalKeyHandlerMs,
                                        maxKeyHandlerMs: worstKeyHandlerMs,
                                        totalKeyTaskMs: totalKeyTaskMs,
                                        maxKeyTaskMs: worstKeyTaskMs,
                                        meanKeyTaskMs: meanKeyTask,
                                        worstKeyPresses: worstKeyPresses
                                    }, safeFetchCapabilities(), currentCaps = capabilities(), benchmarkResultsJson = {
                                        benchmark: {
                                            bundleType: bundleType,
                                            initialRenderTimeMs: null !== renderTime() ? parseFloat(renderTime().toFixed(2)) : null,
                                            totalCycles: 2,
                                            navDelayMs: 500
                                        },
                                        frameRateAndSmoothness: {
                                            avgAnimatedFps: parseFloat(calculatedStats.avgAnimatedFps.toFixed(2)),
                                            animP95Ms: calculatedStats.animP95,
                                            animP99Ms: calculatedStats.animP99,
                                            animMaxFrameTimeMs: parseFloat(calculatedStats.animMaxFrameTime.toFixed(2)),
                                            totalAnimatedFrames: calculatedStats.totalAnimatedFrames,
                                            totalAnimatedMs: parseFloat(calculatedStats.totalAnimatedMs.toFixed(2)),
                                            overallRenderedFps: parseFloat(calculatedStats.avgFps.toFixed(2)),
                                            minFps: parseFloat(calculatedStats.minFps.toFixed(2)),
                                            maxFps: parseFloat(calculatedStats.maxFps.toFixed(2)),
                                            allP95Ms: calculatedStats.p95,
                                            allP99Ms: calculatedStats.p99,
                                            allMaxFrameTimeMs: parseFloat(calculatedStats.maxFrameTime.toFixed(2)),
                                            totalRenderedFrames: calculatedStats.totalRenderedFrames,
                                            totalRenderedMs: parseFloat(calculatedStats.totalRenderedMs.toFixed(2)),
                                            totalIdleTicks: calculatedStats.totalIdleTicks
                                        },
                                        frameWorkSplit: {
                                            totalUpdateMs: parseFloat(calculatedStats.totalUpdateMs.toFixed(2)),
                                            maxUpdateMs: parseFloat(calculatedStats.maxUpdateMs.toFixed(2)),
                                            totalRenderMs: parseFloat(calculatedStats.totalRenderMs.toFixed(2)),
                                            maxRenderMs: parseFloat(calculatedStats.maxRenderMs.toFixed(2)),
                                            totalUploadMs: parseFloat(calculatedStats.totalUploadMs.toFixed(2)),
                                            maxUploadMs: parseFloat(calculatedStats.maxUploadMs.toFixed(2))
                                        },
                                        inputDispatch: {
                                            keyPresses: calculatedStats.keyPresses,
                                            totalMs: parseFloat(calculatedStats.totalKeyTaskMs.toFixed(2)),
                                            maxMs: parseFloat(calculatedStats.maxKeyTaskMs.toFixed(2)),
                                            meanMs: parseFloat(calculatedStats.meanKeyTaskMs.toFixed(2)),
                                            handlerTotalMs: parseFloat(calculatedStats.totalKeyHandlerMs.toFixed(2)),
                                            handlerMaxMs: parseFloat(calculatedStats.maxKeyHandlerMs.toFixed(2)),
                                            worstPresses: calculatedStats.worstKeyPresses.map(function(sample) {
                                                return {
                                                    press: sample.press,
                                                    cycle: sample.cycle,
                                                    direction: sample.direction,
                                                    index: sample.index,
                                                    ms: parseFloat(sample.taskMs.toFixed(2)),
                                                    handlerMs: parseFloat(sample.handlerMs.toFixed(2))
                                                };
                                            })
                                        },
                                        assetsAnimationsGeometry: {
                                            drawCalls: calculatedStats.renderOps,
                                            quads: calculatedStats.quads,
                                            uploadedTextures: calculatedStats.uploadedTextures,
                                            uploadFrames: calculatedStats.uploadFrames,
                                            meanUploadCostMs: parseFloat(calculatedStats.meanUploadCostMs.toFixed(2)),
                                            maxUploadQueueSize: calculatedStats.maxUploadQueueSize,
                                            avgActiveAnimations: parseFloat(calculatedStats.avgActiveAnimations.toFixed(2)),
                                            maxActiveAnimations: calculatedStats.maxActiveAnimations
                                        },
                                        sceneConfig: {
                                            displaySize: DISPLAY_SIZE,
                                            showText: SHOW_TEXT,
                                            posterScale: POSTER_SCALE
                                        },
                                        glCallsPerInterval: lastContextSpy || null,
                                        rendererCapabilities: currentCaps ? {
                                            renderMode: currentCaps.renderMode,
                                            webGlVersion: null !== (_currentCaps$webGlVer = currentCaps.webGlVersion) && void 0 !== _currentCaps$webGlVer ? _currentCaps$webGlVer : null,
                                            vertexArrayObject: null !== (_currentCaps$vertexAr = currentCaps.vertexArrayObject) && void 0 !== _currentCaps$vertexAr ? _currentCaps$vertexAr : null,
                                            maxTextureSize: currentCaps.maxTextureSize,
                                            maxTextureUnits: currentCaps.maxTextureUnits,
                                            pixelRatio: {
                                                physical: parseFloat(getPixelRatios().physical.toFixed(2)),
                                                logical: parseFloat(getPixelRatios().logical.toFixed(2)),
                                                windowDpr: parseFloat(getPixelRatios().dpr.toFixed(2))
                                            },
                                            textureProcessingTimeLimitMs: getTextureProcessingTimeLimit(),
                                            imageWorkers: getImageWorkersCount(),
                                            deviceCores: getDeviceCores()
                                        } : {
                                            pixelRatio: {
                                                physical: parseFloat(getPixelRatios().physical.toFixed(2)),
                                                logical: parseFloat(getPixelRatios().logical.toFixed(2)),
                                                windowDpr: parseFloat(getPixelRatios().dpr.toFixed(2))
                                            },
                                            textureProcessingTimeLimitMs: getTextureProcessingTimeLimit(),
                                            imageWorkers: getImageWorkersCount(),
                                            deviceCores: getDeviceCores()
                                        }
                                    }, console.log("=== BENCHMARK PERFORMANCE RESULTS (JSON) ==="), console.log(JSON.stringify(benchmarkResultsJson, null, 2));
                                    try {
                                        (prior = JSON.parse(localStorage.getItem("benchmarkRuns") || "[]")).push({
                                            url: window.location.pathname + window.location.search,
                                            results: benchmarkResultsJson
                                        }), localStorage.setItem("benchmarkRuns", JSON.stringify(prior.slice(-12)));
                                    } catch (e) {}
                                    batch(function() {
                                        setPerfStats(calculatedStats), setDrawStats({
                                            renderOps: maxRenderOps,
                                            quads: maxQuads
                                        }), setContextSpy(lastContextSpy), setBenchmarkDone(!0), setBenchmarkRunning(!1);
                                    }), setTimeout(function() {
                                        relaunchBtnRef && "function" == typeof relaunchBtnRef.focus && relaunchBtnRef.focus();
                                    }, 100), fpsValues.length > 0 || totalRenderedFrames > 0 ? (animRateStr = "".concat(avgAnimatedFps > 0 ? avgAnimatedFps.toFixed(1) : avgFps.toFixed(1), " FPS"), 
                                    setBenchmarkStatus("Anim: ".concat(animRateStr, " (p95: ").concat(animP95, "ms, max: ").concat(worstAnimatedMaxFrameTime.toFixed(0), "ms) | All: ").concat(avgFps.toFixed(1), " FPS"))) : setBenchmarkStatus("Done - No FPS samples collected");

                                  case 16:
                                    return _context2.a(2);
                                }
                            }, _callee);
                        }), _runBenchmark = function() {
                            var t = this, e = arguments;
                            return new Promise(function(r, o) {
                                var a = n.apply(t, e);
                                function _next(n) {
                                    asyncGeneratorStep(a, r, o, _next, _throw, "next", n);
                                }
                                function _throw(n) {
                                    asyncGeneratorStep(a, r, o, _next, _throw, "throw", n);
                                }
                                _next(void 0);
                            });
                        }, _runBenchmark.apply(this, arguments);
                    }
                    createEffect(function() {
                        var _props$data2, _rows$, rows = null == (_props$data2 = props.data) ? void 0 : _props$data2.rows;
                        if (rows && 0 !== rows.length) {
                            var firstItems = (null == (_rows$ = rows[0]) ? void 0 : _rows$.items) ? rows[0].items() : null;
                            if (firstItems && firstItems.length > 0) {
                                if (!dataLoaded()) {
                                    var startTime = performance.now();
                                    setDataLoaded(!0), renderer && "function" == typeof renderer.on && renderer.on("idle", function() {
                                        null === renderTime() && setRenderTime(performance.now() - startTime);
                                    });
                                }
                                if (!benchmarkDone() && !benchmarkRunning()) {
                                    attachFpsListener();
                                    var timeoutId = setTimeout(function() {
                                        cancelled || function() {
                                            _runBenchmark.apply(this, arguments);
                                        }();
                                    }, 2e3);
                                    onCleanup(function() {
                                        return clearTimeout(timeoutId);
                                    });
                                }
                            }
                        }
                    });
                    var delayedBackgrounds = debounce(setGlobalBackground, 800), delayedHero = debounce(function(content) {
                        return setHeroContent(content || {});
                    }, 600);
                    function onRowChanged(selectedIndex, column, row, lastIndex) {
                        if (selectedIndex !== lastIndex) {
                            var values = 0 === selectedIndex ? {
                                y: 300,
                                alpha: 1
                            } : {
                                y: 200,
                                alpha: 0
                            };
                            contentBlock.animate(values, {
                                duration: 300,
                                easing: "ease-in-out"
                            }).start();
                            var values2 = 0 === selectedIndex ? {
                                y: 80,
                                alpha: 1
                            } : {
                                y: 0,
                                alpha: 0
                            };
                            solidLogo.animate(values2, {
                                duration: 300,
                                easing: "ease-in-out"
                            }).start();
                        }
                    }
                    createEffect(on(activeElement, function(elm) {
                        if (elm) {
                            var item = elm.item || {};
                            firstRun ? (item.backdrop && setGlobalBackground(item.backdrop), item.heroContent && setHeroContent(item.heroContent), 
                            firstRun = !1) : (item.backdrop && delayedBackgrounds(item.backdrop), item.heroContent && delayedHero(item.heroContent));
                        }
                    }, {
                        defer: !0
                    }));
                    var overlayBgStyle = {
                        width: 700,
                        height: 140,
                        color: 204,
                        borderRadius: 12
                    }, overlayTitleStyle = {
                        fontFamily: "Roboto",
                        fontSize: 28,
                        color: 4294967295,
                        lineHeight: 34
                    }, overlayStatusStyle = {
                        fontFamily: "Roboto",
                        fontSize: 22,
                        lineHeight: 28
                    }, resultsBgStyle = {
                        color: 245,
                        borderRadius: 12
                    }, resultsHeaderStyle = {
                        fontFamily: "Roboto",
                        fontSize: 16,
                        lineHeight: 22,
                        color: 14221311
                    }, resultsLabelStyle = {
                        fontFamily: "Roboto",
                        fontSize: 17,
                        lineHeight: 24,
                        color: 2661195519
                    }, resultsValueStyle = {
                        fontFamily: "Roboto",
                        fontSize: 17,
                        lineHeight: 24,
                        color: 4294967295
                    }, ResultRow = function(rowProps) {
                        return _el$ = createElement("view"), _el$2 = createElement("text"), _el$3 = createElement("text"), 
                        insertNode(_el$, _el$2), insertNode(_el$, _el$3), setProp(_el$2, "x", 28), setProp(_el$2, "style", resultsLabelStyle), 
                        insert(_el$2, function() {
                            return rowProps.label;
                        }), setProp(_el$3, "x", 350), setProp(_el$3, "style", resultsValueStyle), insert(_el$3, function() {
                            return rowProps.value;
                        }), effect(function(_$p) {
                            return setProp(_el$, "y", rowProps.y, _$p);
                        }), _el$;
                        var _el$, _el$2, _el$3;
                    }, SectionHeader = function(headerProps) {
                        return _el$4 = createElement("view"), _el$5 = createElement("text"), insertNode(_el$4, _el$5), 
                        setProp(_el$5, "x", 28), setProp(_el$5, "style", resultsHeaderStyle), insert(_el$5, function() {
                            return headerProps.title;
                        }), effect(function(_$p) {
                            return setProp(_el$4, "y", headerProps.y, _$p);
                        }), _el$4;
                        var _el$4, _el$5;
                    }, SectionDivider = function(divProps) {
                        return _el$6 = createElement("view"), setProp(_el$6, "width", 644), setProp(_el$6, "height", 1), 
                        setProp(_el$6, "x", 28), setProp(_el$6, "color", 4294967074), effect(function(_$p) {
                            return setProp(_el$6, "y", divProps.y, _$p);
                        }), _el$6;
                        var _el$6;
                    }, glEntries = function() {
                        var spy = contextSpy();
                        if (!spy) return [];
                        var entries = [];
                        for (var key in spy) Object.prototype.hasOwnProperty.call(spy, key) && entries.push([ key, spy[key] || 0 ]);
                        return entries.sort(function(a, b) {
                            return b[1] - a[1];
                        });
                    }, relaunchBtnStyle = {
                        width: 320,
                        height: 44,
                        color: 858993663,
                        borderRadius: 8,
                        $focus: {
                            color: 14221311
                        }
                    }, relaunchBtnTextStyle = {
                        fontFamily: "Roboto",
                        fontSize: 18,
                        lineHeight: 24,
                        color: 4294967295,
                        $focus: {
                            color: 255
                        }
                    }, glRowsCount = function() {
                        return glEntries().length;
                    }, dividerCapsY = function() {
                        return 512 + (glRowsCount() > 0 ? 26 * glRowsCount() : 26) + 6;
                    }, secCapsY = function() {
                        return dividerCapsY() + 10;
                    }, capsStartY = function() {
                        return secCapsY() + 26;
                    }, relaunchBtnY = function() {
                        return capsStartY() + 208 + 16;
                    };
                    return createComponent(Show, {
                        get when() {
                            return dataLoaded();
                        },
                        get fallback() {
                            return _el$25 = createElement("text"), insertNode(_el$25, createTextNode("Loading Data...")), 
                            setProp(_el$25, "x", 960), setProp(_el$25, "y", 540), setProp(_el$25, "fontSize", 40), 
                            setProp(_el$25, "color", 4294967295), setProp(_el$25, "mount", .5), _el$25;
                            var _el$25;
                        },
                        get children() {
                            var _el$7 = createElement("view"), _el$8 = createElement("view"), _el$9 = createElement("text"), _el$1 = createElement("view"), _el$10 = createElement("view"), _el$11 = createElement("text"), _el$13 = createElement("view"), _el$14 = createElement("text"), _el$16 = createElement("text"), _el$17 = createElement("text"), _el$18 = createElement("text");
                            insertNode(_el$7, _el$8), insertNode(_el$7, _el$13), setProp(_el$7, "forwardFocus", 2), 
                            insertNode(_el$8, _el$9), insertNode(_el$8, _el$1), insertNode(_el$8, _el$10), insertNode(_el$8, _el$11);
                            var _c$;
                            return "function" == typeof solidLogo ? use(solidLogo, _el$8) : solidLogo = _el$8, 
                            setProp(_el$8, "width", 300), setProp(_el$8, "height", 150), setProp(_el$8, "x", 162), 
                            setProp(_el$8, "y", 80), setProp(_el$8, "zIndex", 105), insertNode(_el$9, createTextNode("Built With:")), 
                            setProp(_el$9, "x", 80), setProp(_el$9, "fontSize", 28), setProp(_el$9, "color", 4143380121), 
                            setProp(_el$1, "y", 32), setProp(_el$1, "src", "./assets/solidWord.png"), setProp(_el$1, "width", 280), 
                            setProp(_el$1, "height", 52), setProp(_el$10, "x", 0), setProp(_el$10, "y", 110), 
                            setProp(_el$10, "src", "./assets/tmdb.png"), setProp(_el$10, "width", 80), setProp(_el$10, "height", 41), 
                            insertNode(_el$11, createTextNode("This product uses the TMDB API but is not endorsed or certified by TMDB.")), 
                            setProp(_el$11, "x", 90), setProp(_el$11, "y", 110), setProp(_el$11, "contain", "width"), 
                            setProp(_el$11, "width", 160), setProp(_el$11, "fontSize", 12), setProp(_el$11, "color", 4143380121), 
                            insert(_el$7, createComponent(ContentBlock, {
                                ref: function(r$) {
                                    "function" == typeof contentBlock ? contentBlock(r$) : contentBlock = r$;
                                },
                                y: 300,
                                x: 162,
                                get content() {
                                    return heroContent();
                                }
                            }), _el$13), insert(_el$7, createComponent(LazyColumn, {
                                ref: function(r$) {
                                    "function" == typeof columnRef ? columnRef(r$) : columnRef = r$;
                                },
                                get y() {
                                    return scaled(500);
                                },
                                upCount: 3,
                                get each() {
                                    var _props$data3;
                                    return (null == (_props$data3 = props.data) ? void 0 : _props$data3.rows) || [];
                                },
                                id: "BenchmarkColumn",
                                onSelectedChanged: onRowChanged,
                                onEnter: function() {
                                    return setOpenPanel(!0);
                                },
                                get autofocus() {
                                    return memo(function() {
                                        var _props$data4;
                                        return !!(null == (_props$data4 = props.data) || null == (_props$data4 = _props$data4.rows) || null == (_props$data4 = _props$data4[0]) ? void 0 : _props$data4.items);
                                    })() ? props.data.rows[0].items() : void 0;
                                },
                                get gap() {
                                    return scaled(40);
                                },
                                throttleInput: 250,
                                delay: 250,
                                eagerLoad: !0,
                                get style() {
                                    return styles_default.Column;
                                },
                                children: function(row) {
                                    return "Hero" === row().type ? createComponent(LazyRow, {
                                        gap: 80,
                                        upCount: 2,
                                        bufferSize: 1,
                                        scroll: "center",
                                        centerScroll: !0,
                                        get each() {
                                            return row().items();
                                        },
                                        y: 50,
                                        get height() {
                                            return row().height;
                                        },
                                        children: function(item) {
                                            return createComponent(Hero, {
                                                get item() {
                                                    return item();
                                                }
                                            });
                                        }
                                    }) : createComponent(TitleRow, {
                                        get row() {
                                            return row();
                                        },
                                        get title() {
                                            return row().title;
                                        },
                                        get height() {
                                            return row().height;
                                        },
                                        get items() {
                                            return row().items();
                                        }
                                    });
                                }
                            }), _el$13), insertNode(_el$13, _el$14), insertNode(_el$13, _el$16), insertNode(_el$13, _el$17), 
                            insertNode(_el$13, _el$18), setProp(_el$13, "x", 610), setProp(_el$13, "y", 20), 
                            setProp(_el$13, "zIndex", 200), setProp(_el$13, "style", overlayBgStyle), insertNode(_el$14, createTextNode("Benchmark (version: 183)")), 
                            setProp(_el$14, "x", 20), setProp(_el$14, "y", 16), setProp(_el$14, "style", overlayTitleStyle), 
                            setProp(_el$16, "x", 360), setProp(_el$16, "y", 20), setProp(_el$16, "width", 320), 
                            setProp(_el$16, "contain", "width"), setProp(_el$16, "textAlign", "right"), setProp(_el$16, "fontSize", 24), 
                            insert(_el$16, bundleType), setProp(_el$17, "x", 20), setProp(_el$17, "y", 54), 
                            setProp(_el$17, "contain", "width"), setProp(_el$17, "width", 660), setProp(_el$17, "style", overlayStatusStyle), 
                            insert(_el$17, benchmarkStatus), setProp(_el$18, "x", 20), setProp(_el$18, "y", 92), 
                            setProp(_el$18, "style", overlayStatusStyle), setProp(_el$18, "color", 16746751), 
                            insert(_el$18, (_c$ = memo(function() {
                                return null !== renderTime();
                            }), function() {
                                var _renderTime;
                                return _c$() ? "Initial Render: ".concat(null == (_renderTime = renderTime()) ? void 0 : _renderTime.toFixed(2), "ms") : "Rendering...";
                            })), insert(_el$7, createComponent(Show, {
                                get when() {
                                    return benchmarkDone();
                                },
                                get children() {
                                    var _el$19 = createElement("view"), _el$20 = createElement("text"), _el$22 = createElement("view"), _el$23 = createElement("text");
                                    insertNode(_el$19, _el$20), insertNode(_el$19, _el$22), setProp(_el$19, "x", 610), 
                                    setProp(_el$19, "y", 175), setProp(_el$19, "zIndex", 8e3), setProp(_el$19, "width", 700), 
                                    setProp(_el$19, "style", resultsBgStyle), insertNode(_el$20, createTextNode("Performance Breakdown")), 
                                    setProp(_el$20, "x", 28), setProp(_el$20, "y", 14), setProp(_el$20, "style", overlayTitleStyle), 
                                    insert(_el$19, createComponent(SectionHeader, {
                                        y: 50,
                                        title: "FRAME RATE & SMOOTHNESS"
                                    }), _el$22), insert(_el$19, createComponent(ResultRow, {
                                        y: 74,
                                        label: "Animated FPS",
                                        get value() {
                                            return memo(function() {
                                                return !!perfStats();
                                            })() ? "".concat(perfStats().avgAnimatedFps.toFixed(1), " FPS") : "—";
                                        }
                                    }), _el$22), insert(_el$19, createComponent(ResultRow, {
                                        y: 100,
                                        label: "Anim p95 / p99",
                                        get value() {
                                            return memo(function() {
                                                return !!perfStats();
                                            })() ? "".concat(perfStats().animP95, "ms / ").concat(perfStats().animP99, "ms") : "—";
                                        }
                                    }), _el$22), insert(_el$19, createComponent(ResultRow, {
                                        y: 126,
                                        label: "Worst Anim Frame",
                                        get value() {
                                            return memo(function() {
                                                return !!perfStats();
                                            })() ? "".concat(perfStats().animMaxFrameTime.toFixed(1), "ms") : "—";
                                        }
                                    }), _el$22), insert(_el$19, createComponent(ResultRow, {
                                        y: 152,
                                        label: "Overall Rendered FPS",
                                        get value() {
                                            return memo(function() {
                                                return !!perfStats();
                                            })() ? "".concat(perfStats().avgFps.toFixed(1), " FPS (").concat(perfStats().totalRenderedFrames, "f)") : "—";
                                        }
                                    }), _el$22), insert(_el$19, createComponent(ResultRow, {
                                        y: 178,
                                        label: "All p95 / p99 / Max",
                                        get value() {
                                            return memo(function() {
                                                return !!perfStats();
                                            })() ? "".concat(perfStats().p95, "ms / ").concat(perfStats().p99, "ms / ").concat(perfStats().maxFrameTime.toFixed(1), "ms") : "—";
                                        }
                                    }), _el$22), insert(_el$19, createComponent(ResultRow, {
                                        y: 204,
                                        label: "Frames / Idle Polls",
                                        get value() {
                                            return memo(function() {
                                                return !!perfStats();
                                            })() ? "".concat(perfStats().totalRenderedFrames, " drew / ").concat(perfStats().totalIdleTicks, " idle") : "—";
                                        }
                                    }), _el$22), insert(_el$19, createComponent(SectionDivider, {
                                        y: 232
                                    }), _el$22), insert(_el$19, createComponent(SectionHeader, {
                                        y: 242,
                                        title: "FRAME WORK SPLIT (INTERVAL / PEAK)"
                                    }), _el$22), insert(_el$19, createComponent(ResultRow, {
                                        y: 266,
                                        label: "Scene Update (upd)",
                                        get value() {
                                            return memo(function() {
                                                return !!perfStats();
                                            })() ? "".concat(perfStats().totalUpdateMs.toFixed(1), "ms total | ").concat(perfStats().maxUpdateMs.toFixed(1), "ms peak") : "—";
                                        }
                                    }), _el$22), insert(_el$19, createComponent(ResultRow, {
                                        y: 292,
                                        label: "Render Pass (rnd)",
                                        get value() {
                                            return memo(function() {
                                                return !!perfStats();
                                            })() ? "".concat(perfStats().totalRenderMs.toFixed(1), "ms total | ").concat(perfStats().maxRenderMs.toFixed(1), "ms peak") : "—";
                                        }
                                    }), _el$22), insert(_el$19, createComponent(ResultRow, {
                                        y: 318,
                                        label: "Texture Upload (upl)",
                                        get value() {
                                            return memo(function() {
                                                return !!perfStats();
                                            })() ? "".concat(perfStats().totalUploadMs.toFixed(1), "ms total | ").concat(perfStats().maxUploadMs.toFixed(1), "ms peak") : "—";
                                        }
                                    }), _el$22), insert(_el$19, createComponent(SectionDivider, {
                                        y: 346
                                    }), _el$22), insert(_el$19, createComponent(SectionHeader, {
                                        y: 356,
                                        title: "ASSETS, ANIMATIONS & GEOMETRY"
                                    }), _el$22), insert(_el$19, createComponent(ResultRow, {
                                        y: 380,
                                        label: "Draw Calls / Quads",
                                        get value() {
                                            return memo(function() {
                                                return !!drawStats();
                                            })() ? "".concat(drawStats().renderOps, " draws / ").concat(drawStats().quads, " quads") : "—";
                                        }
                                    }), _el$22), insert(_el$19, createComponent(ResultRow, {
                                        y: 406,
                                        label: "Texture Uploads",
                                        get value() {
                                            return memo(function() {
                                                return !!perfStats();
                                            })() ? "".concat(perfStats().uploadedTextures, " tex / ").concat(perfStats().uploadFrames, "f (").concat(perfStats().meanUploadCostMs.toFixed(1), "ms avg)") : "—";
                                        }
                                    }), _el$22), insert(_el$19, createComponent(ResultRow, {
                                        y: 432,
                                        label: "Upload Queue Peak",
                                        get value() {
                                            return memo(function() {
                                                return !!perfStats();
                                            })() ? "q <= ".concat(perfStats().maxUploadQueueSize) : "—";
                                        }
                                    }), _el$22), insert(_el$19, createComponent(ResultRow, {
                                        y: 458,
                                        label: "Active Animations",
                                        get value() {
                                            return memo(function() {
                                                return !!perfStats();
                                            })() ? "".concat(perfStats().avgActiveAnimations.toFixed(1), " avg | ").concat(perfStats().maxActiveAnimations, " peak") : "—";
                                        }
                                    }), _el$22), insert(_el$19, createComponent(SectionDivider, {
                                        y: 486
                                    }), _el$22), insert(_el$19, createComponent(SectionHeader, {
                                        y: 486,
                                        title: "GL CALLS / INTERVAL"
                                    }), _el$22), insert(_el$19, createComponent(Show, {
                                        get when() {
                                            return glEntries().length > 0;
                                        },
                                        get fallback() {
                                            return _el$27 = createElement("text"), insertNode(_el$27, createTextNode("off (?contextSpy=true)")), 
                                            setProp(_el$27, "x", 350), setProp(_el$27, "y", 486), setProp(_el$27, "style", resultsValueStyle), 
                                            _el$27;
                                            var _el$27;
                                        },
                                        get children() {
                                            return createComponent(For, {
                                                get each() {
                                                    return glEntries();
                                                },
                                                children: function(_ref, i) {
                                                    var _ref2 = _slicedToArray(_ref, 2), name = _ref2[0], count = _ref2[1];
                                                    return createComponent(ResultRow, {
                                                        get y() {
                                                            return 512 + 26 * i();
                                                        },
                                                        label: name,
                                                        value: "".concat(count)
                                                    });
                                                }
                                            });
                                        }
                                    }), _el$22), insert(_el$19, createComponent(SectionDivider, {
                                        get y() {
                                            return dividerCapsY();
                                        }
                                    }), _el$22), insert(_el$19, createComponent(SectionHeader, {
                                        get y() {
                                            return secCapsY();
                                        },
                                        title: "RENDERER CAPABILITIES"
                                    }), _el$22), insert(_el$19, createComponent(Show, {
                                        get when() {
                                            return capabilities();
                                        },
                                        get fallback() {
                                            return _el$29 = createElement("text"), insertNode(_el$29, createTextNode("Capabilities unavailable")), 
                                            setProp(_el$29, "x", 28), setProp(_el$29, "style", resultsLabelStyle), effect(function(_$p) {
                                                return setProp(_el$29, "y", capsStartY(), _$p);
                                            }), _el$29;
                                            var _el$29;
                                        },
                                        get children() {
                                            return [ createComponent(ResultRow, {
                                                get y() {
                                                    return capsStartY();
                                                },
                                                label: "Render Mode",
                                                get value() {
                                                    return capabilities().renderMode;
                                                }
                                            }), createComponent(ResultRow, {
                                                get y() {
                                                    return capsStartY() + 26;
                                                },
                                                label: "WebGL Version",
                                                get value() {
                                                    return "webgl" === (caps = capabilities()).renderMode ? "WebGL ".concat(null !== (_caps$webGlVersion = caps.webGlVersion) && void 0 !== _caps$webGlVersion ? _caps$webGlVersion : "?") : "Canvas2D";
                                                    var caps, _caps$webGlVersion;
                                                }
                                            }), createComponent(ResultRow, {
                                                get y() {
                                                    return capsStartY() + 52;
                                                },
                                                label: "Vertex Array Obj (VAO)",
                                                get value() {
                                                    return capabilities().vertexArrayObject ? "Enabled (on)" : "Disabled (off)";
                                                }
                                            }), createComponent(ResultRow, {
                                                get y() {
                                                    return capsStartY() + 78;
                                                },
                                                label: "Max Texture Size",
                                                get value() {
                                                    return "".concat(capabilities().maxTextureSize, "px");
                                                }
                                            }), createComponent(ResultRow, {
                                                get y() {
                                                    return capsStartY() + 104;
                                                },
                                                label: "Max Texture Units",
                                                get value() {
                                                    return "".concat(capabilities().maxTextureUnits, " units");
                                                }
                                            }), createComponent(ResultRow, {
                                                get y() {
                                                    return capsStartY() + 130;
                                                },
                                                label: "Pixel Ratio (Phys / Log)",
                                                get value() {
                                                    return "".concat(getPixelRatios().physical.toFixed(2), "x / ").concat(getPixelRatios().logical.toFixed(2), "x");
                                                }
                                            }), createComponent(ResultRow, {
                                                get y() {
                                                    return capsStartY() + 156;
                                                },
                                                label: "Image Workers",
                                                get value() {
                                                    return "".concat(getImageWorkersCount(), " (").concat(getDeviceCores(), ")");
                                                }
                                            }), createComponent(ResultRow, {
                                                get y() {
                                                    return capsStartY() + 182;
                                                },
                                                label: "Tex Process Limit",
                                                get value() {
                                                    return "".concat(getTextureProcessingTimeLimit(), "ms");
                                                }
                                            }) ];
                                        }
                                    }), _el$22), insertNode(_el$22, _el$23);
                                    return "function" == typeof relaunchBtnRef ? use(relaunchBtnRef, _el$22) : relaunchBtnRef = _el$22, 
                                    setProp(_el$22, "x", 190), setProp(_el$22, "style", relaunchBtnStyle), setProp(_el$22, "forwardStates", !0), 
                                    setProp(_el$22, "autofocus", !0), setProp(_el$22, "onEnter", function() {
                                        return document.location.reload(), !0;
                                    }), insertNode(_el$23, createTextNode("Relaunch Benchmark")), setProp(_el$23, "x", 160), 
                                    setProp(_el$23, "y", 22), setProp(_el$23, "mount", .5), setProp(_el$23, "style", relaunchBtnTextStyle), 
                                    effect(function(_p$) {
                                        var _v$ = relaunchBtnY() + 44 + 18, _v$2 = relaunchBtnY();
                                        return _v$ !== _p$.e && (_p$.e = setProp(_el$19, "height", _v$, _p$.e)), _v$2 !== _p$.t && (_p$.t = setProp(_el$22, "y", _v$2, _p$.t)), 
                                        _p$;
                                    }, {
                                        e: void 0,
                                        t: void 0
                                    }), _el$19;
                                }
                            }), null), insert(_el$7, createComponent(AssetPanel, {
                                onFocus: storeFocus,
                                close: function() {
                                    return setOpenPanel(!1), restoreFocus(), !0;
                                },
                                get open() {
                                    return openPanel();
                                },
                                get item() {
                                    return heroContent();
                                }
                            }), null), effect(function(_p$) {
                                var _v$3 = -1 !== bundleType.indexOf("LEGACY") ? 4291559679 : 16746751, _v$4 = benchmarkDone() ? 16746751 : benchmarkRunning() ? 4291559679 : 2863311615;
                                return _v$3 !== _p$.e && (_p$.e = setProp(_el$16, "color", _v$3, _p$.e)), _v$4 !== _p$.t && (_p$.t = setProp(_el$17, "color", _v$4, _p$.t)), 
                                _p$;
                            }, {
                                e: void 0,
                                t: void 0
                            }), _el$7;
                        }
                    });
                });
            }
        };
    });
}();