import {
  TypingContentState,
  TypingContentActionTypes,
  SET_SCRIPTS,
  SET_CURRENT_SCRIPT_INDEX,
  SET_CURRENT_SCRIPT,
  RESET_TYPING_CONTENT_STATE
} from './types';

const initialState: TypingContentState = {
  scripts: [],
  currentScriptIndex: 0,
  currentScript: undefined
};

export function typingContentReducer(
  state = initialState,
  action: TypingContentActionTypes
): TypingContentState {
  switch (action.type) {
    case SET_SCRIPTS: {
      return {
        ...state,
        scripts: action.payload
      };
    }
    case SET_CURRENT_SCRIPT_INDEX: {
      return {
        ...state,
        currentScriptIndex: action.payload
      };
    }
    case SET_CURRENT_SCRIPT: {
      return {
        ...state,
        currentScript: action.payload
      };
    }
    case RESET_TYPING_CONTENT_STATE: {
      return initialState;
    }
    default:
      return state;
  }
}
