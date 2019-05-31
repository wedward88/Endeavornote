import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { fetchNotebooks, createNotebook } from '../../actions/notebook_actions';
import MainContent from './MainContent';

const mdp = (dispatch) => {
    return {
        logout: ()=> dispatch(logout()),
    }
}

export default connect(null, mdp)(MainContent);