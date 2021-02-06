import {
  SET_APP_STATE,
  PageManagerActionTypes,
  SET_COUNT_DOWN_TIME,
  SET_SHOW_JAPANESE,
  AppStates,
  RESET_COUNT_DOWN
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

export function setShowJapanese(showJapanese: boolean): PageManagerActionTypes {
  return {
    type: SET_SHOW_JAPANESE,
    payload: showJapanese
  };
}

export function resetCountDown(): PageManagerActionTypes {
  return {
    type: RESET_COUNT_DOWN
  };
}
