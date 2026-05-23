import { IntrinsicNodeStyleProps, Text, combineStyles, hexColor } from "@solidtv/solid";
import { Show, children, createSignal, onMount } from "solid-js";
import { setGlobalBackground } from "../state";

const CreatePage = () => {
  const OverviewContainer = {
    width: 900,
    height: 500,
    y: 50,
    x: 150,
    gap: 25,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flexStart",
    color: hexColor("00000000")
  } satisfies IntrinsicNodeStyleProps;

  const SublineContainer = {
    width: 900,
    height: 36,
    gap: 6,
    display: "flex",
    flexDirection: "row",
    justifyContent: "flexStart",
    color: hexColor("00000000")
  } satisfies IntrinsicNodeStyleProps;

  const Title = {
    fontSize: 42
  };

  const Subline = {
    fontSize: 26
  };

  let myBox, childRef;
  onMount(() => {
    setGlobalBackground("#000000");
    myBox.animate({ x: 100 }, { duration: 2000 }).start();
  });

  const [insertTest, setInsertTest] = createSignal<string | undefined>();
  const [emptyTest, setEmptyTest] = createSignal<string | undefined>();

  setTimeout(() => {
    setInsertTest("- Inserted -");
    childRef
      .getChildById("child1")
      //.searchChildrenById('subChild') - more expensive version of getChildById
      ?.animate({ x: 600 }, { duration: 2000 })
      .start();
  }, 2000);

  const styleChild = {
    width: 400,
    height: 300,
    // Solid blue
    color: "#0000ff"
  } as const;

  const someOtherStyle = {
    // pretty red
    color: "#f54242",
    $focus: {
      // pretty blue
      color: "#4287f5"
    }
  };

  function ChildTest(props) {
    // This causes a parent not rendered error since we're rendering it twice in the template
    const resolved = children(() => props.children);
    return (
      <view
        {...props}
        style={combineStyles(someOtherStyle, props.style, styleChild)}
      >
        <view id="child1" width={100} height={100} color={"#ff0000"} y={25}>
          {resolved()}
          <view
            id="subChild"
            x={150}
            width={100}
            height={100}
            color={"#00ff00"}
          />
          <text>{props.title}</text>
        </view>
        <view width={100} height={100} color={"#ffff00"} y={175}>
          {resolved()}
        </view>
      </view>
    );
  }

  function PosTest(props) {
    return (
      <view {...props} width={400} height={400} color={"#0000ff"}>
        <view width={50} height={50} color={"#ff0000"} right={0}>
          <text fontSize={18}>Right</text>
        </view>
        <view width={50} height={50} color={"#ff0000"} bottom={0}>
          <text fontSize={18}>Bottom</text>
        </view>
        <view
          width={50}
          height={50}
          color={"#ff0000"}
          bottom={0}
          right={0}
          data={{ id: "BR" }}
        >
          <text fontSize={18}>BR</text>
        </view>
      </view>
    );
  }

  const borderStyles = {
    border: {
      width: 0,
      color: 0x05b2b626
    },
    borderRadius: 32
  } as const;

  const childTestPassedStyles = {
    // grey color
    color: "#cccccc",
    $focus: {
      // black
      color: "#000000"
    }
  };

  const childTestPassedStyles2 = {
    // white color
    color: "#ffffff",
    $focus: {
      // white something...
      color: "#f6f6cc"
    }
  };

  function hasFocus(elm) {
    // This doesnt work yet - need to make states reactive
    return elm.states.has("focus");
  }

  return (
    <>
    <view style={OverviewContainer}>
      <text style={Title}>Title of the Page</text>
      <view style={SublineContainer}>
        <text>{emptyTest()}</text>
        <text style={Subline}>Sub {insertTest()} Text</text>
        <Show when={insertTest()}>
          <view width={28} height={28} src={"./assets/rt-popcorn.png"}></view>
        </Show>
        <text style={Subline}>More Text</text>
      </view>
      <ChildTest
        autofocus
        ref={childRef}
        style={combineStyles(childTestPassedStyles2, childTestPassedStyles)}
      >
        <text>Child Test</text>
      </ChildTest>
      <view
        ref={myBox}
        style={borderStyles}
        width={100}
        height={100}
        color={"#00ff00"}
        x={900}
        y={400}
      />
      <PosTest x={100} y={100} />
    </view>
    <view x={1100} y={50} width={200} height={200} linearGradient={{
        colors: [0xffc107ff, 0xff9800ff, 0xff5252ff],
        angle: 4.1,
        stops: [0, 0.5, 1]
      }}>
      </view>
    </>
  );
};

export default CreatePage;
