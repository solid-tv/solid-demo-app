import { a as createElement, i as createComponent, l as insert, m as setProp, s as createTextNode, u as insertNode } from "./render-LD3r0MG3.js";

import { n as setGlobalBackground } from "./state-DfaFWFcw.js";

var TagsPage = () => {
    setGlobalBackground(286331391);
    const watchIconTextStyle = {
        fontWeight: 400,
        fontSize: 22,
        lineHeight: 40,
        y: 1
    }, ActionTag = () => {
        return _el$ = createElement("view"), _el$2 = createElement("text"), insertNode(_el$, _el$2), 
        setProp(_el$, "color", 293806847), setProp(_el$, "borderRadius", 8), setProp(_el$, "display", "flex"), 
        setProp(_el$, "padding", [ 0, 8 ]), insertNode(_el$2, createTextNode("Action")), 
        setProp(_el$2, "style", watchIconTextStyle), _el$;
        var _el$, _el$2;
    }, ComedyTag = () => {
        return _el$4 = createElement("view"), _el$5 = createElement("text"), insertNode(_el$4, _el$5), 
        setProp(_el$4, "color", 621793023), setProp(_el$4, "borderRadius", 8), setProp(_el$4, "display", "flex"), 
        setProp(_el$4, "padding", [ 0, 8 ]), insertNode(_el$5, createTextNode("Comedy")), 
        setProp(_el$5, "style", watchIconTextStyle), _el$4;
        var _el$4, _el$5;
    }, DramaTag = () => {
        return _el$7 = createElement("view"), _el$8 = createElement("text"), insertNode(_el$7, _el$8), 
        setProp(_el$7, "color", 4278190335), setProp(_el$7, "borderRadius", 8), setProp(_el$7, "display", "flex"), 
        setProp(_el$7, "padding", [ 0, 8 ]), insertNode(_el$8, createTextNode("Drama")), 
        setProp(_el$8, "style", watchIconTextStyle), _el$7;
        var _el$7, _el$8;
    }, NewEpisodeTag = () => {
        return _el$0 = createElement("view"), _el$1 = createElement("text"), insertNode(_el$0, _el$1), 
        setProp(_el$0, "color", 4294967295), setProp(_el$0, "borderRadius", 8), setProp(_el$0, "display", "flex"), 
        setProp(_el$0, "padding", [ 0, 8 ]), setProp(_el$0, "effects", {
            rounded: {
                radius: [ 10, 0, 10, 0 ]
            }
        }), insertNode(_el$1, createTextNode("New Episode")), setProp(_el$1, "style", watchIconTextStyle), 
        setProp(_el$1, "color", 255), setProp(_el$1, "fontWeight", 400), _el$0;
        var _el$0, _el$1;
    };
    return [ (_el$11 = createElement("text"), insertNode(_el$11, createTextNode("Tags Page")), 
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
    var _el$13, _el$11;
};

export { TagsPage as default };