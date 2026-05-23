
import { createSignal, onCleanup } from "solid-js";
import { setGlobalBackground } from "../state";

const Default = () => {
  setGlobalBackground("#1e293b");

  return (
    <view autofocus>
      <view
        width={1920 / 4}
        height={1080}
        colorTop="#0891b2"
        colorBottom="#a5f3fc"
      />
      <view
        width={1920 / 4}
        height={1080}
        x={1920 / 4}
        colorLeft="#dc2626"
        colorRight="#f87171"
      />
      <view
        width={1920 / 4}
        height={1080}
        x={(1920 / 4) * 2}
        colorTop="#0891b2"
        colorRight="#f87171"
      />
      <view
        width={1920 / 4}
        height={1080}
        x={(1920 / 4) * 3}
        colorRight="#008000"
        colorBottom="#ffd700"
      />
    </view>
  );
};

export default Default;
