import { $ as onMount, A as For, a as createElement, c as effect, h as spread, i as createComponent, l as insert, m as setProp, s as createTextNode, u as insertNode } from "./render-BKL9i0Et.js";

import { t as mergeProps } from "./mergeProps-Dh50egLT.js";

import { t as theme_default } from "./theme-CB9u0IsU.js";

import { n as setGlobalBackground } from "./state-CoFTe403.js";

var BASELINE_MODES = [ "optical", "cap", "x", "linebox" ];

function getActiveBaseline() {
    const param = new URLSearchParams(window.location.search).get("textBaseline");
    if (param === "optical" || param === "cap" || param === "x" || param === "linebox") return param;
    return "optical";
}

var PageTitle = {
    fontSize: 42,
    fontWeight: "bold",
    color: theme_default.textPrimary
};

var SectionTitle = {
    fontSize: 26,
    fontWeight: "bold",
    color: theme_default.textPrimary
};

var SectionNote = {
    fontSize: 18,
    color: theme_default.textSecondary,
    contain: "width",
    width: 1600,
    lineHeight: 24
};

var BoxBase = {
    color: 0,
    border: {
        color: theme_default.color.grey,
        width: 1
    }
};

var Caption = {
    fontSize: 17,
    color: theme_default.textSecondary,
    contain: "width"
};

function CenterLine(props) {
    return (() => {
        var _el$ = createElement("view");
        setProp(_el$, "flexItem", false);
        setProp(_el$, "x", 0);
        setProp(_el$, "height", 1);
        effect(_p$ => {
            var _v$ = props.y, _v$2 = props.width, _v$3 = theme_default.color.red;
            _v$ !== _p$.e && (_p$.e = setProp(_el$, "y", _v$, _p$.e));
            _v$2 !== _p$.t && (_p$.t = setProp(_el$, "width", _v$2, _p$.t));
            _v$3 !== _p$.a && (_p$.a = setProp(_el$, "color", _v$3, _p$.a));
            return _p$;
        }, {
            e: void 0,
            t: void 0,
            a: void 0
        });
        return _el$;
    })();
}

function Section1(props) {
    const boxW = 240;
    const boxH = 80;
    const wrapperH = 140;
    return (() => {
        var _el$2 = createElement("view"), _el$3 = createElement("text"), _el$5 = createElement("text"), _el$7 = createElement("view");
        insertNode(_el$2, _el$3);
        insertNode(_el$2, _el$5);
        insertNode(_el$2, _el$7);
        setProp(_el$2, "y", 80);
        setProp(_el$2, "x", 200);
        setProp(_el$2, "autofocus", true);
        insertNode(_el$3, createTextNode(`1. Per-line anchor: textBaselineMode`));
        setProp(_el$3, "style", SectionTitle);
        insertNode(_el$5, createTextNode(`Global renderer setting. Default is 'optical'. Reload with ?textBaseline=optical | cap | x | linebox to compare.`));
        setProp(_el$5, "style", SectionNote);
        setProp(_el$5, "y", 38);
        setProp(_el$7, "y", 80);
        setProp(_el$7, "display", "flex");
        setProp(_el$7, "flexDirection", "row");
        setProp(_el$7, "gap", 40);
        insert(_el$7, createComponent(For, {
            each: BASELINE_MODES,
            children: mode => {
                const isActive = mode === props.active;
                return (() => {
                    var _el$8 = createElement("view"), _el$9 = createElement("view"), _el$0 = createElement("text");
                    insertNode(_el$8, _el$9);
                    insertNode(_el$8, _el$0);
                    setProp(_el$8, "width", boxW);
                    setProp(_el$8, "height", wrapperH);
                    spread(_el$9, mergeProps(BoxBase, {
                        width: boxW,
                        height: boxH,
                        get border() {
                            return {
                                color: isActive ? theme_default.color.blue : theme_default.color.grey,
                                width: isActive ? 2 : 1
                            };
                        }
                    }), true);
                    insert(_el$9, isActive ? (() => {
                        var _el$1 = createElement("text");
                        insertNode(_el$1, createTextNode(`Button`));
                        setProp(_el$1, "fontSize", 40);
                        setProp(_el$1, "lineHeight", boxH);
                        setProp(_el$1, "centerX", true);
                        effect(_$p => setProp(_el$1, "color", theme_default.textPrimary, _$p));
                        return _el$1;
                    })() : (() => {
                        var _el$11 = createElement("text");
                        insertNode(_el$11, createTextNode(`reload to view`));
                        setProp(_el$11, "x", boxW / 2);
                        setProp(_el$11, "mountX", .5);
                        setProp(_el$11, "fontSize", 18);
                        setProp(_el$11, "lineHeight", boxH);
                        effect(_$p => setProp(_el$11, "color", theme_default.textSecondary, _$p));
                        return _el$11;
                    })(), null);
                    insert(_el$9, createComponent(CenterLine, {
                        y: boxH / 2,
                        width: boxW
                    }), null);
                    setProp(_el$0, "style", Caption);
                    setProp(_el$0, "y", 94);
                    insert(_el$0, isActive ? `'${mode}' (active)` : `'${mode}'`);
                    effect(_$p => setProp(_el$0, "color", isActive ? theme_default.color.blue : theme_default.textSecondary, _$p));
                    return _el$8;
                })();
            }
        }));
        return _el$2;
    })();
}

function Section2() {
    const aligns = [ "top", "middle", "bottom" ];
    const boxW = 240;
    const boxH = 140;
    return (() => {
        var _el$13 = createElement("view"), _el$14 = createElement("text"), _el$16 = createElement("text"), _el$18 = createElement("view");
        insertNode(_el$13, _el$14);
        insertNode(_el$13, _el$16);
        insertNode(_el$13, _el$18);
        setProp(_el$13, "y", 330);
        setProp(_el$13, "x", 200);
        insertNode(_el$14, createTextNode(`2. verticalAlign with maxHeight`));
        setProp(_el$14, "style", SectionTitle);
        insertNode(_el$16, createTextNode(`Same text in 240x140 boxes. Red line marks the visual center.`));
        setProp(_el$16, "style", SectionNote);
        setProp(_el$16, "y", 38);
        setProp(_el$18, "y", 80);
        setProp(_el$18, "display", "flex");
        setProp(_el$18, "flexDirection", "row");
        setProp(_el$18, "gap", 40);
        insert(_el$18, createComponent(For, {
            each: aligns,
            children: align => (() => {
                var _el$19 = createElement("view"), _el$20 = createElement("view"), _el$21 = createElement("text"), _el$23 = createElement("text"), _el$24 = createTextNode(`verticalAlign: '`), _el$25 = createTextNode(`'`);
                insertNode(_el$19, _el$20);
                insertNode(_el$19, _el$23);
                setProp(_el$19, "width", boxW);
                setProp(_el$19, "height", 180);
                insertNode(_el$20, _el$21);
                spread(_el$20, mergeProps(BoxBase, {
                    width: boxW,
                    height: boxH
                }), true);
                insertNode(_el$21, createTextNode(`Centered`));
                setProp(_el$21, "width", boxW);
                setProp(_el$21, "maxHeight", boxH);
                setProp(_el$21, "fontSize", 32);
                setProp(_el$21, "lineHeight", 46);
                setProp(_el$21, "verticalAlign", align);
                setProp(_el$21, "textAlign", "center");
                insert(_el$20, createComponent(CenterLine, {
                    y: boxH / 2,
                    width: boxW
                }), null);
                insertNode(_el$23, _el$24);
                insertNode(_el$23, _el$25);
                setProp(_el$23, "style", Caption);
                setProp(_el$23, "y", 152);
                insert(_el$23, align, _el$25);
                effect(_$p => setProp(_el$21, "color", theme_default.textPrimary, _$p));
                return _el$19;
            })()
        }));
        return _el$13;
    })();
}

function Section3() {
    const letters = [ {
        ch: "A",
        size: 44
    }, {
        ch: "B",
        size: 80
    }, {
        ch: "C",
        size: 120
    } ];
    const rowHeight = 130;
    const labelW = 290;
    const boxW = 520;
    const captionX = 840;
    const Row = props => (() => {
        var _el$26 = createElement("view"), _el$27 = createElement("text"), _el$28 = createElement("view"), _el$29 = createElement("text");
        insertNode(_el$26, _el$27);
        insertNode(_el$26, _el$28);
        insertNode(_el$26, _el$29);
        setProp(_el$26, "height", rowHeight);
        setProp(_el$27, "x", 0);
        setProp(_el$27, "y", rowHeight / 2);
        setProp(_el$27, "mountY", .5);
        setProp(_el$27, "fontSize", 20);
        setProp(_el$27, "fontWeight", "bold");
        setProp(_el$27, "contain", "width");
        setProp(_el$27, "width", labelW);
        insert(_el$27, () => props.label);
        spread(_el$28, mergeProps(BoxBase, {
            x: labelW,
            width: boxW,
            height: rowHeight,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "spaceEvenly"
        }), true);
        insert(_el$28, createComponent(For, {
            each: letters,
            children: l => props.useLineHeight ? (() => {
                var _el$30 = createElement("text");
                setProp(_el$30, "lineHeight", rowHeight);
                insert(_el$30, () => l.ch);
                effect(_p$ => {
                    var _v$7 = l.size, _v$8 = theme_default.textPrimary;
                    _v$7 !== _p$.e && (_p$.e = setProp(_el$30, "fontSize", _v$7, _p$.e));
                    _v$8 !== _p$.t && (_p$.t = setProp(_el$30, "color", _v$8, _p$.t));
                    return _p$;
                }, {
                    e: void 0,
                    t: void 0
                });
                return _el$30;
            })() : (() => {
                var _el$31 = createElement("text");
                insert(_el$31, () => l.ch);
                effect(_p$ => {
                    var _v$9 = l.size, _v$0 = theme_default.textPrimary;
                    _v$9 !== _p$.e && (_p$.e = setProp(_el$31, "fontSize", _v$9, _p$.e));
                    _v$0 !== _p$.t && (_p$.t = setProp(_el$31, "color", _v$0, _p$.t));
                    return _p$;
                }, {
                    e: void 0,
                    t: void 0
                });
                return _el$31;
            })()
        }), null);
        insert(_el$28, createComponent(CenterLine, {
            y: rowHeight / 2,
            width: boxW
        }), null);
        setProp(_el$29, "x", captionX);
        setProp(_el$29, "y", rowHeight / 2);
        setProp(_el$29, "mountY", .5);
        insert(_el$29, () => props.caption);
        effect(_p$ => {
            var _v$4 = props.y, _v$5 = theme_default.textPrimary, _v$6 = {
                ...Caption,
                width: 460
            };
            _v$4 !== _p$.e && (_p$.e = setProp(_el$26, "y", _v$4, _p$.e));
            _v$5 !== _p$.t && (_p$.t = setProp(_el$27, "color", _v$5, _p$.t));
            _v$6 !== _p$.a && (_p$.a = setProp(_el$29, "style", _v$6, _p$.a));
            return _p$;
        }, {
            e: void 0,
            t: void 0,
            a: void 0
        });
        return _el$26;
    })();
    return (() => {
        var _el$32 = createElement("view"), _el$33 = createElement("text"), _el$35 = createElement("text");
        insertNode(_el$32, _el$33);
        insertNode(_el$32, _el$35);
        setProp(_el$32, "y", 660);
        setProp(_el$32, "x", 200);
        insertNode(_el$33, createTextNode(`3. alignItems vs lineHeight`));
        setProp(_el$33, "style", SectionTitle);
        insertNode(_el$35, createTextNode(`Both rows contain A/B/C at sizes 44/80/120 inside a flex row with alignItems: 'center'. Watch the cap-tops: only Row B aligns them.`));
        setProp(_el$35, "style", SectionNote);
        setProp(_el$35, "y", 38);
        insert(_el$32, createComponent(Row, {
            y: 80,
            label: "Row A: fontSize only",
            caption: "Flex centers each node's bounding box. Cap-tops do not align.",
            useLineHeight: false
        }), null);
        insert(_el$32, createComponent(Row, {
            y: 230,
            label: `Row B: lineHeight ${rowHeight}`,
            caption: `Each line-box matches the row height; textBaselineMode: 'cap' cap-centers each glyph. Cap-tops align.`,
            useLineHeight: true
        }), null);
        return _el$32;
    })();
}

var TextCenteringPage = () => {
    const active = getActiveBaseline();
    onMount(() => {
        setGlobalBackground(theme_default.backgroundDark);
    });
    return [ (() => {
        var _el$37 = createElement("text");
        insertNode(_el$37, createTextNode(`Text Centering`));
        setProp(_el$37, "style", PageTitle);
        setProp(_el$37, "x", 200);
        setProp(_el$37, "y", 20);
        return _el$37;
    })(), createComponent(Section1, {
        active: active
    }), createComponent(Section2, {}), createComponent(Section3, {}), (() => {
        var _el$39 = createElement("text");
        insertNode(_el$39, createTextNode(`Note: verticalAlign no longer requires maxHeight - it resolves against the parent's height. For single-line text, setting lineHeight to the container height is usually all you need.`));
        setProp(_el$39, "x", 200);
        setProp(_el$39, "y", 1030);
        effect(_$p => setProp(_el$39, "style", {
            ...Caption,
            width: 1600
        }, _$p));
        return _el$39;
    })() ];
};

export { TextCenteringPage as default };