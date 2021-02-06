import {
  ResultActionTypes,
  ADD_INCORRECT_KEY,
  ADD_CORRECT_KEY,
  CorrectKey,
  RESET_RESULT_STATE
} from './types';

export function addCorrectKey(interval: CorrectKey): ResultActionTypes {
  return {
    type: ADD_CORRECT_KEY,
    payload: interval
  };
}

export function addIncorrectKey(incorrectKey: string): ResultActionTypes {
  return {
    type: ADD_INCORRECT_KEY,
    payload: incorrectKey
  };
}

export function resetResultState(): ResultActionTypes {
  return {
    type: RESET_RESULT_STATE
  };
}
