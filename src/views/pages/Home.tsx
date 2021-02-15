import React from 'react';
import { useDispatch } from 'react-redux';
import useReactRouter from 'use-react-router';
import styled from 'styled-components';
import bgImage from '../../images/bg.jpg';
import { resetAppBase } from '../../store/AppBase/actions';
import { ShowJapaneseCheckBox } from '../components/common/ShowJapaneseCheckBox';
import { AnimatedTyping } from '../components/home/AnimatedTyping';
import { StartButton } from '../components/home/StartButton';

type Props = {
  linkToTyping: () => void;
  className?: string;
};

const View: React.FC<Props> = (props: Props) => {
  return (
    <div className={props.className}>
      <div className="app-title">えいごでタイピング</div>
      <AnimatedTyping />
      <div className="button-parent">
        <StartButton handleClickToTyping={props.linkToTyping} />
        <ShowJapaneseCheckBox fontColor="#e1eef6" />
      </div>
    </div>
  );
};

const StyledView = styled(View)`
  height: 100vh;
  width: 100vw;
  background-image: url(${bgImage});
  background-size: 100% 100%;
  overflow-y: hidden;
  > .app-title {
    height: 5vh;
    margin-top: 15vh;
    margin-bottom: 5vh;
    color: #e1eef6;
    font-size: 40px;
    text-align: center;
    font-family: Noto Sans JP;
    font-weight: bold;
  }
  > .button-parent {
    text-align: center;
    display: flex;
    flex-direction: column;
    width: 25vw;
    margin-right: auto;
    margin-left: auto;
  }
`;

export const Home: React.FC = () => {
  const dispatch = useDispatch();
  const { history } = useReactRouter();
  React.useEffect(() => {
    dispatch(resetAppBase());
  }, []);
  const linkToTyping = (): void => {
    history.push('/typing');
  };
  return <StyledView linkToTyping={linkToTyping} />;
};
