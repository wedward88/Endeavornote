import { RECEIVE_TAGGINGS, DELETE_TAG, RECEIVE_ONE_TAG } from '../../actions/tag_actions';
import { merge } from 'lodash';

const taggingsReducer = (state = {}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_TAGGINGS:
            const newTaggings = {};
            Object.values(action.taggings).forEach((tagging) => {
                newTaggings[tagging.tag_id] = tagging;
            });
            return merge({}, state, newTaggings);
        
        case RECEIVE_ONE_TAG:
            let newTagging = action.tag.tagging[0];
            let id = newTagging.id;
            return merge({}, state, {[id]: newTagging});
    
        case DELETE_TAG:
            const newState = merge({}, state);
            delete newState[action.tag.id];
            return newState;

        default:
            return state;
    }
}

export default taggingsReducer; 