import { IntrinsicNodeStyleProps, IntrinsicTextNodeStyleProps, Text } from "@solidtv/solid";
import { For, onMount } from "solid-js";
import { setGlobalBackground } from "../state";
import theme from "theme";

type BaselineMode = "optical" | "cap" | "x" | "linebox";
const BASELINE_MODES: BaselineMode[] = ["optical", "cap", "x", "linebox"];

function getActiveBaseline(): BaselineMode {
  const param = new URLSearchParams(window.location.search).get("textBaseline");
  if (
    param === "optical" ||
    param === "cap" ||
    param === "x" ||
    param === "linebox"
  )
    return param;
  return "optical";
}

const PageTitle = {
  fontSize: 42,
  fontWeight: "bold",
  color: theme.textPrimary
} satisfies IntrinsicTextNodeStyleProps;

const SectionTitle = {
  fontSize: 26,
  fontWeight: "bold",
  color: theme.textPrimary
} satisfies IntrinsicTextNodeStyleProps;

const SectionNote = {
  fontSize: 18,
  color: theme.textSecondary,
  contain: "width",
  width: 1600,
  lineHeight: 24
} satisfies IntrinsicTextNodeStyleProps;

const BoxBase = {
  color: 0x00000000,
  border: { color: theme.color.grey, width: 1 }
} satisfies IntrinsicNodeStyleProps;

const Caption = {
  fontSize: 17,
  color: theme.textSecondary,
  contain: "width"
} satisfies IntrinsicTextNodeStyleProps;

function CenterLine(props: { y: number; width: number }) {
  return (
    <view
      flexItem={false}
      x={0}
      y={props.y}
      width={props.width}
      height={1}
      color={theme.color.red}
    />
  );
}

function Section1(props: { active: BaselineMode }) {
  const boxW = 240;
  const boxH = 80;
  const wrapperH = 140;
  return (
    <view y={80} x={200} autofocus>
      <text style={SectionTitle}>1. Per-line anchor: textBaselineMode</text>
      <text style={SectionNote} y={38}>
        Global renderer setting. Default is 'optical'. Reload with ?textBaseline=optical | cap | x | linebox to compare.
      </text>
      <view y={80} display="flex" flexDirection="row" gap={40}>
        <For each={BASELINE_MODES}>
          {(mode) => {
            const isActive = mode === props.active;
            return (
              <view width={boxW} height={wrapperH}>
                <view
                  {...BoxBase}
                  width={boxW}
                  height={boxH}
                  border={{
                    color: isActive ? theme.color.blue : theme.color.grey,
                    width: isActive ? 2 : 1
                  }}
                >
                  {isActive ? (
                    <text
                      fontSize={40}
                      lineHeight={boxH}
                      centerX
                      color={theme.textPrimary}
                    >
                      Button
                    </text>
                  ) : (
                    <text
                      x={boxW / 2}
                      mountX={0.5}
                      fontSize={18}
                      lineHeight={boxH}
                      color={theme.textSecondary}
                    >
                      reload to view
                    </text>
                  )}
                  <CenterLine y={boxH / 2} width={boxW} />
                </view>
                <text
                  style={Caption}
                  y={boxH + 14}
                  color={isActive ? theme.color.blue : theme.textSecondary}
                >
                  {isActive ? `'${mode}' (active)` : `'${mode}'`}
                </text>
              </view>
            );
          }}
        </For>
      </view>
    </view>
  );
}

function Section2() {
  const aligns = ["top", "middle", "bottom"] as const;
  const boxW = 240;
  const boxH = 140;
  return (
    <view y={330} x={200}>
      <text style={SectionTitle}>2. verticalAlign with maxHeight</text>
      <text style={SectionNote} y={38}>
        {`Same text in ${boxW}x${boxH} boxes. Red line marks the visual center.`}
      </text>
      <view y={80} display="flex" flexDirection="row" gap={40}>
        <For each={aligns}>
          {(align) => (
            <view width={boxW} height={boxH + 40}>
              <view {...BoxBase} width={boxW} height={boxH}>
                <text
                  width={boxW}
                  maxHeight={boxH}
                  fontSize={32}
                  lineHeight={46}
                  verticalAlign={align}
                  textAlign="center"
                  color={theme.textPrimary}
                >
                  Centered
                </text>
                <CenterLine y={boxH / 2} width={boxW} />
              </view>
              <text style={Caption} y={boxH + 12}>
                verticalAlign: '{align}'
              </text>
            </view>
          )}
        </For>
      </view>
    </view>
  );
}

function Section3() {
  const letters = [
    { ch: "A", size: 44 },
    { ch: "B", size: 80 },
    { ch: "C", size: 120 }
  ];
  const rowHeight = 130;
  const labelW = 290;
  const boxW = 520;
  const captionX = labelW + boxW + 30;

  const Row = (props: {
    y: number;
    label: string;
    caption: string;
    useLineHeight: boolean;
  }) => (
    <view y={props.y} height={rowHeight}>
      <text
        x={0}
        y={rowHeight / 2}
        mountY={0.5}
        fontSize={20}
        fontWeight="bold"
        color={theme.textPrimary}
        contain="width"
        width={labelW}
      >
        {props.label}
      </text>
      <view
        {...BoxBase}
        x={labelW}
        width={boxW}
        height={rowHeight}
        display="flex"
        flexDirection="row"
        alignItems="center"
        justifyContent="spaceEvenly"
      >
        <For each={letters}>
          {(l) =>
            props.useLineHeight ? (
              <text
                fontSize={l.size}
                lineHeight={rowHeight}
                color={theme.textPrimary}
              >
                {l.ch}
              </text>
            ) : (
              <text fontSize={l.size} color={theme.textPrimary}>
                {l.ch}
              </text>
            )
          }
        </For>
        <CenterLine y={rowHeight / 2} width={boxW} />
      </view>
      <text
        x={captionX}
        y={rowHeight / 2}
        mountY={0.5}
        style={{ ...Caption, width: 460 }}
      >
        {props.caption}
      </text>
    </view>
  );

  return (
    <view y={660} x={200}>
      <text style={SectionTitle}>3. alignItems vs lineHeight</text>
      <text style={SectionNote} y={38}>
        Both rows contain A/B/C at sizes 44/80/120 inside a flex row with alignItems: 'center'. Watch the cap-tops: only Row B aligns them.
      </text>
      <Row
        y={80}
        label="Row A: fontSize only"
        caption="Flex centers each node's bounding box. Cap-tops do not align."
        useLineHeight={false}
      />
      <Row
        y={230}
        label={`Row B: lineHeight ${rowHeight}`}
        caption={`Each line-box matches the row height; textBaselineMode: 'cap' cap-centers each glyph. Cap-tops align.`}
        useLineHeight={true}
      />
    </view>
  );
}

const TextCenteringPage = () => {
  const active = getActiveBaseline();

  onMount(() => {
    setGlobalBackground(theme.backgroundDark);
  });

  return (
    <>
      <text style={PageTitle} x={200} y={20}>
        Text Centering
      </text>
      <Section1 active={active} />
      <Section2 />
      <Section3 />
      <text
        style={{ ...Caption, width: 1600 }}
        x={200}
        y={1030}
      >
        Note: verticalAlign no longer requires maxHeight - it resolves against the parent's height. For single-line text, setting lineHeight to the container height is usually all you need.
      </text>
    </>
  );
};

export default TextCenteringPage;
