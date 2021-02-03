import React from 'react';
import { Button, Card, CardActions, CardContent, makeStyles } from '@material-ui/core';

interface Props {
  linkTo: (pageName: string) => void;
}

const useStyles = makeStyles({
  root: {
    width: '600px',
    height: '300px',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#FFFFF3'
  },
  cardActions: {
    marginLeft: '140px'
  },
  homeButton: {
    color: '#566270'
  },
  resultButton: {
    backgroundColor: '#bd1550',
    color: '#FFFFF3'
  }
});

const TimeUpComponent: React.FC<Props> = (props: Props) => {
  const classes = useStyles();
  const handleClickToResult = () => {
    props.linkTo('result');
  };
  const handleClickToHome = () => {
    props.linkTo('');
  };
  return (
    <Card className={classes.root}>
      <CardContent>
        <div
          style={{
            height: '100px',
            marginTop: '50px',
            textAlign: 'center',
            color: '#566270',
            fontSize: '40px',
            fontFamily: 'koruri'
          }}>
          タイムアップ！
        </div>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Button className={classes.homeButton} variant="contained" onClick={handleClickToHome}>
          <div style={{ fontSize: '15px', fontFamily: 'koruri' }}>ホームにもどる</div>
        </Button>
        <Button className={classes.resultButton} variant="contained" onClick={handleClickToResult}>
          <div style={{ fontSize: '15px', fontFamily: 'koruri' }}>結果を表示する</div>
        </Button>
      </CardActions>
    </Card>
  );
};

export const TimeUp = React.memo(TimeUpComponent);
