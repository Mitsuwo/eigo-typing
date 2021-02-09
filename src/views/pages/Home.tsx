import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useReactRouter from 'use-react-router';
import styled from 'styled-components';
import bgImage from '../../images/bg.jpg';
import { RootState } from '../../store';
import { clearCorrectCharCount } from '../../store/Keyboard/actions';
import { setAppState, resetCountDown, setShowJapanese } from '../../store/PageManager/actions';
import { APP_STATE_INITIAL, APP_STATE_TYPING } from '../../store/PageManager/types';
import { resetResultState } from '../../store/Result/actions';
import { resetTypingContentState } from '../../store/TypingContent/actions';
import { ShowJapaneseCheckBox } from '../components/common/ShowJapaneseCheckBox';
import { AnimatedTyping } from '../components/home/AnimatedTyping';
import { StartButton } from '../components/home/StartButton';

const HomeContainer: React.FC = () => {
  const { showJapanese } = useSelector((state: RootState) => state.pageManager);
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(setAppState(APP_STATE_INITIAL));
  }, []);
  const switchShowJapanese = (): void => {
    dispatch(setShowJapanese(!showJapanese));
  };
  const linkToTyping = (): void => {
    dispatch(setAppState(APP_STATE_TYPING));
    dispatch(clearCorrectCharCount());
    dispatch(resetTypingContentState());
    dispatch(resetCountDown());
    dispatch(resetResultState());
    const { history } = useReactRouter();
    history.push('/typing');
  };
  return (
    <div
      style={{
        height: '100vh',
        width: '100vw',
        backgroundImage: `url(${bgImage})`,
        backgroundSize: '100% 100%',
        overflowY: 'hidden'
      }}>
      <AppTitle>えいごでタイピング</AppTitle>
      <AnimatedTyping />
      <ButtonParent>
        <StartButton handleClickToTyping={linkToTyping} />
        <ShowJapaneseCheckBox
          showJapanese={showJapanese}
          fontColor="#e1eef6"
          onChange={switchShowJapanese}
        />
      </ButtonParent>
    </div>
  );
};

const AppTitle = styled.div`
  height: 5vh;
  margin-top: 15vh;
  margin-bottom: 5vh;
  color: #e1eef6;
  font-size: 40px;
  text-align: center;
  font-family: bokutachi;
`;

const ButtonParent = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  width: 25vw;
  margin-right: auto;
  margin-left: auto;
`;

export const Home = HomeContainer;
