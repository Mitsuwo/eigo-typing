export const SET_CURRENT_CONTAINER = 'SET_CURRENT_CONTAINER';

interface SetCurrentContainerAction {
  type: typeof SET_CURRENT_CONTAINER;
  payload: ContainerManagerState;
}

export type ContainerManagerActionTypes = SetCurrentContainerAction;

export interface ContainerManagerState {
  currentContainer: string;
}
