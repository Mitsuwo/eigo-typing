import React from 'react';
import { Button } from '@material-ui/core';
import styled from 'styled-components';

type Props = {
  text: string;
  handleClick: () => void;
  className?: string;
};

const View: React.FC<Props> = (props: Props) => {
  return (
    <Button className={props.className} variant="contained" onClick={props.handleClick}>
      {props.text}
    </Button>
  );
};

export const AppButton = styled(View)`
  font-size: 15px;
  font-family: Noto Sans JP;
`;
