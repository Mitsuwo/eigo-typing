import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { RootState } from '../../../store';

type Props = {
  color: string;
  char: string;
  isNextChar: boolean;
  className?: string;
};

type ContainerProps = {
  char: string;
  index: number;
  shouldBreak: boolean;
};

const View: React.FC<Props> = (props: Props) => {
  return <span className={props.className}>{props.char === ' ' ? '\u00A0' : props.char}</span>;
};

const StyledView = styled(View)`
  color: ${(props: Props) => props.color};
  font-size: 30px;
  font-family: serif;
  border-bottom: ${(props: Props) => (props.isNextChar ? 'solid' : 'none')};
`;

const Container: React.FC<ContainerProps> = (props: ContainerProps) => {
  const { correctCharCount } = useSelector((state: RootState) => state.keyboard);
  const color = correctCharCount > props.index ? 'black' : 'grey';
  const isNextChar = correctCharCount === props.index;
  return React.useMemo(() => {
    return (
      <>
        <StyledView color={color} char={props.char} isNextChar={isNextChar} />
        {props.shouldBreak ? <br /> : ''}
      </>
    );
  }, [color, props.char, isNextChar, props.shouldBreak]);
};

export const Character = React.memo(Container);
