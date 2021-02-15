export const SET_SHOW_JAPANESE = 'SET_SHOW_JAPANESE';
export const SET_LAST_INPUT_TIME = 'SET_LAST_INPUT_TIME';
export const RESET_APP_BASE = 'RESET_APP_BASE';

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

export type AppBaseActionTypes = SetShowJapanese | SetLastInputTime | ResetAppBase;

export interface AppBaseState {
  showJapanese: boolean;
  lastInputTime: number;
}
