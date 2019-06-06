import { connect } from 'react-redux';
import NoteEditor from './NoteEditor';
import { createNote, editNote } from '../../../actions/note_actions';


const msp = (state, ownProps) => {
    
    const user = state.entities.user[state.session.currentUserId];
    // const defaultNotebook = state.entities.notebooks[user.default_notebook_id];
    let currentNotebookId;
    if (ownProps.match.params.noteId) {
        currentNotebookId = ownProps.match.params.notebookId || user.default_notebook_id;
    }
    const currentNotebook = state.entities.notebooks[currentNotebookId] || { note_ids: [] };
    const currentNoteId = ownProps.match.params.noteId || currentNotebook.note_ids[0]
    // debugger
    return {
        currentNote: state.entities.notes[currentNoteId],
        currentNotebook: state.entities.notebooks[currentNotebookId],
        defaultNotebookId: user.default_notebook_id,
        user: user
    }
}

const mdp = (dispatch) => {
    
    return {
        createNote: (note) => dispatch(createNote(note)),
        editNote: (note) => dispatch(editNote(note)),
    }
}

export default connect(msp, mdp)(NoteEditor);