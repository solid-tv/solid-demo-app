import { Q as onCleanup, a as createElement, c as effect, m as setProp, q as createSignal, s as createTextNode, u as insertNode } from "./render-BYkALdPm.js";

import { n as setGlobalBackground } from "./state-D_YrDk0w.js";

var PositioningPage = () => {
    setGlobalBackground(506018815);
    const [state, setState] = createSignal({
        x1: 20,
        x2: 140,
        x3: 260,
        x4: 380,
        y: 140,
        xA: 20,
        xB: 140,
        xC: 260,
        xD: 380,
        yNested: 0,
        xNested: 0,
        bar2: {
            direction: "up",
            v: "10%"
        },
        bar3: "10%"
    });
    setTimeout(() => {
        setState(prevState => ({
            ...prevState,
            xD: prevState.xD + 200,
            xC: prevState.xC + 100,
            xB: prevState.xB + 50,
            xA: prevState.xA + 25
        }));
    }, 4e3);
    const intervals = [];
    intervals.push(setInterval(() => {
        setState(prevState => ({
            ...prevState,
            yNested: prevState.yNested === 0 ? 50 : 0
        }));
    }, 2e3));
    intervals.push(setInterval(() => {
        setState(prevState => ({
            ...prevState,
            xNested: prevState.xNested === 0 ? 150 : 0
        }));
    }, 1e3));
    intervals.push(setInterval(() => {
        setState(prevState => ({
            ...prevState,
            bar3: Math.ceil(Math.random() * 96) + ""
        }));
    }, 2e3));
    intervals.push(setInterval(() => {
        setState(prevState => {
            const v = parseFloat(prevState.bar2.v);
            const newV = prevState.bar2.direction === "up" ? v + 10 : v - 10;
            return {
                ...prevState,
                bar2: {
                    ...prevState.bar2,
                    v: newV + "%",
                    direction: newV >= 90 ? "down" : newV <= 10 ? "up" : prevState.bar2.direction
                }
            };
        });
    }, 400));
    onCleanup(() => {
        intervals.forEach(interval => clearInterval(interval));
    });
    return (() => {
        var _el$ = createElement("view"), _el$2 = createElement("view"), _el$3 = createElement("view"), _el$4 = createElement("view"), _el$5 = createElement("view"), _el$6 = createElement("view"), _el$7 = createElement("view"), _el$8 = createElement("view"), _el$9 = createElement("view"), _el$0 = createElement("view"), _el$1 = createElement("view"), _el$10 = createElement("view"), _el$11 = createElement("view"), _el$12 = createElement("view"), _el$13 = createElement("view"), _el$14 = createElement("view"), _el$15 = createElement("view"), _el$16 = createElement("view"), _el$17 = createElement("view"), _el$18 = createElement("view"), _el$19 = createElement("text"), _el$21 = createElement("view"), _el$22 = createElement("view"), _el$23 = createElement("view"), _el$24 = createElement("view"), _el$25 = createElement("view"), _el$26 = createElement("view"), _el$27 = createElement("view");
        insertNode(_el$, _el$2);
        insertNode(_el$, _el$3);
        insertNode(_el$, _el$4);
        insertNode(_el$, _el$5);
        insertNode(_el$, _el$6);
        insertNode(_el$, _el$7);
        insertNode(_el$, _el$8);
        insertNode(_el$, _el$9);
        insertNode(_el$, _el$0);
        insertNode(_el$, _el$1);
        insertNode(_el$, _el$10);
        insertNode(_el$, _el$11);
        insertNode(_el$, _el$12);
        insertNode(_el$, _el$17);
        insertNode(_el$, _el$18);
        insertNode(_el$, _el$23);
        insertNode(_el$, _el$24);
        setProp(_el$, "x", 150);
        setProp(_el$, "autofocus", true);
        setProp(_el$2, "width", 100);
        setProp(_el$2, "height", 100);
        setProp(_el$2, "x", 20);
        setProp(_el$2, "y", 20);
        setProp(_el$2, "color", 3976134655);
        setProp(_el$3, "width", 100);
        setProp(_el$3, "height", 100);
        setProp(_el$3, "x", 140);
        setProp(_el$3, "y", 20);
        setProp(_el$3, "color", 2784230655);
        setProp(_el$4, "width", 100);
        setProp(_el$4, "height", 100);
        setProp(_el$4, "x", 260);
        setProp(_el$4, "y", 20);
        setProp(_el$4, "color", 584314623);
        setProp(_el$5, "width", 100);
        setProp(_el$5, "height", 100);
        setProp(_el$5, "x", 380);
        setProp(_el$5, "y", 20);
        setProp(_el$5, "color", 143766271);
        setProp(_el$6, "width", 100);
        setProp(_el$6, "height", 100);
        setProp(_el$6, "color", 4260691967);
        setProp(_el$7, "width", 100);
        setProp(_el$7, "height", 100);
        setProp(_el$7, "color", 4124114687);
        setProp(_el$8, "width", 100);
        setProp(_el$8, "height", 100);
        setProp(_el$8, "color", 3900307967);
        setProp(_el$9, "width", 100);
        setProp(_el$9, "height", 100);
        setProp(_el$9, "color", 3223770111);
        setProp(_el$0, "width", 100);
        setProp(_el$0, "height", 100);
        setProp(_el$0, "y", 260);
        setProp(_el$0, "color", 4294438399);
        setProp(_el$1, "width", 100);
        setProp(_el$1, "height", 100);
        setProp(_el$1, "y", 260);
        setProp(_el$1, "color", 4275546879);
        setProp(_el$10, "width", 100);
        setProp(_el$10, "height", 100);
        setProp(_el$10, "y", 260);
        setProp(_el$10, "color", 4220665087);
        setProp(_el$11, "width", 100);
        setProp(_el$11, "height", 100);
        setProp(_el$11, "y", 260);
        setProp(_el$11, "color", 3931639039);
        insertNode(_el$12, _el$13);
        setProp(_el$12, "width", 800);
        setProp(_el$12, "height", 800);
        setProp(_el$12, "y", 20);
        setProp(_el$12, "x", 800);
        setProp(_el$12, "color", 3976066559);
        insertNode(_el$13, _el$14);
        setProp(_el$13, "width", 600);
        setProp(_el$13, "height", 600);
        setProp(_el$13, "y", 20);
        setProp(_el$13, "x", 20);
        setProp(_el$13, "color", 2817773823);
        insertNode(_el$14, _el$15);
        setProp(_el$14, "width", 400);
        setProp(_el$14, "height", 400);
        setProp(_el$14, "y", 100);
        setProp(_el$14, "x", 20);
        setProp(_el$14, "color", 886282751);
        insertNode(_el$15, _el$16);
        setProp(_el$15, "width", 200);
        setProp(_el$15, "height", 100);
        setProp(_el$15, "y", 300 / 2);
        setProp(_el$15, "x", 200 / 2);
        setProp(_el$15, "color", 93743615);
        setProp(_el$16, "width", 50);
        setProp(_el$16, "height", 50);
        setProp(_el$16, "transition", {
            x: {
                duration: 300,
                easing: "ease"
            },
            y: {
                duration: 300,
                easing: "ease"
            }
        });
        setProp(_el$16, "color", 106907391);
        setProp(_el$17, "width", 100);
        setProp(_el$17, "height", 100);
        setProp(_el$17, "y", 500);
        setProp(_el$17, "x", 20);
        setProp(_el$17, "color", 3776792831);
        insertNode(_el$18, _el$19);
        insertNode(_el$18, _el$21);
        insertNode(_el$18, _el$22);
        setProp(_el$18, "width", 200);
        setProp(_el$18, "height", 200);
        setProp(_el$18, "x", 300);
        setProp(_el$18, "y", 600);
        setProp(_el$18, "color", 2493757695);
        setProp(_el$18, "zIndex", 100);
        insertNode(_el$19, createTextNode(`SolidTV!`));
        setProp(_el$19, "x", 100);
        setProp(_el$19, "y", 140);
        setProp(_el$21, "width", 300);
        setProp(_el$21, "height", 100);
        setProp(_el$21, "color", 1196780031);
        setProp(_el$22, "x", 150);
        setProp(_el$22, "y", 150);
        setProp(_el$22, "width", 100);
        setProp(_el$22, "height", 100);
        setProp(_el$22, "color", 4294967295);
        setProp(_el$22, "borderRadius", 75);
        setProp(_el$23, "width", 300);
        setProp(_el$23, "height", 300);
        setProp(_el$23, "x", 300);
        setProp(_el$23, "y", 600);
        setProp(_el$23, "color", 4014228608);
        insertNode(_el$24, _el$25);
        insertNode(_el$24, _el$26);
        insertNode(_el$24, _el$27);
        setProp(_el$24, "width", 400);
        setProp(_el$24, "height", 100);
        setProp(_el$24, "x", 800);
        setProp(_el$24, "y", 900);
        setProp(_el$24, "color", 42256383);
        setProp(_el$25, "width", 400 * .42);
        setProp(_el$25, "height", 100 * .3);
        setProp(_el$25, "y", 100 * .05);
        setProp(_el$25, "x", 400 * .01);
        setProp(_el$25, "color", 123307519);
        setProp(_el$26, "height", 100 * .3);
        setProp(_el$26, "y", 100 * .35);
        setProp(_el$26, "x", 400 * .01);
        setProp(_el$26, "color", 1797368063);
        setProp(_el$27, "height", 100 * .3);
        setProp(_el$27, "y", 100 * .65);
        setProp(_el$27, "x", 400 * .01);
        setProp(_el$27, "transition", {
            width: {
                duration: 300,
                easing: "ease"
            }
        });
        setProp(_el$27, "color", 2668771839);
        effect(_p$ => {
            var _v$ = state().x1, _v$2 = state().y, _v$3 = state().x2, _v$4 = state().y, _v$5 = state().x3, _v$6 = state().y, _v$7 = state().x4, _v$8 = state().y, _v$9 = state().xA, _v$0 = state().xB, _v$1 = state().xC, _v$10 = state().xD, _v$11 = state().yNested, _v$12 = state().xNested, _v$13 = 400 * parseFloat(state().bar2.v) / 100, _v$14 = 400 * parseFloat(state().bar3) / 100;
            _v$ !== _p$.e && (_p$.e = setProp(_el$6, "x", _v$, _p$.e));
            _v$2 !== _p$.t && (_p$.t = setProp(_el$6, "y", _v$2, _p$.t));
            _v$3 !== _p$.a && (_p$.a = setProp(_el$7, "x", _v$3, _p$.a));
            _v$4 !== _p$.o && (_p$.o = setProp(_el$7, "y", _v$4, _p$.o));
            _v$5 !== _p$.i && (_p$.i = setProp(_el$8, "x", _v$5, _p$.i));
            _v$6 !== _p$.n && (_p$.n = setProp(_el$8, "y", _v$6, _p$.n));
            _v$7 !== _p$.s && (_p$.s = setProp(_el$9, "x", _v$7, _p$.s));
            _v$8 !== _p$.h && (_p$.h = setProp(_el$9, "y", _v$8, _p$.h));
            _v$9 !== _p$.r && (_p$.r = setProp(_el$0, "x", _v$9, _p$.r));
            _v$0 !== _p$.d && (_p$.d = setProp(_el$1, "x", _v$0, _p$.d));
            _v$1 !== _p$.l && (_p$.l = setProp(_el$10, "x", _v$1, _p$.l));
            _v$10 !== _p$.u && (_p$.u = setProp(_el$11, "x", _v$10, _p$.u));
            _v$11 !== _p$.c && (_p$.c = setProp(_el$16, "y", _v$11, _p$.c));
            _v$12 !== _p$.w && (_p$.w = setProp(_el$16, "x", _v$12, _p$.w));
            _v$13 !== _p$.m && (_p$.m = setProp(_el$26, "width", _v$13, _p$.m));
            _v$14 !== _p$.f && (_p$.f = setProp(_el$27, "width", _v$14, _p$.f));
            return _p$;
        }, {
            e: void 0,
            t: void 0,
            a: void 0,
            o: void 0,
            i: void 0,
            n: void 0,
            s: void 0,
            h: void 0,
            r: void 0,
            d: void 0,
            l: void 0,
            u: void 0,
            c: void 0,
            w: void 0,
            m: void 0,
            f: void 0
        });
        return _el$;
    })();
};

export { PositioningPage as default };