import { Text, For } from "@solidtv/solid";
import { Column, Row } from "@solidtv/solid/primitives";
import { Show, createSignal } from "solid-js";

const Items = [
  "Mary",
  "had",
  "a",
  "little",
  "lamb",
  "her",
  "fleece",
  "was",
  "white",
  "as",
  "snow"
];
export const styles = {
  PageContainer: {
    width: 1920,
    height: 1080,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 99
  }
} as const;

const SpecialFont = {
  color: 0xff0000ff,
  $focus: { color: 0xffffffff }
};

export default () => {
  const [lazyShow, setLazyShow] = createSignal(false);
  let PageLoader;

  setTimeout(() => {
    setLazyShow(true);
    PageLoader.alpha = 0;
  }, 2000);

  return (
    <Column display="block">
      <view ref={PageLoader} style={styles.PageContainer}>
        <text>Center - gif doesnt animate</text>
        <view autosize src="./assets/spinner.gif" />
        <text>Spinner</text>
      </view>

      <Row
        scroll="always"
        gap={20}
        selected={2}
        autofocus
        x={150}
        y={50}
        transition={{ x: { duration: 350 } }}
      >
        <For each={Items}>
          {(item, index) => (
            <view
              width={100}
              height={200}
              style={{ color: 0xff0000ff, $focus: { color: 0xffffffff } }}
            />
          )}
        </For>
      </Row>

      <Show when={lazyShow()}>
        <Row
          scroll="none"
          gap={20}
          selected={2}
          autofocus
          x={150}
          y={350}
          transition={{ x: { duration: 350 } }}
        >
          <For each={Items}>
            {(item, index) => (
              <view
                width={100}
                height={200}
                style={{ color: 0xff0000ff, $focus: { color: 0xffffffff } }}
              />
            )}
          </For>
        </Row>
      </Show>

      <Show when={lazyShow()}>
        <Row
          scroll="none"
          gap={20}
          selected={2}
          x={150}
          y={650}
          transition={{ x: { duration: 350 } }}
        >
          <For each={Items}>
            {(item, index) => (
              <text style={SpecialFont} fontSize={24}>
                {item} {lazyShow() ? "Add Text" : ""}
              </text>
            )}
          </For>
        </Row>
      </Show>

      <Show when={lazyShow()}>
        <Column scroll="none" gap={20} selected={2} x={350} y={450}>
          <For each={Items}>
            {(item, index) => (
              <text style={SpecialFont} fontSize={24}>
                {item}
              </text>
            )}
          </For>
        </Column>
      </Show>
    </Column>
  );
};
