import React from 'react';
import { Button } from '@material-ui/core';

type Props = {
  handleClickToTyping: () => void;
  className?: string;
};

const View: React.FC<Props> = (props: Props) => {
  return (
    <Button
      style={{
        backgroundColor: '#bd1550',
        color: '#e1eef6',
        fontFamily: 'oxygenMono',
        fontSize: '20px',
        margin: 0
      }}
      variant="contained"
      onClick={props.handleClickToTyping}>
      START
    </Button>
  );
};

export const StartButton: React.FC<Props> = (props: Props) => {
  return React.useMemo(() => <View handleClickToTyping={props.handleClickToTyping} />, []);
};
