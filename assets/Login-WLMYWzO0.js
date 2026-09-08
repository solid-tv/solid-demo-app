import { $ as onMount, F as Switch, H as createMemo, M as Match, N as Show, V as createEffect, Z as on, a as createElement, c as effect, d as memo, h as spread, i as createComponent, j as Index, l as insert, m as setProp, q as createSignal, s as createTextNode, u as insertNode } from "./render-aZV73JYm.js";

import { t as mergeProps } from "./mergeProps-WuPuVjcv.js";

import { t as chainFunctions } from "./chainFunctions-DeyLeCmP.js";

import { t as Column } from "./Column-Dwqo01zH.js";

import { t as Row } from "./Row-vBX47WKv.js";

import { n as setGlobalBackground } from "./state-DcDkvIU9.js";

var ContainerStyle = {
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
}, Input = props => {
    var _props$valueSignal, _props$position, _props$keyEvents;
    const [value, setValue] = null !== (_props$valueSignal = props.valueSignal) && void 0 !== _props$valueSignal ? _props$valueSignal : createSignal(""), [position, setPosition] = createSignal(null !== (_props$position = props.position) && void 0 !== _props$position ? _props$position : value().length), [keyEvent, setKeyEvent] = null !== (_props$keyEvents = props.keyEvents) && void 0 !== _props$keyEvents ? _props$keyEvents : createSignal(""), formatValueText = createMemo(() => ((props, value) => {
        var _props$mask, _value$length;
        return props.password ? (null !== (_props$mask = props.mask) && void 0 !== _props$mask ? _props$mask : "").repeat(null !== (_value$length = value.length) && void 0 !== _value$length ? _value$length : 0) : value;
    })(props, value()));
    function onRight() {
        return setPosition(p => Math.max(p + 1, value().length)), !0;
    }
    function onLeft() {
        return setPosition(p => Math.max(p - 1, 0)), !0;
    }
    return createEffect(on(keyEvent, key => {
        if (void 0 === key || "" === key) return;
        const inputText = value();
        let currentPosition = value().length, newValue = "";
        switch (key.toLowerCase()) {
          case "bksp":
          case "delete":
            newValue = currentPosition > 0 ? inputText.slice(0, currentPosition - 1) + inputText.slice(currentPosition) : inputText, 
            currentPosition--;
            break;

          case "done":
            break;

          case "space":
            newValue = currentPosition > 0 ? `${inputText.slice(0, currentPosition)} ${inputText.slice(currentPosition)}` : ` ${inputText}`, 
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
    }), !0), setProp(_el$2, "style", TextStyle), insert(_el$2, () => formatValueText() || props.placeholder || ""), 
    _el$;
    var _el$, _el$2;
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
}, BaseKeyTextStyle = {
    fontSize: 42,
    lineHeight: 60
}, KeyText = {
    ...BaseKeyTextStyle,
    width: 48,
    contain: "both",
    textAlign: "center"
}, Key = props => {
    return _el$ = createElement("view"), _el$2 = createElement("text"), insertNode(_el$, _el$2), 
    setProp(_el$, "width", 48), spread(_el$, mergeProps(props, {
        style: keyContainerStyle
    }), !0), setProp(_el$2, "style", KeyText), insert(_el$2, () => props.key || props.title), 
    _el$;
    var _el$, _el$2;
}, ActionKey = props => createComponent(Switch, {
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
                }), !0), setProp(_el$4, "style", BaseKeyTextStyle), insert(_el$4, () => props.key), 
                _el$3;
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
                }), !0), setProp(_el$6, "style", ActionKeyIconStyle), effect(_$p => setProp(_el$6, "src", `${props.key.icon}`, _$p)), 
                _el$5;
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
                }), !0), setProp(_el$8, "style", BaseKeyTextStyle), insert(_el$8, () => props.key.title), 
                _el$7;
            }
        }) ];
    }
}), Keyboard = props => {
    const [layout, setLayout] = createSignal("default"), config = createMemo(() => props.formats[layout()]);
    return createComponent(Column, mergeProps({
        transition: !1
    }, props, {
        gap: 12,
        plinko: !0,
        scroll: "none",
        onEnter: chainFunctions((_e, _keyboard, key) => "string" != typeof key.key && ("shift" === key.key.title ? (setLayout("uppercase" === layout() ? "default" : "uppercase"), 
        !0) : "symbol" === key.key.title && (setLayout("symbol" === layout() ? "default" : "symbol"), 
        !0)), props.onEnter),
        get children() {
            return createComponent(Index, {
                get each() {
                    return config();
                },
                children: keyRow => createComponent(Row, {
                    gap: 6,
                    justifyContent: "center",
                    scroll: "none",
                    get children() {
                        return createComponent(Index, {
                            get each() {
                                return keyRow();
                            },
                            children: key => createComponent(Show, {
                                get when() {
                                    return memo(() => "string" == typeof key())() && 1 === key().length;
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
                            })
                        });
                    }
                })
            });
        }
    }));
}, formats = {
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
}, LoginPage = () => {
    const Title = {
        fontSize: 42,
        fontWeight: "bold"
    }, keyEvent = createSignal(""), valueSignal = createSignal(""), [_keyEvent, setKeyEvent] = keyEvent, onEnter = (_e, _keyboard, key) => {
        if ("string" == typeof key.key) setKeyEvent(key.key); else if ("object" == typeof key.key) {
            if ("save" === key.key.title || "Save" === key.key.title) return console.log("perform save action", valueSignal[0]()), 
            !0;
            setKeyEvent(key.key.title);
        }
    };
    return onMount(() => {
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
    var _el$;
};

export { LoginPage as default, formats };