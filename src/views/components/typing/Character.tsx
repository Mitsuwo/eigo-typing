import React from 'react';

interface Props {
  id: string;
  color: string;
  char: string;
  isNextChar: boolean;
}

const CharacterComponent: React.FC<Props> = (props: Props) => {
  return (
    <span
      id={props.id}
      style={{
        color: props.color,
        fontSize: '30px',
        fontFamily: 'oxygenMono',
        borderBottom: props.isNextChar ? 'solid' : 'none'
      }}>
      {props.char === ' ' ? '\u00A0' : props.char}
    </span>
  );
};

export const Character = React.memo<Props>(CharacterComponent);
