import { combineReducers } from 'redux';
import modal from './modalReducer';
import userRole from './roleReducer';
import user from './userReducer';

const rootReducer = combineReducers({
  user,
  userRole,
  modal,
});

export default rootReducer;
