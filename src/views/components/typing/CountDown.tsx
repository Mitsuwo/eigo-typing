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
      <span>{props.countDownTime}</span>
    </div>
  );
};

const StyledView = styled(View)`
  position: absolute;
  width: 10vw;
  padding: auto;
  top: 25px;
  margin-left: 45vw;
  display: flex;
  > svg {
    height: 59px;
  }
  > span {
    line-height: 59px;
    padding: auto;
    font-size: 30px;
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
