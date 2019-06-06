import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import MainContent from './MainContent';
import { clearCurrentNote, retrieveNotes } from '../../actions/note_actions';
import { retrieveNotebooks } from '../../actions/notebook_actions';

const msp = (state) => {
    return {
        user: state.entities.user[state.session.currentUserId]
    }
}

const mdp = (dispatch) => {
    return {
        logout: ()=> dispatch(logout()),
        clearCurrentNote: ()=> dispatch(clearCurrentNote()),
        retrieveNotebooks: (user)=> dispatch(retrieveNotebooks(user)),
        retrieveNotes: (user)=> dispatch(retrieveNotes(user))
    }
}

export default connect(msp, mdp)(MainContent);