import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import notebooksReducer from './notebooks_reducer';


export default combineReducers({
    user: usersReducer,
    notebooks: notebooksReducer
});