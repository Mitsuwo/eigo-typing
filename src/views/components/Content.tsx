import React from 'react';
import { Character } from './Character';

interface Props {
  content: string;
  correctTypingCount: number;
}

const ContentComponent: React.FC<Props> = (props: Props) => {
  return (
    <div key={props.content}>
      {props.content
        ? props.content.split('').map((char: string, index: number) => {
            const color = props.correctTypingCount > index ? 'black' : 'grey';
            return <Character key={`${props.content}-${index}`} char={char} color={color} />;
          })
        : ''}
    </div>
  );
};

export const Content = React.memo<Props>(ContentComponent);
