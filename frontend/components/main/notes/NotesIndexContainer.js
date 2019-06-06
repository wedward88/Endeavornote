import { connect } from 'react-redux';
import NotesIndex from './NotesIndex';
import { retrieveNotes, currentNote} from '../../../actions/note_actions';

const msp = (state) => {
    let notes;
    if (state.session.currentNotebook) {
        notes = Object.values(state.entities.notes).map(note=> note.notebook_id === state.session.currentNotebook.id ? note : null)
    } else {
        notes = Object.values(state.entities.notes)
    }

    // debugger
    return {
        notes: notes,
        user: state.entities.user[state.session.currentUserId],
        currentNotebook: state.session.currentNotebook
    };
};

const mdp = (dispatch) => {
    
    return {
        retrieveNotes: (user) => dispatch(retrieveNotes(user)),
        currentNote: (note) => dispatch(currentNote(note))
    };
};


export default connect(msp, mdp)(NotesIndex)