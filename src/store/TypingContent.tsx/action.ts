import {
  Word,
  SET_WORDS,
  TypingContentActionTypes,
  SET_WORD,
  SET_CURRENT_WORD_INDEX
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

export function setCurrentWordIndex(index: number): TypingContentActionTypes {
  return {
    type: SET_CURRENT_WORD_INDEX,
    payload: index
  };
}
