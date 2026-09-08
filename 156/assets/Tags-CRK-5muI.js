import { $ as onCleanup, J as createSignal, a as createElement, c as effect, f as mergeProps, g as spread, h as setProp, i as createComponent, l as insert, p as rootNode, s as createTextNode, u as insertNode } from "./render-UQXSDH2t.js";

import { n as setGlobalBackground } from "./state-B_5okeWg.js";

function createTag(children) {
    const [texture, setTexture] = createSignal(null), Tag = (_el$ = createElement("view"), 
    setProp(_el$, "display", "flex"), setProp(_el$, "onLayout", n => {
        n.preFlexwidth && n.width !== n.preFlexwidth && (n.rtt = !0, setTimeout(() => setTexture(n.texture), 1));
    }), setProp(_el$, "parent", rootNode), setProp(_el$, "textureOptions", {
        preventCleanup: !0
    }), insert(_el$, children), effect(_p$ => {
        var _v$ = rootNode.w - 1, _v$2 = rootNode.h - 1;
        return _v$ !== _p$.e && (_p$.e = setProp(_el$, "x", _v$, _p$.e)), _v$2 !== _p$.t && (_p$.t = setProp(_el$, "y", _v$2, _p$.t)), 
        _p$;
    }, {
        e: void 0,
        t: void 0
    }), _el$);
    var _el$;
    Tag.render(!1);
    const TagComponent = props => {
        return _el$2 = createElement("view"), setProp(_el$2, "color", 4294967295), setProp(_el$2, "autosize", !0), 
        spread(_el$2, mergeProps(props, {
            get texture() {
                return texture();
            }
        }), !1), _el$2;
        var _el$2;
    };
    return TagComponent.destroy = () => Tag.destroy(), TagComponent;
}

var TagsPage = () => {
    setGlobalBackground(286331391);
    const watchIconTextStyle = {
        fontWeight: 400,
        fontSize: 22,
        lineHeight: 40,
        y: 1
    }, ActionTag = createTag((_el$ = createElement("view"), _el$2 = createElement("text"), 
    insertNode(_el$, _el$2), setProp(_el$, "color", 293806847), setProp(_el$, "borderRadius", 8), 
    setProp(_el$, "display", "flex"), setProp(_el$, "padding", [ 0, 8 ]), insertNode(_el$2, createTextNode("Action")), 
    setProp(_el$2, "style", watchIconTextStyle), _el$));
    var _el$, _el$2;
    const ComedyTag = createTag((_el$4 = createElement("view"), _el$5 = createElement("text"), 
    insertNode(_el$4, _el$5), setProp(_el$4, "color", 621793023), setProp(_el$4, "borderRadius", 8), 
    setProp(_el$4, "display", "flex"), setProp(_el$4, "padding", [ 0, 8 ]), insertNode(_el$5, createTextNode("Comedy")), 
    setProp(_el$5, "style", watchIconTextStyle), _el$4));
    var _el$4, _el$5;
    const DramaTag = createTag((_el$7 = createElement("view"), _el$8 = createElement("text"), 
    insertNode(_el$7, _el$8), setProp(_el$7, "color", 4278190335), setProp(_el$7, "borderRadius", 8), 
    setProp(_el$7, "display", "flex"), setProp(_el$7, "padding", [ 0, 8 ]), insertNode(_el$8, createTextNode("Drama")), 
    setProp(_el$8, "style", watchIconTextStyle), _el$7));
    var _el$7, _el$8;
    const NewEpisodeTag = createTag((_el$0 = createElement("view"), _el$1 = createElement("text"), 
    insertNode(_el$0, _el$1), setProp(_el$0, "color", 4294967295), setProp(_el$0, "borderRadius", 8), 
    setProp(_el$0, "display", "flex"), setProp(_el$0, "padding", [ 0, 8 ]), setProp(_el$0, "effects", {
        rounded: {
            radius: [ 10, 0, 10, 0 ]
        }
    }), insertNode(_el$1, createTextNode("New Episode")), setProp(_el$1, "style", watchIconTextStyle), 
    setProp(_el$1, "color", 255), setProp(_el$1, "fontWeight", 400), _el$0));
    var _el$0, _el$1, _el$13, _el$11;
    return onCleanup(() => {
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
};

export { TagsPage as default };