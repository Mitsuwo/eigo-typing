export const ADD_CURRENT_KEY = 'ADD_CURRENT_KEY';
export const DELETE_CURRENT_KEY = 'DELETE_CURRENT_KEY';
export const SET_NEXT_KEY = 'SET_NEXT_KEY';
export const INCREMENT_CORRECT_CHAR_COUNT = 'INCREMENT_CORRECT_CHAR_COUNT';
export const CLEAR_CORRECT_CHAR_COUNT = 'CLEAR_CORRECT_CHAR_COUNT';

interface AddCurrentKeyAction {
  type: typeof ADD_CURRENT_KEY;
  payload: string;
}

interface DeleteCurrentKeyAction {
  type: typeof DELETE_CURRENT_KEY;
  payload: string;
}

interface SetNextKey {
  type: typeof SET_NEXT_KEY;
  payload: string;
}

interface IncrementCorrectCharCount {
  type: typeof INCREMENT_CORRECT_CHAR_COUNT;
}

interface ClearCorrectCharCount {
  type: typeof CLEAR_CORRECT_CHAR_COUNT;
}

export type KeyboardActionTypes =
  | AddCurrentKeyAction
  | DeleteCurrentKeyAction
  | SetNextKey
  | IncrementCorrectCharCount
  | ClearCorrectCharCount;

export interface KeyboardState {
  currentKeys: string[];
  nextKey: string;
  correctCharCount: number;
}
