import { createReducer} from 'typesafe-actions';
import { CommonActions, actions } from '../action';

interface CommonState {
  isPending: boolean;
}


const initState = ():CommonState => ({isPending: false})

export const commonReducer = createReducer<CommonState, CommonActions>(
  initState())
  .handleAction(actions.actRequestPending, () => {
    console.log('1')
    return {isPending: true}
  })
  .handleAction(actions.actRequestSuccess, () => ({isPending: false}))
  .handleAction(actions.actRequestError, () => ({isPending: false}))