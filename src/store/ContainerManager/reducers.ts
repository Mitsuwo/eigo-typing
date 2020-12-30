import { ContainerManagerState, ContainerManagerActionTypes, SET_CURRENT_CONTAINER } from './types';

const initialState: ContainerManagerState = {
  currentContainer: 'home'
};

export function containerManagerReducer(
  state = initialState,
  action: ContainerManagerActionTypes
): ContainerManagerState {
  switch (action.type) {
    case SET_CURRENT_CONTAINER: {
      return {
        ...state,
        ...action.payload
      };
    }
    default:
      return state;
  }
}
