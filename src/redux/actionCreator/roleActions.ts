
import {
  ASSIGN_ROLE, ASSIGN_ROLE_FAILURE, ASSIGN_ROLE_SUCCESS,
  DELETE_ASSIGNED_ROLE, DELETE_ASSIGNED_ROLE_FAILURE, DELETE_ASSIGNED_ROLE_SUCCESS,
  GET_ROLE, GET_ROLES, GET_ROLES_FAILURE,
  GET_ROLES_SUCCESS, GET_ROLE_FAILURE, GET_ROLE_SUCCESS,
} from '../constants/actionTypes';

// User role actions
export const getRoles = (data?: any) => ({
  type: GET_ROLES,
  data,
});

export const getRolesSuccess = (response: any) => ({
  type: GET_ROLES_SUCCESS,
  response,
});

export const getRolesFailure = (error?: any) => ({
  type: GET_ROLES_FAILURE,
  error,
});

// User role actions
export const getRole = (data?: any) => ({
  type: GET_ROLE,
  data,
});

export const getRoleSuccess = (response: any) => ({
  type: GET_ROLE_SUCCESS,
  response,
});

export const getRoleFailure = (error?: any) => ({
  type: GET_ROLE_FAILURE,
  error,
});

// Assign user role  actions
export const assignRole = (data?: any) => ({
  type: ASSIGN_ROLE,
  data,
});

export const assignRoleSuccess = (response: any) => ({
  type: ASSIGN_ROLE_SUCCESS,
  response,
});

export const assignRoleFailure = (error?: any) => ({
  type: ASSIGN_ROLE_FAILURE,
  error,
});

// Delete user role  actions
export const deleteAssignedRole = (data?: any) => ({
  type: DELETE_ASSIGNED_ROLE,
  data,
});

export const deleteAssignedRoleSuccess = (response: any) => ({
  type: DELETE_ASSIGNED_ROLE_SUCCESS,
  response,
});

export const deleteAssignedRoleFailure = (error?: any) => ({
  type: DELETE_ASSIGNED_ROLE_FAILURE,
  error,
});
