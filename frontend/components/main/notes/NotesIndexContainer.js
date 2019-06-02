import { connect } from 'react-redux';
import NotesIndex from './NotesIndex';
import { retrieveNotes } from '../../../actions/note_actions';

const msp = (state) => {
    return {
        notes: Object.values(state.entities.notes),
        user: state.entities.user[state.session.currentUserId]
    };
};

const mdp = (dispatch) => {
    
    return {
        retrieveNotes: (user) => dispatch(retrieveNotes(user)),
    };
};


export default connect(msp, mdp)(NotesIndex)