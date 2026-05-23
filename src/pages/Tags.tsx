
import { createTag } from "@solidtv/solid/primitives";
import { setGlobalBackground } from "../state";
import { onCleanup } from "solid-js";

const TagsPage = () => {
  setGlobalBackground("#111");
  const watchIconTextStyle = {
    fontWeight: 400,
    fontSize: 22,
    lineHeight: 40,
    y: 1,
  };

  const ActionTag = createTag(
    <view color={'#118322ff'} borderRadius={8} display="flex" padding={8}>
      <text style={watchIconTextStyle}>
        Action
      </text>
    </view>
  );

  const ComedyTag = createTag(
    <view color={'#250fceff'} borderRadius={8} display="flex" padding={8}>
      <text style={watchIconTextStyle}>
        Comedy
      </text>
    </view>
  );

  const DramaTag = createTag(
    <view color={'#ff0000ff'} borderRadius={8} display="flex" padding={8}>
      <text style={watchIconTextStyle}>
        Drama
      </text>
    </view>
  );

  const NewEpisodeTag = createTag(
    <view color={'#fff'} borderRadius={8} display="flex" padding={8} effects={{ rounded: { radius: [ 10, 0, 10, 0 ]} }}>
      <text style={watchIconTextStyle} color={'#000'} fontWeight={400}>
        New Episode
      </text>
    </view>
  );


  onCleanup(() => {
    ActionTag.destroy();
    ComedyTag.destroy();
    DramaTag.destroy();
    NewEpisodeTag.destroy();
  });

  return (
    <>
      <text x={100} y={100} fontSize={50} color="#ffffff">Tags Page</text>

      <view x={150} y={200} display="flex" flexDirection="row" gap={16} flexWrap="wrap" autofocus>
        <ComedyTag />
        <DramaTag />
        <ActionTag />
        <NewEpisodeTag />
        <ComedyTag />
        <DramaTag />
        <ActionTag />
        <NewEpisodeTag />
        <ComedyTag />
        <DramaTag />
        <ActionTag />
        <NewEpisodeTag />
        <ComedyTag />
        <DramaTag />
        <ActionTag />
        <NewEpisodeTag />
        <ComedyTag />
        <DramaTag />
        <ActionTag />
        <NewEpisodeTag />
        <ComedyTag />
        <DramaTag />
        <ActionTag />
        <NewEpisodeTag />
        <ComedyTag />
        <DramaTag />
        <ActionTag />
        <NewEpisodeTag />
        <ComedyTag />
        <DramaTag />
        <ActionTag />
        <NewEpisodeTag />
        <ComedyTag />
        <DramaTag />
        <ActionTag />
      </view>
    </>
  );
};

export default TagsPage;
