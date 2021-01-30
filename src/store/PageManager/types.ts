export const SET_APP_STATE = 'SET_APP_STATE';
export const SET_COUNT_DOWN_TIME = 'SET_COUNT_DOWN_TIME';
export const ADD_CORRECT_KEY = 'ADD_CORRECT_KEY';
export const ADD_INCORRECT_KEY = 'ADD_INCORRECT_KEY';
export const RESET_PAGE_MANAGER = 'RESET_PAGE_MANAGER';

interface SetAppStateAction {
  type: typeof SET_APP_STATE;
  payload: AppStates;
}

interface SetCountDownTime {
  type: typeof SET_COUNT_DOWN_TIME;
  payload: number;
}

interface AddCorrectKey {
  type: typeof ADD_CORRECT_KEY;
  payload: CorrectKey;
}

interface AddIncorrectKey {
  type: typeof ADD_INCORRECT_KEY;
  payload: string;
}

interface ResetPageManager {
  type: typeof RESET_PAGE_MANAGER;
}

export interface CorrectKey {
  keyText: string;
  interval: number;
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
  | AddCorrectKey
  | AddIncorrectKey
  | ResetPageManager;

export interface PageManagerState {
  appState: AppStates;
  countDownTime: number;
  correctKeys: CorrectKey[];
  incorrectKeys: string[];
}
