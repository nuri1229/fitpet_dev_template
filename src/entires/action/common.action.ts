import { createAction, ActionType } from 'typesafe-actions';

export const ACT_REQUEST_PENDING = 'COMMON/REQUEST_PENDING';
export const ACT_REQUEST_SUCCESS = 'COMMON/REQUEST_SUCCESS';
export const ACT_REQUEST_ERROR = 'COMMON/REQUEST_ERROR';

const actRequestPending = createAction(ACT_REQUEST_PENDING)();
const actRequestSuccess = createAction(ACT_REQUEST_SUCCESS)();
const actRequestError = createAction(ACT_REQUEST_ERROR)();

export const actions = {actRequestPending, actRequestSuccess, actRequestError};
export type CommonActions = ActionType<typeof actions>