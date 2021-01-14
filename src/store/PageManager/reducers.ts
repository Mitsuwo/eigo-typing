import {
  PageManagerState,
  PageManagerActionTypes,
  SET_APP_STATE,
  SET_COUNT_DOWN_TIME,
  APP_STATE_INITIAL
} from './types';

const initialState: PageManagerState = {
  appState: APP_STATE_INITIAL,
  countDownTime: 180
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
    default:
      return state;
  }
}
