import { $ as api, a0 as getImageUrl, a1 as convertItemsToTiles, a2 as useParams, u as useNavigate, d as createResource, o as onMount, s as setGlobalBackground, l as createComponent, S as Show, c as createElement, a as setProp, m as effect, n as insertNode, k as insert, O as styles, t as theme, C as Column, p as createTextNode, _ as TileRow, Q as assertTruthy } from "./index-DzFj8BYD.js";

function getCredits({id: id}) {
    return api.get("/person/".concat(id, "/combined_credits")).then(({cast: cast}) => convertItemsToTiles(cast.slice(0, 7)));
}

function getInfo({id: id}) {
    return api.get("/person/".concat(id)).then(data => ({
        backgroundImage: getImageUrl(data.profile_path, "original"),
        heroContent: {
            title: data.title || data.name,
            description: data.biography
        },
        ...data
    }));
}

const People = () => {
    const params = useParams();
    const navigate = useNavigate();
    const [data] = createResource(() => ({
        ...params
    }), getInfo);
    const [credits] = createResource(() => ({
        ...params
    }), getCredits);
    const Backdrop = {
        color: 255,
        alpha: .8,
        width: 800,
        height: 440,
        x: 130,
        y: 180,
        borderRadius: 30
    };
    function onEnter() {
        let entity = this.children[this.selected || 0];
        assertTruthy(entity && entity.href);
        navigate(entity.href);
    }
    onMount(() => {
        setGlobalBackground(858993663);
    });
    return createComponent(Show, {
        get when() {
            return data();
        },
        keyed: true,
        get children() {
            return [ (() => {
                var _el$ = createElement("view");
                setProp(_el$, "height", 1e3);
                setProp(_el$, "width", 1e3);
                setProp(_el$, "textureOptions", {
                    resizeMode: {
                        type: "contain"
                    }
                });
                setProp(_el$, "y", 40);
                setProp(_el$, "right", 400);
                effect(_$p => setProp(_el$, "src", data().backgroundImage, _$p));
                return _el$;
            })(), (() => {
                var _el$2 = createElement("view"), _el$3 = createElement("text"), _el$4 = createElement("text");
                insertNode(_el$2, _el$3);
                insertNode(_el$2, _el$4);
                setProp(_el$2, "x", 150);
                setProp(_el$2, "y", 200);
                setProp(_el$2, "width", 800);
                setProp(_el$2, "gap", 24);
                setProp(_el$2, "zIndex", 3);
                setProp(_el$3, "contain", "width");
                setProp(_el$3, "fontFamily", "Roboto");
                insert(_el$3, () => data().name);
                setProp(_el$4, "contain", "both");
                insert(_el$4, () => data().biography);
                effect(_p$ => {
                    var _v$ = styles.Column, _v$2 = theme.typography.display2, _v$3 = styles.peopleBio;
                    _v$ !== _p$.e && (_p$.e = setProp(_el$2, "style", _v$, _p$.e));
                    _v$2 !== _p$.t && (_p$.t = setProp(_el$3, "style", _v$2, _p$.t));
                    _v$3 !== _p$.a && (_p$.a = setProp(_el$4, "style", _v$3, _p$.a));
                    return _p$;
                }, {
                    e: void 0,
                    t: void 0,
                    a: void 0
                });
                return _el$2;
            })(), (() => {
                var _el$5 = createElement("view");
                setProp(_el$5, "style", Backdrop);
                return _el$5;
            })(), createComponent(Column, {
                y: 670,
                x: 140,
                get style() {
                    return styles.Column;
                },
                scroll: "none",
                get children() {
                    return createComponent(Show, {
                        get when() {
                            return credits();
                        },
                        get children() {
                            return [ (() => {
                                var _el$6 = createElement("text");
                                insertNode(_el$6, createTextNode("Credits"));
                                setProp(_el$6, "skipFocus", true);
                                effect(_$p => setProp(_el$6, "style", styles.RowTitle, _$p));
                                return _el$6;
                            })(), createComponent(TileRow, {
                                autofocus: true,
                                onEnter: onEnter,
                                get items() {
                                    return credits();
                                }
                            }) ];
                        }
                    });
                }
            }) ];
        }
    });
};

export { People as default };
