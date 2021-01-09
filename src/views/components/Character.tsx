import React from 'react';

interface Props {
  id: string;
  color: string;
  char: string;
  isNextChar: boolean;
  isCurrentScript: boolean;
}

const CharacterComponent: React.FC<Props> = (props: Props) => {
  return (
    <span
      id={props.id}
      style={{
        color: props.color,
        fontSize: '30px',
        borderBottom: props.isCurrentScript && props.isNextChar ? 'solid' : 'none'
      }}>
      {props.char}
    </span>
  );
};

export const Character = React.memo<Props>(CharacterComponent);
