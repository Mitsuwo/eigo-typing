import React from 'react';
import styled from 'styled-components';

type Props = {
  fontColor: string;
  text: string;
  className?: string;
};

const View: React.FC<Props> = (props: Props) => {
  return <div className={props.className}>{props.text}</div>;
};

const StyledView = styled(View)`
  color: ${(props: Props) => props.fontColor};
  font-family: Noto Sans JP;
  font-weight: bold;
`;

export const AppLabel: React.FC<Props> = (props: Props) => {
  return React.useMemo(() => <StyledView fontColor={props.fontColor} text={props.text} />, []);
};
