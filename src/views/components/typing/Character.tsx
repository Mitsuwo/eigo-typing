import React from 'react';
import styled from 'styled-components';

type Props = {
  id: string;
  color: string;
  char: string;
  isNextChar: boolean;
  shouldBreak?: boolean;
  className?: string;
};

const View: React.FC<Props> = (props: Props) => {
  return (
    <span id={props.id} className={props.className}>
      {props.char === ' ' ? '\u00A0' : props.char}
    </span>
  );
};

const StyledView = styled(View)`
  color: ${(props: Props) => props.color};
  font-size: 30px;
  font-family: oxygenMono;
  border-bottom: ${(props: Props) => (props.isNextChar ? 'solid' : 'none')};
`;

export const Character: React.FC<Props> = (props: Props) => {
  return React.useMemo(() => {
    return (
      <>
        <StyledView
          id={props.id}
          color={props.color}
          char={props.char}
          isNextChar={props.isNextChar}
        />
        {props.shouldBreak ? <br /> : ''}
      </>
    );
  }, [props.color, props.char, props.isNextChar, props.shouldBreak]);
};
