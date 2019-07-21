import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import notebooksReducer from './notebooks_reducer';
import notesReducer from './notes_reducer';
import tagsReducer from './tags_reducer';


export default combineReducers({
    user: usersReducer,
    notebooks: notebooksReducer,
    notes: notesReducer,
    tags: tagsReducer
});