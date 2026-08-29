var key_default = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZDE4YjEwMTA0YjdiZTlkNjFiMWYwYjVlMGEwNzM2OCIsInN1YiI6IjYwZTVjMTdlNGNhNjc2MDA3NTA4Njc3MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.D_nqH9kd-bhhWzeVsTDPYhHnsUaNAuyAa6YATmKHqsA";

var API_BASE = "https://api.themoviedb.org/3";

var tmdbConfig;

var baseImageUrl;

var basePosterSize = new URLSearchParams(window.location.search).get("posterSize") || "w185";

var defaultFetchParams = {
    headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + key_default
    }
};

function getImageUrl(path, posterSize = basePosterSize) {
    if (!path) return "./assets/fallback.png";
    return baseImageUrl + posterSize + path;
}

function get(path, params = {}) {
    if (tmdbConfig) return _get(path, params); else return loadConfig().then(() => _get(path, params));
}

function _get(path, params = {}) {
    return fetch(API_BASE + path, {
        ...defaultFetchParams,
        ...params
    }).then(r => r.json());
}

function loadConfig() {
    return _get("/configuration").then(data => {
        var _data$images;
        tmdbConfig = data;
        baseImageUrl = (_data$images = data.images) == null ? void 0 : _data$images.secure_base_url;
        return data;
    });
}

var api_default = {
    get: get,
    loadConfig: loadConfig
};

export { getImageUrl as n, api_default as t };
//# sourceMappingURL=api-BiLDTsHT.js.map