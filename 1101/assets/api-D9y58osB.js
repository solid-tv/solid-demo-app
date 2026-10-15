var tmdbConfig, baseImageUrl, basePosterSize = new URLSearchParams(window.location.search).get("posterSize") || "w185", defaultFetchParams = {
    headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZDE4YjEwMTA0YjdiZTlkNjFiMWYwYjVlMGEwNzM2OCIsInN1YiI6IjYwZTVjMTdlNGNhNjc2MDA3NTA4Njc3MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.D_nqH9kd-bhhWzeVsTDPYhHnsUaNAuyAa6YATmKHqsA"
    }
};

function getImageUrl(path, posterSize = basePosterSize) {
    return path ? baseImageUrl + posterSize + path : "./assets/fallback.png";
}

function _get(path, params = {}) {
    return fetch("https://api.themoviedb.org/3" + path, {
        ...defaultFetchParams,
        ...params
    }).then(r => r.json());
}

function loadConfig() {
    return _get("/configuration").then(data => (tmdbConfig = data, baseImageUrl = function(images = {}, protocol = window.location.protocol) {
        return "https:" === protocol ? images.secure_base_url || images.base_url : images.base_url || images.secure_base_url;
    }(data.images), data));
}

var api_default = {
    get: function(path, params = {}) {
        return tmdbConfig ? _get(path, params) : loadConfig().then(() => _get(path, params));
    },
    loadConfig: loadConfig
};

export { getImageUrl as n, api_default as t };