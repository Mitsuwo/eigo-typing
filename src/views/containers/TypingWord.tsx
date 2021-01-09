import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Character } from '../components/Character';
import {
  addCurrentKey,
  deleteCurrentKey,
  setNextKey,
  incrementCorrectCharCount,
  clearCorrectCharCount
} from '../../store/Keyboard/actions';
import { RootState } from '../../store';
import { setCurrentWordIndex, setWord } from '../../store/TypingContent.tsx/action';

const TypingWordContainer: React.FC = () => {
  const dispatch = useDispatch();
  const { nextKey, correctCharCount, currentKeys } = useSelector(
    (state: RootState) => state.keyboard
  );
  const { word, words, currentWordIndex } = useSelector((state: RootState) => state.typingContent);
  const containerRef: React.MutableRefObject<HTMLDivElement | null> = React.useRef(null);
  const isElement = (element: HTMLDivElement | null): element is HTMLDivElement => {
    return typeof element !== null;
  };
  React.useEffect(() => {
    const { current } = containerRef;
    if (isElement(current) && current !== document.activeElement) {
      current.focus();
    }
  });
  React.useEffect(() => {
    if (correctCharCount < word.length) {
      dispatch(setNextKey(word[correctCharCount]));
    } else {
      dispatch(setWord(words.length > 0 ? words[currentWordIndex + 1].word : ''));
      dispatch(setCurrentWordIndex(currentWordIndex + 1));
      dispatch(clearCorrectCharCount());
    }
  }, [correctCharCount]);
  const handleKeyDown = (event: React.KeyboardEvent): void => {
    const { code, key } = event;
    if (key && key === nextKey) {
      dispatch(incrementCorrectCharCount());
    }
    if (!currentKeys.includes(code)) {
      dispatch(addCurrentKey(code));
    }
  };
  const handleKeyUp = (event: React.KeyboardEvent): void => {
    const { code } = event;
    dispatch(deleteCurrentKey(code));
  };
  return (
    <div key={word} onKeyDown={handleKeyDown} onKeyUp={handleKeyUp} ref={containerRef} tabIndex={0}>
      {word
        ? word.split('').map((char: string, index: number) => {
            const color = correctCharCount > index ? 'black' : 'grey';
            const isNextChar = correctCharCount === index;
            return (
              <Character
                id={`${word}-${index}`}
                key={index}
                char={char}
                color={color}
                isNextChar={isNextChar}
                isCurrentScript
              />
            );
          })
        : ''}
    </div>
  );
};

export const TypingWord = TypingWordContainer;
