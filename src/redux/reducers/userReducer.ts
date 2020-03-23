import {
  LOGIN_USER,
  LOGIN_USER_FAILURE,
  LOGIN_USER_SUCCESS
} from '../constants/actionTypes';
import { BaseAction } from './typed';
import { UserStateInterface } from './typed';

const initialState: UserStateInterface = {
  currentUser: {},
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

export default loginUserReducer;
