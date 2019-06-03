import { connect } from 'react-redux';
import NotebookIndex from './NotebookIndex';
import { retrieveNotebooks, deleteNotebook } from '../../../actions/notebook_actions';
import { retrieveNotes } from '../../../actions/note_actions';

const msp = (state) => {
    return {
        user: state.entities.user[state.session.currentUserId],
        notebooks: Object.values(state.entities.notebooks),
        notes: Object.values(state.entities.notes)
    }
}

const mdp = (dispatch) => {
    return {
        retrieveNotebooks: (user) => dispatch(retrieveNotebooks(user)),
        retrieveNotes: (user) => dispatch(retrieveNotes(user)),
        deleteNotebook: (notebook) => dispatch(deleteNotebook(notebook))
    }
}


export default connect(msp, mdp)(NotebookIndex)