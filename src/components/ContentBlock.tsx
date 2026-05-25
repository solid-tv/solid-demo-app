
import { Marquee } from "@solidtv/solid/primitives";
import { For, Show } from "solid-js";
import theme from "theme";

const blockWidth = 900;

const ContentBlockStyle = {
  display: "flex",
  flexDirection: "column",
  flexBoundary: "fixed",
  width: blockWidth,
  height: 220,
  gap: 16
};

const HeadlineStyles = {
  ...theme.typography.display2,
  fontFamily: "Roboto",
  fontWeight: 700,
  maxLines: 1,
  width: blockWidth
};
const Headline = (props) => <Marquee {...props} textProps={HeadlineStyles}></Marquee>;

const DescriptionStyles = {
  ...theme.typography.body1,
  fontFamily: "Roboto",
  fontWeight: 400,
  lineHeight: 32,
  width: blockWidth,
  maxLines: 3,
  contain: "width"
};

const BadgeStyle = {
  fontSize: 16,
  lineHeight: 36
};

const Description = (props) => (
  <text {...props} style={DescriptionStyles}>
    {props.children}
  </text>
);

export const Badge = (props) => {
  console.log(props.children);
  return (
    <view
      {...props}
      style={{
        color: 0x00000099,
        borderRadius: 8,
        padding: [0, 13],
        border: { width: 2, color: 0xffffffff },
        display: "flex",
        height: 36,
        width: 45
      }}
    >
      <text style={BadgeStyle}>{props.children}</text>
    </view>
  );
};

const MetaTextStyle = {
  ...theme.typography.body2,
  fontFamily: "Roboto",
  fontWeight: 400
};

const Metadata = (props) => (
  <view
    style={{
      display: "flex",
      flexDirection: "row",
      gap: 18,
      width: blockWidth,
      height: 48
    }}
  >
    <view y={-4} src="./assets/stars.png" width={188} height={31}></view>
    <view y={-4} flexItem={false} clipping width={(188 * props.voteAverage) / 10} height={31}>
      <view src="./assets/stars-full.png" width={188} height={31}></view>
    </view>
    <text style={MetaTextStyle}>{props.voteCount} reviews</text>
    <text style={MetaTextStyle}>{props.metaText}</text>
    <For each={props.badges}>{(item) => <Badge y={-5}>{item}</Badge>}</For>
  </view>
);

const ContentBlock = (props) => (
  <view id="contentBlock" style={ContentBlockStyle} {...props}>
    <Headline marquee={props.marquee}>{props.content.title}</Headline>
    <Description>{props.content.description}</Description>
    <Show when={props.content.voteCount}>
      <Metadata
        metaText={props.content.metaText}
        badges={props.content.badges}
        voteCount={props.content.voteCount}
        voteAverage={props.content.voteAverage}
      />
    </Show>
  </view>
);

export default ContentBlock;
