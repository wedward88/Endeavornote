import { connect } from 'react-redux';
import NotebookIndex from './NotebookIndex';
import { retrieveNotebooks } from '../../../actions/notebook_actions';

const msp = (state) => {
    return {
        user: state.entities.user[state.session.currentUserId],
        notebooks: Object.values(state.entities.notebooks)
    }
}

const mdp = (dispatch) => {
    return {
        retrieveNotebooks: (user) => dispatch(retrieveNotebooks(user))
    }
}


export default connect(msp, mdp)(NotebookIndex)