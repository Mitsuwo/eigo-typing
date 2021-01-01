import React from 'react';
import { Key } from './Key';

const keys: string[][] = [
  ['~ `', '! 1', '@ 2', '# 3', '$ 4', '% 5', '^ 6', '& 7', '* 8', '( 9', ') 0', '_ -', '+ =', ''],
  ['', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{ [', '} ]', '| ¥'],
  ['', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ': ;', `" '`, ''],
  ['shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '< ,', '> .', '? /', 'shift'],
  ['', '', '', 'command', 'space', 'command', '', '', '', '']
];

interface KeyInfo {
  text: string;
  width: string;
}

interface Props {
  currentKeys: string[];
}

export const Keyboard: React.FC<Props> = (props: Props) => {
  const createKeyInfo = (text: string): KeyInfo => {
    switch (text) {
      case 'shift':
        return { text, width: '125px' };
      case 'space':
        return { text: '', width: '278px' };
      case 'command':
        return { text: '', width: '67px' };
      case '':
        return { text: '', width: '100%' };
      default:
        return { text, width: '54px' };
    }
  };
  return (
    <div>
      {keys.map((keyArray: string[]) => {
        return (
          <div
            key={keyArray.join('-').replaceAll(' ', '')}
            style={{ display: 'flex', width: '814px' }}>
            {keyArray.map((keyText: string) => {
              const { text, width } = createKeyInfo(keyText);
              const isCurrentKey = !!text && props.currentKeys.indexOf(text) !== -1;
              return <Key key={text} text={text} width={width} isCurrentKey={isCurrentKey} />;
            })}
          </div>
        );
      })}
    </div>
  );
};
