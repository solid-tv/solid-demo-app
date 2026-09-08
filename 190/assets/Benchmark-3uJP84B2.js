import { n as __exportAll } from "./rolldown-runtime-Dacw0Uxr.js";

import { A as For, Ct as ImageTexture, D as Config, I as batch, Lt as Texture, N as Show, O as activeElement, Q as onCleanup, Rt as TextureType, St as isTextureError, V as createEffect, Z as on, _t as isAdvancedShaderProp, a as createElement, bt as TextureError, c as effect, d as memo, dt as resolveTargetFPS, ft as frameTimeBucketLowerBound$1, g as use, gt as CoreShaderNode, i as createComponent, l as insert, m as setProp, ot as clearFontPrefetch, q as createSignal, s as createTextNode, st as prefetchFont, u as insertNode, ut as RendererMain, vt as resolveShaderProps, x as renderer, xt as TextureErrorCode, yt as CoreTextureManager, zt as closeImageBitmap } from "./render-pt2tmeLm.js";

import { c as LinearGradientTemplate, d as RoundedTemplate, f as HolePunchTemplate, i as WebGlShaderProgram, l as ShadowTemplate, m as getBorderProps, n as resetCounter, p as BorderTemplate, s as RadialGradientTemplate, u as getShadowProps } from "./FPSCounter-DGgOw_zu.js";

import { n as LazyRow, t as LazyColumn } from "./Lazy-BMntxyS4.js";

import { t as ContentBlock } from "./ContentBlock-x5uJS8Av.js";

import { n as useFocusStack } from "./createFocusStack-9XpwVNRJ.js";

import { a as Hero, c as SHOW_TEXT, d as TitleRow, f as scaled, i as DISPLAY_SIZE, o as POSTER_SCALE, t as AssetPanel } from "./components-BAwFHbW5.js";

import { r as styles_default } from "./styles-xHyKpT0b.js";

import { n as setGlobalBackground } from "./state-BeIgwke9.js";

import { t as debounce } from "./dist-yNGSwGp1.js";

var _histogram$FRAME_TIME, _histogram$frameTimeB, EdgeFadeTemplate = {
    props: {
        left: 0,
        top: 0,
        right: 0,
        bottom: 0
    }
}, histogram = __exportAll({
    BorderTemplate: () => BorderTemplate,
    CoreShaderNode: () => CoreShaderNode,
    CoreTextureManager: () => CoreTextureManager,
    EdgeFadeTemplate: () => EdgeFadeTemplate,
    FRAME_TIME_BUCKET_COUNT: () => 45,
    FRAME_TIME_COARSE_MS: () => 8,
    FRAME_TIME_FINE_MS: () => 1,
    FRAME_TIME_MAX_MS: () => 128,
    FRAME_TIME_SPLIT_MS: () => 32,
    HolePunchTemplate: () => HolePunchTemplate,
    ImageTexture: () => ImageTexture,
    LinearGradientTemplate: () => LinearGradientTemplate,
    RadialGradientTemplate: () => RadialGradientTemplate,
    RendererMain: () => RendererMain,
    RoundedTemplate: () => RoundedTemplate,
    ShadowTemplate: () => ShadowTemplate,
    Texture: () => Texture,
    TextureError: () => TextureError,
    TextureErrorCode: () => TextureErrorCode,
    TextureType: () => TextureType,
    WebGlShaderProgram: () => WebGlShaderProgram,
    clearFontPrefetch: () => clearFontPrefetch,
    closeImageBitmap: () => closeImageBitmap,
    frameTimeBucketLowerBound: () => frameTimeBucketLowerBound$1,
    getBorderProps: () => getBorderProps,
    getShadowProps: () => getShadowProps,
    isAdvancedShaderProp: () => isAdvancedShaderProp,
    isTextureError: () => isTextureError,
    prefetchFont: () => prefetchFont,
    resolveShaderProps: () => resolveShaderProps,
    resolveTargetFPS: () => resolveTargetFPS
}), FRAME_TIME_BUCKET_COUNT = null !== (_histogram$FRAME_TIME = histogram.FRAME_TIME_BUCKET_COUNT) && void 0 !== _histogram$FRAME_TIME ? _histogram$FRAME_TIME : 0, frameTimeBucketLowerBound = null !== (_histogram$frameTimeB = histogram.frameTimeBucketLowerBound) && void 0 !== _histogram$frameTimeB ? _histogram$frameTimeB : () => 0;

function getImageWorkersCount() {
    try {
        var _root$stage, _root$settings, _Config$rendererOptio;
        if ("undefined" != typeof window) {
            const param = new URLSearchParams(window.location.search).get("numImageWorkers");
            if (null !== param) {
                const parsed = parseInt(param, 10);
                if (!isNaN(parsed)) return parsed;
            }
        }
        const root = renderer;
        if (void 0 !== (null == root || null == (_root$stage = root.stage) || null == (_root$stage = _root$stage.options) ? void 0 : _root$stage.numImageWorkers)) return root.stage.options.numImageWorkers;
        if (void 0 !== (null == root || null == (_root$settings = root.settings) ? void 0 : _root$settings.numImageWorkers)) return root.settings.numImageWorkers;
        if (void 0 !== (null == Config || null == (_Config$rendererOptio = Config.rendererOptions) ? void 0 : _Config$rendererOptio.numImageWorkers)) return Config.rendererOptions.numImageWorkers;
    } catch (e) {}
    return "undefined" != typeof window && window.createImageBitmap ? 1 : 0;
}

function getTextureProcessingTimeLimit() {
    try {
        var _root$stage2, _root$settings2, _Config$rendererOptio2;
        if ("undefined" != typeof window) {
            const param = new URLSearchParams(window.location.search).get("textureProcessingTimeLimit");
            if (null !== param) {
                const parsed = parseFloat(param);
                if (!isNaN(parsed)) return parsed;
            }
        }
        const root = renderer;
        if (void 0 !== (null == root || null == (_root$stage2 = root.stage) || null == (_root$stage2 = _root$stage2.options) ? void 0 : _root$stage2.textureProcessingTimeLimit)) return root.stage.options.textureProcessingTimeLimit;
        if (void 0 !== (null == root || null == (_root$settings2 = root.settings) ? void 0 : _root$settings2.textureProcessingTimeLimit)) return root.settings.textureProcessingTimeLimit;
        if (void 0 !== (null == Config || null == (_Config$rendererOptio2 = Config.rendererOptions) ? void 0 : _Config$rendererOptio2.textureProcessingTimeLimit)) return Config.rendererOptions.textureProcessingTimeLimit;
    } catch (e) {}
    return 10;
}

function getDeviceCores() {
    try {
        if ("undefined" != typeof navigator && "number" == typeof navigator.hardwareConcurrency && navigator.hardwareConcurrency > 0) return `${navigator.hardwareConcurrency} cores`;
    } catch (e) {}
    return "cores ?";
}

function getPixelRatios() {
    let logical = "undefined" != typeof window ? window.innerHeight / 1080 : 1, physical = "undefined" != typeof window && window.devicePixelRatio || 1;
    const dpr = "undefined" != typeof window && window.devicePixelRatio || 1;
    try {
        var _root$stage3, _Config$rendererOptio3, _root$stage4, _Config$rendererOptio4;
        const root = renderer;
        void 0 !== (null == root || null == (_root$stage3 = root.stage) || null == (_root$stage3 = _root$stage3.options) ? void 0 : _root$stage3.deviceLogicalPixelRatio) ? logical = root.stage.options.deviceLogicalPixelRatio : void 0 !== (null == Config || null == (_Config$rendererOptio3 = Config.rendererOptions) ? void 0 : _Config$rendererOptio3.deviceLogicalPixelRatio) && (logical = Config.rendererOptions.deviceLogicalPixelRatio), 
        void 0 !== (null == root || null == (_root$stage4 = root.stage) || null == (_root$stage4 = _root$stage4.options) ? void 0 : _root$stage4.devicePhysicalPixelRatio) ? physical = root.stage.options.devicePhysicalPixelRatio : void 0 !== (null == Config || null == (_Config$rendererOptio4 = Config.rendererOptions) ? void 0 : _Config$rendererOptio4.devicePhysicalPixelRatio) && (physical = Config.rendererOptions.devicePhysicalPixelRatio);
    } catch (e) {}
    return {
        logical: logical,
        physical: physical,
        dpr: dpr
    };
}

function createZeroArray(length) {
    const arr = new Array(length);
    for (let i = 0; i < length; i++) arr[i] = 0;
    return arr;
}

function percentileMs(buckets, fraction) {
    if (!buckets || 0 === buckets.length) return 0;
    let total = 0;
    for (let i = 0; i < buckets.length; i++) total += buckets[i] || 0;
    if (0 === total) return 0;
    const target = total * fraction;
    let seen = 0;
    for (let i = 0; i < buckets.length; i++) if (seen += buckets[i] || 0, seen >= target) return frameTimeBucketLowerBound(i);
    return frameTimeBucketLowerBound(buckets.length - 1);
}

var Benchmark = props => {
    let cancelled = !1;
    onCleanup(() => {
        cancelled = !0;
    });
    const [heroContent, setHeroContent] = createSignal({}), [openPanel, setOpenPanel] = createSignal(!1), {storeFocus: storeFocus, restoreFocus: restoreFocus} = useFocusStack();
    let contentBlock, solidLogo, columnRef, relaunchBtnRef, firstRun = !0;
    const bundleType = "undefined" != typeof window && window.bundleType ? String(window.bundleType) : "unknown", [benchmarkStatus, setBenchmarkStatus] = createSignal("Waiting for data..."), [benchmarkRunning, setBenchmarkRunning] = createSignal(!1), [benchmarkDone, setBenchmarkDone] = createSignal(!1), [dataLoaded, setDataLoaded] = createSignal(!1), [renderTime, setRenderTime] = createSignal(null), [capabilities, setCapabilities] = createSignal(null), [perfStats, setPerfStats] = createSignal(null), [drawStats, setDrawStats] = createSignal(null), [contextSpy, setContextSpy] = createSignal(null);
    let fpsValues = [], animatedFpsValues = [], cumulativeAllBuckets = createZeroArray(FRAME_TIME_BUCKET_COUNT), cumulativeAnimBuckets = createZeroArray(FRAME_TIME_BUCKET_COUNT), totalRenderedFrames = 0, totalSampledFrames = 0, totalRenderedMs = 0, totalIdleTicks = 0, totalAnimatedFrames = 0, totalAnimatedMs = 0, worstMaxFrameTime = 0, worstAnimatedMaxFrameTime = 0, totalUpdateMs = 0, totalRenderMs = 0, totalUploadMs = 0, worstMaxUpdateMs = 0, worstMaxRenderMs = 0, worstMaxUploadMs = 0, totalUploadedTextures = 0, totalUploadFrames = 0, worstMaxUploadQueueSize = 0, activeAnimationsWeightedSum = 0, worstMaxActiveAnimations = 0, maxRenderOps = 0, maxQuads = 0, totalKeyHandlerMs = 0, worstKeyHandlerMs = 0, totalKeyTaskMs = 0, worstKeyTaskMs = 0, keyDispatchCount = 0, keyPressSamples = [], lastContextSpy = null, fpsListenerAttached = !1;
    function safeFetchCapabilities() {
        try {
            const root = renderer;
            if (root && "function" == typeof root.getCapabilities && !capabilities()) {
                const caps = root.getCapabilities();
                caps && setCapabilities(caps);
            }
        } catch (e) {
            console.warn("Unable to fetch capabilities:", e);
        }
    }
    function attachFpsListener() {
        if (fpsListenerAttached) return;
        const root = renderer;
        root && "function" == typeof root.on && (fpsListenerAttached = !0, safeFetchCapabilities(), 
        root.on("fpsUpdate", (_target, fpsData) => {
            if (!benchmarkRunning()) return;
            const fps = "number" == typeof fpsData ? fpsData : null == fpsData ? void 0 : fpsData.fps;
            if ("number" == typeof fps && fps > 0 && fpsValues.push(fps), "object" == typeof fpsData && null !== fpsData) {
                const payload = fpsData;
                if ("number" == typeof payload.animatedFps && payload.animatedFrames > 0 && animatedFpsValues.push(payload.animatedFps), 
                Array.isArray(payload.frameTimeBuckets)) for (let i = 0; i < Math.min(payload.frameTimeBuckets.length, cumulativeAllBuckets.length); i++) cumulativeAllBuckets[i] += payload.frameTimeBuckets[i] || 0;
                if (Array.isArray(payload.animatedFrameTimeBuckets)) for (let i = 0; i < Math.min(payload.animatedFrameTimeBuckets.length, cumulativeAnimBuckets.length); i++) cumulativeAnimBuckets[i] += payload.animatedFrameTimeBuckets[i] || 0;
                totalRenderedFrames += payload.renderedFrames || 0, totalSampledFrames += payload.sampledFrames || 0, 
                totalRenderedMs += payload.renderedMs || 0, totalIdleTicks += payload.idleTicks || 0, 
                totalAnimatedFrames += payload.animatedFrames || 0, totalAnimatedMs += payload.animatedMs || 0, 
                "number" == typeof payload.maxFrameTime && (worstMaxFrameTime = Math.max(worstMaxFrameTime, payload.maxFrameTime)), 
                "number" == typeof payload.animatedMaxFrameTime && (worstAnimatedMaxFrameTime = Math.max(worstAnimatedMaxFrameTime, payload.animatedMaxFrameTime)), 
                totalUpdateMs += payload.updateMs || 0, totalRenderMs += payload.renderMs || 0, 
                totalUploadMs += payload.uploadMs || 0, "number" == typeof payload.maxUpdateMs && (worstMaxUpdateMs = Math.max(worstMaxUpdateMs, payload.maxUpdateMs)), 
                "number" == typeof payload.maxRenderMs && (worstMaxRenderMs = Math.max(worstMaxRenderMs, payload.maxRenderMs)), 
                "number" == typeof payload.maxUploadMs && (worstMaxUploadMs = Math.max(worstMaxUploadMs, payload.maxUploadMs)), 
                totalUploadedTextures += payload.uploadedTextures || 0, totalUploadFrames += payload.uploadFrames || 0, 
                "number" == typeof payload.maxUploadQueueSize && (worstMaxUploadQueueSize = Math.max(worstMaxUploadQueueSize, payload.maxUploadQueueSize)), 
                "number" == typeof payload.meanActiveAnimations && (activeAnimationsWeightedSum += payload.meanActiveAnimations * (payload.renderedFrames || 0)), 
                "number" == typeof payload.maxActiveAnimations && (worstMaxActiveAnimations = Math.max(worstMaxActiveAnimations, payload.maxActiveAnimations)), 
                "number" == typeof payload.renderOps && (maxRenderOps = Math.max(maxRenderOps, payload.renderOps)), 
                "number" == typeof payload.quads && (maxQuads = Math.max(maxQuads, payload.quads)), 
                payload.contextSpyData && (lastContextSpy = payload.contextSpyData);
            }
        }));
    }
    function simulateKeyDown(key, cycle, index) {
        try {
            const event = document.createEvent("Event");
            event.initEvent("keydown", !0, !0), Object.defineProperty(event, "key", {
                value: key,
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(event, "code", {
                value: "ArrowDown" === key ? "ArrowDown" : "ArrowUp",
                enumerable: !0,
                configurable: !0
            });
            const dispatchStart = performance.now();
            document.dispatchEvent(event);
            const handlerMs = performance.now() - dispatchStart;
            keyDispatchCount++;
            totalKeyHandlerMs += handlerMs, handlerMs > worstKeyHandlerMs && (worstKeyHandlerMs = handlerMs);
            const sample = {
                press: keyDispatchCount,
                cycle: cycle,
                direction: "ArrowDown" === key ? "down" : "up",
                index: index,
                handlerMs: handlerMs,
                taskMs: handlerMs
            };
            keyPressSamples.push(sample);
            const closeSample = () => {
                const taskMs = performance.now() - dispatchStart;
                sample.taskMs = taskMs, totalKeyTaskMs += taskMs, taskMs > worstKeyTaskMs && (worstKeyTaskMs = taskMs);
            };
            "function" == typeof queueMicrotask ? queueMicrotask(closeSample) : Promise.resolve().then(closeSample);
        } catch (e) {
            console.error("Failed to simulate key down:", e);
        }
    }
    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    createEffect(() => {
        var _props$data2, _rows$;
        const rows = null == (_props$data2 = props.data) ? void 0 : _props$data2.rows;
        if (!rows || 0 === rows.length) return;
        const firstItems = (null == (_rows$ = rows[0]) ? void 0 : _rows$.items) ? rows[0].items() : null;
        if (firstItems && firstItems.length > 0) {
            if (!dataLoaded()) {
                const startTime = performance.now();
                setDataLoaded(!0), renderer && "function" == typeof renderer.on && renderer.on("idle", () => {
                    null === renderTime() && setRenderTime(performance.now() - startTime);
                });
            }
            if (!benchmarkDone() && !benchmarkRunning()) {
                attachFpsListener();
                const timeoutId = setTimeout(() => {
                    cancelled || async function() {
                        var _props$data, _currentCaps$webGlVer, _currentCaps$vertexAr;
                        resetCounter();
                        const totalRows = (null == (_props$data = props.data) || null == (_props$data = _props$data.rows) ? void 0 : _props$data.length) || 0;
                        if (0 === totalRows) return void setBenchmarkStatus("No rows to benchmark");
                        fpsValues = [], animatedFpsValues = [], cumulativeAllBuckets = createZeroArray(FRAME_TIME_BUCKET_COUNT), 
                        cumulativeAnimBuckets = createZeroArray(FRAME_TIME_BUCKET_COUNT), totalRenderedFrames = 0, 
                        totalSampledFrames = 0, totalRenderedMs = 0, totalIdleTicks = 0, totalAnimatedFrames = 0, 
                        totalAnimatedMs = 0, worstMaxFrameTime = 0, worstAnimatedMaxFrameTime = 0, totalUpdateMs = 0, 
                        totalRenderMs = 0, totalUploadMs = 0, worstMaxUpdateMs = 0, worstMaxRenderMs = 0, 
                        worstMaxUploadMs = 0, totalUploadedTextures = 0, totalUploadFrames = 0, worstMaxUploadQueueSize = 0, 
                        activeAnimationsWeightedSum = 0, worstMaxActiveAnimations = 0, maxRenderOps = 0, 
                        maxQuads = 0, totalKeyHandlerMs = 0, worstKeyHandlerMs = 0, totalKeyTaskMs = 0, 
                        worstKeyTaskMs = 0, keyDispatchCount = 0, keyPressSamples = [], lastContextSpy = null, 
                        setPerfStats(null), setDrawStats(null), setContextSpy(null), setBenchmarkRunning(!0), 
                        setBenchmarkDone(!1), attachFpsListener(), setBenchmarkStatus("Starting benchmark..."), 
                        await sleep(1500);
                        for (let cycle = 0; cycle < 2; cycle++) {
                            if (cancelled) return;
                            for (let i = 0; i < totalRows - 1; i++) {
                                if (cancelled) return;
                                setBenchmarkStatus(`Cycle ${cycle + 1}/2 - Down ${i + 1}/${totalRows - 1}`), simulateKeyDown("ArrowDown", cycle + 1, i + 1), 
                                await sleep(500);
                            }
                            if (cancelled) return;
                            for (let i = 0; i < totalRows - 1; i++) {
                                if (cancelled) return;
                                setBenchmarkStatus(`Cycle ${cycle + 1}/2 - Up ${i + 1}/${totalRows - 1}`), simulateKeyDown("ArrowUp", cycle + 1, i + 1), 
                                await sleep(500);
                            }
                        }
                        if (cancelled) return;
                        const avgAnimatedFps = totalAnimatedMs > 0 && totalAnimatedFrames > 0 ? totalAnimatedFrames / (totalAnimatedMs / 1e3) : animatedFpsValues.length > 0 ? animatedFpsValues.reduce((a, b) => a + b, 0) / animatedFpsValues.length : 0, avgFps = totalRenderedMs > 0 && totalSampledFrames > 0 ? totalSampledFrames / (totalRenderedMs / 1e3) : fpsValues.length > 0 ? fpsValues.reduce((a, b) => a + b, 0) / fpsValues.length : 0, minFps = fpsValues.length > 0 ? Math.min.apply(null, fpsValues) : 0, maxFps = fpsValues.length > 0 ? Math.max.apply(null, fpsValues) : 0, animP95 = percentileMs(cumulativeAnimBuckets, .95), animP99 = percentileMs(cumulativeAnimBuckets, .99), allP95 = percentileMs(cumulativeAllBuckets, .95), allP99 = percentileMs(cumulativeAllBuckets, .99), avgActiveAnims = totalRenderedFrames > 0 ? activeAnimationsWeightedSum / totalRenderedFrames : 0, meanUploadCost = totalUploadedTextures > 0 ? totalUploadMs / totalUploadedTextures : 0, meanKeyTask = keyDispatchCount > 0 ? totalKeyTaskMs / keyDispatchCount : 0, worstKeyPresses = keyPressSamples.slice().sort((a, b) => b.taskMs - a.taskMs).slice(0, 5), calculatedStats = {
                            avgFps: avgFps,
                            minFps: minFps,
                            maxFps: maxFps,
                            totalRenderedFrames: totalRenderedFrames,
                            totalRenderedMs: totalRenderedMs,
                            totalIdleTicks: totalIdleTicks,
                            avgAnimatedFps: avgAnimatedFps,
                            totalAnimatedFrames: totalAnimatedFrames,
                            totalAnimatedMs: totalAnimatedMs,
                            animP95: animP95,
                            animP99: animP99,
                            animMaxFrameTime: worstAnimatedMaxFrameTime,
                            p95: allP95,
                            p99: allP99,
                            maxFrameTime: worstMaxFrameTime,
                            totalUpdateMs: totalUpdateMs,
                            totalRenderMs: totalRenderMs,
                            totalUploadMs: totalUploadMs,
                            maxUpdateMs: worstMaxUpdateMs,
                            maxRenderMs: worstMaxRenderMs,
                            maxUploadMs: worstMaxUploadMs,
                            uploadedTextures: totalUploadedTextures,
                            uploadFrames: totalUploadFrames,
                            meanUploadCostMs: meanUploadCost,
                            maxUploadQueueSize: worstMaxUploadQueueSize,
                            avgActiveAnimations: avgActiveAnims,
                            maxActiveAnimations: worstMaxActiveAnimations,
                            renderOps: maxRenderOps,
                            quads: maxQuads,
                            keyPresses: keyDispatchCount,
                            totalKeyHandlerMs: totalKeyHandlerMs,
                            maxKeyHandlerMs: worstKeyHandlerMs,
                            totalKeyTaskMs: totalKeyTaskMs,
                            maxKeyTaskMs: worstKeyTaskMs,
                            meanKeyTaskMs: meanKeyTask,
                            worstKeyPresses: worstKeyPresses
                        };
                        safeFetchCapabilities();
                        const currentCaps = capabilities(), benchmarkResultsJson = {
                            benchmark: {
                                bundleType: bundleType,
                                initialRenderTimeMs: null !== renderTime() ? parseFloat(renderTime().toFixed(2)) : null,
                                totalCycles: 2,
                                navDelayMs: 500
                            },
                            frameRateAndSmoothness: {
                                avgAnimatedFps: parseFloat(calculatedStats.avgAnimatedFps.toFixed(2)),
                                animP95Ms: calculatedStats.animP95,
                                animP99Ms: calculatedStats.animP99,
                                animMaxFrameTimeMs: parseFloat(calculatedStats.animMaxFrameTime.toFixed(2)),
                                totalAnimatedFrames: calculatedStats.totalAnimatedFrames,
                                totalAnimatedMs: parseFloat(calculatedStats.totalAnimatedMs.toFixed(2)),
                                overallRenderedFps: parseFloat(calculatedStats.avgFps.toFixed(2)),
                                minFps: parseFloat(calculatedStats.minFps.toFixed(2)),
                                maxFps: parseFloat(calculatedStats.maxFps.toFixed(2)),
                                allP95Ms: calculatedStats.p95,
                                allP99Ms: calculatedStats.p99,
                                allMaxFrameTimeMs: parseFloat(calculatedStats.maxFrameTime.toFixed(2)),
                                totalRenderedFrames: calculatedStats.totalRenderedFrames,
                                totalRenderedMs: parseFloat(calculatedStats.totalRenderedMs.toFixed(2)),
                                totalIdleTicks: calculatedStats.totalIdleTicks
                            },
                            frameWorkSplit: {
                                totalUpdateMs: parseFloat(calculatedStats.totalUpdateMs.toFixed(2)),
                                maxUpdateMs: parseFloat(calculatedStats.maxUpdateMs.toFixed(2)),
                                totalRenderMs: parseFloat(calculatedStats.totalRenderMs.toFixed(2)),
                                maxRenderMs: parseFloat(calculatedStats.maxRenderMs.toFixed(2)),
                                totalUploadMs: parseFloat(calculatedStats.totalUploadMs.toFixed(2)),
                                maxUploadMs: parseFloat(calculatedStats.maxUploadMs.toFixed(2))
                            },
                            inputDispatch: {
                                keyPresses: calculatedStats.keyPresses,
                                totalMs: parseFloat(calculatedStats.totalKeyTaskMs.toFixed(2)),
                                maxMs: parseFloat(calculatedStats.maxKeyTaskMs.toFixed(2)),
                                meanMs: parseFloat(calculatedStats.meanKeyTaskMs.toFixed(2)),
                                handlerTotalMs: parseFloat(calculatedStats.totalKeyHandlerMs.toFixed(2)),
                                handlerMaxMs: parseFloat(calculatedStats.maxKeyHandlerMs.toFixed(2)),
                                worstPresses: calculatedStats.worstKeyPresses.map(sample => ({
                                    press: sample.press,
                                    cycle: sample.cycle,
                                    direction: sample.direction,
                                    index: sample.index,
                                    ms: parseFloat(sample.taskMs.toFixed(2)),
                                    handlerMs: parseFloat(sample.handlerMs.toFixed(2))
                                }))
                            },
                            assetsAnimationsGeometry: {
                                drawCalls: calculatedStats.renderOps,
                                quads: calculatedStats.quads,
                                uploadedTextures: calculatedStats.uploadedTextures,
                                uploadFrames: calculatedStats.uploadFrames,
                                meanUploadCostMs: parseFloat(calculatedStats.meanUploadCostMs.toFixed(2)),
                                maxUploadQueueSize: calculatedStats.maxUploadQueueSize,
                                avgActiveAnimations: parseFloat(calculatedStats.avgActiveAnimations.toFixed(2)),
                                maxActiveAnimations: calculatedStats.maxActiveAnimations
                            },
                            sceneConfig: {
                                displaySize: DISPLAY_SIZE,
                                showText: SHOW_TEXT,
                                posterScale: POSTER_SCALE
                            },
                            glCallsPerInterval: lastContextSpy || null,
                            rendererCapabilities: currentCaps ? {
                                renderMode: currentCaps.renderMode,
                                webGlVersion: null !== (_currentCaps$webGlVer = currentCaps.webGlVersion) && void 0 !== _currentCaps$webGlVer ? _currentCaps$webGlVer : null,
                                vertexArrayObject: null !== (_currentCaps$vertexAr = currentCaps.vertexArrayObject) && void 0 !== _currentCaps$vertexAr ? _currentCaps$vertexAr : null,
                                maxTextureSize: currentCaps.maxTextureSize,
                                maxTextureUnits: currentCaps.maxTextureUnits,
                                pixelRatio: {
                                    physical: parseFloat(getPixelRatios().physical.toFixed(2)),
                                    logical: parseFloat(getPixelRatios().logical.toFixed(2)),
                                    windowDpr: parseFloat(getPixelRatios().dpr.toFixed(2))
                                },
                                textureProcessingTimeLimitMs: getTextureProcessingTimeLimit(),
                                imageWorkers: getImageWorkersCount(),
                                deviceCores: getDeviceCores()
                            } : {
                                pixelRatio: {
                                    physical: parseFloat(getPixelRatios().physical.toFixed(2)),
                                    logical: parseFloat(getPixelRatios().logical.toFixed(2)),
                                    windowDpr: parseFloat(getPixelRatios().dpr.toFixed(2))
                                },
                                textureProcessingTimeLimitMs: getTextureProcessingTimeLimit(),
                                imageWorkers: getImageWorkersCount(),
                                deviceCores: getDeviceCores()
                            }
                        };
                        console.log("=== BENCHMARK PERFORMANCE RESULTS (JSON) ==="), console.log(JSON.stringify(benchmarkResultsJson, null, 2));
                        try {
                            const prior = JSON.parse(localStorage.getItem("benchmarkRuns") || "[]");
                            prior.push({
                                url: window.location.pathname + window.location.search,
                                results: benchmarkResultsJson
                            }), localStorage.setItem("benchmarkRuns", JSON.stringify(prior.slice(-12)));
                        } catch (e) {}
                        if (batch(() => {
                            setPerfStats(calculatedStats), setDrawStats({
                                renderOps: maxRenderOps,
                                quads: maxQuads
                            }), setContextSpy(lastContextSpy), setBenchmarkDone(!0), setBenchmarkRunning(!1);
                        }), setTimeout(() => {
                            relaunchBtnRef && "function" == typeof relaunchBtnRef.focus && relaunchBtnRef.focus();
                        }, 100), fpsValues.length > 0 || totalRenderedFrames > 0) {
                            const animRateStr = avgAnimatedFps > 0 ? `${avgAnimatedFps.toFixed(1)} FPS` : `${avgFps.toFixed(1)} FPS`;
                            setBenchmarkStatus(`Anim: ${animRateStr} (p95: ${animP95}ms, max: ${worstAnimatedMaxFrameTime.toFixed(0)}ms) | All: ${avgFps.toFixed(1)} FPS`);
                        } else setBenchmarkStatus("Done - No FPS samples collected");
                    }();
                }, 2e3);
                onCleanup(() => clearTimeout(timeoutId));
            }
        }
    });
    const delayedBackgrounds = debounce(setGlobalBackground, 800), delayedHero = debounce(content => setHeroContent(content || {}), 600);
    function onRowChanged(selectedIndex, column, row, lastIndex) {
        if (selectedIndex === lastIndex) return;
        const values = 0 === selectedIndex ? {
            y: 300,
            alpha: 1
        } : {
            y: 200,
            alpha: 0
        };
        contentBlock.animate(values, {
            duration: 300,
            easing: "ease-in-out"
        }).start();
        const values2 = 0 === selectedIndex ? {
            y: 80,
            alpha: 1
        } : {
            y: 0,
            alpha: 0
        };
        solidLogo.animate(values2, {
            duration: 300,
            easing: "ease-in-out"
        }).start();
    }
    createEffect(on(activeElement, elm => {
        if (!elm) return;
        const item = elm.item || {};
        firstRun ? (item.backdrop && setGlobalBackground(item.backdrop), item.heroContent && setHeroContent(item.heroContent), 
        firstRun = !1) : (item.backdrop && delayedBackgrounds(item.backdrop), item.heroContent && delayedHero(item.heroContent));
    }, {
        defer: !0
    }));
    const overlayBgStyle = {
        width: 700,
        height: 140,
        color: 204,
        borderRadius: 12
    }, overlayTitleStyle = {
        fontFamily: "Roboto",
        fontSize: 28,
        color: 4294967295,
        lineHeight: 34
    }, overlayStatusStyle = {
        fontFamily: "Roboto",
        fontSize: 22,
        lineHeight: 28
    }, resultsBgStyle = {
        color: 245,
        borderRadius: 12
    }, resultsHeaderStyle = {
        fontFamily: "Roboto",
        fontSize: 16,
        lineHeight: 22,
        color: 14221311
    }, resultsLabelStyle = {
        fontFamily: "Roboto",
        fontSize: 17,
        lineHeight: 24,
        color: 2661195519
    }, resultsValueStyle = {
        fontFamily: "Roboto",
        fontSize: 17,
        lineHeight: 24,
        color: 4294967295
    }, ResultRow = rowProps => {
        return _el$ = createElement("view"), _el$2 = createElement("text"), _el$3 = createElement("text"), 
        insertNode(_el$, _el$2), insertNode(_el$, _el$3), setProp(_el$2, "x", 28), setProp(_el$2, "style", resultsLabelStyle), 
        insert(_el$2, () => rowProps.label), setProp(_el$3, "x", 350), setProp(_el$3, "style", resultsValueStyle), 
        insert(_el$3, () => rowProps.value), effect(_$p => setProp(_el$, "y", rowProps.y, _$p)), 
        _el$;
        var _el$, _el$2, _el$3;
    }, SectionHeader = headerProps => {
        return _el$4 = createElement("view"), _el$5 = createElement("text"), insertNode(_el$4, _el$5), 
        setProp(_el$5, "x", 28), setProp(_el$5, "style", resultsHeaderStyle), insert(_el$5, () => headerProps.title), 
        effect(_$p => setProp(_el$4, "y", headerProps.y, _$p)), _el$4;
        var _el$4, _el$5;
    }, SectionDivider = divProps => {
        return _el$6 = createElement("view"), setProp(_el$6, "width", 644), setProp(_el$6, "height", 1), 
        setProp(_el$6, "x", 28), setProp(_el$6, "color", 4294967074), effect(_$p => setProp(_el$6, "y", divProps.y, _$p)), 
        _el$6;
        var _el$6;
    }, glEntries = () => {
        const spy = contextSpy();
        if (!spy) return [];
        const entries = [];
        for (const key in spy) Object.prototype.hasOwnProperty.call(spy, key) && entries.push([ key, spy[key] || 0 ]);
        return entries.sort((a, b) => b[1] - a[1]);
    }, relaunchBtnStyle = {
        width: 320,
        height: 44,
        color: 858993663,
        borderRadius: 8,
        $focus: {
            color: 14221311
        }
    }, relaunchBtnTextStyle = {
        fontFamily: "Roboto",
        fontSize: 18,
        lineHeight: 24,
        color: 4294967295,
        $focus: {
            color: 255
        }
    }, glRowsCount = () => glEntries().length, dividerCapsY = () => 512 + (glRowsCount() > 0 ? 26 * glRowsCount() : 26) + 6, secCapsY = () => dividerCapsY() + 10, capsStartY = () => secCapsY() + 26, relaunchBtnY = () => capsStartY() + 208 + 16;
    return createComponent(Show, {
        get when() {
            return dataLoaded();
        },
        get fallback() {
            return _el$25 = createElement("text"), insertNode(_el$25, createTextNode("Loading Data...")), 
            setProp(_el$25, "x", 960), setProp(_el$25, "y", 540), setProp(_el$25, "fontSize", 40), 
            setProp(_el$25, "color", 4294967295), setProp(_el$25, "mount", .5), _el$25;
            var _el$25;
        },
        get children() {
            var _el$7 = createElement("view"), _el$8 = createElement("view"), _el$9 = createElement("text"), _el$1 = createElement("view"), _el$10 = createElement("view"), _el$11 = createElement("text"), _el$13 = createElement("view"), _el$14 = createElement("text"), _el$16 = createElement("text"), _el$17 = createElement("text"), _el$18 = createElement("text");
            insertNode(_el$7, _el$8), insertNode(_el$7, _el$13), setProp(_el$7, "forwardFocus", 2), 
            insertNode(_el$8, _el$9), insertNode(_el$8, _el$1), insertNode(_el$8, _el$10), insertNode(_el$8, _el$11);
            var _c$;
            return "function" == typeof solidLogo ? use(solidLogo, _el$8) : solidLogo = _el$8, 
            setProp(_el$8, "width", 300), setProp(_el$8, "height", 150), setProp(_el$8, "x", 162), 
            setProp(_el$8, "y", 80), setProp(_el$8, "zIndex", 105), insertNode(_el$9, createTextNode("Built With:")), 
            setProp(_el$9, "x", 80), setProp(_el$9, "fontSize", 28), setProp(_el$9, "color", 4143380121), 
            setProp(_el$1, "y", 32), setProp(_el$1, "src", "./assets/solidWord.png"), setProp(_el$1, "width", 280), 
            setProp(_el$1, "height", 52), setProp(_el$10, "x", 0), setProp(_el$10, "y", 110), 
            setProp(_el$10, "src", "./assets/tmdb.png"), setProp(_el$10, "width", 80), setProp(_el$10, "height", 41), 
            insertNode(_el$11, createTextNode("This product uses the TMDB API but is not endorsed or certified by TMDB.")), 
            setProp(_el$11, "x", 90), setProp(_el$11, "y", 110), setProp(_el$11, "contain", "width"), 
            setProp(_el$11, "width", 160), setProp(_el$11, "fontSize", 12), setProp(_el$11, "color", 4143380121), 
            insert(_el$7, createComponent(ContentBlock, {
                ref(r$) {
                    "function" == typeof contentBlock ? contentBlock(r$) : contentBlock = r$;
                },
                y: 300,
                x: 162,
                get content() {
                    return heroContent();
                }
            }), _el$13), insert(_el$7, createComponent(LazyColumn, {
                ref(r$) {
                    "function" == typeof columnRef ? columnRef(r$) : columnRef = r$;
                },
                get y() {
                    return scaled(500);
                },
                upCount: 3,
                get each() {
                    var _props$data3;
                    return (null == (_props$data3 = props.data) ? void 0 : _props$data3.rows) || [];
                },
                id: "BenchmarkColumn",
                onSelectedChanged: onRowChanged,
                onEnter: () => setOpenPanel(!0),
                get autofocus() {
                    return memo(() => {
                        var _props$data4;
                        return !!(null == (_props$data4 = props.data) || null == (_props$data4 = _props$data4.rows) || null == (_props$data4 = _props$data4[0]) ? void 0 : _props$data4.items);
                    })() ? props.data.rows[0].items() : void 0;
                },
                get gap() {
                    return scaled(40);
                },
                throttleInput: 250,
                delay: 250,
                eagerLoad: !0,
                get style() {
                    return styles_default.Column;
                },
                children: row => "Hero" === row().type ? createComponent(LazyRow, {
                    gap: 80,
                    upCount: 2,
                    bufferSize: 1,
                    scroll: "center",
                    centerScroll: !0,
                    get each() {
                        return row().items();
                    },
                    y: 50,
                    get height() {
                        return row().height;
                    },
                    children: item => createComponent(Hero, {
                        get item() {
                            return item();
                        }
                    })
                }) : createComponent(TitleRow, {
                    get row() {
                        return row();
                    },
                    get title() {
                        return row().title;
                    },
                    get height() {
                        return row().height;
                    },
                    get items() {
                        return row().items();
                    }
                })
            }), _el$13), insertNode(_el$13, _el$14), insertNode(_el$13, _el$16), insertNode(_el$13, _el$17), 
            insertNode(_el$13, _el$18), setProp(_el$13, "x", 610), setProp(_el$13, "y", 20), 
            setProp(_el$13, "zIndex", 200), setProp(_el$13, "style", overlayBgStyle), insertNode(_el$14, createTextNode("Benchmark (version: 190)")), 
            setProp(_el$14, "x", 20), setProp(_el$14, "y", 16), setProp(_el$14, "style", overlayTitleStyle), 
            setProp(_el$16, "x", 360), setProp(_el$16, "y", 20), setProp(_el$16, "width", 320), 
            setProp(_el$16, "contain", "width"), setProp(_el$16, "textAlign", "right"), setProp(_el$16, "fontSize", 24), 
            insert(_el$16, bundleType), setProp(_el$17, "x", 20), setProp(_el$17, "y", 54), 
            setProp(_el$17, "contain", "width"), setProp(_el$17, "width", 660), setProp(_el$17, "style", overlayStatusStyle), 
            insert(_el$17, benchmarkStatus), setProp(_el$18, "x", 20), setProp(_el$18, "y", 92), 
            setProp(_el$18, "style", overlayStatusStyle), setProp(_el$18, "color", 16746751), 
            insert(_el$18, (_c$ = memo(() => null !== renderTime()), () => {
                var _renderTime;
                return _c$() ? `Initial Render: ${null == (_renderTime = renderTime()) ? void 0 : _renderTime.toFixed(2)}ms` : "Rendering...";
            })), insert(_el$7, createComponent(Show, {
                get when() {
                    return benchmarkDone();
                },
                get children() {
                    var _el$19 = createElement("view"), _el$20 = createElement("text"), _el$22 = createElement("view"), _el$23 = createElement("text");
                    insertNode(_el$19, _el$20), insertNode(_el$19, _el$22), setProp(_el$19, "x", 610), 
                    setProp(_el$19, "y", 175), setProp(_el$19, "zIndex", 8e3), setProp(_el$19, "width", 700), 
                    setProp(_el$19, "style", resultsBgStyle), insertNode(_el$20, createTextNode("Performance Breakdown")), 
                    setProp(_el$20, "x", 28), setProp(_el$20, "y", 14), setProp(_el$20, "style", overlayTitleStyle), 
                    insert(_el$19, createComponent(SectionHeader, {
                        y: 50,
                        title: "FRAME RATE & SMOOTHNESS"
                    }), _el$22), insert(_el$19, createComponent(ResultRow, {
                        y: 74,
                        label: "Animated FPS",
                        get value() {
                            return memo(() => !!perfStats())() ? `${perfStats().avgAnimatedFps.toFixed(1)} FPS` : "—";
                        }
                    }), _el$22), insert(_el$19, createComponent(ResultRow, {
                        y: 100,
                        label: "Anim p95 / p99",
                        get value() {
                            return memo(() => !!perfStats())() ? `${perfStats().animP95}ms / ${perfStats().animP99}ms` : "—";
                        }
                    }), _el$22), insert(_el$19, createComponent(ResultRow, {
                        y: 126,
                        label: "Worst Anim Frame",
                        get value() {
                            return memo(() => !!perfStats())() ? `${perfStats().animMaxFrameTime.toFixed(1)}ms` : "—";
                        }
                    }), _el$22), insert(_el$19, createComponent(ResultRow, {
                        y: 152,
                        label: "Overall Rendered FPS",
                        get value() {
                            return memo(() => !!perfStats())() ? `${perfStats().avgFps.toFixed(1)} FPS (${perfStats().totalRenderedFrames}f)` : "—";
                        }
                    }), _el$22), insert(_el$19, createComponent(ResultRow, {
                        y: 178,
                        label: "All p95 / p99 / Max",
                        get value() {
                            return memo(() => !!perfStats())() ? `${perfStats().p95}ms / ${perfStats().p99}ms / ${perfStats().maxFrameTime.toFixed(1)}ms` : "—";
                        }
                    }), _el$22), insert(_el$19, createComponent(ResultRow, {
                        y: 204,
                        label: "Frames / Idle Polls",
                        get value() {
                            return memo(() => !!perfStats())() ? `${perfStats().totalRenderedFrames} drew / ${perfStats().totalIdleTicks} idle` : "—";
                        }
                    }), _el$22), insert(_el$19, createComponent(SectionDivider, {
                        y: 232
                    }), _el$22), insert(_el$19, createComponent(SectionHeader, {
                        y: 242,
                        title: "FRAME WORK SPLIT (INTERVAL / PEAK)"
                    }), _el$22), insert(_el$19, createComponent(ResultRow, {
                        y: 266,
                        label: "Scene Update (upd)",
                        get value() {
                            return memo(() => !!perfStats())() ? `${perfStats().totalUpdateMs.toFixed(1)}ms total | ${perfStats().maxUpdateMs.toFixed(1)}ms peak` : "—";
                        }
                    }), _el$22), insert(_el$19, createComponent(ResultRow, {
                        y: 292,
                        label: "Render Pass (rnd)",
                        get value() {
                            return memo(() => !!perfStats())() ? `${perfStats().totalRenderMs.toFixed(1)}ms total | ${perfStats().maxRenderMs.toFixed(1)}ms peak` : "—";
                        }
                    }), _el$22), insert(_el$19, createComponent(ResultRow, {
                        y: 318,
                        label: "Texture Upload (upl)",
                        get value() {
                            return memo(() => !!perfStats())() ? `${perfStats().totalUploadMs.toFixed(1)}ms total | ${perfStats().maxUploadMs.toFixed(1)}ms peak` : "—";
                        }
                    }), _el$22), insert(_el$19, createComponent(SectionDivider, {
                        y: 346
                    }), _el$22), insert(_el$19, createComponent(SectionHeader, {
                        y: 356,
                        title: "ASSETS, ANIMATIONS & GEOMETRY"
                    }), _el$22), insert(_el$19, createComponent(ResultRow, {
                        y: 380,
                        label: "Draw Calls / Quads",
                        get value() {
                            return memo(() => !!drawStats())() ? `${drawStats().renderOps} draws / ${drawStats().quads} quads` : "—";
                        }
                    }), _el$22), insert(_el$19, createComponent(ResultRow, {
                        y: 406,
                        label: "Texture Uploads",
                        get value() {
                            return memo(() => !!perfStats())() ? `${perfStats().uploadedTextures} tex / ${perfStats().uploadFrames}f (${perfStats().meanUploadCostMs.toFixed(1)}ms avg)` : "—";
                        }
                    }), _el$22), insert(_el$19, createComponent(ResultRow, {
                        y: 432,
                        label: "Upload Queue Peak",
                        get value() {
                            return memo(() => !!perfStats())() ? `q <= ${perfStats().maxUploadQueueSize}` : "—";
                        }
                    }), _el$22), insert(_el$19, createComponent(ResultRow, {
                        y: 458,
                        label: "Active Animations",
                        get value() {
                            return memo(() => !!perfStats())() ? `${perfStats().avgActiveAnimations.toFixed(1)} avg | ${perfStats().maxActiveAnimations} peak` : "—";
                        }
                    }), _el$22), insert(_el$19, createComponent(SectionDivider, {
                        y: 486
                    }), _el$22), insert(_el$19, createComponent(SectionHeader, {
                        y: 486,
                        title: "GL CALLS / INTERVAL"
                    }), _el$22), insert(_el$19, createComponent(Show, {
                        get when() {
                            return glEntries().length > 0;
                        },
                        get fallback() {
                            return _el$27 = createElement("text"), insertNode(_el$27, createTextNode("off (?contextSpy=true)")), 
                            setProp(_el$27, "x", 350), setProp(_el$27, "y", 486), setProp(_el$27, "style", resultsValueStyle), 
                            _el$27;
                            var _el$27;
                        },
                        get children() {
                            return createComponent(For, {
                                get each() {
                                    return glEntries();
                                },
                                children: ([name, count], i) => createComponent(ResultRow, {
                                    get y() {
                                        return 512 + 26 * i();
                                    },
                                    label: name,
                                    value: `${count}`
                                })
                            });
                        }
                    }), _el$22), insert(_el$19, createComponent(SectionDivider, {
                        get y() {
                            return dividerCapsY();
                        }
                    }), _el$22), insert(_el$19, createComponent(SectionHeader, {
                        get y() {
                            return secCapsY();
                        },
                        title: "RENDERER CAPABILITIES"
                    }), _el$22), insert(_el$19, createComponent(Show, {
                        get when() {
                            return capabilities();
                        },
                        get fallback() {
                            return _el$29 = createElement("text"), insertNode(_el$29, createTextNode("Capabilities unavailable")), 
                            setProp(_el$29, "x", 28), setProp(_el$29, "style", resultsLabelStyle), effect(_$p => setProp(_el$29, "y", capsStartY(), _$p)), 
                            _el$29;
                            var _el$29;
                        },
                        get children() {
                            return [ createComponent(ResultRow, {
                                get y() {
                                    return capsStartY();
                                },
                                label: "Render Mode",
                                get value() {
                                    return capabilities().renderMode;
                                }
                            }), createComponent(ResultRow, {
                                get y() {
                                    return capsStartY() + 26;
                                },
                                label: "WebGL Version",
                                get value() {
                                    return "webgl" === (caps = capabilities()).renderMode ? `WebGL ${null !== (_caps$webGlVersion = caps.webGlVersion) && void 0 !== _caps$webGlVersion ? _caps$webGlVersion : "?"}` : "Canvas2D";
                                    var caps, _caps$webGlVersion;
                                }
                            }), createComponent(ResultRow, {
                                get y() {
                                    return capsStartY() + 52;
                                },
                                label: "Vertex Array Obj (VAO)",
                                get value() {
                                    return capabilities().vertexArrayObject ? "Enabled (on)" : "Disabled (off)";
                                }
                            }), createComponent(ResultRow, {
                                get y() {
                                    return capsStartY() + 78;
                                },
                                label: "Max Texture Size",
                                get value() {
                                    return `${capabilities().maxTextureSize}px`;
                                }
                            }), createComponent(ResultRow, {
                                get y() {
                                    return capsStartY() + 104;
                                },
                                label: "Max Texture Units",
                                get value() {
                                    return `${capabilities().maxTextureUnits} units`;
                                }
                            }), createComponent(ResultRow, {
                                get y() {
                                    return capsStartY() + 130;
                                },
                                label: "Pixel Ratio (Phys / Log)",
                                get value() {
                                    return `${getPixelRatios().physical.toFixed(2)}x / ${getPixelRatios().logical.toFixed(2)}x`;
                                }
                            }), createComponent(ResultRow, {
                                get y() {
                                    return capsStartY() + 156;
                                },
                                label: "Image Workers",
                                get value() {
                                    return `${getImageWorkersCount()} (${getDeviceCores()})`;
                                }
                            }), createComponent(ResultRow, {
                                get y() {
                                    return capsStartY() + 182;
                                },
                                label: "Tex Process Limit",
                                get value() {
                                    return `${getTextureProcessingTimeLimit()}ms`;
                                }
                            }) ];
                        }
                    }), _el$22), insertNode(_el$22, _el$23);
                    return "function" == typeof relaunchBtnRef ? use(relaunchBtnRef, _el$22) : relaunchBtnRef = _el$22, 
                    setProp(_el$22, "x", 190), setProp(_el$22, "style", relaunchBtnStyle), setProp(_el$22, "forwardStates", !0), 
                    setProp(_el$22, "autofocus", !0), setProp(_el$22, "onEnter", () => (document.location.reload(), 
                    !0)), insertNode(_el$23, createTextNode("Relaunch Benchmark")), setProp(_el$23, "x", 160), 
                    setProp(_el$23, "y", 22), setProp(_el$23, "mount", .5), setProp(_el$23, "style", relaunchBtnTextStyle), 
                    effect(_p$ => {
                        var _v$ = relaunchBtnY() + 44 + 18, _v$2 = relaunchBtnY();
                        return _v$ !== _p$.e && (_p$.e = setProp(_el$19, "height", _v$, _p$.e)), _v$2 !== _p$.t && (_p$.t = setProp(_el$22, "y", _v$2, _p$.t)), 
                        _p$;
                    }, {
                        e: void 0,
                        t: void 0
                    }), _el$19;
                }
            }), null), insert(_el$7, createComponent(AssetPanel, {
                onFocus: storeFocus,
                close: () => (setOpenPanel(!1), restoreFocus(), !0),
                get open() {
                    return openPanel();
                },
                get item() {
                    return heroContent();
                }
            }), null), effect(_p$ => {
                var _v$3 = -1 !== bundleType.indexOf("LEGACY") ? 4291559679 : 16746751, _v$4 = benchmarkDone() ? 16746751 : benchmarkRunning() ? 4291559679 : 2863311615;
                return _v$3 !== _p$.e && (_p$.e = setProp(_el$16, "color", _v$3, _p$.e)), _v$4 !== _p$.t && (_p$.t = setProp(_el$17, "color", _v$4, _p$.t)), 
                _p$;
            }, {
                e: void 0,
                t: void 0
            }), _el$7;
        }
    });
};

export { Benchmark as default };