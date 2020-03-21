import { all } from 'redux-saga/effects';
import { watchLoginUserSaga } from './userSaga';

export default function* rootSaga() {
  yield all([watchLoginUserSaga()]);
}
