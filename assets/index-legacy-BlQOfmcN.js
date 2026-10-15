!function() {
    function _toConsumableArray(r) {
        return function(r) {
            if (Array.isArray(r)) return _arrayLikeToArray2(r);
        }(r) || function(r) {
            if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);
        }(r) || _unsupportedIterableToArray2(r) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }();
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
        }(r, e) || _unsupportedIterableToArray2(r, e) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }();
    }
    function _unsupportedIterableToArray2(r, a) {
        if (r) {
            if ("string" == typeof r) return _arrayLikeToArray2(r, a);
            var t = {}.toString.call(r).slice(8, -1);
            return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray2(r, a) : void 0;
        }
    }
    function _arrayLikeToArray2(r, a) {
        (null == a || a > r.length) && (a = r.length);
        for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
        return n;
    }
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
    function _asyncToGenerator(n) {
        return function() {
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
        };
    }
    function _createForOfIteratorHelper(r, e) {
        var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
        if (!t) {
            if (Array.isArray(r) || (t = function(r, a) {
                if (r) {
                    if ("string" == typeof r) return _arrayLikeToArray(r, a);
                    var t = {}.toString.call(r).slice(8, -1);
                    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
                }
            }(r)) || e && r && "number" == typeof r.length) {
                t && (r = t);
                var _n = 0, F = function() {};
                return {
                    s: F,
                    n: function() {
                        return _n >= r.length ? {
                            done: !0
                        } : {
                            done: !1,
                            value: r[_n++]
                        };
                    },
                    e: function(r) {
                        throw r;
                    },
                    f: F
                };
            }
            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        var o, a = !0, u = !1;
        return {
            s: function() {
                t = t.call(r);
            },
            n: function() {
                var r = t.next();
                return a = r.done, r;
            },
            e: function(r) {
                u = !0, o = r;
            },
            f: function() {
                try {
                    a || null == t.return || t.return();
                } finally {
                    if (u) throw o;
                }
            }
        };
    }
    function _arrayLikeToArray(r, a) {
        (null == a || a > r.length) && (a = r.length);
        for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
        return n;
    }
    System.register([ "./render-legacy-BxvcalZ-.js", "./utils-legacy-DO4k3ZyV.js", "./mergeProps-legacy-BTRRn5TW.js", "./web-legacy-CZsMP84a.js", "./Lazy-legacy-CJ162Uf5.js", "./chainFunctions-legacy-B56_1Kk7.js", "./Column-legacy-lVZXMaH6.js", "./FPSCounter-legacy-n-V_Iql7.js", "./ContentBlock-legacy-CJZtXfqn.js", "./createFocusStack-legacy-CtUMQpnV.js", "./components-legacy-DCeehsw7.js", "./theme-legacy-Bdf29FvE.js", "./styles-legacy-Bwti77SE.js", "./state-legacy-CZxGbh9b.js", "./dist-legacy-C3zZeuHR.js", "./api-legacy-fGc-L1lf.js" ], function(_export, _context) {
        var onMount, createContext, isElementNode, Config, createRoot, createMemo, batch, getListener, children, Show, activeElement, onCleanup, createComponent$1, hasFocus, isFunction, createRenderEffect, createEffect, createResource, mergeProps, getOwner, on, ElementNode, createElement, useContext, loadFonts, effect, memo, PRECISION, resetErrorBoundaries, rootNode, defaultVertex, use, rgbaRow, spread, rampScale, createComponent, untrack, insert, setProp, paramsGlsl, sharedConfig, createRenderer, edgeWidthDefine, createSignal, startTransition, createTextNode, runWithOwner, insertNode, assertTruthy, focusPath, renderer, useFocusManager, createComputed, combineStyles, clamp, mergeProps$1, LazyRow, LazyColumn, withScrolling, navigableForwardFocus, navigableHandleNavigation, chainRefs, chainFunctions, Column, setupFPS, FPSCounter, ContentBlock, useFocusStack, FocusStackProvider, Hero, TitleRow, Thumbnail, List, AssetPanel, theme_default, styles_default, setGlobalBackground, globalBackground, debounce$1, getImageUrl, api_default, __vite_style__, toVec4, adjustWidth, growWithAa, growQuadGlsl, vec4Prop, elementOf, alignProp, radiusProps, borderProps, shadowProps, vec4Row, vertexSource, fragmentSource, flag, boxType, Rounded, packBorder, growRow, NO_RADIUS, RoundedWithBorder, packShadow, SHADOW_A_ROWS, RoundedWithShadow, RoundedWithBorderAndShadow, gradientRows, paramsUniform, gradientGlsl, stopAt, packGradient, colorsProp, stopsProp, LinearGradient, RadialGradient, HolePunch, clampedProp, timed, RadialProgress, ARIA_PARENT_ID, ariaLabelPhrases, currentSeries, debounce, throttle, resetFocusPathTimer, prevFocusPath, currentlySpeaking, voiceOutDisabled, Announcer, doOnce, useAnnouncer, tryOnCleanup, createCallbackStack, PASSIVE, DEFAULT_MOUSE_POSITION, useMousePosition, scrollTimeout, handleScroll, NATIVE_ESM_CHUNK, cacheBustableUrl, RETRY_DELAYS, cacheBust, wait, nativeImport, getNativeImport, columnScroll, rowStyles, depth, hasSchemeRegex, trimPathRegex, mockBase, MAX_REDIRECTS, RouterContextObj, RouteContextObj, useRouter, useNavigate, useLocation, usePreloadRoute, useMatch, intent, createRouterComponent, createOutlet, Route, SUPPORTS_PROXY, collectDynamicParams, keepAliveElements, keepAliveRouteElements, _storeKeepAlive, storeKeepAliveRoute, createKeepAliveComponent, KeepAliveRouteInternal, keepAliveRouteCache, KeepAliveRoute, App, Browse, TMDB, Destroy, handleResults, fetchPopular, genreListCache, fetchGenreMovies, NotFound, fonts, cache, NavDrawer_styles_default, basePath, icons, sprite, NavButtonTextStyles, LeftNavWrapper, __vitePreload, _low$medium$high$xhig, Player, Grid, Loops, Infinite, TMDBGrid, Portal, MatrixPage, TextPage, TextPosterPage, CreatePage, ViewportPage, PositioningPage, LayoutPage, FocusBasicsPage, KeyHandlingPage, TransitionsPage, ComponentsPage, FocusHandlingPage, GradientsPage, FlexPage, FlexGrowPage, FlexMenuPage, FlexSizePage, FlexColumnSizePage, FlexColumnPage, ButtonsMaterialPage, SuperFlexPage, Entity, People, FireboltPage, LoginPage, VirtualPage, TagsPage, ImagePerformance, LargeImagePerformance, MixedImagePerformance, TextureCompressionPerformance, ComplexFlexPage, ComplexFlexCapsPage, BenchmarkPage, RendererVersionsPage, TextCenteringPage, CountdownTimerPage, CustomButtonsPage, FlexJustifyWidthPage, numImageWorkers, urlParams, numWorkers, screenSize, animationsEnabled, enableContextSpy, forceWebGL2, targetFPSParam, targetFPS, powerPreference, textBaseline, logicalDPR, devicePixelRatio, physicalDPR, textureProcessingTimeLimitParam;
        function factorRadius(radius, w, h) {
            var factor = Math.min(Math.min(Math.min(w / Math.max(w, radius[0] + radius[1]), w / Math.max(w, radius[2] + radius[3])), Math.min(h / Math.max(h, radius[0] + radius[3]), h / Math.max(h, radius[1] + radius[2]))), 1);
            return [ radius[0] * factor, radius[1] * factor, radius[2] * factor, radius[3] * factor ];
        }
        function isSpeechSynthesisUtterance(phrase) {
            return "undefined" != typeof SpeechSynthesisUtterance && phrase instanceof SpeechSynthesisUtterance;
        }
        function delay(pause) {
            return new Promise(function(resolve) {
                setTimeout(resolve, pause);
            });
        }
        function addChildrenToAriaDiv(phrase) {
            var _phrase$text;
            0 !== (null == phrase || null == (_phrase$text = phrase.text) ? void 0 : _phrase$text.trim().length) && ariaLabelPhrases.push(phrase);
        }
        function focusElementForAria() {
            if (0 !== ariaLabelPhrases.length) {
                var element = function() {
                    var aria_container = document.getElementById(ARIA_PARENT_ID);
                    if (!aria_container) {
                        var element = document.createElement("div");
                        return element.setAttribute("id", ARIA_PARENT_ID), element.setAttribute("aria-live", "assertive"), 
                        element.setAttribute("tabindex", "0"), document.body.appendChild(element), element;
                    }
                    return aria_container;
                }();
                if (element) {
                    !function() {
                        var parentTag = document.getElementById(ARIA_PARENT_ID);
                        if (parentTag) for (;parentTag.firstChild; ) parentTag.removeChild(parentTag.firstChild);
                    }();
                    var _step, _iterator = _createForOfIteratorHelper(ariaLabelPhrases);
                    try {
                        for (_iterator.s(); !(_step = _iterator.n()).done; ) {
                            var object = _step.value, span = document.createElement("span");
                            span.setAttribute("lang", object.lang), span.setAttribute("aria-label", object.text), 
                            element.appendChild(span);
                        }
                    } catch (err) {
                        _iterator.e(err);
                    } finally {
                        _iterator.f();
                    }
                    ariaLabelPhrases = [];
                } else console.error("ARIA div not found: ".concat(ARIA_PARENT_ID));
            }
        }
        function speak(phrase, utterances) {
            var lang = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "en-US", voiceName = arguments.length > 3 ? arguments[3] : void 0, synth = window.speechSynthesis;
            return new Promise(function(resolve, reject) {
                if (synth && "undefined" != typeof SpeechSynthesisUtterance) {
                    var selectedVoice;
                    if (voiceName) {
                        var availableVoices = synth.getVoices();
                        selectedVoice = availableVoices.find(function(v) {
                            return v.name === voiceName;
                        }) || availableVoices[0];
                    }
                    var utterance = new SpeechSynthesisUtterance(phrase);
                    utterance.lang = lang, selectedVoice && (utterance.voice = selectedVoice), utterance.onend = function() {
                        resolve();
                    }, utterance.onerror = function(e) {
                        var error = new Error("Speech synthesis error: ".concat(e.error));
                        error.error = e.error, reject(error);
                    }, utterances.push(utterance), synth.speak(utterance);
                } else resolve();
            });
        }
        function handleSpeechError(_x, _x2, _x3) {
            return _handleSpeechError.apply(this, arguments);
        }
        function _handleSpeechError() {
            return (_handleSpeechError = _asyncToGenerator(_regenerator().m(function _callee2(e, retriesLeft, totalRetries) {
                var code;
                return _regenerator().w(function(_context3) {
                    for (;;) switch (_context3.n) {
                      case 0:
                        if ("network" !== (code = null == e ? void 0 : e.error)) {
                            _context3.n = 2;
                            break;
                        }
                        return retriesLeft--, console.warn("Speech synthesis network error. Retries left: ".concat(retriesLeft)), 
                        _context3.n = 1, delay(500 * (totalRetries - retriesLeft));

                      case 1:
                        return _context3.a(2, retriesLeft);

                      case 2:
                        if ("canceled" !== code && "interrupted" !== code) {
                            _context3.n = 3;
                            break;
                        }
                        return _context3.a(2, 0);

                      case 3:
                        return console.warn("Speech synthesis failed: ".concat(code || "no error code")), 
                        _context3.a(2, 0);
                    }
                }, _callee2);
            }))).apply(this, arguments);
        }
        function speakSeries(series, aria, lang, voice) {
            var root = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4], synth = window.speechSynthesis, remainingPhrases = function() {
                var i, series = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], flattenedSeries = [];
                for (i = 0; i < series.length; i++) {
                    var s = series[i];
                    if ("string" != typeof s || s.includes("PAUSE-")) break;
                    flattenedSeries.push(series[i]);
                }
                return [ flattenedSeries.join(",\b ") ].concat(series.slice(i));
            }(Array.isArray(series) ? series : [ series ]), nestedSeriesResults = [], utterances = [], active = !0;
            return {
                series: _asyncToGenerator(_regenerator().m(function _callee() {
                    var phrase, pause, totalRetries, retriesLeft, _totalRetries, _retriesLeft, text, objectLang, objectVoice, seriesResult, _seriesResult, _t, _t2;
                    return _regenerator().w(function(_context2) {
                        for (;;) switch (_context2.p = _context2.n) {
                          case 0:
                            _context2.p = 0;

                          case 1:
                            if (!active || !remainingPhrases.length) {
                                _context2.n = 29;
                                break;
                            }
                            return _context2.n = 2, Promise.resolve(remainingPhrases.shift());

                          case 2:
                            if (phrase = _context2.v, active) {
                                _context2.n = 3;
                                break;
                            }
                            return _context2.a(3, 29);

                          case 3:
                            if ("string" != typeof phrase || !phrase.includes("PAUSE-")) {
                                _context2.n = 5;
                                break;
                            }
                            if (pause = 1e3 * Number(phrase.split("PAUSE-")[1]), isNaN(pause)) {
                                _context2.n = 4;
                                break;
                            }
                            return _context2.n = 4, delay(pause);

                          case 4:
                            _context2.n = 28;
                            break;

                          case 5:
                            if ("string" != typeof phrase) {
                                _context2.n = 15;
                                break;
                            }
                            if (phrase) {
                                _context2.n = 6;
                                break;
                            }
                            return _context2.a(3, 1);

                          case 6:
                            retriesLeft = totalRetries = 3;

                          case 7:
                            if (!(active && retriesLeft > 0)) {
                                _context2.n = 14;
                                break;
                            }
                            if (_context2.p = 8, !aria) {
                                _context2.n = 9;
                                break;
                            }
                            addChildrenToAriaDiv({
                                text: phrase,
                                lang: lang
                            }), _context2.n = 10;
                            break;

                          case 9:
                            return _context2.n = 10, speak(phrase, utterances, lang, voice);

                          case 10:
                            retriesLeft = 0, _context2.n = 13;
                            break;

                          case 11:
                            return _context2.p = 11, _t = _context2.v, _context2.n = 12, handleSpeechError(_t, retriesLeft, totalRetries);

                          case 12:
                            retriesLeft = _context2.v;

                          case 13:
                            _context2.n = 7;
                            break;

                          case 14:
                            _context2.n = 28;
                            break;

                          case 15:
                            if (!isSpeechSynthesisUtterance(phrase)) {
                                _context2.n = 25;
                                break;
                            }
                            _retriesLeft = _totalRetries = 3, text = phrase.text, objectLang = null == phrase ? void 0 : phrase.lang, 
                            objectVoice = null == phrase ? void 0 : phrase.voice;

                          case 16:
                            if (!(active && _retriesLeft > 0)) {
                                _context2.n = 24;
                                break;
                            }
                            if (_context2.p = 17, !text) {
                                _context2.n = 20;
                                break;
                            }
                            if (!aria) {
                                _context2.n = 18;
                                break;
                            }
                            addChildrenToAriaDiv({
                                text: text,
                                lang: objectLang
                            }), _context2.n = 19;
                            break;

                          case 18:
                            return _context2.n = 19, speak(text, utterances, objectLang, null == objectVoice ? void 0 : objectVoice.name);

                          case 19:
                            _retriesLeft = 0;

                          case 20:
                            _context2.n = 23;
                            break;

                          case 21:
                            return _context2.p = 21, _t2 = _context2.v, _context2.n = 22, handleSpeechError(_t2, _retriesLeft, _totalRetries);

                          case 22:
                            _retriesLeft = _context2.v;

                          case 23:
                            _context2.n = 16;
                            break;

                          case 24:
                            _context2.n = 28;
                            break;

                          case 25:
                            if ("function" != typeof phrase) {
                                _context2.n = 27;
                                break;
                            }
                            return seriesResult = speakSeries(phrase(), aria, lang, voice, !1), nestedSeriesResults.push(seriesResult), 
                            _context2.n = 26, seriesResult.series;

                          case 26:
                            _context2.n = 28;
                            break;

                          case 27:
                            if (!Array.isArray(phrase)) {
                                _context2.n = 28;
                                break;
                            }
                            return _seriesResult = speakSeries(phrase, aria, lang, voice, !1), nestedSeriesResults.push(_seriesResult), 
                            _context2.n = 28, _seriesResult.series;

                          case 28:
                            _context2.n = 1;
                            break;

                          case 29:
                            return _context2.p = 29, active = !1, root && aria && focusElementForAria(), _context2.f(29);

                          case 30:
                            return _context2.a(2);
                        }
                    }, _callee, null, [ [ 17, 21 ], [ 8, 11 ], [ 0, , 29, 30 ] ]);
                }))().catch(function(e) {
                    console.warn("Speech series failed:", e);
                }),
                get active() {
                    return active;
                },
                append: function(toSpeak) {
                    remainingPhrases.push(toSpeak);
                },
                cancel: function() {
                    active && (root && (aria ? ariaLabelPhrases = [] : synth && synth.cancel()), nestedSeriesResults.forEach(function(nestedSeriesResult) {
                        nestedSeriesResult.cancel();
                    }), active = !1);
                }
            };
        }
        function speech_default(toSpeak, aria) {
            var lang = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "en-US", voice = arguments.length > 3 ? arguments[3] : void 0;
            return null == currentSeries || currentSeries.cancel(), currentSeries = speakSeries(toSpeak, aria, lang, voice);
        }
        function debounceWithFlush(callback, time) {
            var scopedValue, trigger = debounce(callback, time), debounced = function(newValue) {
                scopedValue = newValue, trigger(newValue);
            };
            return debounced.flush = function() {
                trigger.clear(), callback(scopedValue);
            }, debounced.clear = trigger.clear, debounced;
        }
        function getElmName(elm) {
            return elm.id || elm.name;
        }
        function onFocusChangeCore() {
            var focusPath = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
            if (Announcer.onFocusChange && Announcer.enabled) {
                var loaded = focusPath.every(function(elm) {
                    return !elm.loading;
                }), focusDiff = focusPath.filter(function(elm) {
                    return !prevFocusPath.includes(elm);
                });
                if (resetFocusPathTimer(), loaded || !Announcer.onFocusChange) {
                    prevFocusPath = focusPath.slice(0);
                    var toAnnounceText = [], toAnnounce = focusDiff.reverse().reduce(function(acc, elm) {
                        return elm.announce ? (acc.push([ getElmName(elm), "Announce", elm.announce ]), 
                        toAnnounceText.push(elm.announce)) : elm.title ? (acc.push([ getElmName(elm), "Title", elm.title ]), 
                        toAnnounceText.push(elm.title)) : acc.push([ getElmName(elm), "No Announce", "" ]), 
                        acc;
                    }, []);
                    return focusDiff.reverse().reduce(function(acc, elm) {
                        return elm.announceContext ? (acc.push([ getElmName(elm), "Context", elm.announceContext ]), 
                        toAnnounceText.push(elm.announceContext)) : acc.push([ getElmName(elm), "No Context", "" ]), 
                        acc;
                    }, toAnnounce), Announcer.debug && console.table(toAnnounce), toAnnounceText.length ? Announcer.speak(toAnnounceText.reduce(function(acc, val) {
                        return acc.concat(val);
                    }, [])) : void 0;
                }
                Announcer.onFocusChange([]);
            }
        }
        function accessWith(valueOrFn) {
            for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) args[_key - 1] = arguments[_key];
            return "function" == typeof valueOrFn ? valueOrFn.apply(void 0, args) : valueOrFn;
        }
        function makeEventListener(target, type, handler, options) {
            return target.addEventListener(type, handler, options), tryOnCleanup(target.removeEventListener.bind(target, type, handler, options));
        }
        function makeEventListenerStack(target, options) {
            var _createCallbackStack = createCallbackStack(), push = _createCallbackStack.push, execute = _createCallbackStack.execute;
            return [ function(type, handler, overwriteOptions) {
                var clear = makeEventListener(target, type, handler, null != overwriteOptions ? overwriteOptions : options);
                return push(clear), clear;
            }, onCleanup(execute) ];
        }
        function createHydratableSingletonRoot(factory) {
            var owner = getOwner(), singleton = function(factory) {
                var value, disposeRoot, detachedOwner = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : getOwner(), listeners = 0;
                return function() {
                    return listeners++, onCleanup(function() {
                        listeners--, queueMicrotask(function() {
                            !listeners && disposeRoot && (disposeRoot(), disposeRoot = value = void 0);
                        });
                    }), disposeRoot || createRoot(function(dispose) {
                        return value = factory(disposeRoot = dispose);
                    }, detachedOwner), value;
                };
            }(factory, owner);
            return function() {
                return sharedConfig.context ? createRoot(factory, owner) : singleton();
            };
        }
        function createStaticStore(init) {
            var copy = _objectSpread({}, init), store = _objectSpread({}, init), cache = {}, _loop = function(key) {
                Object.defineProperty(store, key, {
                    get: function() {
                        return function(key) {
                            var signal = cache[key];
                            if (!signal) {
                                if (!getListener()) return copy[key];
                                cache[key] = signal = createSignal(copy[key], {
                                    internal: !0
                                }), delete copy[key];
                            }
                            return signal[0]();
                        }(key);
                    },
                    enumerable: !0
                });
            };
            for (var key in init) _loop(key);
            var setValue = function(key, value) {
                var signal = cache[key];
                if (signal) return signal[1](value);
                key in copy && (copy[key] = accessWith(value, copy[key]));
            };
            return [ store, function(a, b) {
                if (null === (value = a) || "object" !== _typeof(value) && "function" != typeof value) setValue(a, b); else {
                    var entries = untrack(function() {
                        return Object.entries(accessWith(a, store));
                    });
                    batch(function() {
                        var _step2, _iterator2 = _createForOfIteratorHelper(entries);
                        try {
                            var _loop2 = function() {
                                var _step2$value = _slicedToArray(_step2.value, 2), key = _step2$value[0], value = _step2$value[1];
                                setValue(key, function() {
                                    return value;
                                });
                            };
                            for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) _loop2();
                        } catch (err) {
                            _iterator2.e(err);
                        } finally {
                            _iterator2.f();
                        }
                    });
                }
                var value;
                return store;
            } ];
        }
        function createMousePosition(target) {
            var options = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, fallback = _objectSpread(_objectSpread({}, DEFAULT_MOUSE_POSITION), options.initialValue);
            var _createStaticStore2 = _slicedToArray(createStaticStore(fallback), 2), state = _createStaticStore2[0], setState = _createStaticStore2[1], attachListeners = function(el) {
                !function() {
                    var target = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window, callback = arguments.length > 1 ? arguments[1] : void 0, options = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, _options$touch = options.touch, touch = void 0 === _options$touch || _options$touch, _options$followTouch = options.followTouch, followTouch = void 0 === _options$followTouch || _options$followTouch, _makeEventListenerSta2 = _slicedToArray(makeEventListenerStack(target, PASSIVE), 2), listen = _makeEventListenerSta2[0], clear = _makeEventListenerSta2[1], handleMouse = function(e) {
                        return callback({
                            x: e.pageX,
                            y: e.pageY,
                            sourceType: "mouse"
                        });
                    };
                    if (listen("mousemove", handleMouse), listen("dragover", handleMouse), touch) {
                        var handleTouch = function(e) {
                            e.touches.length && callback({
                                x: e.touches[0].clientX,
                                y: e.touches[0].clientY,
                                sourceType: "touch"
                            });
                        };
                        listen("touchstart", handleTouch), followTouch && listen("touchmove", handleTouch);
                    }
                }(el, setState, options), function() {
                    var target = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window, callback = arguments.length > 1 ? arguments[1] : void 0, _options$touch2 = (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}).touch, touch = void 0 === _options$touch2 || _options$touch2, _makeEventListenerSta4 = _slicedToArray(makeEventListenerStack(target, PASSIVE), 2), listen = _makeEventListenerSta4[0], clear = _makeEventListenerSta4[1], mouseIn = !1, touchIn = !touch;
                    function handleChange(isInside) {
                        "mouse" === this ? mouseIn = isInside : touchIn = isInside, callback(mouseIn || touchIn);
                    }
                    listen("mouseover", handleChange.bind("mouse", !0)), listen("mouseout", handleChange.bind("mouse", !1)), 
                    listen("mousemove", handleChange.bind("mouse", !0), {
                        passive: !0,
                        once: !0
                    }), touch && (listen("touchstart", handleChange.bind("touch", !0)), listen("touchend", handleChange.bind("touch", !1)));
                }(el, setState.bind(void 0, "isInside"), options);
            };
            return "function" != typeof target ? attachListeners(target) : createEffect(function() {
                return attachListeners(target());
            }), state;
        }
        function addCustomStateToElement(element, state) {
            var _element$states;
            null == (_element$states = element.states) || _element$states.add(state);
        }
        function removeCustomStateFromElement(element, state) {
            var _element$states2;
            null == element || null == (_element$states2 = element.states) || _element$states2.remove(state);
        }
        function hasCustomState(element, state) {
            var _element$states3;
            return null == (_element$states3 = element.states) ? void 0 : _element$states3.has(state);
        }
        function createKeyboardEvent(key, keyCode) {
            var event = new KeyboardEvent(arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "keydown", {
                key: key,
                keyCode: keyCode,
                which: keyCode,
                ctrlKey: !1,
                altKey: !1,
                shiftKey: !1,
                metaKey: !1,
                bubbles: !0
            });
            return event.key === key && event.keyCode === keyCode || (Object.defineProperty(event, "key", {
                get: function() {
                    return key;
                }
            }), Object.defineProperty(event, "keyCode", {
                get: function() {
                    return keyCode;
                }
            }), Object.defineProperty(event, "which", {
                get: function() {
                    return keyCode;
                }
            })), event;
        }
        function findElementWithCustomState(myApp, x, y, customState) {
            for (var element, path = getChildrenByPosition(myApp, x, y), i = path.length - 1; i >= 0; i--) if (hasCustomState(path[i], customState)) {
                element = path[i];
                break;
            }
            if (element) {
                for (var p = element.parent; (null == p ? void 0 : p.forwardStates) && hasCustomState(p, customState); ) element = p, 
                p = p.parent;
                return element;
            }
        }
        function createHandleClick(myApp, customStates, pressedElementRef) {
            return function(e) {
                var clickedElement = customStates ? findElementWithCustomState(myApp, e.clientX, e.clientY, customStates.hoverState) : function(e) {
                    var _Config$rendererOptio, active = activeElement(), precision = (null == (_Config$rendererOptio = Config.rendererOptions) ? void 0 : _Config$rendererOptio.deviceLogicalPixelRatio) || 1, px = e.clientX / precision, py = e.clientY / precision;
                    if (active instanceof ElementNode && testCollision(px, py, active.lng.absX || 0, active.lng.absY || 0, active.width || 0, active.height || 0)) return active;
                    for (var parent = null == active ? void 0 : active.parent; parent; ) {
                        if ((isFunction(parent.onMouseClick) || isFunction(parent.onEnter)) && testCollision(px, py, parent.lng.absX || 0, parent.lng.absY || 0, parent.width || 0, parent.height || 0)) return parent;
                        parent = parent.parent;
                    }
                    return null;
                }(e);
                clickedElement && function(clickedElement, e, customStates, pressedElementRef) {
                    (null == customStates ? void 0 : customStates.pressedState) && (null == pressedElementRef ? void 0 : pressedElementRef.current) && (removeCustomStateFromElement(pressedElementRef.current, customStates.pressedState), 
                    pressedElementRef.current = null), isFunction(clickedElement.onMouseClick) ? clickedElement.onMouseClick(e, clickedElement) : (clickedElement.setFocus(), 
                    setTimeout(function() {
                        document.dispatchEvent(createKeyboardEvent("Enter", 13)), setTimeout(function() {
                            return document.body.dispatchEvent(createKeyboardEvent("Enter", 13, "keyup"));
                        }, 1);
                    }, 1));
                }(clickedElement, e, customStates, pressedElementRef);
            };
        }
        function createHandleMouseDown(myApp, customStates, pressedElementRef) {
            return function(e) {
                if (customStates) {
                    var element, pressedState, pressedElement = findElementWithCustomState(myApp, e.clientX, e.clientY, customStates.hoverState);
                    if (pressedElement) element = pressedElement, pressedState = customStates.pressedState, 
                    addCustomStateToElement(element, pressedState), pressedElementRef && (pressedElementRef.current = pressedElement);
                }
            };
        }
        function testCollision(px, py, cx, cy) {
            return px >= cx && px <= cx + (arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0) && py >= cy && py <= cy + (arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0);
        }
        function isNodeAtPosition(node, x, y) {
            return !!isElementNode(node) && (0 !== node.alpha && !node.skipFocus && testCollision(x, y, node.lng.absX || 0, node.lng.absY || 0, node.width || 0, node.height || 0));
        }
        function getChildrenByPosition(node, x, y) {
            for (var _Config$rendererOptio2, result = [], precision = (null == (_Config$rendererOptio2 = Config.rendererOptions) ? void 0 : _Config$rendererOptio2.deviceLogicalPixelRatio) || 1, px = x / precision, py = y / precision, current = node; current && isNodeAtPosition(current, px, py); ) {
                result.push(current);
                var _step3, best = void 0, bestZ = -1 / 0, _iterator3 = _createForOfIteratorHelper(current.children);
                try {
                    for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
                        var _child$zIndex, child = _step3.value;
                        if (isNodeAtPosition(child, px, py)) {
                            var z = null !== (_child$zIndex = child.zIndex) && void 0 !== _child$zIndex ? _child$zIndex : -1;
                            z >= bestZ && (bestZ = z, best = child);
                        }
                    }
                } catch (err) {
                    _iterator3.e(err);
                } finally {
                    _iterator3.f();
                }
                if (!best) break;
                current = best;
            }
            return result;
        }
        function useMouse() {
            var schedule, listeners, isDirty, _createSignal2, track, dirty, call, myApp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : rootNode, throttleBy = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100, options = arguments.length > 2 ? arguments[2] : void 0, pos = useMousePosition(), scheduled = (schedule = function(fn) {
                return throttle(fn, throttleBy);
            }, listeners = 0, isDirty = !1, _createSignal2 = _slicedToArray(createSignal(void 0, {
                equals: !1
            }), 2), track = _createSignal2[0], dirty = _createSignal2[1], call = schedule(function() {
                isDirty = !0, dirty();
            }), function() {
                return isDirty || (call(), track()), isDirty ? (isDirty = !!listeners, !0) : (getListener() && (listeners++, 
                onCleanup(function() {
                    return listeners--;
                })), !1);
            }), previousElement = null, pressedElementRef = {
                current: null
            }, customStates = null == options ? void 0 : options.customStates, hoverState = null == customStates ? void 0 : customStates.hoverState, handleClick = createHandleClick(myApp, customStates, pressedElementRef), handleMouseDown = createHandleMouseDown(myApp, customStates, pressedElementRef), owner = getOwner(), focusKey = Config.focusStateKey;
            makeEventListener(window, "wheel", handleScroll), makeEventListener(window, "click", function(e) {
                runWithOwner(owner, function() {
                    return handleClick(e);
                });
            }), makeEventListener(window, "mousedown", function(e) {
                runWithOwner(owner, function() {
                    return handleMouseDown(e);
                });
            }), createEffect(function() {
                if (scheduled()) {
                    for (var activeElm, path = getChildrenByPosition(myApp, pos.x, pos.y), i = path.length - 1; i >= 0; i--) {
                        var el = path[i];
                        if (el.onEnter || el.onMouseClick || el.onFocus || el[focusKey] || hoverState && el[hoverState]) {
                            activeElm = el;
                            break;
                        }
                    }
                    if (activeElm) {
                        for (var p = activeElm.parent; null == p ? void 0 : p.forwardStates; ) activeElm = p, 
                        p = p.parent;
                        var activeElmParent = activeElm.parent;
                        void 0 !== (null == activeElmParent ? void 0 : activeElmParent.selected) && (activeElmParent.selected = activeElmParent.children.indexOf(activeElm)), 
                        previousElement && previousElement !== activeElm && hoverState && removeCustomStateFromElement(previousElement, hoverState), 
                        hoverState ? addCustomStateToElement(activeElm, hoverState) : activeElm.setFocus(), 
                        previousElement = activeElm;
                    } else previousElement && hoverState && (removeCustomStateFromElement(previousElement, hoverState), 
                    previousElement = null);
                }
            });
        }
        function lazy(fn) {
            var comp, p, load = function() {
                var url, _attemptLoad = function(attempt) {
                    var p;
                    try {
                        if (0 === attempt) p = fn(); else if (void 0 !== url) {
                            var importer = getNativeImport();
                            p = null !== importer ? importer(cacheBust(url, attempt)) : fn();
                        } else p = fn();
                    } catch (syncError) {
                        p = Promise.reject(syncError);
                    }
                    return p.catch(function(error) {
                        var nextUrl = cacheBustableUrl(error);
                        if (url = void 0 !== nextUrl ? nextUrl : url, attempt < RETRY_DELAYS.length) {
                            var _delay = RETRY_DELAYS[attempt];
                            if (void 0 !== _delay) return wait(_delay).then(function() {
                                return _attemptLoad(attempt + 1);
                            });
                        }
                        return Promise.reject(error);
                    });
                };
                return _attemptLoad(0);
            }, wrap = function(props) {
                var Comp, ctx = sharedConfig.context;
                if (ctx) {
                    var _createSignal4 = _slicedToArray(createSignal(), 2), s = _createSignal4[0], set = _createSignal4[1];
                    sharedConfig.count || (sharedConfig.count = 0), sharedConfig.count++, (p || (p = load())).then(function(mod) {
                        !sharedConfig.done && (sharedConfig.context = ctx), sharedConfig.count--, set(function() {
                            return mod.default;
                        }), sharedConfig.context = void 0;
                    }).catch(function() {}), comp = s;
                } else if (!comp) {
                    var _s = _slicedToArray(createResource(function() {
                        return (p || (p = load())).then(function(mod) {
                            return mod.default;
                        });
                    }), 1)[0];
                    comp = _s;
                }
                return createMemo(function() {
                    return (Comp = comp()) ? untrack(function() {
                        if (!ctx || sharedConfig.done) return Comp(props);
                        var c = sharedConfig.context;
                        sharedConfig.context = ctx;
                        var r = Comp(props);
                        return sharedConfig.context = c, r;
                    }) : null;
                });
            };
            return wrap.preload = function() {
                return p || ((p = load()).then(function(mod) {
                    return comp = function() {
                        return mod.default;
                    };
                }).catch(function() {}), p);
            }, wrap;
        }
        function VirtualGrid(props) {
            var _props$selected, viewRef, bufferSize = function() {
                var _props$buffer;
                return null !== (_props$buffer = props.buffer) && void 0 !== _props$buffer ? _props$buffer : 2;
            }, _createSignal6 = _slicedToArray(createSignal(null !== (_props$selected = props.selected) && void 0 !== _props$selected ? _props$selected : 0), 2), cursor = _createSignal6[0], setCursor = _createSignal6[1], items = createMemo(function() {
                return props.each || [];
            }), itemCount = function() {
                return items().length;
            }, itemsPerRow = function() {
                return props.columns;
            }, totalVisibleItems = function() {
                return itemsPerRow() * (null !== (_props$rows = props.rows) && void 0 !== _props$rows ? _props$rows : 1);
                var _props$rows;
            }, start = createMemo(function() {
                var perRow = itemsPerRow(), rawStart = Math.floor(cursor() / perRow) * perRow - bufferSize() * perRow;
                return Math.max(0, rawStart);
            }), end = createMemo(function() {
                var perRow = itemsPerRow(), rawEnd = (Math.floor(cursor() / perRow) + bufferSize()) * perRow + totalVisibleItems();
                return Math.min(items().length, rawEnd);
            }), _createSignal8 = _slicedToArray(createSignal(items().slice(start(), end())), 2), slice = _createSignal8[0], setSlice = _createSignal8[1];
            function onVerticalNav(dir) {
                return function() {
                    var perRow = itemsPerRow(), currentRowIndex = Math.floor(cursor() / perRow), maxRows = Math.floor(items().length / perRow);
                    if (!(0 === currentRowIndex && -1 === dir || currentRowIndex === maxRows && 1 === dir)) {
                        var selected = this.selected || 0, newIndex = clamp(selected + dir * perRow, 0, items().length - 1), lastIdx = selected;
                        this.selected = newIndex;
                        var active = this.children[this.selected];
                        return active instanceof ElementNode ? (active.setFocus(), chainedOnSelectedChanged.call(this, this.selected, this, active, lastIdx), 
                        !0) : void 0;
                    }
                };
            }
            var cachedSelected, _el$, _ref$, onUp = onVerticalNav(-1), onDown = onVerticalNav(1), chainedOnSelectedChanged = chainFunctions(props.onSelectedChanged, function(_idx, elm, active, _lastIdx) {
                var _this = this, idx = _idx, lastIdx = _lastIdx, perRow = itemsPerRow(), newRowIndex = Math.floor(idx / perRow), prevRowIndex = Math.floor((lastIdx || 0) / perRow), prevStart = start();
                if (setCursor(prevStart + idx), newRowIndex !== prevRowIndex) {
                    setSlice(items().slice(start(), end()));
                    var _props$onEndReached, idxCorrection = prevStart - start();
                    if (lastIdx && (lastIdx += idxCorrection), idx += idxCorrection, this.selected += idxCorrection, 
                    void 0 !== props.onEndReachedThreshold && cursor() >= items().length - props.onEndReachedThreshold) null == (_props$onEndReached = props.onEndReached) || _props$onEndReached.call(props);
                    queueMicrotask(function() {
                        var prevRowY = _this.y + active.y;
                        _this.updateLayout(), _this.lng.y = prevRowY - active.y, columnScroll(idx, elm, active, lastIdx);
                    });
                }
            }), updateSelected = function(_ref2) {
                var _ref3 = _slicedToArray(_ref2, 2), selected = _ref3[0];
                _ref3[1];
                if (viewRef && null != selected) {
                    var _props$onEndReached2;
                    if (void 0 !== cachedSelected && (selected = cachedSelected, cachedSelected = void 0), 
                    selected >= items().length && props.onEndReached) return null == (_props$onEndReached2 = props.onEndReached) || _props$onEndReached2.call(props), 
                    void (cachedSelected = selected);
                    var item = items()[selected], active = viewRef.children.find(function(x) {
                        return x.item === item;
                    }), lastSelected = viewRef.selected;
                    active instanceof ElementNode ? (viewRef.selected = viewRef.children.indexOf(active), 
                    hasFocus(viewRef) && active.setFocus(), chainedOnSelectedChanged.call(viewRef, viewRef.selected, viewRef, active, lastSelected)) : (setCursor(selected), 
                    setSlice(items().slice(start(), end())), queueMicrotask(function() {
                        viewRef.updateLayout(), (active = viewRef.children.find(function(x) {
                            return x.item === item;
                        })) instanceof ElementNode && (viewRef.selected = viewRef.children.indexOf(active), 
                        hasFocus(viewRef) && active.setFocus(), chainedOnSelectedChanged.call(viewRef, viewRef.selected, viewRef, active, lastSelected));
                    }));
                }
            }, scrollToIndex = function(index) {
                untrack(function() {
                    return updateSelected([ index ]);
                });
            };
            return createEffect(on([ function() {
                return props.selected;
            }, items ], updateSelected)), createEffect(on(items, function(gridItems, _prevGridItems, prevSize) {
                if (viewRef) return void 0 !== cachedSelected ? (updateSelected([ cachedSelected ]), 
                gridItems.length) : (0 === gridItems.length ? (setCursor(0), cachedSelected = void 0, 
                setSlice([])) : cursor() >= itemCount() ? updateSelected([ Math.max(0, itemCount() - 1) ]) : 0 === prevSize ? updateSelected([ 0 ]) : setSlice(items().slice(start(), end())), 
                gridItems.length);
            }, {
                defer: !0
            })), _el$ = createElement("view"), "function" == typeof (_ref$ = chainRefs(function(el) {
                viewRef = el;
            }, props.ref)) && use(_ref$, _el$), spread(_el$, mergeProps$1(props, {
                get scroll() {
                    return props.scroll || "always";
                },
                get selected() {
                    return props.selected || 0;
                },
                get cursor() {
                    return cursor();
                },
                onLeft: chainFunctions(props.onLeft, navigableHandleNavigation),
                onRight: chainFunctions(props.onRight, navigableHandleNavigation),
                onUp: chainFunctions(props.onUp, onUp),
                onDown: chainFunctions(props.onDown, onDown),
                forwardFocus: navigableForwardFocus,
                onCreate: props.selected ? chainFunctions(props.onCreate, columnScroll) : props.onCreate,
                scrollToIndex: scrollToIndex,
                onSelectedChanged: chainedOnSelectedChanged,
                style: combineStyles(props.style, rowStyles)
            }), !0), insert(_el$, createComponent(List, {
                get each() {
                    return slice();
                },
                get children() {
                    return props.children;
                }
            })), _el$;
        }
        function createBeforeLeave() {
            var listeners = new Set;
            var ignore = !1;
            return {
                subscribe: function(listener) {
                    return listeners.add(listener), function() {
                        return listeners.delete(listener);
                    };
                },
                confirm: function(to, options) {
                    if (ignore) return !(ignore = !1);
                    var _step4, e = {
                        to: to,
                        options: options,
                        defaultPrevented: !1,
                        preventDefault: function() {
                            return e.defaultPrevented = !0;
                        }
                    }, _iterator4 = _createForOfIteratorHelper(listeners);
                    try {
                        var _loop3 = function() {
                            var l = _step4.value;
                            l.listener(_objectSpread(_objectSpread({}, e), {}, {
                                from: l.location,
                                retry: function(force) {
                                    force && (ignore = !0), l.navigate(to, _objectSpread(_objectSpread({}, options), {}, {
                                        resolve: !1
                                    }));
                                }
                            }));
                        };
                        for (_iterator4.s(); !(_step4 = _iterator4.n()).done; ) _loop3();
                    } catch (err) {
                        _iterator4.e(err);
                    } finally {
                        _iterator4.f();
                    }
                    return !e.defaultPrevented;
                }
            };
        }
        function saveCurrentDepth() {
            window.history.state && null != window.history.state._depth || window.history.replaceState(_objectSpread(_objectSpread({}, window.history.state), {}, {
                _depth: window.history.length - 1
            }), ""), depth = window.history.state._depth;
        }
        function normalizePath(path) {
            var omitSlash = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], s = path.replace(trimPathRegex, "$1");
            return s ? omitSlash || /^[?#]/.test(s) ? s : "/" + s : "";
        }
        function _resolvePath(base, path, from) {
            if (!hasSchemeRegex.test(path)) {
                var basePath = normalizePath(base), fromPath = from && normalizePath(from), result = "";
                return ((result = !fromPath || path.startsWith("/") ? basePath : 0 !== fromPath.toLowerCase().indexOf(basePath.toLowerCase()) ? basePath + fromPath : fromPath) || "/") + normalizePath(path, !result);
            }
        }
        function joinPaths(from, to) {
            return normalizePath(from).replace(/\/*(\*.*)?$/g, "") + normalizePath(to);
        }
        function extractSearchParams(url) {
            var params = {};
            return url.searchParams.forEach(function(value, key) {
                key in params ? Array.isArray(params[key]) ? params[key].push(value) : params[key] = [ params[key], value ] : params[key] = value;
            }), params;
        }
        function createMatcher(path, partial, matchFilters) {
            var _path$split2 = _slicedToArray(path.split("/*", 2), 2), pattern = _path$split2[0], splat = _path$split2[1], segments = pattern.split("/").filter(Boolean), len = segments.length;
            return function(location) {
                var locSegments = location.split("/").filter(Boolean), lenDiff = locSegments.length - len;
                if (lenDiff < 0 || lenDiff > 0 && void 0 === splat && !partial) return null;
                for (var match = {
                    path: len ? "" : "/",
                    params: {}
                }, matchFilter = function(s) {
                    return void 0 === matchFilters ? void 0 : matchFilters[s];
                }, i = 0; i < len; i++) {
                    var segment = segments[i], dynamic = ":" === segment[0], locSegment = dynamic ? locSegments[i] : locSegments[i].toLowerCase(), key = dynamic ? segment.slice(1) : segment.toLowerCase();
                    if (dynamic && matchSegment(locSegment, matchFilter(key))) match.params[key] = locSegment; else if (dynamic || !matchSegment(locSegment, key)) return null;
                    match.path += "/".concat(locSegment);
                }
                if (splat) {
                    var remainder = lenDiff ? locSegments.slice(-lenDiff).join("/") : "";
                    if (!matchSegment(remainder, matchFilter(splat))) return null;
                    match.params[splat] = remainder;
                }
                return match;
            };
        }
        function matchSegment(input, filter) {
            var isEqual = function(s) {
                return s === input;
            };
            return void 0 === filter || ("string" == typeof filter ? isEqual(filter) : "function" == typeof filter ? filter(input) : Array.isArray(filter) ? filter.some(isEqual) : filter instanceof RegExp && filter.test(input));
        }
        function createMemoObject(fn) {
            var map = new Map, owner = getOwner();
            return new Proxy({}, {
                get: function(_, property) {
                    return map.has(property) || runWithOwner(owner, function() {
                        return map.set(property, createMemo(function() {
                            return fn()[property];
                        }));
                    }), map.get(property)();
                },
                getOwnPropertyDescriptor: function() {
                    return {
                        enumerable: !0,
                        configurable: !0
                    };
                },
                ownKeys: function() {
                    return Reflect.ownKeys(fn());
                },
                has: function(_, property) {
                    return property in fn();
                }
            });
        }
        function expandOptionals(pattern) {
            var match = /(\/?\:[^\/]+)\?/.exec(pattern);
            if (!match) return [ pattern ];
            for (var prefix = pattern.slice(0, match.index), suffix = pattern.slice(match.index + match[0].length), prefixes = [ prefix, prefix += match[1] ]; match = /^(\/\:[^\/]+)\?/.exec(suffix); ) prefixes.push(prefix += match[1]), 
            suffix = suffix.slice(match[0].length);
            return expandOptionals(suffix).reduce(function(results, expansion) {
                return [].concat(_toConsumableArray(results), _toConsumableArray(prefixes.map(function(p) {
                    return p + expansion;
                })));
            }, []);
        }
        function createRoutes(routeDef) {
            var base = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "", component = routeDef.component, preload = routeDef.preload, load = routeDef.load, children = routeDef.children, info = routeDef.info, isLeaf = !children || Array.isArray(children) && !children.length, shared = {
                key: routeDef,
                component: component,
                preload: preload || load,
                info: info
            };
            return asArray(routeDef.path).reduce(function(acc, originalPath) {
                var _step5, _iterator5 = _createForOfIteratorHelper(expandOptionals(originalPath));
                try {
                    for (_iterator5.s(); !(_step5 = _iterator5.n()).done; ) {
                        var expandedPath = _step5.value, path = joinPaths(base, expandedPath), pattern = isLeaf ? path : path.split("/*", 1)[0];
                        pattern = pattern.split("/").map(function(s) {
                            return s.startsWith(":") || s.startsWith("*") ? s : encodeURIComponent(s);
                        }).join("/"), acc.push(_objectSpread(_objectSpread({}, shared), {}, {
                            originalPath: originalPath,
                            pattern: pattern,
                            matcher: createMatcher(pattern, !isLeaf, routeDef.matchFilters)
                        }));
                    }
                } catch (err) {
                    _iterator5.e(err);
                } finally {
                    _iterator5.f();
                }
                return acc;
            }, []);
        }
        function createBranch(routes) {
            var route, _route$pattern$split2, pattern, splat, segments, index = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
            return {
                routes: routes,
                score: 1e4 * (route = routes[routes.length - 1], _route$pattern$split2 = _slicedToArray(route.pattern.split("/*", 2), 2), 
                pattern = _route$pattern$split2[0], splat = _route$pattern$split2[1], segments = pattern.split("/").filter(Boolean), 
                segments.reduce(function(score, segment) {
                    return score + (segment.startsWith(":") ? 2 : 3);
                }, segments.length - (void 0 === splat ? 0 : 1))) - index,
                matcher: function(location) {
                    for (var matches = [], i = routes.length - 1; i >= 0; i--) {
                        var route = routes[i], match = route.matcher(location);
                        if (!match) return null;
                        matches.unshift(_objectSpread(_objectSpread({}, match), {}, {
                            route: route
                        }));
                    }
                    return matches;
                }
            };
        }
        function asArray(value) {
            return Array.isArray(value) ? value : [ value ];
        }
        function createBranches(routeDef) {
            for (var base = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "", stack = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [], branches = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [], routeDefs = asArray(routeDef), i = 0, len = routeDefs.length; i < len; i++) {
                var def = routeDefs[i];
                if (def && "object" === _typeof(def)) {
                    def.hasOwnProperty("path") || (def.path = "");
                    var _step6, _iterator6 = _createForOfIteratorHelper(createRoutes(def, base));
                    try {
                        for (_iterator6.s(); !(_step6 = _iterator6.n()).done; ) {
                            var route = _step6.value;
                            stack.push(route);
                            var isEmptyArray = Array.isArray(def.children) && 0 === def.children.length;
                            if (def.children && !isEmptyArray) createBranches(def.children, route.pattern, stack, branches); else {
                                var branch = createBranch(_toConsumableArray(stack), branches.length);
                                branches.push(branch);
                            }
                            stack.pop();
                        }
                    } catch (err) {
                        _iterator6.e(err);
                    } finally {
                        _iterator6.f();
                    }
                }
            }
            return stack.length ? branches : branches.sort(function(a, b) {
                return b.score - a.score;
            });
        }
        function getRouteMatches(branches, location) {
            for (var i = 0, len = branches.length; i < len; i++) {
                var match = branches[i].matcher(location);
                if (match) return match;
            }
            return [];
        }
        function setInPreloadFn(value) {
            0;
        }
        function createRouterContext(integration, branches, getContext) {
            var options = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}, _integration$signal = _slicedToArray(integration.signal, 2), source = _integration$signal[0], setSource = _integration$signal[1], _integration$utils = integration.utils, utils = void 0 === _integration$utils ? {} : _integration$utils, parsePath = utils.parsePath || function(p) {
                return p;
            }, renderPath = utils.renderPath || function(p) {
                return p;
            }, beforeLeave = utils.beforeLeave || createBeforeLeave(), basePath = _resolvePath("", options.base || "");
            if (void 0 === basePath) throw new Error("".concat(basePath, " is not a valid base path"));
            basePath && !source().value && setSource({
                value: basePath,
                replace: !0,
                scroll: !1
            });
            var lastTransitionTarget, _createSignal0 = _slicedToArray(createSignal(!1), 2), isRouting = _createSignal0[0], setIsRouting = _createSignal0[1], transition = function(newIntent, newTarget) {
                newTarget.value === reference() && newTarget.state === state() || (void 0 === lastTransitionTarget && setIsRouting(!0), 
                intent = newIntent, lastTransitionTarget = newTarget, startTransition(function() {
                    lastTransitionTarget === newTarget && (setReference(lastTransitionTarget.value), 
                    setState(lastTransitionTarget.state), resetErrorBoundaries(), submissions[1](function(subs) {
                        return subs.filter(function(s) {
                            return s.pending;
                        });
                    }));
                }).finally(function() {
                    lastTransitionTarget === newTarget && batch(function() {
                        var next, first;
                        intent = void 0, "navigate" === newIntent && (next = lastTransitionTarget, (first = referrers[0]) && (setSource(_objectSpread(_objectSpread({}, next), {}, {
                            replace: first.replace,
                            scroll: first.scroll
                        })), referrers.length = 0)), setIsRouting(!1), lastTransitionTarget = void 0;
                    });
                }));
            }, _createSignal10 = _slicedToArray(createSignal(source().value), 2), reference = _createSignal10[0], setReference = _createSignal10[1], _createSignal12 = _slicedToArray(createSignal(source().state), 2), state = _createSignal12[0], setState = _createSignal12[1], location = function(path, state, queryWrapper) {
                var origin = new URL(mockBase), url = createMemo(function(prev) {
                    var path_ = path();
                    try {
                        return new URL(path_, origin);
                    } catch (err) {
                        return console.error("Invalid path ".concat(path_)), prev;
                    }
                }, origin, {
                    equals: function(a, b) {
                        return a.href === b.href;
                    }
                }), pathname = createMemo(function() {
                    return url().pathname;
                }), search = createMemo(function() {
                    return url().search;
                }, !0), hash = createMemo(function() {
                    return url().hash;
                }), queryFn = on(search, function() {
                    return extractSearchParams(url());
                });
                return {
                    get pathname() {
                        return pathname();
                    },
                    get search() {
                        return search();
                    },
                    get hash() {
                        return hash();
                    },
                    get state() {
                        return state();
                    },
                    get key() {
                        return "";
                    },
                    query: queryWrapper ? queryWrapper(queryFn) : createMemoObject(queryFn)
                };
            }(reference, state, utils.queryWrapper), referrers = [], submissions = createSignal([]), matches = createMemo(function() {
                return "function" == typeof options.transformUrl ? getRouteMatches(branches(), options.transformUrl(location.pathname)) : getRouteMatches(branches(), location.pathname);
            }), buildParams = function() {
                for (var m = matches(), params = {}, i = 0; i < m.length; i++) Object.assign(params, m[i].params);
                return params;
            }, params = utils.paramsWrapper ? utils.paramsWrapper(buildParams, branches) : createMemoObject(buildParams), baseRoute = {
                pattern: basePath,
                path: function() {
                    return basePath;
                },
                outlet: function() {
                    return null;
                },
                resolvePath: function(to) {
                    return _resolvePath(basePath, to);
                }
            };
            return createRenderEffect(on(source, function(source) {
                return transition("native", source);
            }, {
                defer: !0
            })), {
                base: baseRoute,
                location: location,
                params: params,
                isRouting: isRouting,
                renderPath: renderPath,
                parsePath: parsePath,
                navigatorFactory: function(route) {
                    return route = route || useContext(RouteContextObj) || baseRoute, function(to, options) {
                        return function(route, to, options) {
                            untrack(function() {
                                if ("number" != typeof to) {
                                    var queryOnly = !to || "?" === to[0], _replace$resolve$scro = _objectSpread({
                                        replace: !1,
                                        resolve: !queryOnly,
                                        scroll: !0
                                    }, options), replace = _replace$resolve$scro.replace, resolve = _replace$resolve$scro.resolve, scroll = _replace$resolve$scro.scroll, nextState = _replace$resolve$scro.state, resolvedTo = resolve ? route.resolvePath(to) : _resolvePath(queryOnly && location.pathname || "", to);
                                    if (void 0 === resolvedTo) throw new Error("Path '".concat(to, "' is not a routable path"));
                                    if (referrers.length >= MAX_REDIRECTS) throw new Error("Too many redirects");
                                    var current = reference();
                                    if (resolvedTo !== current || nextState !== state()) beforeLeave.confirm(resolvedTo, options) && (referrers.push({
                                        value: current,
                                        replace: replace,
                                        scroll: scroll,
                                        state: state()
                                    }), transition("navigate", {
                                        value: resolvedTo,
                                        state: nextState
                                    }));
                                } else to && (utils.go ? utils.go(to) : console.warn("Router integration does not support relative routing"));
                            });
                        }(route, to, options);
                    };
                },
                matches: matches,
                beforeLeave: beforeLeave,
                preloadRoute: function(url, preloadData) {
                    var matches = getRouteMatches(branches(), url.pathname), prevIntent = intent;
                    intent = "preload";
                    var _loop4 = function() {
                        var _matches$match = matches[match], route = _matches$match.route, params = _matches$match.params;
                        route.component && route.component.preload && route.component.preload();
                        var preload = route.preload;
                        preloadData && preload && runWithOwner(getContext(), function() {
                            return preload({
                                params: params,
                                location: {
                                    pathname: url.pathname,
                                    search: url.search,
                                    hash: url.hash,
                                    query: extractSearchParams(url),
                                    state: null,
                                    key: ""
                                },
                                intent: "preload"
                            });
                        });
                    };
                    for (var match in matches) _loop4();
                    intent = prevIntent;
                },
                singleFlight: void 0 === options.singleFlight || options.singleFlight,
                submissions: submissions
            };
        }
        function Root(props) {
            var location = props.routerState.location, params = props.routerState.params, data = createMemo(function() {
                return props.preload && untrack(function() {
                    setInPreloadFn(!0), props.preload({
                        params: params,
                        location: location,
                        intent: intent || "initial"
                    }), setInPreloadFn(!1);
                });
            });
            return createComponent(Show, {
                get when() {
                    return props.root;
                },
                keyed: !0,
                get fallback() {
                    return props.children;
                },
                children: function(Root) {
                    return createComponent(Root, {
                        params: params,
                        location: location,
                        get data() {
                            return data();
                        },
                        get children() {
                            return props.children;
                        }
                    });
                }
            });
        }
        function Routes(props) {
            var root, disposers = [], routeStates = createMemo(on(props.routerState.matches, function(nextMatches, prevMatches, prev) {
                for (var equal = prevMatches && nextMatches.length === prevMatches.length, next = [], _loop5 = function(i) {
                    var prevMatch = prevMatches && prevMatches[i], nextMatch = nextMatches[i];
                    prev && prevMatch && nextMatch.route.key === prevMatch.route.key ? next[i] = prev[i] : (equal = !1, 
                    disposers[i] && disposers[i](), createRoot(function(dispose) {
                        disposers[i] = dispose, next[i] = function(router, parent, _outlet, match) {
                            var base = router.base, location = router.location, params = router.params, _match$route = match().route, pattern = _match$route.pattern, component = _match$route.component, preload = _match$route.preload, path = createMemo(function() {
                                return match().path;
                            });
                            component && component.preload && component.preload();
                            var data = preload ? preload({
                                params: params,
                                location: location,
                                intent: intent || "initial"
                            }) : void 0;
                            return {
                                parent: parent,
                                pattern: pattern,
                                path: path,
                                outlet: function() {
                                    return component ? createComponent$1(component, {
                                        params: params,
                                        location: location,
                                        data: data,
                                        get children() {
                                            return _outlet();
                                        }
                                    }) : _outlet();
                                },
                                resolvePath: function(to) {
                                    return _resolvePath(base.path(), to, path());
                                }
                            };
                        }(props.routerState, next[i - 1] || props.routerState.base, createOutlet(function() {
                            return routeStates()[i + 1];
                        }), function() {
                            var _routeMatches$i, routeMatches = props.routerState.matches();
                            return null !== (_routeMatches$i = routeMatches[i]) && void 0 !== _routeMatches$i ? _routeMatches$i : routeMatches[0];
                        });
                    }));
                }, i = 0, len = nextMatches.length; i < len; i++) _loop5(i);
                return disposers.splice(nextMatches.length).forEach(function(dispose) {
                    return dispose();
                }), prev && equal ? prev : (root = next[0], next);
            }));
            return createOutlet(function() {
                return routeStates() && root;
            })();
        }
        function createRouter(config) {
            var _ref5, get, set, _ref6, value, setValue, ignore = !1, wrap = function(value) {
                return "string" == typeof value ? {
                    value: value
                } : value;
            }, signal = (_ref5 = createSignal(wrap(config.get()), {
                equals: function(a, b) {
                    return a.value === b.value && a.state === b.state;
                }
            }), get = void 0, set = function(next) {
                return !ignore && config.set(next), sharedConfig.registry && !sharedConfig.done && (sharedConfig.done = !0), 
                next;
            }, _ref6 = _slicedToArray(_ref5, 2), value = _ref6[0], setValue = _ref6[1], [ get ? function() {
                return get(value());
            } : value, set ? function(v) {
                return setValue(set(v));
            } : setValue ]);
            return config.init && onCleanup(config.init(function() {
                var value = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : config.get();
                ignore = !0, signal[1](wrap(value)), ignore = !1;
            })), createRouterComponent({
                signal: signal,
                create: config.create,
                utils: config.utils
            });
        }
        function Navigate(props) {
            var navigate = useNavigate(), location = useLocation(), href = props.href, state = props.state;
            return navigate("function" == typeof href ? href({
                navigate: navigate,
                location: location
            }) : href, {
                replace: !0,
                state: state
            }), null;
        }
        function hashParser(str) {
            var to = str.replace(/^.*?#/, "");
            if (!to.startsWith("/")) {
                var _window$location$hash3 = _slicedToArray(window.location.hash.split("#", 2), 2)[1];
                return "".concat(void 0 === _window$location$hash3 ? "/" : _window$location$hash3, "#").concat(to);
            }
            return to;
        }
        function HashRouter(props) {
            var getSource = function() {
                return window.location.hash.slice(1);
            }, beforeLeave = createBeforeLeave();
            return createRouter({
                get: getSource,
                set: function(_ref7) {
                    var value = _ref7.value, replace = _ref7.replace, state = _ref7.state;
                    replace ? window.history.replaceState(function(state) {
                        return _objectSpread(_objectSpread({}, state), {}, {
                            _depth: window.history.state && window.history.state._depth
                        });
                    }(state), "", "#" + value) : window.history.pushState(state, "", "#" + value), saveCurrentDepth();
                },
                init: function(notify) {
                    return target = window, type = "hashchange", handler = function(notify, block) {
                        var ignore = !1;
                        return function() {
                            var prevDepth = depth;
                            saveCurrentDepth();
                            var delta = null == prevDepth ? null : depth - prevDepth;
                            ignore ? ignore = !1 : delta && block(delta) ? (ignore = !0, window.history.go(-delta)) : notify();
                        };
                    }(notify, function(delta) {
                        return !beforeLeave.confirm(delta && delta < 0 ? delta : getSource());
                    }), target.addEventListener(type, handler), function() {
                        return target.removeEventListener(type, handler);
                    };
                    var target, type, handler;
                },
                utils: {
                    go: function(delta) {
                        return window.history.go(delta);
                    },
                    renderPath: function(path) {
                        return "#".concat(path);
                    },
                    parsePath: hashParser,
                    beforeLeave: beforeLeave,
                    queryWrapper: props.forceProxy || !SUPPORTS_PROXY ? function(getQuery) {
                        return createMemoWithoutProxy(getQuery, props.queryParams);
                    } : void 0,
                    paramsWrapper: props.forceProxy || !SUPPORTS_PROXY ? function(buildParams, branches) {
                        return createMemoWithoutProxy(buildParams, collectDynamicParams(branches()));
                    } : void 0
                }
            })(props);
        }
        function createMemoWithoutProxy(fn, allKeys) {
            var map = new Map, owner = getOwner(), target = {};
            return (allKeys || Object.keys(fn())).forEach(function(key) {
                Object.defineProperty(target, key, {
                    get: function() {
                        return property = key, map.has(property) || runWithOwner(owner, function() {
                            return map.set(property, createMemo(function() {
                                return fn()[property];
                            }));
                        }), map.get(property)();
                        var property;
                    },
                    enumerable: !0,
                    configurable: !0
                });
            }), target;
        }
        function wrapChildren(props, setIsAlive) {
            var _el$, onRemove = chainFunctions(props.onRemove || function(elm) {
                elm.alpha = 0;
            }, function() {
                return null == setIsAlive ? void 0 : setIsAlive(!1);
            }), onRender = chainFunctions(props.onRender || function(elm) {
                elm.alpha = 1;
            }, function() {
                return null == setIsAlive ? void 0 : setIsAlive(!0);
            }), transition = props.transition || {
                alpha: !0
            };
            return _el$ = createElement("view"), spread(_el$, mergeProps$1(props, {
                preserve: !0,
                onRemove: onRemove,
                onRender: onRender,
                forwardFocus: 0,
                transition: transition
            }), !1), _el$;
        }
        function truncateString(str, maxLength) {
            if (!str) return "";
            var s = String(str);
            return s.length > maxLength ? s.substring(0, maxLength - 3) + "..." : s;
        }
        function convertItemsToTiles() {
            return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []).map(function(item, i) {
                return {
                    src: getImageUrl(item.poster_path || item.profile_path),
                    tileSrc: getImageUrl(item.backdrop_path || item.profile_path, "w300"),
                    backdrop: getImageUrl(item.backdrop_path, "w1280"),
                    href: "/entity/".concat(item.media_type || "people", "/").concat(item.id),
                    shortTitle: truncateString(item.title || item.name, 30),
                    title: item.title || item.name,
                    overview: item.overview,
                    absIndex: i,
                    item: item,
                    entityInfo: {
                        type: item.media_type || "people",
                        id: item.id
                    },
                    heroContent: {
                        title: item.title || item.name,
                        description: item.overview
                    }
                };
            });
        }
        function destroyData() {
            return {
                heroRow: {
                    title: "Best Adventure and Action movies",
                    items: createResource(function() {
                        return fetchGenreMovies([ "adventure", "action" ]);
                    })[0],
                    type: "Hero",
                    height: 800
                }
            };
        }
        function tmdbData() {
            var rows = [], popularMovies = createResource(function() {
                return fetchPopular("movie");
            });
            rows.push({
                title: "Popular Movies",
                items: popularMovies[0],
                setItems: popularMovies[1].mutate,
                type: "Poster",
                height: 328
            }), rows.push({
                title: "Best Western movies",
                items: createResource(function() {
                    return fetchGenreMovies([ "Western" ]);
                })[0],
                type: "Hero",
                height: 720
            }), rows.push({
                title: "Best Comedy movies",
                items: createResource(function() {
                    return fetchGenreMovies([ "Comedy" ]);
                })[0],
                type: "PosterTitle",
                height: 400
            }), rows.push({
                title: "Popular TV shows",
                items: createResource(function() {
                    return fetchPopular("tv");
                })[0],
                type: "PosterTitle",
                height: 400
            });
            var heroRow = {
                title: "Best Adventure and Action movies",
                items: createResource(function() {
                    return fetchGenreMovies([ "adventure", "action" ]);
                })[0],
                type: "Hero",
                height: 720
            };
            return rows.push(heroRow), rows.push({
                title: "Best Animations",
                items: createResource(function() {
                    return fetchGenreMovies("Animation");
                })[0],
                type: "PosterTitle",
                height: 400
            }), rows.push({
                title: "Best TV Movie Movies",
                items: createResource(function() {
                    return fetchGenreMovies("TV Movie");
                })[0],
                type: "PosterTitle",
                height: 400
            }), rows.push({
                title: "Best Science Fiction movies",
                items: createResource(function() {
                    return fetchGenreMovies("Science Fiction");
                })[0],
                type: "Hero",
                height: 720
            }), rows.push({
                title: "Best War Movies",
                items: createResource(function() {
                    return fetchGenreMovies("War");
                })[0],
                type: "PosterTitle",
                height: 400
            }), {
                rows: rows
            };
        }
        function browsePreload(props) {
            var lastFilter = null;
            return createMemo(function(p) {
                var params = props.params;
                if (p && (!params.filter || lastFilter === params.filter)) return p;
                var filter, provider = (filter = params.filter || "all", function(pageIndex) {
                    var url = "/trending/".concat(filter, "/week?page=").concat(pageIndex);
                    if (cache.has(url)) return cache.get(url);
                    var result = api_default.get(url).then(function(trending) {
                        return convertItemsToTiles(trending.results.filter(function(r) {
                            return !r.adult;
                        }));
                    }).catch(function(err) {
                        throw console.error("[BROWSE_PROVIDER_ERROR] url:", url, "error:", err.message, err.stack), 
                        err;
                    });
                    return cache.set(url, result), result;
                });
                return provider(1), lastFilter = params.filter || lastFilter, provider;
            });
        }
        function justYear(dateString) {
            return ((null == dateString ? void 0 : dateString.split("-")) || [])[0] || "";
        }
        function ensureItems(items, minCount) {
            var remainingCount = minCount - items.length;
            return remainingCount > 0 ? items.concat(Array(remainingCount).fill({})) : items;
        }
        function getRecommendations(_ref8) {
            var type = _ref8.type, id = _ref8.id;
            return api_default.get("/".concat(type, "/").concat(id, "/recommendations")).then(function(_ref9) {
                var results = _ref9.results;
                return results.length ? ensureItems(convertItemsToTiles(results.slice(0, 7)), 7) : api_default.get("/trending/".concat(type, "/week?page=1")).then(function(_ref0) {
                    return ensureItems(convertItemsToTiles(_ref0.results.slice(0, 7)), 7);
                });
            });
        }
        function getCredits(_ref1) {
            var type = _ref1.type, id = _ref1.id;
            return api_default.get("/".concat(type, "/").concat(id, "/credits")).then(function(_ref10) {
                return ensureItems(convertItemsToTiles(_ref10.cast.slice(0, 7)), 7);
            });
        }
        function getInfo(_ref11) {
            var type = _ref11.type, id = _ref11.id, rt = "movie" === type ? {
                rtCrit: 86,
                rtFan: 92
            } : {};
            return api_default.get("/".concat(type, "/").concat(id)).then(function(data) {
                return _objectSpread({
                    backgroundImage: getImageUrl(data.backdrop_path, "w1280"),
                    heroContent: {
                        title: data.title || data.name,
                        description: data.overview,
                        badges: [ "HD", "CC" ],
                        voteAverage: data.vote_average,
                        voteCount: data.vote_count,
                        metaText: "movie" === type ? (minutes = data.runtime, remainingMinutes = minutes % 60, 
                        Math.floor(minutes / 60) + "h " + (remainingMinutes < 10 ? "0" : "") + remainingMinutes + "min   " + (dateString = data.release_date, 
                        parts = dateString.split("-"), parts[1] + "/" + parts[2] + "/" + parts[0])) : "".concat(justYear(data.first_air_date), " - ").concat(justYear(data.last_air_date)),
                        reviews: rt
                    }
                }, data);
                var dateString, parts, minutes, remainingMinutes;
            });
        }
        function entityPreload(_ref12) {
            var params = _ref12.params, intent = _ref12.intent, entity = _slicedToArray(createResource(function() {
                return _objectSpread({}, params);
            }, getInfo), 1)[0];
            if ("preload" !== intent) return {
                entity: entity,
                credits: _slicedToArray(createResource(function() {
                    return _objectSpread({}, params);
                }, getCredits), 1)[0],
                recommendations: _slicedToArray(createResource(function() {
                    return _objectSpread({}, params);
                }, getRecommendations), 1)[0]
            };
        }
        function Background() {
            var bg1, bg2, heroMask, disableBG = "true" === new URLSearchParams(window.location.search).get("disableBG"), active = 0, animationSettings = {
                duration: 550,
                easing: "ease-in-out"
            }, bgStyles = {
                alpha: 1,
                color: 4294967295
            };
            return onMount(function() {
                if (disableBG) return heroMask.src = "", heroMask.colorLeft = 255, void (heroMask.colorRight = 0);
            }), createEffect(on(globalBackground, function(img) {
                !function(img) {
                    if (disableBG) return heroMask.src = "", heroMask.colorLeft = 255, void (heroMask.colorRight = 0);
                    if ("string" != typeof img) return bg1.color = img, bg1.src = "", bg1.alpha = 1, 
                    active = 1, bg2.alpha = 0, void (heroMask.alpha = 0);
                    bg1.color = 4294967295, heroMask.alpha = 1;
                    var currentBg = 1 === active ? bg2 : bg1, nextBg = 1 === active ? bg1 : bg2;
                    currentBg.src = img, 0 === active ? currentBg.alpha = 1 : (currentBg.alpha = .01, 
                    currentBg.animate({
                        alpha: 1
                    }, animationSettings).start()), nextBg.animate({
                        alpha: .01
                    }, animationSettings).start(), active = 1 === active ? 2 : 1;
                }(img);
            }, {
                defer: !0
            })), function() {
                var _el$ = createElement("view"), _el$2 = createElement("view"), _el$3 = createElement("view"), _el$4 = createElement("view");
                insertNode(_el$, _el$2), insertNode(_el$, _el$3), insertNode(_el$, _el$4), setProp(_el$, "width", 1920), 
                setProp(_el$, "height", 1080), setProp(_el$, "zIndex", -5);
                "function" == typeof bg1 ? use(bg1, _el$2) : bg1 = _el$2, setProp(_el$2, "style", bgStyles);
                "function" == typeof bg2 ? use(bg2, _el$3) : bg2 = _el$3, setProp(_el$3, "style", bgStyles), 
                setProp(_el$3, "alpha", 0);
                return "function" == typeof heroMask ? use(heroMask, _el$4) : heroMask = _el$4, 
                setProp(_el$4, "src", "./assets/hero-mask-inverted.png"), setProp(_el$4, "color", 255), 
                setProp(_el$4, "width", 1920), setProp(_el$4, "height", 1080), _el$;
            }();
        }
        function Icon(props) {
            var src, subTextures, spriteMapTexture, _el$, _el$2;
            return sprite = sprite || (src = "/solid-demo-app/assets/icons_white.png", subTextures = icons, 
            spriteMapTexture = renderer.createTexture("ImageTexture", {
                src: src
            }), subTextures.reduce(function(acc, t) {
                var x = t.x, y = t.y, width = t.width, height = t.height;
                return acc[t.name] = renderer.createTexture("SubTexture", {
                    texture: spriteMapTexture,
                    x: x,
                    y: y,
                    w: width,
                    h: height
                }), acc;
            }, {})), "perf" === props.name ? (_el$ = createElement("view"), spread(_el$, mergeProps$1(props, {
                src: "".concat(basePath, "assets/perficon.png"),
                width: 100,
                y: 25,
                height: 50
            }), !1), _el$) : (_el$2 = createElement("view"), spread(_el$2, mergeProps$1(props, {
                get texture() {
                    return sprite[props.name];
                },
                get width() {
                    return sprite[props.name].props.w;
                },
                get height() {
                    return sprite[props.name].props.h;
                },
                get x() {
                    return (100 - (sprite[props.name].props.w || 0)) / 2;
                },
                get y() {
                    return (100 - (sprite[props.name].props.h || 0)) / 2;
                }
            }), !1), _el$2);
        }
        function NavButton(props) {
            return _el$ = createElement("view"), _el$2 = createElement("view"), _el$3 = createElement("text"), 
            insertNode(_el$, _el$2), insertNode(_el$, _el$3), spread(_el$, mergeProps$1(props, {
                forwardStates: !0,
                get style() {
                    return NavDrawer_styles_default.NavButton;
                }
            }), !0), setProp(_el$2, "y", -16), insert(_el$2, createComponent(Icon, {
                get color() {
                    return props.iconColor;
                },
                scale: .5,
                get name() {
                    return props.icon;
                }
            })), setProp(_el$3, "style", NavButtonTextStyles), insert(_el$3, function() {
                return props.children;
            }), _el$;
            var _el$, _el$2, _el$3;
        }
        function NavDrawer(props) {
            var backdrop, navigate = useNavigate();
            function handleNavigate(page) {
                if (useMatch(function() {
                    return page;
                })()) return props.focusPage();
                navigate(page);
            }
            var _el$10, _el$1, _el$4, _el$5, _el$7, _el$8, _el$9, selectedButton = createMemo(function() {
                return useMatch(function() {
                    return "/browse/all";
                })() ? 308 : useMatch(function() {
                    return "/browse/movie";
                })() ? 398 : useMatch(function() {
                    return "/browse/tv";
                })() ? 488 : useMatch(function() {
                    return "/examples";
                })() ? 578 : useMatch(function() {
                    return "/benchmark";
                })() ? 668 : useMatch(function() {
                    return "/versions";
                })() ? 758 : 308;
            });
            return [ (_el$4 = createElement("view"), _el$5 = createElement("text"), _el$7 = createElement("view"), 
            _el$8 = createElement("view"), _el$9 = createElement("text"), insertNode(_el$4, _el$5), 
            insertNode(_el$4, _el$7), insertNode(_el$4, _el$8), insertNode(_el$4, _el$9), setProp(_el$4, "id", "NavDrawer"), 
            setProp(_el$4, "flexItem", !1), setProp(_el$4, "width", 300), setProp(_el$4, "height", 150), 
            setProp(_el$4, "x", 30), setProp(_el$4, "y", 15), setProp(_el$4, "zIndex", 105), 
            insertNode(_el$5, createTextNode("Built With:")), setProp(_el$5, "y", 8), setProp(_el$5, "x", 80), 
            setProp(_el$5, "fontSize", 28), setProp(_el$7, "y", 10), setProp(_el$7, "src", "./assets/solidWord.png"), 
            setProp(_el$7, "width", 280), setProp(_el$7, "height", 52), setProp(_el$7, "textureOptions", {}), 
            setProp(_el$8, "x", 0), setProp(_el$8, "y", 100), setProp(_el$8, "src", "./assets/tmdb.png"), 
            setProp(_el$8, "width", 80), setProp(_el$8, "height", 41), setProp(_el$8, "textureOptions", {}), 
            insertNode(_el$9, createTextNode("This product uses the TMDB API but is not endorsed or certified by TMDB.")), 
            setProp(_el$9, "x", 90), setProp(_el$9, "y", 104), setProp(_el$9, "contain", "width"), 
            setProp(_el$9, "width", 160), setProp(_el$9, "fontSize", 12), effect(function(_p$) {
                var _v$ = props.showWidgets ? 1 : 0, _v$2 = theme_default.textSecondary, _v$3 = theme_default.textSecondary;
                return _v$ !== _p$.e && (_p$.e = setProp(_el$4, "alpha", _v$, _p$.e)), _v$2 !== _p$.t && (_p$.t = setProp(_el$5, "color", _v$2, _p$.t)), 
                _v$3 !== _p$.a && (_p$.a = setProp(_el$9, "color", _v$3, _p$.a)), _p$;
            }, {
                e: void 0,
                t: void 0,
                a: void 0
            }), _el$4), createComponent(Column, mergeProps$1(props, {
                onFocus: function() {
                    backdrop.states.add("$focus"), this.children.forEach(function(c) {
                        return c.states.add("$active");
                    }), this.children[this.selected || 0].setFocus();
                },
                onBlur: function() {
                    backdrop.states.remove("$focus"), this.selected = 0, this.children.forEach(function(c) {
                        return c.states.remove("$active");
                    });
                },
                get style() {
                    return NavDrawer_styles_default.Column;
                },
                announce: "Main Menu",
                scroll: "none",
                get children() {
                    return [ createComponent(NavButton, {
                        onEnter: function() {
                            return handleNavigate("/browse/all");
                        },
                        iconColor: 4294967295,
                        announce: [ "Trending Browse", "button" ],
                        icon: "trending",
                        children: "Trending"
                    }), createComponent(NavButton, {
                        icon: "movie",
                        iconColor: 4294967295,
                        announce: [ "Movies Browse", "button" ],
                        onEnter: function() {
                            return handleNavigate("/browse/movie");
                        },
                        children: "Movies"
                    }), createComponent(NavButton, {
                        icon: "tv",
                        iconColor: 4294967295,
                        announce: [ "TV Browse", "button" ],
                        onEnter: function() {
                            return handleNavigate("/browse/tv");
                        },
                        children: "TV"
                    }), createComponent(NavButton, {
                        icon: "experiment",
                        iconColor: 4294967295,
                        announce: [ "Examples", "button" ],
                        onEnter: function() {
                            return handleNavigate("/examples");
                        },
                        children: "Examples"
                    }), createComponent(NavButton, {
                        icon: "perf",
                        iconColor: 4294967295,
                        announce: [ "Benchmark", "button" ],
                        onEnter: function() {
                            return handleNavigate("/versions");
                        },
                        children: "Benchmark"
                    }) ];
                }
            })), (_el$1 = createElement("view"), "function" == typeof backdrop ? use(backdrop, _el$1) : backdrop = _el$1, 
            setProp(_el$1, "skipFocus", !0), effect(function(_$p) {
                return setProp(_el$1, "style", NavDrawer_styles_default.Gradient, _$p);
            }), _el$1), (_el$10 = createElement("view"), setProp(_el$10, "width", 4), setProp(_el$10, "height", 56), 
            setProp(_el$10, "color", 4294967295), setProp(_el$10, "x", 22), setProp(_el$10, "zIndex", 100), 
            effect(function(_$p) {
                return setProp(_el$10, "y", selectedButton(), _$p);
            }), _el$10) ];
        }
        return _export({
            n: convertItemsToTiles,
            t: Icon
        }), {
            setters: [ function(_renderLegacy001Js) {
                onMount = _renderLegacy001Js.$, createContext = _renderLegacy001Js.B, isElementNode = _renderLegacy001Js.C, 
                Config = _renderLegacy001Js.D, createRoot = _renderLegacy001Js.G, createMemo = _renderLegacy001Js.H, 
                batch = _renderLegacy001Js.I, getListener = _renderLegacy001Js.J, children = _renderLegacy001Js.L, 
                Show = _renderLegacy001Js.N, activeElement = _renderLegacy001Js.O, onCleanup = _renderLegacy001Js.Q, 
                createComponent$1 = _renderLegacy001Js.R, hasFocus = _renderLegacy001Js.S, isFunction = _renderLegacy001Js.T, 
                createRenderEffect = _renderLegacy001Js.U, createEffect = _renderLegacy001Js.V, 
                createResource = _renderLegacy001Js.W, mergeProps = _renderLegacy001Js.X, getOwner = _renderLegacy001Js.Y, 
                on = _renderLegacy001Js.Z, ElementNode = _renderLegacy001Js._, createElement = _renderLegacy001Js.a, 
                useContext = _renderLegacy001Js.at, loadFonts = _renderLegacy001Js.b, effect = _renderLegacy001Js.c, 
                memo = _renderLegacy001Js.d, PRECISION = _renderLegacy001Js.dt, resetErrorBoundaries = _renderLegacy001Js.et, 
                rootNode = _renderLegacy001Js.f, defaultVertex = _renderLegacy001Js.ft, use = _renderLegacy001Js.g, 
                rgbaRow = _renderLegacy001Js.gt, spread = _renderLegacy001Js.h, rampScale = _renderLegacy001Js.ht, 
                createComponent = _renderLegacy001Js.i, untrack = _renderLegacy001Js.it, insert = _renderLegacy001Js.l, 
                setProp = _renderLegacy001Js.m, paramsGlsl = _renderLegacy001Js.mt, sharedConfig = _renderLegacy001Js.nt, 
                createRenderer = _renderLegacy001Js.o, edgeWidthDefine = _renderLegacy001Js.pt, 
                createSignal = _renderLegacy001Js.q, startTransition = _renderLegacy001Js.rt, createTextNode = _renderLegacy001Js.s, 
                runWithOwner = _renderLegacy001Js.tt, insertNode = _renderLegacy001Js.u, assertTruthy = _renderLegacy001Js.ut, 
                focusPath = _renderLegacy001Js.v, renderer = _renderLegacy001Js.x, useFocusManager = _renderLegacy001Js.y, 
                createComputed = _renderLegacy001Js.z;
            }, function(_utilsLegacy002Js) {
                combineStyles = _utilsLegacy002Js.n, clamp = _utilsLegacy002Js.t;
            }, function(_mergePropsLegacy003Js) {
                mergeProps$1 = _mergePropsLegacy003Js.t;
            }, function(_webLegacy004Js) {
                _webLegacy004Js.t;
            }, function(_LazyLegacy005Js) {
                LazyRow = _LazyLegacy005Js.n, LazyColumn = _LazyLegacy005Js.t;
            }, function(_chainFunctionsLegacy006Js) {
                withScrolling = _chainFunctionsLegacy006Js.a, navigableForwardFocus = _chainFunctionsLegacy006Js.d, 
                navigableHandleNavigation = _chainFunctionsLegacy006Js.f, chainRefs = _chainFunctionsLegacy006Js.n, 
                chainFunctions = _chainFunctionsLegacy006Js.t;
            }, function(_ColumnLegacy007Js) {
                Column = _ColumnLegacy007Js.t;
            }, function(_FPSCounterLegacy009Js) {
                setupFPS = _FPSCounterLegacy009Js.r, FPSCounter = _FPSCounterLegacy009Js.t;
            }, function(_ContentBlockLegacy00aJs) {
                ContentBlock = _ContentBlockLegacy00aJs.t;
            }, function(_createFocusStackLegacy00bJs) {
                useFocusStack = _createFocusStackLegacy00bJs.n, FocusStackProvider = _createFocusStackLegacy00bJs.t;
            }, function(_componentsLegacy00cJs) {
                Hero = _componentsLegacy00cJs.a, TitleRow = _componentsLegacy00cJs.d, Thumbnail = _componentsLegacy00cJs.l, 
                List = _componentsLegacy00cJs.p, AssetPanel = _componentsLegacy00cJs.t;
            }, function(_themeLegacy00dJs) {
                theme_default = _themeLegacy00dJs.t;
            }, function(_stylesLegacy00eJs) {
                styles_default = _stylesLegacy00eJs.r;
            }, function(_stateLegacy00fJs) {
                setGlobalBackground = _stateLegacy00fJs.n, globalBackground = _stateLegacy00fJs.t;
            }, function(_distLegacy00gJs) {
                debounce$1 = _distLegacy00gJs.t;
            }, function(_apiLegacy00hJs) {
                getImageUrl = _apiLegacy00hJs.n, api_default = _apiLegacy00hJs.t;
            } ],
            execute: function() {
                var _createSignal20, originalGetOwnPropertyNames;
                (__vite_style__ = document.createElement("style")).textContent = "html,body,*{margin:0;padding:0}html,body{background-color:#000;width:100vw;height:100vh;margin:0;padding:0;overflow:hidden}video{z-index:2;outline:none;position:absolute;top:0;left:0}.center-element{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}#splash{z-index:9999;opacity:1;background-color:#335d92;width:100vw;height:100vh;transition:opacity .3s;position:absolute;top:0;left:0}#splash.fade-out{opacity:0;pointer-events:none}#splash img{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}\n/*$vite$:1*/", 
                document.head.appendChild(__vite_style__), function() {
                    var relList = document.createElement("link").relList;
                    if (!(relList && relList.supports && relList.supports("modulepreload"))) {
                        var _step7, _iterator7 = _createForOfIteratorHelper(document.querySelectorAll('link[rel="modulepreload"]'));
                        try {
                            for (_iterator7.s(); !(_step7 = _iterator7.n()).done; ) {
                                processPreload(_step7.value);
                            }
                        } catch (err) {
                            _iterator7.e(err);
                        } finally {
                            _iterator7.f();
                        }
                        new MutationObserver(function(mutations) {
                            var _step8, _iterator8 = _createForOfIteratorHelper(mutations);
                            try {
                                for (_iterator8.s(); !(_step8 = _iterator8.n()).done; ) {
                                    var mutation = _step8.value;
                                    if ("childList" === mutation.type) {
                                        var _step9, _iterator9 = _createForOfIteratorHelper(mutation.addedNodes);
                                        try {
                                            for (_iterator9.s(); !(_step9 = _iterator9.n()).done; ) {
                                                var node = _step9.value;
                                                "LINK" === node.tagName && "modulepreload" === node.rel && processPreload(node);
                                            }
                                        } catch (err) {
                                            _iterator9.e(err);
                                        } finally {
                                            _iterator9.f();
                                        }
                                    }
                                }
                            } catch (err) {
                                _iterator8.e(err);
                            } finally {
                                _iterator8.f();
                            }
                        }).observe(document, {
                            childList: !0,
                            subtree: !0
                        });
                    }
                    function processPreload(link) {
                        if (!link.ep) {
                            link.ep = !0;
                            var fetchOpts = function(link) {
                                var fetchOpts = {};
                                return link.integrity && (fetchOpts.integrity = link.integrity), link.referrerPolicy && (fetchOpts.referrerPolicy = link.referrerPolicy), 
                                "use-credentials" === link.crossOrigin ? fetchOpts.credentials = "include" : "anonymous" === link.crossOrigin ? fetchOpts.credentials = "omit" : fetchOpts.credentials = "same-origin", 
                                fetchOpts;
                            }(link);
                            fetch(link.href, fetchOpts);
                        }
                    }
                }(), toVec4 = function(value) {
                    if (!1 === Array.isArray(value)) {
                        return [ value, value, value, value ];
                    }
                    var a = value;
                    if (4 === a.length) return [ a[0], a[1], a[2], a[3] ];
                    if (3 === a.length) return [ a[0], a[1], a[2], a[0] ];
                    if (2 === a.length) return [ a[0], a[1], a[0], a[1] ];
                    var first = a[0], v = void 0 === first ? 0 : first;
                    return [ v, v, v, v ];
                }, adjustWidth = function(w) {
                    return w - 1 + Math.min(Math.max(w, -1), 1);
                }, growWithAa = function(grow, edgeWidth) {
                    return grow > 0 ? grow + edgeWidth : 0;
                }, growQuadGlsl = function(grow, size) {
                    return "vec2 screenSpace=vec2(2.0/RESOLUTION.x,-2.0/RESOLUTION.y);vec2 edge=clamp(a_nodeCoords*2.0-vec2(1.0),-1.0,1.0);vec2 edgeOffset=edge*mix((".concat(grow, ").zw,(").concat(grow, ").xy,step(edge,vec2(0.0)));gl_Position=pxToClip(a_position+u_nodeTransform.xy*edgeOffset.x+u_nodeTransform.zw*edgeOffset.y);v_boxUv=(a_nodeCoords-0.5)*(").concat(size, ")+screenSpace+edgeOffset;v_textureCoords=a_textureCoords+(screenSpace+edgeOffset)/(").concat(size, ")*(u_uvRect.zw-u_uvRect.xy);\n");
                }, vec4Prop = function(def) {
                    return {
                        default: def,
                        resolve: function(value) {
                            return void 0 !== value ? toVec4(value) : def.slice();
                        }
                    };
                }, elementOf = function(prop, i) {
                    return {
                        default: 0,
                        set: function(value, props) {
                            props[prop][i] = value;
                        },
                        get: function(props) {
                            return props[prop][i];
                        }
                    };
                }, alignProp = {
                    default: 1,
                    resolve: function(value) {
                        return !1 === isNaN(value) ? value : "inside" === value ? 0 : "center" === value ? .5 : 1;
                    }
                }, borderProps = function(pf) {
                    return _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({}, pf + "w", vec4Prop([ 0, 0, 0, 0 ])), pf + "color", 4294967295), pf + "align", alignProp), pf + "gap", 0), pf + "top", elementOf(pf + "w", 0)), pf + "right", elementOf(pf + "w", 1)), pf + "bottom", elementOf(pf + "w", 2)), pf + "left", elementOf(pf + "w", 3));
                }, shadowProps = function(pf) {
                    return _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({}, pf + "color", 255), pf + "projection", vec4Prop([ 0, 0, 5, 5 ])), pf + "x", elementOf(pf + "projection", 0)), pf + "y", elementOf(pf + "projection", 1)), pf + "blur", elementOf(pf + "projection", 2)), pf + "spread", elementOf(pf + "projection", 3));
                }, vec4Row = function(u, i, v) {
                    u.row(i, v[0], v[1], v[2], v[3]);
                }, vertexSource = function(grows) {
                    return "attribute vec2 a_position;attribute vec2 a_textureCoords;attribute vec4 a_color;attribute vec2 a_nodeCoords;\n" + (!0 === grows ? "uniform vec4 u_nodeTransform;uniform vec4 u_uvRect;\n" : "") + "varying vec4 v_color;varying vec2 v_textureCoords;varying vec2 v_boxUv;\n#if HAS_SHADOW&&SHADOW_MODEL==0\nvarying vec2 v_shadowBox;\n#endif\nvoid main(){\n" + (!0 === grows ? growQuadGlsl("U_GROW", "U_NODE.xy*2.0") : "v_textureCoords=a_textureCoords;v_boxUv=(a_nodeCoords*2.0-1.0)*U_NODE.xy;gl_Position=pxToClip(a_position);\n") + "v_color=a_color;\n#if HAS_SHADOW&&SHADOW_MODEL==0\nv_shadowBox=v_boxUv-U_SHADOW.xy;\n#endif\n}";
                }, fragmentSource = function(grows) {
                    return "uniform sampler2D u_texture;\n" + (!0 === grows ? "uniform float u_alpha;\n#define ALPHA u_alpha\n" : "") + "varying vec4 v_color;varying vec2 v_textureCoords;varying vec2 v_boxUv;\n#if HAS_SHADOW&&SHADOW_MODEL==0\nvarying vec2 v_shadowBox;\n#endif\n#if HAS_RADIUS\nfloat quadRadius(vec2 p,vec4 r){vec2 s=step(vec2(0.0),p);return mix(mix(r.x,r.y,s.x),mix(r.w,r.z,s.x),s.y);}\nfloat box(vec2 p,vec2 s,vec4 r){float rad=quadRadius(p,r);vec2 q=abs(p)-s+rad;return (min(max(q.x,q.y),0.0)+length(max(q,0.0)))-rad;}\n#define BOX(p,s,r) box(p,s,r)\n#define SHADOW_RADIUS vec4\n#else\nfloat box(vec2 p,vec2 s){vec2 q=abs(p)-s;return min(max(q.x,q.y),0.0)+length(max(q,0.0));}\n#define BOX(p,s,r) box(p,s)\n#define SHADOW_RADIUS float\n#endif\n#if HAS_SHADOW\nfloat shadowBox(vec2 p,vec2 s,SHADOW_RADIUS r){\n#if HAS_RADIUS\nfloat rad=quadRadius(p,r);\n#else\nfloat rad=r;\n#endif\nvec2 q=abs(p)-s+rad;float dist=min(max(q.x,q.y),0.0)+length(max(q,0.0))-rad;float t=clamp(dist*U_SHADOW_RAMP.x+U_SHADOW_RAMP.y,0.0,1.0);return 1.0-t*t*(3.0-2.0*t);}\n#define BASE shadow\n#else\n#define BASE vec4(0.0)\n#endif\nvoid main(){vec4 color=texture2D(u_texture,v_textureCoords)*v_color;\n#if HAS_SHADOW\nvec4 shadow=vec4(0.0);if(U_SHADOW_COLOR.a>=0.0001){shadow=U_SHADOW_COLOR*ALPHA*shadowBox(SHADOW_P,SHADOW_S,SHADOW_R);}\n#endif\n#if HAS_BORDER\nif(U_NODE.z<0.5){float nodeAlpha=clamp(0.5-BOX(v_boxUv,U_NODE.xy,U_RADIUS)*INV_EDGE_WIDTH,0.0,1.0);\n#if HAS_SHADOW\ngl_FragColor=mix(shadow,color,nodeAlpha);\n#else\ngl_FragColor=color*nodeAlpha;\n#endif\nreturn;}\nfloat outerDist=BOX(v_boxUv+U_OUTER_BOX.xy,U_OUTER_BOX.zw,U_OUTER_RADIUS);float innerDist=BOX(v_boxUv+U_INNER_BOX.xy,U_INNER_BOX.zw,U_INNER_RADIUS);float innerAlpha=clamp(0.5-innerDist*INV_EDGE_WIDTH,0.0,1.0);vec4 border=U_BORDER_COLOR*ALPHA;\nif(U_NODE.w<0.5){float outerAlpha=clamp(0.5-outerDist*INV_EDGE_WIDTH,0.0,1.0);gl_FragColor=mix(mix(BASE,border,outerAlpha*U_BORDER_COLOR.a),color,innerAlpha);return;}\nfloat nodeAlpha=clamp(0.5-BOX(v_boxUv,U_NODE.xy,U_RADIUS)*INV_EDGE_WIDTH,0.0,1.0);float borderAlpha=clamp(0.5-max(-innerDist,outerDist)*INV_EDGE_WIDTH,0.0,1.0);\n#if HAS_FILL\nvec4 fill=color*nodeAlpha+U_FILL_COLOR*ALPHA*max(0.0,innerAlpha-nodeAlpha);\n#else\nvec4 fill=mix(BASE,color,nodeAlpha);\n#endif\ngl_FragColor=mix(fill,border,borderAlpha*U_BORDER_COLOR.a);\n#else\nfloat nodeAlpha=clamp(0.5-BOX(v_boxUv,U_NODE.xy,U_RADIUS)*INV_EDGE_WIDTH,0.0,1.0);\n#if HAS_SHADOW\ngl_FragColor=mix(shadow,color,nodeAlpha)+shadow*(nodeAlpha*(1.0-color.a));\n#else\ngl_FragColor=color*nodeAlpha;\n#endif\n#endif\n}";
                }, flag = function(name, bit) {
                    return "#define ".concat(name, " ").concat(0 === bit ? 0 : 1, "\n");
                }, Rounded = (boxType = function(flags, extra, rows, props, pack) {
                    var grows = !!(1 & flags), _vertex = vertexSource(grows), _fragment = fragmentSource(grows), defines = flag("HAS_RADIUS", 2 & flags) + flag("HAS_BORDER", 4 & flags) + flag("HAS_FILL", 8 & flags) + flag("HAS_SHADOW", 16 & flags) + flag("SHADOW_MODEL", 32 & flags), head = function(ctx) {
                        return PRECISION + defines + extra + ctx.viewport + paramsGlsl(rows);
                    };
                    return {
                        props: props,
                        vertex: function(ctx) {
                            return head(ctx) + _vertex;
                        },
                        fragment: function(ctx) {
                            return head(ctx) + edgeWidthDefine(ctx.pixelRatio) + _fragment;
                        },
                        pack: pack
                    };
                })(2, "", [ "U_RADIUS", "U_NODE" ], (radiusProps = function() {
                    return {
                        radius: vec4Prop([ 0, 0, 0, 0 ]),
                        "top-left": elementOf("radius", 0),
                        "top-right": elementOf("radius", 1),
                        "bottom-right": elementOf("radius", 2),
                        "bottom-left": elementOf("radius", 3)
                    };
                })(), function(props, w, h, u) {
                    vec4Row(u, 0, factorRadius(props.radius, w, h)), u.row(1, .5 * w, .5 * h, 0, 0);
                }), packBorder = function(u, w, h, radius, props, pf) {
                    var g = function(w, h, radius, borderW, align, gap) {
                        var halfW = .5 * w, halfH = .5 * h, hasBorder = Math.abs(borderW[0]) + Math.abs(borderW[1]) + Math.abs(borderW[2]) + Math.abs(borderW[3]) >= .001;
                        if (!1 === hasBorder) return {
                            hasBorder: hasBorder,
                            hasGap: Math.abs(gap) >= 1e-4,
                            shadowOnOuter: !1,
                            outerUvX: 0,
                            outerUvY: 0,
                            outerHalfW: halfW,
                            outerHalfH: halfH,
                            innerUvX: 0,
                            innerUvY: 0,
                            innerHalfW: halfW,
                            innerHalfH: halfH,
                            outerRadius: [ radius[0], radius[1], radius[2], radius[3] ],
                            innerRadius: [ radius[0], radius[1], radius[2], radius[3] ],
                            growL: 0,
                            growT: 0,
                            growR: 0,
                            growB: 0
                        };
                        var t = adjustWidth(borderW[0]), r = adjustWidth(borderW[1]), b = adjustWidth(borderW[2]), l = adjustWidth(borderW[3]), sizeX = r + l, sizeY = t + b, gapT = t >= .001 ? gap : 0, gapR = r >= .001 ? gap : 0, gapB = b >= .001 ? gap : 0, gapL = l >= .001 ? gap : 0, outerHalfW = .5 * (w + gapL + gapR + sizeX * align), outerHalfH = .5 * (h + gapT + gapB + sizeY * align), diffX = r - l, diffY = b - t, outerUvX = -diffX * align * .5 - .5 * (gapR - gapL), outerUvY = -diffY * align * .5 - .5 * (gapB - gapT), alignT = t * align, alignR = r * align, alignB = b * align, alignL = l * align, oTl = Math.max(0, radius[0] + Math.max(alignT, alignL) + gap), oTr = Math.max(0, radius[1] + Math.max(alignT, alignR) + gap), oBr = Math.max(0, radius[2] + Math.max(alignB, alignR) + gap), oBl = Math.max(0, radius[3] + Math.max(alignB, alignL) + gap);
                        return {
                            hasBorder: hasBorder,
                            hasGap: Math.abs(gap) >= 1e-4,
                            shadowOnOuter: outerHalfW >= halfW || outerHalfH >= halfH,
                            outerUvX: outerUvX,
                            outerUvY: outerUvY,
                            outerHalfW: outerHalfW,
                            outerHalfH: outerHalfH,
                            innerUvX: outerUvX + .5 * diffX,
                            innerUvY: outerUvY + .5 * diffY,
                            innerHalfW: outerHalfW - .5 * sizeX,
                            innerHalfH: outerHalfH - .5 * sizeY,
                            outerRadius: [ oTl, oTr, oBr, oBl ],
                            innerRadius: [ Math.max(0, oTl - Math.max(t, l)), Math.max(0, oTr - Math.max(t, r)), Math.max(0, oBr - Math.max(b, r)), Math.max(0, oBl - Math.max(b, l)) ],
                            growL: Math.max(0, outerHalfW + outerUvX - halfW),
                            growT: Math.max(0, outerHalfH + outerUvY - halfH),
                            growR: Math.max(0, outerHalfW - outerUvX - halfW),
                            growB: Math.max(0, outerHalfH - outerUvY - halfH)
                        };
                    }(w, h, radius, props[pf + "w"], props[pf + "align"], props[pf + "gap"]);
                    return rgbaRow(u, 0, props[pf + "color"]), u.row(1, .5 * w, .5 * h, !0 === g.hasBorder ? 1 : 0, !0 === g.hasGap ? 1 : 0), 
                    u.row(2, g.outerUvX, g.outerUvY, g.outerHalfW, g.outerHalfH), u.row(3, g.innerUvX, g.innerUvY, g.innerHalfW, g.innerHalfH), 
                    g;
                }, growRow = function(u, g) {
                    var ew = 1 / u.pixelRatio;
                    u.row(4, growWithAa(g.growL, ew), growWithAa(g.growT, ew), growWithAa(g.growR, ew), growWithAa(g.growB, ew));
                }, NO_RADIUS = [ 0, 0, 0, 0 ], boxType(5, "", [ "U_BORDER_COLOR", "U_NODE", "U_OUTER_BOX", "U_INNER_BOX", "U_GROW" ], borderProps(""), function(props, w, h, u) {
                    var g = packBorder(u, w, h, NO_RADIUS, props, "");
                    growRow(u, g), !1 === g.hasBorder && u.alphaUnused();
                }), RoundedWithBorder = boxType(15, "", [ "U_BORDER_COLOR", "U_NODE", "U_OUTER_BOX", "U_INNER_BOX", "U_GROW", "U_FILL_COLOR", "U_RADIUS", "U_OUTER_RADIUS", "U_INNER_RADIUS" ], _objectSpread(_objectSpread(_objectSpread({}, radiusProps()), borderProps("border-")), {}, {
                    "border-fill": {
                        default: 0,
                        color: !0
                    }
                }), function(props, w, h, u) {
                    var values = props, radius = factorRadius(values.radius, w, h), g = packBorder(u, w, h, radius, values, "border-");
                    growRow(u, g), !1 === g.hasBorder && u.alphaUnused(), rgbaRow(u, 5, values["border-fill"]), 
                    vec4Row(u, 6, radius), vec4Row(u, 7, g.outerRadius), vec4Row(u, 8, g.innerRadius);
                }), packShadow = function(u, w, h, shadow, color) {
                    var blur = shadow[2], spread = shadow[3], halfW = .5 * w, halfH = .5 * h;
                    rgbaRow(u, 0, color), vec4Row(u, 1, shadow), u.row(2, halfW, halfH, halfW + spread, halfH + spread);
                    var fade = rampScale(-blur, blur + .001);
                    u.row(3, fade, blur * fade, 0, 0);
                    var reach = spread + blur, sx = shadow[0], sy = shadow[1];
                    255 & color ? u.row(4, Math.max(0, reach - sx), Math.max(0, reach - sy), Math.max(0, reach + sx), Math.max(0, reach + sy)) : (u.row(4, 0, 0, 0, 0), 
                    u.alphaUnused());
                }, RoundedWithShadow = boxType(19, "#define SHADOW_P v_shadowBox\n#define SHADOW_S U_NODE.zw\n#define SHADOW_R U_SHADOW_RADIUS\n", (SHADOW_A_ROWS = [ "U_SHADOW_COLOR", "U_SHADOW", "U_NODE", "U_SHADOW_RAMP", "U_GROW" ]).concat([ "U_RADIUS", "U_SHADOW_RADIUS" ]), _objectSpread(_objectSpread({}, radiusProps()), shadowProps("shadow-")), function(props, w, h, u) {
                    var values = props, shadow = values["shadow-projection"], radius = factorRadius(values.radius, w, h);
                    packShadow(u, w, h, shadow, values["shadow-color"]), vec4Row(u, 5, radius);
                    var spread = shadow[3];
                    u.row(6, Math.max(0, radius[0] + spread), Math.max(0, radius[1] + spread), Math.max(0, radius[2] + spread), Math.max(0, radius[3] + spread));
                }), boxType(17, "#define SHADOW_P v_shadowBox\n#define SHADOW_S U_NODE.zw\n#define SHADOW_R max(0.0,U_SHADOW.w)\n", SHADOW_A_ROWS, shadowProps(""), function(props, w, h, u) {
                    var values = props;
                    packShadow(u, w, h, values.projection, values.color);
                }), RoundedWithBorderAndShadow = boxType(55, "#define SHADOW_P v_boxUv+U_SHADOW_BOX.xy\n#define SHADOW_S U_SHADOW_BOX.zw\n#define SHADOW_R U_SHADOW_RADIUS\n", [ "U_BORDER_COLOR", "U_NODE", "U_OUTER_BOX", "U_INNER_BOX", "U_GROW", "U_SHADOW_COLOR", "U_SHADOW_RAMP", "U_RADIUS", "U_OUTER_RADIUS", "U_INNER_RADIUS", "U_SHADOW_BOX", "U_SHADOW_RADIUS" ], _objectSpread(_objectSpread(_objectSpread({}, radiusProps()), borderProps("border-")), shadowProps("shadow-")), function(props, w, h, u) {
                    var values = props, ew = 1 / u.pixelRatio, radius = factorRadius(values.radius, w, h), g = packBorder(u, w, h, radius, values, "border-"), shadow = values["shadow-projection"], color = values["shadow-color"];
                    rgbaRow(u, 5, color), vec4Row(u, 7, radius), vec4Row(u, 8, g.outerRadius), vec4Row(u, 9, g.innerRadius);
                    var outer = g.shadowOnOuter, blur = shadow[2], spread = shadow[3], shadowRadius = !0 === outer ? g.outerRadius : radius;
                    u.row(10, (!0 === outer ? g.outerUvX : 0) - shadow[0], (!0 === outer ? g.outerUvY : 0) - shadow[1], (!0 === outer ? g.outerHalfW : .5 * w) + spread, (!0 === outer ? g.outerHalfH : .5 * h) + spread), 
                    u.row(11, shadowRadius[0] + blur, shadowRadius[1] + blur, shadowRadius[2] + blur, shadowRadius[3] + blur);
                    var fade = rampScale(-spread, spread + blur);
                    u.row(6, fade, spread * fade, 0, 0);
                    var borderL = growWithAa(g.growL, ew), borderT = growWithAa(g.growT, ew), borderR = growWithAa(g.growR, ew), borderB = growWithAa(g.growB, ew);
                    if (!(255 & color)) return u.row(4, borderL, borderT, borderR, borderB), void (!1 === g.hasBorder && u.alphaUnused());
                    var halfW = .5 * w, halfH = .5 * h, reach = 2 * spread + blur, sx = shadow[0], sy = shadow[1], baseL = !0 === outer ? g.outerHalfW + g.outerUvX - halfW : 0, baseT = !0 === outer ? g.outerHalfH + g.outerUvY - halfH : 0, baseR = !0 === outer ? g.outerHalfW - g.outerUvX - halfW : 0, baseB = !0 === outer ? g.outerHalfH - g.outerUvY - halfH : 0;
                    u.row(4, Math.max(0, borderL, baseL + reach - sx), Math.max(0, borderT, baseT + reach - sy), Math.max(0, borderR, baseR + reach + sx), Math.max(0, borderB, baseB + reach + sy));
                }), gradientRows = function(n) {
                    return n + (n >> 1);
                }, paramsUniform = function(rows) {
                    return "uniform vec4 u_params[".concat(rows, "];");
                }, gradientGlsl = function(n, first, x) {
                    for (var glsl = "vec4 colorOut=u_params[".concat(first, "];"), i = 1; i < n; i++) {
                        var ramp = "u_params[".concat(first + n + (i - 1 >> 1), "]"), color = "u_params[".concat(first + i, "]"), xy = 1 & ~i ? "z" : "x", yw = 1 & ~i ? "w" : "y";
                        glsl += "float t".concat(i, "=clamp((").concat(x, "-").concat(ramp, ".").concat(xy, ")*").concat(ramp, ".").concat(yw, ",0.0,1.0);colorOut=mix(colorOut,").concat(color, ",t").concat(i, "*t").concat(i, "*(3.0-2.0*t").concat(i, "));");
                    }
                    return glsl;
                }, stopAt = function(stops, n, i) {
                    return stops.length === n ? stops[i] : i * (1 / (n - 1));
                }, packGradient = function(u, first, colors, stops) {
                    for (var n = colors.length, i = 0; i < n; i++) rgbaRow(u, first + i, colors[i]);
                    for (var _i = 1; _i < n; _i += 2) {
                        var e0 = stopAt(stops, n, _i - 1), s0 = rampScale(e0, stopAt(stops, n, _i)), e1 = 0, s1 = 0;
                        _i + 1 < n && (e1 = stopAt(stops, n, _i), s1 = rampScale(e1, stopAt(stops, n, _i + 1))), 
                        u.row(first + n + (_i - 1 >> 1), e0, s0, e1, s1);
                    }
                }, stopsProp = function(def) {
                    return {
                        default: def,
                        resolve: function(value, props) {
                            var len = props.colors.length;
                            if (void 0 !== value && value.length === len) return value.slice();
                            var stops = [];
                            if (1 === len) return stops.push(0), stops;
                            for (var i = 0; i < len; i++) stops.push(i * (1 / (len - 1)));
                            return stops;
                        }
                    };
                }, LinearGradient = {
                    props: {
                        colors: (colorsProp = function(def) {
                            return {
                                default: def,
                                resolve: function(value) {
                                    return void 0 !== value && value.length > 0 ? value.slice() : def.slice();
                                }
                            };
                        })([ 255, 4294967295 ]),
                        stops: stopsProp([ 0, 1 ]),
                        angle: 0
                    },
                    variant: function(props) {
                        return String(props.colors.length);
                    },
                    variantProps: [ "colors" ],
                    vertex: function(ctx, props) {
                        return defaultVertex(ctx.viewport, paramsUniform(1 + gradientRows(props.colors.length)) + "varying float v_dist;", "v_dist=dot(a_textureCoords,u_params[0].xy)+u_params[0].z;");
                    },
                    fragment: function(_ctx, props) {
                        var n = props.colors.length;
                        return PRECISION + "uniform float u_alpha;uniform sampler2D u_texture;" + paramsUniform(1 + gradientRows(n)) + "varying vec4 v_color;varying vec2 v_textureCoords;varying float v_dist;\nvoid main(){vec4 color=texture2D(u_texture,v_textureCoords)*v_color;float dist=clamp(v_dist,0.0,1.0);" + gradientGlsl(n, 1, "dist") + "gl_FragColor=mix(color,colorOut*u_alpha,clamp(colorOut.a,0.0,1.0));}";
                    },
                    pack: function(props, w, h, u) {
                        var angle = props.angle - Math.PI / 180 * 90, c = Math.cos(angle), s = Math.sin(angle), lineDist = Math.abs(w * c) + Math.abs(h * s), gx = -lineDist * c, gy = -lineDist * s, gg = gx * gx + gy * gy, invGG = gg > 0 ? 1 / gg : 0, fx = .5 * lineDist * c + .5 * w, fy = .5 * lineDist * s + .5 * h;
                        u.row(0, w * gx * invGG, h * gy * invGG, -(fx * gx + fy * gy) * invGG, 0), packGradient(u, 1, props.colors, props.stops);
                    }
                }, RadialGradient = {
                    props: {
                        colors: colorsProp([ 255, 4294967295 ]),
                        stops: stopsProp([ 0, 1 ]),
                        w: 50,
                        h: 50,
                        pivot: {
                            default: [ .5, .5 ],
                            resolve: function(value) {
                                return void 0 === value ? [ .5, .5 ] : [ value[0], value[1] ];
                            }
                        }
                    },
                    variant: function(props) {
                        return String(props.colors.length);
                    },
                    variantProps: [ "colors" ],
                    vertex: function(ctx, props) {
                        return defaultVertex(ctx.viewport, paramsUniform(2 + gradientRows(props.colors.length)) + "varying vec2 v_gradient;", "v_gradient=(a_nodeCoords*u_params[0].xy-u_params[0].zw)/u_params[1].xy;");
                    },
                    fragment: function(_ctx, props) {
                        var n = props.colors.length;
                        return PRECISION + "uniform float u_alpha;uniform sampler2D u_texture;" + paramsUniform(2 + gradientRows(n)) + "varying vec4 v_color;varying vec2 v_textureCoords;varying vec2 v_gradient;\nvoid main(){vec4 color=texture2D(u_texture,v_textureCoords)*v_color;float dist=clamp(length(v_gradient),0.0,1.0);" + gradientGlsl(n, 2, "dist") + "gl_FragColor=mix(color,colorOut*u_alpha,clamp(colorOut.a,0.0,1.0));}";
                    },
                    pack: function(props, w, h, u) {
                        u.row(0, w, h, props.pivot[0] * w, props.pivot[1] * h), u.row(1, props.w, props.h, 0, 0), 
                        packGradient(u, 2, props.colors, props.stops);
                    }
                }, HolePunch = {
                    props: {
                        x: 0,
                        y: 0,
                        w: 50,
                        h: 50,
                        radius: {
                            default: [ 0, 0, 0, 0 ],
                            resolve: function(value) {
                                return void 0 !== value ? toVec4(value) : [ 0, 0, 0, 0 ];
                            }
                        }
                    },
                    vertex: function(ctx) {
                        return defaultVertex(ctx.viewport, "uniform vec4 u_params[3];varying vec2 v_hole;", "v_hole=(a_textureCoords*u_params[0].xy-u_params[0].zw)-u_params[1].xy;");
                    },
                    fragment: function(ctx) {
                        return PRECISION + edgeWidthDefine(ctx.pixelRatio) + "uniform sampler2D u_texture;uniform vec4 u_params[3];varying vec4 v_color;varying vec2 v_textureCoords;varying vec2 v_hole;\nvoid main(){vec4 color=texture2D(u_texture,v_textureCoords)*v_color;vec2 p=v_hole;vec2 stepVal=step(vec2(0.0),p);vec4 r4=u_params[2];float r=mix(mix(r4.x,r4.y,stepVal.x),mix(r4.w,r4.z,stepVal.x),stepVal.y);p=abs(p)-u_params[1].xy+r;float dist=min(max(p.x,p.y),0.0)+length(max(p,0.0))-r+2.0;float roundedAlpha=clamp(1.0-dist*INV_EDGE_WIDTH,0.0,1.0);gl_FragColor=mix(color,vec4(0.0),roundedAlpha);}";
                    },
                    pack: function(props, w, h, u) {
                        u.row(0, w, h, props.x, props.y), u.row(1, .5 * props.w, .5 * props.h, 0, 0);
                        var r = factorRadius(props.radius, props.w, props.h);
                        u.row(2, r[0], r[1], r[2], r[3]);
                    }
                }, timed = function(props) {
                    return props.duration >= 1e-4;
                }, RadialProgress = {
                    props: {
                        width: 8,
                        radius: 0,
                        progress: (clampedProp = function(def, max) {
                            return {
                                default: def,
                                resolve: function(value) {
                                    if (void 0 === value) return def;
                                    return value < 0 ? 0 : value > max ? max : value;
                                }
                            };
                        })(1, 1),
                        startAngle: -Math.PI / 2,
                        direction: 1,
                        colors: colorsProp([ 4294967295 ]),
                        stops: stopsProp([ 0 ]),
                        trackColor: {
                            default: 0,
                            color: !0
                        },
                        cap: 1,
                        duration: clampedProp(0, 1 / 0),
                        countdown: 1
                    },
                    variant: function(props) {
                        return "".concat(props.colors.length, "|").concat(props.cap, "|").concat(0 !== props.trackColor ? 1 : 0, "|").concat(!0 === timed(props) ? 1 : 0);
                    },
                    variantProps: [ "colors", "cap", "trackColor", "duration" ],
                    time: function(renderer, props) {
                        var duration = props.duration;
                        if (duration < 1e-4) return null;
                        var position = renderer.elapsedTime % duration / duration;
                        return props.countdown >= .5 ? 1 - position : position;
                    },
                    vertex: function(ctx, props) {
                        return defaultVertex(ctx.viewport, paramsUniform(5 + gradientRows(props.colors.length)) + "\n#define U_CENTRE u_params[0]\n#define U_ARC u_params[1]\n#define U_EDGES u_params[2]\n#define U_ANIM u_params[3]\n#define U_TRACK u_params[4]\nvarying vec2 v_p;", "v_p=(a_nodeCoords*2.0-1.0)*U_CENTRE.xy;");
                    },
                    fragment: function(ctx, props) {
                        var n = props.colors.length, animated = timed(props);
                        return PRECISION + "#define CAP_ROUND ".concat(props.cap, "\n#define HAS_TRACK ").concat(0 !== props.trackColor ? 1 : 0, "\n#define TWO_PI 6.28318530717958647692\n") + edgeWidthDefine(ctx.pixelRatio) + (!0 === animated ? "uniform float u_alpha;uniform float u_time;uniform sampler2D u_texture;" : "uniform float u_alpha;uniform sampler2D u_texture;") + paramsUniform(5 + gradientRows(n)) + "\n#define U_CENTRE u_params[0]\n#define U_ARC u_params[1]\n#define U_EDGES u_params[2]\n#define U_ANIM u_params[3]\n#define U_TRACK u_params[4]\nvarying vec4 v_color;varying vec2 v_textureCoords;varying vec2 v_p;\nfloat discCoverage(vec2 p,vec2 c){return clamp((U_ARC.y-length(p-c))*INV_EDGE_WIDTH+0.5,0.0,1.0);}\nvoid main(){vec4 base=texture2D(u_texture,v_textureCoords)*v_color;" + (!0 === animated ? "float progress=u_time;float capGate=step(0.0001,progress)*step(0.0001,1.0-progress);float hasProgress=step(0.0001,progress);float gradScale=hasProgress/mix(1.0,progress,hasProgress);" : "float progress=U_ANIM.x;float capGate=U_ANIM.y;float gradScale=U_ANIM.z;") + "vec2 p=v_p;float dist=length(p);vec2 ring=clamp(vec2(dist-U_EDGES.x,U_EDGES.y-dist)*INV_EDGE_WIDTH+0.5,0.0,1.0);float ringCoverage=ring.x*ring.y;float ang=atan(p.y,p.x);float t=mod((ang-U_ARC.z)*U_ARC.w,TWO_PI)/TWO_PI;float arcCoverage=max(step(1.0,progress),step(t,progress));float fillCoverage=ringCoverage*arcCoverage;\n#if CAP_ROUND\n" + (!0 === animated ? "float a1=U_ARC.z+U_ARC.w*progress*TWO_PI;vec2 cap1=vec2(cos(a1),sin(a1))*U_ARC.x;" : "vec2 cap1=U_EDGES.zw;") + "float capMask=max(discCoverage(p,U_CENTRE.zw),discCoverage(p,cap1));fillCoverage=max(fillCoverage,capMask*capGate);\n#endif\nfloat gradT=clamp(t*gradScale,0.0,1.0);" + gradientGlsl(n, 5, "gradT") + "vec4 fillPM=vec4(colorOut.rgb*colorOut.a,colorOut.a);vec4 layer=vec4(0.0);\n#if HAS_TRACK\nvec4 trackPM=vec4(U_TRACK.rgb*U_TRACK.a,U_TRACK.a);float trackCoverage=ringCoverage*(1.0-fillCoverage);layer=trackPM*trackCoverage+fillPM*fillCoverage;\n#else\nlayer=fillPM*fillCoverage;\n#endif\nlayer*=u_alpha;float la=clamp(layer.a,0.0,1.0);vec3 blended=base.rgb*(1.0-la)+layer.rgb;float outA=base.a+la*(1.0-base.a);gl_FragColor=vec4(blended,outA);}";
                    },
                    pack: function(props, w, h, u) {
                        var autoRadius = .5 * Math.min(w, h) - .5 * props.width, radius = props.radius > 0 ? props.radius : autoRadius, halfW = .5 * props.width, startAngle = props.startAngle, progress = props.progress, end = startAngle + props.direction * progress * Math.PI * 2, hasProgress = progress >= 1e-4 ? 1 : 0, capGate = 1 === hasProgress && 1 - progress >= 1e-4 ? 1 : 0;
                        u.row(0, .5 * w, .5 * h, Math.cos(startAngle) * radius, Math.sin(startAngle) * radius), 
                        u.row(1, radius, halfW, startAngle, props.direction), u.row(2, radius - halfW, radius + halfW, Math.cos(end) * radius, Math.sin(end) * radius), 
                        u.row(3, progress, capGate, 1 === hasProgress ? 1 / progress : 0, 0), rgbaRow(u, 4, props.trackColor), 
                        packGradient(u, 5, props.colors, props.stops);
                    }
                }, ARIA_PARENT_ID = "aria-parent", ariaLabelPhrases = [], debounce = function(callback, wait) {
                    var timeoutId;
                    var clear = function() {
                        return clearTimeout(timeoutId);
                    };
                    getOwner() && onCleanup(clear);
                    return Object.assign(function() {
                        for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) args[_key2] = arguments[_key2];
                        void 0 !== timeoutId && clear(), timeoutId = setTimeout(function() {
                            return callback.apply(void 0, args);
                        }, wait);
                    }, {
                        clear: clear
                    });
                }, throttle = function(callback, wait) {
                    var timeoutId, lastArgs, isThrottled = !1, clear = function() {
                        clearTimeout(timeoutId), isThrottled = !1;
                    };
                    return getOwner() && onCleanup(clear), Object.assign(function() {
                        for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) args[_key3] = arguments[_key3];
                        lastArgs = args, isThrottled || (isThrottled = !0, timeoutId = setTimeout(function() {
                            callback.apply(void 0, _toConsumableArray(lastArgs)), isThrottled = !1;
                        }, wait));
                    }, {
                        clear: clear
                    });
                }, prevFocusPath = [], voiceOutDisabled = !1, _export("a", Announcer = {
                    debug: !1,
                    enabled: !0,
                    lang: "en-US",
                    aria: !1,
                    cancel: function() {
                        null == currentlySpeaking || currentlySpeaking.cancel();
                    },
                    clearPrevFocus: function() {
                        var depth = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                        prevFocusPath = prevFocusPath.slice(0, depth), resetFocusPathTimer();
                    },
                    speak: function(text) {
                        var _ref15 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, _ref15$append = _ref15.append, append = void 0 !== _ref15$append && _ref15$append, _ref15$notification = _ref15.notification, notification = void 0 !== _ref15$notification && _ref15$notification;
                        return Announcer.onFocusChange && Announcer.enabled && (append && currentlySpeaking && currentlySpeaking.active ? currentlySpeaking.append(text) : (Announcer.cancel(), 
                        function(toSpeak, aria, lang, voice) {
                            if (!voiceOutDisabled) currentlySpeaking = speech_default(toSpeak, aria, lang, voice);
                        }(text, Announcer.aria, Announcer.lang, Announcer.voice)), notification && (voiceOutDisabled = !0, 
                        null == currentlySpeaking || currentlySpeaking.series.finally(function() {
                            voiceOutDisabled = !1, Announcer.refresh();
                        }).catch(console.error))), currentlySpeaking;
                    },
                    refresh: function() {
                        var depth = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                        Announcer.clearPrevFocus(depth), Announcer.onFocusChange && Announcer.onFocusChange(untrack(function() {
                            return focusPath();
                        }));
                    },
                    setupTimers: function() {
                        var _ref16 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, _ref16$focusDebounce = _ref16.focusDebounce, focusDebounce = void 0 === _ref16$focusDebounce ? 400 : _ref16$focusDebounce, _ref16$focusChangeTim = _ref16.focusChangeTimeout, focusChangeTimeout = void 0 === _ref16$focusChangeTim ? 3e5 : _ref16$focusChangeTim;
                        Announcer.onFocusChange = debounceWithFlush(onFocusChangeCore, focusDebounce), resetFocusPathTimer = debounceWithFlush(function() {
                            prevFocusPath = [];
                        }, focusChangeTimeout);
                    }
                }), doOnce = !1, useAnnouncer = function(options) {
                    return doOnce || (doOnce = !0, Announcer.setupTimers(options), createEffect(on(focusPath, Announcer.onFocusChange, {
                        defer: !0
                    }))), Announcer;
                }, tryOnCleanup = onCleanup, createCallbackStack = function() {
                    var stack = [], clear = function() {
                        return stack = [];
                    };
                    return {
                        push: function() {
                            var _stack;
                            return (_stack = stack).push.apply(_stack, arguments);
                        },
                        execute: function(arg0, arg1, arg2, arg3) {
                            stack.forEach(function(cb) {
                                return cb(arg0, arg1, arg2, arg3);
                            }), clear();
                        },
                        clear: clear
                    };
                }, PASSIVE = {
                    passive: !0
                }, DEFAULT_MOUSE_POSITION = {
                    x: 0,
                    y: 0,
                    isInside: !1,
                    sourceType: null
                }, useMousePosition = createHydratableSingletonRoot(createMousePosition.bind(void 0, void 0, void 0)), 
                _createSignal20 = _slicedToArray(createSignal(!1), 2), _createSignal20[0], _createSignal20[1], 
                handleScroll = throttle(function(e) {
                    var deltaY = e.deltaY;
                    deltaY < 0 ? document.body.dispatchEvent(createKeyboardEvent("ArrowUp", 38)) : deltaY > 0 && document.body.dispatchEvent(createKeyboardEvent("ArrowDown", 40)), 
                    clearTimeout(scrollTimeout), scrollTimeout = setTimeout(function() {
                        document.body.dispatchEvent(createKeyboardEvent("ArrowUp", 38, "keyup")), document.body.dispatchEvent(createKeyboardEvent("ArrowDown", 40, "keyup"));
                    }, 250);
                }, 250), NATIVE_ESM_CHUNK = /dynamically imported module:?\s*(https?:\/\/\S+?\.js)/i, 
                cacheBustableUrl = function(error) {
                    var match = NATIVE_ESM_CHUNK.exec(error instanceof Error ? error.message : String(error));
                    return match ? match[1] : void 0;
                }, RETRY_DELAYS = [ 500, 2e3, 5e3 ], cacheBust = function(url) {
                    var retry = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1, cleanUrl = url.replace(/([?&])chunkRetry=\d+(&|$)/, "$1").replace(/[?&]$/, "");
                    return cleanUrl + (-1 === cleanUrl.indexOf("?") ? "?" : "&") + "chunkRetry=" + retry;
                }, wait = function(ms) {
                    return new Promise(function(resolve) {
                        return setTimeout(resolve, ms);
                    });
                }, getNativeImport = function() {
                    if (void 0 === nativeImport) try {
                        nativeImport = new Function("u", "return import(u)");
                    } catch (_unused) {
                        nativeImport = null;
                    }
                    return nativeImport;
                }, columnScroll = withScrolling(!1), rowStyles = {
                    display: "flex",
                    flexWrap: "wrap",
                    transition: {
                        y: !0
                    }
                }, saveCurrentDepth(), hasSchemeRegex = /^(?:[a-z0-9]+:)?\/\//i, trimPathRegex = /^\/+|(\/)\/+$/g, 
                mockBase = "http://sr", MAX_REDIRECTS = 100, RouterContextObj = createContext(), 
                RouteContextObj = createContext(), useRouter = function() {
                    return function(value, message) {
                        if (null == value) throw new Error(message);
                        return value;
                    }(useContext(RouterContextObj), "<A> and 'use' router primitives can be only used inside a Route.");
                }, _export("r", useNavigate = function() {
                    return useRouter().navigatorFactory();
                }), useLocation = function() {
                    return useRouter().location;
                }, usePreloadRoute = function() {
                    var pre = useRouter().preloadRoute;
                    return function(url) {
                        var options = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        return pre(url instanceof URL ? url : new URL(url, mockBase), options.preloadData);
                    };
                }, useMatch = function(path, matchFilters) {
                    var location = useLocation(), matchers = createMemo(function() {
                        return expandOptionals(path()).map(function(path) {
                            return createMatcher(path, void 0, matchFilters);
                        });
                    });
                    return createMemo(function() {
                        var _step0, _iterator0 = _createForOfIteratorHelper(matchers());
                        try {
                            for (_iterator0.s(); !(_step0 = _iterator0.n()).done; ) {
                                var match = (0, _step0.value)(location.pathname);
                                if (match) return match;
                            }
                        } catch (err) {
                            _iterator0.e(err);
                        } finally {
                            _iterator0.f();
                        }
                    });
                }, _export("i", function() {
                    return useRouter().params;
                }), createRouterComponent = function(router) {
                    return function(props) {
                        var context, base = props.base, routeDefs = children(function() {
                            return props.children;
                        }), branches = createMemo(function() {
                            return createBranches(routeDefs(), props.base || "");
                        }), routerState = createRouterContext(router, branches, function() {
                            return context;
                        }, {
                            base: base,
                            singleFlight: props.singleFlight,
                            transformUrl: props.transformUrl
                        });
                        return router.create && router.create(routerState), createComponent(RouterContextObj.Provider, {
                            value: routerState,
                            get children() {
                                return createComponent(Root, {
                                    routerState: routerState,
                                    get root() {
                                        return props.root;
                                    },
                                    get preload() {
                                        return props.rootPreload || props.rootLoad;
                                    },
                                    get children() {
                                        return [ memo(function() {
                                            return (context = getOwner()) && null;
                                        }), createComponent(Routes, {
                                            routerState: routerState,
                                            get branches() {
                                                return branches();
                                            }
                                        }) ];
                                    }
                                });
                            }
                        });
                    };
                }, createOutlet = function(child) {
                    return function() {
                        return createComponent(Show, {
                            get when() {
                                return child();
                            },
                            keyed: !0,
                            children: function(child) {
                                return createComponent(RouteContextObj.Provider, {
                                    value: child,
                                    get children() {
                                        return child.outlet();
                                    }
                                });
                            }
                        });
                    };
                }, Route = function(props) {
                    var childRoutes = children(function() {
                        return props.children;
                    });
                    return mergeProps(props, {
                        get children() {
                            return childRoutes();
                        }
                    });
                }, SUPPORTS_PROXY = "function" == typeof Proxy, collectDynamicParams = function(branches) {
                    var dynamicParams = [];
                    return branches.forEach(function(branch) {
                        branch.routes.forEach(function(route) {
                            if (route.pattern) {
                                var matches = route.pattern.match(/:(\w+)/g);
                                matches && matches.forEach(function(param) {
                                    var p = param.slice(1);
                                    dynamicParams.includes(p) || dynamicParams.push(p);
                                });
                            }
                        });
                    }), dynamicParams;
                }, keepAliveElements = new Map, keepAliveRouteElements = new Map, _storeKeepAlive = function(map, element) {
                    var existing = map.get(element.id);
                    return existing ? (Object.assign(existing, element), existing) : (map.set(element.id, element), 
                    element);
                }, storeKeepAliveRoute = function(element) {
                    return _storeKeepAlive(keepAliveRouteElements, element);
                }, createKeepAliveComponent = function(map, storeFn) {
                    return function(props) {
                        var _props$shouldDispose, _existing$dispose, _existing$owner, existing = map.get(props.id), existingChild = null == existing ? void 0 : existing.children;
                        existing && ((null == (_props$shouldDispose = props.shouldDispose) ? void 0 : _props$shouldDispose.call(props, props.id)) || (null == existingChild ? void 0 : existingChild.destroyed)) && (null == existingChild || existingChild.destroy(), 
                        null == (_existing$dispose = existing.dispose) || _existing$dispose.call(existing), 
                        map.delete(props.id), existing = void 0);
                        return existing && existing.dispose ? (existing.children || (existing.children = runWithOwner(null !== (_existing$owner = existing.owner) && void 0 !== _existing$owner ? _existing$owner : null, function() {
                            return wrapChildren(props, existing.setIsAlive);
                        })), existing.children) : createRoot(function(dispose) {
                            var _ref18 = _slicedToArray((null == existing ? void 0 : existing.isAlive) && (null == existing ? void 0 : existing.setIsAlive) ? [ existing.isAlive, existing.setIsAlive ] : createSignal(!0), 2), isAlive = _ref18[0], setIsAlive = _ref18[1], children = wrapChildren(props, setIsAlive);
                            return storeFn({
                                id: props.id,
                                owner: getOwner(),
                                children: children,
                                dispose: dispose,
                                isAlive: isAlive,
                                setIsAlive: setIsAlive
                            }), children;
                        });
                    };
                }, createKeepAliveComponent(keepAliveElements, function(element) {
                    return _storeKeepAlive(keepAliveElements, element);
                }), KeepAliveRouteInternal = createKeepAliveComponent(keepAliveRouteElements, storeKeepAliveRoute), 
                keepAliveRouteCache = new Map, KeepAliveRoute = function(props) {
                    var key = props.id || props.path, cached = keepAliveRouteCache.get(key);
                    if (cached) return cached;
                    var getExisting = function() {
                        var existing = keepAliveRouteElements.get(key);
                        if (!existing) {
                            var _createSignal22 = _slicedToArray(createSignal(!0), 2), isAlive = _createSignal22[0], setIsAlive = _createSignal22[1];
                            existing = {
                                id: key,
                                isAlive: isAlive,
                                setIsAlive: setIsAlive
                            }, keepAliveRouteElements.set(key, existing);
                        }
                        return existing;
                    }, onRemove = chainFunctions(props.onRemove, function(elm) {
                        var existing = keepAliveRouteElements.get(key);
                        existing && (existing.savedFocusedElement = activeElement()), elm.alpha = 0;
                    }), onRender = chainFunctions(props.onRender, function(elm) {
                        var existing = keepAliveRouteElements.get(key), savedFocusedElement = null == existing ? void 0 : existing.savedFocusedElement;
                        existing && (existing.savedFocusedElement = void 0);
                        for (var isChild = !1, current = savedFocusedElement; current; ) {
                            if (current === elm) {
                                isChild = !0;
                                break;
                            }
                            current = current.parent;
                        }
                        isChild && savedFocusedElement ? savedFocusedElement.setFocus() : elm.setFocus(), 
                        elm.alpha = 1;
                    }), preload = props.preload ? function(preloadProps) {
                        var _props$shouldDispose2, _existing$dispose2, existing = getExisting(), existingChild = existing.children;
                        existingChild && ((null == (_props$shouldDispose2 = props.shouldDispose) ? void 0 : _props$shouldDispose2.call(props, key)) || existingChild.destroyed) && (existingChild.destroy(), 
                        null == (_existing$dispose2 = existing.dispose) || _existing$dispose2.call(existing), 
                        keepAliveRouteElements.delete(key), existing = getExisting());
                        return existing.dispose ? existing.children ? (existing.children.setFocus(), props.preload(_objectSpread(_objectSpread({}, preloadProps), {}, {
                            isAlive: existing.isAlive
                        }))) : props.preload(_objectSpread(_objectSpread({}, preloadProps), {}, {
                            isAlive: existing.isAlive
                        })) : createRoot(function(dispose) {
                            return existing.owner = getOwner(), existing.dispose = dispose, props.preload(_objectSpread(_objectSpread({}, preloadProps), {}, {
                                isAlive: existing.isAlive
                            }));
                        });
                    } : void 0, routeElement = createComponent(Route, mergeProps$1(props, {
                        preload: preload,
                        component: function(childProps) {
                            var existing = getExisting(), innerProps = Object.create(childProps, {
                                isAlive: {
                                    value: existing.isAlive,
                                    enumerable: !0,
                                    configurable: !0
                                }
                            });
                            return createComponent(KeepAliveRouteInternal, {
                                id: key,
                                onRemove: onRemove,
                                onRender: onRender,
                                get transition() {
                                    return props.transition;
                                },
                                get children() {
                                    return props.component(innerProps);
                                }
                            });
                        }
                    }));
                    return keepAliveRouteCache.set(key, routeElement), routeElement;
                }, App = function(props) {
                    return useFocusManager({
                        Announcer: [ "a" ],
                        Menu: [ "m" ],
                        Escape: [ "Escape", 27 ],
                        Back: [ "Back", "GoBack", "Backspace", "b", 8, 461, 10009, "Escape", 27 ],
                        Left: [ "ArrowLeft", "Left", 37 ],
                        Right: [ "ArrowRight", "Right", 39 ],
                        Up: [ "ArrowUp", "Up", 38 ],
                        Down: [ "ArrowDown", "Down", 40 ],
                        Enter: [ "Enter", 13 ],
                        Play: [ "Play", 415 ],
                        Pause: [ "Pause", 19 ],
                        PlayPause: [ "PlayPause", 10252 ],
                        FastForward: [ "FastForward", 417 ],
                        FastForward10: [ "FastForward10", 10233 ],
                        Rewind: [ "Rewind", 412 ],
                        Rewind10: [ "Rewind10", 10232 ],
                        Stop: [ "Stop", 413 ]
                    }), useMouse(void 0, 100, {
                        customStates: {
                            hoverState: "$hover",
                            pressedState: "$pressed",
                            pressedStateDuration: 150
                        }
                    }), props.children;
                }, Browse = function(props) {
                    usePreloadRoute();
                    var vgRef, _createSignal24 = _slicedToArray(createSignal({}), 2), heroContent = _createSignal24[0], setHeroContent = _createSignal24[1], navigate = useNavigate(), firstRun = !0;
                    onCleanup(function() {
                        console.log("cleanup");
                    });
                    var provider = createMemo(function() {
                        return fetcher = props.data(), _createSignal14 = _slicedToArray(createSignal([]), 2), 
                        pages = _createSignal14[0], setPages = _createSignal14[1], _createSignal16 = _slicedToArray(createSignal(1), 2), 
                        page = _createSignal16[0], setPage = _createSignal16[1], _createSignal18 = _slicedToArray(createSignal(!1), 2), 
                        end = _createSignal18[0], setEnd = _createSignal18[1], contents = _slicedToArray(createResource(page, fetcher), 1)[0], 
                        createComputed(function() {
                            var content = contents();
                            content && batch(function() {
                                0 === content.length && setEnd(!0), setPages(function(p) {
                                    return [].concat(_toConsumableArray(p), _toConsumableArray(content));
                                });
                            });
                        }), {
                            pages: pages,
                            page: page,
                            setPage: setPage,
                            setPages: setPages,
                            end: end,
                            setEnd: setEnd
                        };
                        var fetcher, _createSignal14, pages, setPages, _createSignal16, page, setPage, _createSignal18, end, setEnd, contents;
                    }), delayedBackgrounds = debounce$1(function(img) {
                        return setGlobalBackground(img);
                    }, 800), delayedHero = debounce$1(function(content) {
                        return setHeroContent(content || {});
                    }, 600);
                    function updateContentBlock(_index, _col, elm) {
                        if (elm) {
                            var item = elm.item || {};
                            if (firstRun) return item.backdrop && setGlobalBackground(item.backdrop), item.heroContent && setHeroContent(item.heroContent), 
                            void (firstRun = !1);
                            item.href, item.backdrop && delayedBackgrounds(item.backdrop), item.heroContent && delayedHero(item.heroContent);
                        }
                    }
                    function onEndReached() {
                        provider().setPage(function(p) {
                            return p + 1;
                        });
                    }
                    function onEnter() {
                        var _entity$item;
                        this.display = "flex";
                        var entity = this.children.find(function(c) {
                            return c.states.has("focus");
                        });
                        return assertTruthy(entity && (null == (_entity$item = entity.item) ? void 0 : _entity$item.href)), 
                        navigate(entity.item.href), !0;
                    }
                    return createComponent(Show, {
                        get when() {
                            return provider().pages().length;
                        },
                        get children() {
                            return [ createComponent(ContentBlock, {
                                y: 360,
                                x: 162,
                                get content() {
                                    return heroContent();
                                },
                                forwardFocus: function() {
                                    return vgRef.setFocus();
                                }
                            }), (_el$ = createElement("view"), setProp(_el$, "clipping", !0), insert(_el$, createComponent(VirtualGrid, {
                                y: 24,
                                x: 160,
                                id: "BrowseGrid",
                                ref: function(r$) {
                                    "function" == typeof vgRef ? vgRef(r$) : vgRef = r$;
                                },
                                scroll: "always",
                                get announce() {
                                    return "All Trending ".concat(props.params.filter);
                                },
                                onEnter: onEnter,
                                columns: 7,
                                gap: 50,
                                rows: 2,
                                buffer: 2,
                                onSelectedChanged: updateContentBlock,
                                onEndReached: onEndReached,
                                onEndReachedThreshold: 22,
                                width: 1620,
                                autofocus: !0,
                                get each() {
                                    return provider().pages();
                                },
                                children: function(item) {
                                    return createComponent(Thumbnail, {
                                        get item() {
                                            return item();
                                        }
                                    });
                                }
                            })), effect(function(_$p) {
                                return setProp(_el$, "style", styles_default.itemsContainer, _$p);
                            }), _el$) ];
                            var _el$;
                        }
                    });
                }, TMDB = function(props) {
                    var contentBlock, solidLogo, _createSignal26 = _slicedToArray(createSignal({}), 2), heroContent = _createSignal26[0], setHeroContent = _createSignal26[1], _createSignal28 = _slicedToArray(createSignal(!1), 2), openPanel = _createSignal28[0], setOpenPanel = _createSignal28[1], _useFocusStack = useFocusStack(), storeFocus = _useFocusStack.storeFocus, restoreFocus = _useFocusStack.restoreFocus, firstRun = !0, delayedBackgrounds = debounce$1(setGlobalBackground, 800), delayedHero = debounce$1(function(content) {
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
                    return createEffect(on(activeElement, function(elm) {
                        if (elm) {
                            var item = elm.item || {};
                            firstRun ? (item.backdrop && setGlobalBackground(item.backdrop), item.heroContent && setHeroContent(item.heroContent), 
                            firstRun = !1) : (item.backdrop && delayedBackgrounds(item.backdrop), item.heroContent && delayedHero(item.heroContent));
                        }
                    }, {
                        defer: !0
                    })), function() {
                        var _el$ = createElement("view"), _el$2 = createElement("view"), _el$3 = createElement("text"), _el$5 = createElement("view"), _el$6 = createElement("view"), _el$7 = createElement("text");
                        insertNode(_el$, _el$2), setProp(_el$, "forwardFocus", 2), setProp(_el$, "autofocus", !0), 
                        insertNode(_el$2, _el$3), insertNode(_el$2, _el$5), insertNode(_el$2, _el$6), insertNode(_el$2, _el$7);
                        return "function" == typeof solidLogo ? use(solidLogo, _el$2) : solidLogo = _el$2, 
                        setProp(_el$2, "width", 300), setProp(_el$2, "height", 150), setProp(_el$2, "x", 162), 
                        setProp(_el$2, "y", 80), setProp(_el$2, "zIndex", 105), insertNode(_el$3, createTextNode("Built With:")), 
                        setProp(_el$3, "x", 80), setProp(_el$3, "fontSize", 28), setProp(_el$3, "color", 4143380121), 
                        setProp(_el$5, "y", 32), setProp(_el$5, "src", "./assets/solidWord.png"), setProp(_el$5, "width", 280), 
                        setProp(_el$5, "height", 52), setProp(_el$6, "x", 0), setProp(_el$6, "y", 110), 
                        setProp(_el$6, "src", "./assets/tmdb.png"), setProp(_el$6, "width", 80), setProp(_el$6, "height", 41), 
                        insertNode(_el$7, createTextNode("This product uses the TMDB API but is not endorsed or certified by TMDB.")), 
                        setProp(_el$7, "x", 90), setProp(_el$7, "y", 110), setProp(_el$7, "contain", "width"), 
                        setProp(_el$7, "width", 160), setProp(_el$7, "fontSize", 12), setProp(_el$7, "color", 4143380121), 
                        insert(_el$, createComponent(ContentBlock, {
                            ref: function(r$) {
                                "function" == typeof contentBlock ? contentBlock(r$) : contentBlock = r$;
                            },
                            y: 300,
                            x: 162,
                            get content() {
                                return heroContent();
                            }
                        }), null), insert(_el$, createComponent(LazyColumn, {
                            y: 500,
                            upCount: 3,
                            get each() {
                                return props.data.rows;
                            },
                            id: "BrowseColumn",
                            onSelectedChanged: onRowChanged,
                            onEnter: function() {
                                return setOpenPanel(!0);
                            },
                            get autofocus() {
                                return props.data.rows[0].items();
                            },
                            gap: 40,
                            throttleInput: 250,
                            width: 1760,
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
                        }), null), insert(_el$, createComponent(AssetPanel, {
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
                        }), null), _el$;
                    }();
                }, Destroy = function(props) {
                    var _el$, _el$2, _createSignal30 = _slicedToArray(createSignal(), 2), heroContent = _createSignal30[0], setHeroContent = _createSignal30[1], _createSignal32 = _slicedToArray(createSignal(0), 2), heroIndex = _createSignal32[0], setHeroIndex = _createSignal32[1];
                    function onDown() {
                        if (heroIndex() >= 19) return !1;
                        setHeroIndex(function(p) {
                            return p + 1;
                        });
                    }
                    function onUp() {
                        return 0 !== heroIndex() && (setHeroIndex(function(p) {
                            return p - 1;
                        }), !0);
                    }
                    function animateOut(node) {
                        return node.animate({
                            y: 200,
                            alpha: 0
                        }, {
                            duration: 500,
                            easing: "ease-in-out"
                        }).start().waitUntilStopped();
                    }
                    function animateIn(node) {
                        return node.alpha = 0, node.y = -100, node.animate({
                            y: 0,
                            alpha: 1
                        }, {
                            duration: 500,
                            easing: "ease-in-out"
                        }).start().waitUntilStopped();
                    }
                    return onMount(function() {
                        return setGlobalBackground(858993663);
                    }), createEffect(on([ props.data.heroRow.items, heroIndex ], function(_ref19) {
                        var _ref20 = _slicedToArray(_ref19, 2), heros = _ref20[0], index = _ref20[1];
                        if (heros && setHeroContent(heros[index]), heros && index < heros.length - 1) {
                            var img = new Image;
                            img.crossOrigin = "anonymous", img.src = heros[index + 1].backdrop;
                        }
                    })), _el$ = createElement("view"), _el$2 = createElement("view"), insertNode(_el$, _el$2), 
                    setProp(_el$, "x", 300), setProp(_el$, "y", 200), setProp(_el$, "onDown", onDown), 
                    setProp(_el$, "onUp", onUp), setProp(_el$2, "src", "assets/up.svg"), setProp(_el$2, "width", 350), 
                    setProp(_el$2, "height", 200), setProp(_el$2, "x", 450), setProp(_el$2, "y", -200), 
                    insert(_el$, createComponent(Show, {
                        get when() {
                            return heroContent();
                        },
                        keyed: !0,
                        get children() {
                            return createComponent(Hero, {
                                id: "Hero",
                                autofocus: !0,
                                onDestroy: animateOut,
                                onCreate: animateIn,
                                get item() {
                                    return heroContent();
                                },
                                get title() {
                                    return heroContent().title;
                                }
                            });
                        }
                    }), null), effect(function(_$p) {
                        return setProp(_el$2, "rotation", Math.PI, _$p);
                    }), _el$;
                }, handleResults = function(response) {
                    return response.then(function(_ref21) {
                        return convertItemsToTiles(_ref21.results.filter(function(r) {
                            return !r.adult;
                        }));
                    }).catch(function(err) {
                        throw console.error("[HANDLE_RESULTS_ERROR] error:", err.message, err.stack), err;
                    });
                }, fetchPopular = function(type) {
                    return handleResults(api_default.get("/".concat(type, "/popular")));
                }, fetchGenreMovies = function(genres) {
                    var genreList = genreListCache || (genreListCache = api_default.get("/genre/movie/list")), targetGenre = Array.isArray(genres) ? genres : [ genres ];
                    return genreList.then(function(_ref22) {
                        var genres = _ref22.genres, targetGenreIds = [];
                        return genres.forEach(function(item) {
                            targetGenre.includes(item.name) && targetGenreIds.push(item.id);
                        }), handleResults(api_default.get("/discover/movie?with_genres=".concat(targetGenreIds.join())));
                    }).catch(function(err) {
                        throw console.error("[FETCH_GENRE_MOVIES_ERROR] genres:", genres, "error:", err.message, err.stack), 
                        err;
                    });
                }, NotFound = function() {
                    return _el$ = createElement("node"), setProp(_el$, "style", {
                        width: 1920,
                        height: 1080,
                        color: 868483072
                    }), _el$;
                    var _el$;
                }, fonts = [ {
                    type: "msdf",
                    fontFamily: "Roboto",
                    atlasDataUrl: "/solid-demo-app/fonts/Roboto-Regular.msdf.json",
                    atlasUrl: "/solid-demo-app/fonts/Roboto-Regular.msdf.png",
                    metrics: {
                        ascender: 1e3,
                        descender: 100,
                        lineGap: 0,
                        unitsPerEm: 1e3
                    }
                }, {
                    type: "msdf",
                    fontFamily: "Roboto700",
                    atlasDataUrl: "/solid-demo-app/fonts/Roboto-Bold.msdf.json",
                    atlasUrl: "/solid-demo-app/fonts/Roboto-Bold.msdf.png",
                    metrics: {
                        ascender: 1e3,
                        descender: 100,
                        lineGap: 0,
                        unitsPerEm: 1e3
                    }
                }, {
                    type: "msdf",
                    fontFamily: "Arial",
                    atlasDataUrl: "/solid-demo-app/fonts/Roboto-Regular.msdf.json",
                    atlasUrl: "/solid-demo-app/fonts/Roboto-Regular.msdf.png"
                }, {
                    type: "msdf",
                    fontFamily: "Raleway",
                    atlasDataUrl: "/solid-demo-app/fonts/Raleway-ExtraBold.msdf.json",
                    atlasUrl: "/solid-demo-app/fonts/Raleway-ExtraBold.msdf.png"
                }, {
                    fontFamily: "Roboto",
                    fontUrl: "/solid-demo-app/fonts/Roboto-Regular.ttf"
                }, {
                    fontFamily: "Roboto700",
                    fontUrl: "/solid-demo-app/fonts/Roboto-Bold.ttf"
                } ], cache = new Map, NavDrawer_styles_default = {
                    Column: {
                        flexDirection: "column",
                        display: "flex",
                        width: 140,
                        height: 600,
                        y: 300,
                        gap: 20,
                        zIndex: 101,
                        transition: {
                            x: {
                                duration: 250,
                                easing: "ease-in-out"
                            }
                        },
                        x: 24,
                        $focus: {
                            width: 500
                        }
                    },
                    Gradient: {
                        zIndex: 99,
                        color: 255,
                        src: "./assets/sidenav.png",
                        alpha: 0,
                        width: 200,
                        height: 1080,
                        $focus: {
                            alpha: 1,
                            width: 1600
                        },
                        transition: {
                            alpha: !0,
                            width: !0
                        }
                    },
                    NavButton: {
                        zIndex: 102,
                        height: 70,
                        width: 100,
                        borderRadius: 0,
                        color: 0,
                        $focus: {
                            color: theme_default.primaryLight,
                            borderRadius: 8
                        },
                        $active: {
                            width: 328
                        }
                    }
                }, basePath = "/solid-demo-app/", icons = [ {
                    name: "experiment",
                    width: 81,
                    height: 100,
                    x: 0,
                    y: 0
                }, {
                    name: "trending",
                    width: 99,
                    height: 56,
                    x: 81,
                    y: 0
                }, {
                    name: "tv",
                    width: 100,
                    height: 68,
                    x: 181,
                    y: 0
                }, {
                    name: "movie",
                    width: 94,
                    height: 100,
                    x: 282,
                    y: 0
                } ], NavButtonTextStyles = {
                    x: 112,
                    fontSize: 38,
                    lineHeight: 70,
                    alpha: 0,
                    color: theme_default.textPrimary,
                    $active: {
                        alpha: 1
                    }
                }, LeftNavWrapper = function(props) {
                    var navDrawer, lastFocused, navigate = useNavigate(), isStartPage = useMatch(function() {
                        return "/browse/all";
                    }), announcer = useAnnouncer();
                    function focusNavDrawer() {
                        return !navDrawer.states.has("focus") && (lastFocused = activeElement(), navDrawer.setFocus());
                    }
                    announcer.debug = !0, announcer.enabled = !1, setupFPS({
                        renderer: renderer
                    });
                    var _createSignal34 = _slicedToArray(createSignal(!0), 2), showWidgets = _createSignal34[0], setShowWidgets = _createSignal34[1], location = useLocation(), showOnPaths = [ "/browse", "/entity" ];
                    createEffect(function() {
                        var currentPath = location.pathname, matchesPartial = showOnPaths.some(function(path) {
                            return currentPath.startsWith(path);
                        });
                        "/" === currentPath && (matchesPartial = !0), setShowWidgets(matchesPartial);
                    });
                    var _createSignal36 = _slicedToArray(createSignal("Last key: undefined"), 2), lastKey = _createSignal36[0], setLastKey = _createSignal36[1], _createSignal38 = _slicedToArray(createSignal(), 2), lastError = _createSignal38[0], setLastError = _createSignal38[1], keyPressHandler = function(e) {
                        setLastKey("Last key: ".concat(e.key, ", Code: ").concat(e.keyCode));
                    };
                    document.addEventListener("keydown", keyPressHandler);
                    var displayError = function(e) {
                        setLastError(function(p) {
                            return (p || "") + "\n" + e.message;
                        });
                    };
                    document.addEventListener("onerror", displayError);
                    var pageContainer, windowSize = "".concat(window.innerWidth, "x").concat(window.innerHeight);
                    return onCleanup(function() {
                        document.removeEventListener("onerror", displayError), document.removeEventListener("keydown", keyPressHandler);
                    }), function() {
                        var _el$ = createElement("view"), _el$2 = createElement("view"), _el$3 = createElement("text"), _el$4 = createTextNode("Window Size: "), _el$5 = createElement("text"), _el$6 = createElement("text"), _el$7 = createElement("view");
                        insertNode(_el$, _el$2), insertNode(_el$, _el$6), insertNode(_el$, _el$7);
                        var _ref$ = window.APP;
                        "function" == typeof _ref$ ? use(_ref$, _el$) : window.APP = _el$, setProp(_el$, "onAnnouncer", function() {
                            return announcer.enabled = !announcer.enabled, !0;
                        }), setProp(_el$, "onLast", function() {
                            return history.back(), !0;
                        }), setProp(_el$, "onMenu", function() {
                            return navigate("/"), !0;
                        }), setProp(_el$, "onBack", function() {
                            if (navDrawer.states.has("focus")) {
                                if (isStartPage()) return !1;
                                navigate(-1);
                            } else focusNavDrawer();
                            return !0;
                        }), setProp(_el$, "style", {
                            width: 1920,
                            height: 1080
                        }), setProp(_el$, "onLeft", function() {
                            return focusNavDrawer(), !0;
                        }), setProp(_el$, "onRight", function() {
                            if (navDrawer.states.has("focus")) return (lastFocused || pageContainer).setFocus(), 
                            !0;
                        }), insert(_el$, createComponent(Background, {}), _el$2), insert(_el$, createComponent(Show, {
                            get when() {
                                return !location.pathname.startsWith("/benchmark");
                            },
                            get children() {
                                return createComponent(FPSCounter, {
                                    mountX: 1,
                                    x: 1910,
                                    y: 10,
                                    alpha: 1
                                });
                            }
                        }), _el$2), insertNode(_el$2, _el$3), insertNode(_el$2, _el$5), setProp(_el$2, "mountX", 1), 
                        setProp(_el$2, "display", "flex"), setProp(_el$2, "flexDirection", "column"), setProp(_el$2, "width", 330), 
                        setProp(_el$2, "height", 50), setProp(_el$2, "x", 1910), setProp(_el$2, "y", 212), 
                        setProp(_el$2, "color", 255), insertNode(_el$3, _el$4), setProp(_el$3, "x", 8), 
                        setProp(_el$3, "fontSize", 15), insert(_el$3, windowSize, null), setProp(_el$5, "x", 8), 
                        setProp(_el$5, "fontSize", 15), insert(_el$5, lastKey), setProp(_el$6, "x", 270), 
                        setProp(_el$6, "y", 20), setProp(_el$6, "fontSize", 24), setProp(_el$6, "contain", "width"), 
                        setProp(_el$6, "width", 800), insert(_el$6, lastError), insert(_el$, createComponent(NavDrawer, {
                            ref: function(r$) {
                                "function" == typeof navDrawer ? navDrawer(r$) : navDrawer = r$;
                            },
                            focusPage: function() {
                                return lastFocused.setFocus();
                            },
                            get showWidgets() {
                                return showWidgets();
                            }
                        }), _el$7);
                        return "function" == typeof pageContainer ? use(pageContainer, _el$7) : pageContainer = _el$7, 
                        setProp(_el$7, "id", "pageContainer"), setProp(_el$7, "forwardFocus", 0), insert(_el$7, function() {
                            return props.children;
                        }), effect(function(_$p) {
                            return setProp(_el$2, "hidden", !showWidgets(), _$p);
                        }), _el$;
                    }();
                }, __vitePreload = function(baseModule, deps, importerUrl) {
                    var promise = Promise.resolve();
                    function handlePreloadError(err) {
                        var e = new Event("vite:preloadError", {
                            cancelable: !0
                        });
                        if (e.payload = err, window.dispatchEvent(e), !e.defaultPrevented) throw err;
                    }
                    return promise.then(function(res) {
                        var _step1, _iterator1 = _createForOfIteratorHelper(res || []);
                        try {
                            for (_iterator1.s(); !(_step1 = _iterator1.n()).done; ) {
                                var item = _step1.value;
                                "rejected" === item.status && handlePreloadError(item.reason);
                            }
                        } catch (err) {
                            _iterator1.e(err);
                        } finally {
                            _iterator1.f();
                        }
                        return baseModule().catch(handlePreloadError);
                    });
                }, originalGetOwnPropertyNames = Object.getOwnPropertyNames, Object.getOwnPropertyNames = function(obj) {
                    var names = originalGetOwnPropertyNames(obj);
                    return !obj || "function" != typeof obj && "[object Arguments]" !== Object.prototype.toString.call(obj) ? names : names.filter(function(name) {
                        return "caller" !== name && "callee" !== name && "arguments" !== name;
                    });
                }, window.bundleType = "LEGACY (nomodule)", console.log("[bundle] Loaded ".concat(window.bundleType, " build")), 
                Player = lazy(function() {
                    return __vitePreload(function() {
                        return _context.import("./Player-legacy-Ci76YiL0.js");
                    }, void 0);
                }), Grid = lazy(function() {
                    return __vitePreload(function() {
                        return _context.import("./Grid-legacy-Dd0dxNd-.js");
                    }, void 0);
                }), Loops = lazy(function() {
                    return __vitePreload(function() {
                        return _context.import("./Loops-legacy-DWAH41cR.js");
                    }, void 0);
                }), Infinite = lazy(function() {
                    return __vitePreload(function() {
                        return _context.import("./Infinite-legacy-CFNfi-cp.js");
                    }, void 0);
                }), TMDBGrid = lazy(function() {
                    return __vitePreload(function() {
                        return _context.import("./TMDBGrid-legacy-DTva-HOt.js");
                    }, void 0);
                }), Portal = lazy(function() {
                    return __vitePreload(function() {
                        return _context.import("./Portal-legacy-CK8CGfD5.js");
                    }, void 0);
                }), MatrixPage = lazy(function() {
                    return __vitePreload(function() {
                        return _context.import("./Matrix-legacy-B0biG1XQ.js");
                    }, void 0);
                }), TextPage = lazy(function() {
                    return __vitePreload(function() {
                        return _context.import("./Text-legacy-LgJeAAqa.js");
                    }, void 0);
                }), TextPosterPage = lazy(function() {
                    return __vitePreload(function() {
                        return _context.import("./TextPoster-legacy-D5bdMt-d.js");
                    }, void 0);
                }), CreatePage = lazy(function() {
                    return __vitePreload(function() {
                        return _context.import("./Create-legacy-DXR5tAY0.js");
                    }, void 0);
                }), ViewportPage = lazy(function() {
                    return __vitePreload(function() {
                        return _context.import("./Viewport-legacy-t2zHFZfA.js");
                    }, void 0);
                }), PositioningPage = lazy(function() {
                    return __vitePreload(function() {
                        return _context.import("./Positioning-legacy-DLoweZAi.js");
                    }, void 0);
                }), LayoutPage = lazy(function() {
                    return __vitePreload(function() {
                        return _context.import("./Layout-legacy-CuFpVxJg.js");
                    }, void 0);
                }), FocusBasicsPage = lazy(function() {
                    return __vitePreload(function() {
                        return _context.import("./FocusBasics-legacy-CEujWrD0.js");
                    }, void 0);
                }), KeyHandlingPage = lazy(function() {
                    return __vitePreload(function() {
                        return _context.import("./KeyHandling-legacy-Cp_V2xzu.js");
                    }, void 0);
                }), TransitionsPage = lazy(function() {
                    return __vitePreload(function() {
                        return _context.import("./Transitions-legacy-n85qm4jF.js");
                    }, void 0);
                }), ComponentsPage = lazy(function() {
                    return __vitePreload(function() {
                        return _context.import("./Components-legacy-Cxd_g--S.js");
                    }, void 0);
                }), FocusHandlingPage = lazy(function() {
                    return __vitePreload(function() {
                        return _context.import("./FocusHandling-legacy-B54tpwgS.js");
                    }, void 0);
                }), GradientsPage = lazy(function() {
                    return __vitePreload(function() {
                        return _context.import("./Gradients-legacy-CdRxw04I.js");
                    }, void 0);
                }), FlexPage = lazy(function() {
                    return __vitePreload(function() {
                        return _context.import("./Flex-legacy-SuXnQgfI.js");
                    }, void 0);
                }), FlexGrowPage = lazy(function() {
                    return __vitePreload(function() {
                        return _context.import("./FlexGrow-legacy-MJwk5Rzj.js");
                    }, void 0);
                }), FlexMenuPage = lazy(function() {
                    return __vitePreload(function() {
                        return _context.import("./FlexMenu-legacy-DWEV0b8X.js");
                    }, void 0);
                }), FlexSizePage = lazy(function() {
                    return __vitePreload(function() {
                        return _context.import("./FlexSize-legacy-CklsJRuP.js");
                    }, void 0);
                }), FlexColumnSizePage = lazy(function() {
                    return __vitePreload(function() {
                        return _context.import("./FlexColumnSize-legacy-C_B06JdT.js");
                    }, void 0);
                }), FlexColumnPage = lazy(function() {
                    return __vitePreload(function() {
                        return _context.import("./FlexColumn-legacy-DH9muMuT.js");
                    }, void 0);
                }), ButtonsMaterialPage = lazy(function() {
                    return __vitePreload(function() {
                        return _context.import("./ButtonsMaterial-legacy-CqGG06mt.js");
                    }, void 0);
                }), SuperFlexPage = lazy(function() {
                    return __vitePreload(function() {
                        return _context.import("./SuperFlex-legacy-C1y_MNDQ.js");
                    }, void 0);
                }), Entity = lazy(function() {
                    return __vitePreload(function() {
                        return _context.import("./Entity-legacy-K_5X0wF9.js");
                    }, void 0);
                }), People = lazy(function() {
                    return __vitePreload(function() {
                        return _context.import("./People-legacy-DV-X7wKO.js");
                    }, void 0);
                }), FireboltPage = lazy(function() {
                    return __vitePreload(function() {
                        return _context.import("./Firebolt-legacy-BCWbYl3w.js");
                    }, void 0);
                }), LoginPage = lazy(function() {
                    return __vitePreload(function() {
                        return _context.import("./Login-legacy-MQ9O3-JC.js");
                    }, void 0);
                }), VirtualPage = lazy(function() {
                    return __vitePreload(function() {
                        return _context.import("./Virtual-legacy-C0SbCcmd.js");
                    }, void 0);
                }), TagsPage = lazy(function() {
                    return __vitePreload(function() {
                        return _context.import("./Tags-legacy-BxH8mSDd.js");
                    }, void 0);
                }), ImagePerformance = lazy(function() {
                    return __vitePreload(function() {
                        return _context.import("./ImagePerformance-legacy-BQhMyeYp.js");
                    }, void 0);
                }), LargeImagePerformance = lazy(function() {
                    return __vitePreload(function() {
                        return _context.import("./LargeImagePerformance-legacy-CreIFhOt.js");
                    }, void 0);
                }), MixedImagePerformance = lazy(function() {
                    return __vitePreload(function() {
                        return _context.import("./MixedImagePerformance-legacy-DeiepwEW.js");
                    }, void 0);
                }), TextureCompressionPerformance = lazy(function() {
                    return __vitePreload(function() {
                        return _context.import("./TextureCompressionPerformance-legacy-BENgB4vw.js");
                    }, void 0);
                }), ComplexFlexPage = lazy(function() {
                    return __vitePreload(function() {
                        return _context.import("./ComplexFlex-legacy-Ciid6LG7.js");
                    }, void 0);
                }), ComplexFlexCapsPage = lazy(function() {
                    return __vitePreload(function() {
                        return _context.import("./ComplexFlexCaps-legacy-D5mJoang.js");
                    }, void 0);
                }), BenchmarkPage = lazy(function() {
                    return __vitePreload(function() {
                        return _context.import("./Benchmark-legacy-CqFeMxQN.js");
                    }, void 0);
                }), RendererVersionsPage = lazy(function() {
                    return __vitePreload(function() {
                        return _context.import("./RendererVersions-legacy-BJpQfZlP.js");
                    }, void 0);
                }), TextCenteringPage = lazy(function() {
                    return __vitePreload(function() {
                        return _context.import("./TextCentering-legacy-BpQxo_wW.js");
                    }, void 0);
                }), CountdownTimerPage = lazy(function() {
                    return __vitePreload(function() {
                        return _context.import("./CountdownTimer-legacy-Bc2ULyw4.js");
                    }, void 0);
                }), CustomButtonsPage = lazy(function() {
                    return __vitePreload(function() {
                        return _context.import("./CustomButtons-legacy-CM2uMLAl.js");
                    }, void 0);
                }), FlexJustifyWidthPage = lazy(function() {
                    return __vitePreload(function() {
                        return _context.import("./FlexJustifyWidth-legacy-CA3jLQgb.js");
                    }, void 0);
                }), numImageWorkers = "undefined" != typeof window && window.createImageBitmap ? 1 : 0, 
                urlParams = new URLSearchParams(window.location.search), numWorkers = urlParams.get("numImageWorkers"), 
                screenSize = urlParams.get("size") || "default", animationsEnabled = urlParams.get("animate") || "true", 
                enableContextSpy = "true" === urlParams.get("contextSpy"), forceWebGL2 = "true" === urlParams.get("webgl2"), 
                targetFPSParam = urlParams.get("targetFPS"), targetFPS = targetFPSParam ? parseFloat(targetFPSParam) : 0, 
                powerPreference = urlParams.get("powerPreference"), textBaseline = urlParams.get("textBaseline"), 
                numWorkers && (numImageWorkers = parseInt(numWorkers)), logicalDPR = window.innerHeight / 1080, 
                devicePixelRatio = window.devicePixelRatio || 1, physicalDPR = null !== (_low$medium$high$xhig = {
                    low: .666667,
                    medium: .8,
                    high: 1,
                    xhigh: 1.5,
                    ultra: 2,
                    default: logicalDPR >= 1 ? 1 : devicePixelRatio
                }[screenSize]) && void 0 !== _low$medium$high$xhig ? _low$medium$high$xhig : 1, 
                Config.debug = !1, Config.animationsEnabled = "true" === animationsEnabled, Config.fontSettings.fontFamily = "Roboto", 
                Config.fontSettings.color = theme_default.textPrimary, Config.fontSettings.fontSize = 32, 
                Config.domRendererEnabled = !1, Config.focusHistoryDebug = 5, textureProcessingTimeLimitParam = urlParams.get("textureProcessingTimeLimit"), 
                Config.rendererOptions = {
                    fpsUpdateInterval: 300,
                    inspector: void 0,
                    textureMemory: {
                        criticalThreshold: 2e8,
                        targetThresholdLevel: .8
                    },
                    textureProcessingTimeLimit: textureProcessingTimeLimitParam ? parseFloat(textureProcessingTimeLimitParam) : void 0,
                    numImageWorkers: numImageWorkers,
                    imageDecodeConcurrency: "undefined" != typeof window && window.createImageBitmap ? 4 : 2,
                    deviceLogicalPixelRatio: logicalDPR,
                    devicePhysicalPixelRatio: physicalDPR,
                    createImageBitmapSupport: "auto",
                    boundsMargin: 475,
                    targetFPS: targetFPS,
                    enableContextSpy: enableContextSpy,
                    forceWebGL2: forceWebGL2
                }, powerPreference && (Config.rendererOptions.powerPreference = powerPreference), 
                textBaseline && (Config.rendererOptions.textBaselineMode = textBaseline), requestAnimationFrame(function() {
                    setTimeout(function() {
                        var _createRenderer = createRenderer(), renderer = _createRenderer.renderer, render = _createRenderer.render, idleFired = !1;
                        renderer.on("idle", function() {
                            if (!idleFired) {
                                idleFired = !0;
                                var splash = document.getElementById("splash");
                                splash && (splash.classList.add("fade-out"), setTimeout(function() {
                                    splash.remove();
                                }, 500));
                            }
                        }), loadFonts(fonts);
                        var shaders = renderer;
                        shaders.registerShaderType("rounded", Rounded), shaders.registerShaderType("roundedWithBorder", RoundedWithBorder), 
                        shaders.registerShaderType("roundedWithShadow", RoundedWithShadow), shaders.registerShaderType("roundedWithBorderWithShadow", RoundedWithBorderAndShadow), 
                        shaders.registerShaderType("radialGradient", RadialGradient), shaders.registerShaderType("linearGradient", LinearGradient), 
                        shaders.registerShaderType("holePunch", HolePunch), shaders.registerShaderType("radialProgress", RadialProgress), 
                        render(function() {
                            return createComponent(FocusStackProvider, {
                                get children() {
                                    return createComponent(HashRouter, {
                                        root: function(props) {
                                            return createComponent(App, props);
                                        },
                                        get children() {
                                            return [ createComponent(Route, {
                                                path: "",
                                                component: LeftNavWrapper,
                                                get children() {
                                                    return [ createComponent(Route, {
                                                        path: "",
                                                        component: function() {
                                                            return createComponent(Navigate, {
                                                                href: "/browse/all"
                                                            });
                                                        }
                                                    }), createComponent(Route, {
                                                        path: "examples",
                                                        component: Portal,
                                                        get children() {
                                                            return [ createComponent(Route, {
                                                                path: "/"
                                                            }), createComponent(Route, {
                                                                path: "tmdb",
                                                                component: TMDB,
                                                                preload: tmdbData
                                                            }) ];
                                                        }
                                                    }), createComponent(KeepAliveRoute, {
                                                        id: "browse",
                                                        path: "browse/:filter",
                                                        component: Browse,
                                                        preload: browsePreload
                                                    }), createComponent(Route, {
                                                        path: "loops",
                                                        component: Loops,
                                                        preload: tmdbData
                                                    }), createComponent(Route, {
                                                        path: "infinite",
                                                        component: Infinite,
                                                        preload: tmdbData
                                                    }), createComponent(Route, {
                                                        path: "tmdbgrid",
                                                        component: TMDBGrid,
                                                        preload: tmdbData
                                                    }), createComponent(Route, {
                                                        path: "virtual",
                                                        component: VirtualPage,
                                                        preload: tmdbData
                                                    }), createComponent(Route, {
                                                        path: "destroy",
                                                        component: Destroy,
                                                        preload: destroyData
                                                    }), createComponent(Route, {
                                                        path: "grid",
                                                        component: Grid
                                                    }), createComponent(Route, {
                                                        path: "matrix",
                                                        component: MatrixPage
                                                    }), createComponent(Route, {
                                                        path: "text",
                                                        component: TextPage
                                                    }), createComponent(Route, {
                                                        path: "firebolt",
                                                        component: FireboltPage
                                                    }), createComponent(Route, {
                                                        path: "login",
                                                        component: LoginPage
                                                    }), createComponent(Route, {
                                                        path: "nested",
                                                        get component() {
                                                            return lazy(function() {
                                                                return __vitePreload(function() {
                                                                    return _context.import("./Nested-legacy-CdMW4p2h.js");
                                                                }, void 0);
                                                            });
                                                        }
                                                    }), createComponent(Route, {
                                                        path: "textposter",
                                                        component: TextPosterPage
                                                    }), createComponent(Route, {
                                                        path: "textcentering",
                                                        component: TextCenteringPage
                                                    }), createComponent(Route, {
                                                        path: "countdown",
                                                        component: CountdownTimerPage
                                                    }), createComponent(Route, {
                                                        path: "custombuttons",
                                                        component: CustomButtonsPage
                                                    }), createComponent(Route, {
                                                        path: "positioning",
                                                        component: PositioningPage
                                                    }), createComponent(Route, {
                                                        path: "layout",
                                                        component: LayoutPage
                                                    }), createComponent(Route, {
                                                        path: "focusbasics",
                                                        component: FocusBasicsPage
                                                    }), createComponent(Route, {
                                                        path: "transitions",
                                                        component: TransitionsPage
                                                    }), createComponent(Route, {
                                                        path: "components",
                                                        component: ComponentsPage
                                                    }), createComponent(Route, {
                                                        path: "focushandling",
                                                        component: FocusHandlingPage
                                                    }), createComponent(Route, {
                                                        path: "keyhandling",
                                                        component: KeyHandlingPage
                                                    }), createComponent(Route, {
                                                        path: "gradients",
                                                        component: GradientsPage
                                                    }), createComponent(Route, {
                                                        path: "flex",
                                                        component: FlexPage
                                                    }), createComponent(Route, {
                                                        path: "create",
                                                        component: CreatePage
                                                    }), createComponent(Route, {
                                                        path: "viewport",
                                                        component: ViewportPage
                                                    }), createComponent(Route, {
                                                        path: "flexsize",
                                                        component: FlexSizePage
                                                    }), createComponent(Route, {
                                                        path: "flexmenu",
                                                        component: FlexMenuPage
                                                    }), createComponent(Route, {
                                                        path: "flexcolumnsize",
                                                        component: FlexColumnSizePage
                                                    }), createComponent(Route, {
                                                        path: "flexcolumn",
                                                        component: FlexColumnPage
                                                    }), createComponent(Route, {
                                                        path: "flexgrow",
                                                        component: FlexGrowPage
                                                    }), createComponent(Route, {
                                                        path: "flexjustifywidth",
                                                        component: FlexJustifyWidthPage
                                                    }), createComponent(Route, {
                                                        path: "keepalive",
                                                        get component() {
                                                            return lazy(function() {
                                                                return __vitePreload(function() {
                                                                    return _context.import("./KeepAlive-legacy-CygvuxQw.js");
                                                                }, void 0);
                                                            });
                                                        }
                                                    }), createComponent(Route, {
                                                        path: "suspense",
                                                        get component() {
                                                            return lazy(function() {
                                                                return __vitePreload(function() {
                                                                    return _context.import("./suspense-legacy-Bh2nB2Zj.js");
                                                                }, void 0);
                                                            });
                                                        }
                                                    }), createComponent(Route, {
                                                        path: "superflex",
                                                        component: SuperFlexPage
                                                    }), createComponent(Route, {
                                                        path: "tags",
                                                        component: TagsPage
                                                    }), createComponent(Route, {
                                                        path: "buttonsmaterial",
                                                        component: ButtonsMaterialPage
                                                    }), createComponent(Route, {
                                                        path: "entity/people/:id",
                                                        component: People
                                                    }), createComponent(Route, {
                                                        path: "entity/:type/:id",
                                                        component: Entity,
                                                        preload: entityPreload
                                                    }), createComponent(Route, {
                                                        path: "image-performance",
                                                        component: ImagePerformance
                                                    }), createComponent(Route, {
                                                        path: "large-image-performance",
                                                        component: LargeImagePerformance
                                                    }), createComponent(Route, {
                                                        path: "mixed-image-performance",
                                                        component: MixedImagePerformance
                                                    }), createComponent(Route, {
                                                        path: "texture-compression-performance",
                                                        component: TextureCompressionPerformance
                                                    }), createComponent(Route, {
                                                        path: "complexflex",
                                                        component: ComplexFlexPage
                                                    }), createComponent(Route, {
                                                        path: "complexflexcaps",
                                                        component: ComplexFlexCapsPage
                                                    }), createComponent(Route, {
                                                        path: "benchmark",
                                                        component: BenchmarkPage,
                                                        preload: tmdbData
                                                    }), createComponent(Route, {
                                                        path: "versions",
                                                        component: RendererVersionsPage
                                                    }), createComponent(Route, {
                                                        path: "*all",
                                                        component: NotFound
                                                    }) ];
                                                }
                                            }), createComponent(Route, {
                                                path: "player",
                                                get children() {
                                                    return createComponent(Route, {
                                                        path: ":id",
                                                        component: Player
                                                    });
                                                }
                                            }) ];
                                        }
                                    });
                                }
                            });
                        });
                    }, 0);
                });
            }
        };
    });
}();