import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import scriptsJson from '../../constant/corpus.json';
import { RootState } from '../../store';
import {
  setCurrentScript,
  setCurrentScriptIndex,
  setScripts,
  setShowJapanese
} from '../../store/TypingContent/actions';
import { Script } from '../../store/TypingContent/types';
import { CountDown } from '../components/CountDown';
import { Keyboard } from '../components/Keyboard';
import {
  setAppState,
  setCountDownTime,
  addIncorrectKey,
  addCorrectKey
} from '../../store/PageManager/actions';
import { APP_STATE_TIMEUP } from '../../store/PageManager/types';
import { SPACE_VALUE } from '../../constant/typingConst';
import { ScriptEnglish } from '../components/ScriptEnglish';
import {
  clearCorrectCharCount,
  setNextKey,
  addCurrentKey,
  deleteCurrentKey,
  incrementCorrectCharCount
} from '../../store/Keyboard/actions';
import { ScriptJapanese } from '../components/ScriptJapanese';
import { ShowJapaneseCheckBox } from '../components/ShowJapaneseCheckBox';

let lastInputTime = 0;

const TypingContainer: React.FC = () => {
  const { currentKeys, nextKey, correctCharCount } = useSelector(
    (state: RootState) => state.keyboard
  );
  const { scripts, currentScript, currentScriptIndex, showJapanese } = useSelector(
    (state: RootState) => state.typingContent
  );
  const { appState, countDownTime } = useSelector((state: RootState) => state.pageManager);
  const dispatch = useDispatch();
  React.useEffect(() => {
    initialize();
  }, []);
  React.useEffect(() => {
    if (!currentScript) {
      return;
    }
    if (correctCharCount < currentScript.english.length) {
      dispatch(setNextKey(currentScript.english[correctCharCount]));
    } else {
      const nextScriptIndex = currentScriptIndex + 1;
      dispatch(setCurrentScriptIndex(nextScriptIndex));
      dispatch(setCurrentScript(scripts[nextScriptIndex]));
      dispatch(clearCorrectCharCount());
    }
  }, [correctCharCount]);
  const initialize = () => {
    let scripts: Script[] = JSON.parse(JSON.stringify(scriptsJson));
    scripts = shuffleArray<Script>(scripts);
    dispatch(setScripts(scripts));
    dispatch(setCurrentScript(scripts[currentScriptIndex]));
    dispatch(setNextKey(scripts[currentScriptIndex].english[0]));
    focusScriptWrapper();
    lastInputTime = 0;
    startCountDown();
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
  const scriptWrapperRef: React.MutableRefObject<HTMLDivElement | null> = React.useRef(null);
  const isElement = (element: HTMLDivElement | null): element is HTMLDivElement => {
    return typeof element !== null;
  };
  const focusScriptWrapper = (): void => {
    const { current } = scriptWrapperRef;
    if (isElement(current) && current !== document.activeElement && appState !== APP_STATE_TIMEUP) {
      current.focus();
    }
  };
  const isCorrectInput = (key: string): boolean => {
    return key === nextKey;
  };
  const setTypingInterval = (key: string) => {
    if (lastInputTime !== 0) {
      const interval = performance.now() - lastInputTime;
      dispatch(addCorrectKey({ keyText: key, interval: Math.floor(interval * 1000) / 1000000 }));
    }
    lastInputTime = performance.now();
  };
  const handleKeyDown = (event: React.KeyboardEvent): void => {
    const { code, key } = event;
    if (key === SPACE_VALUE) {
      event.preventDefault();
    }
    if (isCorrectInput(key)) {
      setTypingInterval(key);
      dispatch(incrementCorrectCharCount());
    } else {
      dispatch(addIncorrectKey(key));
    }
    if (!currentKeys.includes(code)) {
      dispatch(addCurrentKey(code));
    }
  };
  const handleKeyUp = (event: React.KeyboardEvent): void => {
    dispatch(deleteCurrentKey(event.code));
  };
  const switchShowJapanese = () => {
    dispatch(setShowJapanese(!showJapanese));
  };
  const scriptJapanese = scripts[currentScriptIndex] ? scripts[currentScriptIndex].japanese : '';
  return appState === APP_STATE_TIMEUP ? (
    <div>
      <div>タイムアップ</div>
      <Link to="/result">結果を表示する</Link>
    </div>
  ) : (
    <div>
      <CountDown countDownTime={countDownTime} />
      <ShowJapaneseCheckBox showJapanese={showJapanese} switchShowJapanese={switchShowJapanese} />
      <ScriptWrapper
        ref={scriptWrapperRef}
        onKeyDown={handleKeyDown}
        onKeyUp={handleKeyUp}
        onBlur={focusScriptWrapper}
        tabIndex={0}>
        <ScriptEnglish
          script={currentScript ? currentScript.english : ''}
          correctCharCount={correctCharCount}
          scriptIndex={currentScriptIndex}
          currentScriptIndex={currentScriptIndex}
        />
      </ScriptWrapper>
      {showJapanese ? <ScriptJapanese scriptJapanese={scriptJapanese} /> : ''}
      <Keyboard currentKeys={currentKeys} nextKey={nextKey} />
    </div>
  );
};

function shuffleArray<T>(array: T[]): T[] {
  for (let i = array.length - 1; 0 < i; i--) {
    const randomNumber = Math.floor(Math.random() * (i + 1));
    const obj = array[i];
    array[i] = array[randomNumber];
    array[randomNumber] = obj;
  }
  return array;
}

const ScriptWrapper = styled.div`
  width: 94vw;
  margin: 0 3vw 25px 3vw;
  padding: 0;
  overflow-y: scroll;
  display: inline-block;
  text-align: left;
`;

export const Typing = TypingContainer;
