import { Action, combineReducers, createStore, Store } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension/logOnlyInProduction';
import { containerManagerReducer } from './ContainerManager/reducers';

export const rootReducer = combineReducers({
  containerManager: containerManagerReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export const store: Store<RootState, Action> = createStore(rootReducer, devToolsEnhancer({}));
