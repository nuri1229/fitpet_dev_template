import { createAction, ActionType, createAsyncAction } from 'typesafe-actions';
import { Result } from '../model';

export const ACT_SAMPLE_REQUEST = 'SAMPLE_REQUEST';
export const ACT_SAMPLE_SUCCESS = 'SAMPLE_SUCCESS';
export const ACT_SAMPLE_ERROR = 'SAMPLE_ERROR';


const actSampleSuccess = createAction(ACT_SAMPLE_SUCCESS)<Result[]>();
const actSampleError = createAction(ACT_SAMPLE_ERROR)();

export const actions = {actSampleSuccess, actSampleError};
export type SampleActions = ActionType<typeof actions>;

type AsyncActionType = {
  REQUEST: string,
  SUCCESS: string,
  FAILURE: string
}

type Error = {
  code: string,
  message: string
}

type ResultType = {
  items: Result[]
}

export const asyncAction = <RequestPayloadType, SuccessPayloadType, FailurePayloadType>(asyncAction:AsyncActionType) => {
  return createAsyncAction(asyncAction.REQUEST, asyncAction.SUCCESS, asyncAction.FAILURE);
}

export const actions2 = asyncAction({
  REQUEST: ACT_SAMPLE_REQUEST,
  SUCCESS: ACT_SAMPLE_SUCCESS,
  FAILURE: ACT_SAMPLE_ERROR
})<undefined, ResultType, Error>();

export type SampleActions2 = ActionType<typeof actions2>;