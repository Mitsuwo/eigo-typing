import {
  TypingContentState,
  TypingContentActionTypes,
  SET_WORDS,
  SET_WORD,
  SET_CURRENT_WORD_INDEX
} from './types';

const initialState: TypingContentState = {
  words: [],
  word: '',
  currentWordIndex: 0
};

export function typingContentReducer(
  state = initialState,
  action: TypingContentActionTypes
): TypingContentState {
  switch (action.type) {
    case SET_WORDS: {
      return {
        ...state,
        words: action.payload
      };
    }
    case SET_WORD: {
      return {
        ...state,
        word: action.payload
      };
    }
    case SET_CURRENT_WORD_INDEX: {
      return {
        ...state,
        currentWordIndex: action.payload
      };
    }
    default:
      return state;
  }
}
