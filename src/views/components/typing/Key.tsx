import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import {
  KEY_COLOR_ACTIVE_SHIFT,
  KEY_BORDER_COLOR_DEFAULT,
  KEY_COLOR_CORRECT,
  KEY_COLOR_DEFAULT,
  KEY_COLOR_INCORRECT,
  KEY_FONT_COLOR_DEFAULT,
  KEY_FONT_COLOR_PRESSED,
  KEY_COLOR_DISABLED
} from '../../../constant/styles';
import { RootState } from '../../../store';
import { KeyInfo } from './Keyboard';

type Props = {
  text: string;
  width: string;
  keyColor: string;
  className?: string;
};

type ContainerProps = {
  keyInfo: KeyInfo;
  shiftKey: boolean;
};

const View: React.FC<Props> = (props: Props) => {
  const __html = props.text ? props.text.replace(' ', '<br>') : '';
  return (
    <div className={props.className}>
      <div className="innerText" dangerouslySetInnerHTML={{ __html }} />
    </div>
  );
};

const StyledView = React.memo<Props>(
  styled(View)`
    display: table;
    color: ${(props: Props) =>
      props.keyColor === KEY_COLOR_DEFAULT ? KEY_FONT_COLOR_DEFAULT : KEY_FONT_COLOR_PRESSED};
    border-width: 2px;
    border-style: solid;
    border-color: ${(props: Props) =>
      props.keyColor === KEY_COLOR_DEFAULT ? KEY_BORDER_COLOR_DEFAULT : props.keyColor};
    background-color: ${(props: Props) => props.keyColor};
    width: ${(props: Props) => props.width};
    height: 50px;
    text-align: center;
    border-radius: 5px;
    margin: 1px;
    > .innerText {
      display: table-cell;
      vertical-align: middle;
    }
  `,
  (prev, next) => {
    return (
      (prev.keyColor === KEY_COLOR_CORRECT && next.keyColor === KEY_COLOR_INCORRECT) ||
      prev.keyColor === next.keyColor
    );
  }
);

const Container: React.FC<ContainerProps> = (props: ContainerProps) => {
  const { currentKeys, nextKey } = useSelector((state: RootState) => state.keyboard);
  const isCurrentKey = (code: string): boolean => {
    if (!code || currentKeys.length === 0) {
      return false;
    }
    return currentKeys.some((currentKey: string) => currentKey === code);
  };
  const isCorrectKey = (text: string): boolean => {
    let key = '';
    const [firstKey, secondKey] = text.split(' ');
    if (firstKey && secondKey) {
      key = props.shiftKey ? firstKey : secondKey;
    } else if (text === '') {
      key = 'space';
    } else {
      key = props.shiftKey ? text : text.toLowerCase();
    }
    return nextKey === key;
  };
  const { text, code, width } = props.keyInfo;
  const disabled = text === '';
  let keyColor = KEY_COLOR_DEFAULT;
  if (disabled) {
    keyColor = KEY_COLOR_DISABLED;
  } else if (isCurrentKey(code)) {
    if (isCorrectKey(text)) {
      keyColor = KEY_COLOR_CORRECT;
    } else if (text === 'shift') {
      keyColor = KEY_COLOR_ACTIVE_SHIFT;
    } else {
      keyColor = KEY_COLOR_INCORRECT;
    }
  }
  return <StyledView text={text} width={width} keyColor={keyColor} />;
};

export const Key = React.memo(Container);
