import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { Conversation } from '../../store/TypingContent.tsx/types';

const TypingConversationContainer: React.FC = () => {
  const { conversation } = useSelector((state: RootState) => state.typingContent);
  return (
    <div
      style={{
        height: '50vh',
        width: '94vw',
        margin: '3vw',
        overflowY: 'scroll',
        display: 'inline-block',
        textAlign: 'left'
      }}>
      <table>
        <tbody>
          {conversation.map((obj: Conversation) => {
            return (
              <tr key={obj.script} style={{ fontSize: '25px', verticalAlign: 'top' }}>
                <td style={{ whiteSpace: 'nowrap' }}>{obj.character}</td>
                <td>: </td>
                <td>{obj.script}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export const TypingConversation = TypingConversationContainer;
