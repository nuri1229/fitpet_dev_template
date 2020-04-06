import { all } from 'redux-saga/effects';
import { requestSaga } from './request.saga';

export function* rootSaga () {
  yield all ([requestSaga()])
}