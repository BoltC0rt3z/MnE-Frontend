import { combineReducers } from 'redux';
import user from './userReducer';
import users from './usersReducer';

const rootReducer = combineReducers({
  user,
  users,
});

export default rootReducer;
