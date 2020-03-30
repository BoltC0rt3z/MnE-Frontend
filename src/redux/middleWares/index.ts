import { all } from 'redux-saga/effects';
import {
  watchAssignRoleSaga,
  watchDeleteAssignedRoleSaga,
  watchGetRoleSaga,
  watchGetRolesSaga
} from './roleSaga';
import { watchGetAllUsersSaga, watchLoginUserSaga } from './userSaga';

export default function* rootSaga() {
  yield all([
    watchLoginUserSaga(),
    watchGetRoleSaga(),
    watchGetRolesSaga(),
    watchGetAllUsersSaga(),
    watchAssignRoleSaga(),
    watchDeleteAssignedRoleSaga(),
  ]);
}
