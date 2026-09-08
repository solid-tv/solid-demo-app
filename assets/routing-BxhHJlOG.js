import { B as createContext, H as createMemo, I as batch, R as createComponent, U as createRenderEffect, Y as getOwner, Z as on, at as useContext, et as resetErrorBoundaries, it as untrack, q as createSignal, rt as startTransition, tt as runWithOwner } from "./render-aZV73JYm.js";

import { t as voidFn } from "./web-BxFxPOyO.js";

function createBeforeLeave() {
    let listeners = new Set;
    let ignore = !1;
    return {
        subscribe: function(listener) {
            return listeners.add(listener), () => listeners.delete(listener);
        },
        confirm: function(to, options) {
            if (ignore) return !(ignore = !1);
            const e = {
                to: to,
                options: options,
                defaultPrevented: !1,
                preventDefault: () => e.defaultPrevented = !0
            };
            for (const l of listeners) l.listener({
                ...e,
                from: l.location,
                retry: force => {
                    force && (ignore = !0), l.navigate(to, {
                        ...options,
                        resolve: !1
                    });
                }
            });
            return !e.defaultPrevented;
        }
    };
}

var depth;

function saveCurrentDepth() {
    window.history.state && null != window.history.state._depth || window.history.replaceState({
        ...window.history.state,
        _depth: window.history.length - 1
    }, ""), depth = window.history.state._depth;
}

function keepDepth(state) {
    return {
        ...state,
        _depth: window.history.state && window.history.state._depth
    };
}

function notifyIfNotBlocked(notify, block) {
    let ignore = !1;
    return () => {
        const prevDepth = depth;
        saveCurrentDepth();
        const delta = null == prevDepth ? null : depth - prevDepth;
        ignore ? ignore = !1 : delta && block(delta) ? (ignore = !0, window.history.go(-delta)) : notify();
    };
}

saveCurrentDepth();

var hasSchemeRegex = /^(?:[a-z0-9]+:)?\/\//i, trimPathRegex = /^\/+|(\/)\/+$/g;

function normalizePath(path, omitSlash = !1) {
    const s = path.replace(trimPathRegex, "$1");
    return s ? omitSlash || /^[?#]/.test(s) ? s : "/" + s : "";
}

function resolvePath(base, path, from) {
    if (hasSchemeRegex.test(path)) return;
    const basePath = normalizePath(base), fromPath = from && normalizePath(from);
    let result = "";
    return result = !fromPath || path.startsWith("/") ? basePath : 0 !== fromPath.toLowerCase().indexOf(basePath.toLowerCase()) ? basePath + fromPath : fromPath, 
    (result || "/") + normalizePath(path, !result);
}

function joinPaths(from, to) {
    return normalizePath(from).replace(/\/*(\*.*)?$/g, "") + normalizePath(to);
}

function extractSearchParams(url) {
    const params = {};
    return url.searchParams.forEach((value, key) => {
        key in params ? Array.isArray(params[key]) ? params[key].push(value) : params[key] = [ params[key], value ] : params[key] = value;
    }), params;
}

function createMatcher(path, partial, matchFilters) {
    const [pattern, splat] = path.split("/*", 2), segments = pattern.split("/").filter(Boolean), len = segments.length;
    return location => {
        const locSegments = location.split("/").filter(Boolean), lenDiff = locSegments.length - len;
        if (lenDiff < 0 || lenDiff > 0 && void 0 === splat && !partial) return null;
        const match = {
            path: len ? "" : "/",
            params: {}
        }, matchFilter = s => void 0 === matchFilters ? void 0 : matchFilters[s];
        for (let i = 0; i < len; i++) {
            const segment = segments[i], dynamic = ":" === segment[0], locSegment = dynamic ? locSegments[i] : locSegments[i].toLowerCase(), key = dynamic ? segment.slice(1) : segment.toLowerCase();
            if (dynamic && matchSegment(locSegment, matchFilter(key))) match.params[key] = locSegment; else if (dynamic || !matchSegment(locSegment, key)) return null;
            match.path += `/${locSegment}`;
        }
        if (splat) {
            const remainder = lenDiff ? locSegments.slice(-lenDiff).join("/") : "";
            if (!matchSegment(remainder, matchFilter(splat))) return null;
            match.params[splat] = remainder;
        }
        return match;
    };
}

function matchSegment(input, filter) {
    const isEqual = s => s === input;
    return void 0 === filter || ("string" == typeof filter ? isEqual(filter) : "function" == typeof filter ? filter(input) : Array.isArray(filter) ? filter.some(isEqual) : filter instanceof RegExp && filter.test(input));
}

function scoreRoute(route) {
    const [pattern, splat] = route.pattern.split("/*", 2), segments = pattern.split("/").filter(Boolean);
    return segments.reduce((score, segment) => score + (segment.startsWith(":") ? 2 : 3), segments.length - (void 0 === splat ? 0 : 1));
}

function createMemoObject(fn) {
    const map = new Map, owner = getOwner();
    return new Proxy({}, {
        get: (_, property) => (map.has(property) || runWithOwner(owner, () => map.set(property, createMemo(() => fn()[property]))), 
        map.get(property)()),
        getOwnPropertyDescriptor: () => ({
            enumerable: !0,
            configurable: !0
        }),
        ownKeys: () => Reflect.ownKeys(fn()),
        has: (_, property) => property in fn()
    });
}

function expandOptionals(pattern) {
    let match = /(\/?\:[^\/]+)\?/.exec(pattern);
    if (!match) return [ pattern ];
    let prefix = pattern.slice(0, match.index), suffix = pattern.slice(match.index + match[0].length);
    const prefixes = [ prefix, prefix += match[1] ];
    for (;match = /^(\/\:[^\/]+)\?/.exec(suffix); ) prefixes.push(prefix += match[1]), 
    suffix = suffix.slice(match[0].length);
    return expandOptionals(suffix).reduce((results, expansion) => [ ...results, ...prefixes.map(p => p + expansion) ], []);
}

var intent, RouterContextObj = createContext(), RouteContextObj = createContext(), useRouter = () => function(value, message) {
    if (null == value) throw new Error(message);
    return value;
}(useContext(RouterContextObj), "<A> and 'use' router primitives can be only used inside a Route."), useNavigate = () => useRouter().navigatorFactory(), useLocation = () => useRouter().location, usePreloadRoute = () => {
    const pre = useRouter().preloadRoute;
    return (url, options = {}) => pre(url instanceof URL ? url : new URL(url, "http://sr"), options.preloadData);
}, useMatch = (path, matchFilters) => {
    const location = useLocation(), matchers = createMemo(() => expandOptionals(path()).map(path => createMatcher(path, void 0, matchFilters)));
    return createMemo(() => {
        for (const matcher of matchers()) {
            const match = matcher(location.pathname);
            if (match) return match;
        }
    });
}, useParams = () => useRouter().params;

function createRoutes(routeDef, base = "") {
    const {component: component, preload: preload, load: load, children: children, info: info} = routeDef, isLeaf = !children || Array.isArray(children) && !children.length, shared = {
        key: routeDef,
        component: component,
        preload: preload || load,
        info: info
    };
    return asArray(routeDef.path).reduce((acc, originalPath) => {
        for (const expandedPath of expandOptionals(originalPath)) {
            const path = joinPaths(base, expandedPath);
            let pattern = isLeaf ? path : path.split("/*", 1)[0];
            pattern = pattern.split("/").map(s => s.startsWith(":") || s.startsWith("*") ? s : encodeURIComponent(s)).join("/"), 
            acc.push({
                ...shared,
                originalPath: originalPath,
                pattern: pattern,
                matcher: createMatcher(pattern, !isLeaf, routeDef.matchFilters)
            });
        }
        return acc;
    }, []);
}

function createBranch(routes, index = 0) {
    return {
        routes: routes,
        score: 1e4 * scoreRoute(routes[routes.length - 1]) - index,
        matcher(location) {
            const matches = [];
            for (let i = routes.length - 1; i >= 0; i--) {
                const route = routes[i], match = route.matcher(location);
                if (!match) return null;
                matches.unshift({
                    ...match,
                    route: route
                });
            }
            return matches;
        }
    };
}

function asArray(value) {
    return Array.isArray(value) ? value : [ value ];
}

function createBranches(routeDef, base = "", stack = [], branches = []) {
    const routeDefs = asArray(routeDef);
    for (let i = 0, len = routeDefs.length; i < len; i++) {
        const def = routeDefs[i];
        if (def && "object" == typeof def) {
            def.hasOwnProperty("path") || (def.path = "");
            const routes = createRoutes(def, base);
            for (const route of routes) {
                stack.push(route);
                const isEmptyArray = Array.isArray(def.children) && 0 === def.children.length;
                if (def.children && !isEmptyArray) createBranches(def.children, route.pattern, stack, branches); else {
                    const branch = createBranch([ ...stack ], branches.length);
                    branches.push(branch);
                }
                stack.pop();
            }
        }
    }
    return stack.length ? branches : branches.sort((a, b) => b.score - a.score);
}

function getRouteMatches(branches, location) {
    for (let i = 0, len = branches.length; i < len; i++) {
        const match = branches[i].matcher(location);
        if (match) return match;
    }
    return [];
}

function getIntent() {
    return intent;
}

function setInPreloadFn(value) {
    0;
}

function createRouterContext(integration, branches, getContext, options = {}) {
    const {signal: [source, setSource], utils: utils = {}} = integration, parsePath = utils.parsePath || (p => p), renderPath = utils.renderPath || (p => p), beforeLeave = utils.beforeLeave || createBeforeLeave(), basePath = resolvePath("", options.base || "");
    if (void 0 === basePath) throw new Error(`${basePath} is not a valid base path`);
    basePath && !source().value && setSource({
        value: basePath,
        replace: !0,
        scroll: !1
    });
    const [isRouting, setIsRouting] = createSignal(!1);
    let lastTransitionTarget;
    const transition = (newIntent, newTarget) => {
        newTarget.value === reference() && newTarget.state === state() || (void 0 === lastTransitionTarget && setIsRouting(!0), 
        intent = newIntent, lastTransitionTarget = newTarget, startTransition(() => {
            lastTransitionTarget === newTarget && (setReference(lastTransitionTarget.value), 
            setState(lastTransitionTarget.state), resetErrorBoundaries(), submissions[1](subs => subs.filter(s => s.pending)));
        }).finally(() => {
            lastTransitionTarget === newTarget && batch(() => {
                intent = void 0, "navigate" === newIntent && function(next) {
                    const first = referrers[0];
                    first && (setSource({
                        ...next,
                        replace: first.replace,
                        scroll: first.scroll
                    }), referrers.length = 0);
                }(lastTransitionTarget), setIsRouting(!1), lastTransitionTarget = void 0;
            });
        }));
    }, [reference, setReference] = createSignal(source().value), [state, setState] = createSignal(source().state), location = function(path, state, queryWrapper) {
        const origin = new URL("http://sr"), url = createMemo(prev => {
            const path_ = path();
            try {
                return new URL(path_, origin);
            } catch (err) {
                return console.error(`Invalid path ${path_}`), prev;
            }
        }, origin, {
            equals: (a, b) => a.href === b.href
        }), pathname = createMemo(() => url().pathname), search = createMemo(() => url().search, !0), hash = createMemo(() => url().hash), queryFn = on(search, () => extractSearchParams(url()));
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
    }(reference, state, utils.queryWrapper), referrers = [], submissions = createSignal([]), matches = createMemo(() => "function" == typeof options.transformUrl ? getRouteMatches(branches(), options.transformUrl(location.pathname)) : getRouteMatches(branches(), location.pathname)), buildParams = () => {
        const m = matches(), params = {};
        for (let i = 0; i < m.length; i++) Object.assign(params, m[i].params);
        return params;
    }, params = utils.paramsWrapper ? utils.paramsWrapper(buildParams, branches) : createMemoObject(buildParams), baseRoute = {
        pattern: basePath,
        path: () => basePath,
        outlet: () => null,
        resolvePath: to => resolvePath(basePath, to)
    };
    return createRenderEffect(on(source, source => transition("native", source), {
        defer: !0
    })), {
        base: baseRoute,
        location: location,
        params: params,
        isRouting: isRouting,
        renderPath: renderPath,
        parsePath: parsePath,
        navigatorFactory: function(route) {
            return route = route || useContext(RouteContextObj) || baseRoute, (to, options) => function(route, to, options) {
                untrack(() => {
                    if ("number" == typeof to) return void (to && (utils.go ? utils.go(to) : console.warn("Router integration does not support relative routing")));
                    const queryOnly = !to || "?" === to[0], {replace: replace, resolve: resolve, scroll: scroll, state: nextState} = {
                        replace: !1,
                        resolve: !queryOnly,
                        scroll: !0,
                        ...options
                    }, resolvedTo = resolve ? route.resolvePath(to) : resolvePath(queryOnly && location.pathname || "", to);
                    if (void 0 === resolvedTo) throw new Error(`Path '${to}' is not a routable path`);
                    if (referrers.length >= 100) throw new Error("Too many redirects");
                    const current = reference();
                    resolvedTo === current && nextState === state() || beforeLeave.confirm(resolvedTo, options) && (referrers.push({
                        value: current,
                        replace: replace,
                        scroll: scroll,
                        state: state()
                    }), transition("navigate", {
                        value: resolvedTo,
                        state: nextState
                    }));
                });
            }(route, to, options);
        },
        matches: matches,
        beforeLeave: beforeLeave,
        preloadRoute: function(url, preloadData) {
            const matches = getRouteMatches(branches(), url.pathname), prevIntent = intent;
            intent = "preload";
            for (let match in matches) {
                const {route: route, params: params} = matches[match];
                route.component && route.component.preload && route.component.preload();
                const {preload: preload} = route;
                preloadData && preload && runWithOwner(getContext(), () => preload({
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
                }));
            }
            intent = prevIntent;
        },
        singleFlight: void 0 === options.singleFlight || options.singleFlight,
        submissions: submissions
    };
}

function createRouteContext(router, parent, outlet, match) {
    const {base: base, location: location, params: params} = router, {pattern: pattern, component: component, preload: preload} = match().route, path = createMemo(() => match().path);
    component && component.preload && component.preload();
    const data = preload ? preload({
        params: params,
        location: location,
        intent: intent || "initial"
    }) : void 0;
    return {
        parent: parent,
        pattern: pattern,
        path: path,
        outlet: () => component ? createComponent(component, {
            params: params,
            location: location,
            data: data,
            get children() {
                return outlet();
            }
        }) : outlet(),
        resolvePath: to => resolvePath(base.path(), to, path())
    };
}

export { saveCurrentDepth as _, createRouterContext as a, setInPreloadFn as c, useNavigate as d, useParams as f, notifyIfNotBlocked as g, keepDepth as h, createRouteContext as i, useLocation as l, createBeforeLeave as m, RouterContextObj as n, getIntent as o, usePreloadRoute as p, createBranches as r, getRouteMatches as s, RouteContextObj as t, useMatch as u };