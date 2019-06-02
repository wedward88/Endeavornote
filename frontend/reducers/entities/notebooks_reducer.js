import { RECEIVE_NOTEBOOKS, RECEIVE_ONE_NOTEBOOK, DELETE_NOTEBOOK } from '../../actions/notebook_actions';
import { LOGOUT_CURRENT_USER } from '../../actions/session_actions';
import { merge } from 'lodash';

const notebooksReducer = (state = {}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_NOTEBOOKS:
            const newNotebooks = {};
            action.notebooks.forEach((notebook) => {
                newNotebooks[notebook.id] = notebook;
            });
            return merge({}, state, newNotebooks);
        case RECEIVE_ONE_NOTEBOOK:
            return merge({}, state, { [action.notebook.id]: action.notebook });
        case DELETE_NOTEBOOK:
            const newState = merge({}, state );
            delete newState[action.notebook.id];
            return newState;
        case LOGOUT_CURRENT_USER:
            return {};
        default:
            return state;
    }
}

export default notebooksReducer;