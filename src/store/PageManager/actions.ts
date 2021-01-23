import {
  SET_APP_STATE,
  PageManagerActionTypes,
  SET_COUNT_DOWN_TIME,
  AppStates,
  ADD_INCORRECT_KEY,
  ADD_CORRECT_KEY,
  CorrectKey
} from './types';

export function setAppState(appState: AppStates): PageManagerActionTypes {
  return {
    type: SET_APP_STATE,
    payload: appState
  };
}

export function setCountDownTime(countDownTime: number): PageManagerActionTypes {
  return {
    type: SET_COUNT_DOWN_TIME,
    payload: countDownTime
  };
}

export function addCorrectKey(interval: CorrectKey): PageManagerActionTypes {
  return {
    type: ADD_CORRECT_KEY,
    payload: interval
  };
}

export function addIncorrectKey(incorrectKey: string): PageManagerActionTypes {
  return {
    type: ADD_INCORRECT_KEY,
    payload: incorrectKey
  };
}
