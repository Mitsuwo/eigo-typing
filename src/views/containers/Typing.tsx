import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import wordsJson from '../../constant/words.json';
import { Word } from '../../store/TypingContent.tsx/types';
import { setWords, setWord } from '../../store/TypingContent.tsx/action';
import { RootState } from '../../store';
import { setNextKey } from '../../store/Keyboard/actions';
import { TypingWord } from './TypingWord';
import { TypingConversation } from './TypingConversation';
import { Keyboard } from './Keyboard';

const TypingContainer: React.FC = () => {
  const dispatch = useDispatch();
  const { currentWordIndex } = useSelector((state: RootState) => state.typingContent);
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
  React.useEffect(() => {
    let words: Word[] = JSON.parse(JSON.stringify(wordsJson));
    words = shuffleArray<Word>(words);
    const { word } = words[currentWordIndex];
    dispatch(setWord(word));
    dispatch(setWords(words));
    dispatch(setNextKey(word[correctCharCount].toUpperCase()));
  }, []);
  const content = 'word';
  return (
    <div>
      <div>Type below</div>
      {typeof content === 'string' ? <TypingWord /> : <TypingConversation />}
      <Keyboard />
    </div>
  );
};

export const Typing = TypingContainer;
