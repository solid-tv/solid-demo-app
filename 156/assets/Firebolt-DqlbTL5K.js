import { H as createEffect, J as createSignal, a as createElement, h as setProp, i as createComponent, l as insert, s as createTextNode, u as insertNode } from "./render-UQXSDH2t.js";

import { t as Row } from "./Row-_H-XSkgI.js";

import { n as setGlobalBackground } from "./state-B_5okeWg.js";

var listener, mock$1, callback, testHarness, win$3 = "undefined" != typeof window ? window : {}, pending = [], eventMap = {};

function handle(json) {
    let result;
    try {
        result = function(method, params) {
            let api = function(obj = {}, key) {
                const keys = key.split(".");
                let ref = obj;
                for (let i = 0; i < keys.length; i++) ref = (Object.entries(ref).find(([k, v]) => k.toLowerCase() === keys[i].toLowerCase()) || [ null, {} ])[1];
                return ref;
            }(mock$1, method);
            method.match(/^[a-zA-Z]+\.on[A-Za-z]+$/) && (api = {
                event: method,
                listening: !0
            });
            return "function" == typeof api ? null == params ? api() : api(params) : api;
        }(json.method, json.params);
    } catch (error) {
        setTimeout(() => callback(JSON.stringify({
            jsonrpc: "2.0",
            error: {
                code: -32602,
                message: "Invalid params (this is a mock error from the mock transport layer)"
            },
            id: json.id
        })));
    }
    setTimeout(() => callback(JSON.stringify({
        jsonrpc: "2.0",
        result: result,
        id: json.id
    })));
}

function event(module, event, value) {
    const listener = Object.entries(eventMap).find(([k, v]) => v.toLowerCase() === module.toLowerCase() + "." + event.toLowerCase());
    if (listener) {
        let message = JSON.stringify({
            jsonrpc: "2.0",
            id: parseInt(listener[0]),
            result: value
        });
        callback(message);
    }
}

win$3.__firebolt && win$3.__firebolt.testHarness && (testHarness = win$3.__firebolt.testHarness);

var MockTransport_default = {
    send: function send(message) {
        console.debug("Sending message to transport: " + message);
        let json = JSON.parse(message);
        if (Array.isArray(json)) return void json.forEach(j => send(JSON.stringify(j)));
        let [module, method] = json.method.split(".");
        testHarness && testHarness.onSend && testHarness.onSend(module, method, json.params, json.id), 
        method.match(/^on[A-Z]/) && (json.params.listen ? eventMap[json.id] = module.toLowerCase() + "." + method[2].toLowerCase() + method.substr(3) : Object.keys(eventMap).forEach(key => {
            eventMap[key] === module.toLowerCase() + "." + method[2].toLowerCase() + method.substr(3) && delete eventMap[key];
        })), mock$1 ? handle(json) : pending.push(json);
    },
    receive: function(_callback) {
        callback = _callback, testHarness && "function" == typeof testHarness.initialize && testHarness.initialize({
            emit: event,
            listen: function(...args) {
                listener(...args);
            }
        });
    },
    event: event
};

function Router_default(params, callbackOrValue, contextParameterCount) {
    const numArgs = params ? Object.values(params).length : 0;
    return numArgs === contextParameterCount && void 0 === callbackOrValue ? "getter" : numArgs === contextParameterCount && "function" == typeof callbackOrValue || 0 === numArgs && "function" == typeof callbackOrValue ? "subscriber" : numArgs === contextParameterCount && void 0 !== callbackOrValue ? "setter" : null;
}

var mocks = {};

var MockProps_default = {
    mock: function(module, method, params, value, contextParameterCount, def) {
        const type = Router_default(params, value, contextParameterCount), key = `${module}.${method}${contextParameterCount ? "." + Object.keys(params).filter(key => "value" !== key).map(key => params[key]).join(".") : ""}`;
        if ("getter" === type) return mocks.hasOwnProperty(key) ? mocks[key] : def;
        if ("subscriber" === type) ; else if ("setter" === type) return mocks[key] = value, 
        MockTransport_default.event(module, `${method}Changed`, {
            value: value
        }), null;
    }
}, defaults_default$16 = {
    closedCaptions: {
        enabled: !0,
        styles: {
            fontFamily: "monospaced_sanserif",
            fontSize: 1,
            fontColor: "#ffffff",
            fontEdge: "none",
            fontEdgeColor: "#7F7F7F",
            fontOpacity: 100,
            backgroundColor: "#000000",
            backgroundOpacity: 100,
            textAlign: "center",
            textAlignVertical: "middle",
            windowColor: "white",
            windowOpacity: 50
        },
        preferredLanguages: [ "eng", "spa" ]
    },
    closedCaptionsSettings: function(params) {
        return MockProps_default.mock("Accessibility", "closedCaptionsSettings", params, void 0, 0, {
            enabled: !0,
            styles: {
                fontFamily: "monospaced_sanserif",
                fontSize: 1,
                fontColor: "#ffffff",
                fontEdge: "none",
                fontEdgeColor: "#7F7F7F",
                fontOpacity: 100,
                backgroundColor: "#000000",
                backgroundOpacity: 100,
                textAlign: "center",
                textAlignVertical: "middle",
                windowColor: "white",
                windowOpacity: 50
            },
            preferredLanguages: [ "eng", "spa" ]
        });
    },
    highContrastUI: function(params) {
        return MockProps_default.mock("Accessibility", "highContrastUI", params, void 0, 0, !0);
    },
    voiceGuidance: {
        enabled: !0,
        navigationHints: !0,
        rate: 1
    },
    voiceGuidanceSettings: function(params) {
        return MockProps_default.mock("Accessibility", "voiceGuidanceSettings", params, void 0, 0, {
            enabled: !0,
            navigationHints: !0,
            rate: 1
        });
    },
    audioDescriptionSettings: function(params) {
        return MockProps_default.mock("Accessibility", "audioDescriptionSettings", params, void 0, 0, {
            enabled: !0
        });
    }
}, defaults_default$15 = {
    id: function(params) {
        return MockProps_default.mock("Account", "id", params, void 0, 0, "123");
    },
    uid: function(params) {
        return MockProps_default.mock("Account", "uid", params, void 0, 0, "ee6723b8-7ab3-462c-8d93-dbf61227998e");
    }
}, defaults_default$14 = {
    config: {
        adServerUrl: "https://demo.v.fwmrm.net/ad/p/1",
        adServerUrlTemplate: "https://demo.v.fwmrm.net/ad/p/1?flag=+sltp+exvt+slcb+emcr+amcb+aeti&prof=12345:caf_allinone_profile &nw=12345&mode=live&vdur=123&caid=a110523018&asnw=372464&csid=gmott_ios_tablet_watch_live_ESPNU&ssnw=372464&vip=198.205.92.1&resp=vmap1&metr=1031&pvrn=12345&vprn=12345&vcid=1X0Ce7L3xRWlTeNhc7br8Q%3D%3D",
        adNetworkId: "519178",
        adProfileId: "12345:caf_allinone_profile",
        adSiteSectionId: "caf_allinone_profile_section",
        adOptOut: !0,
        privacyData: "ew0KICAicGR0IjogImdkcDp2MSIsDQogICJ1c19wcml2YWN5IjogIjEtTi0iLA0KICAibG10IjogIjEiIA0KfQ0K",
        ifaValue: "01234567-89AB-CDEF-GH01-23456789ABCD",
        ifa: "ewogICJ2YWx1ZSI6ICIwMTIzNDU2Ny04OUFCLUNERUYtR0gwMS0yMzQ1Njc4OUFCQ0QiLAogICJpZmFfdHlwZSI6ICJzc3BpZCIsCiAgImxtdCI6ICIwIgp9Cg==",
        appName: "FutureToday",
        appBundleId: "FutureToday.comcast",
        distributorAppId: "1001",
        deviceAdAttributes: "ewogICJib0F0dHJpYnV0ZXNGb3JSZXZTaGFyZUlkIjogIjEyMzQiCn0=",
        coppa: 0,
        authenticationEntity: "60f72475281cfba3852413bd53e957f6"
    },
    policy: function(params) {
        return MockProps_default.mock("Advertising", "policy", params, void 0, 0, {
            skipRestriction: "adsUnwatched",
            limitAdTracking: !1
        });
    },
    advertisingId: {
        ifa: "01234567-89AB-CDEF-GH01-23456789ABCD",
        ifa_type: "sspid",
        lmt: "0"
    },
    deviceAttributes: {},
    appBundleId: "app.operator"
}, defaults_default$11 = {
    ports: [ {
        port: "HDMI1",
        connected: !0,
        signal: "stable",
        arcCapable: !0,
        arcConnected: !0,
        edidVersion: "2.0",
        autoLowLatencyModeCapable: !0,
        autoLowLatencyModeSignalled: !0
    } ],
    port: {
        port: "HDMI1",
        connected: !0,
        signal: "stable",
        arcCapable: !0,
        arcConnected: !0,
        edidVersion: "2.0",
        autoLowLatencyModeCapable: !0,
        autoLowLatencyModeSignalled: !0
    },
    lowLatencyMode: function(params) {
        return MockProps_default.mock("HDMIInput", "lowLatencyMode", params, void 0, 0, !0);
    },
    autoLowLatencyModeCapable: function(params) {
        return MockProps_default.mock("HDMIInput", "autoLowLatencyModeCapable", params, void 0, 1, !0);
    },
    edidVersion: function(params) {
        return MockProps_default.mock("HDMIInput", "edidVersion", params, void 0, 1, "2.0");
    }
}, defaults_default$10 = {
    id: function(params) {
        return MockProps_default.mock("Device", "id", params, void 0, 0, "123");
    },
    distributor: function(params) {
        return MockProps_default.mock("Device", "distributor", params, void 0, 0, "Company");
    },
    platform: function(params) {
        return MockProps_default.mock("Device", "platform", params, void 0, 0, "WPE");
    },
    uid: function(params) {
        return MockProps_default.mock("Device", "uid", params, void 0, 0, "ee6723b8-7ab3-462c-8d93-dbf61227998e");
    },
    type: function(params) {
        return MockProps_default.mock("Device", "type", params, void 0, 0, "STB");
    },
    model: function(params) {
        return MockProps_default.mock("Device", "model", params, void 0, 0, "xi6");
    },
    sku: function(params) {
        return MockProps_default.mock("Device", "sku", params, void 0, 0, "AX061AEI");
    },
    make: function(params) {
        return MockProps_default.mock("Device", "make", params, void 0, 0, "Arris");
    },
    version: function(params) {
        return MockProps_default.mock("Device", "version", params, void 0, 0, {
            sdk: {
                major: 0,
                minor: 8,
                patch: 0,
                readable: "Firebolt JS SDK v0.8.0"
            },
            api: {
                major: 0,
                minor: 8,
                patch: 0,
                readable: "Firebolt API v0.8.0"
            },
            firmware: {
                major: 1,
                minor: 2,
                patch: 3,
                readable: "Device Firmware v1.2.3"
            },
            os: {
                major: 0,
                minor: 1,
                patch: 0,
                readable: "Firebolt OS v0.1.0"
            },
            debug: "Non-parsable build info for error logging only."
        });
    },
    hdcp: function(params) {
        return MockProps_default.mock("Device", "hdcp", params, void 0, 0, {
            "hdcp1.4": !0,
            "hdcp2.2": !0
        });
    },
    hdr: function(params) {
        return MockProps_default.mock("Device", "hdr", params, void 0, 0, {
            hdr10: !0,
            hdr10Plus: !0,
            dolbyVision: !0,
            hlg: !0
        });
    },
    audio: function(params) {
        return MockProps_default.mock("Device", "audio", params, void 0, 0, {
            stereo: !0,
            "dolbyDigital5.1": !0,
            "dolbyDigital5.1+": !0,
            dolbyAtmos: !0
        });
    },
    screenResolution: function(params) {
        return MockProps_default.mock("Device", "screenResolution", params, void 0, 0, [ 1920, 1080 ]);
    },
    videoResolution: function(params) {
        return MockProps_default.mock("Device", "videoResolution", params, void 0, 0, [ 1920, 1080 ]);
    },
    name: function(params) {
        return MockProps_default.mock("Device", "name", params, void 0, 0, "Living Room");
    },
    network: function(params) {
        return MockProps_default.mock("Device", "network", params, void 0, 0, {
            state: "connected",
            type: "wifi"
        });
    }
}, defaults_default$9 = {
    policy: function(params) {
        return MockProps_default.mock("Discovery", "policy", params, void 0, 0, {
            enableRecommendations: !0,
            shareWatchHistory: !0,
            rememberWatchedPrograms: !0
        });
    },
    entityInfo: !0,
    purchasedContent: !0,
    watched: !0,
    watchNext: !0,
    entitlements: !0,
    contentAccess: null,
    clearContentAccess: null,
    launch: !0,
    signIn: !0,
    signOut: !0,
    userInterest: null,
    userInterestResponse: null,
    userInterestError: null
}, inactive = {
    state: "inactive",
    previous: "initializing"
}, foreground = {
    state: "foreground",
    previous: "inactive"
}, unloading = {
    state: "unloading",
    previous: "inactive"
}, emit$1 = value => {
    MockTransport_default.event("Lifecycle", value.state, value);
}, win$2 = "undefined" != typeof window ? window : {}, automation = !!win$2.__firebolt && !!win$2.__firebolt.automation, defaults_default$7 = {
    ready: function() {
        inactive.previous = "initializing", setTimeout(() => emit$1(inactive), automation ? 1 : 500), 
        foreground.previous = "inactive", setTimeout(() => emit$1(foreground), automation ? 2 : 1e3);
    },
    close: function(params) {
        let reason = params.reason;
        if ("remoteButton" === reason) inactive.previous = "foreground", setTimeout(() => emit$1(inactive), automation ? 1 : 500); else {
            if (![ "userExit", "error" ].includes(reason)) throw "Invalid close reason";
            inactive.previous = "foreground", unloading.previous = "inactive", setTimeout(() => emit$1(inactive), automation ? 1 : 500), 
            setTimeout(() => emit$1(unloading), automation ? 2 : 1e3);
        }
    },
    finished: function() {
        win$2.location && (win$2.location.href = "about:blank");
    }
}, defaults_default$6 = {
    locality: function(params) {
        return MockProps_default.mock("Localization", "locality", params, void 0, 0, "Philadelphia");
    },
    postalCode: function(params) {
        return MockProps_default.mock("Localization", "postalCode", params, void 0, 0, "19103");
    },
    countryCode: function(params) {
        return MockProps_default.mock("Localization", "countryCode", params, void 0, 0, "US");
    },
    language: function(params) {
        return MockProps_default.mock("Localization", "language", params, void 0, 0, "en");
    },
    preferredAudioLanguages: function(params) {
        return MockProps_default.mock("Localization", "preferredAudioLanguages", params, void 0, 0, [ "spa", "eng" ]);
    },
    locale: function(params) {
        return MockProps_default.mock("Localization", "locale", params, void 0, 0, "en-US");
    },
    latlon: [ 39.9549, 75.1699 ],
    additionalInfo: {}
}, defaults_default$2 = {
    protocols: {
        "dial1.7": !0
    },
    device: "device-id",
    friendlyName: function(params) {
        return MockProps_default.mock("SecondScreen", "friendlyName", params, void 0, 0, "Living Room");
    }
}, defaults_default = {
    localization: defaults_default$6,
    device: defaults_default$10,
    accessibility: defaults_default$16
}, Queue = class {
    constructor() {
        this._callback = null, this._queue = [];
    }
    send(json) {
        this._queue.push(json);
    }
    receive(_callback) {
        this._callback = _callback;
    }
    flush(transport) {
        transport.receive(this._callback), this._queue.forEach(item => transport.send(item));
    }
}, settings = {}, subscribers = {}, Settings_default = {
    get(type, key, fallback = void 0) {
        const val = ((obj = {}, key) => {
            const keys = key.split(".");
            for (let i = 0; i < keys.length; i++) obj = obj[keys[i]] = void 0 !== obj[keys[i]] ? obj[keys[i]] : {};
            return "object" == typeof obj ? Object.keys(obj).length ? obj : void 0 : obj;
        })(settings[type], key);
        return void 0 !== val ? val : fallback;
    },
    has(type, key) {
        return !!this.get(type, key);
    },
    set(key, value) {
        settings.user[key] = value, ((key, value) => {
            subscribers[key] && subscribers[key].forEach(subscriber => subscriber(value));
        })(key, value);
    },
    subscribe(key, callback) {
        subscribers[key] = subscribers[key] || [], subscribers[key].push(callback);
    },
    unsubscribe(key, callback) {
        if (callback) {
            const index = subscribers[key] && subscribers[key].findIndex(cb => cb === callback);
            index > -1 && subscribers[key].splice(index, 1);
        } else key in subscribers && (subscribers[key] = []);
    },
    clearSubscribers() {
        for (const key of Object.getOwnPropertyNames(subscribers)) delete subscribers[key];
    },
    setLogLevel(logLevel) {
        settings.platform.logLevel = logLevel;
    },
    getLogLevel: () => settings.platform.logLevel
}, win$1 = "undefined" != typeof window ? window : {}, LegacyTransport = class LegacyTransport {
    constructor(bridge) {
        this.bridge = bridge;
    }
    send(msg) {
        this.bridge.JSMessageChanged(msg, () => {});
    }
    receive(callback) {
        win$1.$badger = win$1.$badger || {};
        const badgerCallback = win$1.$badger.callback ? win$1.$badger.callback.bind(win$1.$badger) : null, badgerEvent = win$1.$badger.event ? win$1.$badger.event.bind(win$1.$badger) : null;
        win$1.$badger.callback = (pid, success, json) => {
            json.jsonrpc ? callback(JSON.stringify(json)) : badgerCallback && badgerCallback(pid, success, json);
        }, win$1.$badger.event = (handlerId, json) => {
            json.jsonrpc ? callback(JSON.stringify(json)) : badgerEvent && badgerEvent(handlerId, json);
        };
    }
    static isLegacy(transport) {
        return LegacyTransport.isXREProxy(transport) || void 0 === transport.send && transport.JSMessageChanged;
    }
    static isXREProxy(transport) {
        return void 0 !== transport.proxyObjectTest;
    }
}, WebsocketTransport = class {
    constructor(endpoint) {
        this._endpoint = endpoint, this._ws = null, this._connected = !1, this._queue = [], 
        this._callbacks = [];
    }
    send(msg) {
        this._connect(), this._connected ? this._ws.send(msg) : this._queue.length < 100 && this._queue.push(msg);
    }
    receive(callback) {
        callback && (this._connect(), this._callbacks.push(callback));
    }
    _notifyCallbacks(message) {
        for (let i = 0; i < this._callbacks.length; i++) setTimeout(() => this._callbacks[i](message), 1);
    }
    _connect() {
        this._ws || (this._ws = new WebSocket(this._endpoint, [ "jsonrpc" ]), this._ws.addEventListener("message", message => {
            this._notifyCallbacks(message.data);
        }), this._ws.addEventListener("error", message => {}), this._ws.addEventListener("close", message => {
            this._ws = null, this._connected = !1;
        }), this._ws.addEventListener("open", message => {
            this._connected = !0;
            for (let i = 0; i < this._queue.length; i++) this._ws.send(this._queue[i]);
            this._queue = [];
        }));
    }
};

var Results_default = {
    transform: function(result, transforms) {
        if (!transforms || !transforms.methods) return result;
        const {methods: methods} = transforms, transformed = JSON.parse(JSON.stringify(result));
        return Object.keys(methods).forEach(key => {
            const method_info = methods[key], [module, method] = method_info["x-method"].split("."), params = {};
            params[method_info["x-this-param"]] = transformed, transformed[key] = (...args) => {
                for (var i = 0; i < args.length; i++) params[method_info["x-additional-params"][i]] = args[i];
                return Transport.send(module.toLowerCase(), method, params);
            };
        }), transformed;
    }
}, moduleInstance = null, win = "undefined" != typeof window ? window : {}, Transport = class Transport {
    constructor() {
        this._promises = [], this._transport = null, this._id = 1, this._eventEmitters = [], 
        this._eventIds = [], this._queue = new Queue, this._deprecated = {}, this.isMock = !1;
    }
    static addEventEmitter(emitter) {
        Transport.get()._eventEmitters.push(emitter);
    }
    static registerDeprecatedMethod(module, method, alternative) {
        Transport.get()._deprecated[module.toLowerCase() + "." + method.toLowerCase()] = {
            alternative: alternative || ""
        };
    }
    _endpoint() {
        return win.__firebolt && win.__firebolt.endpoint ? win.__firebolt.endpoint : null;
    }
    constructTransportLayer() {
        let transport;
        const endpoint = this._endpoint();
        return endpoint && (endpoint.startsWith("ws://") || endpoint.startsWith("wss://")) ? (transport = new WebsocketTransport(endpoint), 
        transport.receive(this.receiveHandler.bind(this))) : void 0 !== win.ServiceManager && win.ServiceManager && win.ServiceManager.version ? (transport = this._queue, 
        win.ServiceManager.getServiceForJavaScript("com.comcast.BridgeObject_1", service => {
            transport = LegacyTransport.isLegacy(service) ? new LegacyTransport(service) : service, 
            this.setTransportLayer(transport);
        })) : (this.isMock = !0, transport = MockTransport_default, transport.receive(this.receiveHandler.bind(this))), 
        transport;
    }
    setTransportLayer(tl) {
        this._transport = tl, this._queue.flush(tl);
    }
    static send(module, method, params, transforms) {
        return Transport.get()._send(module, method, params, transforms);
    }
    static listen(module, method, params, transforms) {
        return Transport.get()._sendAndGetId(module, method, params, transforms);
    }
    _send(module, method, params, transforms) {
        return !Array.isArray(module) || method || params ? this._sendAndGetId(module, method, params, transforms).promise : this._batch(module);
    }
    _sendAndGetId(module, method, params, transforms) {
        const {promise: promise, json: json, id: id} = this._processRequest(module, method, params, transforms), msg = JSON.stringify(json);
        return "DEBUG" === Settings_default.getLogLevel() && console.debug("Sending message to transport: " + msg), 
        this._transport.send(msg), {
            id: id,
            promise: promise
        };
    }
    _batch(requests) {
        const results = [], json = [];
        requests.forEach(({module: module, method: method, params: params, transforms: transforms}) => {
            const result = this._processRequest(module, method, params, transforms);
            results.push({
                promise: result.promise,
                id: result.id
            }), json.push(result.json);
        });
        const msg = JSON.stringify(json);
        return "DEBUG" === Settings_default.getLogLevel() && console.debug("Sending message to transport: " + msg), 
        this._transport.send(msg), results;
    }
    _processRequest(module, method, params, transforms) {
        const result = {
            promise: this._addPromiseToQueue(module, method, params, transforms),
            json: this._createRequestJSON(module, method, params),
            id: this._id
        };
        return this._id++, result;
    }
    _createRequestJSON(module, method, params) {
        return {
            jsonrpc: "2.0",
            method: module.toLowerCase() + "." + method,
            params: params,
            id: this._id
        };
    }
    _addPromiseToQueue(module, method, params, transforms) {
        return new Promise((resolve, reject) => {
            this._promises[this._id] = {}, this._promises[this._id].promise = this, this._promises[this._id].resolve = resolve, 
            this._promises[this._id].reject = reject, this._promises[this._id].transforms = transforms;
            const deprecated = this._deprecated[module.toLowerCase() + "." + method.toLowerCase()];
            deprecated && console.warn(`WARNING: ${module}.${method}() is deprecated. ` + deprecated.alternative), 
            method.match(/^on[A-Z]/) && (params.listen ? this._eventIds.push(this._id) : this._eventIds = this._eventIds.filter(id => id !== this._id));
        });
    }
    static get() {
        if (win.__firebolt = win.__firebolt || {}, null == win.__firebolt.transport && null == moduleInstance) {
            const transport = new Transport;
            transport.init(), transport.isMock ? moduleInstance = transport : (win.__firebolt = win.__firebolt || {}, 
            win.__firebolt.transport = transport), win.__firebolt.setTransportLayer = transport.setTransportLayer.bind(transport);
        }
        return win.__firebolt.transport ? win.__firebolt.transport : moduleInstance;
    }
    receiveHandler(message) {
        "DEBUG" === Settings_default.getLogLevel() && console.debug("Received message from transport: " + message);
        const json = JSON.parse(message), p = this._promises[json.id];
        if (p) {
            if (json.error) p.reject(json.error); else {
                let result = json.result;
                p.transforms && (result = Array.isArray(json.result) ? result.map(x => Results_default.transform(x, p.transforms)) : Results_default.transform(result, p.transforms)), 
                p.resolve(result);
            }
            delete this._promises[json.id];
        }
        var x;
        this._eventIds.includes(json.id) && (!(x = json.result) || "string" != typeof x.event || "boolean" != typeof x.listening) && this._eventEmitters.forEach(emit => {
            emit(json.id, json.result);
        });
    }
    init() {
        var appSettings, platformSettings;
        appSettings = {}, platformSettings = {
            log: !0
        }, settings.app = appSettings, settings.platform = {
            logLevel: "WARN",
            ...platformSettings
        }, settings.user = {}, this._queue.receive(this.receiveHandler.bind(this)), win.__firebolt && (!0 === win.__firebolt.mockTransportLayer ? (this.isMock = !0, 
        this.setTransportLayer(MockTransport_default)) : win.__firebolt.getTransportLayer && this.setTransportLayer(win.__firebolt.getTransportLayer())), 
        null == this._transport && (this._transport = this.constructTransportLayer());
    }
};

win.__firebolt = win.__firebolt || {}, win.__firebolt.setTransportLayer = transport => {
    Transport.get().setTransportLayer(transport);
};

var listenerId = 0, listeners = {
    internal: {},
    external: {},
    get: key => Object.assign(Object.assign({}, listeners.internal[key]), listeners.external[key]),
    set: (key, id, value) => {
        listeners.external[key] = listeners.external[key] || {}, listeners.external[key][id] = value;
    },
    setInternal: (key, id, value) => {
        listeners.internal[key] = listeners.internal[key] || {}, listeners.internal[key][id] = value;
    },
    find: id => {
        let key;
        return [ listeners.internal, listeners.external ].find(group => {
            if (key = Object.keys(group).find(key => group[key][id]), key) return !0;
        }), key;
    },
    remove: id => {
        [ listeners.internal, listeners.external ].forEach(group => {
            Object.keys(group).forEach(key => {
                group[key] && group[key][id] && (delete group[key][id], 0 === Object.values(group[key]).length && delete group[key]);
            });
        });
    },
    removeKey: (key, _internal = !1) => {
        _internal && listeners.internal[key] && delete listeners.internal[key], listeners.external[key] && delete listeners.external[key];
    },
    keys: () => Array.from(new Set(Object.keys(listeners.internal).concat(Object.keys(listeners.external)))),
    count: key => Object.values(listeners.get(key)).length
}, keys = {}, oncers = [], validEvents = {}, validContext = {}, transportInitialized = !1, emit = (id, value) => {
    callCallbacks(listeners.internal[keys[id]], [ value ]), callCallbacks(listeners.external[keys[id]], [ value ]);
}, registerEvents = (module, events) => {
    validEvents[module.toLowerCase()] = events.concat();
}, registerEventContext = (module, event, context) => {
    validContext[module.toLowerCase()] = validContext[module.toLowerCase()] || {}, validContext[module.toLowerCase()][event] = context.concat();
}, callCallbacks = (cbs, args) => {
    cbs && Object.keys(cbs).forEach(listenerId => {
        let callback = cbs[listenerId];
        oncers.indexOf(parseInt(listenerId)) >= 0 && (oncers.splice(oncers.indexOf(parseInt(listenerId)), 1), 
        delete cbs[listenerId]), callback.apply(null, args);
    });
}, doListen = function(module, event, callback, context, once, internal = !1) {
    if (init(), "function" != typeof callback) return Promise.reject("No valid callback function provided.");
    {
        if ("*" === module) return Promise.reject("No valid module name provided");
        const wildcard = "*" === event, events = wildcard ? validEvents[module] : [ event ], promises = [], hasContext = Object.values(context).length > 0, contextKey = Object.keys(context).sort().map(key => key + "=" + JSON.stringify(context[key])).join("&");
        let resolve, reject;
        listenerId++, once && oncers.push(listenerId), events.forEach(event => {
            const key = module + "." + event + (hasContext ? `.${contextKey}` : "");
            if (0 === Object.values(listeners.get(key)).length) {
                const args = Object.assign({
                    listen: !0
                }, context), {id: id, promise: promise} = Transport.listen(module, "on" + event[0].toUpperCase() + event.substring(1), args);
                keys[id] = key, promises.push(promise);
            }
            const setter = internal ? listeners.setInternal : listeners.set;
            setter(key, "" + listenerId, wildcard ? value => callback(event, value) : callback);
        });
        let p = new Promise((res, rej) => {
            resolve = res, reject = rej;
        });
        const templistenerId = listenerId;
        return promises.length ? promises.reduce((prevPromise, currentPromise) => prevPromise.then(() => currentPromise).then(responses => {
            resolve(templistenerId);
        }).catch(error => {
            "*" === event ? resolve(templistenerId) : (doClear(templistenerId, event, context), 
            reject(error));
        }), Promise.resolve()) : resolve(listenerId), p;
    }
}, getListenArgs = function(...args) {
    const callback = args.pop(), [module, event, context] = getClearArgs(...args);
    return [ module, event, callback, context ];
}, getClearArgs = function(...args) {
    const module = (args.shift() || "*").toLowerCase(), event = args.shift() || "*", context = {};
    for (let i = 0; args.length; i++) context[validContext[module][event][i]] = args.shift();
    return [ module, event, context ];
}, listen$3 = function(...args) {
    const [module, event, callback, context] = getListenArgs(...args);
    return doListen(module, event, callback, context, !1);
}, unsubscribe = (key, context) => {
    const [module, event] = key.split(".").slice(0, 2), args = Object.assign({
        listen: !1
    }, context);
    Transport.send(module, "on" + event[0].toUpperCase() + event.substr(1), args);
}, doClear = function(moduleOrId = !1, event = !1, context) {
    if ("*" === event && (event = !1), "number" == typeof moduleOrId) {
        const searchId = moduleOrId.toString(), key = listeners.find(searchId);
        return !!key && (listeners.remove(searchId), 0 === listeners.count(key) && unsubscribe(key), 
        !0);
    }
    if (moduleOrId || event) if (event) {
        const hasContext = Object.values(context).length > 0, contextKey = Object.keys(context).sort().map(key => key + "=" + JSON.stringify(context[key])).join("&"), key = moduleOrId + "." + event + (hasContext ? `.${contextKey}` : "");
        listeners.removeKey(key), unsubscribe(key, context);
    } else listeners.keys().forEach(key => {
        0 === key.indexOf(moduleOrId.toLowerCase()) && (listeners.removeKey(key), unsubscribe(key));
    }); else listeners.keys().forEach(key => {
        listeners.removeKey(key), unsubscribe(key);
    });
}, init = () => {
    transportInitialized || (Transport.addEventEmitter(emit), listener = listen$3, transportInitialized = !0);
}, Events_default = {
    listen: listen$3,
    once: function(...args) {
        const [module, event, callback, context] = getListenArgs(...args);
        return doListen(module, event, callback, context, !0);
    },
    clear: function(...args) {
        if (args && args.length && "number" == typeof args[0]) return doClear(args[0]);
        if (args && args.length && "number" == typeof args[1]) return doClear(args[1]);
        {
            const [moduleOrId, event, context] = getClearArgs(...args);
            return doClear(moduleOrId, event, context);
        }
    },
    broadcast(event, value) {
        emit(Object.entries(keys).find(([k, v]) => v === "app." + event)[0], value);
    }
};

var Prop_default = {
    prop: function(moduleName, key, params, callbackOrValue = void 0, immutable, readonly, contextParameterCount) {
        const numArgs = Object.values(params).length, type = Router_default(params, callbackOrValue, contextParameterCount);
        if ("getter" === type) return Transport.send(moduleName, key, params);
        if ("subscriber" === type) {
            if (immutable) throw new Error("Cannot subscribe to an immutable property");
            return Events_default.listen(moduleName, key + "Changed", ...Object.values(params), callbackOrValue);
        }
        if ("setter" === type) {
            if (immutable) throw new Error("Cannot set a value to an immutable property");
            if (readonly) throw new Error("Cannot set a value to a readonly property");
            return Transport.send(moduleName, "set" + key[0].toUpperCase() + key.substring(1), Object.assign({
                value: callbackOrValue
            }, params));
        }
        throw numArgs < contextParameterCount ? new Error("Cannot get a value without all required context parameters.") : new Error("Property accessed with unexpected number of parameters.");
    }
};

registerEvents("Accessibility", [ "audioDescriptionSettingsChanged", "closedCaptionsSettingsChanged", "highContrastUIChanged", "voiceGuidanceSettingsChanged" ]), 
Transport.registerDeprecatedMethod("Accessibility", "closedCaptions", "Use Accessibility.closedCaptionsSettings() instead."), 
Transport.registerDeprecatedMethod("Accessibility", "voiceGuidance", "Use Accessibility.voiceGuidanceSettings() instead.");

var Account_default = {
    id: function() {
        let callbackOrValue = arguments[0], params = {};
        return 1 === arguments.length && "function" == typeof arguments[0] && (callbackOrValue = arguments[0], 
        params = {}), Prop_default.prop("Account", "id", params, callbackOrValue, !0, !0, 0);
    },
    uid: function() {
        let callbackOrValue = arguments[0], params = {};
        return 1 === arguments.length && "function" == typeof arguments[0] && (callbackOrValue = arguments[0], 
        params = {}), Prop_default.prop("Account", "uid", params, callbackOrValue, !0, !0, 0);
    }
};

registerEvents("Advertising", [ "policyChanged" ]), Transport.registerDeprecatedMethod("Authentication", "token", "Use Authentication module has individual methods for each token type. instead."), 
registerEvents("Capabilities", [ "available", "granted", "revoked", "unavailable" ]), 
registerEventContext("Capabilities", "available", [ "capability" ]), registerEventContext("Capabilities", "granted", [ "role", "capability" ]), 
registerEventContext("Capabilities", "revoked", [ "role", "capability" ]), registerEventContext("Capabilities", "unavailable", [ "capability" ]), 
registerEvents("HDMIInput", [ "autoLowLatencyModeCapableChanged", "autoLowLatencyModeSignalChanged", "connectionChanged", "edidVersionChanged", "lowLatencyModeChanged", "signalChanged" ]), 
registerEventContext("HDMIInput", "edidVersionChanged", [ "port" ]), registerEvents("Device", [ "audioChanged", "deviceNameChanged", "hdcpChanged", "hdrChanged", "nameChanged", "networkChanged", "screenResolutionChanged", "videoResolutionChanged" ]), 
Transport.registerDeprecatedMethod("Device", "screenResolution", "Use Use non-Firebolt APIs specific to your platform, e.g. W3C APIs instead."), 
Transport.registerDeprecatedMethod("Device", "onDeviceNameChanged", "Use Device.name() instead."), 
Transport.registerDeprecatedMethod("Device", "onScreenResolutionChanged", "Use screenResolution instead.");

var Device_default = {
    Events: {
        DEVICE_NAME_CHANGED: "deviceNameChanged",
        NAME_CHANGED: "nameChanged",
        HDCP_CHANGED: "hdcpChanged",
        HDR_CHANGED: "hdrChanged",
        AUDIO_CHANGED: "audioChanged",
        SCREEN_RESOLUTION_CHANGED: "screenResolutionChanged",
        VIDEO_RESOLUTION_CHANGED: "videoResolutionChanged",
        NETWORK_CHANGED: "networkChanged"
    },
    NetworkState: {
        CONNECTED: "connected",
        DISCONNECTED: "disconnected"
    },
    NetworkType: {
        WIFI: "wifi",
        ETHERNET: "ethernet",
        HYBRID: "hybrid"
    },
    version: function() {
        return new Promise((resolve, reject) => {
            Transport.send("device", "version").then(v => {
                (v = v || {}).sdk = v.sdk || {}, v.sdk.major = parseInt("1"), v.sdk.minor = parseInt("7"), 
                v.sdk.patch = parseInt("0"), v.sdk.readable = "Firebolt Core SDK 1.7.0", resolve(v);
            }).catch(error => {
                reject(error);
            });
        });
    },
    audio: function() {
        let callbackOrValue = arguments[0], params = {};
        return 1 === arguments.length && "function" == typeof arguments[0] && (callbackOrValue = arguments[0], 
        params = {}), Prop_default.prop("Device", "audio", params, callbackOrValue, !1, !0, 0);
    },
    clear: function(...args) {
        return Events_default.clear("Device", ...args);
    },
    distributor: function() {
        let callbackOrValue = arguments[0], params = {};
        return 1 === arguments.length && "function" == typeof arguments[0] && (callbackOrValue = arguments[0], 
        params = {}), Prop_default.prop("Device", "distributor", params, callbackOrValue, !0, !0, 0);
    },
    hdcp: function() {
        let callbackOrValue = arguments[0], params = {};
        return 1 === arguments.length && "function" == typeof arguments[0] && (callbackOrValue = arguments[0], 
        params = {}), Prop_default.prop("Device", "hdcp", params, callbackOrValue, !1, !0, 0);
    },
    hdr: function() {
        let callbackOrValue = arguments[0], params = {};
        return 1 === arguments.length && "function" == typeof arguments[0] && (callbackOrValue = arguments[0], 
        params = {}), Prop_default.prop("Device", "hdr", params, callbackOrValue, !1, !0, 0);
    },
    id: function() {
        let callbackOrValue = arguments[0], params = {};
        return 1 === arguments.length && "function" == typeof arguments[0] && (callbackOrValue = arguments[0], 
        params = {}), Prop_default.prop("Device", "id", params, callbackOrValue, !0, !0, 0);
    },
    listen: function(...args) {
        return Events_default.listen("Device", ...args);
    },
    make: function() {
        let callbackOrValue = arguments[0], params = {};
        return 1 === arguments.length && "function" == typeof arguments[0] && (callbackOrValue = arguments[0], 
        params = {}), Prop_default.prop("Device", "make", params, callbackOrValue, !0, !0, 0);
    },
    model: function() {
        let callbackOrValue = arguments[0], params = {};
        return 1 === arguments.length && "function" == typeof arguments[0] && (callbackOrValue = arguments[0], 
        params = {}), Prop_default.prop("Device", "model", params, callbackOrValue, !0, !0, 0);
    },
    name: function() {
        let callbackOrValue = arguments[0], params = {};
        return 1 === arguments.length && "function" == typeof arguments[0] && (callbackOrValue = arguments[0], 
        params = {}), Prop_default.prop("Device", "name", params, callbackOrValue, !1, !0, 0);
    },
    network: function() {
        let callbackOrValue = arguments[0], params = {};
        return 1 === arguments.length && "function" == typeof arguments[0] && (callbackOrValue = arguments[0], 
        params = {}), Prop_default.prop("Device", "network", params, callbackOrValue, !1, !0, 0);
    },
    once: function(...args) {
        return Events_default.once("Device", ...args);
    },
    platform: function() {
        let callbackOrValue = arguments[0], params = {};
        return 1 === arguments.length && "function" == typeof arguments[0] && (callbackOrValue = arguments[0], 
        params = {}), Prop_default.prop("Device", "platform", params, callbackOrValue, !0, !0, 0);
    },
    screenResolution: function() {
        let callbackOrValue = arguments[0], params = {};
        return 1 === arguments.length && "function" == typeof arguments[0] && (callbackOrValue = arguments[0], 
        params = {}), Prop_default.prop("Device", "screenResolution", params, callbackOrValue, !1, !0, 0);
    },
    sku: function() {
        let callbackOrValue = arguments[0], params = {};
        return 1 === arguments.length && "function" == typeof arguments[0] && (callbackOrValue = arguments[0], 
        params = {}), Prop_default.prop("Device", "sku", params, callbackOrValue, !0, !0, 0);
    },
    type: function() {
        let callbackOrValue = arguments[0], params = {};
        return 1 === arguments.length && "function" == typeof arguments[0] && (callbackOrValue = arguments[0], 
        params = {}), Prop_default.prop("Device", "type", params, callbackOrValue, !0, !0, 0);
    },
    uid: function() {
        let callbackOrValue = arguments[0], params = {};
        return 1 === arguments.length && "function" == typeof arguments[0] && (callbackOrValue = arguments[0], 
        params = {}), Prop_default.prop("Device", "uid", params, callbackOrValue, !0, !0, 0);
    },
    videoResolution: function() {
        let callbackOrValue = arguments[0], params = {};
        return 1 === arguments.length && "function" == typeof arguments[0] && (callbackOrValue = arguments[0], 
        params = {}), Prop_default.prop("Device", "videoResolution", params, callbackOrValue, !1, !0, 0);
    }
}, providerInterfaces = {};

registerEvents("Discovery", [ "navigateTo", "policyChanged" ]), ((capability, module, methods) => {
    if (providerInterfaces[capability]) throw `Capability ${capability} has multiple provider interfaces registered.`;
    methods.forEach(m => m.name = `${module}.${m.name}`), providerInterfaces[capability] = methods.concat();
})("xrn:firebolt:capability:discovery:interest", "Discovery", [ {
    name: "userInterest",
    focus: !1,
    response: !0,
    parameters: !0
} ]), Transport.registerDeprecatedMethod("Discovery", "entityInfo", "Use null instead."), 
Transport.registerDeprecatedMethod("Discovery", "purchasedContent", "Use null instead."), 
Transport.registerDeprecatedMethod("Discovery", "entitlements", "Use Discovery.contentAccess() instead."), 
Transport.registerDeprecatedMethod("Discovery", "onPullEntityInfo", "Use null instead."), 
Transport.registerDeprecatedMethod("Discovery", "onPullPurchasedContent", "Use null instead."), 
registerEvents("Lifecycle", [ "background", "foreground", "inactive", "suspended", "unloading" ]);

var store = {
    _current: "initializing",
    get current() {
        return this._current;
    }
};

var Lifecycle_default = {
    Events: {
        INACTIVE: "inactive",
        FOREGROUND: "foreground",
        BACKGROUND: "background",
        SUSPENDED: "suspended",
        UNLOADING: "unloading"
    },
    CloseReason: {
        REMOTE_BUTTON: "remoteButton",
        USER_EXIT: "userExit",
        DONE: "done",
        ERROR: "error"
    },
    LifecycleState: {
        INITIALIZING: "initializing",
        INACTIVE: "inactive",
        FOREGROUND: "foreground",
        BACKGROUND: "background",
        UNLOADING: "unloading",
        SUSPENDED: "suspended"
    },
    ready: async function() {
        let readyRes;
        return await function(...args) {
            const [module, event, callback, context] = getListenArgs(...args);
            return doListen(module, event, callback, context, !1, !0);
        }("Lifecycle", (event, value) => {
            store._current = event;
        }), readyRes = await Transport.send("lifecycle", "ready", {}), setTimeout(_ => {
            Transport.send("metrics", "ready", {});
        }), readyRes;
    },
    state: function() {
        return store.current;
    },
    finished: function() {
        if ("unloading" === store.current) return Transport.send("lifecycle", "finished");
        throw "Cannot call finished() except when in the unloading transition";
    },
    clear: function(...args) {
        return Events_default.clear("Lifecycle", ...args);
    },
    close: function(reason) {
        return Transport.send("Lifecycle", "close", {
            reason: reason
        }, null);
    },
    listen: function(...args) {
        return Events_default.listen("Lifecycle", ...args);
    },
    once: function(...args) {
        return Events_default.once("Lifecycle", ...args);
    }
};

registerEvents("Localization", [ "countryCodeChanged", "languageChanged", "localeChanged", "localityChanged", "postalCodeChanged", "preferredAudioLanguagesChanged" ]), 
Transport.registerDeprecatedMethod("Localization", "language", "Use Localization.locale instead."), 
Transport.registerDeprecatedMethod("Localization", "onLanguageChanged", "Use language instead.");

var Localization_default = {
    Events: {
        LOCALITY_CHANGED: "localityChanged",
        POSTAL_CODE_CHANGED: "postalCodeChanged",
        COUNTRY_CODE_CHANGED: "countryCodeChanged",
        LANGUAGE_CHANGED: "languageChanged",
        PREFERRED_AUDIO_LANGUAGES_CHANGED: "preferredAudioLanguagesChanged",
        LOCALE_CHANGED: "localeChanged"
    },
    additionalInfo: function() {
        return Transport.send("Localization", "additionalInfo", {}, null);
    },
    clear: function(...args) {
        return Events_default.clear("Localization", ...args);
    },
    countryCode: function() {
        let callbackOrValue = arguments[0], params = {};
        return 1 === arguments.length && "function" == typeof arguments[0] && (callbackOrValue = arguments[0], 
        params = {}), Prop_default.prop("Localization", "countryCode", params, callbackOrValue, !1, !0, 0);
    },
    language: function() {
        let callbackOrValue = arguments[0], params = {};
        return 1 === arguments.length && "function" == typeof arguments[0] && (callbackOrValue = arguments[0], 
        params = {}), Prop_default.prop("Localization", "language", params, callbackOrValue, !1, !0, 0);
    },
    latlon: function() {
        return Transport.send("Localization", "latlon", {}, null);
    },
    listen: function(...args) {
        return Events_default.listen("Localization", ...args);
    },
    locale: function() {
        let callbackOrValue = arguments[0], params = {};
        return 1 === arguments.length && "function" == typeof arguments[0] && (callbackOrValue = arguments[0], 
        params = {}), Prop_default.prop("Localization", "locale", params, callbackOrValue, !1, !0, 0);
    },
    locality: function() {
        let callbackOrValue = arguments[0], params = {};
        return 1 === arguments.length && "function" == typeof arguments[0] && (callbackOrValue = arguments[0], 
        params = {}), Prop_default.prop("Localization", "locality", params, callbackOrValue, !1, !0, 0);
    },
    once: function(...args) {
        return Events_default.once("Localization", ...args);
    },
    postalCode: function() {
        let callbackOrValue = arguments[0], params = {};
        return 1 === arguments.length && "function" == typeof arguments[0] && (callbackOrValue = arguments[0], 
        params = {}), Prop_default.prop("Localization", "postalCode", params, callbackOrValue, !1, !0, 0);
    },
    preferredAudioLanguages: function() {
        let callbackOrValue = arguments[0], params = {};
        return 1 === arguments.length && "function" == typeof arguments[0] && (callbackOrValue = arguments[0], 
        params = {}), Prop_default.prop("Localization", "preferredAudioLanguages", params, callbackOrValue, !1, !0, 0);
    }
};

function Firebolt() {
    const fireboltApis = [ "Lifecycle", "Audio", "Make", "Model", "latlong" ], [activeIndex, setActiveIndex] = createSignal(0), [data, setData] = createSignal("");
    setGlobalBackground(255), createEffect(() => {
        switch (activeIndex()) {
          case 0:
            setData("LifeCycle state is " + Lifecycle_default.state());
            break;

          case 1:
            Device_default.audio().then(supportedAudioProfiles => {
                setData("DolbyAtmos " + supportedAudioProfiles.dolbyAtmos);
            });
            break;

          case 2:
            Device_default.make().then(make => {
                setData("Device Make is " + make);
            });
            break;

          case 3:
            Account_default.id().then(id => {
                setData("AccountId is " + id);
            });
            break;

          case 4:
            Localization_default.latlon().then(val => {
                setData(`Lat value is ${val[0]}, Long value is ${val[1]}`);
            });
        }
    });
    const apiStyle = {
        color: 4294967295,
        fontSize: 32,
        fontWeight: "bold",
        textAlign: "center",
        $focus: {
            color: 1147903743
        }
    };
    return _el$ = createElement("view"), _el$2 = createElement("text"), _el$4 = createElement("text"), 
    insertNode(_el$, _el$2), insertNode(_el$, _el$4), insertNode(_el$2, createTextNode("Press Right and Left to change API")), 
    setProp(_el$2, "y", -120), setProp(_el$2, "fontSize", 24), setProp(_el$2, "center", !0), 
    insert(_el$, createComponent(Row, {
        autofocus: !0,
        center: !0,
        y: -60,
        onSelectedChanged: setActiveIndex,
        get children() {
            return fireboltApis.map((api, index) => {
                return _el$5 = createElement("text"), setProp(_el$5, "style", apiStyle), insert(_el$5, api), 
                _el$5;
                var _el$5;
            });
        }
    }), _el$4), setProp(_el$4, "center", !0), insert(_el$4, data), _el$;
    var _el$, _el$2, _el$4;
}

registerEvents("SecondScreen", [ "closeRequest", "friendlyNameChanged", "launchRequest" ]), 
mock$1 = {
    Accessibility: defaults_default$16,
    Account: defaults_default$15,
    Advertising: defaults_default$14,
    Authentication: {
        token: {
            value: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
            expires: "2022-04-23T18:25:43.511Z",
            type: "platform"
        },
        device: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
        session: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
        root: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
    },
    Capabilities: {
        supported: !0,
        available: !0,
        permitted: !0,
        granted: !0,
        info: [ {
            capability: "xrn:firebolt:capability:device:model",
            supported: !0,
            available: !0,
            use: {
                permitted: !0,
                granted: !0
            },
            manage: {
                permitted: !0,
                granted: !0
            },
            provide: {
                permitted: !0,
                granted: !0
            }
        }, {
            capability: "xrn:firebolt:capability:input:keyboard",
            supported: !0,
            available: !0,
            use: {
                permitted: !0,
                granted: !0
            },
            manage: {
                permitted: !0,
                granted: !0
            },
            provide: {
                permitted: !0,
                granted: !0
            }
        }, {
            capability: "xrn:firebolt:capability:protocol:bluetoothle",
            supported: !1,
            available: !1,
            use: {
                permitted: !0,
                granted: !0
            },
            manage: {
                permitted: !0,
                granted: !0
            },
            provide: {
                permitted: !0,
                granted: !0
            },
            details: [ "unsupported" ]
        }, {
            capability: "xrn:firebolt:capability:token:device",
            supported: !0,
            available: !0,
            use: {
                permitted: !0,
                granted: !0
            },
            manage: {
                permitted: !0,
                granted: !0
            },
            provide: {
                permitted: !0,
                granted: !0
            }
        }, {
            capability: "xrn:firebolt:capability:token:platform",
            supported: !0,
            available: !1,
            use: {
                permitted: !0,
                granted: !0
            },
            manage: {
                permitted: !0,
                granted: !0
            },
            provide: {
                permitted: !0,
                granted: !0
            },
            details: [ "unavailable" ]
        }, {
            capability: "xrn:firebolt:capability:protocol:moca",
            supported: !0,
            available: !1,
            use: {
                permitted: !0,
                granted: !0
            },
            manage: {
                permitted: !0,
                granted: !0
            },
            provide: {
                permitted: !0,
                granted: !0
            },
            details: [ "disabled", "unavailable" ]
        }, {
            capability: "xrn:firebolt:capability:wifi:scan",
            supported: !0,
            available: !0,
            use: {
                permitted: !0,
                granted: !0
            },
            manage: {
                permitted: !0,
                granted: !0
            },
            provide: {
                permitted: !0,
                granted: !0
            },
            details: [ "unpermitted" ]
        }, {
            capability: "xrn:firebolt:capability:localization:postal-code",
            supported: !0,
            available: !0,
            use: {
                permitted: !0,
                granted: null
            },
            manage: {
                permitted: !0,
                granted: !0
            },
            provide: {
                permitted: !0,
                granted: !0
            },
            details: [ "ungranted" ]
        }, {
            capability: "xrn:firebolt:capability:localization:postal-code",
            supported: !0,
            available: !0,
            use: {
                permitted: !0,
                granted: !0
            },
            manage: {
                permitted: !0,
                granted: !0
            },
            provide: {
                permitted: !0,
                granted: !0
            },
            details: [ "ungranted" ]
        }, {
            capability: "xrn:firebolt:capability:localization:locality",
            supported: !0,
            available: !0,
            use: {
                permitted: !0,
                granted: !0
            },
            manage: {
                permitted: !0,
                granted: !0
            },
            provide: {
                permitted: !0,
                granted: !0
            },
            details: [ "grantDenied", "ungranted" ]
        } ],
        request: [ {
            capability: "xrn:firebolt:capability:commerce:purchase",
            supported: !0,
            available: !0,
            use: {
                permitted: !0,
                granted: !0
            },
            manage: {
                permitted: !0,
                granted: !0
            },
            provide: {
                permitted: !0,
                granted: !0
            }
        } ]
    },
    HDMIInput: defaults_default$11,
    Device: defaults_default$10,
    Discovery: defaults_default$9,
    Keyboard: {
        email: "user@domain.com",
        password: "abc123",
        standard: "Living Room"
    },
    Lifecycle: defaults_default$7,
    Localization: defaults_default$6,
    Metrics: {
        ready: !0,
        signIn: !0,
        signOut: !0,
        startContent: !0,
        stopContent: !0,
        page: !0,
        action: !0,
        error: !0,
        mediaLoadStart: !0,
        mediaPlay: !0,
        mediaPlaying: !0,
        mediaPause: !0,
        mediaWaiting: !0,
        mediaProgress: !0,
        mediaSeeking: !0,
        mediaSeeked: !0,
        mediaRateChange: !0,
        mediaRenditionChange: !0,
        mediaEnded: !0,
        appInfo: null
    },
    Parameters: {
        initialization: {
            lmt: 0,
            us_privacy: "1-Y-",
            discovery: {
                navigateTo: {
                    action: "entity",
                    data: {
                        entityId: "abc",
                        entityType: "program",
                        programType: "movie"
                    },
                    context: {
                        source: "voice"
                    }
                }
            }
        }
    },
    Profile: {
        approveContentRating: !1,
        approvePurchase: !1,
        flags: {
            userExperience: "1000"
        }
    },
    SecondScreen: defaults_default$2,
    SecureStorage: {
        get: "VGhpcyBub3QgYSByZWFsIHRva2VuLgo=",
        set: null,
        remove: null,
        clear: null
    },
    Platform: defaults_default
}, pending.forEach(json => handle(json)), pending.length = 0;

export { Firebolt as default };