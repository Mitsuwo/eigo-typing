export const SET_WORDS = 'SET_WORDS';
export const SET_WORD = 'SET_WORD';
export const SET_CURRENT_WORD_INDEX = 'SET_CURRENT_WORD_INDEX';

interface SetWordsAction {
  type: typeof SET_WORDS;
  payload: Word[];
}

interface SetWordAction {
  type: typeof SET_WORD;
  payload: string;
}

interface SetCurrentWordIndex {
  type: typeof SET_CURRENT_WORD_INDEX;
  payload: number;
}

export type TypingContentActionTypes = SetWordsAction | SetWordAction | SetCurrentWordIndex;

export interface Word {
  word: string;
  meaning: string;
}

export interface TypingContentState {
  words: Word[];
  word: string;
  currentWordIndex: number;
}
