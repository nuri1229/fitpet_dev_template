import { createReducer } from 'typesafe-actions';
import { Result } from '../model';
import { SampleActions, actions, SampleActions2, actions2 } from '../action';

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

  export const sampleReducer2 = createReducer<SampleState, SampleActions2>(
    initState())
    .handleAction(actions2.request, (state) => {
      return state;
    })
    .handleAction(actions2.success, (state, action) => {
      return state;
    });