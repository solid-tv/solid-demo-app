/**
 * Frame time histogram layout, read off the renderer rather than redeclared
 * here so the page cannot drift from the buckets a payload was built with.
 *
 * The app is built against several renderer releases (see the picker at
 * #/versions). The bucket helpers only exist from 1.8.0 on, and a named import
 * of them fails the build against anything older, so they are read from the
 * namespace instead. Older renderers send no `frameTimeBuckets` at all, so
 * with the fallbacks in place the histogram simply stays empty there.
 */
import * as renderer from "@solidtv/renderer";

const histogram = renderer as Partial<{
  FRAME_TIME_BUCKET_COUNT: number;
  frameTimeBucketLowerBound: (index: number) => number;
}>;

export const FRAME_TIME_BUCKET_COUNT = histogram.FRAME_TIME_BUCKET_COUNT ?? 0;

export const frameTimeBucketLowerBound = histogram.frameTimeBucketLowerBound ?? (() => 0);
