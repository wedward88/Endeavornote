import { connect } from 'react-redux';
import TagsIndex from './TagsIndex';
import { retrieveTags, deleteTag } from '../../../actions/tag_actions';

const msp = (state) => {
    return {
        tags: Object.values(state.entities.tags)
    }
}

const mdp = (dispatch) => {
    return {
        retrieveTags: () => dispatch(retrieveTags()),
        deleteTag: (tag) => dispatch(deleteTag(tag))
    }
}

export default connect(msp, mdp)(TagsIndex)