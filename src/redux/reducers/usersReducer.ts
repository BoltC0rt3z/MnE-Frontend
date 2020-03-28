import {
  DELETE_USER,
  DELETE_USER_FAILURE,
  DELETE_USER_SUCCESS,
  EDIT_USERS,
  EDIT_USERS_FAILURE,
  EDIT_USERS_SUCCESS,
  FETCH_USERS,
  FETCH_USERS_FAILURE,
  FETCH_USERS_SUCCESS,
} from '../constants/actionTypes';
import { BaseAction } from './typed';
import { UserStateInterface } from './typed';

const initialState: UserStateInterface = {
  users: [],
  isLoading: false,
  error: null,
};

const usersUserReducer = (state = initialState, action: BaseAction) => {
  switch (action.type) {
    case FETCH_USERS:
      return {
        ...state,
        isLoading: true,
      };

    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        users: action.response,
      };

    case FETCH_USERS_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };

    case EDIT_USERS:
      return {
        ...state,
        isLoading: true,
      };

    case EDIT_USERS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        users: state.users?.map((user: any) =>
          user.userId !== action.response.userId
            ? user
            : { ...user, ...action.response }
        ),
      };

    case EDIT_USERS_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };

    case DELETE_USER:
      return {
        ...state,
        isLoading: true,
      };

    case DELETE_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        users: state.users?.filter(
          (user: any) => user.userId !== action.response
        ),
      };

    case DELETE_USER_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export default usersUserReducer;
