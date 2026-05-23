import {
  IntrinsicNodeStyleProps,
  IntrinsicTextNodeStyleProps,
  Text,
  View
} from "@solidtv/solid";
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
    <View
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
    <View y={80} x={200} autofocus>
      <Text style={SectionTitle}>1. Per-line anchor: textBaselineMode</Text>
      <Text style={SectionNote} y={38}>
        Global renderer setting. Default is 'optical'. Reload with ?textBaseline=optical | cap | x | linebox to compare.
      </Text>
      <View y={80} display="flex" flexDirection="row" gap={40}>
        <For each={BASELINE_MODES}>
          {(mode) => {
            const isActive = mode === props.active;
            return (
              <View width={boxW} height={wrapperH}>
                <View
                  {...BoxBase}
                  width={boxW}
                  height={boxH}
                  border={{
                    color: isActive ? theme.color.blue : theme.color.grey,
                    width: isActive ? 2 : 1
                  }}
                >
                  {isActive ? (
                    <Text
                      fontSize={40}
                      lineHeight={boxH}
                      centerX
                      color={theme.textPrimary}
                    >
                      Button
                    </Text>
                  ) : (
                    <Text
                      x={boxW / 2}
                      mountX={0.5}
                      fontSize={18}
                      lineHeight={boxH}
                      color={theme.textSecondary}
                    >
                      reload to view
                    </Text>
                  )}
                  <CenterLine y={boxH / 2} width={boxW} />
                </View>
                <Text
                  style={Caption}
                  y={boxH + 14}
                  color={isActive ? theme.color.blue : theme.textSecondary}
                >
                  {isActive ? `'${mode}' (active)` : `'${mode}'`}
                </Text>
              </View>
            );
          }}
        </For>
      </View>
    </View>
  );
}

function Section2() {
  const aligns = ["top", "middle", "bottom"] as const;
  const boxW = 240;
  const boxH = 140;
  return (
    <View y={330} x={200}>
      <Text style={SectionTitle}>2. verticalAlign with maxHeight</Text>
      <Text style={SectionNote} y={38}>
        {`Same text in ${boxW}x${boxH} boxes. Red line marks the visual center.`}
      </Text>
      <View y={80} display="flex" flexDirection="row" gap={40}>
        <For each={aligns}>
          {(align) => (
            <View width={boxW} height={boxH + 40}>
              <View {...BoxBase} width={boxW} height={boxH}>
                <Text
                  width={boxW}
                  maxHeight={boxH}
                  fontSize={32}
                  lineHeight={46}
                  verticalAlign={align}
                  textAlign="center"
                  color={theme.textPrimary}
                >
                  Centered
                </Text>
                <CenterLine y={boxH / 2} width={boxW} />
              </View>
              <Text style={Caption} y={boxH + 12}>
                verticalAlign: '{align}'
              </Text>
            </View>
          )}
        </For>
      </View>
    </View>
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
    <View y={props.y} height={rowHeight}>
      <Text
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
      </Text>
      <View
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
              <Text
                fontSize={l.size}
                lineHeight={rowHeight}
                color={theme.textPrimary}
              >
                {l.ch}
              </Text>
            ) : (
              <Text fontSize={l.size} color={theme.textPrimary}>
                {l.ch}
              </Text>
            )
          }
        </For>
        <CenterLine y={rowHeight / 2} width={boxW} />
      </View>
      <Text
        x={captionX}
        y={rowHeight / 2}
        mountY={0.5}
        style={{ ...Caption, width: 460 }}
      >
        {props.caption}
      </Text>
    </View>
  );

  return (
    <View y={660} x={200}>
      <Text style={SectionTitle}>3. alignItems vs lineHeight</Text>
      <Text style={SectionNote} y={38}>
        Both rows contain A/B/C at sizes 44/80/120 inside a flex row with alignItems: 'center'. Watch the cap-tops: only Row B aligns them.
      </Text>
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
    </View>
  );
}

const TextCenteringPage = () => {
  const active = getActiveBaseline();

  onMount(() => {
    setGlobalBackground(theme.backgroundDark);
  });

  return (
    <>
      <Text style={PageTitle} x={200} y={20}>
        Text Centering
      </Text>
      <Section1 active={active} />
      <Section2 />
      <Section3 />
      <Text
        style={{ ...Caption, width: 1600 }}
        x={200}
        y={1030}
      >
        Note: verticalAlign no longer requires maxHeight - it resolves against the parent's height. For single-line text, setting lineHeight to the container height is usually all you need.
      </Text>
    </>
  );
};

export default TextCenteringPage;
