import { all } from 'redux-saga/effects';
import {
  watchDeleteUserSaga,
  watchEditUserSaga,
  watchLoginUserSaga,
  watchUsersUserSaga,
} from './userSaga';

export default function* rootSaga() {
  yield all([
    watchLoginUserSaga(),
    watchUsersUserSaga(),
    watchEditUserSaga(),
    watchDeleteUserSaga(),
  ]);
}
