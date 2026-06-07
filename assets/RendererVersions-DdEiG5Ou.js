import { b as createSignal, o as onMount, s as setGlobalBackground, c as createElement, n as insertNode, a as setProp, p as createTextNode, k as insert } from "./index-BgTe4_2v.js";

const knownVersions = [ 300, 316, 320, 321, 322, 323, 324, 325, 326, 330, 331, 340 ];

const RendererVersionsPage = () => {
    const [version, setVersion] = createSignal(340);
    onMount(() => {
        setGlobalBackground(255);
    });
    const onRight = () => {
        const current = version();
        const index = knownVersions.indexOf(current);
        if (index >= 0 && index < knownVersions.length - 1) {
            setVersion(knownVersions[index + 1]);
        } else {
            setVersion(knownVersions[0]);
        }
        return true;
    };
    const onLeft = () => {
        const current = version();
        const index = knownVersions.indexOf(current);
        if (index > 0) {
            setVersion(knownVersions[index - 1]);
        } else {
            setVersion(knownVersions[knownVersions.length - 1]);
        }
        return true;
    };
    const onUp = () => {
        setVersion(v => v + 1);
        return true;
    };
    const onDown = () => {
        setVersion(v => Math.max(0, v - 1));
        return true;
    };
    const onEnter = () => {
        window.location.href = "https://solid-tv.github.io/solid-demo-app/".concat(version(), "/#/benchmark");
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
        insertNode(_el$2, createTextNode("Benchmark - Select Renderer Version To Run"));
        setProp(_el$2, "style", Title);
        setProp(_el$4, "style", VersionText);
        insert(_el$4, () => version().toString());
        insertNode(_el$5, createTextNode("Use LEFT / RIGHT arrows to select a known version"));
        setProp(_el$5, "style", Instructions);
        insertNode(_el$7, createTextNode("Use UP / DOWN arrows to select a custom number"));
        setProp(_el$7, "style", Instructions);
        insertNode(_el$9, createTextNode("Press ENTER to launch benchmark for this version"));
        setProp(_el$9, "style", Instructions);
        return _el$;
    })();
};

export { RendererVersionsPage as default };
