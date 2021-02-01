import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router';
import { Button } from '@material-ui/core';
import styled from 'styled-components';
import bgImage from '../../images/bg.jpg';
import { RootState } from '../../store';
import { resetPageManager, setAppState } from '../../store/PageManager/actions';
import { APP_STATE_TYPING } from '../../store/PageManager/types';
import { setShowJapanese } from '../../store/TypingContent/actions';
import { ShowJapaneseCheckBox } from '../components/common/ShowJapaneseCheckBox';
import { CustomThemeProvider } from '../styles/CustomThemeProvider';
import { AnimatedTyping } from '../components/home/AnimatedTyping';

const HomeContainer: React.FC<RouteComponentProps> = (props: RouteComponentProps) => {
  const { showJapanese } = useSelector((state: RootState) => state.typingContent);
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(resetPageManager());
  }, []);
  const switchShowJapanese = () => {
    dispatch(setShowJapanese(!showJapanese));
  };
  const linkToTyping = () => {
    dispatch(setAppState(APP_STATE_TYPING));
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
        <Button variant="contained" color="secondary" onClick={linkToTyping}>
          <p style={{ color: '#e1eef6', fontFamily: 'oxygenMono', fontSize: '20px', margin: 0 }}>
            START
          </p>
        </Button>
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
