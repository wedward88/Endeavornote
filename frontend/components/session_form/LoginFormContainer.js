import { connect } from 'react-redux';
import SessionForm from './SessionForm';
import { login, checkEmail, clearErrors } from '../../actions/session_actions';

const msp = (state) => {
    return {
        errors: state.errors,
        formType: 'login',
        verified: Boolean(state.entities.user.email)
    }
};

const mdp = (dispatch) => {

    return {
        login: (formData) => dispatch(login(formData)),
        checkEmail: (formData) => dispatch(checkEmail(formData)),
        clearErrors: ()=> dispatch(clearErrors()),
    }

};

export default connect(msp, mdp)(SessionForm);