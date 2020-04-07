import { takeEvery, call, put, delay } from 'redux-saga/effects';
import { ACT_REQUEST_PENDING, ACT_REQUEST_SUCCESS, actRequestPending } from '../action'
import { Result } from '../../module/sample/model';
import { RequestPendingPayload } from '../model';
import { AnyAction } from 'redux'
import { ActionType } from 'typesafe-actions';

export function * requestSaga () {
  yield takeEvery(ACT_REQUEST_PENDING, requestHttp)
}



function * requestHttp( {payload}: ActionType<typeof actRequestPending>) {
  
  const { callService, successAction, errorAction } = payload;

  try {
    const response = yield call (callService);
    
    const data:Result[] = response.data;

    yield put({type: successAction, payload: data});

    yield delay(1000);
    yield put({type: ACT_REQUEST_SUCCESS});

  } catch {
    console.log('catch..');
  }
  




}