import React from 'react';
import { INDENTION_MARK } from '../../constant/typingConst';
import { Character } from './Character';

interface Props {
  script: string;
  correctCharCount: number;
  scriptIndex: number;
  currentScriptIndex: number;
}

const ScriptEnglishComponent: React.FC<Props> = (props: Props) => {
  return (
    <div id="script" style={{ width: '100%' }}>
      {props.script.split('').map((char: string, index: number) => {
        index = index - props.script.slice(0, index + 1).split(INDENTION_MARK).length + 1;
        const isTypedScript = props.scriptIndex < props.currentScriptIndex;
        const color = props.correctCharCount > index || isTypedScript ? 'black' : 'grey';
        const isNextChar = props.correctCharCount === index;
        const isCurrentScript = props.scriptIndex === props.currentScriptIndex;
        return char === INDENTION_MARK ? (
          <br />
        ) : (
          <Character
            id={`char_${props.scriptIndex}_${index}`}
            key={index}
            char={char}
            color={color}
            isNextChar={isNextChar}
            isCurrentScript={isCurrentScript}
          />
        );
      })}
    </div>
  );
};

export const ScriptEnglish = React.memo(ScriptEnglishComponent);
