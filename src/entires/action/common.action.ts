import { createAction, ActionType } from 'typesafe-actions';
import { RequestPendingPayload, Test } from '../model';

export const ACT_REQUEST_PENDING = 'COMMON/REQUEST_PENDING';
export const ACT_REQUEST_SUCCESS = 'COMMON/REQUEST_SUCCESS';
export const ACT_REQUEST_ERROR = 'COMMON/REQUEST_ERROR';

export const actRequestPending = createAction(ACT_REQUEST_PENDING)<RequestPendingPayload>();
const actRequestSuccess = createAction(ACT_REQUEST_SUCCESS)();
const actRequestError = createAction(ACT_REQUEST_ERROR)();

export const actions = {actRequestPending, actRequestSuccess, actRequestError};
export type CommonActions = ActionType<typeof actions>
export type PendingAction = ActionType<typeof actRequestPending>
