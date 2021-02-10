import React from 'react';
import styled from 'styled-components';
import { keys } from '../../../constant/keyboardKeys';
import {
  KEY_COLOR_ACTIVE_SHIFT,
  KEY_COLOR_CORRECT,
  KEY_COLOR_DEFAULT,
  KEY_COLOR_DISABLED,
  KEY_COLOR_INCORRECT
} from '../../../constant/styles';
import { Key } from './Key';

type ContainerProps = {
  currentKeys: string[];
  nextKey: string;
};

type Props = {
  isCurrentKey: (code: string) => boolean;
  isCorrectKey: (text: string) => boolean;
  className?: string;
};

export interface KeyInfo {
  text: string;
  code: string;
  width: string;
}

const View: React.FC<Props> = (props: Props) => {
  return (
    <div className={props.className}>
      {keys.map((keyRow: KeyInfo[], index: number) => {
        return (
          <div key={index}>
            {keyRow.map((keyInfo: KeyInfo, index: number) => {
              const { text, code, width } = keyInfo;
              const disabled = text === '';
              let keyColor = KEY_COLOR_DEFAULT;
              if (disabled) {
                keyColor = KEY_COLOR_DISABLED;
              } else if (props.isCurrentKey(code)) {
                if (props.isCorrectKey(text)) {
                  keyColor = KEY_COLOR_CORRECT;
                } else if (text === 'shift') {
                  keyColor = KEY_COLOR_ACTIVE_SHIFT;
                } else {
                  keyColor = KEY_COLOR_INCORRECT;
                }
              }
              return <Key key={`${text}_${index}`} text={text} width={width} keyColor={keyColor} />;
            })}
          </div>
        );
      })}
    </div>
  );
};

const StyledView = styled(View)`
  height: 260px;
  width: 814px;
  margin: auto;
  > div {
    display: flex;
  }
`;

export const Keyboard: React.FC<ContainerProps> = (props: ContainerProps) => {
  const [shiftKey, setShiftKey] = React.useState<boolean>(false);
  React.useEffect(() => {
    setShiftKey(props.currentKeys.some((currentKey: string) => currentKey.startsWith('Shift')));
  }, [props.currentKeys]);
  const isCurrentKey = (code: string): boolean => {
    if (!code || props.currentKeys.length === 0) {
      return false;
    }
    return props.currentKeys.some((currentKey: string) => currentKey === code);
  };
  const isCorrectKey = (text: string): boolean => {
    let key = '';
    const [firstKey, secondKey] = text.split(' ');
    if (firstKey && secondKey) {
      key = shiftKey ? firstKey : secondKey;
    } else if (text === '') {
      key = 'space';
    } else {
      key = shiftKey ? text : text.toLowerCase();
    }
    return props.nextKey === key;
  };
  return React.useMemo(
    () => <StyledView isCurrentKey={isCurrentKey} isCorrectKey={isCorrectKey} />,
    [props.currentKeys]
  );
};
