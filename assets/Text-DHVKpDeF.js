import { h as hexColor, o as onMount, s as setGlobalBackground, c as createElement, n as insertNode, a as setProp, p as createTextNode } from "./index-BWNx3kiE.js";

const TextPage = () => {
    const OverviewContainer = {
        width: 900,
        height: 500,
        y: 350,
        x: 150,
        gap: 25,
        display: "flex",
        flexDirection: "column",
        justifyContent: "flexStart",
        color: hexColor("00000000")
    };
    const SublineContainer = {
        width: 900,
        gap: 6,
        display: "flex",
        flexDirection: "row",
        justifyContent: "flexStart",
        color: 0
    };
    const Title = {
        fontSize: 42,
        fontWeight: "bold"
    };
    const SubTitle = {
        fontSize: 38
    };
    const Overview = {
        width: OverviewContainer.width,
        fontSize: 26,
        contain: "width"
    };
    const Subline = {
        fontSize: 26,
        fontWeight: "regular"
    };
    onMount(() => {
        setGlobalBackground(255);
    });
    return [ (() => {
        var _el$ = createElement("view"), _el$2 = createElement("text"), _el$4 = createElement("text"), _el$6 = createElement("text"), _el$8 = createElement("view"), _el$9 = createElement("text"), _el$1 = createElement("view"), _el$10 = createElement("text");
        insertNode(_el$, _el$2);
        insertNode(_el$, _el$4);
        insertNode(_el$, _el$6);
        insertNode(_el$, _el$8);
        setProp(_el$, "autofocus", true);
        setProp(_el$, "style", OverviewContainer);
        insertNode(_el$2, createTextNode("Title of the Page"));
        setProp(_el$2, "style", Title);
        insertNode(_el$4, createTextNode("Tag line for the page"));
        setProp(_el$4, "style", SubTitle);
        insertNode(_el$6, createTextNode("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel tempor tellus. Sed eu leo purus. Vestibulum sollicitudin eget tellus a varius. Phasellus est turpis, volutpat sed blandit sit amet, rutrum sit amet mauris. In dignissim elit orci, a sollicitudin ipsum faucibus et. Quisque vel quam rutrum, faucibus augue sed, scelerisque nunc."));
        setProp(_el$6, "style", Overview);
        insertNode(_el$8, _el$9);
        insertNode(_el$8, _el$1);
        insertNode(_el$8, _el$10);
        setProp(_el$8, "style", SublineContainer);
        insertNode(_el$9, createTextNode("Subline Text"));
        setProp(_el$9, "style", Subline);
        setProp(_el$1, "width", 28);
        setProp(_el$1, "height", 28);
        setProp(_el$1, "src", "./assets/rt-popcorn.png");
        insertNode(_el$10, createTextNode("More Text"));
        setProp(_el$10, "style", Subline);
        return _el$;
    })(), (() => {
        var _el$12 = createElement("view"), _el$13 = createElement("text"), _el$15 = createElement("view"), _el$16 = createElement("view"), _el$17 = createElement("view");
        insertNode(_el$12, _el$13);
        insertNode(_el$12, _el$15);
        insertNode(_el$12, _el$16);
        insertNode(_el$12, _el$17);
        setProp(_el$12, "width", 600);
        setProp(_el$12, "display", "flex");
        setProp(_el$12, "gap", 20);
        setProp(_el$12, "height", 42);
        setProp(_el$12, "y", 200);
        setProp(_el$12, "x", 150);
        insertNode(_el$13, createTextNode("Flex Grow"));
        setProp(_el$13, "style", Title);
        setProp(_el$15, "flexGrow", 1);
        setProp(_el$15, "height", 4);
        setProp(_el$15, "y", 19);
        setProp(_el$15, "color", 4281336063);
        setProp(_el$16, "flexGrow", 3);
        setProp(_el$16, "height", 4);
        setProp(_el$16, "y", 19);
        setProp(_el$16, "color", 4281401343);
        setProp(_el$17, "flexGrow", 1);
        setProp(_el$17, "height", 4);
        setProp(_el$17, "y", 19);
        setProp(_el$17, "color", 4005178623);
        return _el$12;
    })() ];
};

export { TextPage as default };
//# sourceMappingURL=Text-DHVKpDeF.js.map
