import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { retreiveNotebooks, createNotebook, deleteNotebook } from '../../actions/notebook_actions';
import MainContent from './MainContent';

const msp = (state) => {

    let currentUserId = state.session.currentUserId
    return {
        notebooks: Object.values(state.entities.notebooks),
        user: state.entities.user[currentUserId]
    }
}

const mdp = (dispatch) => {
    return {
        logout: ()=> dispatch(logout()),
        retreiveNotebooks: (user) => dispatch(retreiveNotebooks(user)),
        createNotebook: (notebook) => dispatch(createNotebook(notebook)),
        deleteNotebook: (notebook) => dispatch(deleteNotebook(notebook))
    }
}

export default connect(msp, mdp)(MainContent);