import { type IntrinsicNodeProps, type NodeProps, Dynamic } from "@solidtv/solid";
import { Column, Row, VirtualRow, Image, useMouse } from "@solidtv/solid/primitives";
import { createEffect, createSignal, For, Index, Show } from "solid-js";
import styles, { buttonStyles } from "../styles";
import { type Tile } from "../api/formatters/ItemFormatter";

/**
 * `?noText=true` drops the row titles and poster titles.
 *
 * A benchmark switch, not a feature: text in a row that translates takes the
 * SDF translated-quad path every scroll frame, which rewrites every vertex and
 * dirties the shared buffer. Toggling it by URL rather than by edit keeps both
 * arms of an A/B on one build, so a rebuild's worth of thermal drift cannot be
 * mistaken for the effect. Read once at module scope; it never changes at
 * runtime. Mirrors the `?disableBG=true` switch in Background.tsx.
 */
export const SHOW_TEXT =
  typeof window === "undefined" ||
  new URLSearchParams(window.location.search).get("noText") !== "true";

/**
 * `?displaySize=N` sets how many items each row keeps mounted, default 8.
 *
 * The other half of the benchmark's workload switch, alongside {@link SHOW_TEXT}.
 * `bufferSize` deliberately stays fixed at 3 so a run varies one thing.
 * Garbage and values below 1 fall back to the default rather than rendering an
 * empty row, since a silently broken scene reads as a performance result.
 */
export const DISPLAY_SIZE = (() => {
  const fallback = 8;
  if (typeof window === "undefined") {
    return fallback;
  }
  const raw = new URLSearchParams(window.location.search).get("displaySize");
  if (raw === null) {
    return fallback;
  }
  const parsed = parseInt(raw, 10);
  return isNaN(parsed) || parsed < 1 ? fallback : parsed;
})();

/**
 * `?posterScale=N` shrinks each poster and the row box around it, default 1.
 *
 * The third workload switch, alongside {@link SHOW_TEXT} and {@link DISPLAY_SIZE}.
 * Mounting more items cannot raise the drawn node count on its own: a row
 * virtualizes to what fits, so items past the edge are updated every frame but
 * never rendered, and both quad and texture-upload counts stay flat while
 * update cost climbs. Shrinking the tile is what puts more of them inside the
 * 1080p design space, so this is the knob that actually scales scene size.
 * Pair it with a larger `displaySize`, or the row runs out of mounted items
 * before it runs out of room.
 */
export const POSTER_SCALE = (() => {
  const fallback = 1;
  if (typeof window === "undefined") {
    return fallback;
  }
  const raw = new URLSearchParams(window.location.search).get("posterScale");
  if (raw === null) {
    return fallback;
  }
  const parsed = parseFloat(raw);
  return isNaN(parsed) || parsed <= 0 ? fallback : parsed;
})();

/** Scales a 1080p-design-space length by {@link POSTER_SCALE}. */
export const scaled = (value: number) => Math.round(value * POSTER_SCALE);

export function Thumbnail(props: IntrinsicNodeProps & { item: Tile }) {
  return (
    <view
      {...props}
      id="thumbnail"
      src={props.item.src}
      placeholder="./assets/fallback.png"
      item={props.item}
      announce={[props.item.title, "PAUSE-1", props.item.overview]}
      style={styles.Thumbnail}
    />
  );
}

export function FocusRing(props: IntrinsicNodeProps) {
  return <view {...props} style={styles.FocusRing} />;
}

export interface TileRowProps extends IntrinsicNodeProps {
  items: Tile[];
  title?: string;
  rowType?: string;
  gap?: number;
  scroll?: "center" | "none" | "always" | "edge" | "auto";
  wrap?: boolean;
  selected?: number;
  row?: any;
}

export function TileRow(props: TileRowProps) {
  return (
    <Row {...props} style={styles.Row}>
      <Index each={props.items}>
        {(item, index) => <Thumbnail item={item()} announceContext={`${index + 1} of ${props.items.length}`} />}
      </Index>
    </Row>
  );
}

export function Button(props) {
  return (
    <view {...props} announce={[props.children, "button"]} forwardStates style={buttonStyles.container}>
      <text style={buttonStyles.text}>{props.children || props.title}</text>
    </view>
  );
}

export function AssetPanel(props) {
  let panelRef, actionRef;

  createEffect(() => {
    if (props.open) {
      panelRef
        .animate(
          {
            x: 1470
          },
          { duration: 400, easing: "ease-in-out" }
        )
        .start();
      actionRef.setFocus();
    } else if (panelRef.rendered) {
      panelRef
        .animate(
          {
            x: 1920
          },
          { duration: 400, easing: "ease-in-out" }
        )
        .start();
    }
  });

  return (
    <view {...props} x={1920} ref={panelRef} color={"#000000"} width={450} height={1080} zIndex={5}>
      <text x={75} y={50} fontSize={32}>
        {props.item?.title}
      </text>

      <Column ref={actionRef} onLeft={props.close} onBack={props.close} x={75} y={200}>
        <Button onEnter={props.close}>Record</Button>
        <Button onEnter={props.close}>Watch</Button>
        <Button onEnter={props.close}>Close</Button>
      </Column>
    </view>
  );
}

const heroTransition = {
  duration: 300,
  easing: "cubic-bezier(0.20, 1.00, 0.80, 1.00)"
};

const titleRowStyles = {
  fontFamily: "Raleway",
  fontSize: scaled(24),
  height: scaled(32),
  lineHeight: scaled(32)
};

export function TitleRow(props: TileRowProps) {
  const slug = () =>
    props.title
      ?.toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^\w-]+/g, "") || "row";
  return (
    <view
      height={props.height === undefined ? undefined : scaled(props.height)}
      forwardFocus={1}
      marginTop={scaled(30)}
    >
      <Show when={SHOW_TEXT}>
        <text skipFocus style={titleRowStyles}>
          {props.title}
        </text>
      </Show>
      <VirtualRow
        gap={scaled(20)}
        displaySize={DISPLAY_SIZE}
        bufferSize={3}
        each={props.items}
        y={scaled(50)}
        scroll={props.scroll}
        wrap={props.wrap}
        selected={props.selected}
        debugInfo
      >
        {(item, index) => (
          <Dynamic
            component={typeToComponent[props.rowType || props.row?.type]}
            index={index()}
            item={item()}
            group={slug()}
          />
        )}
      </VirtualRow>
    </view>
  );
}

const posterStyles = {
  width: scaled(185),
  height: scaled(278),
  scale: 1,
  color: "#b0b0b0",
  placeholderColor: "#252C37", // theme.card (theme not imported here)
  borderRadius: 8,
  transition: {
    scale: { duration: 200, easing: "linear" }
  },
  $focus: { scale: 1.1, color: "#fff" }
};

// No {...props} spread: with generate: 'universal' a spread compiles into
// mergeProps plus a reactive spread effect that iterates and assigns props
// through the merge proxy, per tile, and tiles are the hottest thing this app
// constructs. Explicit props compile to plain setProperty calls instead. The
// list covers every call site: the row path (TitleRow's Dynamic) passes
// item/index/group, and Loops/Infinite pass the Tile fields flat plus
// x/alpha/transition. `item` must keep landing on the node: Browse navigates
// with elm.item.href and the hero/backdrop effects read elm.item.
export function Poster(props: NodeProps) {
  return (
    <view
      x={props.x}
      alpha={props.alpha}
      transition={props.transition}
      item={props.item}
      index={props.index}
      group={props.group}
      src={props.src ?? props.item?.src}
      title={props.title ?? props.item?.shortTitle}
      backdrop={props.backdrop ?? props.item?.backdrop}
      onFail={(node) => (node.src = "./assets/fallback.png")}
      style={posterStyles}
    />
  );
}

const posterTitleStyles = {
  fontFamily: "Raleway",
  fontSize: scaled(22),
  lineHeight: scaled(22),
  height: scaled(22),
  x: scaled(10),
  y: scaled(288),
  contain: "width",
  width: scaled(185),
  maxLines: 2,
  alpha: 1,
  // $focus: {
  //   alpha: 1,
  //   y: 288
  // },
  transition: {
    y: heroTransition,
    alpha: heroTransition
  }
} as const;

// Spread-free for the same reason as Poster. Only the row path renders this
// (item/index/group), so the explicit list is short.
export function PosterTitle(props: NodeProps & { title: string }) {
  return (
    <view
      item={props.item}
      index={props.index}
      group={props.group}
      src={props.item?.src}
      backdrop={props.item?.backdrop}
      onFail={(node) => (node.src = "./assets/fallback.png")}
      style={posterStyles}
      forwardStates
    >
      <Show when={SHOW_TEXT}>
        <text style={posterTitleStyles}>{props.item?.title}</text>
      </Show>
    </view>
  );
}

const heroStyles = {
  width: 1280,
  height: 720,
  scale: 1,
  zIndex: 2,
  colorTop: "#fff",
  colorBottom: "#000",
  //borderRadius: 8,
  transition: {
    scale: heroTransition
  },
  $focus: { scale: 1.05 }
};

const heroTextStyles = {
  fontFamily: "Raleway",
  contain: "width"
} as const;

export function Hero(
  props: NodeProps & {
    item: {
      src: string;
      backdrop: string;
      title: string;
      overview: string;
    };
  }
) {
  const [hasFocus, setHasFocus] = createSignal(false);
  return (
    <view {...props} src={props.item.backdrop} style={heroStyles} onFocusChanged={setHasFocus} forwardStates>
      <view transition={{ alpha: heroTransition }} alpha={hasFocus() ? 1 : 0}>
        <view width={185} height={278} x={54} y={220} src={props.item.src} />
        <text y={520} x={54} fontSize={64} width={1000} maxLines={1} style={heroTextStyles}>
          {props.item.title}
        </text>
        <text
          y={620}
          x={60}
          fontSize={21}
          width={1000}
          maxLines={2}
          lineHeight={36}
          color={"#ccc"}
          style={heroTextStyles}
        >
          {props.item.overview}
        </text>
      </view>
    </view>
  );
}

const typeToComponent = {
  Poster: Poster,
  Hero: Hero,
  PosterTitle: PosterTitle
};

const BlockStyle = {
  alpha: 0.85,
  border: { width: 0, color: "#000000" },
  $focus: {
    border: { width: 4, color: "#FFF" },
    alpha: 1
  }
};
export function Block(props) {
  return <view {...props} width={100} height={100} style={BlockStyle} color={props.color || "#e0e0e0"} />;
}
