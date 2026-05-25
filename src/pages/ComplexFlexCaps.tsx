import { View, Text } from "@solidtv/solid";
import { Column, Row } from "@solidtv/solid/primitives";
import { createSignal, For, onMount } from "solid-js";

const Card = (props: { index: number }) => {
  const [focused, setFocused] = createSignal(false);

  return (
    <View
      width={180}
      height={100}
      color={focused() ? "#33333399" : "#333333ff"}
      display="flex"
      flexDirection="column"
      alignItems="center"
      gap={10}
      padding={[0, 10]}
      onFocusChanged={setFocused}
    >
      <Text fontSize={20} color="#ffffffff">
        Item {String(props.index)}
      </Text>
      <View color="#0000ffff" padding={[0, 8]} borderRadius={4} height={40} display="flex" alignItems="center">
        <Text fontSize={16} color="#ffffffff">
          Button
        </Text>
      </View>
    </View>
  );
};

export default function ComplexFlexCaps() {
  performance.mark("complexflexcaps-start");

  onMount(() => {
    performance.mark("complexflexcaps-end");
    performance.measure("ComplexFlexCaps Render", "complexflexcaps-start", "complexflexcaps-end");
    const measure = performance.getEntriesByName("ComplexFlexCaps Render").slice(-1)[0];
    console.log(`ComplexFlexCaps Render duration: ${measure?.duration}ms`);
  });

  const items = Array.from({ length: 8 }).map((_, i) => i);

  return (
    <Column
      width={1720}
      color="#000000ff"
      display="flex"
      flexDirection="column"
      height={100}
      gap={20}
      y={50}
      x={170}
      autofocus
      scroll="none"
      selected={1}
    >
      <Text skipFocus fontSize={40} color="#ffffffff" marginBottom={20}>
        Complex Flex Layout Capped View
      </Text>
      <Row width={1400} gap={20} scroll="none">
        <For each={items}>{(item) => <Card index={item} />}</For>
      </Row>
      <Row width={1400} gap={20} scroll="none">
        <For each={items}>{(item) => <Card index={item} />}</For>
      </Row>
      <Row width={1400} gap={20} scroll="none">
        <For each={items}>{(item) => <Card index={item} />}</For>
      </Row>
      <Row width={1400} gap={20} scroll="none">
        <For each={items}>{(item) => <Card index={item} />}</For>
      </Row>
      <Row width={1400} gap={20} scroll="none">
        <For each={items}>{(item) => <Card index={item} />}</For>
      </Row>
      <Row width={1400} gap={20} scroll="none">
        <For each={items}>{(item) => <Card index={item} />}</For>
      </Row>
      <Row width={1400} gap={20} scroll="none">
        <For each={items}>{(item) => <Card index={item} />}</For>
      </Row>
    </Column>
  );
}
