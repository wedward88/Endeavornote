import { combineReducers } from 'redux';
import entitiesReducer from './entities/entities_reducer';
import allErrorsReducer from './errors/all_errors_reducer';
import sessionReducer from './session/session_reducer';

export default combineReducers({
    entities: entitiesReducer,
    errors: allErrorsReducer,
    session: sessionReducer
});