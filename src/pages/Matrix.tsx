import { For } from "solid-js";

import { Column, Row } from "@solidtv/solid/primitives";

const blockStyle = {
  color: 0x5c4dffff,
  scale: 1,
  $focus: { color: 0xff00ffff, scale: 1.1 },
  transition: { color: { duration: 0.3 }, scale: { duration: 0.3 } }
};
const Matrix = () => {
  const rows = Array.from({ length: 1 });
  const blocks = Array.from({ length: 6 });

  return (
    <view color={0x1e1e1eff} width={1920} height={1080}>
      <Column x={160} y={100} gap={50} autofocus>
        <For each={rows}>
          {() => (
            <Row gap={30} height={250}>
              <For each={blocks}>{() => <view width={150} height={250} style={blockStyle} />}</For>
            </Row>
          )}
        </For>
      </Column>
    </view>
  );
};

export default Matrix;
