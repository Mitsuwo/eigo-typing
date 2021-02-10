import React from 'react';
import useReactRouter from 'use-react-router';
import { Button, Card, CardActions, CardContent } from '@material-ui/core';
import styled from 'styled-components';

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
  // TODO: buttonをコンポーネント化
  return (
    <Card className={props.className}>
      <CardContent className="card-content">タイムアップ！</CardContent>
      <CardActions className="card-actions">
        <Button variant="contained" onClick={handleClickToHome}>
          <div style={{ fontSize: '15px', fontFamily: 'koruri' }}>ホームにもどる</div>
        </Button>
        <Button variant="contained" onClick={handleClickToResult}>
          <div style={{ fontSize: '15px', fontFamily: 'koruri' }}>結果を表示する</div>
        </Button>
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
    font-family: koruri;
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
