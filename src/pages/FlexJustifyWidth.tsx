import { For, createSignal, onMount } from "solid-js";
import { ElementNode, IntrinsicNodeStyleProps } from "@solidtv/solid";
import { Column } from "@solidtv/solid/primitives";
import { setGlobalBackground } from "../state";
import theme from "theme";

/**
 * Side by side demo for solid-tv/solid#51 — "give justifyContent free space to
 * distribute again".
 *
 * Today a flex row with no explicit `width` seeds `w = 0`. Only the `flexStart`
 * branch of layout grows the container back to fit its children, so every other
 * justify mode distributes children across a zero width container and lands them
 * on negative offsets.
 *
 * The PR keeps the shrink-to-fit seed for `flexStart`, and for every other
 * justify mode falls back to the pre-regression default of `w = parentWidth - x`
 * — unless an explicit `flexBoundary` asks to stay contained.
 *
 * The AFTER column reproduces the patch exactly: the only thing the PR changes
 * is that seeded width, and no non-`flexStart` branch of flex.ts ever resizes
 * the container afterwards. So `width={PANEL_W - x}` here renders what the
 * patched library produces on its own.
 */

const PANEL_W = 700;
const PANEL_H = 120;
const BLOCK_W = 90;
const BLOCK_H = 56;
const GAP = 16;

type Scenario = {
  title: string;
  note: string;
  x: number;
  justifyContent?: IntrinsicNodeStyleProps["justifyContent"];
  flexBoundary?: IntrinsicNodeStyleProps["flexBoundary"];
  /** Does PR #51 pick a different width for this container? */
  changes: boolean;
  verdict: string;
};

const scenarios: Scenario[] = [
  {
    title: 'justifyContent="center"',
    note: "The row you actually wanted centered.",
    x: 0,
    justifyContent: "center",
    changes: true,
    verdict: "w 0 -> w 700"
  },
  {
    title: "center, container at x={240}",
    note: "The accidental pattern: content looked centered on the container's own x.",
    x: 240,
    justifyContent: "center",
    changes: true,
    verdict: "centers x -> parent edge"
  },
  {
    title: 'justifyContent="flexEnd"',
    note: "Right aligns to the parent's right edge, not to the container's own x.",
    x: 0,
    justifyContent: "flexEnd",
    changes: true,
    verdict: "w 0 -> w 700"
  },
  {
    title: 'justifyContent="spaceBetween"',
    note: "Negative spacing today, so the children stack on top of each other.",
    x: 0,
    justifyContent: "spaceBetween",
    changes: true,
    verdict: "overlap -> spread"
  },
  {
    title: 'justifyContent="spaceEvenly"',
    note: "Same failure shape as spaceBetween and spaceAround.",
    x: 0,
    justifyContent: "spaceEvenly",
    changes: true,
    verdict: "overlap -> spread"
  },
  {
    title: 'justifyContent="flexStart"',
    note: "Untouched - flexStart is the one branch that grows the container back to fit.",
    x: 0,
    justifyContent: "flexStart",
    changes: false,
    verdict: "unchanged"
  },
  {
    title: "no justifyContent",
    note: "Untouched. Same default shrink-to-fit as flexStart.",
    x: 0,
    changes: false,
    verdict: "unchanged"
  },
  {
    title: 'flexBoundary="contain" + center',
    note: "Untouched - an explicit boundary wins. The one case that warns in dev after the PR.",
    x: 0,
    justifyContent: "center",
    flexBoundary: "contain",
    changes: false,
    verdict: "warns in dev"
  }
];

function Block(props: { color: number }) {
  return <view width={BLOCK_W} height={BLOCK_H} borderRadius={4} color={props.color} />;
}

function Panel(props: { scenario: Scenario; after: boolean }) {
  let container!: ElementNode;
  const [measurement, setMeasurement] = createSignal("measuring...");

  // The container is a live node — read the values layout actually produced
  // rather than restating what we expect it to produce.
  const measure = () => {
    if (!container) return;
    const kids = container.children as ElementNode[];
    const xs = kids.map((c) => Math.round(c.x || 0)).join(", ");
    setMeasurement(`width ${Math.round(container.width || 0)}   |   child x  ${xs}`);
  };

  onMount(() => {
    requestAnimationFrame(() => requestAnimationFrame(measure));
    // Layout can settle a frame or two later on slower devices.
    setTimeout(measure, 500);
  });

  // The whole of PR #51: which width a no-width flex row starts life with.
  const width = () => (props.after && props.scenario.changes ? PANEL_W - props.scenario.x : undefined);

  const blockColor = props.after ? 0x4ade80ff : 0xf87171ff;

  return (
    <view>
      <view
        clipping
        width={PANEL_W}
        height={PANEL_H}
        borderRadius={6}
        color={0x0e1218ff}
        border={{ width: 2, color: props.after ? 0x4ade8055 : 0xf8717155 }}
      >
        <view
          ref={container}
          display="flex"
          gap={GAP}
          x={props.scenario.x}
          y={30}
          width={width()}
          justifyContent={props.scenario.justifyContent}
          flexBoundary={props.scenario.flexBoundary}
          color={props.after ? 0x4ade8022 : 0xf8717122}
        >
          <Block color={blockColor} />
          <Block color={blockColor} />
          <Block color={blockColor} />
        </view>
        {/* Marks where the container's own x sits inside the parent. */}
        <view x={props.scenario.x} y={0} width={2} height={PANEL_H} color={0xffffff33} />
      </view>
      <text y={PANEL_H + 8} fontSize={20} color={theme.textSecondary}>
        {measurement()}
      </text>
    </view>
  );
}

function Card(props: { scenario: Scenario }) {
  return (
    <view
      width={1720}
      height={196}
      borderRadius={8}
      color={0x252c37ff}
      transition={{ color: true }}
      $focus={{ color: 0x33405aff }}
    >
      <text x={24} y={18} fontSize={28} color={theme.textPrimary}>
        {props.scenario.title}
      </text>
      <text x={24} y={56} fontSize={19} width={210} maxHeight={92} contain="both" color={theme.textSecondary}>
        {props.scenario.note}
      </text>
      <text x={24} y={162} fontSize={19} color={props.scenario.changes ? theme.warning : theme.success}>
        {props.scenario.verdict}
      </text>
      <view x={250} y={18}>
        <Panel scenario={props.scenario} after={false} />
      </view>
      <view x={990} y={18}>
        <Panel scenario={props.scenario} after={true} />
      </view>
    </view>
  );
}

const FlexJustifyWidthPage = () => {
  onMount(() => {
    setGlobalBackground("#0e1218");
  });

  return (
    <view width={1920} height={1080}>
      <text x={150} y={14} fontSize={40} color={theme.textPrimary}>
        Flex justifyContent without a width - PR #51
      </text>
      <text x={150} y={66} fontSize={22} color={theme.textSecondary}>
        solid-tv/solid#51 - a no-width flex row seeds w=0 today, so every justify mode except flexStart has no free
        space to distribute
      </text>

      <text x={400} y={108} fontSize={26} color={theme.error}>
        NOW - @solidtv/solid 1.5.2
      </text>
      <text x={1140} y={108} fontSize={26} color={theme.success}>
        AFTER - PR #51
      </text>
      <view x={150} y={146} width={1720} height={2} color={0x3a4252ff} />

      <view clipping y={156} x={150} width={1730} height={876}>
        <Column scroll="auto" gap={16} autofocus>
          <For each={scenarios}>{(scenario) => <Card scenario={scenario} />}</For>
        </Column>
      </view>

      <text x={150} y={1042} fontSize={19} color={theme.textSecondary}>
        AFTER renders width={"{parentWidth - x}"} on the container - the one value PR #51 changes. No non-flexStart
        branch of flex.ts resizes the container afterwards, so this is what the patched library produces.
      </text>
    </view>
  );
};

export default FlexJustifyWidthPage;
