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
          <div key={script.id} style={{ margin: '2vw' }}>
            <div style={{ fontSize: '3vh', fontFamily: 'oxygenMono', color: 'grey' }}>
              {script.english}
            </div>
            <div style={{ fontSize: '3vh', fontFamily: 'koruri', color: 'grey' }}>
              {script.japanese}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export const TypedScripts = React.memo(TypedScriptsComponent);
