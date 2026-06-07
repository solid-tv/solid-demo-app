import { b as createSignal, c as createElement, a as setProp, a7 as rootNode, k as insert, m as effect, A as spread, q as mergeProps, s as setGlobalBackground, n as insertNode, p as createTextNode, U as onCleanup, l as createComponent } from "./index-DRD19mac.js";

function createTag(children) {
    const [texture, setTexture] = createSignal(null);
    const Tag = (() => {
        var _el$ = createElement("view");
        setProp(_el$, "display", "flex");
        setProp(_el$, "onLayout", n => {
            if (n.preFlexwidth && n.width !== n.preFlexwidth) {
                n.rtt = true;
                setTimeout(() => setTexture(n.texture), 1);
            }
        });
        setProp(_el$, "parent", rootNode);
        setProp(_el$, "textureOptions", {
            preventCleanup: true
        });
        insert(_el$, children);
        effect(_p$ => {
            var _v$ = rootNode.w - 1, _v$2 = rootNode.h - 1;
            _v$ !== _p$.e && (_p$.e = setProp(_el$, "x", _v$, _p$.e));
            _v$2 !== _p$.t && (_p$.t = setProp(_el$, "y", _v$2, _p$.t));
            return _p$;
        }, {
            e: void 0,
            t: void 0
        });
        return _el$;
    })();
    Tag.render(false);
    const TagComponent = props => (() => {
        var _el$2 = createElement("view");
        setProp(_el$2, "color", 4294967295);
        setProp(_el$2, "autosize", true);
        spread(_el$2, mergeProps(props, {
            get texture() {
                return texture();
            }
        }), false);
        return _el$2;
    })();
    TagComponent.destroy = () => Tag.destroy();
    return TagComponent;
}

const TagsPage = () => {
    setGlobalBackground(286331391);
    const watchIconTextStyle = {
        fontWeight: 400,
        fontSize: 22,
        lineHeight: 40,
        y: 1
    };
    const ActionTag = createTag((() => {
        var _el$ = createElement("view"), _el$2 = createElement("text");
        insertNode(_el$, _el$2);
        setProp(_el$, "color", 293806847);
        setProp(_el$, "borderRadius", 8);
        setProp(_el$, "display", "flex");
        setProp(_el$, "padding", [ 0, 8 ]);
        insertNode(_el$2, createTextNode("Action"));
        setProp(_el$2, "style", watchIconTextStyle);
        return _el$;
    })());
    const ComedyTag = createTag((() => {
        var _el$4 = createElement("view"), _el$5 = createElement("text");
        insertNode(_el$4, _el$5);
        setProp(_el$4, "color", 621793023);
        setProp(_el$4, "borderRadius", 8);
        setProp(_el$4, "display", "flex");
        setProp(_el$4, "padding", [ 0, 8 ]);
        insertNode(_el$5, createTextNode("Comedy"));
        setProp(_el$5, "style", watchIconTextStyle);
        return _el$4;
    })());
    const DramaTag = createTag((() => {
        var _el$7 = createElement("view"), _el$8 = createElement("text");
        insertNode(_el$7, _el$8);
        setProp(_el$7, "color", 4278190335);
        setProp(_el$7, "borderRadius", 8);
        setProp(_el$7, "display", "flex");
        setProp(_el$7, "padding", [ 0, 8 ]);
        insertNode(_el$8, createTextNode("Drama"));
        setProp(_el$8, "style", watchIconTextStyle);
        return _el$7;
    })());
    const NewEpisodeTag = createTag((() => {
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
    })());
    onCleanup(() => {
        ActionTag.destroy();
        ComedyTag.destroy();
        DramaTag.destroy();
        NewEpisodeTag.destroy();
    });
    return [ (() => {
        var _el$11 = createElement("text");
        insertNode(_el$11, createTextNode("Tags Page"));
        setProp(_el$11, "x", 100);
        setProp(_el$11, "y", 100);
        setProp(_el$11, "fontSize", 50);
        setProp(_el$11, "color", 4294967295);
        return _el$11;
    })(), (() => {
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
    })() ];
};

export { TagsPage as default };
//# sourceMappingURL=Tags-DPt5bFaM.js.map
