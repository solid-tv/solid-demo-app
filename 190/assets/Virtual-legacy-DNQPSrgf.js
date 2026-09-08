!function() {
    function _toConsumableArray(r) {
        return function(r) {
            if (Array.isArray(r)) return _arrayLikeToArray(r);
        }(r) || function(r) {
            if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);
        }(r) || function(r, a) {
            if (r) {
                if ("string" == typeof r) return _arrayLikeToArray(r, a);
                var t = {}.toString.call(r).slice(8, -1);
                return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
            }
        }(r) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }();
    }
    function _arrayLikeToArray(r, a) {
        (null == a || a > r.length) && (a = r.length);
        for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
        return n;
    }
    System.register([ "./render-legacy-BWVYYcsn.js", "./Lazy-legacy-CAZZhQwh.js", "./components-legacy-BjVQ_G3e.js", "./styles-legacy--qMSUlWV.js", "./state-legacy-DCkLOvQm.js" ], function(_export, _context) {
        var onMount, createComponent, LazyColumn, TitleRow, styles_default, setGlobalBackground;
        return {
            setters: [ function(_renderLegacy002Js) {
                onMount = _renderLegacy002Js.$, createComponent = _renderLegacy002Js.i;
            }, function(_LazyLegacy008Js) {
                LazyColumn = _LazyLegacy008Js.t;
            }, function(_componentsLegacy00eJs) {
                TitleRow = _componentsLegacy00eJs.d;
            }, function(_stylesLegacy00iJs) {
                styles_default = _stylesLegacy00iJs.r;
            }, function(_stateLegacy00jJs) {
                setGlobalBackground = _stateLegacy00jJs.n;
            } ],
            execute: function() {
                _export("default", function(props) {
                    var _rows$;
                    onMount(function() {
                        return setGlobalBackground(858993663);
                    });
                    var scrolls = [ "auto", "edge", "always" ], rows = _toConsumableArray(props.data.rows.filter(function(item) {
                        return "Hero" !== item.type;
                    }));
                    return rows.push({
                        type: (null == (_rows$ = rows[0]) ? void 0 : _rows$.type) || "Poster",
                        items: function() {
                            var _rows$2;
                            return ((null == (_rows$2 = rows[0]) ? void 0 : _rows$2.items()) || []).slice(0, 3);
                        },
                        selected: 3
                    }), createComponent(LazyColumn, {
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
                        children: function(row, index) {
                            return createComponent(TitleRow, {
                                get row() {
                                    return row();
                                },
                                get scroll() {
                                    return scrolls[index % 3];
                                },
                                get title() {
                                    return scrolls[index % 3] + " " + (index >= 3 ? "wrap" : "") + (void 0 !== row().selected ? " (selected = ".concat(row().selected, ")") : "");
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
}();