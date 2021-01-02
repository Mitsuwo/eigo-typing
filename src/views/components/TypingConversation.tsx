import React from 'react';
// import storiesJson from '../../constant/stories.json';

// const stories: Story[] = JSON.parse(JSON.stringify(storiesJson));
// let story = stories[Math.floor(Math.random() * stories.length - 1)];

export interface Story {
  title: string;
  auther: string;
  characters: string[];
  description: string;
  conversation: Conversation[];
}

interface Conversation {
  character: string;
  script: string;
}

const TypingConversationComponent: React.FC = () => {
  return (
    <div>
      <div>Typing conversation</div>
    </div>
  );
};

export const TypingConversation = TypingConversationComponent;
