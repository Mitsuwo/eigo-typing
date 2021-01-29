import {
  TypingContentState,
  TypingContentActionTypes,
  SET_SCRIPTS,
  SET_CURRENT_SCRIPT_INDEX,
  SET_CURRENT_SCRIPT,
  SET_SHOW_JAPANESE
} from './types';

const initialState: TypingContentState = {
  scripts: [],
  currentScriptIndex: 0,
  currentScript: undefined,
  showJapanese: true
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
    case SET_SHOW_JAPANESE: {
      return {
        ...state,
        showJapanese: action.payload
      };
    }
    default:
      return state;
  }
}
