export const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';

interface SetCurrentPageAction {
  type: typeof SET_CURRENT_PAGE;
  payload: string;
}

export type PageManagerActionTypes = SetCurrentPageAction;

export interface PageManagerState {
  currentPage: string;
}
