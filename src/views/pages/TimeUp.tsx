import React from 'react';
import useReactRouter from 'use-react-router';
import { Card, CardActions, CardContent } from '@material-ui/core';
import styled from 'styled-components';
import { AppButton } from '../components/common/AppButton';

type Props = {
  linkTo: (pageName: string) => void;
  className?: string;
};

const View: React.FC<Props> = (props: Props) => {
  const handleClickToResult = (): void => {
    props.linkTo('result');
  };
  const handleClickToHome = (): void => {
    props.linkTo('');
  };
  return (
    <Card className={props.className}>
      <CardContent className="card-content">タイムアップ！</CardContent>
      <CardActions className="card-actions">
        <AppButton text="ホームにもどる" handleClick={handleClickToHome} />
        <AppButton text="結果を表示する" handleClick={handleClickToResult} />
      </CardActions>
    </Card>
  );
};

const StyledView = styled(View)`
  width: 600px;
  height: 300px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fffff3;
  > .card-content {
    height: 100px;
    margin-top: 50px;
    text-align: center;
    color: #566270;
    font-size: 40px;
    font-family: Noto Sans JP;
  }
  > .card-actions {
    margin-left: 140px;
    > button:nth-child(1) {
      color: #566270;
    }
    > button:nth-child(2) {
      background-color: #bd1550;
      color: #fffff3;
    }
  }
`;

export const TimeUp: React.FC = () => {
  const { history } = useReactRouter();
  const linkTo = (pageName: string) => {
    history.push(`/${pageName}`);
  };
  return React.useMemo(() => <StyledView linkTo={linkTo} />, []);
};
