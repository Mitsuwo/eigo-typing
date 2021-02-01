import {
  PageManagerState,
  PageManagerActionTypes,
  SET_APP_STATE,
  SET_COUNT_DOWN_TIME,
  APP_STATE_INITIAL,
  ADD_INCORRECT_KEY,
  ADD_CORRECT_KEY,
  RESET_PAGE_MANAGER
} from './types';

const initialState: PageManagerState = {
  appState: APP_STATE_INITIAL,
  countDownTime: 600,
  correctKeys: [],
  incorrectKeys: []
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
    case ADD_CORRECT_KEY: {
      return {
        ...state,
        correctKeys: state.correctKeys.concat([action.payload])
      };
    }
    case ADD_INCORRECT_KEY: {
      return {
        ...state,
        incorrectKeys: state.incorrectKeys.concat([action.payload])
      };
    }
    case RESET_PAGE_MANAGER: {
      return initialState;
    }
    default:
      return state;
  }
}
