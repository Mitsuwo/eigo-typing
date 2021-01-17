import {
  PageManagerState,
  PageManagerActionTypes,
  SET_APP_STATE,
  SET_COUNT_DOWN_TIME,
  APP_STATE_INITIAL,
  ADD_TYPING_INTERVAL
} from './types';

const initialState: PageManagerState = {
  appState: APP_STATE_INITIAL,
  countDownTime: 180,
  intervals: []
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
    case ADD_TYPING_INTERVAL: {
      return {
        ...state,
        intervals: state.intervals.concat([action.payload])
      };
    }
    default:
      return state;
  }
}
