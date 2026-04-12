import { Text, View, IntrinsicNodeStyleProps, IntrinsicTextNodeStyleProps } from "@solidtv/solid";
import { createSignal, onMount } from "solid-js";
import { setGlobalBackground } from "../state";

const knownVersions = [300, 316, 320, 321, 322, 323, 324, 325, 326, 330, 331, 340];

const RendererVersionsPage = () => {
  const [version, setVersion] = createSignal(340);

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
    setVersion((v) => v + 1);
    return true;
  };

  const onDown = () => {
    setVersion((v) => Math.max(0, v - 1));
    return true;
  };

  const onEnter = () => {
    window.location.href = `https://lightning-tv.github.io/solid-demo-app/${version()}/#/benchmark`;
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
    <View style={Container} autofocus onRight={onRight} onLeft={onLeft} onUp={onUp} onDown={onDown} onEnter={onEnter}>
      <Text style={Title}>Benchmark - Select Renderer Version To Run</Text>
      <Text style={VersionText}>{version().toString()}</Text>
      <Text style={Instructions}>Use LEFT / RIGHT arrows to select a known version</Text>
      <Text style={Instructions}>Use UP / DOWN arrows to select a custom number</Text>
      <Text style={Instructions}>Press ENTER to launch benchmark for this version</Text>
    </View>
  );
};

export default RendererVersionsPage;
