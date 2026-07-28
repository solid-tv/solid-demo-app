import api from "..";
import { convertItemsToTiles } from "../formatters/ItemFormatter";

let cache = new Map();

export default function (filter: string) {
  return (pageIndex: number): Promise<any> => {
    const url = `/trending/${filter}/week?page=${pageIndex}`;
    if (cache.has(url)) {
      return cache.get(url);
    }

    let result = api.get(url).then((trending) => {
      let results = trending.results.filter((r) => !r.adult);
      let tiles = convertItemsToTiles(results)
      return tiles;
    }).catch((err) => {
      console.error("[BROWSE_PROVIDER_ERROR] url:", url, "error:", err.message, err.stack);
      throw err;
    });

    cache.set(url, result);
    return result;
  };
}
