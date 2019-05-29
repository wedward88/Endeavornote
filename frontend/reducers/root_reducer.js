import { combineReducers } from 'redux';
import entitiesReducer from './entities_reducer';
import allErrorsReducer from './all_errors_reducer';
import sessionReducer from './session_reducer';

export default combineReducers({
    entities: entitiesReducer,
    errors: allErrorsReducer,
    session: sessionReducer
});