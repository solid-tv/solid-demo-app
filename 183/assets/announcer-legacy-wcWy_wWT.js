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
    System.register([ "./render-legacy-dLzA91Db.js" ], function(_export, _context) {
        var getListener, onCleanup, getOwner, untrack, createSignal, focusPath, ARIA_PARENT_ID, ariaLabelPhrases, currentSeries, debounce, resetFocusPathTimer, prevFocusPath, currentlySpeaking, voiceOutDisabled, Announcer;
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
                        throw e;

                      case 4:
                        return _context3.a(2);
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
                            if (!(phrase instanceof SpeechSynthesisUtterance)) {
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
                }))(),
                get active() {
                    return active;
                },
                append: function(toSpeak) {
                    remainingPhrases.push(toSpeak);
                },
                cancel: function() {
                    active && (root && (aria ? ariaLabelPhrases = [] : synth.cancel()), nestedSeriesResults.forEach(function(nestedSeriesResult) {
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
        return _export("n", function(schedule) {
            var listeners = 0, isDirty = !1, _createSignal2 = _slicedToArray(createSignal(void 0, {
                equals: !1
            }), 2), track = _createSignal2[0], dirty = _createSignal2[1], call = schedule(function() {
                isDirty = !0, dirty();
            });
            return function() {
                return isDirty || (call(), track()), isDirty ? (isDirty = !!listeners, !0) : (getListener() && (listeners++, 
                onCleanup(function() {
                    return listeners--;
                })), !1);
            };
        }), {
            setters: [ function(_renderLegacy002Js) {
                getListener = _renderLegacy002Js.J, onCleanup = _renderLegacy002Js.Q, getOwner = _renderLegacy002Js.Y, 
                untrack = _renderLegacy002Js.it, createSignal = _renderLegacy002Js.q, focusPath = _renderLegacy002Js.v;
            } ],
            execute: function() {
                ARIA_PARENT_ID = "aria-parent", ariaLabelPhrases = [], debounce = function(callback, wait) {
                    var timeoutId;
                    var clear = function() {
                        return clearTimeout(timeoutId);
                    };
                    getOwner() && onCleanup(clear);
                    return Object.assign(function() {
                        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
                        void 0 !== timeoutId && clear(), timeoutId = setTimeout(function() {
                            return callback.apply(void 0, args);
                        }, wait);
                    }, {
                        clear: clear
                    });
                }, _export("r", function(callback, wait) {
                    var timeoutId, lastArgs, isThrottled = !1, clear = function() {
                        clearTimeout(timeoutId), isThrottled = !1;
                    };
                    return getOwner() && onCleanup(clear), Object.assign(function() {
                        for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) args[_key2] = arguments[_key2];
                        lastArgs = args, isThrottled || (isThrottled = !0, timeoutId = setTimeout(function() {
                            callback.apply(void 0, _toConsumableArray(lastArgs)), isThrottled = !1;
                        }, wait));
                    }, {
                        clear: clear
                    });
                }), prevFocusPath = [], voiceOutDisabled = !1, _export("t", Announcer = {
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
                        var _ref2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, _ref2$append = _ref2.append, append = void 0 !== _ref2$append && _ref2$append, _ref2$notification = _ref2.notification, notification = void 0 !== _ref2$notification && _ref2$notification;
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
                        var _ref3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, _ref3$focusDebounce = _ref3.focusDebounce, focusDebounce = void 0 === _ref3$focusDebounce ? 400 : _ref3$focusDebounce, _ref3$focusChangeTime = _ref3.focusChangeTimeout, focusChangeTimeout = void 0 === _ref3$focusChangeTime ? 3e5 : _ref3$focusChangeTime;
                        Announcer.onFocusChange = debounceWithFlush(onFocusChangeCore, focusDebounce), resetFocusPathTimer = debounceWithFlush(function() {
                            prevFocusPath = [];
                        }, focusChangeTimeout);
                    }
                });
            }
        };
    });
}();