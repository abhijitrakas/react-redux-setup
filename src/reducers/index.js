import { combineReducers } from 'redux';
import { usersReducers } from './users/usersReducers';

export default combineReducers({
    users: usersReducers
});