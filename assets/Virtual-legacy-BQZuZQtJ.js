(function() {
    function _toConsumableArray(r) {
        return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread();
    }
    function _nonIterableSpread() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    function _unsupportedIterableToArray(r, a) {
        if (r) {
            if ("string" == typeof r) return _arrayLikeToArray(r, a);
            var t = {}.toString.call(r).slice(8, -1);
            return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
        }
    }
    function _iterableToArray(r) {
        if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);
    }
    function _arrayWithoutHoles(r) {
        if (Array.isArray(r)) return _arrayLikeToArray(r);
    }
    function _arrayLikeToArray(r, a) {
        (null == a || a > r.length) && (a = r.length);
        for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
        return n;
    }
    System.register([ "./index-legacy-DlXhuT4M.js" ], function(exports, module) {
        "use strict";
        var onMount, setGlobalBackground, createComponent, LazyColumn, TitleRow, styles;
        return {
            setters: [ function(module) {
                onMount = module.o;
                setGlobalBackground = module.s;
                createComponent = module.c;
                LazyColumn = module.a3;
                TitleRow = module.a4;
                styles = module.J;
            } ],
            execute: function execute() {
                var VirtualPage = exports("default", function(props) {
                    var _rows$;
                    onMount(function() {
                        return setGlobalBackground(858993663);
                    });
                    var scrolls = [ "auto", "edge", "always" ];
                    var rows = _toConsumableArray(props.data.rows.filter(function(item) {
                        return item.type !== "Hero";
                    }));
                    rows.push({
                        type: ((_rows$ = rows[0]) === null || _rows$ === void 0 ? void 0 : _rows$.type) || "Poster",
                        items: function items() {
                            var _rows$2;
                            return (((_rows$2 = rows[0]) === null || _rows$2 === void 0 ? void 0 : _rows$2.items()) || []).slice(0, 3);
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
                        children: function children(row, index) {
                            return createComponent(TitleRow, {
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
                            });
                        }
                    });
                });
            }
        };
    });
})();
