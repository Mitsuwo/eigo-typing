import {
  KeyboardActionTypes,
  DELETE_CURRENT_KEY,
  ADD_CURRENT_KEY,
  SET_NEXT_KEY,
  INCREMENT_CORRECT_CHAR_COUNT,
  CLEAR_CORRECT_CHAR_COUNT
} from './types';

export function addCurrentKey(key: string): KeyboardActionTypes {
  return {
    type: ADD_CURRENT_KEY,
    payload: key
  };
}

export function deleteCurrentKey(key: string): KeyboardActionTypes {
  return {
    type: DELETE_CURRENT_KEY,
    payload: key
  };
}

export function setNextKey(nextKey: string): KeyboardActionTypes {
  return {
    type: SET_NEXT_KEY,
    payload: nextKey
  };
}

export function incrementCorrectCharCount(): KeyboardActionTypes {
  return {
    type: INCREMENT_CORRECT_CHAR_COUNT
  };
}

export function clearCorrectCharCount(): KeyboardActionTypes {
  return {
    type: CLEAR_CORRECT_CHAR_COUNT
  };
}
