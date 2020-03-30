
import {
  GET_USERS, GET_USERS_FAILURE, GET_USERS_SUCCESS,
   LOGIN_USER,  LOGIN_USER_FAILURE,  LOGIN_USER_SUCCESS,
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

// Get users actions
export const getUsers = () => ({
  type: GET_USERS,
});

export const getUsersSuccess = (response: any) => ({
  type: GET_USERS_SUCCESS,
  response,
});

export const getUsersFailure = (error?: any) => ({
  type: GET_USERS_FAILURE,
  error,
});
