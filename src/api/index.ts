import API_KEY_V4 from "./key";
const API_BASE = "https://api.themoviedb.org/3";
let tmdbConfig;
let baseImageUrl;
const urlParams = new URLSearchParams(window.location.search);
const basePosterSize = urlParams.get("posterSize") || "w185";

const defaultFetchParams = {
  headers: {
    "Content-Type": "application/json",
    Authorization: "Bearer " + API_KEY_V4
  }
};

export function getImageUrl(path: string | null | undefined, posterSize: string = basePosterSize) {
  if (!path) {
    return "./assets/fallback.png";
  }
  return baseImageUrl + posterSize + path;
}

function get(path: string, params: RequestInit = {}) {
  if (tmdbConfig) {
    return _get(path, params);
  } else {
    return loadConfig().then(() => _get(path, params));
  }
}

function _get(path: string, params: RequestInit = {}) {
  return fetch(API_BASE + path, {
    ...defaultFetchParams,
    ...params
  }).then((r) => r.json());
}

// image.tmdb.org is DNS-balanced across CDNs, and the BunnyCDN edge (most lookups)
// chains to Let's Encrypt's ISRG Root X1, which older TV root stores (webOS 3.x)
// lack, so https posters fail with ERR_INSECURE_RESPONSE. Use http unless the page
// itself is https, where http images would be blocked as mixed content.
export function pickImageBaseUrl(
  images: { base_url?: string; secure_base_url?: string } = {},
  protocol: string = window.location.protocol
) {
  if (protocol === "https:") {
    return images.secure_base_url || images.base_url;
  }
  return images.base_url || images.secure_base_url;
}

function loadConfig() {
  return _get("/configuration").then((data) => {
    tmdbConfig = data;
    baseImageUrl = pickImageBaseUrl(data.images);
    return data;
  });
}

export default {
  get,
  loadConfig
};
