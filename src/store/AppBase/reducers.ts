import {
  AppBaseState,
  AppBaseActionTypes,
  SET_APP_STATE,
  SET_COUNT_DOWN_TIME,
  APP_STATE_INITIAL,
  SET_SHOW_JAPANESE,
  SET_LAST_INPUT_TIME,
  RESET_APP_BASE
} from './types';

const initialState: AppBaseState = {
  appState: APP_STATE_INITIAL,
  countDownTime: 180,
  showJapanese: true,
  lastInputTime: 0
};

export function appBaseReducer(state = initialState, action: AppBaseActionTypes): AppBaseState {
  switch (action.type) {
    case SET_APP_STATE: {
      return {
        ...state,
        appState: action.payload
      };
    }
    case SET_COUNT_DOWN_TIME: {
      return {
        ...state,
        countDownTime: action.payload
      };
    }
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
