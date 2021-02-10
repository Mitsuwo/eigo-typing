import { Card, CardContent } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';

type Props = {
  children: JSX.Element;
  className?: string;
};

const View: React.FC<Props> = (props: Props) => {
  return (
    <Card className={props.className}>
      <CardContent>{props.children}</CardContent>
    </Card>
  );
};

const StyledView = styled(View)`
  width: 90vw;
  margin: 1vh 5vw;
  background-color: #fffff3;
`;

export const ResultCard: React.FC<Props> = (props: Props) => {
  return React.useMemo(() => <StyledView>{props.children}</StyledView>, []);
};
