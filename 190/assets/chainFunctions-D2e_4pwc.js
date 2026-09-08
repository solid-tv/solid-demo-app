import { Bt as assertTruthy, _ as ElementNode, w as isFocused } from "./render-pt2tmeLm.js";

import { t as clamp } from "./utils-CpUHhvSN.js";

var defaultTransitionBack = {
    x: {
        duration: 180,
        easing: "cubic-bezier(0.4, 0, 0.2, 1)"
    }
}, defaultTransitionForward = {
    x: {
        duration: 180,
        easing: "cubic-bezier(0.2, 0, 0, 1)"
    }
}, defaultTransitionDown = {
    y: {
        duration: 300,
        easing: "cubic-bezier(0.2, 1, 0.8, 1)"
    }
}, defaultTransitionUp = {
    y: {
        duration: 300,
        easing: "cubic-bezier(0.3, 0, 0.2, 1)"
    }
};

function idxInArray(idx, arr) {
    return idx >= 0 && idx < arr.length;
}

function findFirstFocusableChildIdx(el, from = 0, delta = 1) {
    for (let i = from; ;i += delta) {
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
    var _el$onSelectedChanged;
    const child = el.children[index];
    if (null == child || child.skipFocus) return el.selected = -1, !1;
    const lastSelected = el.selected;
    return el.selected = index, isFocused(child) || child.setFocus(), null == (_el$onSelectedChanged = el.onSelectedChanged) || _el$onSelectedChanged.call(el, index, el, child, lastSelected), 
    !0;
}

var navigableForwardFocus = function() {
    let selected = Math.max(this.selected, 0);
    if (0 === this.children.length) return !1;
    if (0 !== selected) for (selected = clamp(selected, 0, Math.max(0, this.children.length - 1)); !idxInArray(selected, this.children); ) selected--;
    return selected = findFirstFocusableChildIdx(this, selected), this.selected = selected, 
    selectChild(this, selected);
};

function handleNavigation(direction) {
    return function() {
        const el = this, directional = "up" === direction ? el.transitionUp : "down" === direction ? el.transitionDown : "left" === direction ? el.transitionLeft : el.transitionRight;
        if (directional) {
            const current = "object" == typeof el.transition && null !== el.transition ? el.transition : {};
            current !== el._navLastMerged && (el._navBaseTransition = current);
            const merged = {
                ...directional,
                ...el._navBaseTransition
            };
            el.transition = merged, el._navLastMerged = merged;
        }
        return moveSelection(this, "up" === direction || "left" === direction ? -1 : 1);
    };
}

var navigableHandleNavigation = function(e) {
    return moveSelection(this, "ArrowUp" === e.key || "ArrowLeft" === e.key ? -1 : 1);
};

function moveSelection(el, delta) {
    let selected = findFirstFocusableChildIdx(el, el.selected + delta, delta);
    if (-1 === selected) {
        var _el$children$el$selec;
        if (!idxInArray(el.selected, el.children) || (null == (_el$children$el$selec = el.children[el.selected]) ? void 0 : _el$children$el$selec.skipFocus) || isFocused(el.children[el.selected])) return !1;
        selected = el.selected;
    }
    const active = el.children[selected];
    if (el.plinko) {
        const lastSelectedChild = el.children[el.selected];
        assertTruthy(lastSelectedChild instanceof ElementNode);
        const num = lastSelectedChild.selected || 0;
        active.selected = num < active.children.length ? num : active.children.length - 1;
    }
    return selectChild(el, selected);
}

var isNotShown = node => 8 !== node.lng.renderState;

function withScrolling(isRow) {
    const dimension = isRow ? "width" : "height", axis = isRow ? "x" : "y";
    return (selected, component, selectedElement, lastSelected) => {
        var _componentRef$_target, _componentRef$offset2, _selectedElement$axis, _selectedElement$dime, _ref, _selectedElement$scal, _selectedElement$styl, _componentRef$dimensi, _componentRef$endOffs2;
        let componentRef = component;
        if ("number" != typeof selected && (componentRef = selected, selected = componentRef.selected || 0), 
        !componentRef || "none" === componentRef.scroll || selected === lastSelected || !componentRef.children.length) return;
        void 0 === componentRef._initialPosition && (componentRef._initialPosition = componentRef[axis]);
        const lng = componentRef.lng, screenSize = isRow ? lng.stage.root.w : lng.stage.root.h, isIncrementing = void 0 === lastSelected || lastSelected - 1 !== selected;
        if (void 0 === componentRef._screenOffset) {
            var _componentRef$offset;
            if (componentRef.parent.clipping) {
                var _componentRef$endOffs;
                const p = componentRef.parent;
                componentRef.endOffset = null !== (_componentRef$endOffs = componentRef.endOffset) && void 0 !== _componentRef$endOffs ? _componentRef$endOffs : screenSize - ((isRow ? p.absX : p.absY) || 0) - p[dimension];
            }
            componentRef._screenOffset = null !== (_componentRef$offset = componentRef.offset) && void 0 !== _componentRef$offset ? _componentRef$offset : (isRow ? lng.absX : lng.absY) - componentRef[axis];
        }
        const screenOffset = componentRef._screenOffset, gap = componentRef.gap || 0, scroll = componentRef.scroll || (void 0 === lastSelected ? componentRef.scrollIndex ? "center" : "always" : "auto"), targetPosition = null !== (_componentRef$_target = componentRef._targetPosition) && void 0 !== _componentRef$_target ? _componentRef$_target : componentRef[axis], rootPosition = isIncrementing ? Math.min(targetPosition, componentRef[axis]) : Math.max(targetPosition, componentRef[axis]);
        componentRef.offset = null !== (_componentRef$offset2 = componentRef.offset) && void 0 !== _componentRef$offset2 ? _componentRef$offset2 : rootPosition;
        const offset = componentRef.offset;
        if (!(selectedElement = selectedElement || componentRef.children[selected])) return;
        const selectedPosition = null !== (_selectedElement$axis = selectedElement[axis]) && void 0 !== _selectedElement$axis ? _selectedElement$axis : 0, selectedSize = null !== (_selectedElement$dime = selectedElement[dimension]) && void 0 !== _selectedElement$dime ? _selectedElement$dime : 0, selectedSizeScaled = selectedSize * (null !== (_ref = null !== (_selectedElement$scal = selectedElement.scale) && void 0 !== _selectedElement$scal ? _selectedElement$scal : null == (_selectedElement$styl = selectedElement.style) || null == (_selectedElement$styl = _selectedElement$styl.focus) ? void 0 : _selectedElement$styl.scale) && void 0 !== _ref ? _ref : 1), containerSize = null !== (_componentRef$dimensi = componentRef[dimension]) && void 0 !== _componentRef$dimensi ? _componentRef$dimensi : 0, maxOffset = Math.min(screenSize - containerSize - screenOffset - (null !== (_componentRef$endOffs2 = componentRef.endOffset) && void 0 !== _componentRef$endOffs2 ? _componentRef$endOffs2 : 2 * gap), offset), nextIndex = isIncrementing ? selected + 1 : selected - 1, nextElement = componentRef.children[nextIndex] || null;
        let nextPosition = rootPosition;
        if (selectedElement.centerScroll) nextPosition = (screenSize - selectedSizeScaled) / 2 - selectedPosition; else if ("always" === scroll) nextPosition = -selectedPosition + offset; else if ("bounded" === scroll) {
            const totalItems = componentRef.children.length, upCount = componentRef.upCount || 6, nonScrollableZoneStart = Math.max(0, totalItems - upCount), isFirstOfNonScrollableZone = selected === nonScrollableZoneStart;
            if (selected >= nonScrollableZoneStart) if (isIncrementing) if (isFirstOfNonScrollableZone && void 0 !== lastSelected && lastSelected < nonScrollableZoneStart) {
                var _firstOfZoneElement$a;
                const firstOfZoneElement = componentRef.children[nonScrollableZoneStart], firstOfZonePosition = null !== (_firstOfZoneElement$a = null == firstOfZoneElement ? void 0 : firstOfZoneElement[axis]) && void 0 !== _firstOfZoneElement$a ? _firstOfZoneElement$a : 0;
                nextPosition = firstOfZoneElement ? -firstOfZonePosition + offset : rootPosition;
            } else nextPosition = rootPosition; else nextPosition = isFirstOfNonScrollableZone ? -selectedPosition + offset : rootPosition; else nextPosition = -selectedPosition + offset;
        } else if ("center" === scroll) {
            const centerPosition = (screenSize - selectedSizeScaled) / 2 - selectedPosition - screenOffset;
            nextPosition = Math.min(Math.max(centerPosition, maxOffset), offset);
        } else if (nextElement) if ("auto" === scroll) if (componentRef.scrollIndex && componentRef.scrollIndex > 0) {
            const nearEndIndex = componentRef.children.length - componentRef.scrollIndex;
            isIncrementing && componentRef.selected >= componentRef.scrollIndex ? nextPosition = rootPosition - selectedSize - gap : !isIncrementing && componentRef.selected < nearEndIndex && (nextPosition = rootPosition + selectedSize + gap);
        } else nextPosition = isIncrementing ? rootPosition - selectedSize - gap : rootPosition + selectedSize + gap; else isIncrementing && isNotShown(nextElement) ? nextPosition = rootPosition - selectedSize - gap : isNotShown(nextElement) && (nextPosition = -selectedPosition + offset); else nextPosition = componentRef.scrollStopLast && isIncrementing ? rootPosition - selectedSize - gap : isIncrementing ? maxOffset : offset;
        const isScrollStopLastCase = componentRef.scrollStopLast && !nextElement && isIncrementing;
        if (nextPosition = isIncrementing && "always" !== scroll && "bounded" !== scroll && !isScrollStopLastCase ? Math.max(nextPosition, maxOffset) : Math.min(nextPosition, offset), 
        componentRef[axis] !== nextPosition) {
            if (componentRef.onScrolled) {
                const isInitial = nextPosition === componentRef._initialPosition;
                componentRef.onScrolled(componentRef, nextPosition, isInitial);
            }
            componentRef[axis] = nextPosition, componentRef._targetPosition = nextPosition;
        }
    };
}

var scrollRow = withScrolling(!0), scrollColumn = withScrolling(!1);

function chainFunctions(...fns) {
    let first, onlyFunctions;
    for (let i = 0; i < fns.length; i++) {
        const fn = fns[i];
        "function" == typeof fn && (void 0 === first ? first = fn : (void 0 === onlyFunctions && (onlyFunctions = [ first ]), 
        onlyFunctions.push(fn)));
    }
    if (void 0 === first) return;
    if (void 0 === onlyFunctions) return first;
    if (2 === onlyFunctions.length) {
        const a = onlyFunctions[0], b = onlyFunctions[1];
        return function(...innerArgs) {
            const result = a.apply(this, innerArgs);
            return !0 === result ? result : b.apply(this, innerArgs);
        };
    }
    const chained = onlyFunctions;
    return function(...innerArgs) {
        let result;
        for (let i = 0; i < chained.length; i++) if (result = chained[i].apply(this, innerArgs), 
        !0 === result) return result;
        return result;
    };
}

var chainRefs = chainFunctions;

export { withScrolling as a, defaultTransitionForward as c, navigableForwardFocus as d, navigableHandleNavigation as f, scrollRow as i, defaultTransitionUp as l, chainRefs as n, defaultTransitionBack as o, scrollColumn as r, defaultTransitionDown as s, chainFunctions as t, handleNavigation as u };