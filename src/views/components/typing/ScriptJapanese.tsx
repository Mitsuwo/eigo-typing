import React from 'react';

interface Props {
  scriptJapanese: string;
}

const ScriptJapaneseComponent: React.FC<Props> = (props: Props) => {
  return (
    <div style={{ marginTop: '4vh', fontSize: '3vh', color: 'grey' }}>{props.scriptJapanese}</div>
  );
};

export const ScriptJapanese = React.memo(ScriptJapaneseComponent);
