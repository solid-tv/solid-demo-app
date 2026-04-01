import { o as onMount, s as setGlobalBackground, c as createComponent, a3 as LazyColumn, a4 as TitleRow, J as styles } from "./index-C2B7iw49.js";

const VirtualPage = props => {
    var _a;
    onMount(() => setGlobalBackground(858993663));
    const scrolls = [ "auto", "edge", "always" ];
    const rows = [ ...props.data.rows.filter(item => item.type !== "Hero") ];
    rows.push({
        type: ((_a = rows[0]) == null ? void 0 : _a.type) || "Poster",
        items: () => {
            var _a2;
            return (((_a2 = rows[0]) == null ? void 0 : _a2.items()) || []).slice(0, 3);
        },
        selected: 3
    });
    return createComponent(LazyColumn, {
        y: 50,
        upCount: 3,
        bufferSize: 0,
        each: rows,
        id: "BrowseColumn",
        get autofocus() {
            return props.data.rows[0].items();
        },
        gap: 30,
        transition: {
            y: {
                duration: 300,
                easing: "ease-in-out"
            }
        },
        get style() {
            return styles.Column;
        },
        children: (row, index) => createComponent(TitleRow, {
            get row() {
                return row();
            },
            get scroll() {
                return scrolls[index % 3];
            },
            get title() {
                return scrolls[index % 3] + " " + (index >= 3 ? "wrap" : "") + (row().selected !== void 0 ? " (selected = ".concat(row().selected, ")") : "");
            },
            height: 330,
            get items() {
                return row().items();
            },
            wrap: index >= 3,
            get selected() {
                return row().selected;
            }
        })
    });
};

export { VirtualPage as default };
