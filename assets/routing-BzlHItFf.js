import { B as createContext, H as createMemo, I as batch, R as createComponent, U as createRenderEffect, Y as getOwner, Z as on, at as useContext, et as resetErrorBoundaries, it as untrack, q as createSignal, rt as startTransition, tt as runWithOwner } from "./render-B5QjUuTk.js";

import { t as voidFn } from "./web-D_Lor4zg.js";

function createBeforeLeave() {
    let listeners = new Set;
    function subscribe(listener) {
        listeners.add(listener);
        return () => listeners.delete(listener);
    }
    let ignore = false;
    function confirm(to, options) {
        if (ignore) return !(ignore = false);
        const e = {
            to: to,
            options: options,
            defaultPrevented: false,
            preventDefault: () => e.defaultPrevented = true
        };
        for (const l of listeners) l.listener({
            ...e,
            from: l.location,
            retry: force => {
                force && (ignore = true);
                l.navigate(to, {
                    ...options,
                    resolve: false
                });
            }
        });
        return !e.defaultPrevented;
    }
    return {
        subscribe: subscribe,
        confirm: confirm
    };
}

var depth;

function saveCurrentDepth() {
    if (!window.history.state || window.history.state._depth == null) window.history.replaceState({
        ...window.history.state,
        _depth: window.history.length - 1
    }, "");
    depth = window.history.state._depth;
}

if (!false) saveCurrentDepth();

function keepDepth(state) {
    return {
        ...state,
        _depth: window.history.state && window.history.state._depth
    };
}

function notifyIfNotBlocked(notify, block) {
    let ignore = false;
    return () => {
        const prevDepth = depth;
        saveCurrentDepth();
        const delta = prevDepth == null ? null : depth - prevDepth;
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

var hasSchemeRegex = /^(?:[a-z0-9]+:)?\/\//i;

var trimPathRegex = /^\/+|(\/)\/+$/g;

var mockBase = "http://sr";

function normalizePath(path, omitSlash = false) {
    const s = path.replace(trimPathRegex, "$1");
    return s ? omitSlash || /^[?#]/.test(s) ? s : "/" + s : "";
}

function resolvePath(base, path, from) {
    if (hasSchemeRegex.test(path)) return;
    const basePath = normalizePath(base);
    const fromPath = from && normalizePath(from);
    let result = "";
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
    const params = {};
    url.searchParams.forEach((value, key) => {
        if (key in params) if (Array.isArray(params[key])) params[key].push(value); else params[key] = [ params[key], value ]; else params[key] = value;
    });
    return params;
}

function createMatcher(path, partial, matchFilters) {
    const [pattern, splat] = path.split("/*", 2);
    const segments = pattern.split("/").filter(Boolean);
    const len = segments.length;
    return location => {
        const locSegments = location.split("/").filter(Boolean);
        const lenDiff = locSegments.length - len;
        if (lenDiff < 0 || lenDiff > 0 && splat === void 0 && !partial) return null;
        const match = {
            path: len ? "" : "/",
            params: {}
        };
        const matchFilter = s => matchFilters === void 0 ? void 0 : matchFilters[s];
        for (let i = 0; i < len; i++) {
            const segment = segments[i];
            const dynamic = segment[0] === ":";
            const locSegment = dynamic ? locSegments[i] : locSegments[i].toLowerCase();
            const key = dynamic ? segment.slice(1) : segment.toLowerCase();
            if (dynamic && matchSegment(locSegment, matchFilter(key))) match.params[key] = locSegment; else if (dynamic || !matchSegment(locSegment, key)) return null;
            match.path += `/${locSegment}`;
        }
        if (splat) {
            const remainder = lenDiff ? locSegments.slice(-lenDiff).join("/") : "";
            if (matchSegment(remainder, matchFilter(splat))) match.params[splat] = remainder; else return null;
        }
        return match;
    };
}

function matchSegment(input, filter) {
    const isEqual = s => s === input;
    if (filter === void 0) return true; else if (typeof filter === "string") return isEqual(filter); else if (typeof filter === "function") return filter(input); else if (Array.isArray(filter)) return filter.some(isEqual); else if (filter instanceof RegExp) return filter.test(input);
    return false;
}

function scoreRoute(route) {
    const [pattern, splat] = route.pattern.split("/*", 2);
    const segments = pattern.split("/").filter(Boolean);
    return segments.reduce((score, segment) => score + (segment.startsWith(":") ? 2 : 3), segments.length - (splat === void 0 ? 0 : 1));
}

function createMemoObject(fn) {
    const map = new Map;
    const owner = getOwner();
    return new Proxy({}, {
        get(_, property) {
            if (!map.has(property)) runWithOwner(owner, () => map.set(property, createMemo(() => fn()[property])));
            return map.get(property)();
        },
        getOwnPropertyDescriptor() {
            return {
                enumerable: true,
                configurable: true
            };
        },
        ownKeys() {
            return Reflect.ownKeys(fn());
        },
        has(_, property) {
            return property in fn();
        }
    });
}

function expandOptionals(pattern) {
    let match = /(\/?\:[^\/]+)\?/.exec(pattern);
    if (!match) return [ pattern ];
    let prefix = pattern.slice(0, match.index);
    let suffix = pattern.slice(match.index + match[0].length);
    const prefixes = [ prefix, prefix += match[1] ];
    while (match = /^(\/\:[^\/]+)\?/.exec(suffix)) {
        prefixes.push(prefix += match[1]);
        suffix = suffix.slice(match[0].length);
    }
    return expandOptionals(suffix).reduce((results, expansion) => [ ...results, ...prefixes.map(p => p + expansion) ], []);
}

var MAX_REDIRECTS = 100;

var RouterContextObj = createContext();

var RouteContextObj = createContext();

var useRouter = () => invariant(useContext(RouterContextObj), "<A> and 'use' router primitives can be only used inside a Route.");

var useNavigate = () => useRouter().navigatorFactory();

var useLocation = () => useRouter().location;

var usePreloadRoute = () => {
    const pre = useRouter().preloadRoute;
    return (url, options = {}) => pre(url instanceof URL ? url : new URL(url, mockBase), options.preloadData);
};

var useMatch = (path, matchFilters) => {
    const location = useLocation();
    const matchers = createMemo(() => expandOptionals(path()).map(path => createMatcher(path, void 0, matchFilters)));
    return createMemo(() => {
        for (const matcher of matchers()) {
            const match = matcher(location.pathname);
            if (match) return match;
        }
    });
};

var useParams = () => useRouter().params;

function createRoutes(routeDef, base = "") {
    const {component: component, preload: preload, load: load, children: children, info: info} = routeDef;
    const isLeaf = !children || Array.isArray(children) && !children.length;
    const shared = {
        key: routeDef,
        component: component,
        preload: preload || load,
        info: info
    };
    return asArray(routeDef.path).reduce((acc, originalPath) => {
        for (const expandedPath of expandOptionals(originalPath)) {
            const path = joinPaths(base, expandedPath);
            let pattern = isLeaf ? path : path.split("/*", 1)[0];
            pattern = pattern.split("/").map(s => s.startsWith(":") || s.startsWith("*") ? s : encodeURIComponent(s)).join("/");
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
        score: scoreRoute(routes[routes.length - 1]) * 1e4 - index,
        matcher(location) {
            const matches = [];
            for (let i = routes.length - 1; i >= 0; i--) {
                const route = routes[i];
                const match = route.matcher(location);
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
        if (def && typeof def === "object") {
            if (!def.hasOwnProperty("path")) def.path = "";
            const routes = createRoutes(def, base);
            for (const route of routes) {
                stack.push(route);
                const isEmptyArray = Array.isArray(def.children) && def.children.length === 0;
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

function createLocation(path, state, queryWrapper) {
    const origin = new URL(mockBase);
    const url = createMemo(prev => {
        const path_ = path();
        try {
            return new URL(path_, origin);
        } catch (err) {
            console.error(`Invalid path ${path_}`);
            return prev;
        }
    }, origin, {
        equals: (a, b) => a.href === b.href
    });
    const pathname = createMemo(() => url().pathname);
    const search = createMemo(() => url().search, true);
    const hash = createMemo(() => url().hash);
    const key = () => "";
    const queryFn = on(search, () => extractSearchParams(url()));
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

var intent;

function getIntent() {
    return intent;
}

var inPreloadFn = false;

function setInPreloadFn(value) {
    inPreloadFn = value;
}

function createRouterContext(integration, branches, getContext, options = {}) {
    const {signal: [source, setSource], utils: utils = {}} = integration;
    const parsePath = utils.parsePath || (p => p);
    const renderPath = utils.renderPath || (p => p);
    const beforeLeave = utils.beforeLeave || createBeforeLeave();
    const basePath = resolvePath("", options.base || "");
    if (basePath === void 0) throw new Error(`${basePath} is not a valid base path`); else if (basePath && !source().value) setSource({
        value: basePath,
        replace: true,
        scroll: false
    });
    const [isRouting, setIsRouting] = createSignal(false);
    let lastTransitionTarget;
    const transition = (newIntent, newTarget) => {
        if (newTarget.value === reference() && newTarget.state === state()) return;
        if (lastTransitionTarget === void 0) setIsRouting(true);
        intent = newIntent;
        lastTransitionTarget = newTarget;
        startTransition(() => {
            if (lastTransitionTarget !== newTarget) return;
            setReference(lastTransitionTarget.value);
            setState(lastTransitionTarget.state);
            resetErrorBoundaries();
            if (!false) submissions[1](subs => subs.filter(s => s.pending));
        }).finally(() => {
            if (lastTransitionTarget !== newTarget) return;
            batch(() => {
                intent = void 0;
                if (newIntent === "navigate") navigateEnd(lastTransitionTarget);
                setIsRouting(false);
                lastTransitionTarget = void 0;
            });
        });
    };
    const [reference, setReference] = createSignal(source().value);
    const [state, setState] = createSignal(source().state);
    const location = createLocation(reference, state, utils.queryWrapper);
    const referrers = [];
    const submissions = createSignal(false ? initFromFlash() : []);
    const matches = createMemo(() => {
        if (typeof options.transformUrl === "function") return getRouteMatches(branches(), options.transformUrl(location.pathname));
        return getRouteMatches(branches(), location.pathname);
    });
    const buildParams = () => {
        const m = matches();
        const params = {};
        for (let i = 0; i < m.length; i++) Object.assign(params, m[i].params);
        return params;
    };
    const params = utils.paramsWrapper ? utils.paramsWrapper(buildParams, branches) : createMemoObject(buildParams);
    const baseRoute = {
        pattern: basePath,
        path: () => basePath,
        outlet: () => null,
        resolvePath(to) {
            return resolvePath(basePath, to);
        }
    };
    createRenderEffect(on(source, source => transition("native", source), {
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
        untrack(() => {
            if (typeof to === "number") {
                if (!to) {} else if (utils.go) utils.go(to); else console.warn("Router integration does not support relative routing");
                return;
            }
            const queryOnly = !to || to[0] === "?";
            const {replace: replace, resolve: resolve, scroll: scroll, state: nextState} = {
                replace: false,
                resolve: !queryOnly,
                scroll: true,
                ...options
            };
            const resolvedTo = resolve ? route.resolvePath(to) : resolvePath(queryOnly && location.pathname || "", to);
            if (resolvedTo === void 0) throw new Error(`Path '${to}' is not a routable path`); else if (referrers.length >= MAX_REDIRECTS) throw new Error("Too many redirects");
            const current = reference();
            if (resolvedTo !== current || nextState !== state()) {
                if (false) {
                    const e = voidFn();
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
        return (to, options) => navigateFromRoute(route, to, options);
    }
    function navigateEnd(next) {
        const first = referrers[0];
        if (first) {
            setSource({
                ...next,
                replace: first.replace,
                scroll: first.scroll
            });
            referrers.length = 0;
        }
    }
    function preloadRoute(url, preloadData) {
        const matches = getRouteMatches(branches(), url.pathname);
        const prevIntent = intent;
        intent = "preload";
        for (let match in matches) {
            const {route: route, params: params} = matches[match];
            route.component && route.component.preload && route.component.preload();
            const {preload: preload} = route;
            inPreloadFn = true;
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
            inPreloadFn = false;
        }
        intent = prevIntent;
    }
    function initFromFlash() {
        const e = voidFn();
        return e && e.router && e.router.submission ? [ e.router.submission ] : [];
    }
}

function createRouteContext(router, parent, outlet, match) {
    const {base: base, location: location, params: params} = router;
    const {pattern: pattern, component: component, preload: preload} = match().route;
    const path = createMemo(() => match().path);
    component && component.preload && component.preload();
    inPreloadFn = true;
    const data = preload ? preload({
        params: params,
        location: location,
        intent: intent || "initial"
    }) : void 0;
    inPreloadFn = false;
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
        resolvePath(to) {
            return resolvePath(base.path(), to, path());
        }
    };
}

export { saveCurrentDepth as _, createRouterContext as a, setInPreloadFn as c, useNavigate as d, useParams as f, notifyIfNotBlocked as g, keepDepth as h, createRouteContext as i, useLocation as l, createBeforeLeave as m, RouterContextObj as n, getIntent as o, usePreloadRoute as p, createBranches as r, getRouteMatches as s, RouteContextObj as t, useMatch as u };