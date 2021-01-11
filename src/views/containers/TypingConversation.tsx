import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import {
  addCurrentKey,
  clearCorrectCharCount,
  deleteCurrentKey,
  incrementCorrectCharCount,
  setNextKey
} from '../../store/Keyboard/actions';
import { setCurrentScriptIndex } from '../../store/TypingContent.tsx/action';
import { Line } from '../../store/TypingContent.tsx/types';
import { Script } from '../components/Script';

const TypingConversationContainer: React.FC = () => {
  const { conversation, currentScriptIndex } = useSelector(
    (state: RootState) => state.typingContent
  );
  const dispatch = useDispatch();
  const { nextKey, correctCharCount, currentKeys } = useSelector(
    (state: RootState) => state.keyboard
  );
  const tdRef: React.MutableRefObject<HTMLDivElement | null> = React.useRef(null);
  const isElement = (element: HTMLDivElement | null): element is HTMLDivElement => {
    return typeof element !== null;
  };
  React.useEffect(() => {
    const { current } = tdRef;
    if (isElement(current) && current !== document.activeElement) {
      current.focus();
    }
  });
  React.useEffect(() => {
    if (conversation.length === 0) {
      return;
    }
    const { script } = conversation[currentScriptIndex];
    if (correctCharCount < script.length) {
      dispatch(setNextKey(script[correctCharCount]));
    } else {
      dispatch(setCurrentScriptIndex(currentScriptIndex + 1));
      dispatch(clearCorrectCharCount());
    }
  }, [correctCharCount]);
  const handleKeyDown = (event: React.KeyboardEvent): void => {
    const { code } = event;
    let { key } = event;
    if (key === ' ') {
      key = '␣';
      event.preventDefault();
    }
    if (key === nextKey) {
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
    <div
      id="table-wrapper"
      style={{
        height: '50vh',
        width: '94vw',
        margin: '3vw',
        overflowY: 'scroll',
        display: 'inline-block',
        textAlign: 'left'
      }}
      ref={tdRef}
      onKeyDown={handleKeyDown}
      onKeyUp={handleKeyUp}
      tabIndex={0}>
      <table style={{ width: '100%' }}>
        <tbody>
          {conversation.map((line: Line, index: number) => {
            return (
              <tr key={index} style={{ fontSize: '25px', verticalAlign: 'top' }}>
                <td id="td-character" style={{ whiteSpace: 'nowrap' }}>
                  {line.character}
                </td>
                <td style={{ width: '10px' }}>: </td>
                <td>
                  <Script
                    script={line.script}
                    correctCharCount={correctCharCount}
                    scriptIndex={index}
                    currentScriptIndex={currentScriptIndex}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export const TypingConversation = TypingConversationContainer;
