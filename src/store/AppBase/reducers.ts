import {
  AppBaseState,
  AppBaseActionTypes,
  SET_SHOW_JAPANESE,
  SET_LAST_INPUT_TIME,
  RESET_APP_BASE
} from './types';

const initialState: AppBaseState = {
  showJapanese: true,
  lastInputTime: 0
};

export function appBaseReducer(state = initialState, action: AppBaseActionTypes): AppBaseState {
  switch (action.type) {
    case SET_SHOW_JAPANESE: {
      return {
        ...state,
        showJapanese: action.payload
      };
    }
    case SET_LAST_INPUT_TIME: {
      return {
        ...state,
        lastInputTime: action.payload
      };
    }
    case RESET_APP_BASE: {
      return initialState;
    }
    default:
      return state;
  }
}
