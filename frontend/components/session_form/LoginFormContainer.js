import { connect } from 'react-redux';
import SessionForm from './SessionForm';
import { login } from '../../actions/session_actions';

const msp = (state) => {
    return {
        errors: state.errors,
        formType: 'login'
    }
};

const mdp = (dispatch) => {
    return {
        action: (formData) => dispatch(login(formData))
    }
};

export default connect(msp, mdp)(SessionForm);