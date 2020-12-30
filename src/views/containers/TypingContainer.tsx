import React from 'react';
import wordsJson from '../../constant/words.json';

interface Word {
  word: string;
  meaning: string;
}

const words: Word[] = JSON.parse(JSON.stringify(wordsJson));
let { word } = words[Math.floor(Math.random() * words.length - 1)];

const Typing: React.FC = () => {
  const [correctTypingConut, setCorrectTypingConut] = React.useState(0);
  const containerRef: React.MutableRefObject<HTMLDivElement | null> = React.useRef(null);
  const isElement = (element: HTMLDivElement | null): element is HTMLDivElement => {
    return typeof element !== null;
  };
  React.useEffect(() => {
    const { current } = containerRef;
    if (isElement(current)) {
      current.focus();
    }
  }, [setCorrectTypingConut]);
  React.useEffect(() => {
    if (correctTypingConut >= word.length) {
      ({ word } = words[Math.floor(Math.random() * words.length - 1)]);
      setCorrectTypingConut(0);
    }
  }, [correctTypingConut]);
  const handleKeyDown = (event: React.KeyboardEvent): void => {
    const { code } = event;
    if (code.startsWith('Key') && word[correctTypingConut].toUpperCase() === code.substr(-1)) {
      setCorrectTypingConut((count: number) => count + 1);
    }
  };
  return (
    <div ref={containerRef} onKeyDown={handleKeyDown} tabIndex={0}>
      <div>Type below</div>
      <div key={word}>
        {word.split('').map((char: string, index: number) => {
          const color = correctTypingConut > index ? 'black' : 'grey';
          return (
            <span style={{ color }} key={`${word}-${index}`}>
              {char}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export const TypingContainer = Typing;
