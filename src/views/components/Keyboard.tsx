import React from 'react';
import { keys } from '../../constant/keyboardKeys';
import {
  KEY_COLOR_CORRECT,
  KEY_COLOR_DEFAULT,
  KEY_COLOR_DISABLED,
  KEY_COLOR_INCORRECT,
  KEY_WIDTH_COMMAND,
  KEY_WIDTH_DEFAULT,
  KEY_WIDTH_OTHER,
  KEY_WIDTH_SHIFT,
  KEY_WIDTH_SPACE
} from '../../constant/styles';
import { Key } from './Key';

interface KeyInfo {
  text: string;
  width: string;
}

interface Props {
  currentKeys: string[];
  nextKey: string;
}

export const Keyboard: React.FC<Props> = (props: Props) => {
  const createKeyInfo = (text: string): KeyInfo => {
    let width = KEY_WIDTH_DEFAULT;
    switch (text) {
      case 'shift':
        width = KEY_WIDTH_SHIFT;
        break;
      case 'space':
        width = KEY_WIDTH_SPACE;
        text = '';
        break;
      case 'command':
        width = KEY_WIDTH_COMMAND;
        text = '';
        break;
      case '':
        width = KEY_WIDTH_OTHER;
        break;
      default:
        break;
    }
    return { text, width };
  };
  return (
    <div>
      {keys.map((keyArray: string[]) => {
        return (
          <div
            key={keyArray.join('-').replaceAll(' ', '')}
            style={{ display: 'flex', width: '814px' }}>
            {keyArray.map((keyText: string, index: number) => {
              const { text, width } = createKeyInfo(keyText);
              const isCurrentKey = !!text && props.currentKeys.indexOf(text) !== -1;
              const disabled = !text && width !== KEY_WIDTH_SPACE;
              let keyColor = KEY_COLOR_DEFAULT;
              if (disabled) {
                keyColor = KEY_COLOR_DISABLED;
              } else if (isCurrentKey) {
                if (props.nextKey === keyText) {
                  keyColor = KEY_COLOR_CORRECT;
                } else if (keyColor === KEY_COLOR_DEFAULT) {
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
