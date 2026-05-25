import { createSignal, onMount } from "solid-js";
import { ElementNode } from "@solidtv/solid";
import { Column, Row } from "@solidtv/solid/primitives";
import Icon from "../components/Icon";
import { setGlobalBackground } from "../state";
import theme from "theme";

interface ButtonData {
  title: string;
  icon: string;
  baseColor: string;
  focusColor: string;
}

const buttonsData: ButtonData[] = [
  {
    title: "Lab Experiments",
    icon: "experiment",
    baseColor: "#1E1A2E",
    focusColor: "#8B5CF6"
  },
  {
    title: "Trending Now",
    icon: "trending",
    baseColor: "#0D2030",
    focusColor: "#06B6D4"
  },
  {
    title: "Live TV Shows",
    icon: "tv",
    baseColor: "#0F2820",
    focusColor: "#10B981"
  },
  {
    title: "Featured Movie",
    icon: "movie",
    baseColor: "#2C1C16",
    focusColor: "#F97316"
  },
  {
    title: "System Perf",
    icon: "perf",
    baseColor: "#2A1320",
    focusColor: "#EC4899"
  }
];

function CustomIconButton(props: {
  title: string;
  icon: string;
  baseColor: string;
  focusColor: string;
  autofocus?: boolean;
}) {
  const [focused, setFocused] = createSignal(false);

  return (
    <view
      autofocus={props.autofocus}
      onFocusChanged={setFocused}
      announce={[props.title, "button"]}
      width={260}
      height={90}
      borderRadius={16}
      color={focused() ? props.focusColor : props.baseColor}
      display="flex"
      flexDirection="row"
      alignItems="center"
      padding={[0, 20]}
      gap={16}
      transition={{
        color: { duration: 200, easing: "ease-out" },
        scale: { duration: 200, easing: "ease-out" },
        border: { duration: 200, easing: "ease-out" },
        shadow: { duration: 200, easing: "ease-out" }
      }}
      border={{ width: 2, color: focused() ? "#ffffff" : "#ffffff1a" }}
      shadow={{
        color: focused() ? `${props.focusColor}80` : "#00000033",
        projection: focused() ? [0, 12, 24, -6] : [0, 6, 12, -3]
      }}
      scale={focused() ? 1.08 : 1.0}
    >
      <Icon
        name={props.icon}
        scale={0.45}
        color={focused() ? "#ffffff" : "#ffffffb3"}
      />
      <text
        fontSize={20}
        fontWeight="bold"
        color={focused() ? "#ffffff" : "#ffffffcc"}
        contain="width"
        width={160}
        transition={{
          color: { duration: 200, easing: "ease-out" }
        }}
      >
        {props.title}
      </text>
    </view>
  );
}

const CustomButtonsPage = () => {
  onMount(() => {
    setGlobalBackground(theme.backgroundDark);
  });

  function onFocus(this: ElementNode) {
    this.children[this.selected || 0].setFocus();
  }

  return (
    <Column
      x={170}
      y={150}
      gap={30}
      height={800}
      width={1680}
      autofocus
      scroll="none"
    >
      {/* Title & Description */}
      <view display="flex" flexDirection="column" gap={10} skipFocus>
        <text
          fontSize={48}
          fontWeight="bold"
          color={theme.textPrimary}
        >
          Custom Interactive Buttons
        </text>
        <text
          fontSize={22}
          color={theme.textSecondary}
          width={1200}
          contain="width"
        >
          A premium grid of custom styled buttons featuring distinct icons, rich brand colors, smooth focus states, and micro-animations.
        </text>
      </view>

      {/* Row 1 of 3 Buttons */}
      <Row
        y={20}
        gap={24}
        width={1680}
        height={120}
        display={"flex" as const}
        justifyContent={"flexStart" as const}
        alignItems={"center" as const}
        onFocus={onFocus}
      >
        {buttonsData.slice(0, 3).map((btn, i) => (
          <CustomIconButton
            title={btn.title}
            icon={btn.icon}
            baseColor={btn.baseColor}
            focusColor={btn.focusColor}
            autofocus={i === 0}
          />
        ))}
      </Row>

      {/* Row 2 of 3 Buttons */}
      <Row
        y={40}
        gap={24}
        width={1680}
        height={120}
        display={"flex" as const}
        justifyContent={"flexStart" as const}
        alignItems={"center" as const}
        onFocus={onFocus}
      >
        {buttonsData.slice(3, 6).map((btn, i) => (
          <CustomIconButton
            title={btn.title}
            icon={btn.icon}
            baseColor={btn.baseColor}
            focusColor={btn.focusColor}
          />
        ))}
      </Row>
    </Column>
  );
};

export default CustomButtonsPage;
