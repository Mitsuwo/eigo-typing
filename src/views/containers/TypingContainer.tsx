import React from 'react';
import { connect } from 'react-redux';
import wordsJson from '../../constant/words.json';
import { RootState } from '../../store';
import { Keyboard } from '../components/Keyboard';

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
  const [correctTypingConut, setCorrectTypingConut] = React.useState<number>(0);
  const [currentKeys, setCurrentKeys] = React.useState<string[]>([]);
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
    if (code.startsWith('Key')) {
      const keyText = code.substr(-1);
      if (word[correctTypingConut].toUpperCase() === keyText) {
        setCorrectTypingConut((count: number) => count + 1);
      }
      if (currentKeys.indexOf(keyText) === -1) {
        setCurrentKeys([...currentKeys, keyText]);
      }
    }
  };
  const handleKeyUp = (event: React.KeyboardEvent): void => {
    const { code } = event;
    if (code.startsWith('Key')) {
      const keyText = code.substr(-1);
      setCurrentKeys(currentKeys.filter((currentKey: string) => currentKey !== keyText));
    }
  };
  return (
    <div ref={containerRef} onKeyDown={handleKeyDown} onKeyUp={handleKeyUp} tabIndex={0}>
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
      <Keyboard currentKeys={currentKeys} />
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
