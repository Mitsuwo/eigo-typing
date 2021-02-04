import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router';
import styled from 'styled-components';
import bgImage from '../../images/bg.jpg';
import { RootState } from '../../store';
import { clearCorrectCharCount } from '../../store/Keyboard/actions';
import { resetPageManager, setAppState } from '../../store/PageManager/actions';
import { APP_STATE_TYPING } from '../../store/PageManager/types';
import { resetTypingContentState, setShowJapanese } from '../../store/TypingContent/actions';
import { ShowJapaneseCheckBox } from '../components/common/ShowJapaneseCheckBox';
import { AnimatedTyping } from '../components/home/AnimatedTyping';
import { StartButton } from '../components/home/StartButton';

const HomeContainer: React.FC<RouteComponentProps> = (props: RouteComponentProps) => {
  const { showJapanese } = useSelector((state: RootState) => state.typingContent);
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(resetPageManager());
  }, []);
  const switchShowJapanese = (): void => {
    dispatch(setShowJapanese(!showJapanese));
  };
  const linkToTyping = (): void => {
    dispatch(setAppState(APP_STATE_TYPING));
    dispatch(clearCorrectCharCount());
    dispatch(resetTypingContentState());
    props.history.push('/typing');
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
        <StartButton linkToTyping={linkToTyping} />
        <ShowJapaneseCheckBox
          showJapanese={showJapanese}
          fontColor="#e1eef6"
          switchShowJapanese={switchShowJapanese}
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

export const Home = withRouter(HomeContainer);
