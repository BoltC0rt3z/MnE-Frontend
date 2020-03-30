import { call, put, select, takeLatest } from 'redux-saga/effects';
import toast from 'toastr';
import apiErrorHandler from '../../services/apiErrorHandler';
import RoleAPI from '../../services/roleAPI';
import {
  closeModalAction,
} from '../actionCreator/modalActions';
import {
  assignRoleFailure,
  assignRoleSuccess,
  deleteAssignedRoleFailure,
  deleteAssignedRoleSuccess,
  getRoleFailure,
  getRolesFailure,
  getRolesSuccess,
  getRoleSuccess,
} from '../actionCreator/roleActions';
import {
  getUsers,
} from '../actionCreator/userActions';
import { ASSIGN_ROLE, DELETE_ASSIGNED_ROLE, GET_ROLE,  GET_ROLES } from '../constants/actionTypes';
import { BaseAction } from '../reducers/typed';

export const getUserState = (state: any) => state.user;

// GET ALL ROLES SAGA
export function* getAllRolesSaga(action: BaseAction) {
  try {
    const response = yield call(RoleAPI.fetchRoles, action.data);
    const { data: { roles } } = response.data;
    yield put(getRolesSuccess(roles));
  } catch (error) {
    const errorMessage = apiErrorHandler(error);
    toast.error(errorMessage);
    yield put(getRolesFailure(errorMessage));
  }
}

export function* watchGetRolesSaga() {
  yield takeLatest(GET_ROLES ,  getAllRolesSaga);
}

// GET ROLE SAGA
export function* getRoleSaga(action: BaseAction) {
  try {
    const response = yield call(RoleAPI.fetchRoles, action.data);
    const { data: { role } } = response.data;
    yield put(getRoleSuccess(role));
  } catch (error) {
    const errorMessage = apiErrorHandler(error);
    toast.error(errorMessage);
    yield put(getRoleFailure(errorMessage));
  }
}

export function* watchGetRoleSaga() {
  yield takeLatest(GET_ROLE ,  getRoleSaga);
}

// ASSIGN ROLE SAGA
export function* assignRoleSaga(action: BaseAction) {
  try {
    const { users } = yield select(getUserState);
    const response = yield call(RoleAPI.assignUserRole, action.data);
    const { message } = response.data;
    const findUser = users.find((element: any) => element.email === action.data.email)
    yield put(assignRoleSuccess(findUser));
    yield put(getUsers());
    yield put(closeModalAction())
    toast.success(message);
  } catch (error) {
    const errorMessage = apiErrorHandler(error);
    toast.error(errorMessage);
    yield put(assignRoleFailure(errorMessage));
  }
}

export function* watchAssignRoleSaga() {
  yield takeLatest(ASSIGN_ROLE ,  assignRoleSaga);
}

// ASSIGN ROLE SAGA
export function* deleteAssignedRoleSaga(action: BaseAction) {
  try {
    const response = yield call(RoleAPI.deleteUserRole, action.data);
    const { message } = response.data;
    yield put(deleteAssignedRoleSuccess(action.data.email));
    yield put(getUsers());
    toast.success(message);
  } catch (error) {
    const errorMessage = apiErrorHandler(error);
    toast.error(errorMessage);
    yield put(deleteAssignedRoleFailure(errorMessage));
  }
}

export function* watchDeleteAssignedRoleSaga() {
  yield takeLatest( DELETE_ASSIGNED_ROLE,  deleteAssignedRoleSaga);
}
