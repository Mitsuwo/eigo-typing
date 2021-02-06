import {
  PageManagerState,
  PageManagerActionTypes,
  SET_APP_STATE,
  SET_COUNT_DOWN_TIME,
  APP_STATE_INITIAL,
  SET_SHOW_JAPANESE,
  RESET_COUNT_DOWN
} from './types';

const initialState: PageManagerState = {
  appState: APP_STATE_INITIAL,
  countDownTime: 180,
  showJapanese: true
};

export function pageManagerReducer(
  state = initialState,
  action: PageManagerActionTypes
): PageManagerState {
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
    case RESET_COUNT_DOWN: {
      return {
        ...state,
        countDownTime: initialState.countDownTime
      };
    }
    default:
      return state;
  }
}
