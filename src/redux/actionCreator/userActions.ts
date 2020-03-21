
import {
  LOGIN_USER, LOGIN_USER_FAILURE, LOGIN_USER_SUCCESS,
} from '../constants/actionTypes';

// Login user actions
export const loginUser = (data: any) => ({
  type: LOGIN_USER,
  data,
});

export const loginUserSuccess = (response: any) => ({
  type: LOGIN_USER_SUCCESS,
  response,
});

export const loginUserFailure = (error?: any) => ({
  type: LOGIN_USER_FAILURE,
  error,
});
