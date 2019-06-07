import { connect } from 'react-redux';
import NotebookIndex from './NotebookIndex';
import { retrieveNotebooks, deleteNotebook, currentNotebook } from '../../../actions/notebook_actions';
import { retrieveNotes, currentNote, deleteNote } from '../../../actions/note_actions';

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
        deleteNotebook: (notebook) => dispatch(deleteNotebook(notebook)),
        currentNotebook: (notebook) => dispatch(currentNotebook(notebook)),
        currentNote: (note) => dispatch(currentNote(note)),
        deleteNote: (note) => dispatch(deleteNote(note))
    }
}


export default connect(msp, mdp)(NotebookIndex)