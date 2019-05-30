import { RECEIVE_CURRENT_USER, RECEIVE_SESSION_ERRORS, CLEAR_ERRORS } from '../actions/session_actions';
import { merge } from 'lodash';

const sessionErrorsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_SESSION_ERRORS:
            return merge({}, state, { errors: action.errors });
        case RECEIVE_CURRENT_USER:
            return merge({}, state, { errors: [] });
        case CLEAR_ERRORS:
            return {};
        default:
            return state;
    }
};

export default sessionErrorsReducer;