import axios from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects';
import toast from 'toastr';
import AuthenticationHelper from '../../helpers/authentication';
import apiErrorHandler from '../../services/apiErrorHandler';
import UserAPI from '../../services/userAPI';
import {
  getUsersFailure,
  getUsersSuccess,
  loginUserFailure,
  loginUserSuccess,
} from '../actionCreator/userActions';
import { GET_USERS, LOGIN_USER } from '../constants/actionTypes';
import { BaseAction } from '../reducers/typed';

// LOGIN USER SAGA
export function* loginUserSaga(action: BaseAction) {
  try {
    const { history, ...loginData } = action.data;
    const response = yield call(UserAPI.loginUser, loginData);
    const { data, message } = response.data;
    localStorage.setItem('jwt-token', data.token);
    axios.defaults.headers.common.Authorization =  data.token;
    const decoded = yield call(AuthenticationHelper.decodeToken);
    const { userInfo } = decoded;
    yield put(loginUserSuccess(userInfo));
    const url = localStorage.getItem('url');
    toast.success(message);
    setTimeout(() => {
      history.push(url || '/dashboard');
      localStorage.removeItem('url');
    }, 2000);
  } catch (error) {
    const errorMessage = apiErrorHandler(error);
    toast.error(errorMessage);
    yield put(loginUserFailure(errorMessage));
  }
}

export function* watchLoginUserSaga() {
  yield takeLatest(LOGIN_USER, loginUserSaga);
}

// GET ALL USERS
export function* getAllUsersSaga(action: BaseAction) {
  try {
    const response = yield call(UserAPI.fetchUsers);
    const { data } = response.data;
    yield put(getUsersSuccess(data.users));
  } catch (error) {
    const errorMessage = apiErrorHandler(error);
    toast.error(errorMessage);
    yield put(getUsersFailure(errorMessage));
  }
}

export function* watchGetAllUsersSaga() {
  yield takeLatest(GET_USERS, getAllUsersSaga);
}
