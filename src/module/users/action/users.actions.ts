import { createAction, ActionType } from 'typesafe-actions';
import { User } from '../model';

export const ACT_USERS_SUCCESS = 'USERS/SUCCESS';
export const ACT_USERS_ERROR = 'USERS/ERROR';

const actUsersSuccess = createAction(ACT_USERS_SUCCESS)<User[]>();
const actUsersError = createAction(ACT_USERS_ERROR)();

export const actions = {actUsersSuccess, actUsersError};
export type UsersActions = ActionType<typeof actions>;