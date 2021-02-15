import React from 'react';
import useReactRouter from 'use-react-router';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store';
import { setAppState, setCountDownTime } from '../../../store/AppBase/actions';
import { APP_STATE_TIMEUP } from '../../../store/AppBase/types';

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

export const CountDown: React.FC = () => {
  const { countDownTime } = useSelector((state: RootState) => state.appBase);
  const dispatch = useDispatch();
  const { history } = useReactRouter();
  React.useEffect(() => {
    let count = countDownTime;
    const countDown = setInterval(() => {
      count -= 1;
      dispatch(setCountDownTime(count));
      if (count <= 0) {
        clearInterval(countDown);
        dispatch(setAppState(APP_STATE_TIMEUP));
        history.push('/timeup');
      }
    }, 1000);
    return () => clearInterval(countDown);
  }, []);
  return React.useMemo(() => <StyledView countDownTime={countDownTime} />, [countDownTime]);
};
