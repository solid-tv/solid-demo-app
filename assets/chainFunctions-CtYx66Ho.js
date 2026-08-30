import { Ot as assertTruthy, _ as ElementNode, w as isFocused } from "./render-D3oWDwIw.js";

import { t as clamp } from "./utils-CfZOUtet.js";

var defaultTransitionBack = {
    x: {
        duration: 180,
        easing: "cubic-bezier(0.4, 0, 0.2, 1)"
    }
};

var defaultTransitionForward = {
    x: {
        duration: 180,
        easing: "cubic-bezier(0.2, 0, 0, 1)"
    }
};

var defaultTransitionDown = {
    y: {
        duration: 300,
        easing: "cubic-bezier(0.2, 1, 0.8, 1)"
    }
};

var defaultTransitionUp = {
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
        if (!idxInArray(i, el.children)) if (el.wrap) i = (i + el.children.length) % el.children.length; else break;
        if (!((_el$children$i = el.children[i]) == null ? void 0 : _el$children$i.skipFocus)) return i;
    }
    return -1;
}

function selectChild(el, index) {
    var _el$onSelectedChanged;
    const child = el.children[index];
    if (child == null || child.skipFocus) {
        el.selected = -1;
        return false;
    }
    const lastSelected = el.selected;
    el.selected = index;
    if (!isFocused(child)) child.setFocus();
    (_el$onSelectedChanged = el.onSelectedChanged) == null || _el$onSelectedChanged.call(el, index, el, child, lastSelected);
    return true;
}

var navigableForwardFocus = function() {
    const navigable = this;
    let selected = Math.max(navigable.selected, 0);
    if (this.children.length === 0) return false;
    if (selected !== 0) {
        selected = clamp(selected, 0, Math.max(0, this.children.length - 1));
        while (!idxInArray(selected, this.children)) selected--;
    }
    selected = findFirstFocusableChildIdx(navigable, selected);
    navigable.selected = selected;
    return selectChild(navigable, selected);
};

function handleNavigation(direction) {
    return function() {
        const el = this;
        const directional = direction === "up" ? el.transitionUp : direction === "down" ? el.transitionDown : direction === "left" ? el.transitionLeft : el.transitionRight;
        if (directional) {
            const current = typeof el.transition === "object" && el.transition !== null ? el.transition : {};
            if (current !== el._navLastMerged) el._navBaseTransition = current;
            const merged = {
                ...directional,
                ...el._navBaseTransition
            };
            el.transition = merged;
            el._navLastMerged = merged;
        }
        return moveSelection(this, direction === "up" || direction === "left" ? -1 : 1);
    };
}

var navigableHandleNavigation = function(e) {
    return moveSelection(this, e.key === "ArrowUp" || e.key === "ArrowLeft" ? -1 : 1);
};

function moveSelection(el, delta) {
    let selected = findFirstFocusableChildIdx(el, el.selected + delta, delta);
    if (selected === -1) {
        var _el$children$el$selec;
        if (!idxInArray(el.selected, el.children) || ((_el$children$el$selec = el.children[el.selected]) == null ? void 0 : _el$children$el$selec.skipFocus) || isFocused(el.children[el.selected])) return false;
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

var InViewPort = 8;

var isNotShown = node => node.lng.renderState !== InViewPort;

function withScrolling(isRow) {
    const dimension = isRow ? "width" : "height";
    const axis = isRow ? "x" : "y";
    return (selected, component, selectedElement, lastSelected) => {
        var _componentRef$_target, _componentRef$offset2, _selectedElement$axis, _selectedElement$dime, _ref, _selectedElement$scal, _selectedElement$styl, _componentRef$dimensi, _componentRef$endOffs2;
        let componentRef = component;
        if (typeof selected !== "number") {
            componentRef = selected;
            selected = componentRef.selected || 0;
        }
        if (!componentRef || componentRef.scroll === "none" || selected === lastSelected || !componentRef.children.length) return;
        if (componentRef._initialPosition === void 0) componentRef._initialPosition = componentRef[axis];
        const lng = componentRef.lng;
        const screenSize = isRow ? lng.stage.root.w : lng.stage.root.h;
        const isIncrementing = lastSelected === void 0 || lastSelected - 1 !== selected;
        if (componentRef._screenOffset === void 0) {
            var _componentRef$offset;
            if (componentRef.parent.clipping) {
                var _componentRef$endOffs;
                const p = componentRef.parent;
                componentRef.endOffset = (_componentRef$endOffs = componentRef.endOffset) !== null && _componentRef$endOffs !== void 0 ? _componentRef$endOffs : screenSize - ((isRow ? p.absX : p.absY) || 0) - p[dimension];
            }
            componentRef._screenOffset = (_componentRef$offset = componentRef.offset) !== null && _componentRef$offset !== void 0 ? _componentRef$offset : (isRow ? lng.absX : lng.absY) - componentRef[axis];
        }
        const screenOffset = componentRef._screenOffset;
        const gap = componentRef.gap || 0;
        const scroll = componentRef.scroll || (lastSelected === void 0 ? componentRef.scrollIndex ? "center" : "always" : "auto");
        const targetPosition = (_componentRef$_target = componentRef._targetPosition) !== null && _componentRef$_target !== void 0 ? _componentRef$_target : componentRef[axis];
        const rootPosition = isIncrementing ? Math.min(targetPosition, componentRef[axis]) : Math.max(targetPosition, componentRef[axis]);
        componentRef.offset = (_componentRef$offset2 = componentRef.offset) !== null && _componentRef$offset2 !== void 0 ? _componentRef$offset2 : rootPosition;
        const offset = componentRef.offset;
        selectedElement = selectedElement || componentRef.children[selected];
        if (!selectedElement) return;
        const selectedPosition = (_selectedElement$axis = selectedElement[axis]) !== null && _selectedElement$axis !== void 0 ? _selectedElement$axis : 0;
        const selectedSize = (_selectedElement$dime = selectedElement[dimension]) !== null && _selectedElement$dime !== void 0 ? _selectedElement$dime : 0;
        const selectedSizeScaled = selectedSize * ((_ref = (_selectedElement$scal = selectedElement.scale) !== null && _selectedElement$scal !== void 0 ? _selectedElement$scal : (_selectedElement$styl = selectedElement.style) == null || (_selectedElement$styl = _selectedElement$styl.focus) == null ? void 0 : _selectedElement$styl.scale) !== null && _ref !== void 0 ? _ref : 1);
        const containerSize = (_componentRef$dimensi = componentRef[dimension]) !== null && _componentRef$dimensi !== void 0 ? _componentRef$dimensi : 0;
        const maxOffset = Math.min(screenSize - containerSize - screenOffset - ((_componentRef$endOffs2 = componentRef.endOffset) !== null && _componentRef$endOffs2 !== void 0 ? _componentRef$endOffs2 : 2 * gap), offset);
        const nextIndex = isIncrementing ? selected + 1 : selected - 1;
        const nextElement = componentRef.children[nextIndex] || null;
        let nextPosition = rootPosition;
        if (selectedElement.centerScroll) nextPosition = -selectedPosition + (screenSize - selectedSizeScaled) / 2; else if (scroll === "always") nextPosition = -selectedPosition + offset; else if (scroll === "bounded") {
            const totalItems = componentRef.children.length;
            const upCount = componentRef.upCount || 6;
            const nonScrollableZoneStart = Math.max(0, totalItems - upCount);
            const isInNonScrollableZone = selected >= nonScrollableZoneStart;
            const isFirstOfNonScrollableZone = selected === nonScrollableZoneStart;
            const isEnteringZone = isFirstOfNonScrollableZone && lastSelected !== void 0 && lastSelected < nonScrollableZoneStart;
            if (!isInNonScrollableZone) nextPosition = -selectedPosition + offset; else if (isIncrementing) if (isEnteringZone) {
                var _firstOfZoneElement$a;
                const firstOfZoneElement = componentRef.children[nonScrollableZoneStart];
                const firstOfZonePosition = (_firstOfZoneElement$a = firstOfZoneElement == null ? void 0 : firstOfZoneElement[axis]) !== null && _firstOfZoneElement$a !== void 0 ? _firstOfZoneElement$a : 0;
                nextPosition = firstOfZoneElement ? -firstOfZonePosition + offset : rootPosition;
            } else nextPosition = rootPosition; else if (isFirstOfNonScrollableZone) nextPosition = -selectedPosition + offset; else nextPosition = rootPosition;
        } else if (scroll === "center") {
            const centerPosition = -selectedPosition + (screenSize - selectedSizeScaled) / 2 - screenOffset;
            nextPosition = Math.min(Math.max(centerPosition, maxOffset), offset);
        } else if (!nextElement) if (componentRef.scrollStopLast && isIncrementing) nextPosition = rootPosition - selectedSize - gap; else nextPosition = isIncrementing ? maxOffset : offset; else if (scroll === "auto") if (componentRef.scrollIndex && componentRef.scrollIndex > 0) {
            const nearEndIndex = componentRef.children.length - componentRef.scrollIndex;
            if (isIncrementing && componentRef.selected >= componentRef.scrollIndex) nextPosition = rootPosition - selectedSize - gap; else if (!isIncrementing && componentRef.selected < nearEndIndex) nextPosition = rootPosition + selectedSize + gap;
        } else if (isIncrementing) nextPosition = rootPosition - selectedSize - gap; else nextPosition = rootPosition + selectedSize + gap; else if (isIncrementing && isNotShown(nextElement)) nextPosition = rootPosition - selectedSize - gap; else if (isNotShown(nextElement)) nextPosition = -selectedPosition + offset;
        const isScrollStopLastCase = componentRef.scrollStopLast && !nextElement && isIncrementing;
        nextPosition = isIncrementing && scroll !== "always" && scroll !== "bounded" && !isScrollStopLastCase ? Math.max(nextPosition, maxOffset) : Math.min(nextPosition, offset);
        if (componentRef[axis] !== nextPosition) {
            if (componentRef.onScrolled) {
                const isInitial = nextPosition === componentRef._initialPosition;
                componentRef.onScrolled(componentRef, nextPosition, isInitial);
            }
            componentRef[axis] = nextPosition;
            componentRef._targetPosition = nextPosition;
        }
    };
}

var scrollRow = withScrolling(true);

var scrollColumn = withScrolling(false);

function chainFunctions(...fns) {
    let first;
    let onlyFunctions;
    for (let i = 0; i < fns.length; i++) {
        const fn = fns[i];
        if (typeof fn !== "function") continue;
        if (first === void 0) first = fn; else {
            if (onlyFunctions === void 0) onlyFunctions = [ first ];
            onlyFunctions.push(fn);
        }
    }
    if (first === void 0) return void 0;
    if (onlyFunctions === void 0) return first;
    if (onlyFunctions.length === 2) {
        const a = onlyFunctions[0];
        const b = onlyFunctions[1];
        return function(...innerArgs) {
            const result = a.apply(this, innerArgs);
            if (result === true) return result;
            return b.apply(this, innerArgs);
        };
    }
    const chained = onlyFunctions;
    return function(...innerArgs) {
        let result;
        for (let i = 0; i < chained.length; i++) {
            result = chained[i].apply(this, innerArgs);
            if (result === true) return result;
        }
        return result;
    };
}

var chainRefs = chainFunctions;

export { withScrolling as a, defaultTransitionForward as c, navigableForwardFocus as d, navigableHandleNavigation as f, scrollRow as i, defaultTransitionUp as l, chainRefs as n, defaultTransitionBack as o, scrollColumn as r, defaultTransitionDown as s, chainFunctions as t, handleNavigation as u };