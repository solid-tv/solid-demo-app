!function() {
    function _typeof(o) {
        return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
            return typeof o;
        } : function(o) {
            return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
        }, _typeof(o);
    }
    function _toConsumableArray(r) {
        return function(r) {
            if (Array.isArray(r)) return _arrayLikeToArray2(r);
        }(r) || function(r) {
            if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);
        }(r) || _unsupportedIterableToArray2(r) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }();
    }
    function _slicedToArray(r, e) {
        return function(r) {
            if (Array.isArray(r)) return r;
        }(r) || function(r, l) {
            var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
            if (null != t) {
                var e, n, i, u, a = [], f = !0, o = !1;
                try {
                    if (i = (t = t.call(r)).next, 0 === l) {
                        if (Object(t) !== t) return;
                        f = !1;
                    } else for (;!(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0) ;
                } catch (r) {
                    o = !0, n = r;
                } finally {
                    try {
                        if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;
                    } finally {
                        if (o) throw n;
                    }
                }
                return a;
            }
        }(r, e) || _unsupportedIterableToArray2(r, e) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }();
    }
    function _unsupportedIterableToArray2(r, a) {
        if (r) {
            if ("string" == typeof r) return _arrayLikeToArray2(r, a);
            var t = {}.toString.call(r).slice(8, -1);
            return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray2(r, a) : void 0;
        }
    }
    function _arrayLikeToArray2(r, a) {
        (null == a || a > r.length) && (a = r.length);
        for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
        return n;
    }
    function ownKeys(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var o = Object.getOwnPropertySymbols(e);
            r && (o = o.filter(function(r) {
                return Object.getOwnPropertyDescriptor(e, r).enumerable;
            })), t.push.apply(t, o);
        }
        return t;
    }
    function _objectSpread(e) {
        for (var r = 1; r < arguments.length; r++) {
            var t = null != arguments[r] ? arguments[r] : {};
            r % 2 ? ownKeys(Object(t), !0).forEach(function(r) {
                _defineProperty(e, r, t[r]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r) {
                Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
            });
        }
        return e;
    }
    function _defineProperty(e, r, t) {
        return (r = function(t) {
            var i = function(t, r) {
                if ("object" != _typeof(t) || !t) return t;
                var e = t[Symbol.toPrimitive];
                if (void 0 !== e) {
                    var i = e.call(t, r || "default");
                    if ("object" != _typeof(i)) return i;
                    throw new TypeError("@@toPrimitive must return a primitive value.");
                }
                return ("string" === r ? String : Number)(t);
            }(t, "string");
            return "symbol" == _typeof(i) ? i : i + "";
        }(r)) in e ? Object.defineProperty(e, r, {
            value: t,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[r] = t, e;
    }
    function _createForOfIteratorHelper(r, e) {
        var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
        if (!t) {
            if (Array.isArray(r) || (t = function(r, a) {
                if (r) {
                    if ("string" == typeof r) return _arrayLikeToArray(r, a);
                    var t = {}.toString.call(r).slice(8, -1);
                    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
                }
            }(r)) || e && r && "number" == typeof r.length) {
                t && (r = t);
                var _n = 0, F = function() {};
                return {
                    s: F,
                    n: function() {
                        return _n >= r.length ? {
                            done: !0
                        } : {
                            done: !1,
                            value: r[_n++]
                        };
                    },
                    e: function(r) {
                        throw r;
                    },
                    f: F
                };
            }
            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        var o, a = !0, u = !1;
        return {
            s: function() {
                t = t.call(r);
            },
            n: function() {
                var r = t.next();
                return a = r.done, r;
            },
            e: function(r) {
                u = !0, o = r;
            },
            f: function() {
                try {
                    a || null == t.return || t.return();
                } finally {
                    if (u) throw o;
                }
            }
        };
    }
    function _arrayLikeToArray(r, a) {
        (null == a || a > r.length) && (a = r.length);
        for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
        return n;
    }
    System.register([ "./render-legacy-BWVYYcsn.js", "./web-legacy-CZsMP84a.js" ], function(_export, _context) {
        var createContext, createMemo, batch, createComponent, createRenderEffect, getOwner, on, useContext, resetErrorBoundaries, untrack, createSignal, startTransition, runWithOwner, depth, hasSchemeRegex, trimPathRegex, mockBase, MAX_REDIRECTS, RouterContextObj, RouteContextObj, useRouter, useLocation, intent;
        function createBeforeLeave() {
            var listeners = new Set;
            var ignore = !1;
            return {
                subscribe: function(listener) {
                    return listeners.add(listener), function() {
                        return listeners.delete(listener);
                    };
                },
                confirm: function(to, options) {
                    if (ignore) return !(ignore = !1);
                    var _step, e = {
                        to: to,
                        options: options,
                        defaultPrevented: !1,
                        preventDefault: function() {
                            return e.defaultPrevented = !0;
                        }
                    }, _iterator = _createForOfIteratorHelper(listeners);
                    try {
                        var _loop = function() {
                            var l = _step.value;
                            l.listener(_objectSpread(_objectSpread({}, e), {}, {
                                from: l.location,
                                retry: function(force) {
                                    force && (ignore = !0), l.navigate(to, _objectSpread(_objectSpread({}, options), {}, {
                                        resolve: !1
                                    }));
                                }
                            }));
                        };
                        for (_iterator.s(); !(_step = _iterator.n()).done; ) _loop();
                    } catch (err) {
                        _iterator.e(err);
                    } finally {
                        _iterator.f();
                    }
                    return !e.defaultPrevented;
                }
            };
        }
        function saveCurrentDepth() {
            window.history.state && null != window.history.state._depth || window.history.replaceState(_objectSpread(_objectSpread({}, window.history.state), {}, {
                _depth: window.history.length - 1
            }), ""), depth = window.history.state._depth;
        }
        function normalizePath(path) {
            var omitSlash = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], s = path.replace(trimPathRegex, "$1");
            return s ? omitSlash || /^[?#]/.test(s) ? s : "/" + s : "";
        }
        function _resolvePath(base, path, from) {
            if (!hasSchemeRegex.test(path)) {
                var basePath = normalizePath(base), fromPath = from && normalizePath(from), result = "";
                return ((result = !fromPath || path.startsWith("/") ? basePath : 0 !== fromPath.toLowerCase().indexOf(basePath.toLowerCase()) ? basePath + fromPath : fromPath) || "/") + normalizePath(path, !result);
            }
        }
        function joinPaths(from, to) {
            return normalizePath(from).replace(/\/*(\*.*)?$/g, "") + normalizePath(to);
        }
        function extractSearchParams(url) {
            var params = {};
            return url.searchParams.forEach(function(value, key) {
                key in params ? Array.isArray(params[key]) ? params[key].push(value) : params[key] = [ params[key], value ] : params[key] = value;
            }), params;
        }
        function createMatcher(path, partial, matchFilters) {
            var _path$split2 = _slicedToArray(path.split("/*", 2), 2), pattern = _path$split2[0], splat = _path$split2[1], segments = pattern.split("/").filter(Boolean), len = segments.length;
            return function(location) {
                var locSegments = location.split("/").filter(Boolean), lenDiff = locSegments.length - len;
                if (lenDiff < 0 || lenDiff > 0 && void 0 === splat && !partial) return null;
                for (var match = {
                    path: len ? "" : "/",
                    params: {}
                }, matchFilter = function(s) {
                    return void 0 === matchFilters ? void 0 : matchFilters[s];
                }, i = 0; i < len; i++) {
                    var segment = segments[i], dynamic = ":" === segment[0], locSegment = dynamic ? locSegments[i] : locSegments[i].toLowerCase(), key = dynamic ? segment.slice(1) : segment.toLowerCase();
                    if (dynamic && matchSegment(locSegment, matchFilter(key))) match.params[key] = locSegment; else if (dynamic || !matchSegment(locSegment, key)) return null;
                    match.path += "/".concat(locSegment);
                }
                if (splat) {
                    var remainder = lenDiff ? locSegments.slice(-lenDiff).join("/") : "";
                    if (!matchSegment(remainder, matchFilter(splat))) return null;
                    match.params[splat] = remainder;
                }
                return match;
            };
        }
        function matchSegment(input, filter) {
            var isEqual = function(s) {
                return s === input;
            };
            return void 0 === filter || ("string" == typeof filter ? isEqual(filter) : "function" == typeof filter ? filter(input) : Array.isArray(filter) ? filter.some(isEqual) : filter instanceof RegExp && filter.test(input));
        }
        function createMemoObject(fn) {
            var map = new Map, owner = getOwner();
            return new Proxy({}, {
                get: function(_, property) {
                    return map.has(property) || runWithOwner(owner, function() {
                        return map.set(property, createMemo(function() {
                            return fn()[property];
                        }));
                    }), map.get(property)();
                },
                getOwnPropertyDescriptor: function() {
                    return {
                        enumerable: !0,
                        configurable: !0
                    };
                },
                ownKeys: function() {
                    return Reflect.ownKeys(fn());
                },
                has: function(_, property) {
                    return property in fn();
                }
            });
        }
        function expandOptionals(pattern) {
            var match = /(\/?\:[^\/]+)\?/.exec(pattern);
            if (!match) return [ pattern ];
            for (var prefix = pattern.slice(0, match.index), suffix = pattern.slice(match.index + match[0].length), prefixes = [ prefix, prefix += match[1] ]; match = /^(\/\:[^\/]+)\?/.exec(suffix); ) prefixes.push(prefix += match[1]), 
            suffix = suffix.slice(match[0].length);
            return expandOptionals(suffix).reduce(function(results, expansion) {
                return [].concat(_toConsumableArray(results), _toConsumableArray(prefixes.map(function(p) {
                    return p + expansion;
                })));
            }, []);
        }
        function createRoutes(routeDef) {
            var base = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "", component = routeDef.component, preload = routeDef.preload, load = routeDef.load, children = routeDef.children, info = routeDef.info, isLeaf = !children || Array.isArray(children) && !children.length, shared = {
                key: routeDef,
                component: component,
                preload: preload || load,
                info: info
            };
            return asArray(routeDef.path).reduce(function(acc, originalPath) {
                var _step2, _iterator2 = _createForOfIteratorHelper(expandOptionals(originalPath));
                try {
                    for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
                        var expandedPath = _step2.value, path = joinPaths(base, expandedPath), pattern = isLeaf ? path : path.split("/*", 1)[0];
                        pattern = pattern.split("/").map(function(s) {
                            return s.startsWith(":") || s.startsWith("*") ? s : encodeURIComponent(s);
                        }).join("/"), acc.push(_objectSpread(_objectSpread({}, shared), {}, {
                            originalPath: originalPath,
                            pattern: pattern,
                            matcher: createMatcher(pattern, !isLeaf, routeDef.matchFilters)
                        }));
                    }
                } catch (err) {
                    _iterator2.e(err);
                } finally {
                    _iterator2.f();
                }
                return acc;
            }, []);
        }
        function createBranch(routes) {
            var route, _route$pattern$split2, pattern, splat, segments, index = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
            return {
                routes: routes,
                score: 1e4 * (route = routes[routes.length - 1], _route$pattern$split2 = _slicedToArray(route.pattern.split("/*", 2), 2), 
                pattern = _route$pattern$split2[0], splat = _route$pattern$split2[1], segments = pattern.split("/").filter(Boolean), 
                segments.reduce(function(score, segment) {
                    return score + (segment.startsWith(":") ? 2 : 3);
                }, segments.length - (void 0 === splat ? 0 : 1))) - index,
                matcher: function(location) {
                    for (var matches = [], i = routes.length - 1; i >= 0; i--) {
                        var route = routes[i], match = route.matcher(location);
                        if (!match) return null;
                        matches.unshift(_objectSpread(_objectSpread({}, match), {}, {
                            route: route
                        }));
                    }
                    return matches;
                }
            };
        }
        function asArray(value) {
            return Array.isArray(value) ? value : [ value ];
        }
        function getRouteMatches(branches, location) {
            for (var i = 0, len = branches.length; i < len; i++) {
                var match = branches[i].matcher(location);
                if (match) return match;
            }
            return [];
        }
        return _export({
            _: saveCurrentDepth,
            a: function(integration, branches, getContext) {
                var options = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}, _integration$signal = _slicedToArray(integration.signal, 2), source = _integration$signal[0], setSource = _integration$signal[1], _integration$utils = integration.utils, utils = void 0 === _integration$utils ? {} : _integration$utils, parsePath = utils.parsePath || function(p) {
                    return p;
                }, renderPath = utils.renderPath || function(p) {
                    return p;
                }, beforeLeave = utils.beforeLeave || createBeforeLeave(), basePath = _resolvePath("", options.base || "");
                if (void 0 === basePath) throw new Error("".concat(basePath, " is not a valid base path"));
                basePath && !source().value && setSource({
                    value: basePath,
                    replace: !0,
                    scroll: !1
                });
                var lastTransitionTarget, _createSignal2 = _slicedToArray(createSignal(!1), 2), isRouting = _createSignal2[0], setIsRouting = _createSignal2[1], transition = function(newIntent, newTarget) {
                    newTarget.value === reference() && newTarget.state === state() || (void 0 === lastTransitionTarget && setIsRouting(!0), 
                    intent = newIntent, lastTransitionTarget = newTarget, startTransition(function() {
                        lastTransitionTarget === newTarget && (setReference(lastTransitionTarget.value), 
                        setState(lastTransitionTarget.state), resetErrorBoundaries(), submissions[1](function(subs) {
                            return subs.filter(function(s) {
                                return s.pending;
                            });
                        }));
                    }).finally(function() {
                        lastTransitionTarget === newTarget && batch(function() {
                            var next, first;
                            intent = void 0, "navigate" === newIntent && (next = lastTransitionTarget, (first = referrers[0]) && (setSource(_objectSpread(_objectSpread({}, next), {}, {
                                replace: first.replace,
                                scroll: first.scroll
                            })), referrers.length = 0)), setIsRouting(!1), lastTransitionTarget = void 0;
                        });
                    }));
                }, _createSignal4 = _slicedToArray(createSignal(source().value), 2), reference = _createSignal4[0], setReference = _createSignal4[1], _createSignal6 = _slicedToArray(createSignal(source().state), 2), state = _createSignal6[0], setState = _createSignal6[1], location = function(path, state, queryWrapper) {
                    var origin = new URL(mockBase), url = createMemo(function(prev) {
                        var path_ = path();
                        try {
                            return new URL(path_, origin);
                        } catch (err) {
                            return console.error("Invalid path ".concat(path_)), prev;
                        }
                    }, origin, {
                        equals: function(a, b) {
                            return a.href === b.href;
                        }
                    }), pathname = createMemo(function() {
                        return url().pathname;
                    }), search = createMemo(function() {
                        return url().search;
                    }, !0), hash = createMemo(function() {
                        return url().hash;
                    }), queryFn = on(search, function() {
                        return extractSearchParams(url());
                    });
                    return {
                        get pathname() {
                            return pathname();
                        },
                        get search() {
                            return search();
                        },
                        get hash() {
                            return hash();
                        },
                        get state() {
                            return state();
                        },
                        get key() {
                            return "";
                        },
                        query: queryWrapper ? queryWrapper(queryFn) : createMemoObject(queryFn)
                    };
                }(reference, state, utils.queryWrapper), referrers = [], submissions = createSignal([]), matches = createMemo(function() {
                    return "function" == typeof options.transformUrl ? getRouteMatches(branches(), options.transformUrl(location.pathname)) : getRouteMatches(branches(), location.pathname);
                }), buildParams = function() {
                    for (var m = matches(), params = {}, i = 0; i < m.length; i++) Object.assign(params, m[i].params);
                    return params;
                }, params = utils.paramsWrapper ? utils.paramsWrapper(buildParams, branches) : createMemoObject(buildParams), baseRoute = {
                    pattern: basePath,
                    path: function() {
                        return basePath;
                    },
                    outlet: function() {
                        return null;
                    },
                    resolvePath: function(to) {
                        return _resolvePath(basePath, to);
                    }
                };
                return createRenderEffect(on(source, function(source) {
                    return transition("native", source);
                }, {
                    defer: !0
                })), {
                    base: baseRoute,
                    location: location,
                    params: params,
                    isRouting: isRouting,
                    renderPath: renderPath,
                    parsePath: parsePath,
                    navigatorFactory: function(route) {
                        return route = route || useContext(RouteContextObj) || baseRoute, function(to, options) {
                            return function(route, to, options) {
                                untrack(function() {
                                    if ("number" != typeof to) {
                                        var queryOnly = !to || "?" === to[0], _replace$resolve$scro = _objectSpread({
                                            replace: !1,
                                            resolve: !queryOnly,
                                            scroll: !0
                                        }, options), replace = _replace$resolve$scro.replace, resolve = _replace$resolve$scro.resolve, scroll = _replace$resolve$scro.scroll, nextState = _replace$resolve$scro.state, resolvedTo = resolve ? route.resolvePath(to) : _resolvePath(queryOnly && location.pathname || "", to);
                                        if (void 0 === resolvedTo) throw new Error("Path '".concat(to, "' is not a routable path"));
                                        if (referrers.length >= MAX_REDIRECTS) throw new Error("Too many redirects");
                                        var current = reference();
                                        if (resolvedTo !== current || nextState !== state()) beforeLeave.confirm(resolvedTo, options) && (referrers.push({
                                            value: current,
                                            replace: replace,
                                            scroll: scroll,
                                            state: state()
                                        }), transition("navigate", {
                                            value: resolvedTo,
                                            state: nextState
                                        }));
                                    } else to && (utils.go ? utils.go(to) : console.warn("Router integration does not support relative routing"));
                                });
                            }(route, to, options);
                        };
                    },
                    matches: matches,
                    beforeLeave: beforeLeave,
                    preloadRoute: function(url, preloadData) {
                        var matches = getRouteMatches(branches(), url.pathname), prevIntent = intent;
                        intent = "preload";
                        var _loop2 = function() {
                            var _matches$match = matches[match], route = _matches$match.route, params = _matches$match.params;
                            route.component && route.component.preload && route.component.preload();
                            var preload = route.preload;
                            preloadData && preload && runWithOwner(getContext(), function() {
                                return preload({
                                    params: params,
                                    location: {
                                        pathname: url.pathname,
                                        search: url.search,
                                        hash: url.hash,
                                        query: extractSearchParams(url),
                                        state: null,
                                        key: ""
                                    },
                                    intent: "preload"
                                });
                            });
                        };
                        for (var match in matches) _loop2();
                        intent = prevIntent;
                    },
                    singleFlight: void 0 === options.singleFlight || options.singleFlight,
                    submissions: submissions
                };
            },
            c: function(value) {
                0;
            },
            g: function(notify, block) {
                var ignore = !1;
                return function() {
                    var prevDepth = depth;
                    saveCurrentDepth();
                    var delta = null == prevDepth ? null : depth - prevDepth;
                    ignore ? ignore = !1 : delta && block(delta) ? (ignore = !0, window.history.go(-delta)) : notify();
                };
            },
            h: function(state) {
                return _objectSpread(_objectSpread({}, state), {}, {
                    _depth: window.history.state && window.history.state._depth
                });
            },
            i: function(router, parent, _outlet, match) {
                var base = router.base, location = router.location, params = router.params, _match$route = match().route, pattern = _match$route.pattern, component = _match$route.component, preload = _match$route.preload, path = createMemo(function() {
                    return match().path;
                });
                component && component.preload && component.preload();
                var data = preload ? preload({
                    params: params,
                    location: location,
                    intent: intent || "initial"
                }) : void 0;
                return {
                    parent: parent,
                    pattern: pattern,
                    path: path,
                    outlet: function() {
                        return component ? createComponent(component, {
                            params: params,
                            location: location,
                            data: data,
                            get children() {
                                return _outlet();
                            }
                        }) : _outlet();
                    },
                    resolvePath: function(to) {
                        return _resolvePath(base.path(), to, path());
                    }
                };
            },
            m: createBeforeLeave,
            o: function() {
                return intent;
            },
            r: function createBranches(routeDef) {
                for (var base = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "", stack = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [], branches = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [], routeDefs = asArray(routeDef), i = 0, len = routeDefs.length; i < len; i++) {
                    var def = routeDefs[i];
                    if (def && "object" === _typeof(def)) {
                        def.hasOwnProperty("path") || (def.path = "");
                        var _step3, _iterator3 = _createForOfIteratorHelper(createRoutes(def, base));
                        try {
                            for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
                                var route = _step3.value;
                                stack.push(route);
                                var isEmptyArray = Array.isArray(def.children) && 0 === def.children.length;
                                if (def.children && !isEmptyArray) createBranches(def.children, route.pattern, stack, branches); else {
                                    var branch = createBranch(_toConsumableArray(stack), branches.length);
                                    branches.push(branch);
                                }
                                stack.pop();
                            }
                        } catch (err) {
                            _iterator3.e(err);
                        } finally {
                            _iterator3.f();
                        }
                    }
                }
                return stack.length ? branches : branches.sort(function(a, b) {
                    return b.score - a.score;
                });
            },
            s: getRouteMatches
        }), {
            setters: [ function(_renderLegacy002Js) {
                createContext = _renderLegacy002Js.B, createMemo = _renderLegacy002Js.H, batch = _renderLegacy002Js.I, 
                createComponent = _renderLegacy002Js.R, createRenderEffect = _renderLegacy002Js.U, 
                getOwner = _renderLegacy002Js.Y, on = _renderLegacy002Js.Z, useContext = _renderLegacy002Js.at, 
                resetErrorBoundaries = _renderLegacy002Js.et, untrack = _renderLegacy002Js.it, createSignal = _renderLegacy002Js.q, 
                startTransition = _renderLegacy002Js.rt, runWithOwner = _renderLegacy002Js.tt;
            }, function(_webLegacy007Js) {
                _webLegacy007Js.t;
            } ],
            execute: function() {
                saveCurrentDepth(), hasSchemeRegex = /^(?:[a-z0-9]+:)?\/\//i, trimPathRegex = /^\/+|(\/)\/+$/g, 
                mockBase = "http://sr", MAX_REDIRECTS = 100, _export("n", RouterContextObj = createContext()), 
                _export("t", RouteContextObj = createContext()), useRouter = function() {
                    return function(value, message) {
                        if (null == value) throw new Error(message);
                        return value;
                    }(useContext(RouterContextObj), "<A> and 'use' router primitives can be only used inside a Route.");
                }, _export("d", function() {
                    return useRouter().navigatorFactory();
                }), _export("l", useLocation = function() {
                    return useRouter().location;
                }), _export("p", function() {
                    var pre = useRouter().preloadRoute;
                    return function(url) {
                        var options = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        return pre(url instanceof URL ? url : new URL(url, mockBase), options.preloadData);
                    };
                }), _export("u", function(path, matchFilters) {
                    var location = useLocation(), matchers = createMemo(function() {
                        return expandOptionals(path()).map(function(path) {
                            return createMatcher(path, void 0, matchFilters);
                        });
                    });
                    return createMemo(function() {
                        var _step4, _iterator4 = _createForOfIteratorHelper(matchers());
                        try {
                            for (_iterator4.s(); !(_step4 = _iterator4.n()).done; ) {
                                var match = (0, _step4.value)(location.pathname);
                                if (match) return match;
                            }
                        } catch (err) {
                            _iterator4.e(err);
                        } finally {
                            _iterator4.f();
                        }
                    });
                }), _export("f", function() {
                    return useRouter().params;
                });
            }
        };
    });
}();