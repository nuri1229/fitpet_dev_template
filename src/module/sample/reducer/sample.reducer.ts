import { createReducer } from 'typesafe-actions';
import { Result } from '../model';
import { SampleActions, actions } from '../action';

type SampleState = {
  items: Result[]
}

const initState = ():SampleState => ({items: []});

export const sampleReducer = createReducer<SampleState, SampleActions>(
  initState())
  .handleAction(actions.actSampleSuccess, (state, action) => {
    console.log('111111')
    return {
      ...state,
      items: action.payload
    }
  })
  .handleAction(actions.actSampleError, (state) => (state));