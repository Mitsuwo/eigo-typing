import {
  Script,
  SET_CURRENT_SCRIPT,
  SET_CURRENT_SCRIPT_INDEX,
  TypingContentActionTypes,
  SET_SCRIPTS,
  RESET_TYPING_CONTENT_STATE
} from './types';

export function setScripts(scripts: Script[]): TypingContentActionTypes {
  return {
    type: SET_SCRIPTS,
    payload: scripts
  };
}

export function setCurrentScriptIndex(currentScriptIndex: number): TypingContentActionTypes {
  return {
    type: SET_CURRENT_SCRIPT_INDEX,
    payload: currentScriptIndex
  };
}

export function setCurrentScript(currentScript: Script): TypingContentActionTypes {
  return {
    type: SET_CURRENT_SCRIPT,
    payload: currentScript
  };
}

export function resetTypingContentState(): TypingContentActionTypes {
  return {
    type: RESET_TYPING_CONTENT_STATE
  };
}
