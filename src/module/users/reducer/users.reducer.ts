import { createReducer } from 'typesafe-actions';
import { User } from '../model';
import { UsersActions, actions } from '../action';

type UsersState = {
  items: User[]
}

const initState = ():UsersState => ({items: []});

export const usersReducer = createReducer<UsersState, UsersActions>(
  initState())
  .handleAction(actions.actUsersSuccess, (state, action) => {
    
    return {
      ...state,
      items: action.payload
    }
  })
  .handleAction(actions.actUsersError, (state) => (state));