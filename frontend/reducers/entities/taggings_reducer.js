import { RECEIVE_TAGGINGS, DELETE_TAG, RECEIVE_ONE_TAG, REMOVE_ONE_TAGGING } from '../../actions/tag_actions';
import { merge } from 'lodash';

const taggingsReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState;
    switch (action.type) {
        
        case RECEIVE_TAGGINGS:
            const newTaggings = {};
            Object.values(action.taggings).forEach((tagging) => {
                newTaggings[tagging.id] = tagging;
            });
            return merge({}, state, newTaggings);
        
        case RECEIVE_ONE_TAG:
            if (!action.tag.tagging) return state;
            let newTagging = action.tag.tagging;
            let id = newTagging.id;
            return merge({}, state, {[id]: newTagging});

        case REMOVE_ONE_TAGGING:
            newState = merge({}, state);
            delete newState[action.tag.id];
            return newState;

        case DELETE_TAG:
            // debugger
            newState = merge({}, state);
            Object.values(action.tag.taggings).forEach((tagging) => {
                delete newState[tagging.id]
            })
            return newState;

        default:
            return state;
    }
}

export default taggingsReducer; 