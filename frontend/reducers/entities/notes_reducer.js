import { RECEIVE_NOTES, RECEIVE_ONE_NOTE, DELETE_NOTE } from '../../actions/note_actions';
import { LOGOUT_CURRENT_USER } from '../../actions/session_actions';
import { merge } from 'lodash';

const notesReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {

        case RECEIVE_NOTES:
            const newNotes = {};
            Object.values(action.notes).forEach((note) => {
                newNotes[note.id] = note;
            });
            return merge({}, state, newNotes);

        case RECEIVE_ONE_NOTE:
            return merge({}, state, { [action.note.id]: action.note });

        case DELETE_NOTE:
            const newState = merge({}, state);
            delete newState[action.note.id];
            return newState;

        case LOGOUT_CURRENT_USER:
            return {};

        default:
            return state;
    }

}

export default notesReducer;