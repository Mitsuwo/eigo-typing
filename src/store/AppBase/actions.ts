import {
  AppBaseActionTypes,
  SET_SHOW_JAPANESE,
  SET_LAST_INPUT_TIME,
  RESET_APP_BASE
} from './types';

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
