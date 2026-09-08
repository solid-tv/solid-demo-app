!function() {
    function ownKeys(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var o = Object.getOwnPropertySymbols(e);
            r && (o = o.filter(function(r) {
                return Object.getOwnPropertyDescriptor(e, r).enumerable;
            })), t.push.apply(t, o);
        }
        return t;
    }
    function _objectSpread(e) {
        for (var r = 1; r < arguments.length; r++) {
            var t = null != arguments[r] ? arguments[r] : {};
            r % 2 ? ownKeys(Object(t), !0).forEach(function(r) {
                _defineProperty(e, r, t[r]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r) {
                Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
            });
        }
        return e;
    }
    function _defineProperty(e, r, t) {
        return (r = function(t) {
            var i = function(t, r) {
                if ("object" != _typeof(t) || !t) return t;
                var e = t[Symbol.toPrimitive];
                if (void 0 !== e) {
                    var i = e.call(t, r || "default");
                    if ("object" != _typeof(i)) return i;
                    throw new TypeError("@@toPrimitive must return a primitive value.");
                }
                return ("string" === r ? String : Number)(t);
            }(t, "string");
            return "symbol" == _typeof(i) ? i : i + "";
        }(r)) in e ? Object.defineProperty(e, r, {
            value: t,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[r] = t, e;
    }
    function _typeof(o) {
        return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
            return typeof o;
        } : function(o) {
            return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
        }, _typeof(o);
    }
    System.register([ "./render-legacy-1jX59Y6X.js", "./utils-legacy-Dtp5ElZ_.js" ], function(_export, _context) {
        var ElementNode, isFocused, assertTruthy, clamp, isNotShown;
        function idxInArray(idx, arr) {
            return idx >= 0 && idx < arr.length;
        }
        function findFirstFocusableChildIdx(el) {
            for (var delta = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1, i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0; ;i += delta) {
                var _el$children$i;
                if (!idxInArray(i, el.children)) {
                    if (!el.wrap) break;
                    i = (i + el.children.length) % el.children.length;
                }
                if (!(null == (_el$children$i = el.children[i]) ? void 0 : _el$children$i.skipFocus)) return i;
            }
            return -1;
        }
        function selectChild(el, index) {
            var _el$onSelectedChanged, child = el.children[index];
            if (null == child || child.skipFocus) return el.selected = -1, !1;
            var lastSelected = el.selected;
            return el.selected = index, isFocused(child) || child.setFocus(), null == (_el$onSelectedChanged = el.onSelectedChanged) || _el$onSelectedChanged.call(el, index, el, child, lastSelected), 
            !0;
        }
        function moveSelection(el, delta) {
            var selected = findFirstFocusableChildIdx(el, el.selected + delta, delta);
            if (-1 === selected) {
                var _el$children$el$selec;
                if (!idxInArray(el.selected, el.children) || (null == (_el$children$el$selec = el.children[el.selected]) ? void 0 : _el$children$el$selec.skipFocus) || isFocused(el.children[el.selected])) return !1;
                selected = el.selected;
            }
            var active = el.children[selected];
            if (el.plinko) {
                var lastSelectedChild = el.children[el.selected];
                assertTruthy(lastSelectedChild instanceof ElementNode);
                var num = lastSelectedChild.selected || 0;
                active.selected = num < active.children.length ? num : active.children.length - 1;
            }
            return selectChild(el, selected);
        }
        function withScrolling(isRow) {
            var dimension = isRow ? "width" : "height", axis = isRow ? "x" : "y";
            return function(selected, component, selectedElement, lastSelected) {
                var _componentRef$_target, _componentRef$offset2, _selectedElement$axis, _selectedElement$dime, _ref, _selectedElement$scal, _selectedElement$styl, _componentRef$dimensi, _componentRef$endOffs2, componentRef = component;
                if ("number" != typeof selected && (selected = (componentRef = selected).selected || 0), 
                componentRef && "none" !== componentRef.scroll && selected !== lastSelected && componentRef.children.length) {
                    void 0 === componentRef._initialPosition && (componentRef._initialPosition = componentRef[axis]);
                    var lng = componentRef.lng, screenSize = isRow ? lng.stage.root.w : lng.stage.root.h, isIncrementing = void 0 === lastSelected || lastSelected - 1 !== selected;
                    if (void 0 === componentRef._screenOffset) {
                        var _componentRef$offset;
                        if (componentRef.parent.clipping) {
                            var _componentRef$endOffs, p = componentRef.parent;
                            componentRef.endOffset = null !== (_componentRef$endOffs = componentRef.endOffset) && void 0 !== _componentRef$endOffs ? _componentRef$endOffs : screenSize - ((isRow ? p.absX : p.absY) || 0) - p[dimension];
                        }
                        componentRef._screenOffset = null !== (_componentRef$offset = componentRef.offset) && void 0 !== _componentRef$offset ? _componentRef$offset : (isRow ? lng.absX : lng.absY) - componentRef[axis];
                    }
                    var screenOffset = componentRef._screenOffset, gap = componentRef.gap || 0, scroll = componentRef.scroll || (void 0 === lastSelected ? componentRef.scrollIndex ? "center" : "always" : "auto"), targetPosition = null !== (_componentRef$_target = componentRef._targetPosition) && void 0 !== _componentRef$_target ? _componentRef$_target : componentRef[axis], rootPosition = isIncrementing ? Math.min(targetPosition, componentRef[axis]) : Math.max(targetPosition, componentRef[axis]);
                    componentRef.offset = null !== (_componentRef$offset2 = componentRef.offset) && void 0 !== _componentRef$offset2 ? _componentRef$offset2 : rootPosition;
                    var offset = componentRef.offset;
                    if (selectedElement = selectedElement || componentRef.children[selected]) {
                        var selectedPosition = null !== (_selectedElement$axis = selectedElement[axis]) && void 0 !== _selectedElement$axis ? _selectedElement$axis : 0, selectedSize = null !== (_selectedElement$dime = selectedElement[dimension]) && void 0 !== _selectedElement$dime ? _selectedElement$dime : 0, selectedSizeScaled = selectedSize * (null !== (_ref = null !== (_selectedElement$scal = selectedElement.scale) && void 0 !== _selectedElement$scal ? _selectedElement$scal : null == (_selectedElement$styl = selectedElement.style) || null == (_selectedElement$styl = _selectedElement$styl.focus) ? void 0 : _selectedElement$styl.scale) && void 0 !== _ref ? _ref : 1), containerSize = null !== (_componentRef$dimensi = componentRef[dimension]) && void 0 !== _componentRef$dimensi ? _componentRef$dimensi : 0, maxOffset = Math.min(screenSize - containerSize - screenOffset - (null !== (_componentRef$endOffs2 = componentRef.endOffset) && void 0 !== _componentRef$endOffs2 ? _componentRef$endOffs2 : 2 * gap), offset), nextIndex = isIncrementing ? selected + 1 : selected - 1, nextElement = componentRef.children[nextIndex] || null, nextPosition = rootPosition;
                        if (selectedElement.centerScroll) nextPosition = (screenSize - selectedSizeScaled) / 2 - selectedPosition; else if ("always" === scroll) nextPosition = -selectedPosition + offset; else if ("bounded" === scroll) {
                            var totalItems = componentRef.children.length, upCount = componentRef.upCount || 6, nonScrollableZoneStart = Math.max(0, totalItems - upCount), isFirstOfNonScrollableZone = selected === nonScrollableZoneStart;
                            if (selected >= nonScrollableZoneStart) if (isIncrementing) if (isFirstOfNonScrollableZone && void 0 !== lastSelected && lastSelected < nonScrollableZoneStart) {
                                var _firstOfZoneElement$a, firstOfZoneElement = componentRef.children[nonScrollableZoneStart], firstOfZonePosition = null !== (_firstOfZoneElement$a = null == firstOfZoneElement ? void 0 : firstOfZoneElement[axis]) && void 0 !== _firstOfZoneElement$a ? _firstOfZoneElement$a : 0;
                                nextPosition = firstOfZoneElement ? -firstOfZonePosition + offset : rootPosition;
                            } else nextPosition = rootPosition; else nextPosition = isFirstOfNonScrollableZone ? -selectedPosition + offset : rootPosition; else nextPosition = -selectedPosition + offset;
                        } else if ("center" === scroll) {
                            var centerPosition = (screenSize - selectedSizeScaled) / 2 - selectedPosition - screenOffset;
                            nextPosition = Math.min(Math.max(centerPosition, maxOffset), offset);
                        } else if (nextElement) if ("auto" === scroll) if (componentRef.scrollIndex && componentRef.scrollIndex > 0) {
                            var nearEndIndex = componentRef.children.length - componentRef.scrollIndex;
                            isIncrementing && componentRef.selected >= componentRef.scrollIndex ? nextPosition = rootPosition - selectedSize - gap : !isIncrementing && componentRef.selected < nearEndIndex && (nextPosition = rootPosition + selectedSize + gap);
                        } else nextPosition = isIncrementing ? rootPosition - selectedSize - gap : rootPosition + selectedSize + gap; else isIncrementing && isNotShown(nextElement) ? nextPosition = rootPosition - selectedSize - gap : isNotShown(nextElement) && (nextPosition = -selectedPosition + offset); else nextPosition = componentRef.scrollStopLast && isIncrementing ? rootPosition - selectedSize - gap : isIncrementing ? maxOffset : offset;
                        var isScrollStopLastCase = componentRef.scrollStopLast && !nextElement && isIncrementing;
                        if (nextPosition = isIncrementing && "always" !== scroll && "bounded" !== scroll && !isScrollStopLastCase ? Math.max(nextPosition, maxOffset) : Math.min(nextPosition, offset), 
                        componentRef[axis] !== nextPosition) {
                            if (componentRef.onScrolled) {
                                var isInitial = nextPosition === componentRef._initialPosition;
                                componentRef.onScrolled(componentRef, nextPosition, isInitial);
                            }
                            componentRef[axis] = nextPosition, componentRef._targetPosition = nextPosition;
                        }
                    }
                }
            };
        }
        function chainFunctions() {
            for (var first, onlyFunctions, i = 0; i < arguments.length; i++) {
                var fn = i < 0 || arguments.length <= i ? void 0 : arguments[i];
                "function" == typeof fn && (void 0 === first ? first = fn : (void 0 === onlyFunctions && (onlyFunctions = [ first ]), 
                onlyFunctions.push(fn)));
            }
            if (void 0 !== first) {
                if (void 0 === onlyFunctions) return first;
                if (2 === onlyFunctions.length) {
                    var a = onlyFunctions[0], b = onlyFunctions[1];
                    return function() {
                        for (var _len = arguments.length, innerArgs = new Array(_len), _key = 0; _key < _len; _key++) innerArgs[_key] = arguments[_key];
                        var result = a.apply(this, innerArgs);
                        return !0 === result ? result : b.apply(this, innerArgs);
                    };
                }
                var chained = onlyFunctions;
                return function() {
                    for (var result, _len2 = arguments.length, innerArgs = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) innerArgs[_key2] = arguments[_key2];
                    for (var _i = 0; _i < chained.length; _i++) if (!0 === (result = chained[_i].apply(this, innerArgs))) return result;
                    return result;
                };
            }
        }
        return _export({
            a: withScrolling,
            t: chainFunctions,
            u: function(direction) {
                return function() {
                    var el = this, directional = "up" === direction ? el.transitionUp : "down" === direction ? el.transitionDown : "left" === direction ? el.transitionLeft : el.transitionRight;
                    if (directional) {
                        var current = "object" === _typeof(el.transition) && null !== el.transition ? el.transition : {};
                        current !== el._navLastMerged && (el._navBaseTransition = current);
                        var merged = _objectSpread(_objectSpread({}, directional), el._navBaseTransition);
                        el.transition = merged, el._navLastMerged = merged;
                    }
                    return moveSelection(this, "up" === direction || "left" === direction ? -1 : 1);
                };
            }
        }), {
            setters: [ function(_renderLegacy002Js) {
                ElementNode = _renderLegacy002Js._, isFocused = _renderLegacy002Js.w, assertTruthy = _renderLegacy002Js.zt;
            }, function(_utilsLegacy004Js) {
                clamp = _utilsLegacy004Js.t;
            } ],
            execute: function() {
                _export("o", {
                    x: {
                        duration: 180,
                        easing: "cubic-bezier(0.4, 0, 0.2, 1)"
                    }
                }), _export("c", {
                    x: {
                        duration: 180,
                        easing: "cubic-bezier(0.2, 0, 0, 1)"
                    }
                }), _export("s", {
                    y: {
                        duration: 300,
                        easing: "cubic-bezier(0.2, 1, 0.8, 1)"
                    }
                }), _export("l", {
                    y: {
                        duration: 300,
                        easing: "cubic-bezier(0.3, 0, 0.2, 1)"
                    }
                }), _export("d", function() {
                    var selected = Math.max(this.selected, 0);
                    if (0 === this.children.length) return !1;
                    if (0 !== selected) for (selected = clamp(selected, 0, Math.max(0, this.children.length - 1)); !idxInArray(selected, this.children); ) selected--;
                    return selected = findFirstFocusableChildIdx(this, selected), this.selected = selected, 
                    selectChild(this, selected);
                }), _export("f", function(e) {
                    return moveSelection(this, "ArrowUp" === e.key || "ArrowLeft" === e.key ? -1 : 1);
                }), isNotShown = function(node) {
                    return 8 !== node.lng.renderState;
                }, _export("i", withScrolling(!0)), _export("r", withScrolling(!1)), _export("n", chainFunctions);
            }
        };
    });
}();