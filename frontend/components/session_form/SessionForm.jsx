import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { email: '', password: '' }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(field) {
        return (e) => {
            this.setState({ [field]: e.target.value })
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.action(this.state);
        this.setState({ email: '', password: ''});
    }

    render() {
        let buttonValue;
        let redirectMessage;
        let linkPath;
        let linkText;
        if (this.props.formType === 'login'){
            buttonValue = 'Log in'
            redirectMessage = "Don't have an account?"
            linkPath = '/signup'
            linkText = 'Create account'
        } else {
            buttonValue = 'Sign up'
            redirectMessage = "Already have an account?"
            linkPath = '/login'
            linkText = 'Sign In'
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
                            type="password"
                            value={this.state.password}
                            onChange={this.handleChange('password')}
                            placeholder='Password'
                            />

                            <button type="submit">Continue</button>
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