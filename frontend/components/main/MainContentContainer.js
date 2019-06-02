import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import MainContent from './MainContent';

const msp = (state) => {
    return {
        user: state.entities.user[state.session.currentUserId]
    }
}

const mdp = (dispatch) => {
    return {
        logout: ()=> dispatch(logout()),

    }
}

export default connect(msp, mdp)(MainContent);