import { a as createSignal, o as onMount, s as setGlobalBackground, c as createComponent, V as View, T as Text } from "./index-Dr3lQcZR.js";

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
    return createComponent(View, {
        style: Container,
        autofocus: true,
        onRight: onRight,
        onLeft: onLeft,
        onUp: onUp,
        onDown: onDown,
        onEnter: onEnter,
        get children() {
            return [ createComponent(Text, {
                style: Title,
                children: "Benchmark - Select Renderer Version To Run"
            }), createComponent(Text, {
                style: VersionText,
                get children() {
                    return version().toString();
                }
            }), createComponent(Text, {
                style: Instructions,
                children: "Use LEFT / RIGHT arrows to select a known version"
            }), createComponent(Text, {
                style: Instructions,
                children: "Use UP / DOWN arrows to select a custom number"
            }), createComponent(Text, {
                style: Instructions,
                children: "Press ENTER to launch benchmark for this version"
            }) ];
        }
    });
};

export { RendererVersionsPage as default };
//# sourceMappingURL=RendererVersions-mSBcicfj.js.map
