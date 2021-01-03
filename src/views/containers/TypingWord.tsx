import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Character } from '../components/Character';
import {
  addCurrentKey,
  deleteCurrentKey,
  clearCurrentKeys,
  setNextKey,
  incrementCorrectCharCount,
  clearCorrectCharCount
} from '../../store/Keyboard/actions';
import { RootState } from '../../store';
import { setCurrentWordIndex, setWord } from '../../store/TypingContent.tsx/action';

const TypingWordContainer: React.FC = () => {
  const containerRef: React.MutableRefObject<HTMLDivElement | null> = React.useRef(null);
  const dispatch = useDispatch();
  const { nextKey, correctCharCount } = useSelector((state: RootState) => state.keyboard);
  const { word, words, currentWordIndex } = useSelector((state: RootState) => state.typingContent);
  const isElement = (element: HTMLDivElement | null): element is HTMLDivElement => {
    return typeof element !== null;
  };
  React.useEffect(() => {
    const { current } = containerRef;
    if (isElement(current) && current !== document.activeElement) {
      console.log('FOCUS');
      current.focus();
    }
  });
  React.useEffect(() => {
    if (correctCharCount < word.length) {
      dispatch(setNextKey(word[correctCharCount].toUpperCase()));
    } else {
      dispatch(setWord(words.length > 0 ? words[currentWordIndex + 1].word : ''));
      dispatch(setCurrentWordIndex(currentWordIndex + 1));
      dispatch(clearCorrectCharCount());
      dispatch(clearCurrentKeys());
    }
  }, [correctCharCount]);
  const handleKeyDown = (event: React.KeyboardEvent): void => {
    const { code } = event;
    if (code.startsWith('Key')) {
      const key = code.substr(-1);
      if (nextKey === key) {
        dispatch(incrementCorrectCharCount());
      }
      dispatch(addCurrentKey(key));
    }
  };
  const handleKeyUp = (event: React.KeyboardEvent): void => {
    const { code } = event;
    if (code.startsWith('Key')) {
      const key = code.substr(-1);
      dispatch(deleteCurrentKey(key));
    }
  };
  return (
    <div key={word} onKeyDown={handleKeyDown} onKeyUp={handleKeyUp} ref={containerRef} tabIndex={0}>
      {word
        ? word.split('').map((char: string, index: number) => {
            const color = correctCharCount > index ? 'black' : 'grey';
            return <Character key={`${word}-${index}`} char={char} color={color} />;
          })
        : ''}
    </div>
  );
};

export const TypingWord = TypingWordContainer;
