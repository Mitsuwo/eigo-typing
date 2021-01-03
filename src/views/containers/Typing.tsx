import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import wordsJson from '../../constant/words.json';
import storiesJson from '../../constant/stories.json';
import { Story, Word } from '../../store/TypingContent.tsx/types';
import {
  setWords,
  setWord,
  setStories,
  setConversation
} from '../../store/TypingContent.tsx/action';
import { RootState } from '../../store';
import { setNextKey } from '../../store/Keyboard/actions';
import { TypingWord } from './TypingWord';
import { TypingConversation } from './TypingConversation';
import { Keyboard } from './Keyboard';

const TypingContainer: React.FC = () => {
  const dispatch = useDispatch();
  const { currentWordIndex, currentStoryIndex, contentType } = useSelector(
    (state: RootState) => state.typingContent
  );
  const { correctCharCount } = useSelector((state: RootState) => state.keyboard);
  const shuffleArray = <T extends unknown>(array: T[]): T[] => {
    for (let i = array.length - 1; 0 < i; i--) {
      const randomNumber = Math.floor(Math.random() * (i + 1));
      const obj = array[i];
      array[i] = array[randomNumber];
      array[randomNumber] = obj;
    }
    return array;
  };
  const setWordContent = () => {
    let words: Word[] = JSON.parse(JSON.stringify(wordsJson));
    words = shuffleArray<Word>(words);
    const { word } = words[currentWordIndex];
    dispatch(setWords(words));
    dispatch(setWord(word));
    dispatch(setNextKey(word[correctCharCount].toUpperCase()));
  };
  const setStoryContent = () => {
    let stories: Story[] = JSON.parse(JSON.stringify(storiesJson));
    stories = shuffleArray<Story>(stories);
    const { conversation } = stories[currentStoryIndex];
    dispatch(setStories(stories));
    dispatch(setConversation(conversation));
    // TODO: setNextKey
  };
  React.useEffect(() => {
    setWordContent();
    setStoryContent();
  }, []);
  return (
    <div>
      <div>Type below</div>
      {contentType === 'word' ? <TypingWord /> : <TypingConversation />}
      <Keyboard />
    </div>
  );
};

export const Typing = TypingContainer;
