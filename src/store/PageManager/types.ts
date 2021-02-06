export const SET_APP_STATE = 'SET_APP_STATE';
export const SET_COUNT_DOWN_TIME = 'SET_COUNT_DOWN_TIME';
export const SET_SHOW_JAPANESE = 'SET_SHOW_JAPANESE';
export const RESET_COUNT_DOWN = 'RESET_COUNT_DOWN';

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

interface ResetCountDown {
  type: typeof RESET_COUNT_DOWN;
}

export const APP_STATE_INITIAL = 'initial';
export const APP_STATE_TYPING = 'typing';
export const APP_STATE_TIMEUP = 'timeup';

export type AppStates =
  | typeof APP_STATE_INITIAL
  | typeof APP_STATE_TYPING
  | typeof APP_STATE_TIMEUP;

export type PageManagerActionTypes =
  | SetAppStateAction
  | SetCountDownTime
  | SetShowJapanese
  | ResetCountDown;

export interface PageManagerState {
  appState: AppStates;
  countDownTime: number;
  showJapanese: boolean;
}
