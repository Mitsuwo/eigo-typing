export const SET_SCRIPTS = 'SET_SCRIPTS';
export const SET_CURRENT_SCRIPT_INDEX = 'SET_CURRENT_SCRIPT_INDEX';
export const SET_CURRENT_SCRIPT = 'SET_CURRENT_SCRIPT';
export const SET_SHOW_JAPANESE = 'SET_SHOW_JAPANESE';

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

interface SetShowJapanese {
  type: typeof SET_SHOW_JAPANESE;
  payload: boolean;
}

export type TypingContentActionTypes =
  | SetScripts
  | SetCurrentScriptIndex
  | SetCurrentScript
  | SetShowJapanese;

export interface Script {
  english: string;
  japanese: string;
  id: string;
}

export interface TypingContentState {
  scripts: Script[];
  currentScriptIndex: number;
  currentScript?: Script;
  showJapanese: boolean;
}
