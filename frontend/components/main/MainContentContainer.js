import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import MainContent from './MainContent';

const msp = (state) => {

    let currentUserId = state.session.currentUserId
    return {
        user: state.entities.user[currentUserId]
    }
}

const mdp = (dispatch) => {
    return {
        logout: ()=> dispatch(logout()),

    }
}

export default connect(msp, mdp)(MainContent);