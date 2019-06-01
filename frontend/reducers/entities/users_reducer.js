import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER, RECEIVE_USER_EMAIL, CLEAR_ERRORS } from '../../actions/session_actions';
import { RECEIVE_NOTEBOOKS, RECEIVE_ONE_NOTEBOOK, DELETE_NOTEBOOK } from '../../actions/notebook_actions';
import { merge } from 'lodash';

const usersReducer = (state = { notebookIds: [] }, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            let newState;
            if (state.email){
                newState = merge({}, state)
                delete newState.email
            }
            return merge({}, state, newState, { [action.currentUser.id]: action.currentUser });
        case LOGOUT_CURRENT_USER:
            return {};
        case RECEIVE_USER_EMAIL:
            return merge({}, state, { email: action.email} );
        case RECEIVE_NOTEBOOKS:
                newState = merge({}, state);
                action.notebooks.forEach((notebook)=> {
                    newState.notebookIds.push(notebook.id)
                })
            return newState;
        case RECEIVE_ONE_NOTEBOOK:
                newState = merge({}, state);
                newState.notebookIds.push(action.notebook.id);
            return newState;
        case DELETE_NOTEBOOK:
                newState = merge({}, state);
                let notebookArr = newState.notebookIds;
                let notebookIdx = notebookArr.indexOf(action.notebook.id);
            delete notebookArr[notebookIdx];
            return newState;
        case CLEAR_ERRORS:
            return {};
        default:
            return state;
    }
}

export default usersReducer;