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
    System.register([ "./render-legacy-1jX59Y6X.js", "./mergeProps-legacy-8amjdkoE.js", "./chainFunctions-legacy-Bpapim5k.js", "./Column-legacy-B6ilkF_Y.js", "./Row-legacy-G2xS-YZ8.js", "./state-legacy-B9YP9E7M.js" ], function(_export, _context) {
        var onMount, Switch, createMemo, Match, Show, createEffect, on, createElement, effect, memo, spread, createComponent, Index, insert, setProp, createSignal, createTextNode, insertNode, mergeProps, chainFunctions, Column, Row, setGlobalBackground, ContainerStyle, TextStyle, getformatValueText, Input, actionKeyContainerStyle, ActionKeyIconStyle, keyContainerStyle, BaseKeyTextStyle, KeyText, Key, ActionKey, Keyboard, formats;
        return {
            setters: [ function(_renderLegacy002Js) {
                onMount = _renderLegacy002Js.$, Switch = _renderLegacy002Js.F, createMemo = _renderLegacy002Js.H, 
                Match = _renderLegacy002Js.M, Show = _renderLegacy002Js.N, createEffect = _renderLegacy002Js.V, 
                on = _renderLegacy002Js.Z, createElement = _renderLegacy002Js.a, effect = _renderLegacy002Js.c, 
                memo = _renderLegacy002Js.d, spread = _renderLegacy002Js.h, createComponent = _renderLegacy002Js.i, 
                Index = _renderLegacy002Js.j, insert = _renderLegacy002Js.l, setProp = _renderLegacy002Js.m, 
                createSignal = _renderLegacy002Js.q, createTextNode = _renderLegacy002Js.s, insertNode = _renderLegacy002Js.u;
            }, function(_mergePropsLegacy005Js) {
                mergeProps = _mergePropsLegacy005Js.t;
            }, function(_chainFunctionsLegacy009Js) {
                chainFunctions = _chainFunctionsLegacy009Js.t;
            }, function(_ColumnLegacy00aJs) {
                Column = _ColumnLegacy00aJs.t;
            }, function(_RowLegacy00bJs) {
                Row = _RowLegacy00bJs.t;
            }, function(_stateLegacy00jJs) {
                setGlobalBackground = _stateLegacy00jJs.n;
            } ],
            execute: function() {
                ContainerStyle = {
                    display: "flex",
                    flexBoundary: "fixed",
                    padding: [ 0, 20 ],
                    width: 450,
                    height: 70,
                    borderRadius: 8,
                    border: {
                        color: 3284386815,
                        width: 2
                    },
                    $focus: {
                        border: {
                            color: 4294967295,
                            width: 2
                        }
                    }
                }, TextStyle = {
                    fontSize: 46,
                    lineHeight: 70
                }, getformatValueText = function(props, value) {
                    var _props$mask, _value$length;
                    return props.password ? (null !== (_props$mask = props.mask) && void 0 !== _props$mask ? _props$mask : "").repeat(null !== (_value$length = value.length) && void 0 !== _value$length ? _value$length : 0) : value;
                }, Input = function(props) {
                    var _props$valueSignal, _props$position, _props$keyEvents, _el$, _el$2, _ref2 = _slicedToArray(null !== (_props$valueSignal = props.valueSignal) && void 0 !== _props$valueSignal ? _props$valueSignal : createSignal(""), 2), value = _ref2[0], setValue = _ref2[1], _createSignal2 = _slicedToArray(createSignal(null !== (_props$position = props.position) && void 0 !== _props$position ? _props$position : value().length), 2), position = _createSignal2[0], setPosition = _createSignal2[1], _ref4 = _slicedToArray(null !== (_props$keyEvents = props.keyEvents) && void 0 !== _props$keyEvents ? _props$keyEvents : createSignal(""), 2), keyEvent = _ref4[0], setKeyEvent = _ref4[1], formatValueText = createMemo(function() {
                        return getformatValueText(props, value());
                    });
                    function onRight() {
                        return setPosition(function(p) {
                            return Math.max(p + 1, value().length);
                        }), !0;
                    }
                    function onLeft() {
                        return setPosition(function(p) {
                            return Math.max(p - 1, 0);
                        }), !0;
                    }
                    return createEffect(on(keyEvent, function(key) {
                        if (void 0 !== key && "" !== key) {
                            var inputText = value(), currentPosition = value().length, newValue = "";
                            switch (key.toLowerCase()) {
                              case "bksp":
                              case "delete":
                                newValue = currentPosition > 0 ? inputText.slice(0, currentPosition - 1) + inputText.slice(currentPosition) : inputText, 
                                currentPosition--;
                                break;

                              case "done":
                                break;

                              case "space":
                                newValue = currentPosition > 0 ? "".concat(inputText.slice(0, currentPosition), " ").concat(inputText.slice(currentPosition)) : " ".concat(inputText), 
                                currentPosition++;
                                break;

                              case "clear":
                                newValue = "", currentPosition = 0;
                                break;

                              default:
                                newValue = currentPosition > 0 ? inputText.slice(0, currentPosition) + key + inputText.slice(currentPosition) : key + inputText, 
                                currentPosition++;
                            }
                            return setKeyEvent(""), setValue(newValue), "";
                        }
                    }, {
                        defer: !0
                    })), _el$ = createElement("view"), _el$2 = createElement("text"), insertNode(_el$, _el$2), 
                    spread(_el$, mergeProps(props, {
                        get position() {
                            return position();
                        },
                        onLeft: onLeft,
                        onRight: onRight,
                        style: ContainerStyle
                    }), !0), setProp(_el$2, "style", TextStyle), insert(_el$2, function() {
                        return formatValueText() || props.placeholder || "";
                    }), _el$;
                }, actionKeyContainerStyle = {
                    width: 144,
                    alpha: .8,
                    height: 60,
                    scale: 1,
                    get color() {
                        return 65535;
                    },
                    borderRadius: 6,
                    $focus: {
                        alpha: 1,
                        scale: 1.05
                    },
                    transition: {
                        scale: !0
                    }
                }, ActionKeyIconStyle = {
                    y: 6,
                    x: 48,
                    width: 48,
                    height: 48,
                    color: 3334915839
                }, keyContainerStyle = {
                    height: 60,
                    get color() {
                        return 255;
                    },
                    scale: 1,
                    borderRadius: 6,
                    $focus: {
                        scale: 1.05,
                        get color() {
                            return 65535;
                        }
                    }
                }, KeyText = _objectSpread(_objectSpread({}, BaseKeyTextStyle = {
                    fontSize: 42,
                    lineHeight: 60
                }), {}, {
                    width: 48,
                    contain: "both",
                    textAlign: "center"
                }), Key = function(props) {
                    return _el$ = createElement("view"), _el$2 = createElement("text"), insertNode(_el$, _el$2), 
                    setProp(_el$, "width", 48), spread(_el$, mergeProps(props, {
                        style: keyContainerStyle
                    }), !0), setProp(_el$2, "style", KeyText), insert(_el$2, function() {
                        return props.key || props.title;
                    }), _el$;
                    var _el$, _el$2;
                }, ActionKey = function(props) {
                    return createComponent(Switch, {
                        get children() {
                            return [ createComponent(Match, {
                                get when() {
                                    return "string" == typeof props.key;
                                },
                                get children() {
                                    var _el$3 = createElement("view"), _el$4 = createElement("text");
                                    return insertNode(_el$3, _el$4), spread(_el$3, mergeProps(props, {
                                        get key() {
                                            return props.key;
                                        },
                                        display: "flex",
                                        padding: [ 0, 20 ],
                                        style: keyContainerStyle
                                    }), !0), setProp(_el$4, "style", BaseKeyTextStyle), insert(_el$4, function() {
                                        return props.key;
                                    }), _el$3;
                                }
                            }), createComponent(Match, {
                                get when() {
                                    return props.key.icon;
                                },
                                get children() {
                                    var _el$5 = createElement("view"), _el$6 = createElement("view");
                                    return insertNode(_el$5, _el$6), spread(_el$5, mergeProps(props, {
                                        get key() {
                                            return props.key.key;
                                        },
                                        style: actionKeyContainerStyle
                                    }), !0), setProp(_el$6, "style", ActionKeyIconStyle), effect(function(_$p) {
                                        return setProp(_el$6, "src", "".concat(props.key.icon), _$p);
                                    }), _el$5;
                                }
                            }), createComponent(Match, {
                                when: !0,
                                get children() {
                                    var _props$key, _el$7 = createElement("view"), _el$8 = createElement("text");
                                    return insertNode(_el$7, _el$8), spread(_el$7, mergeProps(props, {
                                        get key() {
                                            return props.key.key;
                                        },
                                        display: "flex",
                                        padding: [ 0, 20 ],
                                        style: (null == (_props$key = props.key) ? void 0 : _props$key.size) ? actionKeyContainerStyle : keyContainerStyle
                                    }), !0), setProp(_el$8, "style", BaseKeyTextStyle), insert(_el$8, function() {
                                        return props.key.title;
                                    }), _el$7;
                                }
                            }) ];
                        }
                    });
                }, Keyboard = function(props) {
                    var _createSignal4 = _slicedToArray(createSignal("default"), 2), layout = _createSignal4[0], setLayout = _createSignal4[1], config = createMemo(function() {
                        return props.formats[layout()];
                    });
                    return createComponent(Column, mergeProps({
                        transition: !1
                    }, props, {
                        gap: 12,
                        plinko: !0,
                        scroll: "none",
                        onEnter: chainFunctions(function(_e, _keyboard, key) {
                            return "string" != typeof key.key && ("shift" === key.key.title ? (setLayout("uppercase" === layout() ? "default" : "uppercase"), 
                            !0) : "symbol" === key.key.title && (setLayout("symbol" === layout() ? "default" : "symbol"), 
                            !0));
                        }, props.onEnter),
                        get children() {
                            return createComponent(Index, {
                                get each() {
                                    return config();
                                },
                                children: function(keyRow) {
                                    return createComponent(Row, {
                                        gap: 6,
                                        justifyContent: "center",
                                        scroll: "none",
                                        get children() {
                                            return createComponent(Index, {
                                                get each() {
                                                    return keyRow();
                                                },
                                                children: function(key) {
                                                    return createComponent(Show, {
                                                        get when() {
                                                            return memo(function() {
                                                                return "string" == typeof key();
                                                            })() && 1 === key().length;
                                                        },
                                                        get fallback() {
                                                            return createComponent(ActionKey, {
                                                                get key() {
                                                                    return key();
                                                                }
                                                            });
                                                        },
                                                        get children() {
                                                            return createComponent(Key, {
                                                                get key() {
                                                                    return key();
                                                                }
                                                            });
                                                        }
                                                    });
                                                }
                                            });
                                        }
                                    });
                                }
                            });
                        }
                    }));
                }, _export("formats", formats = {
                    uppercase: [ [ "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", {
                        title: "Delete",
                        size: "md",
                        keyId: "delete",
                        announce: "delete, button"
                    } ], [ "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", {
                        title: "#@!",
                        size: "md",
                        toggle: "symbols",
                        announce: "symbol mode, button",
                        keyId: "symbols"
                    } ], [ "A", "S", "D", "F", "G", "H", "J", "K", "L", "@", {
                        title: "áöû",
                        size: "md",
                        toggle: "accents",
                        announce: "accents, button",
                        keyId: "accents"
                    } ], [ "Z", "X", "C", "V", "B", "N", "M", {
                        title: ".",
                        announce: "period, button"
                    }, {
                        title: "-",
                        announce: "dash, button"
                    }, {
                        title: "_",
                        announce: "underscore, button"
                    }, {
                        title: "shift",
                        size: "md",
                        toggle: "default",
                        announce: "shift off, button",
                        keyId: "shift"
                    } ], [ {
                        title: ".com",
                        announce: "dot, com",
                        size: "md"
                    }, {
                        title: ".net",
                        announce: "dot, net",
                        size: "md"
                    }, {
                        title: ".edu",
                        announce: "dot, edu",
                        size: "md"
                    }, {
                        title: ".org",
                        announce: "dot, org",
                        size: "md"
                    }, {
                        title: ".co",
                        announce: "dot, co",
                        size: "md"
                    }, {
                        title: ".uk",
                        announce: "dot, uk",
                        size: "md"
                    } ], [ {
                        title: "Clear",
                        size: "lg",
                        keyId: "clear",
                        announce: "clear, button"
                    }, {
                        title: "Space",
                        size: "xl",
                        keyId: "space",
                        announce: "space, button"
                    }, {
                        title: "Save",
                        size: "lg",
                        keyId: "save",
                        announce: "save, button"
                    } ] ],
                    default: [ [ "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", {
                        title: "Delete",
                        size: "md",
                        keyId: "delete",
                        announce: "delete, button"
                    } ], [ "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", {
                        title: "#@!",
                        size: "md",
                        toggle: "symbols",
                        announce: "symbol mode, button",
                        keyId: "symbols"
                    } ], [ "a", "s", "d", "f", "g", "h", "j", "k", "l", "@" ], [ "z", "x", "c", "v", "b", "n", "m", {
                        title: "_",
                        announce: "underscore, button"
                    }, {
                        title: ".",
                        announce: "period, button"
                    }, {
                        title: "-",
                        announce: "dash, button"
                    }, {
                        title: "shift",
                        size: "md",
                        toggle: "uppercase",
                        announce: "shift on, button",
                        keyId: "shift"
                    } ], [ {
                        title: ".com",
                        announce: "dot, com",
                        size: "md"
                    }, {
                        title: ".net",
                        announce: "dot, net",
                        size: "md"
                    }, {
                        title: ".edu",
                        announce: "dot, edu",
                        size: "md"
                    }, {
                        title: ".org",
                        announce: "dot, org",
                        size: "md"
                    }, {
                        title: ".co",
                        announce: "dot, co",
                        size: "md"
                    }, {
                        title: ".uk",
                        announce: "dot, uk",
                        size: "md"
                    } ], [ {
                        title: "Clear",
                        size: "lg",
                        keyId: "clear",
                        announce: "clear, button"
                    }, {
                        title: "Space",
                        size: "xl",
                        keyId: "space",
                        announce: "space, button"
                    }, {
                        title: "Save",
                        size: "lg",
                        keyId: "save",
                        announce: "save, button"
                    } ] ]
                }), _export("default", function() {
                    var _el$, Title = {
                        fontSize: 42,
                        fontWeight: "bold"
                    }, keyEvent = createSignal(""), valueSignal = createSignal(""), _keyEvent2 = _slicedToArray(keyEvent, 2), setKeyEvent = (_keyEvent2[0], 
                    _keyEvent2[1]), onEnter = function(_e, _keyboard, key) {
                        if ("string" == typeof key.key) setKeyEvent(key.key); else if ("object" === _typeof(key.key)) {
                            if ("save" === key.key.title || "Save" === key.key.title) return console.log("perform save action", valueSignal[0]()), 
                            !0;
                            setKeyEvent(key.key.title);
                        }
                    };
                    return onMount(function() {
                        setGlobalBackground(255);
                    }), _el$ = createElement("view"), setProp(_el$, "width", 1080), setProp(_el$, "x", 350), 
                    setProp(_el$, "y", 100), insert(_el$, createComponent(Column, {
                        autofocus: !0,
                        selected: 1,
                        scroll: "none",
                        get children() {
                            return [ (_el$2 = createElement("text"), insertNode(_el$2, createTextNode("Username")), 
                            setProp(_el$2, "skipFocus", !0), setProp(_el$2, "style", Title), _el$2), createComponent(Input, {
                                valueSignal: valueSignal,
                                keyEvents: keyEvent
                            }), createComponent(Keyboard, {
                                width: 550,
                                formats: formats,
                                onEnter: onEnter
                            }) ];
                            var _el$2;
                        }
                    })), _el$;
                });
            }
        };
    });
}();