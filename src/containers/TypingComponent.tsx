import React from 'react';
import wordsJson from '../constant/words.json';

interface Word {
  word: string;
  meaning: string;
}

const Typing: React.FC = () => {
  const renderContent = (): string => {
    const words: Word[] = JSON.parse(JSON.stringify(wordsJson));
    const { word }: Word = words[Math.floor(Math.random() * words.length - 1)];
    return word;
  };
  return (
    <div>
      <div>This is Typing.</div>
      <div style={{ color: 'grey' }}>{renderContent()}</div>
    </div>
  );
};

export const TypingComponent = Typing;
