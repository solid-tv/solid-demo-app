import { createEffect, on, createSignal, createMemo } from "solid-js";
import {
  ElementNode, activeElement, NodeProps } from "@solidtv/solid";
import { Grid } from "@solidtv/solid/primitives";
import { setGlobalBackground } from "../state";
import ContentBlock from "../components/ContentBlock";
import { debounce } from "@solid-primitives/scheduled";
import { Poster } from "../components";

const TMDB = (props) => {
  const [heroContent, setHeroContent] = createSignal({});
  let contentBlock,
    solidLogo,
    firstRun = true;

  const delayedBackgrounds = debounce(setGlobalBackground, 800);
  const delayedHero = debounce(
    (content: {}) => setHeroContent(content || {}),
    600
  );

  createEffect(
    on(
      activeElement,
      (elm) => {
        if (!elm) return;

        if (firstRun) {
          elm.backdrop && setGlobalBackground(elm.backdrop);
          elm.heroContent && setHeroContent(elm.heroContent);
          firstRun = false;
        } else {
          elm.backdrop && delayedBackgrounds(elm.backdrop);
          elm.heroContent && delayedHero(elm.heroContent);
        }
      },
      { defer: true }
    )
  );

  function onSelectedChanged(this: ElementNode, selectedIndex, column, row) {
    const values =
      selectedIndex === 0 ? { y: 300, alpha: 1 } : { y: 200, alpha: 0 };
    contentBlock
      .animate(values, { duration: 300, easing: "ease-in-out" })
      .start();

    const values2 =
      selectedIndex === 0 ? { y: 80, alpha: 1 } : { y: 0, alpha: 0 };
    solidLogo
      .animate(values2, { duration: 300, easing: "ease-in-out" })
      .start();
  }

  const items = createMemo(() => {
    return props.data.rows.map((row) => row.items()).flat();
  });

  return (
    <>
      <view
        ref={solidLogo}
        width={300}
        height={150}
        x={162}
        y={80}
        zIndex={105}
      >
        <text x={80} fontSize={28} color={0xf6f6f699}>
          Built with
        </text>
        <view y={32} src="./assets/solidWord.png" width={280} height={52} />

        <view x={0} y={110} src="./assets/tmdb.png" width={80} height={41} />
        <text
          x={90}
          y={110}
          contain="width"
          width={160}
          fontSize={12}
          color={0xf6f6f699}
        >
          This product uses the TMDB API but is not endorsed or certified by
          TMDB.
        </text>
      </view>

      <ContentBlock
        ref={contentBlock}
        y={300}
        x={162}
        content={heroContent()}
      />
      <view x={165} y={540} clipping>
        <Grid
          x={12}
          y={12}
          autofocus={items()}
          itemWidth={200}
          items={items()}
          columns={6}
          itemOffset={36}
        >
          {(props: any) => <Poster {...props} />}
        </Grid>
      </view>
    </>
  );
};

export default TMDB;
