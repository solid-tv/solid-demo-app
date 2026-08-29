(function() {
    System.register([ "./api-legacy-CQ6iaaWY.js" ], function(_export, _context) {
        "use strict";
        var getImageUrl;
        function truncateString(str, maxLength) {
            if (!str) return "";
            var s = String(str);
            if (s.length > maxLength) return s.substring(0, maxLength - 3) + "...";
            return s;
        }
        function convertItemsToTiles() {
            var items = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
            return items.map(function(item, i) {
                return {
                    src: getImageUrl(item.poster_path || item.profile_path),
                    tileSrc: getImageUrl(item.backdrop_path || item.profile_path, "w300"),
                    backdrop: getImageUrl(item.backdrop_path, "w1280"),
                    href: "/entity/".concat(item.media_type || "people", "/").concat(item.id),
                    shortTitle: truncateString(item.title || item.name, 30),
                    title: item.title || item.name,
                    overview: item.overview,
                    absIndex: i,
                    item: item,
                    entityInfo: {
                        type: item.media_type || "people",
                        id: item.id
                    },
                    heroContent: {
                        title: item.title || item.name,
                        description: item.overview
                    }
                };
            });
        }
        _export("t", convertItemsToTiles);
        return {
            setters: [ function(_apiLegacy00jJs) {
                getImageUrl = _apiLegacy00jJs.n;
            } ],
            execute: function execute() {}
        };
    });
})();