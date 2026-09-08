System.register([ "./api-legacy-BrsqDpuo.js" ], function(_export, _context) {
    var getImageUrl;
    function truncateString(str, maxLength) {
        if (!str) return "";
        var s = String(str);
        return s.length > maxLength ? s.substring(0, maxLength - 3) + "..." : s;
    }
    return _export("t", function() {
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []).map(function(item, i) {
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
    }), {
        setters: [ function(_apiLegacy00kJs) {
            getImageUrl = _apiLegacy00kJs.n;
        } ],
        execute: function() {}
    };
});