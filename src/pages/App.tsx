import {
  useFocusManager,
  useMouse,
} from "@solidtv/solid/primitives";
import { KeyMap, KeyHoldMap } from "@solidtv/solid/focusManager";

const App = (props) => {
  useFocusManager(
      {
        Announcer: ["a"],
        Menu: ["m"],
        Escape: ["Escape", 27],
        // Every back-ish key maps to Back. Note the framework resolves
        // keyMapEntries[e.key] BEFORE keyMapEntries[e.keyCode], so the key
        // strings TVs report ("Back"/"GoBack"/"Backspace") must be listed here
        // or a correct keyCode will never be consulted.
        Back: ["Back", "GoBack", "Backspace", "b", 8, 461, 10009, "Escape", 27],
        Left: ["ArrowLeft", "Left", 37],
        Right: ["ArrowRight", "Right", 39],
        Up: ["ArrowUp", "Up", 38],
        Down: ["ArrowDown", "Down", 40],
        Enter: ["Enter", 13],
        Play: ['Play', 415],
        Pause: ['Pause', 19],
        PlayPause: ['PlayPause', 10252],
        FastForward: ['FastForward', 417],
        FastForward10: ['FastForward10', 10233],
        Rewind: ['Rewind', 412],
        Rewind10: ['Rewind10', 10232],
        Stop: ['Stop', 413],
    } satisfies KeyMap,
      {
        userKeyHoldMap: {
          EnterHold: ["Enter", 13],
          BackHold: ["b", 66]
        } as unknown as KeyHoldMap,
        holdThreshold: 1000
      }
    );
     useMouse(undefined, 100, {
      customStates: {
        hoverState: '$hover',
        pressedState: '$pressed',
        pressedStateDuration: 150, // optional, default is 150ms
      },
    });
  return props.children;
};

export default App;
