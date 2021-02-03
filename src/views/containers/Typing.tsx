import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router';
import styled from 'styled-components';
import scriptsJson from '../../constant/corpus.json';
import { RootState } from '../../store';
import {
  setCurrentScript,
  setCurrentScriptIndex,
  setScripts,
  setShowJapanese
} from '../../store/TypingContent/actions';
import { Script } from '../../store/TypingContent/types';
import { CountDown } from '../components/typing/CountDown';
import { Keyboard } from '../components/typing/Keyboard';
import {
  setAppState,
  setCountDownTime,
  addIncorrectKey,
  addCorrectKey
} from '../../store/PageManager/actions';
import {
  APP_STATE_INITIAL,
  APP_STATE_TIMEUP,
  APP_STATE_TYPING
} from '../../store/PageManager/types';
import { SPACE_VALUE } from '../../constant/typingConst';
import { ScriptEnglish } from '../components/typing/ScriptEnglish';
import {
  clearCorrectCharCount,
  setNextKey,
  addCurrentKey,
  deleteCurrentKey,
  incrementCorrectCharCount
} from '../../store/Keyboard/actions';
import { ScriptJapanese } from '../components/typing/ScriptJapanese';
import { ShowJapaneseCheckBox } from '../components/common/ShowJapaneseCheckBox';
import { TimeUp } from '../components/typing/TimeUp';
import { HomeButton } from '../components/common/HomeButton';

let lastInputTime = 0;

const TypingContainer: React.FC<RouteComponentProps> = (props: RouteComponentProps) => {
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
    if (appState === APP_STATE_INITIAL) {
      linkTo('');
    }
  }, [appState]);
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
    focusScriptParent();
    lastInputTime = 0;
    startCountDown();
  };
  const startCountDown = () => {
    if (appState !== APP_STATE_TYPING) {
      return;
    }
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
  const scriptParentRef: React.MutableRefObject<HTMLDivElement | null> = React.useRef(null);
  const isElement = (element: HTMLDivElement | null): element is HTMLDivElement => {
    return typeof element !== null;
  };
  const focusScriptParent = (): void => {
    const { current } = scriptParentRef;
    if (isElement(current) && current !== document.activeElement && appState === APP_STATE_TYPING) {
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
  const linkTo = (pageName: string) => {
    props.history.push(`/${pageName}`);
  };
  const scriptJapanese = scripts[currentScriptIndex] ? scripts[currentScriptIndex].japanese : '';
  return appState !== APP_STATE_TYPING ? (
    <TimeUp linkTo={linkTo} />
  ) : (
    <div>
      <HomeButton linkTo={linkTo} />
      <CountDown countDownTime={countDownTime} />
      <div style={{ marginLeft: '5vw', marginRight: '5vw' }}>
        <ScriptParent
          ref={scriptParentRef}
          onKeyDown={handleKeyDown}
          onKeyUp={handleKeyUp}
          onBlur={focusScriptParent}
          tabIndex={0}>
          <ScriptEnglish
            script={currentScript ? currentScript.english : ''}
            correctCharCount={correctCharCount}
            scriptIndex={currentScriptIndex}
            currentScriptIndex={currentScriptIndex}
          />
          <ScriptJapanese visible={showJapanese} scriptJapanese={scriptJapanese} />
        </ScriptParent>
        <ShowJapaneseCheckBox
          showJapanese={showJapanese}
          fontColor="#808080"
          switchShowJapanese={switchShowJapanese}
        />
      </div>
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

const ScriptParent = styled.div`
  width: 86vw;
  margin: 0;
  overflow-y: scroll;
  display: inline-block;
  text-align: left;
  :focus {
    outline: 0.5vh solid grey;
`;

export const Typing = withRouter(TypingContainer);
