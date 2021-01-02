import React from 'react';
import { connect } from 'react-redux';
import wordsJson from '../../constant/words.json';
import { RootState } from '../../store';
import { Content } from '../components/Content';
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
let nextKey = '';

const TypingContainer: React.FC<Props> = (props: Props) => {
  const [correctTypingCount, setCorrectTypingCount] = React.useState<number>(0);
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
    if (correctTypingCount >= word.length) {
      ({ word } = words[Math.floor(Math.random() * words.length - 1)]);
      setCorrectTypingCount(0);
    }
  }, [correctTypingCount]);
  const handleKeyDown = (event: React.KeyboardEvent): void => {
    const { code } = event;
    if (code.startsWith('Key')) {
      const keyText = code.substr(-1);
      nextKey = word[correctTypingCount].toUpperCase();
      if (nextKey === keyText) {
        setCorrectTypingCount((count: number) => count + 1);
      }
      if (currentKeys.indexOf(keyText) === -1) {
        setCurrentKeys([...currentKeys, keyText]);
      }
    }
  };
  const handleKeyUp = (event: React.KeyboardEvent): void => {
    const { code } = event;
    nextKey = word[correctTypingCount].toUpperCase();
    if (code.startsWith('Key')) {
      const keyText = code.substr(-1);
      setCurrentKeys(currentKeys.filter((currentKey: string) => currentKey !== keyText));
    }
  };
  return (
    <div ref={containerRef} onKeyDown={handleKeyDown} onKeyUp={handleKeyUp} tabIndex={0}>
      <div>Type below</div>
      <Content content={word} correctTypingCount={correctTypingCount} />
      <Keyboard currentKeys={currentKeys} nextKey={nextKey} />
    </div>
  );
};

const mapStateToProps = (state: RootState): StateToProps => {
  const { currentContainer } = state.containerManager;
  return {
    currentContainer
  };
};

export const Typing = connect(mapStateToProps)(TypingContainer);
