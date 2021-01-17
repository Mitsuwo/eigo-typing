export const SET_APP_STATE = 'SET_APP_STATE';
export const SET_COUNT_DOWN_TIME = 'SET_COUNT_DOWN_TIME';
export const ADD_TYPING_INTERVAL = 'ADD_TYPING_INTERVAL';

interface SetAppStateAction {
  type: typeof SET_APP_STATE;
  payload: AppStates;
}

interface SetCountDownTime {
  type: typeof SET_COUNT_DOWN_TIME;
  payload: number;
}

interface AddTypingInterval {
  type: typeof ADD_TYPING_INTERVAL;
  payload: Interval;
}

export interface Interval {
  key: string;
  interval: number;
}

export const APP_STATE_INITIAL = 'initial';
export const APP_STATE_TYPING = 'typing';
export const APP_STATE_TIMEUP = 'timeup';

export type AppStates =
  | typeof APP_STATE_INITIAL
  | typeof APP_STATE_TYPING
  | typeof APP_STATE_TIMEUP;

export type PageManagerActionTypes = SetAppStateAction | SetCountDownTime | AddTypingInterval;

export interface PageManagerState {
  appState: AppStates;
  countDownTime: number;
  intervals: Interval[];
}
