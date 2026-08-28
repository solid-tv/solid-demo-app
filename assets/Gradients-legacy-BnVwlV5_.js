(function() {
    System.register([ "./render-legacy-CAqcHxfG.js", "./state-legacy-xc5BISXR.js" ], function(_export, _context) {
        "use strict";
        var createElement, setProp, insertNode, setGlobalBackground, Default;
        return {
            setters: [ function(_renderLegacy001Js) {
                createElement = _renderLegacy001Js.a;
                setProp = _renderLegacy001Js.m;
                insertNode = _renderLegacy001Js.u;
            }, function(_stateLegacy00iJs) {
                setGlobalBackground = _stateLegacy00iJs.n;
            } ],
            execute: function execute() {
                _export("default", Default = function Default() {
                    setGlobalBackground(506018815);
                    return function() {
                        var _el$ = createElement("view"), _el$2 = createElement("view"), _el$3 = createElement("view"), _el$4 = createElement("view"), _el$5 = createElement("view");
                        insertNode(_el$, _el$2);
                        insertNode(_el$, _el$3);
                        insertNode(_el$, _el$4);
                        insertNode(_el$, _el$5);
                        setProp(_el$, "autofocus", true);
                        setProp(_el$2, "width", 1920 / 4);
                        setProp(_el$2, "height", 1080);
                        setProp(_el$2, "colorTop", 143766271);
                        setProp(_el$2, "colorBottom", 2784230655);
                        setProp(_el$3, "width", 1920 / 4);
                        setProp(_el$3, "height", 1080);
                        setProp(_el$3, "x", 1920 / 4);
                        setProp(_el$3, "colorLeft", 3693487871);
                        setProp(_el$3, "colorRight", 4168184319);
                        setProp(_el$4, "width", 1920 / 4);
                        setProp(_el$4, "height", 1080);
                        setProp(_el$4, "x", 1920 / 4 * 2);
                        setProp(_el$4, "colorTop", 143766271);
                        setProp(_el$4, "colorRight", 4168184319);
                        setProp(_el$5, "width", 1920 / 4);
                        setProp(_el$5, "height", 1080);
                        setProp(_el$5, "x", 1920 / 4 * 3);
                        setProp(_el$5, "colorRight", 8388863);
                        setProp(_el$5, "colorBottom", 4292280575);
                        return _el$;
                    }();
                });
            }
        };
    });
})();