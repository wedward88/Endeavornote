import { connect } from 'react-redux';
import SessionForm from './SessionForm';
import { signup, clearErrors } from '../../actions/session_actions';

const msp = (state) => {
    return {
        errors: state.errors,
        formType: 'signup',
        verified: true
    }
};

const mdp = (dispatch) => {
    return {
        signup: (formData) => dispatch(signup(formData)),
        clearErrors: () => dispatch(clearErrors())
    }
};

export default connect(msp, mdp)(SessionForm);