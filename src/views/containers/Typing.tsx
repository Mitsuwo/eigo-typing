import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import storiesJson from '../../constant/stories.json';
import { Line, Story } from '../../store/TypingContent.tsx/types';
import { setStories, setConversation } from '../../store/TypingContent.tsx/action';
import { RootState } from '../../store';
import { setNextKey } from '../../store/Keyboard/actions';
import { CountDown } from '../components/CountDown';
import { Keyboard } from '../components/Keyboard';
import { TypingConversation } from './TypingConversation';

const TypingContainer: React.FC = () => {
  const { currentKeys, nextKey, correctCharCount } = useSelector(
    (state: RootState) => state.keyboard
  );
  const { currentScriptIndex, currentStoryIndex } = useSelector(
    (state: RootState) => state.typingContent
  );
  const dispatch = useDispatch();
  React.useEffect(() => {
    initialize();
  }, []);
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
  };
  return (
    <div>
      <CountDown />
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
