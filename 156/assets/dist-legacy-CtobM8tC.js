System.register([ "./render-legacy-t4wUAioc.js" ], function(_export, _context) {
    var onCleanup, getOwner;
    return {
        setters: [ function(_renderLegacy002Js) {
            onCleanup = _renderLegacy002Js.$, getOwner = _renderLegacy002Js.X;
        } ],
        execute: function() {
            _export("t", function(callback, wait) {
                var timeoutId, clear = function() {
                    return clearTimeout(timeoutId);
                };
                return getOwner() && onCleanup(clear), Object.assign(function() {
                    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
                    void 0 !== timeoutId && clear(), timeoutId = setTimeout(function() {
                        return callback.apply(void 0, args);
                    }, wait);
                }, {
                    clear: clear
                });
            });
        }
    };
});