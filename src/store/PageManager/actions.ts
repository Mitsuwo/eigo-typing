import { SET_CURRENT_PAGE, PageManagerActionTypes } from './types';

export function setCurrentPage(currentPage: string): PageManagerActionTypes {
  return {
    type: SET_CURRENT_PAGE,
    payload: currentPage
  };
}
