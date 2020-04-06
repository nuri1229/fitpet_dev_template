import { combineReducers } from 'redux';
import { usersReducer } from '../../module/users/reducer';
import { commonReducer } from '../reducer';
import { sampleReducer } from '../../module/sample/reducer';

export const appState = combineReducers({
  users: usersReducer,
  root: commonReducer,
  sample: sampleReducer
})

export type AppState = ReturnType<typeof appState>;