import { IntrinsicNodeStyleProps, IntrinsicTextNodeStyleProps } from "@solidtv/solid";
import { createSignal, onMount } from "solid-js";
import { setGlobalBackground } from "../state";

const knownVersions: (number | "Current")[] = ["Current", 300, 316, 320, 321, 322, 323, 324, 325, 326, 330, 331, 340];

const RendererVersionsPage = () => {
  const [version, setVersion] = createSignal<number | "Current">("Current");

  onMount(() => {
    setGlobalBackground("#000000");
  });

  const onRight = () => {
    const current = version();
    const index = knownVersions.indexOf(current);
    if (index >= 0 && index < knownVersions.length - 1) {
      setVersion(knownVersions[index + 1]);
    } else {
      setVersion(knownVersions[0]);
    }
    return true;
  };

  const onLeft = () => {
    const current = version();
    const index = knownVersions.indexOf(current);
    if (index > 0) {
      setVersion(knownVersions[index - 1]);
    } else {
      setVersion(knownVersions[knownVersions.length - 1]);
    }
    return true;
  };

  const onUp = () => {
    setVersion((v) => (v === "Current" ? 341 : v + 1));
    return true;
  };

  const onDown = () => {
    setVersion((v) => (v === "Current" ? 339 : Math.max(0, v - 1)));
    return true;
  };

  const onEnter = () => {
    if (version() === "Current") {
      window.location.hash = "#/benchmark";
    } else {
      window.location.href = `https://solid-tv.github.io/solid-demo-app/${version()}/#/benchmark`;
    }
    return true;
  };

  const Container = {
    width: 1000,
    height: 500,
    x: 460,
    y: 200,
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  } satisfies IntrinsicNodeStyleProps;

  const Title = {
    fontSize: 48,
    fontWeight: "bold",
    marginBottom: 40
  } satisfies IntrinsicTextNodeStyleProps;

  const VersionText = {
    fontSize: 160,
    fontWeight: "bold",
    color: "#00E0FF",
    marginBottom: 40
  } satisfies IntrinsicTextNodeStyleProps;

  const Instructions = {
    fontSize: 28,
    color: "#bbbbbb",
    textAlign: "center",
    lineHeight: 40,
    marginBottom: 10
  } satisfies IntrinsicTextNodeStyleProps;

  return (
    <view style={Container} autofocus onRight={onRight} onLeft={onLeft} onUp={onUp} onDown={onDown} onEnter={onEnter}>
      <text style={Title}>Benchmark - Select Renderer Version To Run</text>
      <text style={VersionText}>{version().toString()}</text>
      <text style={Instructions}>Use LEFT / RIGHT arrows to select a known version</text>
      <text style={Instructions}>Use UP / DOWN arrows to select a custom number</text>
      <text style={Instructions}>Press ENTER to launch benchmark for this version</text>
    </view>
  );
};

export default RendererVersionsPage;
