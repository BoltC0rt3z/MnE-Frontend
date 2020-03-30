import {
  ASSIGN_ROLE,
  ASSIGN_ROLE_FAILURE,
  ASSIGN_ROLE_SUCCESS,
  DELETE_ASSIGNED_ROLE,
  DELETE_ASSIGNED_ROLE_FAILURE,
  DELETE_ASSIGNED_ROLE_SUCCESS,
  GET_ROLE,
  GET_ROLES,
  GET_ROLES_FAILURE,
  GET_ROLES_SUCCESS,
  GET_ROLE_FAILURE,
  GET_ROLE_SUCCESS,
} from '../constants/actionTypes';
import { BaseAction } from './typed';
import { RoleStateInterface } from './typed';

const initialState: RoleStateInterface = {
  roles: [],
  role: {},
  isLoading: false,
  assignLoading: false,
  error: null,
};

const getRolesReducer = (state = initialState, action: BaseAction) => {
  switch (action.type) {
    case GET_ROLES:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case GET_ROLES_SUCCESS:
      return {
        ...state,
        roles: action.response,
        isLoading: false,
        error: null,
      };
    case GET_ROLES_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    default:
      return state;
  }
};

const getRoleReducer = (state = initialState, action: BaseAction) => {
  switch (action.type) {
    case GET_ROLE:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case GET_ROLE_SUCCESS:
      return {
        ...state,
        role: action.response,
        isLoading: false,
        error: null,
      };
    case GET_ROLE_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    default:
      return getRolesReducer(state, action);
  }
};

const assignRoleReducer = (state = initialState, action: BaseAction) => {
  switch (action.type) {
    case ASSIGN_ROLE:
      return {
        ...state,
        assignLoading: true,
        error: null,
      };
    case ASSIGN_ROLE_SUCCESS:
      return {
        ...state,
        role: {
          ...state.role,
          users: [...state.role.users, action.response],
        },
        assignLoading: false,
        error: null,
      };
    case ASSIGN_ROLE_FAILURE:
      return {
        ...state,
        assignLoading: false,
        error: action.error,
      };
    default:
      return getRoleReducer(state, action);
  }
};

const deleteAssignedRoleReducer = (state = initialState, action: BaseAction) => {
  switch (action.type) {
    case DELETE_ASSIGNED_ROLE:
      return {
        ...state,
        assignLoading: true,
        error: null,
      };
    case DELETE_ASSIGNED_ROLE_SUCCESS: {
      const newUsers = state.role.users.filter((user: any) => user.email !== action.response)
      return {
        ...state,
        role: {
          ...state.role,
          users: newUsers,
        },
        assignLoading: false,
        error: null,
      };
    }
    case DELETE_ASSIGNED_ROLE_FAILURE:
      return {
        ...state,
        assignLoading: false,
        error: action.error,
      };
    default:
      return assignRoleReducer(state, action);
  }
};

export default deleteAssignedRoleReducer;
