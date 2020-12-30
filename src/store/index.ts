import { combineReducers } from 'redux';
import { containerManagerReducer } from './ContainerManager/reducers';

const rootReducer = combineReducers({
  containerManager: containerManagerReducer
});

export type RootState = ReturnType<typeof rootReducer>;
