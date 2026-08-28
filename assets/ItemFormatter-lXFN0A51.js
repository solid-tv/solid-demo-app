import { n as getImageUrl } from "./api-BiLDTsHT.js";

function truncateString(str, maxLength) {
    if (!str) return "";
    const s = String(str);
    if (s.length > maxLength) return s.substring(0, maxLength - 3) + "...";
    return s;
}

function convertItemsToTiles(items = []) {
    return items.map((item, i) => ({
        src: getImageUrl(item.poster_path || item.profile_path),
        tileSrc: getImageUrl(item.backdrop_path || item.profile_path, "w300"),
        backdrop: getImageUrl(item.backdrop_path, "w1280"),
        href: `/entity/${item.media_type || "people"}/${item.id}`,
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
    }));
}

export { convertItemsToTiles as t };