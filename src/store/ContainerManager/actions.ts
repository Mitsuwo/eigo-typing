import { ContainerManagerState, SET_CURRENT_CONTAINER, ContainerManagerActionTypes } from './types';

export function setCurrentContainer(
  newContainerManager: ContainerManagerState
): ContainerManagerActionTypes {
  return {
    type: SET_CURRENT_CONTAINER,
    payload: newContainerManager
  };
}
