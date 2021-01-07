import {
  Word,
  SET_WORDS,
  TypingContentActionTypes,
  SET_WORD,
  SET_CURRENT_WORD_INDEX,
  Story,
  SET_STORIES,
  Line,
  SET_CONVERSATION,
  SET_CURRENT_STORY_INDEX,
  SET_CONTENT_TYPE,
  SET_CURRENT_SCRIPT_INDEX
} from './types';

export function setWords(words: Word[]): TypingContentActionTypes {
  return {
    type: SET_WORDS,
    payload: words
  };
}

export function setWord(word: string): TypingContentActionTypes {
  return {
    type: SET_WORD,
    payload: word
  };
}

export function setStories(stories: Story[]): TypingContentActionTypes {
  return {
    type: SET_STORIES,
    payload: stories
  };
}

export function setConversation(conversation: Line[]): TypingContentActionTypes {
  return {
    type: SET_CONVERSATION,
    payload: conversation
  };
}

export function setCurrentWordIndex(index: number): TypingContentActionTypes {
  return {
    type: SET_CURRENT_WORD_INDEX,
    payload: index
  };
}

export function setCurrentStoryIndex(index: number): TypingContentActionTypes {
  return {
    type: SET_CURRENT_STORY_INDEX,
    payload: index
  };
}

export function setCurrentScriptIndex(index: number): TypingContentActionTypes {
  return {
    type: SET_CURRENT_SCRIPT_INDEX,
    payload: index
  };
}

export function setContentType(contentType: string): TypingContentActionTypes {
  return {
    type: SET_CONTENT_TYPE,
    payload: contentType
  };
}
