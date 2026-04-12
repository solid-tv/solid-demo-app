import { View, Text } from "@solidtv/solid";
import { Row } from "@solidtv/solid/primitives";
import { createSignal } from "solid-js";

const Transition = () => {
  const [shift, setShift] = createSignal(false);

  const easing = "cubic-bezier(0.2,0.8,0.2,1)";

  return (
    <View x={160} y={80} autofocus>
      <Text fontSize={16} color={0xffffffff} y={-40} alpha={0.9}>
        Click a panel to toggle — the whole row and panels shift together
      </Text>

      {/* container that clips overflow so row sliding looks clean */}
      <View width={1000} height={500} clipping>
        <Row
          gap={0}
          x={shift() ? -500 : 0}
          transition={{ x: { duration: 600, easing } }}
          onClick={() => setShift((s) => !s)}
        >
          <View
            autofocus
            width={500}
            height={500}
            color={0x5eb2eaff}
            x={shift() ? -20 : 0}
            scale={shift() ? 0.98 : 1}
            transition={{ x: { duration: 600, easing }, scale: { duration: 600 } }}
            zIndex={2}
          >
            <Text fontSize={28} color={0xffffffff} y={230} x={0}>
              Left Panel
            </Text>
          </View>

          <View
            width={500}
            height={500}
            color={0x19191fff}
            x={shift() ? 20 : 0}
            scale={shift() ? 1.02 : 1}
            transition={{ x: { duration: 600, easing }, scale: { duration: 600 } }}
            zIndex={1}
            onFocusChanged={(focused: boolean) => setShift(focused)}
          >
            <Text fontSize={28} color={0xffffffff} y={230} x={0}>
              Right Panel
            </Text>
          </View>
        </Row>
      </View>
    </View>
  );
};

export default Transition;
