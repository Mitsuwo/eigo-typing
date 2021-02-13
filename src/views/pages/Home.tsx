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

type Props = {
  linkToTyping: () => void;
  showJapanese: boolean;
  switchShowJapanese: () => void;
  className?: string;
};

const View: React.FC<Props> = (props: Props) => {
  return (
    <div className={props.className}>
      <div className="app-title">えいごでタイピング</div>
      <AnimatedTyping />
      <div className="button-parent">
        <StartButton handleClickToTyping={props.linkToTyping} />
        <ShowJapaneseCheckBox
          showJapanese={props.showJapanese}
          fontColor="#e1eef6"
          onChange={props.switchShowJapanese}
        />
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
  const { showJapanese } = useSelector((state: RootState) => state.pageManager);
  const dispatch = useDispatch();
  const { history } = useReactRouter();
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
    history.push('/typing');
  };
  return (
    <StyledView
      showJapanese={showJapanese}
      switchShowJapanese={switchShowJapanese}
      linkToTyping={linkToTyping}
    />
  );
};
