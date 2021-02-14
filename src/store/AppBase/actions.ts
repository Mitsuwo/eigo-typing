import {
  SET_APP_STATE,
  AppBaseActionTypes,
  SET_COUNT_DOWN_TIME,
  SET_SHOW_JAPANESE,
  AppStates,
  SET_LAST_INPUT_TIME,
  RESET_APP_BASE
} from './types';

export function setAppState(appState: AppStates): AppBaseActionTypes {
  return {
    type: SET_APP_STATE,
    payload: appState
  };
}

export function setCountDownTime(countDownTime: number): AppBaseActionTypes {
  return {
    type: SET_COUNT_DOWN_TIME,
    payload: countDownTime
  };
}

export function setShowJapanese(showJapanese: boolean): AppBaseActionTypes {
  return {
    type: SET_SHOW_JAPANESE,
    payload: showJapanese
  };
}

export function setLastInputTime(lastInputTime: number): AppBaseActionTypes {
  return {
    type: SET_LAST_INPUT_TIME,
    payload: lastInputTime
  };
}

export function resetAppBase(): AppBaseActionTypes {
  return {
    type: RESET_APP_BASE
  };
}
