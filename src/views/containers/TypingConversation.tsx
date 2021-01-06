import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import {
  addCurrentKey,
  deleteCurrentKey,
  incrementCorrectCharCount,
  setNextKey
} from '../../store/Keyboard/actions';
import { setCurrentScriptIndex } from '../../store/TypingContent.tsx/action';
import { Conversation } from '../../store/TypingContent.tsx/types';
import { Character } from '../components/Character';

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
    <div
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
      <table>
        <tbody>
          {conversation.map((obj: Conversation, index: number) => {
            return (
              <tr key={index} style={{ fontSize: '25px', verticalAlign: 'top' }}>
                <td style={{ whiteSpace: 'nowrap' }}>{obj.character}</td>
                <td>: </td>
                <td>
                  {obj.script
                    ? obj.script.split('').map((char: string, index: number) => {
                        const color = correctCharCount > index ? 'black' : 'grey';
                        return <Character key={`char-${index}`} char={char} color={color} />;
                      })
                    : ''}
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
