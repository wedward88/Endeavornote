import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { email: '', password: '' }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount(){
        
    }

    handleChange(field) {
        return (e) => {
            this.setState({ [field]: e.target.value })
        }
    }

    handleSubmit(e) {
        e.preventDefault();

        if (this.props.verified){
            this.props.login(this.state);
            this.setState({ email: '', password: ''});
            this.props.clearErrors();
        } else {
            this.props.checkEmail({ email: this.state.email });
            this.props.clearErrors();
        }
    }

    render() {
        // debugger
        let redirectMessage;
        let linkPath;
        let linkText;
        let passwordInputType;
        let buttonType;
        let allErrors;
        

        if (this.props.errors.session.errors) {
            allErrors = this.props.errors.session.errors.map((error, idx) => {
                return <li key={idx}>{error}</li>
            });
            buttonType = 'hidden';
        } else {
            buttonType = 'submit';
        }

        if (this.props.formType === 'login'){
            redirectMessage = "Don't have an account?";
            linkPath = '/signup';
            linkText = 'Create account';
            passwordInputType = 'hidden';
        } else {
            redirectMessage = "Already have an account?";
            linkPath = '/login';
            linkText = 'Sign In';
            passwordInputType = 'password';
        }
        
        if (this.props.verified){
            passwordInputType = 'password';
        }

        return (
            <div className="login-signup-form-container">
                    <form onSubmit={this.handleSubmit} className="login-signup-form">

                        <div id="form-title">
                        <Link to='/'><img src={window.endeavornoteIcon} /></Link>
                            <h1>Endeavornote</h1>
                            <h2>Remember everything for your next Endeavor.</h2>
                        </div>

                        <div id="form-input">
                            <input 
                            type="text"
                            value={this.state.email}
                            onChange={this.handleChange('email')}
                            placeholder='Email address'
                            />

                            <input 
                            type={passwordInputType}
                            value={this.state.password}
                            onChange={this.handleChange('password')}
                            placeholder='Password'
                            />

                            <button type={buttonType}>Continue</button>
                            
                            <ul>
                                {allErrors}
                            </ul>
                        </div>


                        <div id="form-redirect-info">
                            <span>{redirectMessage}</span>
                            <Link to={linkPath}>{linkText}</Link>
                        </div>

                    </form>
            </div>
        )
    }
}

export default SessionForm;