import { t as theme_default } from "./theme-CB9u0IsU.js";

var roundPoster = new URLSearchParams(window.location.search).get("roundPoster") !== "false";

var styles_default = {
    Page: {
        width: 1920,
        height: 1080
    },
    headlineText: {
        width: 1200,
        height: 240,
        x: 360,
        y: 455,
        contain: "both",
        fontSize: 66,
        textAlign: "center"
    },
    headlineSubText: {
        width: 960,
        height: 170,
        x: 530,
        y: 655,
        contain: "both",
        fontSize: 48,
        textAlign: "center"
    },
    itemsContainer: {
        width: theme_default.layout.screenW,
        height: 800,
        y: 560,
        x: 0,
        zIndex: 2
    },
    Thumbnail: {
        width: 185,
        height: 278,
        scale: 1,
        zIndex: 2,
        placeholderColor: theme_default.card,
        transition: {
            scale: {
                duration: 250,
                easing: "linear"
            }
        },
        borderRadius: roundPoster ? 16 : 0,
        border: {
            width: 0,
            color: 0
        },
        $focus: {
            scale: 1.1,
            border: {
                color: theme_default.primaryLight,
                width: 6,
                gap: 4,
                align: "outside"
            }
        },
        $hover: {
            scale: 1.07,
            border: {
                color: theme_default.primaryLight,
                width: 3
            }
        },
        $pressed: {
            scale: 1.05,
            border: {
                color: theme_default.primary,
                width: 6
            }
        }
    },
    FocusRing: {
        borderRadius: 16,
        width: 194,
        height: 286,
        y: -5,
        x: -5,
        zIndex: -1
    },
    FPS: {
        color: 255,
        height: 42,
        width: 140,
        x: 20,
        y: 20,
        zIndex: 100
    },
    FPSLabel: {
        x: 10,
        y: 0,
        fontSize: 36,
        textColor: 4294967295
    },
    FPSValue: {
        x: 90,
        y: 0,
        fontSize: 36,
        textColor: 4294967295
    },
    showHeadline: {
        x: 70,
        y: 20
    },
    headlineBlur: {
        width: 1920,
        height: 150,
        x: 0,
        y: 0,
        zIndex: 14,
        alpha: .9,
        color: 255
    },
    RowTitle: {
        height: 44,
        width: 300,
        marginBottom: -54,
        fontSize: 26,
        color: 4042322175,
        zIndex: 2
    },
    Row: {
        display: "flex",
        justifyContent: "spaceBetween",
        height: 300
    },
    Column: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "flexStart",
        flexBoundary: "contain",
        gap: 64,
        width: theme_default.layout.screenW - 2 * theme_default.layout.marginX,
        x: theme_default.layout.marginX + theme_default.layout.gutterX,
        y: 48,
        zIndex: 2
    },
    Rect: {
        width: 250,
        height: 100,
        y: 10,
        x: 300,
        color: 65535
    },
    peopleBio: {
        ...theme_default.typography.body1,
        fontFamily: "Roboto",
        fontWeight: "normal",
        contain: "both",
        width: 780,
        height: 340
    }
};

var Button = {
    width: 300,
    height: 90,
    color: theme_default.primary,
    borderRadius: 12,
    shadow: {
        color: 122,
        projection: [ 0, 16, 24, -6 ]
    },
    $focus: {
        color: theme_default.primaryLight,
        shadow: {
            color: 122,
            projection: [ 0, 16, 24, -6 ]
        }
    }
};

var TopBar = {
    color: 10918399,
    height: 8,
    y: 2,
    x: -4,
    width: Button.width + 8
};

var ButtonText = {
    fontSize: 26,
    lineHeight: Button.height,
    contain: "width",
    textAlign: "center",
    height: Button.height,
    width: Button.width,
    color: theme_default.textPrimary
};

var buttonStyles = {
    container: Button,
    topBar: TopBar,
    text: ButtonText
};

var MaterialButton = {
    width: 386,
    height: 136,
    color: 1901898751,
    $focus: {
        color: 1513726719
    },
    $disabled: {
        color: 689783807
    }
};

var MaterialButtonText = {
    fontSize: 32,
    contain: "width",
    textAlign: "center",
    mountY: -.35,
    color: 4294967295,
    height: MaterialButton.height,
    width: MaterialButton.width,
    $focus: {
        fontSize: 40
    },
    $disabled: {
        color: 2425393407
    }
};

export { buttonStyles as n, styles_default as r, MaterialButtonText as t };