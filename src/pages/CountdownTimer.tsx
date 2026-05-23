import { createSignal, onCleanup, onMount } from "solid-js";
import { setGlobalBackground } from "../state";
import theme from "theme";

function CountdownTimer(props: {
  countdown?: number;
  size?: number;
  onEnd?: () => void;
}) {
  const total = props.countdown ?? 10;
  const size = props.size ?? 320;
  const strokeWidth = 16;
  const durationMs = total * 1000;

  const [progress, setProgress] = createSignal(1);
  const [label, setLabel] = createSignal(total);

  let raf = 0;
  let cycle = 0;
  const start = performance.now();

  const tick = (now: number) => {
    const totalElapsed = now - start;
    const currentCycle = Math.floor(totalElapsed / durationMs);
    if (currentCycle > cycle) {
      cycle = currentCycle;
      props.onEnd?.();
    }
    const elapsed = totalElapsed % durationMs;
    const p = 1 - elapsed / durationMs;
    setProgress(p);
    setLabel(Math.ceil(p * total) || total);
    raf = requestAnimationFrame(tick);
  };
  raf = requestAnimationFrame(tick);

  onCleanup(() => cancelAnimationFrame(raf));

  return (
    <view width={size} height={size} centerX centerY>
      <view
        width={size}
        height={size}
        color={0x00000000}
        shader={[
          "radialProgress",
          {
            width: strokeWidth,
            progress: progress(),
            colors: [theme.color.white],
            cap: 1
          }
        ]}
      />
      <text
        x={size / 2}
        y={size / 2}
        mountX={0.5}
        mountY={0.5}
        textAlign="center"
        fontSize={120}
        fontWeight="bold"
        color={theme.color.white}
      >
        {String(label())}
      </text>
    </view>
  );
}

const CountdownTimerPage = () => {
  onMount(() => {
    setGlobalBackground(theme.backgroundDark);
  });

  return (
    <view autofocus width={1920} height={1080}>
      <text
        x={200}
        y={20}
        fontSize={42}
        fontWeight="bold"
        color={theme.textPrimary}
      >
        Countdown Timer
      </text>
      <text
        x={200}
        y={80}
        fontSize={18}
        color={theme.textSecondary}
      >
        Uses the radialProgress shader. The ring shrinks smoothly and loops every {10} seconds.
      </text>
      <CountdownTimer countdown={10} />
    </view>
  );
};

export default CountdownTimerPage;
