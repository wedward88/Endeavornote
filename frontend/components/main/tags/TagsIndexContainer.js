import { connect } from 'react-redux';
import TagsIndex from './TagsIndex';
import { retrieveTags } from '../../../actions/tag_actions';

const msp = (state) => {
    return {
        tags: Object.values(state.entities.tags)
    }
}

const mdp = (dispatch) => {
    return {
        retrieveTags: () => dispatch(retrieveTags())
    }
}

export default connect(msp, mdp)(TagsIndex)