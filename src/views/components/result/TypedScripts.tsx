import React from 'react';
import styled from 'styled-components';
import { Script } from '../../../store/TypingContent/types';

type Props = {
  typedScripts: Script[];
  className?: string;
};

const View: React.FC<Props> = (props: Props) => {
  return (
    <div className={props.className}>
      {props.typedScripts.map((script: Script) => {
        return (
          <div key={script.id} className="script">
            <p>{script.english}</p>
            <p>{script.japanese}</p>
          </div>
        );
      })}
    </div>
  );
};

const StyledView = styled(View)`
  > .script {
    margin: 2vw;
    > p {
      font-size: 3vh;
      color: #808080;
    }
    > p:nth-child(1) {
      font-family: serif;
    }
    > p:nth-child(2) {
      font-family: Noto Sans JP;
    }
  }
`;

export const TypedScripts: React.FC<Props> = (props: Props) => {
  return React.useMemo(() => <StyledView typedScripts={props.typedScripts} />, []);
};
