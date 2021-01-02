import React from 'react';

interface Props {
  color: string;
  char: string;
}

const CharacterComponent: React.FC<Props> = (props: Props) => {
  return <span style={{ color: props.color, fontSize: '30px' }}>{props.char}</span>;
};

export const Character = React.memo<Props>(CharacterComponent);
