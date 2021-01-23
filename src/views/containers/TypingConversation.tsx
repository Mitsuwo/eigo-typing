import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { SPACE_VALUE, SPACE_VIEW } from '../../constant/typingConst';
import { Line } from '../../store/TypingContent/types';
import { Script } from '../components/Script';
import {
  clearCorrectCharCount,
  setNextKey,
  addCurrentKey,
  deleteCurrentKey,
  incrementCorrectCharCount
} from '../../store/Keyboard/actions';
import { setCurrentScriptIndex } from '../../store/TypingContent/actions';
import { addIncorrectKey, addTypingInterval } from '../../store/PageManager/actions';
import { RootState } from '../../store';

let lastInputTime = 0;

const TypingConversationContainer: React.FC = () => {
  const { currentScriptIndex, conversation } = useSelector(
    (state: RootState) => state.typingContent
  );
  const { currentKeys, nextKey, correctCharCount } = useSelector(
    (state: RootState) => state.keyboard
  );
  const dispatch = useDispatch();
  React.useEffect(() => {
    focusTableWrapper();
    lastInputTime = 0;
  }, []);
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
  const tableWrapperRef: React.MutableRefObject<HTMLDivElement | null> = React.useRef(null);
  const isElement = (element: HTMLDivElement | null): element is HTMLDivElement => {
    return typeof element !== null;
  };
  const focusTableWrapper = (): void => {
    const { current } = tableWrapperRef;
    if (isElement(current) && current !== document.activeElement) {
      current.focus();
    }
  };
  const isCorrectInput = (key: string): boolean => {
    if (key === SPACE_VALUE) {
      key = SPACE_VIEW;
    }
    return key === nextKey;
  };
  const setTypingInterval = (key: string) => {
    if (lastInputTime !== 0) {
      const interval = performance.now() - lastInputTime;
      dispatch(addTypingInterval({ key, interval }));
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
  return (
    <TableWrapper
      ref={tableWrapperRef}
      onKeyDown={handleKeyDown}
      onKeyUp={handleKeyUp}
      onBlur={focusTableWrapper}
      tabIndex={0}>
      <table style={{ width: '100%' }}>
        <tbody>
          {conversation.map((line: Line, index: number) => {
            return (
              <tr key={index} style={{ fontSize: '25px', verticalAlign: 'top' }}>
                <td style={{ whiteSpace: 'nowrap' }}>{line.character}</td>
                <td style={{ width: '10px' }}>: </td>
                <td>
                  <Script
                    script={line.script}
                    correctCharCount={correctCharCount}
                    scriptIndex={index}
                    currentScriptIndex={currentScriptIndex}
                    tableWrapperRect={tableWrapperRef.current?.getBoundingClientRect()}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </TableWrapper>
  );
};

const TableWrapper = styled.div`
  height: 50vh;
  width: 94vw;
  margin: 0 3vw 25px 3vw;
  padding: 0;
  overflow-y: scroll;
  display: inline-block;
  text-align: left;
`;

export const TypingConversation = React.memo(TypingConversationContainer);
