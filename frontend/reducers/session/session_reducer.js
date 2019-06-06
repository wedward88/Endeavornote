import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../../actions/session_actions';
import { merge } from 'lodash';
import { CURRENT_NOTE, CLEAR_CURRENT_NOTE } from '../../actions/note_actions';
import { CURRENT_NOTEBOOK } from '../../actions/notebook_actions';

const sessionReducer = (state = { currentUserId: null, currentNote: null }, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return merge({}, state, { currentUserId: action.currentUser.id});
        case LOGOUT_CURRENT_USER:
            return merge({}, state, { currentUserId: null, 
                                      currentNotebook: null, 
                                      currentNote: null });
        case CURRENT_NOTE:
            return merge({}, state, { currentNote: action.note });
        
        case CLEAR_CURRENT_NOTE:
            return merge({}, state, { currentNote: null });

        case CURRENT_NOTEBOOK:
            return merge({}, state, { currentNotebook: action.notebook });
        default:
            return state;
    }
};

export default sessionReducer;