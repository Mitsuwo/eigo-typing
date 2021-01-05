import React from 'react';
import { useSelector } from 'react-redux';
import { keys } from '../../constant/keyboardKeys';
import {
  KEY_COLOR_ACTIVE_SHIFT,
  KEY_COLOR_CORRECT,
  KEY_COLOR_DEFAULT,
  KEY_COLOR_DISABLED,
  KEY_COLOR_INCORRECT
} from '../../constant/styles';
import { RootState } from '../../store';
import { Key } from '../components/Key';

export interface KeyInfo {
  text: string;
  code: string;
  width: string;
}

export const Keyboard: React.FC = () => {
  const [shiftKey, setShiftKey] = React.useState(false);
  const { currentKeys, nextKey } = useSelector((state: RootState) => state.keyboard);
  React.useEffect(() => {
    setShiftKey(currentKeys.some((currentKey: string) => currentKey.startsWith('Shift')));
  }, [currentKeys]);
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
      key = shiftKey ? firstKey : secondKey;
    } else if (text === '') {
      key = 'space';
    } else {
      key = shiftKey ? text : text.toLowerCase();
    }
    return nextKey === key;
  };
  return (
    <div style={{ height: '260px', width: '814px', margin: 'auto' }}>
      {keys.map((keyRow: KeyInfo[], index: number) => {
        return (
          <div key={index} style={{ display: 'flex' }}>
            {keyRow.map((keyInfo: KeyInfo, index: number) => {
              const { text, code, width } = keyInfo;
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
              return <Key key={`${text}_${index}`} text={text} width={width} keyColor={keyColor} />;
            })}
          </div>
        );
      })}
    </div>
  );
};
