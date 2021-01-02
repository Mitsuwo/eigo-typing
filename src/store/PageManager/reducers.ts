import { PageManagerState, PageManagerActionTypes, SET_CURRENT_PAGE } from './types';

const initialState: PageManagerState = {
  currentPage: 'home'
};

export function pageManagerReducer(
  state = initialState,
  action: PageManagerActionTypes
): PageManagerState {
  switch (action.type) {
    case SET_CURRENT_PAGE: {
      return {
        currentPage: action.payload
      };
    }
    default:
      return state;
  }
}
