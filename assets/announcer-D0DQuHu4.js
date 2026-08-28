import { J as getListener, Q as onCleanup, Y as getOwner, it as untrack, q as createSignal, v as focusPath } from "./render-Dr57z7L3.js";

var ARIA_PARENT_ID = "aria-parent";

var ariaLabelPhrases = [];

function flattenStrings(series = []) {
    const flattenedSeries = [];
    let i;
    for (i = 0; i < series.length; i++) {
        const s = series[i];
        if (typeof s === "string" && !s.includes("PAUSE-")) flattenedSeries.push(series[i]); else break;
    }
    return [ flattenedSeries.join(",\b ") ].concat(series.slice(i));
}

function delay(pause) {
    return new Promise(resolve => {
        setTimeout(resolve, pause);
    });
}

function addChildrenToAriaDiv(phrase) {
    var _phrase$text;
    if ((phrase == null || (_phrase$text = phrase.text) == null ? void 0 : _phrase$text.trim().length) === 0) return;
    ariaLabelPhrases.push(phrase);
}

function focusElementForAria() {
    if (ariaLabelPhrases.length === 0) return;
    const element = createAriaElement();
    if (!element) {
        console.error(`ARIA div not found: ${ARIA_PARENT_ID}`);
        return;
    }
    cleanAriaLabelParent();
    for (const object of ariaLabelPhrases) {
        const span = document.createElement("span");
        span.setAttribute("lang", object.lang);
        span.setAttribute("aria-label", object.text);
        element.appendChild(span);
    }
    ariaLabelPhrases = [];
}

function cleanAriaLabelParent() {
    const parentTag = document.getElementById(ARIA_PARENT_ID);
    if (parentTag) while (parentTag.firstChild) parentTag.removeChild(parentTag.firstChild);
}

function createAriaElement() {
    const aria_container = document.getElementById(ARIA_PARENT_ID);
    if (!aria_container) {
        const element = document.createElement("div");
        element.setAttribute("id", ARIA_PARENT_ID);
        element.setAttribute("aria-live", "assertive");
        element.setAttribute("tabindex", "0");
        document.body.appendChild(element);
        return element;
    }
    return aria_container;
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
        utterance.lang = lang;
        if (selectedVoice) utterance.voice = selectedVoice;
        utterance.onend = () => {
            resolve();
        };
        utterance.onerror = e => {
            const error = new Error(`Speech synthesis error: ${e.error}`);
            error.error = e.error;
            reject(error);
        };
        utterances.push(utterance);
        synth.speak(utterance);
    });
}

async function handleSpeechError(e, retriesLeft, totalRetries) {
    const code = e == null ? void 0 : e.error;
    if (code === "network") {
        retriesLeft--;
        console.warn(`Speech synthesis network error. Retries left: ${retriesLeft}`);
        await delay(500 * (totalRetries - retriesLeft));
        return retriesLeft;
    }
    if (code === "canceled" || code === "interrupted") return 0;
    throw e;
}

function speakSeries(series, aria, lang, voice, root = true) {
    const synth = window.speechSynthesis;
    const remainingPhrases = flattenStrings(Array.isArray(series) ? series : [ series ]);
    const nestedSeriesResults = [];
    const utterances = [];
    let active = true;
    return {
        series: (async () => {
            try {
                while (active && remainingPhrases.length) {
                    const phrase = await Promise.resolve(remainingPhrases.shift());
                    if (!active) break;
                    if (typeof phrase === "string" && phrase.includes("PAUSE-")) {
                        const pause = Number(phrase.split("PAUSE-")[1]) * 1e3;
                        if (!isNaN(pause)) await delay(pause);
                    } else if (typeof phrase === "string") {
                        if (!phrase) continue;
                        const totalRetries = 3;
                        let retriesLeft = totalRetries;
                        while (active && retriesLeft > 0) try {
                            if (aria) addChildrenToAriaDiv({
                                text: phrase,
                                lang: lang
                            }); else await speak(phrase, utterances, lang, voice);
                            retriesLeft = 0;
                        } catch (e) {
                            retriesLeft = await handleSpeechError(e, retriesLeft, totalRetries);
                        }
                    } else if (phrase instanceof SpeechSynthesisUtterance) {
                        const totalRetries = 3;
                        let retriesLeft = totalRetries;
                        const text = phrase.text;
                        const objectLang = phrase == null ? void 0 : phrase.lang;
                        const objectVoice = phrase == null ? void 0 : phrase.voice;
                        while (active && retriesLeft > 0) try {
                            if (text) {
                                if (aria) addChildrenToAriaDiv({
                                    text: text,
                                    lang: objectLang
                                }); else await speak(text, utterances, objectLang, objectVoice == null ? void 0 : objectVoice.name);
                                retriesLeft = 0;
                            }
                        } catch (e) {
                            retriesLeft = await handleSpeechError(e, retriesLeft, totalRetries);
                        }
                    } else if (typeof phrase === "function") {
                        const seriesResult = speakSeries(phrase(), aria, lang, voice, false);
                        nestedSeriesResults.push(seriesResult);
                        await seriesResult.series;
                    } else if (Array.isArray(phrase)) {
                        const seriesResult = speakSeries(phrase, aria, lang, voice, false);
                        nestedSeriesResults.push(seriesResult);
                        await seriesResult.series;
                    }
                }
            } finally {
                active = false;
                if (root && aria) focusElementForAria();
            }
        })(),
        get active() {
            return active;
        },
        append: toSpeak => {
            remainingPhrases.push(toSpeak);
        },
        cancel: () => {
            if (!active) return;
            if (root) if (aria) ariaLabelPhrases = []; else synth.cancel();
            nestedSeriesResults.forEach(nestedSeriesResult => {
                nestedSeriesResult.cancel();
            });
            active = false;
        }
    };
}

var currentSeries;

function speech_default(toSpeak, aria, lang = "en-US", voice) {
    currentSeries == null || currentSeries.cancel();
    currentSeries = speakSeries(toSpeak, aria, lang, voice);
    return currentSeries;
}

var debounce = (callback, wait) => {
    if (false) return Object.assign(() => void 0, {
        clear: () => void 0
    });
    let timeoutId;
    const clear = () => clearTimeout(timeoutId);
    if (getOwner()) onCleanup(clear);
    const debounced = (...args) => {
        if (timeoutId !== void 0) clear();
        timeoutId = setTimeout(() => callback(...args), wait);
    };
    return Object.assign(debounced, {
        clear: clear
    });
};

var throttle = (callback, wait) => {
    if (false) return Object.assign(() => void 0, {
        clear: () => void 0
    });
    let isThrottled = false, timeoutId, lastArgs;
    const throttled = (...args) => {
        lastArgs = args;
        if (isThrottled) return;
        isThrottled = true;
        timeoutId = setTimeout(() => {
            callback(...lastArgs);
            isThrottled = false;
        }, wait);
    };
    const clear = () => {
        clearTimeout(timeoutId);
        isThrottled = false;
    };
    if (getOwner()) onCleanup(clear);
    return Object.assign(throttled, {
        clear: clear
    });
};

function createScheduled(schedule) {
    let listeners = 0;
    let isDirty = false;
    const [track, dirty] = createSignal(void 0, {
        equals: false
    });
    const call = schedule(() => {
        isDirty = true;
        dirty();
    });
    return () => {
        if (!isDirty) call(), track();
        if (isDirty) {
            isDirty = !!listeners;
            return true;
        }
        if (getListener()) {
            listeners++;
            onCleanup(() => listeners--);
        }
        return false;
    };
}

var resetFocusPathTimer;

var prevFocusPath = [];

var currentlySpeaking;

var voiceOutDisabled = false;

var fiveMinutes = 3e5;

function debounceWithFlush(callback, time) {
    const trigger = debounce(callback, time);
    let scopedValue;
    const debounced = newValue => {
        scopedValue = newValue;
        trigger(newValue);
    };
    debounced.flush = () => {
        trigger.clear();
        callback(scopedValue);
    };
    debounced.clear = trigger.clear;
    return debounced;
}

function getElmName(elm) {
    return elm.id || elm.name;
}

function onFocusChangeCore(focusPath = []) {
    if (!Announcer.onFocusChange || !Announcer.enabled) return;
    const loaded = focusPath.every(elm => !elm.loading);
    const focusDiff = focusPath.filter(elm => !prevFocusPath.includes(elm));
    resetFocusPathTimer();
    if (!loaded && Announcer.onFocusChange) {
        Announcer.onFocusChange([]);
        return;
    }
    prevFocusPath = focusPath.slice(0);
    const toAnnounceText = [];
    const toAnnounce = focusDiff.reverse().reduce((acc, elm) => {
        if (elm.announce) {
            acc.push([ getElmName(elm), "Announce", elm.announce ]);
            toAnnounceText.push(elm.announce);
        } else if (elm.title) {
            acc.push([ getElmName(elm), "Title", elm.title ]);
            toAnnounceText.push(elm.title);
        } else acc.push([ getElmName(elm), "No Announce", "" ]);
        return acc;
    }, []);
    focusDiff.reverse().reduce((acc, elm) => {
        if (elm.announceContext) {
            acc.push([ getElmName(elm), "Context", elm.announceContext ]);
            toAnnounceText.push(elm.announceContext);
        } else acc.push([ getElmName(elm), "No Context", "" ]);
        return acc;
    }, toAnnounce);
    if (Announcer.debug) console.table(toAnnounce);
    if (toAnnounceText.length) return Announcer.speak(toAnnounceText.reduce((acc, val) => acc.concat(val), []));
}

function textToSpeech(toSpeak, aria, lang, voice) {
    if (voiceOutDisabled) return;
    return currentlySpeaking = speech_default(toSpeak, aria, lang, voice);
}

var Announcer = {
    debug: false,
    enabled: true,
    lang: "en-US",
    aria: false,
    cancel: function() {
        currentlySpeaking == null || currentlySpeaking.cancel();
    },
    clearPrevFocus: function(depth = 0) {
        prevFocusPath = prevFocusPath.slice(0, depth);
        resetFocusPathTimer();
    },
    speak: function(text, {append: append = false, notification: notification = false} = {}) {
        if (Announcer.onFocusChange && Announcer.enabled) {
            if (append && currentlySpeaking && currentlySpeaking.active) currentlySpeaking.append(text); else {
                Announcer.cancel();
                textToSpeech(text, Announcer.aria, Announcer.lang, Announcer.voice);
            }
            if (notification) {
                voiceOutDisabled = true;
                currentlySpeaking == null || currentlySpeaking.series.finally(() => {
                    voiceOutDisabled = false;
                    Announcer.refresh();
                }).catch(console.error);
            }
        }
        return currentlySpeaking;
    },
    refresh: function(depth = 0) {
        Announcer.clearPrevFocus(depth);
        if (Announcer.onFocusChange) Announcer.onFocusChange(untrack(() => focusPath()));
    },
    setupTimers: function({focusDebounce: focusDebounce = 400, focusChangeTimeout: focusChangeTimeout = fiveMinutes} = {}) {
        Announcer.onFocusChange = debounceWithFlush(onFocusChangeCore, focusDebounce);
        resetFocusPathTimer = debounceWithFlush(() => {
            prevFocusPath = [];
        }, focusChangeTimeout);
    }
};

export { createScheduled as n, throttle as r, Announcer as t };