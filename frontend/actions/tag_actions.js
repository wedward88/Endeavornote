import * as TagApiUtil from '../util/tag_api_util';

export const RECEIVE_TAGS = 'RECEIVE_TAGS';
export const RECEIVE_TAGGINGS = 'RECEIVE_TAGGINGS';
export const RECEIVE_ONE_TAG = 'RECEIVE_ONE_TAG';
export const DELETE_TAG = 'DELETE_TAG';

export const receiveTags = (tags) => {
    return {
        type: RECEIVE_TAGS,
        tags
    };
};

export const receiveTaggings = (taggings) => {
    return {
        type: RECEIVE_TAGGINGS,
        taggings
    }
}

export const receiveTag = (tag) => {
    return {
        type: RECEIVE_ONE_TAG,
        tag
    };
};

export const removeTag = (tag) => {
    return {
        type: DELETE_TAG,
        tag
    };
};

export const retrieveTags = () => dispatch => {
    return TagApiUtil.fetchTags().then((tags)=>{
        return dispatch(receiveTags(tags));
    });
};

export const retrieveTaggings = () => dispatch => {
    return TagApiUtil.fetchTaggings().then((taggings) => {
        return dispatch(receiveTaggings(taggings));
    });
};

export const editTag = (tag) => dispatch => {
    return TagApiUtil.editTag(tag).then((tag)=> {
        return dispatch(receiveTag(tag));
    });
};

export const createTag = (tag) => dispatch => {
    return TagApiUtil.createTag(tag).then((tag) => {
        return dispatch(receiveTag(tag));
    });
};

export const deleteTag = (tag) => dispatch => {
    return TagApiUtil.deleteTag(tag).then((tag) => {
        return dispatch(removeTag(tag));
    });
};

