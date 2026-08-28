(function() {
    System.register([ "./render-legacy-DCiJIohl.js" ], function(_export, _context) {
        "use strict";
        var onCleanup, getOwner, debounce;
        return {
            setters: [ function(_renderLegacy001Js) {
                onCleanup = _renderLegacy001Js.Q;
                getOwner = _renderLegacy001Js.Y;
            } ],
            execute: function execute() {
                _export("t", debounce = function debounce(callback, wait) {
                    if (false) return Object.assign(function() {
                        return void 0;
                    }, {
                        clear: function clear() {
                            return void 0;
                        }
                    });
                    var timeoutId;
                    var clear = function clear() {
                        return clearTimeout(timeoutId);
                    };
                    if (getOwner()) onCleanup(clear);
                    var debounced = function debounced() {
                        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                            args[_key] = arguments[_key];
                        }
                        if (timeoutId !== void 0) clear();
                        timeoutId = setTimeout(function() {
                            return callback.apply(void 0, args);
                        }, wait);
                    };
                    return Object.assign(debounced, {
                        clear: clear
                    });
                });
            }
        };
    });
})();