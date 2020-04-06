import { combineReducers } from 'redux';
import { usersReducer } from '../../module/users/reducer';
import { commonReducer } from '../reducer';

export const appState = combineReducers({
  users: usersReducer,
  root: commonReducer,
})

export type AppState = ReturnType<typeof appState>;