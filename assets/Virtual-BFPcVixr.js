import { $ as onMount, i as createComponent } from "./render-RHsi_cL1.js";

import { t as LazyColumn } from "./Lazy-CE4stdmC.js";

import { c as TitleRow } from "./components-B6-PChE4.js";

import { r as styles_default } from "./styles-BcDKugwt.js";

import { n as setGlobalBackground } from "./state-DfqXE9aC.js";

var VirtualPage = props => {
    var _rows$;
    onMount(() => setGlobalBackground(858993663));
    const scrolls = [ "auto", "edge", "always" ];
    const rows = [ ...props.data.rows.filter(item => item.type !== "Hero") ];
    rows.push({
        type: ((_rows$ = rows[0]) == null ? void 0 : _rows$.type) || "Poster",
        items: () => {
            var _rows$2;
            return (((_rows$2 = rows[0]) == null ? void 0 : _rows$2.items()) || []).slice(0, 3);
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
            return styles_default.Column;
        },
        children: (row, index) => createComponent(TitleRow, {
            get row() {
                return row();
            },
            get scroll() {
                return scrolls[index % 3];
            },
            get title() {
                return scrolls[index % 3] + " " + (index >= 3 ? "wrap" : "") + (row().selected !== void 0 ? ` (selected = ${row().selected})` : "");
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