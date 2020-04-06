import { createAction, ActionType } from 'typesafe-actions';
import { Result } from '../model';

export const ACT_SAMPLE_SUCCESS = 'SAMPLE/SUCCESS';
export const ACT_SAMPLE_ERROR = 'SAMPLE/ERROR';

const actSampleSuccess = createAction(ACT_SAMPLE_SUCCESS)<Result[]>();
const actSampleError = createAction(ACT_SAMPLE_SUCCESS)();

export const actions = {actSampleSuccess, actSampleError};
export type SampleActions = ActionType<typeof actions>;