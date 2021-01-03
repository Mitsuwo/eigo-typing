import {
  TypingContentState,
  TypingContentActionTypes,
  SET_WORDS,
  SET_WORD,
  SET_CURRENT_WORD_INDEX,
  SET_STORIES,
  SET_CONVERSATION,
  SET_CURRENT_STORY_INDEX,
  SET_CONTENT_TYPE
} from './types';

const initialState: TypingContentState = {
  words: [],
  word: '',
  stories: [],
  conversation: [],
  currentWordIndex: 0,
  currentStoryIndex: 0,
  contentType: ''
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
    case SET_STORIES: {
      return {
        ...state,
        stories: action.payload
      };
    }
    case SET_CONVERSATION: {
      return {
        ...state,
        conversation: action.payload
      };
    }
    case SET_CURRENT_WORD_INDEX: {
      return {
        ...state,
        currentWordIndex: action.payload
      };
    }
    case SET_CURRENT_STORY_INDEX: {
      return {
        ...state,
        currentStoryIndex: action.payload
      };
    }
    case SET_CONTENT_TYPE: {
      return {
        ...state,
        contentType: action.payload
      };
    }
    default:
      return state;
  }
}
