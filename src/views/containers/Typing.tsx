import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import storiesJson from '../../constant/stories.json';
import { Line, Story } from '../../store/TypingContent/types';
import { setStories, setConversation } from '../../store/TypingContent/actions';
import { RootState } from '../../store';
import { setNextKey } from '../../store/Keyboard/actions';
import { CountDown } from '../components/CountDown';
import { Keyboard } from '../components/Keyboard';
import { setAppState, setCountDownTime } from '../../store/PageManager/actions';
import { APP_STATE_TIMEUP, APP_STATE_TYPING } from '../../store/PageManager/types';
import { TypingConversation } from './TypingConversation';

const TypingContainer: React.FC = () => {
  const { currentKeys, nextKey, correctCharCount } = useSelector(
    (state: RootState) => state.keyboard
  );
  const { currentScriptIndex, currentStoryIndex } = useSelector(
    (state: RootState) => state.typingContent
  );
  const { appState, countDownTime } = useSelector((state: RootState) => state.pageManager);
  const dispatch = useDispatch();
  React.useEffect(() => {
    initialize();
  }, []);
  React.useEffect(() => {
    if (appState === APP_STATE_TYPING) {
      startCountDown();
    }
  }, [appState]);
  const initialize = () => {
    let stories: Story[] = JSON.parse(JSON.stringify(storiesJson));
    stories = shuffleArray<Story>(stories);
    let { conversation } = stories[currentStoryIndex];
    conversation = conversation.map((obj: Line) => {
      obj.script = obj.script.replaceAll(' ', '␣');
      return obj;
    });
    const { script } = conversation[currentScriptIndex];
    dispatch(setStories(stories));
    dispatch(setConversation(conversation));
    dispatch(setNextKey(script[correctCharCount]));
    dispatch(setAppState(APP_STATE_TYPING));
  };
  const startCountDown = () => {
    let count = countDownTime;
    const countDown = setInterval(() => {
      count -= 1;
      dispatch(setCountDownTime(count));
      if (count === 0) {
        clearInterval(countDown);
        dispatch(setAppState(APP_STATE_TIMEUP));
      }
    }, 1000);
  };
  return appState === APP_STATE_TIMEUP ? (
    <div>
      <div>タイムアップ</div>
      <Link to="/result">結果を表示する</Link>
    </div>
  ) : (
    <div>
      <CountDown countDownTime={countDownTime} />
      <TypingConversation />
      <Keyboard currentKeys={currentKeys} nextKey={nextKey} />
    </div>
  );
};

const shuffleArray = <T extends unknown>(array: T[]): T[] => {
  for (let i = array.length - 1; 0 < i; i--) {
    const randomNumber = Math.floor(Math.random() * (i + 1));
    const obj = array[i];
    array[i] = array[randomNumber];
    array[randomNumber] = obj;
  }
  return array;
};

export const Typing = TypingContainer;
