!function() {
    function _typeof(o) {
        return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
            return typeof o;
        } : function(o) {
            return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
        }, _typeof(o);
    }
    System.register([], function(_export, _context) {
        var __create, __defProp, __getOwnPropDesc, __getOwnPropNames, __getProtoOf, __hasOwnProp, __copyProps;
        return {
            setters: [],
            execute: function() {
                __create = Object.create, __defProp = Object.defineProperty, __getOwnPropDesc = Object.getOwnPropertyDescriptor, 
                __getOwnPropNames = Object.getOwnPropertyNames, __getProtoOf = Object.getPrototypeOf, 
                __hasOwnProp = Object.prototype.hasOwnProperty, _export("t", function(cb, mod) {
                    return function() {
                        return mod || (cb((mod = {
                            exports: {}
                        }).exports, mod), cb = null), mod.exports;
                    };
                }), _export("n", function(all, no_symbols) {
                    var target = {};
                    for (var name in all) __defProp(target, name, {
                        get: all[name],
                        enumerable: !0
                    });
                    return no_symbols || __defProp(target, Symbol.toStringTag, {
                        value: "Module"
                    }), target;
                }), __copyProps = function(to, from, except, desc) {
                    if (from && "object" === _typeof(from) || "function" == typeof from) for (var key, keys = __getOwnPropNames(from), i = 0, n = keys.length; i < n; i++) key = keys[i], 
                    __hasOwnProp.call(to, key) || key === except || __defProp(to, key, {
                        get: function(k) {
                            return from[k];
                        }.bind(null, key),
                        enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
                    });
                    return to;
                }, _export("r", function(mod, isNodeMode, target) {
                    return target = null != mod ? __create(__getProtoOf(mod)) : {}, __copyProps(!isNodeMode && mod && mod.__esModule ? target : __defProp(target, "default", {
                        value: mod,
                        enumerable: !0
                    }), mod);
                });
            }
        };
    });
}();