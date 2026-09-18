// Stand-in for @nativescript/canvas-svg 3.0.0-alpha.10, whose CanvasSVG.xcframework
// has no tvOS slice and fails the tvOS build. The polyfill imports these
// names at module load; nothing in the harness renders SVG, so each is an
// empty class and the loaders report no image.
export class Circle {}
export class Ellipse {}
export class G {}
export class Image {}
export class Line {}
export class LinearGradient {}
export class Path {}
export class Polygon {}
export class Polyline {}
export class RadialGradient {}
export class Rect {}
export class Stop {}
export class Svg {
  static fromSrcSync() {
    return null;
  }
  static fromSrc() {
    return Promise.resolve(null);
  }
}
export class Text {}
export class Use {}
