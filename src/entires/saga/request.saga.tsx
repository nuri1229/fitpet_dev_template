import { takeEvery, call, put } from 'redux-saga/effects';
import { ACT_REQUEST_PENDING } from '../action'
import { Result } from '../../module/sample/model';


export function * requestSaga () {
  yield takeEvery(ACT_REQUEST_PENDING, requestHttp)
}

function * requestHttp (action: any) {

  
  const { callService, successAction, errorAction } = action.payload;

  try {
    const response = yield call (callService);
    console.log('response', response.data);
    //yield put({type: successAction, payload: response.data});
    const data:Result[] = response.data;
    yield put({type: successAction, payload: data});
    console.log('putEND')
  } catch {
    console.log('catch..')
  }
  




}