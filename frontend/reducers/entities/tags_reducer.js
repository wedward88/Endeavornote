import { RECEIVE_TAGS, RECEIVE_ONE_TAG, DELETE_TAG } from '../../actions/tag_actions';
import { merge } from 'lodash';

const tagsReducer = (state = {}, action) => {
    Object.freeze(state);

    switch (action.type) {
        
        case RECEIVE_TAGS:
            
            const newTags = {};
            Object.values(action.tags).forEach((tag) => {
                newTags[tag.id] = tag;
            });
            return merge({}, state, newTags);

        case RECEIVE_ONE_TAG:
            return merge({}, state, { [action.tag.tag.id]: action.tag.tag });

        case DELETE_TAG:
            const newState = merge({}, state);
            delete newState[action.tag.id];
            return newState;
        
        default:
            return state;
    }
}

export default tagsReducer;