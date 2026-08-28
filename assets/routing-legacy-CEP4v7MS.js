(function() {
    function _typeof(o) {
        "@babel/helpers - typeof";
        return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
            return typeof o;
        } : function(o) {
            return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
        }, _typeof(o);
    }
    function _toConsumableArray(r) {
        return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray2(r) || _nonIterableSpread();
    }
    function _nonIterableSpread() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    function _iterableToArray(r) {
        if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);
    }
    function _arrayWithoutHoles(r) {
        if (Array.isArray(r)) return _arrayLikeToArray2(r);
    }
    function _slicedToArray(r, e) {
        return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray2(r, e) || _nonIterableRest();
    }
    function _nonIterableRest() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
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
    function _iterableToArrayLimit(r, l) {
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
    }
    function _arrayWithHoles(r) {
        if (Array.isArray(r)) return r;
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
        return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
            value: t,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[r] = t, e;
    }
    function _toPropertyKey(t) {
        var i = _toPrimitive(t, "string");
        return "symbol" == _typeof(i) ? i : i + "";
    }
    function _toPrimitive(t, r) {
        if ("object" != _typeof(t) || !t) return t;
        var e = t[Symbol.toPrimitive];
        if (void 0 !== e) {
            var i = e.call(t, r || "default");
            if ("object" != _typeof(i)) return i;
            throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return ("string" === r ? String : Number)(t);
    }
    function _createForOfIteratorHelper(r, e) {
        var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
        if (!t) {
            if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) {
                t && (r = t);
                var _n = 0, F = function F() {};
                return {
                    s: F,
                    n: function n() {
                        return _n >= r.length ? {
                            done: !0
                        } : {
                            done: !1,
                            value: r[_n++]
                        };
                    },
                    e: function e(r) {
                        throw r;
                    },
                    f: F
                };
            }
            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        var o, a = !0, u = !1;
        return {
            s: function s() {
                t = t.call(r);
            },
            n: function n() {
                var r = t.next();
                return a = r.done, r;
            },
            e: function e(r) {
                u = !0, o = r;
            },
            f: function f() {
                try {
                    a || null == t.return || t.return();
                } finally {
                    if (u) throw o;
                }
            }
        };
    }
    function _unsupportedIterableToArray(r, a) {
        if (r) {
            if ("string" == typeof r) return _arrayLikeToArray(r, a);
            var t = {}.toString.call(r).slice(8, -1);
            return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
        }
    }
    function _arrayLikeToArray(r, a) {
        (null == a || a > r.length) && (a = r.length);
        for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
        return n;
    }
    System.register([ "./render-legacy-DCiJIohl.js", "./web-legacy-Dt_TNc5h.js" ], function(_export, _context) {
        "use strict";
        var createContext, createMemo, batch, createComponent, createRenderEffect, getOwner, on, useContext, resetErrorBoundaries, untrack, createSignal, startTransition, runWithOwner, voidFn, depth, hasSchemeRegex, trimPathRegex, mockBase, MAX_REDIRECTS, RouterContextObj, RouteContextObj, useRouter, useNavigate, useLocation, usePreloadRoute, useMatch, useParams, intent, inPreloadFn;
        function createBeforeLeave() {
            var listeners = new Set;
            function subscribe(listener) {
                listeners.add(listener);
                return function() {
                    return listeners.delete(listener);
                };
            }
            var ignore = false;
            function confirm(to, options) {
                if (ignore) return !(ignore = false);
                var e = {
                    to: to,
                    options: options,
                    defaultPrevented: false,
                    preventDefault: function preventDefault() {
                        return e.defaultPrevented = true;
                    }
                };
                var _iterator = _createForOfIteratorHelper(listeners), _step;
                try {
                    var _loop = function _loop() {
                        var l = _step.value;
                        l.listener(_objectSpread(_objectSpread({}, e), {}, {
                            from: l.location,
                            retry: function retry(force) {
                                force && (ignore = true);
                                l.navigate(to, _objectSpread(_objectSpread({}, options), {}, {
                                    resolve: false
                                }));
                            }
                        }));
                    };
                    for (_iterator.s(); !(_step = _iterator.n()).done; ) {
                        _loop();
                    }
                } catch (err) {
                    _iterator.e(err);
                } finally {
                    _iterator.f();
                }
                return !e.defaultPrevented;
            }
            return {
                subscribe: subscribe,
                confirm: confirm
            };
        }
        function saveCurrentDepth() {
            if (!window.history.state || window.history.state._depth == null) window.history.replaceState(_objectSpread(_objectSpread({}, window.history.state), {}, {
                _depth: window.history.length - 1
            }), "");
            depth = window.history.state._depth;
        }
        function keepDepth(state) {
            return _objectSpread(_objectSpread({}, state), {}, {
                _depth: window.history.state && window.history.state._depth
            });
        }
        function notifyIfNotBlocked(notify, block) {
            var ignore = false;
            return function() {
                var prevDepth = depth;
                saveCurrentDepth();
                var delta = prevDepth == null ? null : depth - prevDepth;
                if (ignore) {
                    ignore = false;
                    return;
                }
                if (delta && block(delta)) {
                    ignore = true;
                    window.history.go(-delta);
                } else notify();
            };
        }
        function normalizePath(path) {
            var omitSlash = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
            var s = path.replace(trimPathRegex, "$1");
            return s ? omitSlash || /^[?#]/.test(s) ? s : "/" + s : "";
        }
        function _resolvePath(base, path, from) {
            if (hasSchemeRegex.test(path)) return;
            var basePath = normalizePath(base);
            var fromPath = from && normalizePath(from);
            var result = "";
            if (!fromPath || path.startsWith("/")) result = basePath; else if (fromPath.toLowerCase().indexOf(basePath.toLowerCase()) !== 0) result = basePath + fromPath; else result = fromPath;
            return (result || "/") + normalizePath(path, !result);
        }
        function invariant(value, message) {
            if (value == null) throw new Error(message);
            return value;
        }
        function joinPaths(from, to) {
            return normalizePath(from).replace(/\/*(\*.*)?$/g, "") + normalizePath(to);
        }
        function extractSearchParams(url) {
            var params = {};
            url.searchParams.forEach(function(value, key) {
                if (key in params) {
                    if (Array.isArray(params[key])) params[key].push(value); else params[key] = [ params[key], value ];
                } else params[key] = value;
            });
            return params;
        }
        function createMatcher(path, partial, matchFilters) {
            var _path$split = path.split("/*", 2), _path$split2 = _slicedToArray(_path$split, 2), pattern = _path$split2[0], splat = _path$split2[1];
            var segments = pattern.split("/").filter(Boolean);
            var len = segments.length;
            return function(location) {
                var locSegments = location.split("/").filter(Boolean);
                var lenDiff = locSegments.length - len;
                if (lenDiff < 0 || lenDiff > 0 && splat === void 0 && !partial) return null;
                var match = {
                    path: len ? "" : "/",
                    params: {}
                };
                var matchFilter = function matchFilter(s) {
                    return matchFilters === void 0 ? void 0 : matchFilters[s];
                };
                for (var i = 0; i < len; i++) {
                    var segment = segments[i];
                    var dynamic = segment[0] === ":";
                    var locSegment = dynamic ? locSegments[i] : locSegments[i].toLowerCase();
                    var key = dynamic ? segment.slice(1) : segment.toLowerCase();
                    if (dynamic && matchSegment(locSegment, matchFilter(key))) match.params[key] = locSegment; else if (dynamic || !matchSegment(locSegment, key)) return null;
                    match.path += "/".concat(locSegment);
                }
                if (splat) {
                    var remainder = lenDiff ? locSegments.slice(-lenDiff).join("/") : "";
                    if (matchSegment(remainder, matchFilter(splat))) match.params[splat] = remainder; else return null;
                }
                return match;
            };
        }
        function matchSegment(input, filter) {
            var isEqual = function isEqual(s) {
                return s === input;
            };
            if (filter === void 0) return true; else if (typeof filter === "string") return isEqual(filter); else if (typeof filter === "function") return filter(input); else if (Array.isArray(filter)) return filter.some(isEqual); else if (filter instanceof RegExp) return filter.test(input);
            return false;
        }
        function scoreRoute(route) {
            var _route$pattern$split = route.pattern.split("/*", 2), _route$pattern$split2 = _slicedToArray(_route$pattern$split, 2), pattern = _route$pattern$split2[0], splat = _route$pattern$split2[1];
            var segments = pattern.split("/").filter(Boolean);
            return segments.reduce(function(score, segment) {
                return score + (segment.startsWith(":") ? 2 : 3);
            }, segments.length - (splat === void 0 ? 0 : 1));
        }
        function createMemoObject(fn) {
            var map = new Map;
            var owner = getOwner();
            return new Proxy({}, {
                get: function get(_, property) {
                    if (!map.has(property)) runWithOwner(owner, function() {
                        return map.set(property, createMemo(function() {
                            return fn()[property];
                        }));
                    });
                    return map.get(property)();
                },
                getOwnPropertyDescriptor: function getOwnPropertyDescriptor() {
                    return {
                        enumerable: true,
                        configurable: true
                    };
                },
                ownKeys: function ownKeys() {
                    return Reflect.ownKeys(fn());
                },
                has: function has(_, property) {
                    return property in fn();
                }
            });
        }
        function expandOptionals(pattern) {
            var match = /(\/?\:[^\/]+)\?/.exec(pattern);
            if (!match) return [ pattern ];
            var prefix = pattern.slice(0, match.index);
            var suffix = pattern.slice(match.index + match[0].length);
            var prefixes = [ prefix, prefix += match[1] ];
            while (match = /^(\/\:[^\/]+)\?/.exec(suffix)) {
                prefixes.push(prefix += match[1]);
                suffix = suffix.slice(match[0].length);
            }
            return expandOptionals(suffix).reduce(function(results, expansion) {
                return [].concat(_toConsumableArray(results), _toConsumableArray(prefixes.map(function(p) {
                    return p + expansion;
                })));
            }, []);
        }
        function createRoutes(routeDef) {
            var base = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
            var component = routeDef.component, preload = routeDef.preload, load = routeDef.load, children = routeDef.children, info = routeDef.info;
            var isLeaf = !children || Array.isArray(children) && !children.length;
            var shared = {
                key: routeDef,
                component: component,
                preload: preload || load,
                info: info
            };
            return asArray(routeDef.path).reduce(function(acc, originalPath) {
                var _iterator2 = _createForOfIteratorHelper(expandOptionals(originalPath)), _step2;
                try {
                    for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
                        var expandedPath = _step2.value;
                        var path = joinPaths(base, expandedPath);
                        var pattern = isLeaf ? path : path.split("/*", 1)[0];
                        pattern = pattern.split("/").map(function(s) {
                            return s.startsWith(":") || s.startsWith("*") ? s : encodeURIComponent(s);
                        }).join("/");
                        acc.push(_objectSpread(_objectSpread({}, shared), {}, {
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
            var index = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
            return {
                routes: routes,
                score: scoreRoute(routes[routes.length - 1]) * 1e4 - index,
                matcher: function matcher(location) {
                    var matches = [];
                    for (var i = routes.length - 1; i >= 0; i--) {
                        var route = routes[i];
                        var match = route.matcher(location);
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
        function createBranches(routeDef) {
            var base = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
            var stack = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
            var branches = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];
            var routeDefs = asArray(routeDef);
            for (var i = 0, len = routeDefs.length; i < len; i++) {
                var def = routeDefs[i];
                if (def && _typeof(def) === "object") {
                    if (!def.hasOwnProperty("path")) def.path = "";
                    var routes = createRoutes(def, base);
                    var _iterator3 = _createForOfIteratorHelper(routes), _step3;
                    try {
                        for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
                            var route = _step3.value;
                            stack.push(route);
                            var isEmptyArray = Array.isArray(def.children) && def.children.length === 0;
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
        }
        function getRouteMatches(branches, location) {
            for (var i = 0, len = branches.length; i < len; i++) {
                var match = branches[i].matcher(location);
                if (match) return match;
            }
            return [];
        }
        function createLocation(path, state, queryWrapper) {
            var origin = new URL(mockBase);
            var url = createMemo(function(prev) {
                var path_ = path();
                try {
                    return new URL(path_, origin);
                } catch (err) {
                    console.error("Invalid path ".concat(path_));
                    return prev;
                }
            }, origin, {
                equals: function equals(a, b) {
                    return a.href === b.href;
                }
            });
            var pathname = createMemo(function() {
                return url().pathname;
            });
            var search = createMemo(function() {
                return url().search;
            }, true);
            var hash = createMemo(function() {
                return url().hash;
            });
            var key = function key() {
                return "";
            };
            var queryFn = on(search, function() {
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
                    return key();
                },
                query: queryWrapper ? queryWrapper(queryFn) : createMemoObject(queryFn)
            };
        }
        function getIntent() {
            return intent;
        }
        function setInPreloadFn(value) {
            inPreloadFn = value;
        }
        function createRouterContext(integration, branches, getContext) {
            var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
            var _integration$signal = _slicedToArray(integration.signal, 2), source = _integration$signal[0], setSource = _integration$signal[1], _integration$utils = integration.utils, utils = _integration$utils === void 0 ? {} : _integration$utils;
            var parsePath = utils.parsePath || function(p) {
                return p;
            };
            var renderPath = utils.renderPath || function(p) {
                return p;
            };
            var beforeLeave = utils.beforeLeave || createBeforeLeave();
            var basePath = _resolvePath("", options.base || "");
            if (basePath === void 0) throw new Error("".concat(basePath, " is not a valid base path")); else if (basePath && !source().value) setSource({
                value: basePath,
                replace: true,
                scroll: false
            });
            var _createSignal = createSignal(false), _createSignal2 = _slicedToArray(_createSignal, 2), isRouting = _createSignal2[0], setIsRouting = _createSignal2[1];
            var lastTransitionTarget;
            var transition = function transition(newIntent, newTarget) {
                if (newTarget.value === reference() && newTarget.state === state()) return;
                if (lastTransitionTarget === void 0) setIsRouting(true);
                intent = newIntent;
                lastTransitionTarget = newTarget;
                startTransition(function() {
                    if (lastTransitionTarget !== newTarget) return;
                    setReference(lastTransitionTarget.value);
                    setState(lastTransitionTarget.state);
                    resetErrorBoundaries();
                    if (!false) submissions[1](function(subs) {
                        return subs.filter(function(s) {
                            return s.pending;
                        });
                    });
                }).finally(function() {
                    if (lastTransitionTarget !== newTarget) return;
                    batch(function() {
                        intent = void 0;
                        if (newIntent === "navigate") navigateEnd(lastTransitionTarget);
                        setIsRouting(false);
                        lastTransitionTarget = void 0;
                    });
                });
            };
            var _createSignal3 = createSignal(source().value), _createSignal4 = _slicedToArray(_createSignal3, 2), reference = _createSignal4[0], setReference = _createSignal4[1];
            var _createSignal5 = createSignal(source().state), _createSignal6 = _slicedToArray(_createSignal5, 2), state = _createSignal6[0], setState = _createSignal6[1];
            var location = createLocation(reference, state, utils.queryWrapper);
            var referrers = [];
            var submissions = createSignal(false ? initFromFlash() : []);
            var matches = createMemo(function() {
                if (typeof options.transformUrl === "function") return getRouteMatches(branches(), options.transformUrl(location.pathname));
                return getRouteMatches(branches(), location.pathname);
            });
            var buildParams = function buildParams() {
                var m = matches();
                var params = {};
                for (var i = 0; i < m.length; i++) Object.assign(params, m[i].params);
                return params;
            };
            var params = utils.paramsWrapper ? utils.paramsWrapper(buildParams, branches) : createMemoObject(buildParams);
            var baseRoute = {
                pattern: basePath,
                path: function path() {
                    return basePath;
                },
                outlet: function outlet() {
                    return null;
                },
                resolvePath: function resolvePath(to) {
                    return _resolvePath(basePath, to);
                }
            };
            createRenderEffect(on(source, function(source) {
                return transition("native", source);
            }, {
                defer: true
            }));
            return {
                base: baseRoute,
                location: location,
                params: params,
                isRouting: isRouting,
                renderPath: renderPath,
                parsePath: parsePath,
                navigatorFactory: navigatorFactory,
                matches: matches,
                beforeLeave: beforeLeave,
                preloadRoute: preloadRoute,
                singleFlight: options.singleFlight === void 0 ? true : options.singleFlight,
                submissions: submissions
            };
            function navigateFromRoute(route, to, options) {
                untrack(function() {
                    if (typeof to === "number") {
                        if (!to) {} else if (utils.go) utils.go(to); else console.warn("Router integration does not support relative routing");
                        return;
                    }
                    var queryOnly = !to || to[0] === "?";
                    var _replace$resolve$scro = _objectSpread({
                        replace: false,
                        resolve: !queryOnly,
                        scroll: true
                    }, options), replace = _replace$resolve$scro.replace, resolve = _replace$resolve$scro.resolve, scroll = _replace$resolve$scro.scroll, nextState = _replace$resolve$scro.state;
                    var resolvedTo = resolve ? route.resolvePath(to) : _resolvePath(queryOnly && location.pathname || "", to);
                    if (resolvedTo === void 0) throw new Error("Path '".concat(to, "' is not a routable path")); else if (referrers.length >= MAX_REDIRECTS) throw new Error("Too many redirects");
                    var current = reference();
                    if (resolvedTo !== current || nextState !== state()) {
                        if (false) {
                            var e = voidFn();
                            e && (e.response = {
                                status: 302,
                                headers: new Headers({
                                    Location: resolvedTo
                                })
                            });
                            setSource({
                                value: resolvedTo,
                                replace: replace,
                                scroll: scroll,
                                state: nextState
                            });
                        } else if (beforeLeave.confirm(resolvedTo, options)) {
                            referrers.push({
                                value: current,
                                replace: replace,
                                scroll: scroll,
                                state: state()
                            });
                            transition("navigate", {
                                value: resolvedTo,
                                state: nextState
                            });
                        }
                    }
                });
            }
            function navigatorFactory(route) {
                route = route || useContext(RouteContextObj) || baseRoute;
                return function(to, options) {
                    return navigateFromRoute(route, to, options);
                };
            }
            function navigateEnd(next) {
                var first = referrers[0];
                if (first) {
                    setSource(_objectSpread(_objectSpread({}, next), {}, {
                        replace: first.replace,
                        scroll: first.scroll
                    }));
                    referrers.length = 0;
                }
            }
            function preloadRoute(url, preloadData) {
                var matches = getRouteMatches(branches(), url.pathname);
                var prevIntent = intent;
                intent = "preload";
                var _loop2 = function _loop2() {
                    var _matches$match = matches[match], route = _matches$match.route, params = _matches$match.params;
                    route.component && route.component.preload && route.component.preload();
                    var preload = route.preload;
                    inPreloadFn = true;
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
                    inPreloadFn = false;
                };
                for (var match in matches) {
                    _loop2();
                }
                intent = prevIntent;
            }
            function initFromFlash() {
                var e = voidFn();
                return e && e.router && e.router.submission ? [ e.router.submission ] : [];
            }
        }
        function createRouteContext(router, parent, _outlet, match) {
            var base = router.base, location = router.location, params = router.params;
            var _match$route = match().route, pattern = _match$route.pattern, component = _match$route.component, preload = _match$route.preload;
            var path = createMemo(function() {
                return match().path;
            });
            component && component.preload && component.preload();
            inPreloadFn = true;
            var data = preload ? preload({
                params: params,
                location: location,
                intent: intent || "initial"
            }) : void 0;
            inPreloadFn = false;
            return {
                parent: parent,
                pattern: pattern,
                path: path,
                outlet: function outlet() {
                    return component ? createComponent(component, {
                        params: params,
                        location: location,
                        data: data,
                        get children() {
                            return _outlet();
                        }
                    }) : _outlet();
                },
                resolvePath: function resolvePath(to) {
                    return _resolvePath(base.path(), to, path());
                }
            };
        }
        _export({
            _: saveCurrentDepth,
            a: createRouterContext,
            c: setInPreloadFn,
            g: notifyIfNotBlocked,
            h: keepDepth,
            i: createRouteContext,
            m: createBeforeLeave,
            o: getIntent,
            r: createBranches,
            s: getRouteMatches
        });
        return {
            setters: [ function(_renderLegacy001Js) {
                createContext = _renderLegacy001Js.B;
                createMemo = _renderLegacy001Js.H;
                batch = _renderLegacy001Js.I;
                createComponent = _renderLegacy001Js.R;
                createRenderEffect = _renderLegacy001Js.U;
                getOwner = _renderLegacy001Js.Y;
                on = _renderLegacy001Js.Z;
                useContext = _renderLegacy001Js.at;
                resetErrorBoundaries = _renderLegacy001Js.et;
                untrack = _renderLegacy001Js.it;
                createSignal = _renderLegacy001Js.q;
                startTransition = _renderLegacy001Js.rt;
                runWithOwner = _renderLegacy001Js.tt;
            }, function(_webLegacy005Js) {
                voidFn = _webLegacy005Js.t;
            } ],
            execute: function execute() {
                if (!false) saveCurrentDepth();
                hasSchemeRegex = /^(?:[a-z0-9]+:)?\/\//i;
                trimPathRegex = /^\/+|(\/)\/+$/g;
                mockBase = "http://sr";
                MAX_REDIRECTS = 100;
                _export("n", RouterContextObj = createContext());
                _export("t", RouteContextObj = createContext());
                useRouter = function useRouter() {
                    return invariant(useContext(RouterContextObj), "<A> and 'use' router primitives can be only used inside a Route.");
                };
                _export("d", useNavigate = function useNavigate() {
                    return useRouter().navigatorFactory();
                });
                _export("l", useLocation = function useLocation() {
                    return useRouter().location;
                });
                _export("p", usePreloadRoute = function usePreloadRoute() {
                    var pre = useRouter().preloadRoute;
                    return function(url) {
                        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
                        return pre(url instanceof URL ? url : new URL(url, mockBase), options.preloadData);
                    };
                });
                _export("u", useMatch = function useMatch(path, matchFilters) {
                    var location = useLocation();
                    var matchers = createMemo(function() {
                        return expandOptionals(path()).map(function(path) {
                            return createMatcher(path, void 0, matchFilters);
                        });
                    });
                    return createMemo(function() {
                        var _iterator4 = _createForOfIteratorHelper(matchers()), _step4;
                        try {
                            for (_iterator4.s(); !(_step4 = _iterator4.n()).done; ) {
                                var matcher = _step4.value;
                                var match = matcher(location.pathname);
                                if (match) return match;
                            }
                        } catch (err) {
                            _iterator4.e(err);
                        } finally {
                            _iterator4.f();
                        }
                    });
                });
                _export("f", useParams = function useParams() {
                    return useRouter().params;
                });
                inPreloadFn = false;
            }
        };
    });
})();