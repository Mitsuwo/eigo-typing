import React from 'react';
import { Character } from '../components/Character';

interface Props {
  script: string;
  correctCharCount: number;
  scriptIndex: number;
  currentScriptIndex: number;
}

const ScriptComponent: React.FC<Props> = (props: Props) => {
  const isTypedScript = props.scriptIndex < props.currentScriptIndex;
  return (
    <div id="script" style={{ width: '100%' }}>
      {props.script
        ? props.script.split('').map((char: string, index: number) => {
            const color = props.correctCharCount > index || isTypedScript ? 'black' : 'grey';
            const isNextChar = props.correctCharCount === index;
            const isCurrentScript = props.scriptIndex === props.currentScriptIndex;
            return (
              <Character
                id={`char_${props.scriptIndex}_${index}`}
                key={`char_${index}`}
                char={char}
                color={color}
                isNextChar={isNextChar}
                isCurrentScript={isCurrentScript}
              />
            );
          })
        : ''}
    </div>
  );
};

export const Script = React.memo(ScriptComponent, (prev, next) => {
  return (
    prev.scriptIndex !== prev.currentScriptIndex && next.scriptIndex !== next.currentScriptIndex
  );
});
