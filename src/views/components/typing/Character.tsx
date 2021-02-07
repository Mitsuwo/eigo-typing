import React from 'react';
import styled from 'styled-components';

interface Props {
  id: string;
  color: string;
  char: string;
  isNextChar: boolean;
  shouldBreak: boolean;
}

const CharacterComponent: React.FC<Props> = (props: Props) => {
  return (
    <>
      <StyledCharacter id={props.id} color={props.color} isNextChar={props.isNextChar}>
        {props.char === ' ' ? '\u00A0' : props.char}
      </StyledCharacter>
      {props.shouldBreak ? <br /> : ''}
    </>
  );
};

const StyledCharacter = styled.span<{ color: string; isNextChar: boolean }>`
  color: ${({ color }) => color};
  font-size: 30px;
  font-family: oxygenMono;
  border-bottom: ${({ isNextChar }) => (isNextChar ? 'solid' : 'none')};
`;

export const Character = React.memo<Props>(CharacterComponent);
