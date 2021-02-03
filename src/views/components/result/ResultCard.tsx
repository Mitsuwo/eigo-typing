import { Card, CardContent, makeStyles } from '@material-ui/core';
import React from 'react';

interface Props {
  children: JSX.Element;
}

const useStyles = makeStyles({
  root: {
    width: '90vw',
    margin: '1vh 5vw',
    backgroundColor: '#FFFFF3'
  }
});

const ResultCardComponent: React.FC<Props> = (props: Props) => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardContent>{props.children}</CardContent>
    </Card>
  );
};

export const ResultCard = React.memo(ResultCardComponent);
