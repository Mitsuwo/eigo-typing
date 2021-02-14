export const SET_APP_STATE = 'SET_APP_STATE';
export const SET_COUNT_DOWN_TIME = 'SET_COUNT_DOWN_TIME';
export const SET_SHOW_JAPANESE = 'SET_SHOW_JAPANESE';
export const SET_LAST_INPUT_TIME = 'SET_LAST_INPUT_TIME';
export const RESET_APP_BASE = 'RESET_APP_BASE';

interface SetAppStateAction {
  type: typeof SET_APP_STATE;
  payload: AppStates;
}

interface SetCountDownTime {
  type: typeof SET_COUNT_DOWN_TIME;
  payload: number;
}

interface SetShowJapanese {
  type: typeof SET_SHOW_JAPANESE;
  payload: boolean;
}

interface SetLastInputTime {
  type: typeof SET_LAST_INPUT_TIME;
  payload: number;
}

interface ResetAppBase {
  type: typeof RESET_APP_BASE;
}

export const APP_STATE_INITIAL = 'initial';
export const APP_STATE_TYPING = 'typing';
export const APP_STATE_TIMEUP = 'timeup';

export type AppStates =
  | typeof APP_STATE_INITIAL
  | typeof APP_STATE_TYPING
  | typeof APP_STATE_TIMEUP;

export type AppBaseActionTypes =
  | SetAppStateAction
  | SetCountDownTime
  | SetShowJapanese
  | SetLastInputTime
  | ResetAppBase;

export interface AppBaseState {
  appState: AppStates;
  countDownTime: number;
  showJapanese: boolean;
  lastInputTime: number;
}
