import { ElementNode, Show, assertTruthy, setActiveElement } from "@solidtv/solid";
import { Column, Row } from "@solidtv/solid/primitives";

import { createEffect, on, createSignal } from "solid-js";
import { TileRow, Button } from "../components";
import { setGlobalBackground } from "../state";
import ContentBlock from "../components/ContentBlock";
import { useNavigate } from "@solidjs/router";
import styles from "../styles";
//import * as player from "../video";

const Entity = (props) => {
  const [backdropAlpha, setBackdropAlpha] = createSignal(0);
  const [playFocused, setPlayFocused] = createSignal(false);
  const navigate = useNavigate();

  createEffect(
    on(
      props.data.entity,
      (data) => {
        setGlobalBackground(data.backgroundImage);
      },
      { defer: true }
    )
  );

  const columnY = 640;

  const Backdrop = {
    colorTop: "#0E1218",
    colorBottom: "#1A1F27",
    alpha: 0,
    width: 2000,
    height: 1080,
    x: -180,
    y: columnY,
    zIndex: 1
  };

  function onRowFocus(this: ElementNode) {
    this.children[this.selected || 0].setFocus();
    columnRef.y = columnY;
    backdropRef.y = columnY;
    backdropRef.alpha = 0;
  }

  function onRowFocusAnimate(this: ElementNode) {
    this.children[this.selected || 0].setFocus();
    columnRef.y = 180;
    backdropRef.y = 0;
    backdropRef.alpha = 0.99;
  }

  function onEnter(this: ElementNode) {
    let entity = this.children.find((c) => c.states.has("focus"));
    assertTruthy(entity && entity.item?.href);
    navigate(entity.item.href as string);
  }

  function onEscape() {
    //closeVideo();
    // Set focus back to SolidTV app
    document.getElementsByTagName("canvas")[0].focus();
    entityActions.setFocus();
    setBackdropAlpha(0);
  }

  function onEnterTrailer() {
    navigate("/player/123");
  }

  let columnRef, backdropRef, entityActions;

  /**
   * I used to have keyed on Show - This would cause the entire tree to be destroyed and recreated. Without keyed, the data is diffed and the nodes are reused and passed in new props.
   * Only one element gets deleted and recreated - a text node for reviews.
   *
   * However this causes problems with elements which have internal state like Row & Column because the selected does not get reset.
   */
  return (
    <Show when={props.data.entity()}>
      <view
        x={170}
        onUp={() => entityActions.setFocus()}
        onEscape={onEscape}
        announce={[props.data.entity().heroContent.title, "PAUSE-1", props.data.entity().heroContent.description]}
        announceContext="Press LEFT or RIGHT to review items, press UP or DOWN to review categories, press CENTER to select"
      >
        <ContentBlock y={260} marquee={playFocused()} content={props.data.entity().heroContent}></ContentBlock>
        <Row
          ref={entityActions}
          y={500}
          scroll="none"
          height={90}
          width={640}
          gap={40}
          onDown={() => columnRef.setFocus()}
          onEnter={onEnterTrailer}
        >
          <Button width={300} autofocus={props.data.entity()} onFocusChanged={setPlayFocused}>
            Play
          </Button>
          <Button width={300}>Resume</Button>
        </Row>

        <Column ref={columnRef} x={0} y={columnY} style={styles.Column} gap={80} height={880} scroll="none" zIndex={5}>
          <Show when={props.data.recommendations() && props.data.credits()}>
            <text skipFocus style={styles.RowTitle}>
              Recommendations
            </text>
            <TileRow
              onFocus={onRowFocus}
              onEnter={onEnter}
              announce={"Recommendations"}
              group={"recommendation"}
              items={props.data.recommendations()}
              width={1620}
            />
            <text skipFocus style={styles.RowTitle}>
              Cast and Crew
            </text>
            <TileRow
              announce={"Cast and Crew"}
              onFocus={onRowFocusAnimate}
              onEnter={onEnter}
              items={props.data.credits()}
              width={1620}
            />
          </Show>
        </Column>
        <view ref={backdropRef} style={Backdrop} transition={{ alpha: true, y: true }} />
      </view>
      <view
        alpha={backdropAlpha()}
        colorTop={"#0E1218"}
        colorBottom={"#1A1F27"}
        skipFocus
        zIndex={200}
        transition={{ alpha: true }}
      />
    </Show>
  );
};

export default Entity;
