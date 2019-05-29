import React from 'react';

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
        if (this.props.formType === 'login'){
            buttonValue = 'Log in'
        } else {
            buttonValue = 'Sign up'
        }

        return (
            <div className={`${this.props.formType}-form-container`}>
                    <form onSubmit={this.handleSubmit} className={`${this.props.formType}-form`}>

                        <input 
                        type="text"
                        value={this.state.email}
                        onChange={this.handleChange('email')}
                        />

                        <input 
                        type="password"
                        value={this.state.password}
                        onChange={this.handleChange('password')}
                        />

                        <input type="submit" value={buttonValue}/>

                    </form>
            </div>
        )
    }
}

export default SessionForm;