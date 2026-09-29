import { expect, test } from "vitest";
import { pickImageBaseUrl } from "./index";

const images = {
  base_url: "http://image.tmdb.org/t/p/",
  secure_base_url: "https://image.tmdb.org/t/p/"
};

test("uses the http base on a packaged app (file://) so old TV root stores don't reject the image CDN", () => {
  expect(pickImageBaseUrl(images, "file:")).toEqual("http://image.tmdb.org/t/p/");
});

test("uses the http base on an http dev server", () => {
  expect(pickImageBaseUrl(images, "http:")).toEqual("http://image.tmdb.org/t/p/");
});

test("keeps the https base on an https page, where http images are blocked as mixed content", () => {
  expect(pickImageBaseUrl(images, "https:")).toEqual("https://image.tmdb.org/t/p/");
});

test("falls back to whichever base the config provides", () => {
  expect(pickImageBaseUrl({ secure_base_url: images.secure_base_url }, "file:")).toEqual(
    "https://image.tmdb.org/t/p/"
  );
  expect(pickImageBaseUrl({ base_url: images.base_url }, "https:")).toEqual(
    "http://image.tmdb.org/t/p/"
  );
});
