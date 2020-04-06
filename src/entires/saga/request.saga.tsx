import { takeEvery, call, put } from 'redux-saga/effects';
import { ACT_REQUEST_PENDING } from '../action'

export function * requestSaga () {
  yield takeEvery(ACT_REQUEST_PENDING, requestHttp)
}

function * requestHttp (action: any) {

  
  const { callService, successAction, errorAction } = action.payload;

  const response = yield call (callService);

  yield put({type: successAction, payload: response.data.results});




}