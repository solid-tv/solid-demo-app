import { type NodeStyles } from "@solidtv/solid";
import { Row } from "@solidtv/solid/primitives";
import { onMount } from "solid-js";
import { setGlobalBackground } from "../state";

const ButtonContainer: NodeStyles = {
  display: "flex",
  color: "#ffffff",
  alignItems: "center",
  padding: 32,
  gap: 8,
  height: 50,
  effects: {
    radius: { radius: 8 },
    border: {
      width: 2,
      color: "#000000CC"
    }
  }
};

const CircleContainer: NodeStyles = {
  height: 50,
  width: 50,
  color: "#ffffff",
  effects: {
    radius: { radius: 50 },
    border: {
      width: 2,
      color: "#000000CC"
    }
  }
};
const ButtonIcon = (props) => {
  return (
    <view style={ButtonContainer}>
      <view src={props.icon} width={26} height={26}></view>
      <text fontSize={28} lineHeight={50} color={"#000000"}>
        {props.children}
      </text>
    </view>
  );
};

const Button = (props) => {
  return (
    <view style={ButtonContainer}>
      <text fontSize={28} lineHeight={50} color={"#000000"}>
        {props.children}
      </text>
    </view>
  );
};

const CircleIcon = (props) => {
  return (
    <view style={CircleContainer}>
      <view
        x={25}
        y={25}
        mount={0.5}
        src={props.icon}
        width={30}
        height={30}
      ></view>
    </view>
  );
};

const TextPosterPage = () => {
  const styles = {
    detailPane: {
      x: 150,
      y: 63,
      width: 1326,
      height: 954,
    },
    detailTitle: {
      x: 50,
      y: 27,
      fontSize: 30,
      fontWeight: "bold"
    },
    detailImage: {
      width: 570,
      height: 839,
      x: 50,
      y: 80,
      borderRadius: 15
    },
    detailDescriptionPane: {
      x: 679,
      y: 80,
      width: 602,
      height: 839,
      display: "flex",
      flexDirection: "column",
      gap: 30
    },
    detailDescription: {
      width: 602,
      display: "flex"
    },
    detailDescriptionTitle: {
      width: 602,
      color: "#F0CB00",
      fontSize: 22,
      fontWeight: "bold"
    },
    detailDescriptionText: {
      width: 602,
      fontSize: 22
    }
  } as const;

  onMount(() => {
    setGlobalBackground("#000000");
  });

  return (
    <view id="TextPosterPage" style={styles.detailPane}>
      <text style={styles.detailTitle}>Movie Name</text>
      <view style={styles.detailImage} src="https://placehold.co/400x600.png" />
      <view style={styles.detailDescriptionPane}>
        <view style={styles.detailDescription}>
          <text style={styles.detailDescriptionTitle}>Release Date :</text>
          <text style={styles.detailDescriptionText}>10/10/2022</text>
        </view>

        <view style={styles.detailDescription}>
          <text style={styles.detailDescriptionTitle}>Genre :</text>
          <text style={styles.detailDescriptionText}> Action</text>
        </view>

        <text style={styles.detailDescriptionTitle}>Plot :</text>
        <text
          style={styles.detailDescriptionText}
          contain="both"
          maxLines={10}
          marginTop={-20}
          height={400}
          overflowSuffix="..."
        >
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata Lorem ipsum dolor
          sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
          invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
          At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
          kasd gubergren, no sea takimata Cast : Tom cruise, ma3ti
          benabdelkader, oussama ramzi
        </text>
        <Row gap={20} autofocus>
          <ButtonIcon icon="./assets/playIcon.png">Play</ButtonIcon>
          <Button>More Info</Button>
          <CircleIcon icon="./assets/thumbsUp.png"></CircleIcon>
          <CircleIcon icon="./assets/thumbsDown.png"></CircleIcon>
        </Row>
      </view>
    </view>
  );
};

export default TextPosterPage;
