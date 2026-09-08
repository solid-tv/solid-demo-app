import { J as getListener, Q as onCleanup, Y as getOwner, it as untrack, q as createSignal, v as focusPath } from "./render-pt2tmeLm.js";

var currentSeries, ariaLabelPhrases = [];

function delay(pause) {
    return new Promise(resolve => {
        setTimeout(resolve, pause);
    });
}

function addChildrenToAriaDiv(phrase) {
    var _phrase$text;
    0 !== (null == phrase || null == (_phrase$text = phrase.text) ? void 0 : _phrase$text.trim().length) && ariaLabelPhrases.push(phrase);
}

function focusElementForAria() {
    if (0 === ariaLabelPhrases.length) return;
    const element = function() {
        const aria_container = document.getElementById("aria-parent");
        if (!aria_container) {
            const element = document.createElement("div");
            return element.setAttribute("id", "aria-parent"), element.setAttribute("aria-live", "assertive"), 
            element.setAttribute("tabindex", "0"), document.body.appendChild(element), element;
        }
        return aria_container;
    }();
    if (element) {
        !function() {
            const parentTag = document.getElementById("aria-parent");
            if (parentTag) for (;parentTag.firstChild; ) parentTag.removeChild(parentTag.firstChild);
        }();
        for (const object of ariaLabelPhrases) {
            const span = document.createElement("span");
            span.setAttribute("lang", object.lang), span.setAttribute("aria-label", object.text), 
            element.appendChild(span);
        }
        ariaLabelPhrases = [];
    } else console.error("ARIA div not found: aria-parent");
}

function speak(phrase, utterances, lang = "en-US", voiceName) {
    const synth = window.speechSynthesis;
    return new Promise((resolve, reject) => {
        let selectedVoice;
        if (voiceName) {
            const availableVoices = synth.getVoices();
            selectedVoice = availableVoices.find(v => v.name === voiceName) || availableVoices[0];
        }
        const utterance = new SpeechSynthesisUtterance(phrase);
        utterance.lang = lang, selectedVoice && (utterance.voice = selectedVoice), utterance.onend = () => {
            resolve();
        }, utterance.onerror = e => {
            const error = new Error(`Speech synthesis error: ${e.error}`);
            error.error = e.error, reject(error);
        }, utterances.push(utterance), synth.speak(utterance);
    });
}

async function handleSpeechError(e, retriesLeft, totalRetries) {
    const code = null == e ? void 0 : e.error;
    if ("network" === code) return retriesLeft--, console.warn(`Speech synthesis network error. Retries left: ${retriesLeft}`), 
    await delay(500 * (totalRetries - retriesLeft)), retriesLeft;
    if ("canceled" === code || "interrupted" === code) return 0;
    throw e;
}

function speakSeries(series, aria, lang, voice, root = !0) {
    const synth = window.speechSynthesis, remainingPhrases = function(series = []) {
        const flattenedSeries = [];
        let i;
        for (i = 0; i < series.length; i++) {
            const s = series[i];
            if ("string" != typeof s || s.includes("PAUSE-")) break;
            flattenedSeries.push(series[i]);
        }
        return [ flattenedSeries.join(",\b ") ].concat(series.slice(i));
    }(Array.isArray(series) ? series : [ series ]), nestedSeriesResults = [], utterances = [];
    let active = !0;
    return {
        series: (async () => {
            try {
                for (;active && remainingPhrases.length; ) {
                    const phrase = await Promise.resolve(remainingPhrases.shift());
                    if (!active) break;
                    if ("string" == typeof phrase && phrase.includes("PAUSE-")) {
                        const pause = 1e3 * Number(phrase.split("PAUSE-")[1]);
                        isNaN(pause) || await delay(pause);
                    } else if ("string" == typeof phrase) {
                        if (!phrase) continue;
                        const totalRetries = 3;
                        let retriesLeft = totalRetries;
                        for (;active && retriesLeft > 0; ) try {
                            aria ? addChildrenToAriaDiv({
                                text: phrase,
                                lang: lang
                            }) : await speak(phrase, utterances, lang, voice), retriesLeft = 0;
                        } catch (e) {
                            retriesLeft = await handleSpeechError(e, retriesLeft, totalRetries);
                        }
                    } else if (phrase instanceof SpeechSynthesisUtterance) {
                        const totalRetries = 3;
                        let retriesLeft = totalRetries;
                        const text = phrase.text, objectLang = null == phrase ? void 0 : phrase.lang, objectVoice = null == phrase ? void 0 : phrase.voice;
                        for (;active && retriesLeft > 0; ) try {
                            text && (aria ? addChildrenToAriaDiv({
                                text: text,
                                lang: objectLang
                            }) : await speak(text, utterances, objectLang, null == objectVoice ? void 0 : objectVoice.name), 
                            retriesLeft = 0);
                        } catch (e) {
                            retriesLeft = await handleSpeechError(e, retriesLeft, totalRetries);
                        }
                    } else if ("function" == typeof phrase) {
                        const seriesResult = speakSeries(phrase(), aria, lang, voice, !1);
                        nestedSeriesResults.push(seriesResult), await seriesResult.series;
                    } else if (Array.isArray(phrase)) {
                        const seriesResult = speakSeries(phrase, aria, lang, voice, !1);
                        nestedSeriesResults.push(seriesResult), await seriesResult.series;
                    }
                }
            } finally {
                active = !1, root && aria && focusElementForAria();
            }
        })(),
        get active() {
            return active;
        },
        append: toSpeak => {
            remainingPhrases.push(toSpeak);
        },
        cancel: () => {
            active && (root && (aria ? ariaLabelPhrases = [] : synth.cancel()), nestedSeriesResults.forEach(nestedSeriesResult => {
                nestedSeriesResult.cancel();
            }), active = !1);
        }
    };
}

function speech_default(toSpeak, aria, lang = "en-US", voice) {
    return null == currentSeries || currentSeries.cancel(), currentSeries = speakSeries(toSpeak, aria, lang, voice);
}

var resetFocusPathTimer, throttle = (callback, wait) => {
    let timeoutId, lastArgs, isThrottled = !1;
    const clear = () => {
        clearTimeout(timeoutId), isThrottled = !1;
    };
    return getOwner() && onCleanup(clear), Object.assign((...args) => {
        lastArgs = args, isThrottled || (isThrottled = !0, timeoutId = setTimeout(() => {
            callback(...lastArgs), isThrottled = !1;
        }, wait));
    }, {
        clear: clear
    });
};

function createScheduled(schedule) {
    let listeners = 0, isDirty = !1;
    const [track, dirty] = createSignal(void 0, {
        equals: !1
    }), call = schedule(() => {
        isDirty = !0, dirty();
    });
    return () => (isDirty || (call(), track()), isDirty ? (isDirty = !!listeners, !0) : (getListener() && (listeners++, 
    onCleanup(() => listeners--)), !1));
}

var currentlySpeaking, prevFocusPath = [], voiceOutDisabled = !1;

function debounceWithFlush(callback, time) {
    const trigger = ((callback, wait) => {
        let timeoutId;
        const clear = () => clearTimeout(timeoutId);
        return getOwner() && onCleanup(clear), Object.assign((...args) => {
            void 0 !== timeoutId && clear(), timeoutId = setTimeout(() => callback(...args), wait);
        }, {
            clear: clear
        });
    })(callback, time);
    let scopedValue;
    const debounced = newValue => {
        scopedValue = newValue, trigger(newValue);
    };
    return debounced.flush = () => {
        trigger.clear(), callback(scopedValue);
    }, debounced.clear = trigger.clear, debounced;
}

function getElmName(elm) {
    return elm.id || elm.name;
}

function onFocusChangeCore(focusPath = []) {
    if (!Announcer.onFocusChange || !Announcer.enabled) return;
    const loaded = focusPath.every(elm => !elm.loading), focusDiff = focusPath.filter(elm => !prevFocusPath.includes(elm));
    if (resetFocusPathTimer(), !loaded && Announcer.onFocusChange) return void Announcer.onFocusChange([]);
    prevFocusPath = focusPath.slice(0);
    const toAnnounceText = [], toAnnounce = focusDiff.reverse().reduce((acc, elm) => (elm.announce ? (acc.push([ getElmName(elm), "Announce", elm.announce ]), 
    toAnnounceText.push(elm.announce)) : elm.title ? (acc.push([ getElmName(elm), "Title", elm.title ]), 
    toAnnounceText.push(elm.title)) : acc.push([ getElmName(elm), "No Announce", "" ]), 
    acc), []);
    return focusDiff.reverse().reduce((acc, elm) => (elm.announceContext ? (acc.push([ getElmName(elm), "Context", elm.announceContext ]), 
    toAnnounceText.push(elm.announceContext)) : acc.push([ getElmName(elm), "No Context", "" ]), 
    acc), toAnnounce), Announcer.debug && console.table(toAnnounce), toAnnounceText.length ? Announcer.speak(toAnnounceText.reduce((acc, val) => acc.concat(val), [])) : void 0;
}

var Announcer = {
    debug: !1,
    enabled: !0,
    lang: "en-US",
    aria: !1,
    cancel: function() {
        null == currentlySpeaking || currentlySpeaking.cancel();
    },
    clearPrevFocus: function(depth = 0) {
        prevFocusPath = prevFocusPath.slice(0, depth), resetFocusPathTimer();
    },
    speak: function(text, {append: append = !1, notification: notification = !1} = {}) {
        return Announcer.onFocusChange && Announcer.enabled && (append && currentlySpeaking && currentlySpeaking.active ? currentlySpeaking.append(text) : (Announcer.cancel(), 
        function(toSpeak, aria, lang, voice) {
            if (!voiceOutDisabled) currentlySpeaking = speech_default(toSpeak, aria, lang, voice);
        }(text, Announcer.aria, Announcer.lang, Announcer.voice)), notification && (voiceOutDisabled = !0, 
        null == currentlySpeaking || currentlySpeaking.series.finally(() => {
            voiceOutDisabled = !1, Announcer.refresh();
        }).catch(console.error))), currentlySpeaking;
    },
    refresh: function(depth = 0) {
        Announcer.clearPrevFocus(depth), Announcer.onFocusChange && Announcer.onFocusChange(untrack(() => focusPath()));
    },
    setupTimers: function({focusDebounce: focusDebounce = 400, focusChangeTimeout: focusChangeTimeout = 3e5} = {}) {
        Announcer.onFocusChange = debounceWithFlush(onFocusChangeCore, focusDebounce), resetFocusPathTimer = debounceWithFlush(() => {
            prevFocusPath = [];
        }, focusChangeTimeout);
    }
};

export { createScheduled as n, throttle as r, Announcer as t };