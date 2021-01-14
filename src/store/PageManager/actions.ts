import { SET_APP_STATE, PageManagerActionTypes, SET_COUNT_DOWN_TIME, AppStates } from './types';

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
