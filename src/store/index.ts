import { Action, combineReducers, createStore, Store } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension/logOnlyInProduction';
import { pageManagerReducer } from './PageManager/reducers';
import { keyboardReducer } from './Keyboard/reducers';
import { typingContentReducer } from './TypingContent/reducers';

export const rootReducer = combineReducers({
  pageManager: pageManagerReducer,
  keyboard: keyboardReducer,
  typingContent: typingContentReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export const store: Store<RootState, Action> = createStore(rootReducer, devToolsEnhancer({}));
