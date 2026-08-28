import { $ as onMount, a as createElement, l as insert, m as setProp, q as createSignal, s as createTextNode, u as insertNode } from "./render-Dr57z7L3.js";

import { n as setGlobalBackground } from "./state-guayLGTd.js";

var knownVersions = [ "Current", 300, 316, 320, 321, 322, 323, 324, 325, 326, 330, 331, 340 ];

var RendererVersionsPage = () => {
    const [version, setVersion] = createSignal("Current");
    onMount(() => {
        setGlobalBackground(255);
    });
    const onRight = () => {
        const current = version();
        const index = knownVersions.indexOf(current);
        if (index >= 0 && index < knownVersions.length - 1) setVersion(knownVersions[index + 1]); else setVersion(knownVersions[0]);
        return true;
    };
    const onLeft = () => {
        const current = version();
        const index = knownVersions.indexOf(current);
        if (index > 0) setVersion(knownVersions[index - 1]); else setVersion(knownVersions[knownVersions.length - 1]);
        return true;
    };
    const onUp = () => {
        setVersion(v => v === "Current" ? 341 : v + 1);
        return true;
    };
    const onDown = () => {
        setVersion(v => v === "Current" ? 339 : Math.max(0, v - 1));
        return true;
    };
    const onEnter = () => {
        if (version() === "Current") window.location.hash = "#/benchmark"; else window.location.href = `https://solid-tv.github.io/solid-demo-app/${version()}/#/benchmark`;
        return true;
    };
    const Container = {
        width: 1e3,
        height: 500,
        x: 460,
        y: 200,
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    };
    const Title = {
        fontSize: 48,
        fontWeight: "bold",
        marginBottom: 40
    };
    const VersionText = {
        fontSize: 160,
        fontWeight: "bold",
        color: 14745599,
        marginBottom: 40
    };
    const Instructions = {
        fontSize: 28,
        color: 3149642751,
        textAlign: "center",
        lineHeight: 40,
        marginBottom: 10
    };
    return (() => {
        var _el$ = createElement("view"), _el$2 = createElement("text"), _el$4 = createElement("text"), _el$5 = createElement("text"), _el$7 = createElement("text"), _el$9 = createElement("text");
        insertNode(_el$, _el$2);
        insertNode(_el$, _el$4);
        insertNode(_el$, _el$5);
        insertNode(_el$, _el$7);
        insertNode(_el$, _el$9);
        setProp(_el$, "style", Container);
        setProp(_el$, "autofocus", true);
        setProp(_el$, "onRight", onRight);
        setProp(_el$, "onLeft", onLeft);
        setProp(_el$, "onUp", onUp);
        setProp(_el$, "onDown", onDown);
        setProp(_el$, "onEnter", onEnter);
        insertNode(_el$2, createTextNode(`Benchmark - Select Renderer Version To Run`));
        setProp(_el$2, "style", Title);
        setProp(_el$4, "style", VersionText);
        insert(_el$4, () => version().toString());
        insertNode(_el$5, createTextNode(`Use LEFT / RIGHT arrows to select a known version`));
        setProp(_el$5, "style", Instructions);
        insertNode(_el$7, createTextNode(`Use UP / DOWN arrows to select a custom number`));
        setProp(_el$7, "style", Instructions);
        insertNode(_el$9, createTextNode(`Press ENTER to launch benchmark for this version`));
        setProp(_el$9, "style", Instructions);
        return _el$;
    })();
};

export { RendererVersionsPage as default };
//# sourceMappingURL=RendererVersions-D0Z_mG-n.js.map