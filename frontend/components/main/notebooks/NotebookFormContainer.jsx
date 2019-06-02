import React from 'react';
import { connect } from 'react-redux';
import { createNotebook } from '../../../actions/notebook_actions';

class NotebookForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { name: '', user_id: this.props.user_id }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(field) {
        return (e) => {
            this.setState({ [field]: e.target.value });
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.createNotebook(this.state);
        this.props.closeModal();
    }

    render () {
        return (
            <div className="modal-container">
                <form onSubmit={this.handleSubmit}>
                    <div className="form-top">
                        <div className="form-top-title-container">
                            <h1>Create new notebook</h1>
                            <i onClick={this.props.closeModal} className="fas fa-times fa-2x"></i>
                        </div>
                        <p>
                            Notebooks are useful for grouping notes around a common topic. They can be private or shared.
                        </p>
                    </div>
                    <div className="modal-form-input">
                        
                        <label><span>Name</span>
                            <input 
                            type="text"
                            value={this.state.name}
                            placeholder='Notebook name'
                            onChange={this.handleChange('name')}
                            />
                        </label>
                    </div>
                    <div className="modal-buttons-container">
                        <button onClick={this.props.closeModal} type="button">Cancel</button>
                        <button className="modal-submit-button" type="submit">Continue</button>
                    </div>
                </form>
            </div>
        )
    }

}


const msp = (state) => {
    return {
        user_id: state.session.currentUserId
    }
}

const mdp = (dispatch, ownProps) => {
    return {
        createNotebook: (formInfo) => dispatch(createNotebook(formInfo)),
        closeModal: () => ownProps.closeModal()
    }
}

export default connect(msp, mdp)(NotebookForm)