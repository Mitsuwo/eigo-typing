import { Action, combineReducers, createStore, Store } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension/logOnlyInProduction';
import { appBaseReducer } from './AppBase/reducers';
import { keyboardReducer } from './Keyboard/reducers';
import { typingContentReducer } from './TypingContent/reducers';
import { resultReducer } from './Result/reducers';

export const rootReducer = combineReducers({
  appBase: appBaseReducer,
  keyboard: keyboardReducer,
  typingContent: typingContentReducer,
  resultState: resultReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export const store: Store<RootState, Action> = createStore(rootReducer, devToolsEnhancer({}));
