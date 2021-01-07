import React from 'react';
import { Character } from '../components/Character';

interface Props {
  script: string;
  correctCharCount: number;
  isCurrentScript: boolean;
  isTypedScript: boolean;
}

const ScriptComponent: React.FC<Props> = (props: Props) => {
  return (
    <div>
      {props.script
        ? props.script.split('').map((char: string, index: number) => {
            const color = props.correctCharCount > index || props.isTypedScript ? 'black' : 'grey';
            return <Character key={`char-${index}`} char={char} color={color} />;
          })
        : ''}
    </div>
  );
};

export const Script = React.memo(
  ScriptComponent,
  (prev, next) => !prev.isCurrentScript && !next.isCurrentScript
);
