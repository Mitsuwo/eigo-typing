import React from 'react';
import AccessTimeIcon from '@material-ui/icons/AccessTime';

interface Props {
  countDownTime: number;
}

const CountDownComponent: React.FC<Props> = (props: Props) => {
  return (
    <div
      style={{
        height: '8vh',
        padding: '4vh 2vw',
        width: '10vw',
        marginLeft: '45vw',
        display: 'flex'
      }}>
      <AccessTimeIcon htmlColor="grey" fontSize="large" />
      <div
        style={{ fontSize: '3.5vh', fontFamily: 'oxygenMono', color: 'grey', marginLeft: '5px' }}>
        {props.countDownTime}
      </div>
    </div>
  );
};

export const CountDown = React.memo(CountDownComponent);
