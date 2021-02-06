export const SET_SCRIPTS = 'SET_SCRIPTS';
export const SET_CURRENT_SCRIPT_INDEX = 'SET_CURRENT_SCRIPT_INDEX';
export const SET_CURRENT_SCRIPT = 'SET_CURRENT_SCRIPT';
export const RESET_TYPING_CONTENT_STATE = 'RESET_TYPING_CONTENT_STATE';

interface SetScripts {
  type: typeof SET_SCRIPTS;
  payload: Script[];
}

interface SetCurrentScriptIndex {
  type: typeof SET_CURRENT_SCRIPT_INDEX;
  payload: number;
}

interface SetCurrentScript {
  type: typeof SET_CURRENT_SCRIPT;
  payload: Script;
}

interface ResetTypingContentState {
  type: typeof RESET_TYPING_CONTENT_STATE;
}

export type TypingContentActionTypes =
  | SetScripts
  | SetCurrentScriptIndex
  | SetCurrentScript
  | ResetTypingContentState;

export interface Script {
  english: string;
  japanese: string;
  id: string;
}

export interface TypingContentState {
  scripts: Script[];
  currentScriptIndex: number;
  currentScript?: Script;
}
