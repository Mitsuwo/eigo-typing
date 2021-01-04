import {
  KeyboardState,
  KeyboardActionTypes,
  ADD_CURRENT_KEY,
  DELETE_CURRENT_KEY,
  SET_NEXT_KEY,
  CLEAR_CURRENT_KEYS,
  INCREMENT_CORRECT_CHAR_COUNT,
  CLEAR_CORRECT_CHAR_COUNT
} from './types';

const initialState: KeyboardState = {
  currentKeys: [],
  currentKey: '',
  nextKey: '',
  correctCharCount: 0
};

export function keyboardReducer(state = initialState, action: KeyboardActionTypes): KeyboardState {
  switch (action.type) {
    case ADD_CURRENT_KEY: {
      return {
        ...state,
        currentKeys: state.currentKeys.concat([action.payload])
      };
    }
    case DELETE_CURRENT_KEY: {
      return {
        ...state,
        currentKeys: state.currentKeys.filter(
          (key: string) => key.toUpperCase() !== action.payload.toUpperCase()
        )
      };
    }
    case CLEAR_CURRENT_KEYS: {
      return {
        ...state,
        currentKeys: []
      };
    }
    case SET_NEXT_KEY: {
      return {
        ...state,
        nextKey: action.payload
      };
    }
    case INCREMENT_CORRECT_CHAR_COUNT: {
      return {
        ...state,
        correctCharCount: state.correctCharCount + 1
      };
    }
    case CLEAR_CORRECT_CHAR_COUNT: {
      return {
        ...state,
        correctCharCount: 0
      };
    }
    default:
      return state;
  }
}
