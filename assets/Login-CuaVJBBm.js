import { $ as onMount, F as Switch, H as createMemo, M as Match, N as Show, V as createEffect, Z as on, a as createElement, c as effect, d as memo, h as spread, i as createComponent, j as Index, l as insert, m as setProp, q as createSignal, s as createTextNode, u as insertNode } from "./render-p5jfA6sq.js";

import { t as mergeProps } from "./mergeProps-D_tyQnJu.js";

import { t as chainFunctions } from "./chainFunctions-DSip4oOs.js";

import { t as Column } from "./Column-CWu59JbZ.js";

import { t as Row } from "./Row-D-2QumfQ.js";

import { n as setGlobalBackground } from "./state-DgizXNPA.js";

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
};

var TextStyle = {
    fontSize: 46,
    lineHeight: 70
};

var getformatValueText = (props, value) => {
    var _props$mask, _value$length;
    return props.password ? ((_props$mask = props.mask) !== null && _props$mask !== void 0 ? _props$mask : "").repeat((_value$length = value.length) !== null && _value$length !== void 0 ? _value$length : 0) : value;
};

var Input = props => {
    var _props$valueSignal, _props$position, _props$keyEvents;
    const [value, setValue] = (_props$valueSignal = props.valueSignal) !== null && _props$valueSignal !== void 0 ? _props$valueSignal : createSignal("");
    const [position, setPosition] = createSignal((_props$position = props.position) !== null && _props$position !== void 0 ? _props$position : value().length);
    const [keyEvent, setKeyEvent] = (_props$keyEvents = props.keyEvents) !== null && _props$keyEvents !== void 0 ? _props$keyEvents : createSignal("");
    const formatValueText = createMemo(() => getformatValueText(props, value()));
    const formatInputText = key => {
        if (key === void 0 || key === "") return;
        const inputText = value();
        let currentPosition = value().length;
        let newValue = "";
        switch (key.toLowerCase()) {
          case "bksp":
          case "delete":
            newValue = currentPosition > 0 ? inputText.slice(0, currentPosition - 1) + inputText.slice(currentPosition) : inputText;
            currentPosition--;
            break;

          case "done":
            break;

          case "space":
            newValue = currentPosition > 0 ? `${inputText.slice(0, currentPosition)} ${inputText.slice(currentPosition)}` : ` ${inputText}`;
            currentPosition++;
            break;

          case "clear":
            newValue = "";
            currentPosition = 0;
            break;

          default:
            newValue = currentPosition > 0 ? inputText.slice(0, currentPosition) + key + inputText.slice(currentPosition) : key + inputText;
            currentPosition++;
            break;
        }
        setKeyEvent("");
        setValue(newValue);
        return "";
    };
    createEffect(on(keyEvent, formatInputText, {
        defer: true
    }));
    function onRight() {
        setPosition(p => Math.max(p + 1, value().length));
        return true;
    }
    function onLeft() {
        setPosition(p => Math.max(p - 1, 0));
        return true;
    }
    return (() => {
        var _el$ = createElement("view"), _el$2 = createElement("text");
        insertNode(_el$, _el$2);
        spread(_el$, mergeProps(props, {
            get position() {
                return position();
            },
            onLeft: onLeft,
            onRight: onRight,
            style: ContainerStyle
        }), true);
        setProp(_el$2, "style", TextStyle);
        insert(_el$2, () => formatValueText() || props.placeholder || "");
        return _el$;
    })();
};

var actionKeyContainerStyle = {
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
        scale: true
    }
};

var ActionKeyIconStyle = {
    y: 6,
    x: 48,
    width: 48,
    height: 48,
    color: 3334915839
};

var keyContainerStyle = {
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
};

var BaseKeyTextStyle = {
    fontSize: 42,
    lineHeight: 60
};

var KeyText = {
    ...BaseKeyTextStyle,
    width: 48,
    contain: "both",
    textAlign: "center"
};

var Key = props => (() => {
    var _el$ = createElement("view"), _el$2 = createElement("text");
    insertNode(_el$, _el$2);
    setProp(_el$, "width", 48);
    spread(_el$, mergeProps(props, {
        style: keyContainerStyle
    }), true);
    setProp(_el$2, "style", KeyText);
    insert(_el$2, () => props.key || props.title);
    return _el$;
})();

var ActionKey = props => createComponent(Switch, {
    get children() {
        return [ createComponent(Match, {
            get when() {
                return typeof props.key === "string";
            },
            get children() {
                var _el$3 = createElement("view"), _el$4 = createElement("text");
                insertNode(_el$3, _el$4);
                spread(_el$3, mergeProps(props, {
                    get key() {
                        return props.key;
                    },
                    display: "flex",
                    padding: [ 0, 20 ],
                    style: keyContainerStyle
                }), true);
                setProp(_el$4, "style", BaseKeyTextStyle);
                insert(_el$4, () => props.key);
                return _el$3;
            }
        }), createComponent(Match, {
            get when() {
                return props.key.icon;
            },
            get children() {
                var _el$5 = createElement("view"), _el$6 = createElement("view");
                insertNode(_el$5, _el$6);
                spread(_el$5, mergeProps(props, {
                    get key() {
                        return props.key.key;
                    },
                    style: actionKeyContainerStyle
                }), true);
                setProp(_el$6, "style", ActionKeyIconStyle);
                effect(_$p => setProp(_el$6, "src", `${props.key.icon}`, _$p));
                return _el$5;
            }
        }), createComponent(Match, {
            when: true,
            get children() {
                var _props$key;
                var _el$7 = createElement("view"), _el$8 = createElement("text");
                insertNode(_el$7, _el$8);
                spread(_el$7, mergeProps(props, {
                    get key() {
                        return props.key.key;
                    },
                    display: "flex",
                    padding: [ 0, 20 ],
                    style: ((_props$key = props.key) == null ? void 0 : _props$key.size) ? actionKeyContainerStyle : keyContainerStyle
                }), true);
                setProp(_el$8, "style", BaseKeyTextStyle);
                insert(_el$8, () => props.key.title);
                return _el$7;
            }
        }) ];
    }
});

var Keyboard = props => {
    const [layout, setLayout] = createSignal("default");
    const config = createMemo(() => props.formats[layout()]);
    const onEnter = (_e, _keyboard, key) => {
        if (typeof key.key === "string") return false;
        if (key.key.title === "shift") {
            setLayout(layout() === "uppercase" ? "default" : "uppercase");
            return true;
        }
        if (key.key.title === "symbol") {
            setLayout(layout() === "symbol" ? "default" : "symbol");
            return true;
        }
        return false;
    };
    return createComponent(Column, mergeProps({
        transition: false
    }, props, {
        gap: 12,
        plinko: true,
        scroll: "none",
        onEnter: chainFunctions(onEnter, props.onEnter),
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
                                    return memo(() => typeof key() === "string")() && key().length === 1;
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
};

var formats = {
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
};

var LoginPage = () => {
    const Title = {
        fontSize: 42,
        fontWeight: "bold"
    };
    const keyEvent = createSignal("");
    const valueSignal = createSignal("");
    const [_keyEvent, setKeyEvent] = keyEvent;
    const onEnter = (_e, _keyboard, key) => {
        if (typeof key.key === "string") setKeyEvent(key.key); else if (typeof key.key === "object") {
            if (key.key.title === "save" || key.key.title === "Save") {
                console.log("perform save action", valueSignal[0]());
                return true;
            }
            setKeyEvent(key.key.title);
        }
    };
    onMount(() => {
        setGlobalBackground(255);
    });
    return (() => {
        var _el$ = createElement("view");
        setProp(_el$, "width", 1080);
        setProp(_el$, "x", 350);
        setProp(_el$, "y", 100);
        insert(_el$, createComponent(Column, {
            autofocus: true,
            selected: 1,
            scroll: "none",
            get children() {
                return [ (() => {
                    var _el$2 = createElement("text");
                    insertNode(_el$2, createTextNode(`Username`));
                    setProp(_el$2, "skipFocus", true);
                    setProp(_el$2, "style", Title);
                    return _el$2;
                })(), createComponent(Input, {
                    valueSignal: valueSignal,
                    keyEvents: keyEvent
                }), createComponent(Keyboard, {
                    width: 550,
                    formats: formats,
                    onEnter: onEnter
                }) ];
            }
        }));
        return _el$;
    })();
};

export { LoginPage as default, formats };