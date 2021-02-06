import {
  ResultState,
  ResultActionTypes,
  ADD_INCORRECT_KEY,
  ADD_CORRECT_KEY,
  RESET_RESULT_STATE
} from './types';

const initialState: ResultState = {
  correctKeys: [],
  incorrectKeys: []
};

export function resultReducer(state = initialState, action: ResultActionTypes): ResultState {
  switch (action.type) {
    case ADD_CORRECT_KEY: {
      return {
        ...state,
        correctKeys: state.correctKeys.concat([action.payload])
      };
    }
    case ADD_INCORRECT_KEY: {
      return {
        ...state,
        incorrectKeys: state.incorrectKeys.concat([action.payload])
      };
    }
    case RESET_RESULT_STATE: {
      return initialState;
    }
    default:
      return state;
  }
}
