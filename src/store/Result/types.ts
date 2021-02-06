export const ADD_CORRECT_KEY = 'ADD_CORRECT_KEY';
export const ADD_INCORRECT_KEY = 'ADD_INCORRECT_KEY';
export const RESET_RESULT_STATE = 'RESET_RESULT_STATE';

interface AddCorrectKey {
  type: typeof ADD_CORRECT_KEY;
  payload: CorrectKey;
}

interface AddIncorrectKey {
  type: typeof ADD_INCORRECT_KEY;
  payload: string;
}

interface ResetResultState {
  type: typeof RESET_RESULT_STATE;
}

export interface CorrectKey {
  keyText: string;
  interval: number;
}

export type ResultActionTypes = AddCorrectKey | AddIncorrectKey | ResetResultState;

export interface ResultState {
  correctKeys: CorrectKey[];
  incorrectKeys: string[];
}
