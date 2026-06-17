import { createSignal, createSelector, For, children, createEffect } from "solid-js";
import { ElementNode, Text, assertTruthy } from "@solidtv/solid";
import { Column, Row, useFocusStack } from "@solidtv/solid/primitives";
import { useNavigate } from "@solidjs/router";
import { Announcer } from "@solidtv/solid/primitives";
import styles from "../styles";

const Portal = (props) => {
  let portalRef;
  const navigate = useNavigate();
  const { storeFocus, restoreFocus } = useFocusStack();
  const resolvedChildren = children(() => props.children);
  const isFirst = createSelector(() => {
    return 0;
  });

  function onEnter(this: ElementNode) {
    let entity = this.children[this.selected || 0];
    assertTruthy(entity && entity.id);
    navigate("/" + entity.id);
  }

  const basicDemos = [
    {
      title: "Focus Basics",
      id: "focusbasics",
      description: "Quick guide on Focus"
    },
    {
      title: "Key Handling",
      id: "keyhandling",
      description: "Understanding Key Handling"
    },
    {
      title: "Focus Handling",
      id: "focushandling",
      description: "Dealing with Focus Handling"
    },
    {
      title: "Loop Basics",
      id: "loops",
      description: "Understanding For, Index, Lazy and List"
    },
    {
      title: "Layout Basics",
      id: "layout",
      description: "Quick guide on Layout"
    },
    {
      title: "Positioning",
      id: "positioning",
      description: "Positioning Elements"
    },
    {
      title: "Create Elements",
      id: "create",
      description: "Testing Show + children + inserting text"
    },
    {
      title: "Destroy",
      id: "destroy",
      description: "Using onDestroy to animate destruction"
    },
    {
      title: "Viewport",
      id: "viewport",
      description: "Events going in and out of viewport"
    }
  ];

  const textDemos = [
    { title: "Text", id: "text", description: "Text layout with flexbox" },
    {
      title: "TextPoster",
      id: "textposter",
      description: "Text layout with flex and Poster"
    },
    {
      title: "Text Centering",
      id: "textcentering",
      description: "verticalAlign, textBaselineMode, and flex alignment"
    },
    {
      title: "Custom Buttons",
      id: "custombuttons",
      description: "6 custom buttons with text and icons"
    }
  ];

  const flexDemos = [
    { title: "Flex Row", id: "flex", description: "Flex Row Implementation" },
    {
      title: "Flex Column",
      id: "flexcolumn",
      description: "Flex Column Implementation"
    },
    { title: "Flex Grow", id: "flexgrow", description: "Flex Grow Examples" },
    {
      title: "Flex Row Vertical Align",
      id: "flexsize",
      description: "Flex Row Vertical Align Implementation"
    },
    {
      title: "Flex Column Vertical Align",
      id: "flexcolumnsize",
      description: "Flex Column Vertical Align Implementation"
    },
    {
      title: "Flex Menu",
      id: "flexmenu",
      description: "Flex Menu On Right Implementation"
    },
    {
      title: "Flex Layout Tests",
      id: "superflex",
      description: "Complicated flex layouts"
    },
    { title: "Gradients", id: "gradients", description: "Basic Gradients" },
    {
      title: "Transitions",
      id: "transitions",
      description: "Comparing different Transitions"
    },
    {
      title: "Complex Flex",
      id: "complexflex",
      description: "Complex Flex Layout with ~400 Nodes"
    },
    {
      title: "ComplexFlexCaps",
      id: "complexflexcaps",
      description: "Complex Flex Layout using View and Text"
    }
  ];

  const advancedDemos = [
    { title: "TMDB", id: "examples/tmdb", description: "TMDB Example" },
    {
      title: "Login and Forms",
      id: "login",
      description: "Login with forms Example"
    },
    {
      title: "Small Image",
      id: "image-performance",
      description: "Performance test for loading images"
    },
    {
      title: "Large Image",
      id: "large-image-performance",
      description: "Performance test for loading 4 large images"
    },
    {
      title: "Mixed Image",
      id: "mixed-image-performance",
      description: "1 Large Image + 10 Posters"
    },
    {
      title: "Texture KTX",
      id: "texture-compression-performance",
      description: "Performance test for loading 25 KTX images"
    },
    {
      title: "Nested Modal",
      id: "nested",
      description: "Nested Right Modal Example"
    },
    {
      title: "Components",
      id: "components",
      description: "Reusable Components"
    },
    {
      title: "Grid Primitive for Layout",
      id: "tmdbgrid",
      description: "Using Grid component"
    },
    { title: "Grid", id: "grid", description: "Infinite Scroll Grid" },
    { title: "Virtual", id: "virtual", description: "Virtual Rows" },
    {
      title: "Infinite Items",
      id: "infinite",
      description: "Learn how to manage large list of items"
    },
    {
      title: "Firebolt Integration",
      id: "firebolt",
      description: "Firebolt API Integration"
    },
    {
      title: "Keep Alive",
      id: "keepalive",
      description: "Reuse component between layouts"
    },
    {
      title: "Suspense",
      id: "suspense",
      description: "Using Suspense to load data"
    },
    { title: "Tags", id: "tags", description: "Tags Page" },
    {
      title: "Countdown Timer",
      id: "countdown",
      description: "Radial progress shader countdown"
    }
  ];

  function DemoTile(props) {
    const Container = {
      display: "flex",
      flexDirection: "row",
      height: 200,
      borderRadius: 6,
      color: "#182b44",
      transition: { color: true },
      $focus: {
        color: 0xffffffff
      }
    };
    const [hasFocus, setHasFocus] = createSignal(false);

    return (
      <view {...props} onFocusChanged={setHasFocus} style={Container}>
        <text fontSize={84} color={hasFocus() ? 0x000000ff : 0xffffffff}>
          {props.index}
        </text>
        <text fontSize={84} color={hasFocus() ? 0x000000ff : 0xffffffff}>
          {props.index}
        </text>
        <text fontSize={42} width={340} maxHeight={42} color={hasFocus() ? 0x000000ff : 0xffffffff}>
          {props.title}
        </text>
        <text fontSize={28} width={330} contain="width" color={hasFocus() ? 0x000000ff : 0xffffffff}>
          {props.description}
        </text>
      </view>
    );
  }

  createEffect(() => {
    if (!resolvedChildren()) {
      restoreFocus();
    }
  });

  setTimeout(() => {
    Announcer.speak("Welcome to the examples");
  }, 1000);

  return (
    <>
      <view
        ref={portalRef}
        colorTop={0x446b9eff}
        colorBottom={0x2c4f7cff}
        onBlur={storeFocus}
        hidden={Boolean(resolvedChildren())}
      >
        <view x={120}>
          <view src="./assets/solidjs.png" width={101} height={90} y={40} />
          <text fontSize={90} x={110} y={40}>
            Examples
          </text>
          <view y={140} height={1} width={1800} color={0xe8d7f9ff} />
        </view>
        <view clipping y={146} x={150}>
          <Column scroll="auto" y={20} x={20} gap={20} autofocus={!resolvedChildren()}>
            <view forwardFocus={1} height={400}>
              <text style={styles.RowTitle} fontSize={42}>
                Core Concepts
              </text>
              <Row y={48} onEnter={onEnter} gap={40} height={320} flexBoundary="contain" scroll="always">
                <For each={basicDemos}>{(demo, i) => <DemoTile index={i()} {...demo} />}</For>
              </Row>
            </view>
            <view forwardFocus={1} height={400}>
              <text style={styles.RowTitle} fontSize={42}>
                Text
              </text>
              <Row y={48} onEnter={onEnter} gap={40} height={320} flexBoundary="contain" scroll="always">
                <For each={textDemos}>{(demo, i) => <DemoTile index={i()} {...demo} />}</For>
              </Row>
            </view>
            <view forwardFocus={1} height={400}>
              <text style={styles.RowTitle} fontSize={42}>
                Flexbox & Styling
              </text>
              <Row y={48} onEnter={onEnter} gap={40} height={320} flexBoundary="contain" scroll="always">
                <For each={flexDemos}>{(demo, i) => <DemoTile index={i()} {...demo} />}</For>
              </Row>
            </view>
            <view forwardFocus={1} height={400}>
              <text style={styles.RowTitle} fontSize={42}>
                Patterns & Examples
              </text>
              <Row y={48} onEnter={onEnter} gap={40} height={320} flexBoundary="contain" scroll="always">
                <For each={advancedDemos}>{(demo, i) => <DemoTile index={i()} {...demo} />}</For>
              </Row>
            </view>
          </Column>
        </view>
      </view>
      {resolvedChildren()}
    </>
  );
};

export default Portal;
