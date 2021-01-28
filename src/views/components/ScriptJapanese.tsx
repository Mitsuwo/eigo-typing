import React from 'react';

interface Props {
  scriptJapanese: string;
}

const ScriptJapaneseComponent: React.FC<Props> = (props: Props) => {
  return <div>{props.scriptJapanese}</div>;
};

export const ScriptJapanese = React.memo(ScriptJapaneseComponent);
