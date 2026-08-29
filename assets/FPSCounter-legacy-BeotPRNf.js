(function() {
    function _slicedToArray(r, e) {
        return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();
    }
    function _nonIterableRest() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
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
    System.register([ "./render-legacy-DZhvr1vn.js", "./mergeProps-legacy-D9f-R3Ah.js" ], function(_export, _context) {
        "use strict";
        var createElement, spread, insert, setProp, createSignal, createTextNode, insertNode, mergeProps, fpsStyle, fpsLabel, fpsValue, fps, setFps, avgFps, setAvgFps, minFps, setMinFps, maxFps, setMaxFps, quads, setQuads, criticalThresholdSignal, setCriticalThresholdSignal, targetThresholdSignal, setTargetThresholdSignal, renderableMemUsedSignal, setRenderableMemUsedSignal, memUsedSignal, setMemUsedSignal, renderableTexturesLoadedSignal, setRenderableTexturesLoadedSignal, loadedTexturesSignal, setLoadedTexturesSignal, renderOps, setRenderOps, count, totalFps, infoFontSize, resetCounter, calcFps, frameCount, FPSCounter;
        function bytesToMb(bytes) {
            return (bytes / 1024 / 1024).toFixed(2) + " Mb";
        }
        function updateMemoryInfo(stage) {
            var memInfo = stage.txMemManager.getMemoryInfo();
            setCriticalThresholdSignal(bytesToMb(memInfo.criticalThreshold));
            setTargetThresholdSignal(bytesToMb(memInfo.targetThreshold));
            setRenderableMemUsedSignal(bytesToMb(memInfo.renderableMemUsed));
            setMemUsedSignal(bytesToMb(memInfo.memUsed));
            setRenderableTexturesLoadedSignal(memInfo.renderableTexturesLoaded);
            setLoadedTexturesSignal(memInfo.loadedTextures);
        }
        function setupFPS(root) {
            root.renderer.on("fpsUpdate", function(target, fpsData) {
                var fps = typeof fpsData === "number" ? fpsData : fpsData.fps;
                if (fps > 5) {
                    calcFps(fps);
                    if (frameCount % 10 === 0) {
                        updateMemoryInfo(target.stage);
                        frameCount = 0;
                    }
                    frameCount++;
                }
            });
            root.renderer.on("renderUpdate", function(target, quadsData) {
                setQuads(quadsData.quads);
                setRenderOps(quadsData.renderOps);
            });
        }
        _export("r", setupFPS);
        return {
            setters: [ function(_renderLegacy001Js) {
                createElement = _renderLegacy001Js.a;
                spread = _renderLegacy001Js.h;
                insert = _renderLegacy001Js.l;
                setProp = _renderLegacy001Js.m;
                createSignal = _renderLegacy001Js.q;
                createTextNode = _renderLegacy001Js.s;
                insertNode = _renderLegacy001Js.u;
            }, function(_mergePropsLegacy003Js) {
                mergeProps = _mergePropsLegacy003Js.t;
            } ],
            execute: function execute() {
                var _createSignal, _createSignal2, _createSignal3, _createSignal4, _createSignal5, _createSignal6, _createSignal7, _createSignal8, _createSignal9, _createSignal0, _createSignal1, _createSignal10, _createSignal11, _createSignal12, _createSignal13, _createSignal14, _createSignal15, _createSignal16, _createSignal17, _createSignal18, _createSignal19, _createSignal20, _createSignal21, _createSignal22;
                fpsStyle = {
                    color: 255,
                    height: 216,
                    width: 330,
                    x: 1900,
                    y: 6,
                    mountX: 1,
                    alpha: 1,
                    zIndex: 100
                };
                fpsLabel = {
                    x: 10,
                    fontSize: 20,
                    textColor: 4143380223
                };
                fpsValue = {
                    fontSize: 22,
                    textColor: 4143380223
                };
                _createSignal = createSignal(0), _createSignal2 = _slicedToArray(_createSignal, 2), 
                fps = _createSignal2[0], setFps = _createSignal2[1];
                _createSignal3 = createSignal(0), _createSignal4 = _slicedToArray(_createSignal3, 2), 
                avgFps = _createSignal4[0], setAvgFps = _createSignal4[1];
                _createSignal5 = createSignal(99), _createSignal6 = _slicedToArray(_createSignal5, 2), 
                minFps = _createSignal6[0], setMinFps = _createSignal6[1];
                _createSignal7 = createSignal(0), _createSignal8 = _slicedToArray(_createSignal7, 2), 
                maxFps = _createSignal8[0], setMaxFps = _createSignal8[1];
                _createSignal9 = createSignal(0), _createSignal0 = _slicedToArray(_createSignal9, 2), 
                quads = _createSignal0[0], setQuads = _createSignal0[1];
                _createSignal1 = createSignal(""), _createSignal10 = _slicedToArray(_createSignal1, 2), 
                criticalThresholdSignal = _createSignal10[0], setCriticalThresholdSignal = _createSignal10[1];
                _createSignal11 = createSignal(""), _createSignal12 = _slicedToArray(_createSignal11, 2), 
                targetThresholdSignal = _createSignal12[0], setTargetThresholdSignal = _createSignal12[1];
                _createSignal13 = createSignal(""), _createSignal14 = _slicedToArray(_createSignal13, 2), 
                renderableMemUsedSignal = _createSignal14[0], setRenderableMemUsedSignal = _createSignal14[1];
                _createSignal15 = createSignal(""), _createSignal16 = _slicedToArray(_createSignal15, 2), 
                memUsedSignal = _createSignal16[0], setMemUsedSignal = _createSignal16[1];
                _createSignal17 = createSignal(0), _createSignal18 = _slicedToArray(_createSignal17, 2), 
                renderableTexturesLoadedSignal = _createSignal18[0], setRenderableTexturesLoadedSignal = _createSignal18[1];
                _createSignal19 = createSignal(0), _createSignal20 = _slicedToArray(_createSignal19, 2), 
                loadedTexturesSignal = _createSignal20[0], setLoadedTexturesSignal = _createSignal20[1];
                _createSignal21 = createSignal(0), _createSignal22 = _slicedToArray(_createSignal21, 2), 
                renderOps = _createSignal22[0], setRenderOps = _createSignal22[1];
                count = 0;
                totalFps = 0;
                infoFontSize = 14;
                _export("n", resetCounter = function resetCounter() {
                    totalFps = 0;
                    count = 0;
                    setMinFps(99);
                });
                calcFps = function calcFps(fps) {
                    if (!fps) return;
                    setFps(fps);
                    setMinFps(function(prev) {
                        return Math.min(fps, prev);
                    });
                    setMaxFps(function(prev) {
                        return Math.max(fps, prev);
                    });
                    totalFps += fps;
                    count++;
                    setAvgFps(Math.round(totalFps / count));
                };
                frameCount = 0;
                _export("t", FPSCounter = function FPSCounter(props) {
                    return function() {
                        var _el$ = createElement("view"), _el$2 = createElement("view"), _el$3 = createElement("text"), _el$5 = createElement("text"), _el$6 = createElement("view"), _el$7 = createElement("text"), _el$9 = createElement("text"), _el$0 = createElement("view"), _el$1 = createElement("text"), _el$11 = createElement("text"), _el$12 = createElement("view"), _el$13 = createElement("text"), _el$15 = createElement("text"), _el$16 = createElement("view"), _el$17 = createElement("view"), _el$18 = createElement("text"), _el$20 = createElement("text"), _el$21 = createElement("view"), _el$22 = createElement("text"), _el$24 = createElement("text"), _el$25 = createElement("view"), _el$26 = createElement("text"), _el$28 = createElement("text"), _el$29 = createElement("view"), _el$30 = createElement("text"), _el$32 = createElement("text"), _el$33 = createElement("view"), _el$34 = createElement("text"), _el$36 = createElement("text"), _el$37 = createElement("view"), _el$38 = createElement("text"), _el$40 = createElement("text"), _el$41 = createElement("view"), _el$42 = createElement("text"), _el$44 = createElement("text"), _el$45 = createElement("view"), _el$46 = createElement("text"), _el$48 = createElement("text");
                        insertNode(_el$, _el$2);
                        insertNode(_el$, _el$6);
                        insertNode(_el$, _el$0);
                        insertNode(_el$, _el$12);
                        insertNode(_el$, _el$16);
                        spread(_el$, mergeProps(props, {
                            style: fpsStyle
                        }), true);
                        insertNode(_el$2, _el$3);
                        insertNode(_el$2, _el$5);
                        setProp(_el$2, "y", 6);
                        insertNode(_el$3, createTextNode("FPS:"));
                        setProp(_el$3, "style", fpsLabel);
                        setProp(_el$5, "style", fpsValue);
                        setProp(_el$5, "x", 90);
                        insert(_el$5, function() {
                            return fps().toString();
                        });
                        insertNode(_el$6, _el$7);
                        insertNode(_el$6, _el$9);
                        setProp(_el$6, "y", 6);
                        setProp(_el$6, "x", 160);
                        insertNode(_el$7, createTextNode("AVG:"));
                        setProp(_el$7, "style", fpsLabel);
                        setProp(_el$9, "style", fpsValue);
                        setProp(_el$9, "x", 100);
                        insert(_el$9, function() {
                            return avgFps().toString();
                        });
                        insertNode(_el$0, _el$1);
                        insertNode(_el$0, _el$11);
                        setProp(_el$0, "x", 0);
                        setProp(_el$0, "y", 26);
                        insertNode(_el$1, createTextNode("MIN:"));
                        setProp(_el$1, "style", fpsLabel);
                        setProp(_el$11, "style", fpsValue);
                        setProp(_el$11, "x", 90);
                        insert(_el$11, function() {
                            return minFps().toString();
                        });
                        insertNode(_el$12, _el$13);
                        insertNode(_el$12, _el$15);
                        setProp(_el$12, "x", 160);
                        setProp(_el$12, "y", 26);
                        insertNode(_el$13, createTextNode("MAX:"));
                        setProp(_el$13, "style", fpsLabel);
                        setProp(_el$15, "style", fpsValue);
                        setProp(_el$15, "x", 100);
                        insert(_el$15, function() {
                            return maxFps().toString();
                        });
                        insertNode(_el$16, _el$17);
                        insertNode(_el$16, _el$21);
                        insertNode(_el$16, _el$25);
                        insertNode(_el$16, _el$29);
                        insertNode(_el$16, _el$33);
                        insertNode(_el$16, _el$37);
                        insertNode(_el$16, _el$41);
                        insertNode(_el$16, _el$45);
                        setProp(_el$16, "display", "flex");
                        setProp(_el$16, "flexDirection", "column");
                        setProp(_el$16, "y", 58);
                        setProp(_el$16, "gap", 4);
                        insertNode(_el$17, _el$18);
                        insertNode(_el$17, _el$20);
                        setProp(_el$17, "height", infoFontSize);
                        insertNode(_el$18, createTextNode("criticalThreshold:"));
                        setProp(_el$18, "fontSize", infoFontSize);
                        setProp(_el$18, "style", fpsLabel);
                        setProp(_el$20, "fontSize", infoFontSize);
                        setProp(_el$20, "style", fpsLabel);
                        setProp(_el$20, "x", 230);
                        insert(_el$20, criticalThresholdSignal);
                        insertNode(_el$21, _el$22);
                        insertNode(_el$21, _el$24);
                        setProp(_el$21, "height", infoFontSize);
                        insertNode(_el$22, createTextNode("targetThreshold:"));
                        setProp(_el$22, "fontSize", infoFontSize);
                        setProp(_el$22, "style", fpsLabel);
                        setProp(_el$24, "fontSize", infoFontSize);
                        setProp(_el$24, "style", fpsLabel);
                        setProp(_el$24, "x", 230);
                        insert(_el$24, targetThresholdSignal);
                        insertNode(_el$25, _el$26);
                        insertNode(_el$25, _el$28);
                        setProp(_el$25, "height", infoFontSize);
                        insertNode(_el$26, createTextNode("renderableMemUsed:"));
                        setProp(_el$26, "fontSize", infoFontSize);
                        setProp(_el$26, "style", fpsLabel);
                        setProp(_el$28, "fontSize", infoFontSize);
                        setProp(_el$28, "style", fpsLabel);
                        setProp(_el$28, "x", 230);
                        insert(_el$28, renderableMemUsedSignal);
                        insertNode(_el$29, _el$30);
                        insertNode(_el$29, _el$32);
                        setProp(_el$29, "height", infoFontSize);
                        insertNode(_el$30, createTextNode("memUsed:"));
                        setProp(_el$30, "fontSize", infoFontSize);
                        setProp(_el$30, "style", fpsLabel);
                        setProp(_el$32, "fontSize", infoFontSize);
                        setProp(_el$32, "style", fpsLabel);
                        setProp(_el$32, "x", 230);
                        insert(_el$32, memUsedSignal);
                        insertNode(_el$33, _el$34);
                        insertNode(_el$33, _el$36);
                        setProp(_el$33, "height", infoFontSize);
                        insertNode(_el$34, createTextNode("Textures In Memory:"));
                        setProp(_el$34, "fontSize", infoFontSize);
                        setProp(_el$34, "style", fpsLabel);
                        setProp(_el$36, "fontSize", infoFontSize);
                        setProp(_el$36, "style", fpsLabel);
                        setProp(_el$36, "x", 230);
                        insert(_el$36, function() {
                            return loadedTexturesSignal().toString();
                        });
                        insertNode(_el$37, _el$38);
                        insertNode(_el$37, _el$40);
                        setProp(_el$37, "height", infoFontSize);
                        insertNode(_el$38, createTextNode("Textures On Screen:"));
                        setProp(_el$38, "fontSize", infoFontSize);
                        setProp(_el$38, "style", fpsLabel);
                        setProp(_el$40, "fontSize", infoFontSize);
                        setProp(_el$40, "style", fpsLabel);
                        setProp(_el$40, "x", 230);
                        insert(_el$40, function() {
                            return renderableTexturesLoadedSignal().toString();
                        });
                        insertNode(_el$41, _el$42);
                        insertNode(_el$41, _el$44);
                        setProp(_el$41, "height", infoFontSize);
                        insertNode(_el$42, createTextNode("Quads:"));
                        setProp(_el$42, "fontSize", infoFontSize);
                        setProp(_el$42, "style", fpsLabel);
                        setProp(_el$44, "fontSize", infoFontSize);
                        setProp(_el$44, "style", fpsLabel);
                        setProp(_el$44, "x", 230);
                        insert(_el$44, function() {
                            return quads().toString();
                        });
                        insertNode(_el$45, _el$46);
                        insertNode(_el$45, _el$48);
                        setProp(_el$45, "height", infoFontSize);
                        insertNode(_el$46, createTextNode("Draws:"));
                        setProp(_el$46, "fontSize", infoFontSize);
                        setProp(_el$46, "style", fpsLabel);
                        setProp(_el$48, "fontSize", infoFontSize);
                        setProp(_el$48, "style", fpsLabel);
                        setProp(_el$48, "x", 230);
                        insert(_el$48, function() {
                            return renderOps().toString();
                        });
                        return _el$;
                    }();
                });
            }
        };
    });
})();