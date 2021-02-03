import React from 'react';
import { Button } from '@material-ui/core';

interface Props {
  linkToTyping: () => void;
}

const StartButtonComponent: React.FC<Props> = (props: Props) => {
  return (
    <Button style={{ backgroundColor: '#bd1550' }} variant="contained" onClick={props.linkToTyping}>
      <p style={{ color: '#e1eef6', fontFamily: 'oxygenMono', fontSize: '20px', margin: 0 }}>
        START
      </p>
    </Button>
  );
};

export const StartButton = React.memo<Props>(StartButtonComponent);
