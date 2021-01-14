import React from 'react';

interface Props {
  countDownTime: number;
}

const CountDownComponent: React.FC<Props> = (props: Props) => {
  return (
    <div style={{ height: '50px' }}>
      <div>{props.countDownTime}</div>
    </div>
  );
};

export const CountDown = React.memo(CountDownComponent);
