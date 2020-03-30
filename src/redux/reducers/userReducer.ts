import {
  GET_USERS,
  GET_USERS_FAILURE,
  GET_USERS_SUCCESS,
  LOGIN_USER,
  LOGIN_USER_FAILURE,
  LOGIN_USER_SUCCESS
} from '../constants/actionTypes';
import { BaseAction } from './typed';
import { UserStateInterface } from './typed';

const initialState: UserStateInterface = {
  currentUser: {},
  users: [],
  isLoading: false,
  error: null,
};

const loginUserReducer = (state = initialState, action: BaseAction) => {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        currentUser: action.response,
        isLoading: false,
        error: null,
      };
    case LOGIN_USER_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    default:
      return state;
  }
};

const getUsersReducer = (state = initialState, action: BaseAction) => {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case GET_USERS_SUCCESS:
      return {
        ...state,
        users: action.response,
        isLoading: false,
        error: null,
      };
    case GET_USERS_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    default:
      return loginUserReducer(state, action);
  }
};

export default getUsersReducer;
