import { connect } from 'react-redux';
import NoteEditor from './NoteEditor';
import { createNote, editNote } from '../../../actions/note_actions';


const msp = (state) => {
    
    let user = Object.values(state.entities.user)[0]
    debugger ///LEAVING OFF HERE, DEFAULT NOTEBOOK ISNT MAPPING TO NOTEEDITOR PROPS FOR SOME REASON
    return {
        currentNote: state.session.currentNote,
        currentNotebook: state.session.currentNotebook,
        defaultNotebook: user.defaultNotebook,
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