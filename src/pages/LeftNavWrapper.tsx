import { useLocation, useNavigate } from "@solidjs/router";
import { activeElement, renderer } from "@solidtv/solid";
import {
  useAnnouncer,
  FPSCounter,
  setupFPS
} from "@solidtv/solid/primitives";
import Background from "../components/Background";
import NavDrawer from "../components/NavDrawer/NavDrawer";
import { createEffect, createSignal, onCleanup } from "solid-js";

declare module "@solidtv/solid" {
  // Augment the FocusManager KeyMap interface with our custom keys
  interface KeyMap {
    Announcer: (string | number)[];
    Menu: (string | number)[];
    Escape: (string | number)[];
  }
  interface ElementNode {
    heroContent?: boolean;
    backdrop?: any;
    entityInfo?: any;
    href?: string;
  }
}

const LeftNavWrapper = (props) => {

  const navigate = useNavigate();
  const announcer = useAnnouncer();
  announcer.debug = true;
  announcer.enabled = false;

  let navDrawer, lastFocused;

  setupFPS({ renderer });

  function focusNavDrawer() {
    if (navDrawer.states.has("focus")) {
      return false;
    }
    lastFocused = activeElement();
    return navDrawer.setFocus();
  }

  const [showWidgets, setShowWidgets] = createSignal(true);
  const location = useLocation();
  const showOnPaths = ["/browse", "/entity"];
  createEffect(() => {
    const currentPath = location.pathname;
    let matchesPartial = showOnPaths.some((path) =>
      currentPath.startsWith(path)
    );
    if (currentPath === "/") {
      matchesPartial = true;
    }
    setShowWidgets(matchesPartial);
  });

  const [lastKey, setLastKey] = createSignal<string>('Last key: undefined');
  const [lastError, setLastError] = createSignal<string | undefined>();
  const keyPressHandler = (e) => {
    setLastKey(`Last key: ${e.key}, Code: ${e.keyCode}`);
  };
  document.addEventListener("keydown", keyPressHandler);
  const displayError = (e) => {
    setLastError((p) => (p || "") + "\n" + e.message);
  };
  document.addEventListener("onerror", displayError);
  const windowSize = `${window.innerWidth}x${window.innerHeight}`;

  onCleanup(() => {
    document.removeEventListener("onerror", displayError);
    document.removeEventListener("keydown", keyPressHandler);
  });

  let pageContainer;

  return (
    <view
      ref={window.APP as any}
      onAnnouncer={() => { announcer.enabled = !announcer.enabled; return true; }}
      onLast={() => { history.back(); return true; }}
      onMenu={() => { navigate("/"); return true; }}
      onBack={() => {
        // TVs only have one back key, so it does double duty: from page content
        // it opens the nav drawer, and from the drawer it walks history back.
        if (navDrawer.states.has("focus")) {
          navigate(-1);
        } else {
          focusNavDrawer();
        }
        return true;
      }}
      style={{ width: 1920, height: 1080 }}
      onLeft={() => { focusNavDrawer(); return true; }}
      onRight={() => {
        if (navDrawer.states.has("focus")) {
          (lastFocused || pageContainer).setFocus();
          return true;
        }
      }}
    >
      <Background />
      <FPSCounter mountX={1} x={1910} y={10} alpha={1} />
      <view
        mountX={1}
        display="flex"
        flexDirection="column"
        width={330}
        height={50}
        x={1910}
        y={212}
        color={0x000000ff}
        hidden={!showWidgets()}
      >
        <text x={8} fontSize={15}>
          Window Size: {windowSize}
        </text>
        <text x={8} fontSize={15}>
          {lastKey()}
        </text>
      </view>
      <text x={270} y={20} fontSize={24} contain="width" width={800}>
        {lastError()}
      </text>
      <NavDrawer
        ref={navDrawer}
        focusPage={() => lastFocused.setFocus()}
        showWidgets={showWidgets()}
      />
      <view id="pageContainer" ref={pageContainer} forwardFocus={0} children={props.children} />
    </view>
  );
};

export default LeftNavWrapper;
