import { type Component, createMemo, createSignal, Index, Show, Signal, Switch, Match, Setter } from 'solid-js';
import { type NodeProps, type TextStyles, type NodeStyles } from '@solidtv/solid';
import { Row, Column, chainFunctions } from '@solidtv/solid/primitives';
import Input from './Input';

const actionKeyContainerStyle: NodeStyles = {
  width: 144,
  alpha: 0.8,
  height: 60,
  scale: 1,
  get color() { return '#0000FF' },
  borderRadius: 6,
  $focus: {
    alpha: 1,
    scale: 1.05,
  },
  transition: { scale: true },
};

const ActionKeyIconStyle: NodeStyles = {
  y: 6,
  x: 48,
  width: 48,
  height: 48,
  color: '#c6c6c6',
};

const keyContainerStyle: NodeStyles = {
  height: 60,
  get color() { return '#000000' },
  scale: 1,
  borderRadius: 6,
  $focus: {
    scale: 1.05,
    get color() { return '#0000FF' },
  },
};

const BaseKeyTextStyle: TextStyles = {
  fontSize: 42,
  lineHeight: 60,
};

const KeyText: TextStyles = {
  ...BaseKeyTextStyle,
  width: 48,
  contain: 'both',
  textAlign: 'center',
};

export function onKeyPressWhenKeyboardOpen(setKeyEvent: Setter<string>, event: KeyboardEvent) {
  if (event.key.length === 1)
    setKeyEvent(event.key);
  else if (event.key === 'Backspace')
    setKeyEvent('delete');
  if (event.key.length === 1 && (/[a-zA-Z0-9._@-]/).test(event.key) || event.key === 'Backspace')
    return true;
  return false;
};


export const Key: Component<NodeProps & { key: string; title?: string; textColor?: string }> = props => (
  <view width={48} {...props} style={keyContainerStyle}>
    <text style={KeyText}>{props.key || props.title}</text>
  </view>
);

export const ActionKey: Component<NodeProps & { key: any }> = props => (
  <Switch>
    <Match when={typeof props.key === 'string'}>
      <view
        {...props}
        key={props.key}
        display='flex'
        padding={[0, 20]}
        style={keyContainerStyle}
      >
        <text style={BaseKeyTextStyle}>{props.key}</text>
      </view>
    </Match>
    <Match when={props.key.icon}>
      <view {...props} key={props.key.key} style={actionKeyContainerStyle}>
        <view src={`${props.key.icon}`} style={ActionKeyIconStyle} />
      </view>
    </Match>
    <Match when={true}>
      <view
        {...props}
        key={props.key.key}
        display='flex'
        padding={[0, 20]}
        style={/* @once */ props.key?.size ? actionKeyContainerStyle : keyContainerStyle}
      >
        <text style={BaseKeyTextStyle}>{props.key.title}</text>
      </view>
    </Match>
  </Switch>
);

export const Keyboard: Component<NodeProps & { formats: any, onEnter: any }> = props => {
  const [ layout, setLayout ] = createSignal('default');
  const config = createMemo(() => (props.formats[layout()]));
  const onEnter = (_e, _keyboard, key) => {
    if (typeof key.key === "string") {
      return false;
    }

    if (key.key.title === 'shift') {
      setLayout(layout() === 'uppercase' ? 'default' : 'uppercase');
      return true;
    }

    if (key.key.title === 'symbol') {
      setLayout(layout() === 'symbol' ? 'default' : 'symbol');
      return true;
    }

    return false;
  };

  const handleEnter = chainFunctions(onEnter, props.onEnter);

  return <Column transition={false} {...props} gap={12} plinko scroll='none' onEnter={handleEnter}>
    <Index each={config()}>
      {keyRow => (
        <Row gap={6} justifyContent='center' scroll='none'>
          <Index each={keyRow()}>
            {key =>
              <Show when={typeof key() === 'string' && (key() as string).length === 1}
                fallback={<ActionKey key={key()} />}>
                <Key key={key() as string} />
              </Show>
            }
          </Index>
        </Row>
      )}
    </Index>
  </Column>
  ;
};

export const FullScreenKeyboard: Component<NodeProps & { type: any, valueSignal: Signal<string>, placeholder?: string }> = props => {
  const keyEvents = createSignal('');
  const [ _keyEvent, setKeyEvent ] = keyEvents;

  const onEnter = (_e, _keyboard, key) => {
    if (key.key === 'save' || key.key === 'Save')
      return false;

    if (key.key)
      setKeyEvent(key.key as string);

    return true;
  };

  return (
    <view
      {...props}
      width={1920}
      height={1080}
      color={'#000000'}
      zIndex={10}
      forwardFocus={1}
      onKeyPress={(keyBoardEvent) => onKeyPressWhenKeyboardOpen(setKeyEvent, keyBoardEvent)}
    >
      <Input
        y={180}
        width={950}
        centerX
        valueSignal={props.valueSignal}
        placeholder={'Search for something'}
        keyEvents={keyEvents}
        mask='•'
      />

      <Column y={270}>
        <Keyboard onEnter={onEnter} />
      </Column>

    </view>
  );
};
