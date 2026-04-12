import { Meta, StoryObj } from "storybook-solidjs-vite";
import { View } from "@solidtv/solid";
import { Row } from "@solidtv/solid/primitives";
import { ActionKey, Key, Keyboard } from "../Keyboard";
import { formats } from "../../pages/Login";

const meta: Meta<typeof Keyboard> = {
  title: "Components/Keyboard",
  component: Keyboard,
  tags: ["!autodocs"]
};

export default meta;

type Story = StoryObj<typeof Keyboard>;

export const Default: Story = {
  args: {
    formats,
    width: 760,
    onEnter: () => false
  } as any
};

export const Autofocus: Story = {
  args: {
    ...Default.args,
    autofocus: true,
    selected: 0
  } as any
};

export const ActionKeysPreview: Story = {
  render: () => (
    <View>
      <Row gap={12}>
        <ActionKey key={{ title: "Delete", size: "md", keyId: "delete" }} />
        <ActionKey key={{ title: "shift", size: "md", keyId: "shift" }} />
        <ActionKey key={{ title: "Save", size: "lg", keyId: "save" }} />
      </Row>
    </View>
  )
};

export const CharacterKeysPreview: Story = {
  render: () => (
    <View>
      <Row gap={12}>
        <Key key="a" />
        <Key key="b" />
        <Key key="c" />
        <Key key="1" />
        <Key key="@" />
      </Row>
    </View>
  )
};
