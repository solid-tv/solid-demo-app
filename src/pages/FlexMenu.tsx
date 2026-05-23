import { Column } from "@solidtv/solid/primitives";
import { Text } from "@solidtv/solid";
import { setGlobalBackground } from "../state";

const Box = (props) => {
  return (
    <view {...props} height={100} color="#FF00FF">
      <text>Text element</text>
    </view>
  );
};

export const FlexMenu = () => {
  setGlobalBackground("#000");
  return (
      <view
        right={0}
        display="flex" 
        width={400}
        flexBoundary="fixed"
        color="#FFFF0060"
        flexDirection="column"
      >
        <Column x={50} width={300} autofocus>
          <Box marginTop={50} />
          <Column flexItem={false} justifyContent="flexEnd">
            <Box flexOrder={1} />
            <Box flexOrder={2} marginBottom={50} />
          </Column>
        </Column>
      </view>
  );
};

export default FlexMenu;
