import React from 'react';
import { connect } from 'react-redux';
import wordsJson from '../../constant/words.json';
import { RootState } from '../../store';

interface Word {
  word: string;
  meaning: string;
}

interface StateToProps {
  currentContainer: string;
}

type Props = StateToProps;

const words: Word[] = JSON.parse(JSON.stringify(wordsJson));
let { word } = words[Math.floor(Math.random() * words.length - 1)];

const Typing: React.FC<Props> = (props: Props) => {
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
  }, [props.currentContainer]);
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

const mapStateToProps = (state: RootState): StateToProps => {
  const { currentContainer } = state.containerManager;
  return {
    currentContainer
  };
};

export const TypingContainer = connect(mapStateToProps)(Typing);
