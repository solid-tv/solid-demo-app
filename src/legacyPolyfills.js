/* eslint-disable */
// The legacy bundle's polyfills when it builds with LEGACY_POLYFILLS=native
// (vite.config.js): only what Chrome 38 lacks and the app, @solidtv/solid,
// solid-js or the router call, written against the engine's own Symbol,
// iterators, Map, Set, WeakMap and Promise, which core-js would replace.
// ES5, and nothing here replaces a method the engine already has.
(function () {
  "use strict";
  var G = typeof window !== "undefined" ? window : self;
  var hasOwn = Object.prototype.hasOwnProperty;

  function define(obj, name, value) {
    if (name in obj) return;
    Object.defineProperty(obj, name, { value: value, writable: true, configurable: true });
  }
  function toObject(v) {
    if (v == null) throw new TypeError("Cannot convert undefined or null to object");
    return Object(v);
  }
  function toLength(v) {
    var n = Math.floor(Number(v)) || 0;
    return n < 0 ? 0 : Math.min(n, 9007199254740991);
  }
  function toInteger(v) {
    var n = Number(v);
    return n !== n ? 0 : n < 0 ? Math.ceil(n) : Math.floor(n);
  }
  function sameValueZero(a, b) {
    return a === b || (a !== a && b !== b);
  }

  // ES2015 (Chrome 45)
  define(Object, "assign", function assign(target) {
    var to = toObject(target);
    for (var i = 1; i < arguments.length; i++) {
      var from = arguments[i];
      if (from == null) continue;
      from = Object(from);
      var keys = Object.keys(from);
      for (var k = 0; k < keys.length; k++) to[keys[k]] = from[keys[k]];
      var symbols = Object.getOwnPropertySymbols(from);
      for (var s = 0; s < symbols.length; s++) {
        if (Object.prototype.propertyIsEnumerable.call(from, symbols[s])) to[symbols[s]] = from[symbols[s]];
      }
    }
    return to;
  });

  define(Array, "from", function from(items, mapFn, thisArg) {
    if (mapFn !== undefined && typeof mapFn !== "function") throw new TypeError(mapFn + " is not a function");
    var C = typeof this === "function" && this !== Array ? this : Array;
    var source = toObject(items);
    var getIterator = source[Symbol.iterator];
    var out,
      i = 0,
      v;
    if (typeof getIterator === "function") {
      out = new C();
      var it = getIterator.call(source),
        step;
      while (!(step = it.next()).done) {
        v = step.value;
        out[i] = mapFn ? mapFn.call(thisArg, v, i) : v;
        i++;
      }
      out.length = i;
      return out;
    }
    var len = toLength(source.length);
    out = new C(len);
    for (; i < len; i++) {
      v = source[i];
      out[i] = mapFn ? mapFn.call(thisArg, v, i) : v;
    }
    out.length = len;
    return out;
  });

  define(Array.prototype, "find", function find(predicate, thisArg) {
    var o = toObject(this),
      len = toLength(o.length);
    for (var i = 0; i < len; i++) if (predicate.call(thisArg, o[i], i, o)) return o[i];
    return undefined;
  });
  define(Array.prototype, "findIndex", function findIndex(predicate, thisArg) {
    var o = toObject(this),
      len = toLength(o.length);
    for (var i = 0; i < len; i++) if (predicate.call(thisArg, o[i], i, o)) return i;
    return -1;
  });
  define(Array.prototype, "fill", function fill(value, start, end) {
    var o = toObject(this),
      len = toLength(o.length);
    var k = toInteger(start),
      last = end === undefined ? len : toInteger(end);
    k = k < 0 ? Math.max(len + k, 0) : Math.min(k, len);
    last = last < 0 ? Math.max(len + last, 0) : Math.min(last, len);
    for (; k < last; k++) o[k] = value;
    return o;
  });

  define(String.prototype, "includes", function includes(search, position) {
    return String(this).indexOf(search, position) !== -1;
  });
  define(String.prototype, "startsWith", function startsWith(search, position) {
    var s = String(this),
      p = Math.min(Math.max(toInteger(position), 0), s.length);
    search = String(search);
    return s.substr(p, search.length) === search;
  });
  define(String.prototype, "endsWith", function endsWith(search, endPosition) {
    var s = String(this);
    var end = endPosition === undefined ? s.length : Math.min(Math.max(toInteger(endPosition), 0), s.length);
    search = String(search);
    return end >= search.length && s.substring(end - search.length, end) === search;
  });
  define(String.prototype, "repeat", function repeat(count) {
    var s = String(this),
      n = toInteger(count),
      out = "";
    if (n < 0 || n === Infinity) throw new RangeError("Invalid count value");
    for (; n > 0; n >>>= 1, s += s) if (n & 1) out += s;
    return out;
  });

  // ES2016 (Chrome 47)
  define(Array.prototype, "includes", function includes(search, fromIndex) {
    var o = toObject(this),
      len = toLength(o.length),
      i = toInteger(fromIndex);
    for (i = i < 0 ? Math.max(len + i, 0) : i; i < len; i++) if (sameValueZero(o[i], search)) return true;
    return false;
  });

  // ES2017 (Chrome 54)
  define(Object, "values", function values(obj) {
    var o = toObject(obj),
      keys = Object.keys(o),
      out = [];
    for (var i = 0; i < keys.length; i++) out.push(o[keys[i]]);
    return out;
  });
  define(Object, "entries", function entries(obj) {
    var o = toObject(obj),
      keys = Object.keys(o),
      out = [];
    for (var i = 0; i < keys.length; i++) out.push([keys[i], o[keys[i]]]);
    return out;
  });

  // ES2018 (Chrome 63)
  define(Promise.prototype, "finally", function (onFinally) {
    if (typeof onFinally !== "function") return this.then(onFinally, onFinally);
    var P = this.constructor || Promise;
    return this.then(
      function (value) {
        return P.resolve(onFinally()).then(function () {
          return value;
        });
      },
      function (reason) {
        return P.resolve(onFinally()).then(function () {
          throw reason;
        });
      }
    );
  });

  // ES2019 (Chrome 70): a stable Array#sort. V8 before 7.0 quicksorts arrays
  // over 10 items (measured unstable on LGWhite); the router ranks its routes
  // with sort. A comparator sort over 10 items breaks ties by original index;
  // everything else keeps the native sort.
  var nativeSort = Array.prototype.sort;
  Object.defineProperty(Array.prototype, "sort", {
    writable: true,
    configurable: true,
    value: function sort(compare) {
      if (typeof compare !== "function" || this.length <= 10) return nativeSort.call(this, compare);
      var o = toObject(this),
        len = toLength(o.length),
        items = [],
        undefs = 0,
        i;
      for (i = 0; i < len; i++) {
        if (!(i in o)) continue;
        if (o[i] === undefined) undefs++;
        else items.push({ v: o[i], i: i });
      }
      var holes = len - items.length - undefs;
      nativeSort.call(items, function (a, b) {
        return compare(a.v, b.v) || a.i - b.i;
      });
      for (i = 0; i < items.length; i++) o[i] = items[i].v;
      for (; i < items.length + undefs; i++) o[i] = undefined;
      for (; holes > 0; holes--, i++) delete o[i];
      return o;
    }
  });

  // ES2019 (Chrome 69)
  define(Array.prototype, "flat", function flat(depth) {
    var d = depth === undefined ? 1 : toInteger(depth);
    var out = [];
    (function add(arr, level) {
      for (var i = 0; i < arr.length; i++) {
        if (!(i in arr)) continue;
        if (level > 0 && Array.isArray(arr[i])) add(arr[i], level - 1);
        else out.push(arr[i]);
      }
    })(toObject(this), d);
    return out;
  });

  // DOM collections are iterable from Chrome 51 (Vite's module preload
  // polyfill runs for-of over querySelectorAll), and NodeList#forEach also
  // from 51. The engine's array iterator and forEach work on array-likes.
  var collections = ["NodeList", "HTMLCollection", "DOMTokenList", "NamedNodeMap", "CSSRuleList", "FileList"];
  for (var c = 0; c < collections.length; c++) {
    var C = G[collections[c]];
    if (!C || !C.prototype) continue;
    define(C.prototype, Symbol.iterator, Array.prototype[Symbol.iterator]);
    if (collections[c] === "NodeList" || collections[c] === "DOMTokenList")
      define(C.prototype, "forEach", Array.prototype.forEach);
  }

  // ES2020 (Chrome 71)
  define(G, "globalThis", G);
  define(G, "queueMicrotask", function queueMicrotask(callback) {
    Promise.resolve()
      .then(callback)
      ["catch"](function (e) {
        setTimeout(function () {
          throw e;
        });
      });
  });

  // URLSearchParams (Chrome 49) and URL#searchParams (Chrome 51), over the
  // engine's URL. Covers what the app (get) and the router (forEach, set,
  // append, delete, toString) call.
  if (typeof G.URLSearchParams !== "function") {
    var decode = function (s) {
      return decodeURIComponent(s.replace(/\+/g, " "));
    };
    var encode = function (s) {
      return encodeURIComponent(s).replace(/%20/g, "+");
    };
    var USP = function URLSearchParams(init) {
      this._list = [];
      if (init == null || init === "") return;
      if (typeof init === "object") {
        for (var key in init) if (hasOwn.call(init, key)) this._list.push([key, String(init[key])]);
        return;
      }
      var s = String(init);
      if (s.charAt(0) === "?") s = s.slice(1);
      var parts = s.split("&");
      for (var i = 0; i < parts.length; i++) {
        if (parts[i] === "") continue;
        var eq = parts[i].indexOf("=");
        this._list.push(
          eq === -1 ? [decode(parts[i]), ""] : [decode(parts[i].slice(0, eq)), decode(parts[i].slice(eq + 1))]
        );
      }
    };
    USP.prototype = {
      constructor: USP,
      get: function (name) {
        for (var i = 0; i < this._list.length; i++) if (this._list[i][0] === String(name)) return this._list[i][1];
        return null;
      },
      getAll: function (name) {
        var out = [];
        for (var i = 0; i < this._list.length; i++) if (this._list[i][0] === String(name)) out.push(this._list[i][1]);
        return out;
      },
      has: function (name) {
        return this.get(name) !== null;
      },
      append: function (name, value) {
        this._list.push([String(name), String(value)]);
      },
      delete: function (name) {
        var out = [];
        for (var i = 0; i < this._list.length; i++) if (this._list[i][0] !== String(name)) out.push(this._list[i]);
        this._list = out;
      },
      set: function (name, value) {
        name = String(name);
        var out = [],
          found = false;
        for (var i = 0; i < this._list.length; i++) {
          if (this._list[i][0] !== name) out.push(this._list[i]);
          else if (!found) {
            found = true;
            out.push([name, String(value)]);
          }
        }
        if (!found) out.push([name, String(value)]);
        this._list = out;
      },
      forEach: function (callback, thisArg) {
        var list = this._list.slice();
        for (var i = 0; i < list.length; i++) callback.call(thisArg, list[i][1], list[i][0], this);
      },
      toString: function () {
        var out = [];
        for (var i = 0; i < this._list.length; i++) out.push(encode(this._list[i][0]) + "=" + encode(this._list[i][1]));
        return out.join("&");
      }
    };
    G.URLSearchParams = USP;
  }
  if (typeof G.URL === "function" && !("searchParams" in G.URL.prototype)) {
    Object.defineProperty(G.URL.prototype, "searchParams", {
      configurable: true,
      get: function () {
        return new G.URLSearchParams(this.search);
      }
    });
  }
})();
