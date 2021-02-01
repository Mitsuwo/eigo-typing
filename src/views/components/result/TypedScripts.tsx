import React from 'react';
import { Script } from '../../../store/TypingContent/types';

interface Props {
  typedScripts: Script[];
}

const TypedScriptsComponent: React.FC<Props> = (props: Props) => {
  return (
    <div>
      {props.typedScripts.map((script: Script) => {
        return (
          <div key={script.id}>
            <div>{script.english}</div>
            <div>{script.japanese}</div>
          </div>
        );
      })}
    </div>
  );
};

export const TypedScripts = React.memo(TypedScriptsComponent);
