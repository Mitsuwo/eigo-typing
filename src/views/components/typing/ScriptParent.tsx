import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { RootState } from '../../../store';
import { setLastInputTime } from '../../../store/AppBase/actions';
import {
  addCurrentKey,
  clearCorrectCharCount,
  deleteCurrentKey,
  incrementCorrectCharCount,
  setNextKey
} from '../../../store/Keyboard/actions';
import { addCorrectKey, addIncorrectKey } from '../../../store/Result/actions';
import { setCurrentScript, setCurrentScriptIndex } from '../../../store/TypingContent/actions';
import { ScriptEnglish } from './ScriptEnglish';
import { ScriptJapanese } from './ScriptJapanese';

type Props = {
  focusScriptParent: () => void;
  handleKeyDown: (event: React.KeyboardEvent) => void;
  handleKeyUp: (event: React.KeyboardEvent) => void;
  scriptParentRef: React.RefObject<HTMLDivElement>;
  className?: string;
};

const View: React.FC<Props> = (props: Props) => {
  return (
    <div
      className={props.className}
      ref={props.scriptParentRef}
      onKeyDown={props.handleKeyDown}
      onKeyUp={props.handleKeyUp}
      onBlur={props.focusScriptParent}
      tabIndex={0}>
      <ScriptEnglish />
      <ScriptJapanese />
    </div>
  );
};

const StyledView = styled(View)`
  margin: 50px 5vw 0 5vw;
  width: 90vw;
  overflow-y: scroll;
  display: inline-block;
  text-align: left;
  :focus {
    outline: 0.5vh solid grey;
  }
`;

const Container: React.FC = () => {
  const { currentKeys, nextKey, correctCharCount } = useSelector(
    (state: RootState) => state.keyboard
  );
  const { scripts, currentScriptIndex } = useSelector((state: RootState) => state.typingContent);
  const scriptEnglish = useSelector((state: RootState) => {
    const { currentScript } = state.typingContent;
    return currentScript ? currentScript.english : '';
  });
  const { lastInputTime } = useSelector((state: RootState) => state.appBase);
  const dispatch = useDispatch();
  const scriptParentRef = React.useRef({} as HTMLDivElement);
  React.useEffect(() => {
    focusScriptParent();
  }, []);
  React.useEffect(() => {
    if (!scriptEnglish) {
      return;
    }
    if (correctCharCount < scriptEnglish.length) {
      dispatch(setNextKey(scriptEnglish[correctCharCount]));
    } else {
      const nextScriptIndex = currentScriptIndex + 1;
      dispatch(setCurrentScriptIndex(nextScriptIndex));
      dispatch(setCurrentScript(scripts[nextScriptIndex]));
      dispatch(clearCorrectCharCount());
    }
  }, [correctCharCount]);
  const isElement = (element: HTMLDivElement | null): element is HTMLDivElement => {
    return typeof element !== null;
  };
  const focusScriptParent = (): void => {
    const { current } = scriptParentRef;
    if (isElement(current) && current !== document.activeElement) {
      current.focus();
    }
  };
  const isCorrectInput = (key: string): boolean => {
    return key === nextKey;
  };
  const setTypingInterval = (key: string): void => {
    if (lastInputTime !== 0) {
      const interval = performance.now() - lastInputTime;
      dispatch(addCorrectKey({ keyText: key, interval: Math.floor(interval * 1000) / 1000000 }));
    }
    dispatch(setLastInputTime(performance.now()));
  };
  const handleKeyDown = (event: React.KeyboardEvent): void => {
    const { code, key } = event;
    if (key === ' ') {
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
  return React.useMemo(
    () => (
      <StyledView
        focusScriptParent={focusScriptParent}
        handleKeyDown={handleKeyDown}
        handleKeyUp={handleKeyUp}
        scriptParentRef={scriptParentRef}
      />
    ),
    [nextKey]
  );
};

export const ScriptParent = React.memo(Container);
