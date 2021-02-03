import React from 'react';

interface Props {
  visible: boolean;
  scriptJapanese: string;
}

const ScriptJapaneseComponent: React.FC<Props> = (props: Props) => {
  return (
    <div
      style={{
        display: props.visible ? 'block' : 'none',
        margin: '2vw',
        fontSize: '3vh',
        fontFamily: 'koruri',
        color: 'grey'
      }}>
      {props.scriptJapanese}
    </div>
  );
};

export const ScriptJapanese = React.memo(ScriptJapaneseComponent);
