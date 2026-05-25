
import { Column, Row } from "@solidtv/solid/primitives";
import { createSignal, For, onMount } from "solid-js";

const Card = (props: { index: number }) => {
  const [focused, setFocused] = createSignal(false);

  return (
    <view
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
      <text fontSize={20} color="#ffffffff">
        Item {String(props.index)}
      </text>
      <view color="#0000ffff" padding={[0, 8]} borderRadius={4} height={40} display="flex" alignItems="center">
        <text fontSize={16} color="#ffffffff">
          Button
        </text>
      </view>
    </view>
  );
};

export default function ComplexFlex() {
  performance.mark("complexflex-start");

  const items = Array.from({ length: 8 }).map((_, i) => i);
  const X = 8;
  const initialRows = Array.from({ length: X }).map((_, i) => i);
  const [rows, setRows] = createSignal<number[]>(initialRows);

  onMount(() => {
    performance.mark("complexflex-end");
    performance.measure("ComplexFlex Render", "complexflex-start", "complexflex-end");
    const measure = performance.getEntriesByName("ComplexFlex Render").slice(-1)[0];
    console.log(`ComplexFlex Render duration: ${measure?.duration}ms`);

    const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

    const runRecreations = async () => {
      await sleep(100);
      for (let i = 0; i < 3; i++) {
        console.log(`Resetting rows to [] (Recreation step ${i + 1})`);
        setRows([]);
        await sleep(100);

        console.log(`Recreating rows to full (Recreation step ${i + 1})`);
        setRows(initialRows);
        await sleep(100);
      }
    };

    runRecreations();
  });

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
      <text skipFocus fontSize={40} color="#ffffffff" marginBottom={20}>
        Complex Flex Layout
      </text>
      <For each={rows()}>
        {() => (
          <Row width={1400} gap={20} scroll="none">
            <For each={items}>{(item) => <Card index={item} />}</For>
          </Row>
        )}
      </For>
    </Column>
  );
}
