(function() {
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
        return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
            value: t,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[r] = t, e;
    }
    function _toPropertyKey(t) {
        var i = _toPrimitive(t, "string");
        return "symbol" == _typeof(i) ? i : i + "";
    }
    function _toPrimitive(t, r) {
        if ("object" != _typeof(t) || !t) return t;
        var e = t[Symbol.toPrimitive];
        if (void 0 !== e) {
            var i = e.call(t, r || "default");
            if ("object" != _typeof(i)) return i;
            throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return ("string" === r ? String : Number)(t);
    }
    function _typeof(o) {
        "@babel/helpers - typeof";
        return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
            return typeof o;
        } : function(o) {
            return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
        }, _typeof(o);
    }
    System.register([ "./render-legacy-CAqcHxfG.js", "./utils-legacy-4VaQYgIV.js" ], function(_export, _context) {
        "use strict";
        var assertTruthy, ElementNode, isFocused, clamp, defaultTransitionBack, defaultTransitionForward, defaultTransitionDown, defaultTransitionUp, navigableForwardFocus, navigableHandleNavigation, InViewPort, isNotShown, scrollRow, scrollColumn, chainRefs;
        function idxInArray(idx, arr) {
            return idx >= 0 && idx < arr.length;
        }
        function findFirstFocusableChildIdx(el) {
            var from = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
            var delta = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
            for (var i = from; ;i += delta) {
                var _el$children$i;
                if (!idxInArray(i, el.children)) if (el.wrap) i = (i + el.children.length) % el.children.length; else break;
                if (!((_el$children$i = el.children[i]) == null ? void 0 : _el$children$i.skipFocus)) return i;
            }
            return -1;
        }
        function selectChild(el, index) {
            var _el$onSelectedChanged;
            var child = el.children[index];
            if (child == null || child.skipFocus) {
                el.selected = -1;
                return false;
            }
            var lastSelected = el.selected;
            el.selected = index;
            if (!isFocused(child)) child.setFocus();
            (_el$onSelectedChanged = el.onSelectedChanged) == null || _el$onSelectedChanged.call(el, index, el, child, lastSelected);
            return true;
        }
        function handleNavigation(direction) {
            return function() {
                var el = this;
                var directional = direction === "up" ? el.transitionUp : direction === "down" ? el.transitionDown : direction === "left" ? el.transitionLeft : el.transitionRight;
                if (directional) {
                    var current = _typeof(el.transition) === "object" && el.transition !== null ? el.transition : {};
                    if (current !== el._navLastMerged) el._navBaseTransition = current;
                    var merged = _objectSpread(_objectSpread({}, directional), el._navBaseTransition);
                    el.transition = merged;
                    el._navLastMerged = merged;
                }
                return moveSelection(this, direction === "up" || direction === "left" ? -1 : 1);
            };
        }
        function moveSelection(el, delta) {
            var selected = findFirstFocusableChildIdx(el, el.selected + delta, delta);
            if (selected === -1) {
                var _el$children$el$selec;
                if (!idxInArray(el.selected, el.children) || ((_el$children$el$selec = el.children[el.selected]) == null ? void 0 : _el$children$el$selec.skipFocus) || isFocused(el.children[el.selected])) return false;
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
            var dimension = isRow ? "width" : "height";
            var axis = isRow ? "x" : "y";
            return function(selected, component, selectedElement, lastSelected) {
                var _componentRef$_target, _componentRef$offset2, _selectedElement$axis, _selectedElement$dime, _ref, _selectedElement$scal, _selectedElement$styl, _componentRef$dimensi, _componentRef$endOffs2;
                var componentRef = component;
                if (typeof selected !== "number") {
                    componentRef = selected;
                    selected = componentRef.selected || 0;
                }
                if (!componentRef || componentRef.scroll === "none" || selected === lastSelected || !componentRef.children.length) return;
                if (componentRef._initialPosition === void 0) componentRef._initialPosition = componentRef[axis];
                var lng = componentRef.lng;
                var screenSize = isRow ? lng.stage.root.w : lng.stage.root.h;
                var isIncrementing = lastSelected === void 0 || lastSelected - 1 !== selected;
                if (componentRef._screenOffset === void 0) {
                    var _componentRef$offset;
                    if (componentRef.parent.clipping) {
                        var _componentRef$endOffs;
                        var p = componentRef.parent;
                        componentRef.endOffset = (_componentRef$endOffs = componentRef.endOffset) !== null && _componentRef$endOffs !== void 0 ? _componentRef$endOffs : screenSize - ((isRow ? p.absX : p.absY) || 0) - p[dimension];
                    }
                    componentRef._screenOffset = (_componentRef$offset = componentRef.offset) !== null && _componentRef$offset !== void 0 ? _componentRef$offset : (isRow ? lng.absX : lng.absY) - componentRef[axis];
                }
                var screenOffset = componentRef._screenOffset;
                var gap = componentRef.gap || 0;
                var scroll = componentRef.scroll || (lastSelected === void 0 ? componentRef.scrollIndex ? "center" : "always" : "auto");
                var targetPosition = (_componentRef$_target = componentRef._targetPosition) !== null && _componentRef$_target !== void 0 ? _componentRef$_target : componentRef[axis];
                var rootPosition = isIncrementing ? Math.min(targetPosition, componentRef[axis]) : Math.max(targetPosition, componentRef[axis]);
                componentRef.offset = (_componentRef$offset2 = componentRef.offset) !== null && _componentRef$offset2 !== void 0 ? _componentRef$offset2 : rootPosition;
                var offset = componentRef.offset;
                selectedElement = selectedElement || componentRef.children[selected];
                if (!selectedElement) return;
                var selectedPosition = (_selectedElement$axis = selectedElement[axis]) !== null && _selectedElement$axis !== void 0 ? _selectedElement$axis : 0;
                var selectedSize = (_selectedElement$dime = selectedElement[dimension]) !== null && _selectedElement$dime !== void 0 ? _selectedElement$dime : 0;
                var selectedSizeScaled = selectedSize * ((_ref = (_selectedElement$scal = selectedElement.scale) !== null && _selectedElement$scal !== void 0 ? _selectedElement$scal : (_selectedElement$styl = selectedElement.style) == null || (_selectedElement$styl = _selectedElement$styl.focus) == null ? void 0 : _selectedElement$styl.scale) !== null && _ref !== void 0 ? _ref : 1);
                var containerSize = (_componentRef$dimensi = componentRef[dimension]) !== null && _componentRef$dimensi !== void 0 ? _componentRef$dimensi : 0;
                var maxOffset = Math.min(screenSize - containerSize - screenOffset - ((_componentRef$endOffs2 = componentRef.endOffset) !== null && _componentRef$endOffs2 !== void 0 ? _componentRef$endOffs2 : 2 * gap), offset);
                var nextIndex = isIncrementing ? selected + 1 : selected - 1;
                var nextElement = componentRef.children[nextIndex] || null;
                var nextPosition = rootPosition;
                if (selectedElement.centerScroll) nextPosition = -selectedPosition + (screenSize - selectedSizeScaled) / 2; else if (scroll === "always") nextPosition = -selectedPosition + offset; else if (scroll === "bounded") {
                    var totalItems = componentRef.children.length;
                    var upCount = componentRef.upCount || 6;
                    var nonScrollableZoneStart = Math.max(0, totalItems - upCount);
                    var isInNonScrollableZone = selected >= nonScrollableZoneStart;
                    var isFirstOfNonScrollableZone = selected === nonScrollableZoneStart;
                    var isEnteringZone = isFirstOfNonScrollableZone && lastSelected !== void 0 && lastSelected < nonScrollableZoneStart;
                    if (!isInNonScrollableZone) nextPosition = -selectedPosition + offset; else if (isIncrementing) {
                        if (isEnteringZone) {
                            var _firstOfZoneElement$a;
                            var firstOfZoneElement = componentRef.children[nonScrollableZoneStart];
                            var firstOfZonePosition = (_firstOfZoneElement$a = firstOfZoneElement == null ? void 0 : firstOfZoneElement[axis]) !== null && _firstOfZoneElement$a !== void 0 ? _firstOfZoneElement$a : 0;
                            nextPosition = firstOfZoneElement ? -firstOfZonePosition + offset : rootPosition;
                        } else nextPosition = rootPosition;
                    } else if (isFirstOfNonScrollableZone) nextPosition = -selectedPosition + offset; else nextPosition = rootPosition;
                } else if (scroll === "center") {
                    var centerPosition = -selectedPosition + (screenSize - selectedSizeScaled) / 2 - screenOffset;
                    nextPosition = Math.min(Math.max(centerPosition, maxOffset), offset);
                } else if (!nextElement) {
                    if (componentRef.scrollStopLast && isIncrementing) nextPosition = rootPosition - selectedSize - gap; else nextPosition = isIncrementing ? maxOffset : offset;
                } else if (scroll === "auto") {
                    if (componentRef.scrollIndex && componentRef.scrollIndex > 0) {
                        var nearEndIndex = componentRef.children.length - componentRef.scrollIndex;
                        if (isIncrementing && componentRef.selected >= componentRef.scrollIndex) nextPosition = rootPosition - selectedSize - gap; else if (!isIncrementing && componentRef.selected < nearEndIndex) nextPosition = rootPosition + selectedSize + gap;
                    } else if (isIncrementing) nextPosition = rootPosition - selectedSize - gap; else nextPosition = rootPosition + selectedSize + gap;
                } else if (isIncrementing && isNotShown(nextElement)) nextPosition = rootPosition - selectedSize - gap; else if (isNotShown(nextElement)) nextPosition = -selectedPosition + offset;
                var isScrollStopLastCase = componentRef.scrollStopLast && !nextElement && isIncrementing;
                nextPosition = isIncrementing && scroll !== "always" && scroll !== "bounded" && !isScrollStopLastCase ? Math.max(nextPosition, maxOffset) : Math.min(nextPosition, offset);
                if (componentRef[axis] !== nextPosition) {
                    if (componentRef.onScrolled) {
                        var isInitial = nextPosition === componentRef._initialPosition;
                        componentRef.onScrolled(componentRef, nextPosition, isInitial);
                    }
                    componentRef[axis] = nextPosition;
                    componentRef._targetPosition = nextPosition;
                }
            };
        }
        function chainFunctions() {
            var first;
            var onlyFunctions;
            for (var i = 0; i < arguments.length; i++) {
                var fn = i < 0 || arguments.length <= i ? undefined : arguments[i];
                if (typeof fn !== "function") continue;
                if (first === void 0) first = fn; else {
                    if (onlyFunctions === void 0) onlyFunctions = [ first ];
                    onlyFunctions.push(fn);
                }
            }
            if (first === void 0) return void 0;
            if (onlyFunctions === void 0) return first;
            if (onlyFunctions.length === 2) {
                var a = onlyFunctions[0];
                var b = onlyFunctions[1];
                return function() {
                    for (var _len = arguments.length, innerArgs = new Array(_len), _key = 0; _key < _len; _key++) {
                        innerArgs[_key] = arguments[_key];
                    }
                    var result = a.apply(this, innerArgs);
                    if (result === true) return result;
                    return b.apply(this, innerArgs);
                };
            }
            var chained = onlyFunctions;
            return function() {
                var result;
                for (var _len2 = arguments.length, innerArgs = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                    innerArgs[_key2] = arguments[_key2];
                }
                for (var _i = 0; _i < chained.length; _i++) {
                    result = chained[_i].apply(this, innerArgs);
                    if (result === true) return result;
                }
                return result;
            };
        }
        _export({
            a: withScrolling,
            t: chainFunctions,
            u: handleNavigation
        });
        return {
            setters: [ function(_renderLegacy001Js) {
                assertTruthy = _renderLegacy001Js.Dt;
                ElementNode = _renderLegacy001Js._;
                isFocused = _renderLegacy001Js.w;
            }, function(_utilsLegacy002Js) {
                clamp = _utilsLegacy002Js.t;
            } ],
            execute: function execute() {
                _export("o", defaultTransitionBack = {
                    x: {
                        duration: 180,
                        easing: "cubic-bezier(0.4, 0, 0.2, 1)"
                    }
                });
                _export("c", defaultTransitionForward = {
                    x: {
                        duration: 180,
                        easing: "cubic-bezier(0.2, 0, 0, 1)"
                    }
                });
                _export("s", defaultTransitionDown = {
                    y: {
                        duration: 300,
                        easing: "cubic-bezier(0.2, 1, 0.8, 1)"
                    }
                });
                _export("l", defaultTransitionUp = {
                    y: {
                        duration: 300,
                        easing: "cubic-bezier(0.3, 0, 0.2, 1)"
                    }
                });
                _export("d", navigableForwardFocus = function navigableForwardFocus() {
                    var navigable = this;
                    var selected = Math.max(navigable.selected, 0);
                    if (this.children.length === 0) return false;
                    if (selected !== 0) {
                        selected = clamp(selected, 0, Math.max(0, this.children.length - 1));
                        while (!idxInArray(selected, this.children)) selected--;
                    }
                    selected = findFirstFocusableChildIdx(navigable, selected);
                    navigable.selected = selected;
                    return selectChild(navigable, selected);
                });
                _export("f", navigableHandleNavigation = function navigableHandleNavigation(e) {
                    return moveSelection(this, e.key === "ArrowUp" || e.key === "ArrowLeft" ? -1 : 1);
                });
                InViewPort = 8;
                isNotShown = function isNotShown(node) {
                    return node.lng.renderState !== InViewPort;
                };
                _export("i", scrollRow = withScrolling(true));
                _export("r", scrollColumn = withScrolling(false));
                _export("n", chainRefs = chainFunctions);
            }
        };
    });
})();