import { Show } from "@solidtv/solid";
import { Column } from "@solidtv/solid/primitives";
import { Meta, StoryObj } from "storybook-solidjs-vite";
import theme from "theme";
import { customTheme } from "./Typography.stories";

const FAKE_TEXT =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

type Story = StoryObj;
const meta: Meta = {
  title: "Components/Core",
  tags: ["!autodocs"]
};

export const BorderRadiusSmall: Story = {
  render: () => <view width={200} height={75} color={theme.color.white} borderRadius={10}></view>
};

export const BorderRadiusRound: Story = {
  render: () => <view width={50} height={50} color={theme.color.white} borderRadius={25}></view>
};

export const BorderAlignOutside: Story = {
  render: () => (
    <view
      width={200}
      height={100}
      color={theme.color.white}
      border={{ w: 4, gap: 5, color: theme.color.red, align: "outside" }}
    ></view>
  )
};

export const BorderAlignInside: Story = {
  render: () => (
    <view
      width={200}
      height={100}
      color={theme.color.white}
      border={{ w: 4, color: theme.color.red, align: "inside" }}
    ></view>
  )
};

export const BorderAlignCenter: Story = {
  render: () => (
    <view
      width={200}
      height={100}
      color={theme.color.white}
      border={{ w: 4, gap: 5, color: theme.color.red, align: "center" }}
    ></view>
  )
};

export const BorderWithTransparentColor: Story = {
  render: () => (
    <view
      width={200}
      height={100}
      color={theme.color.white}
      border={{ w: 4, gap: 10, color: theme.color.greyscaleWhite50 }}
    ></view>
  )
};

export const TextContainWidthMaxline1: Story = {
  render: () => (
    <view width={300} height={100} color={theme.color.white}>
      <text color={theme.color.black} contain="width" maxLines={1}>
        {FAKE_TEXT}
      </text>
    </view>
  )
};

export const TextContainBoth: Story = {
  render: () => (
    <view width={300} height={300} color={theme.color.white}>
      <text color={theme.color.black} contain="both">
        {FAKE_TEXT}
      </text>
    </view>
  )
};

export const TextContainWithMaxline5: Story = {
  render: () => (
    <view width={300} height={300} color={theme.color.white}>
      <text color={theme.color.black} contain="both" maxLines={5}>
        {FAKE_TEXT}
      </text>
    </view>
  )
};

export const CenterY: Story = {
  render: () => (
    <view width={300} height={120} color={theme.color.white}>
      <text centerY color={theme.color.black}>
        CenterY
      </text>
    </view>
  )
};

export const CenterX: Story = {
  render: () => (
    <view width={300} height={120} color={theme.color.white}>
      <text centerX color={theme.color.black}>
        CenterX
      </text>
    </view>
  )
};

export const Center: Story = {
  render: () => (
    <view width={300} height={120} color={theme.color.white}>
      <text center color={theme.color.black}>
        Center
      </text>
    </view>
  )
};

export const CenterWithIcon: Story = {
  render: () => (
    <view width={300} height={100} color={theme.color.white} display="flex" alignItems="center">
      <view width={50} height={50} borderRadius={50} src={"/assets/ktx/image-8.ktx"} />
      <text color={theme.color.black}>Center with Icon</text>
    </view>
  )
};

export const RowWithCenterItems: Story = {
  render: () => (
    <view display="flex">
      <view flexItem={false} height={250} width={300}>
        <Column>
          <view height={120} color={theme.color.white}>
            <text center style={{ ...customTheme.body, color: theme.color.black }}>
              Center 1
            </text>
          </view>
          <view width={300} height={120} color={theme.color.white}>
            <text center style={{ ...customTheme.body, color: theme.color.black }}>
              Center 2
            </text>
          </view>
        </Column>
      </view>
    </view>
  )
};

export const RowWithCenterItemsAndBorderRadiusAndFocus: Story = {
  render: () => (
    <view display="flex">
      <view flexItem={false} height={250} width={300}>
        <Column>
          <view
            height={120}
            color={theme.color.greyscaleWhite50}
            style={{ $focus: { color: theme.color.red } }}
            autofocus
            borderRadius={20}
          >
            <text center color={theme.color.black}>
              Center 1
            </text>
          </view>
          <view width={300} height={120} color={theme.color.greyscaleWhite50} borderRadius={20}>
            <text center color={theme.color.black}>
              Center 2
            </text>
          </view>
        </Column>
      </view>
    </view>
  )
};

export default meta;
