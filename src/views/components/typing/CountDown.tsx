import React from 'react';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import styled from 'styled-components';

type Props = {
  countDownTime: number;
  className?: string;
};

const View: React.FC<Props> = (props: Props) => {
  return (
    <div className={props.className}>
      <AccessTimeIcon htmlColor="grey" fontSize="large" />
      <div className="time">{props.countDownTime}</div>
    </div>
  );
};

const StyledView = styled(View)`
  height: 8vh;
  padding: auto;
  width: 10vw;
  margin-top: 4vh;
  margin-left: 45vw;
  display: flex;
  > .time {
    font-size: 3.5vh;
    font-family: serif;
    color: #808080;
    margin-left: 5px;
  }
`;

export const CountDown: React.FC<Props> = (props: Props) => {
  return React.useMemo(() => <StyledView countDownTime={props.countDownTime} />, [
    props.countDownTime
  ]);
};
