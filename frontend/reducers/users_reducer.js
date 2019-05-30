import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER, RECEIVE_USER_EMAIL, CLEAR_ERRORS } from '../actions/session_actions';
import { merge } from 'lodash';

const usersReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            let newState;
            if (state.email){
                newState = merge({}, state)
                delete newState.email
            }
            return merge({}, newState, { [action.currentUser.id]: action.currentUser });
        case LOGOUT_CURRENT_USER:
            return {};
        case RECEIVE_USER_EMAIL:
            return merge({}, state, { email: action.email} );
        case CLEAR_ERRORS:
            return {};
        default:
            return state;
    }
}

export default usersReducer;