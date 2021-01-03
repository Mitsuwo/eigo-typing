export const SET_WORDS = 'SET_WORDS';
export const SET_WORD = 'SET_WORD';
export const SET_STORIES = 'SET_STORIES';
export const SET_CONVERSATION = 'SET_CONVERSATION';
export const SET_CURRENT_WORD_INDEX = 'SET_CURRENT_WORD_INDEX';
export const SET_CURRENT_STORY_INDEX = 'SET_CURRENT_STORY_INDEX';
export const SET_CONTENT_TYPE = 'SET_CONTENT_TYPE';

interface SetWordsAction {
  type: typeof SET_WORDS;
  payload: Word[];
}

interface SetWordAction {
  type: typeof SET_WORD;
  payload: string;
}

interface SetStories {
  type: typeof SET_STORIES;
  payload: Story[];
}

interface SetConversation {
  type: typeof SET_CONVERSATION;
  payload: Conversation[];
}

interface SetCurrentWordIndex {
  type: typeof SET_CURRENT_WORD_INDEX;
  payload: number;
}

interface SetCurrentStoryIndex {
  type: typeof SET_CURRENT_STORY_INDEX;
  payload: number;
}

interface SetContentType {
  type: typeof SET_CONTENT_TYPE;
  payload: string;
}

export type TypingContentActionTypes =
  | SetWordsAction
  | SetWordAction
  | SetStories
  | SetConversation
  | SetCurrentWordIndex
  | SetCurrentStoryIndex
  | SetContentType;

export interface Word {
  word: string;
  meaning: string;
}

export interface Story {
  title: string;
  auther: string;
  characters: string[];
  description: string;
  conversation: Conversation[];
}

export interface Conversation {
  character: string;
  script: string;
}

export interface TypingContentState {
  words: Word[];
  word: string;
  stories: Story[];
  conversation: Conversation[];
  currentWordIndex: number;
  currentStoryIndex: number;
  contentType: string;
}