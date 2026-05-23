import { Meta, StoryObj } from "storybook-solidjs-vite";

import { Row } from "@solidtv/solid/primitives";

const meta: Meta = {
  title: "Components/Flex",
  tags: ["!autodocs"]
};

export default meta;

type Story = StoryObj;

const Block = (props: any) => (
  <view
    {...props}
    style={{
      width: 80,
      height: 60,
      borderRadius: 4,
      ...props.style
    }}
  />
);

const Title = (props: any) => (
  <text
    {...props}
    style={{
      fontSize: 18,
      fontWeight: "bold",
      marginBottom: 8,
      ...props.style
    }}
  >
    {props.children}
  </text>
);

const Container = (props: any) => (
  <view
    {...props}
    style={{
      display: "flex",
      flexDirection: "column",
      marginBottom: 24,
      padding: 16,
      borderRadius: 4,
      color: 0x2a2a2aff,
      ...props.style
    }}
  >
    {props.children}
  </view>
);

// ROW JUSTIFY CONTENT VARIANTS
export const RowJustifyFlexStart: Story = {
  render: () => (
    <Container>
      <Title>Row - Justify Content: flexStart</Title>
      <view display="flex" flexDirection="row" gap={12} justifyContent="flexStart" width={400} height={100}>
        <Block style={{ color: 0x4dabf5ff }} />
        <Block style={{ color: 0x51cf66ff }} />
        <Block style={{ color: 0xffd93dff }} />
      </view>
    </Container>
  )
};

export const RowJustifyCenter: Story = {
  render: () => (
    <Container>
      <Title>Row - Justify Content: center</Title>
      <view display="flex" flexDirection="row" gap={12} justifyContent="center" width={400} height={100}>
        <Block style={{ color: 0x4dabf5ff }} />
        <Block style={{ color: 0x51cf66ff }} />
        <Block style={{ color: 0xffd93dff }} />
      </view>
    </Container>
  )
};

export const RowJustifyFlexEnd: Story = {
  render: () => (
    <Container>
      <Title>Row - Justify Content: flexEnd</Title>
      <view display="flex" flexDirection="row" gap={12} justifyContent="flexEnd" width={400} height={100}>
        <Block style={{ color: 0x4dabf5ff }} />
        <Block style={{ color: 0x51cf66ff }} />
        <Block style={{ color: 0xffd93dff }} />
      </view>
    </Container>
  )
};

export const RowJustifySpaceBetween: Story = {
  render: () => (
    <Container>
      <Title>Row - Justify Content: spaceBetween</Title>
      <view display="flex" flexDirection="row" gap={12} justifyContent="spaceBetween" width={400} height={100}>
        <Block style={{ color: 0x4dabf5ff }} />
        <Block style={{ color: 0x51cf66ff }} />
        <Block style={{ color: 0xffd93dff }} />
      </view>
    </Container>
  )
};

export const RowJustifySpaceAround: Story = {
  render: () => (
    <Container>
      <Title>Row - Justify Content: spaceAround</Title>
      <view display="flex" flexDirection="row" gap={12} justifyContent="spaceAround" width={400} height={100}>
        <Block style={{ color: 0x4dabf5ff }} />
        <Block style={{ color: 0x51cf66ff }} />
        <Block style={{ color: 0xffd93dff }} />
      </view>
    </Container>
  )
};

// ROW ALIGN ITEMS VARIANTS
export const RowAlignFlexStart: Story = {
  render: () => (
    <Container>
      <Title>Row - Align Items: flexStart</Title>
      <view display="flex" flexDirection="row" gap={12} alignItems="flexStart" width={400} height={150}>
        <Block style={{ color: 0x4dabf5ff }} />
        <Block style={{ color: 0x51cf66ff, height: 100 }} />
        <Block style={{ color: 0xffd93dff, height: 80 }} />
      </view>
    </Container>
  )
};

export const RowAlignCenter: Story = {
  render: () => (
    <Container>
      <Title>Row - Align Items: center</Title>
      <Row gap={12} alignItems="center" width={400} height={150}>
        <Block style={{ color: 0x4dabf5ff }} />
        <Block style={{ color: 0x51cf66ff, height: 100 }} />
        <Block style={{ color: 0xffd93dff, height: 80 }} />
      </Row>
    </Container>
  )
};

export const RowAlignFlexEnd: Story = {
  render: () => (
    <Container>
      <Title>Row - Align Items: flexEnd</Title>
      <view display="flex" flexDirection="row" gap={12} alignItems="flexEnd" width={400} height={150}>
        <Block style={{ color: 0x4dabf5ff }} />
        <Block style={{ color: 0x51cf66ff, height: 100 }} />
        <Block style={{ color: 0xffd93dff, height: 80 }} />
      </view>
    </Container>
  )
};

// COLUMN JUSTIFY CONTENT VARIANTS
export const ColumnJustifyFlexStart: Story = {
  render: () => (
    <Container>
      <Title>Column - Justify Content: flexStart</Title>
      <view display="flex" flexDirection="column" gap={12} justifyContent="flexStart" width={150} height={250}>
        <Block style={{ color: 0x4dabf5ff }} />
        <Block style={{ color: 0x51cf66ff }} />
        <Block style={{ color: 0xffd93dff }} />
      </view>
    </Container>
  )
};

export const ColumnJustifyCenter: Story = {
  render: () => (
    <Container>
      <Title>Column - Justify Content: center</Title>
      <view display="flex" flexDirection="column" gap={12} justifyContent="center" width={150} height={250}>
        <Block style={{ color: 0x4dabf5ff }} />
        <Block style={{ color: 0x51cf66ff }} />
        <Block style={{ color: 0xffd93dff }} />
      </view>
    </Container>
  )
};

export const ColumnJustifyFlexEnd: Story = {
  render: () => (
    <Container>
      <Title>Column - Justify Content: flexEnd</Title>
      <view display="flex" flexDirection="column" gap={12} justifyContent="flexEnd" width={150} height={250}>
        <Block style={{ color: 0x4dabf5ff }} />
        <Block style={{ color: 0x51cf66ff }} />
        <Block style={{ color: 0xffd93dff }} />
      </view>
    </Container>
  )
};

export const ColumnJustifySpaceBetween: Story = {
  render: () => (
    <Container>
      <Title>Column - Justify Content: spaceBetween</Title>
      <view display="flex" flexDirection="column" gap={12} justifyContent="spaceBetween" width={150} height={250}>
        <Block style={{ color: 0x4dabf5ff }} />
        <Block style={{ color: 0x51cf66ff }} />
        <Block style={{ color: 0xffd93dff }} />
      </view>
    </Container>
  )
};

export const ColumnJustifySpaceAround: Story = {
  render: () => (
    <Container>
      <Title>Column - Justify Content: spaceAround</Title>
      <view display="flex" flexDirection="column" gap={12} justifyContent="spaceAround" width={150} height={250}>
        <Block style={{ color: 0x4dabf5ff }} />
        <Block style={{ color: 0x51cf66ff }} />
        <Block style={{ color: 0xffd93dff }} />
      </view>
    </Container>
  )
};

// COLUMN ALIGN ITEMS VARIANTS
export const ColumnAlignFlexStart: Story = {
  render: () => (
    <Container>
      <Title>Column - Align Items: flexStart</Title>
      <view display="flex" flexDirection="column" gap={12} alignItems="flexStart" width={200} height={250}>
        <Block style={{ color: 0x4dabf5ff }} />
        <Block style={{ color: 0x51cf66ff, width: 100 }} />
        <Block style={{ color: 0xffd93dff, width: 80 }} />
      </view>
    </Container>
  )
};

export const ColumnAlignCenter: Story = {
  render: () => (
    <Container>
      <Title>Column - Align Items: center</Title>
      <view display="flex" flexDirection="column" gap={12} alignItems="center" width={200} height={250}>
        <Block style={{ color: 0x4dabf5ff }} />
        <Block style={{ color: 0x51cf66ff, width: 100 }} />
        <Block style={{ color: 0xffd93dff, width: 80 }} />
      </view>
    </Container>
  )
};

export const ColumnAlignFlexEnd: Story = {
  render: () => (
    <Container>
      <Title>Column - Align Items: flexEnd</Title>
      <view display="flex" flexDirection="column" gap={12} alignItems="flexEnd" width={200} height={250}>
        <Block style={{ color: 0x4dabf5ff }} />
        <Block style={{ color: 0x51cf66ff, width: 100 }} />
        <Block style={{ color: 0xffd93dff, width: 80 }} />
      </view>
    </Container>
  )
};

export const RowCenterBoth: Story = {
  render: () => (
    <Container>
      <Title>Row - Center (justify + align)</Title>
      <view
        display="flex"
        flexDirection="column"
        gap={12}
        justifyContent="center"
        alignItems="center"
        width={400}
        height={150}
      >
        <Block style={{ color: 0x4dabf5ff }} />
        <Block style={{ color: 0x51cf66ff, height: 100 }} />
        <Block style={{ color: 0xffd93dff, height: 80 }} />
      </view>
    </Container>
  )
};

export const ColumnCenterBoth: Story = {
  render: () => (
    <Container>
      <Title>Column - Center (justify + align)</Title>
      <view
        display="flex"
        flexDirection="column"
        gap={12}
        justifyContent="center"
        alignItems="center"
        width={200}
        height={250}
      >
        <Block style={{ color: 0x4dabf5ff }} />
        <Block style={{ color: 0x51cf66ff, width: 100 }} />
        <Block style={{ color: 0xffd93dff, width: 80 }} />
      </view>
    </Container>
  )
};

export const RowWithGap: Story = {
  render: () => (
    <Container>
      <Title>Row - Gap variations</Title>
      <view display="flex" flexDirection="column" gap={20}>
        <view>
          <Title style={{ fontSize: 14 }}>Gap: 8</Title>
          <view display="flex" flexDirection="row" gap={8} width={400} height={80}>
            <Block style={{ color: 0x4dabf5ff }} />
            <Block style={{ color: 0x51cf66ff }} />
            <Block style={{ color: 0xffd93dff }} />
          </view>
        </view>
        <view>
          <Title style={{ fontSize: 14 }}>Gap: 20</Title>
          <view display="flex" flexDirection="row" gap={20} width={400} height={80}>
            <Block style={{ color: 0x4dabf5ff }} />
            <Block style={{ color: 0x51cf66ff }} />
            <Block style={{ color: 0xffd93dff }} />
          </view>
        </view>
        <view>
          <Title style={{ fontSize: 14 }}>Gap: 40</Title>
          <view display="flex" flexDirection="row" gap={40} width={400} height={80}>
            <Block style={{ color: 0x4dabf5ff }} />
            <Block style={{ color: 0x51cf66ff }} />
            <Block style={{ color: 0xffd93dff }} />
          </view>
        </view>
      </view>
    </Container>
  )
};

export const WrapBehavior: Story = {
  render: () => (
    <Container>
      <Title>Row - Wrap (many items)</Title>
      <view display="flex" flexDirection="row" flexWrap="wrap" gap={12} width={300} height={200}>
        <Block style={{ color: 0x4dabf5ff }} />
        <Block style={{ color: 0x51cf66ff }} />
        <Block style={{ color: 0xffd93dff }} />
        <Block style={{ color: 0xff6b6bff }} />
        <Block style={{ color: 0xfcc419ff }} />
        <Block style={{ color: 0x9c36b5ff }} />
      </view>
    </Container>
  )
};
