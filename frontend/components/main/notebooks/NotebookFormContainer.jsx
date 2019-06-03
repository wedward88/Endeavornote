import React from 'react';
import { connect } from 'react-redux';
import { createNotebook, editNotebook } from '../../../actions/notebook_actions';

class NotebookForm extends React.Component {
    constructor(props) {
        super(props);

        const { currentNotebook } = this.props;
        
        this.state = currentNotebook ? currentNotebook : { 
            name: '', 
            user_id: this.props.user_id ,
            formEmpty: true
        }
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleChange(field) {
        return (e) => {
            this.setState({ [field]: e.target.value, ['formEmpty']: false }, ()=>{
                if (this.state.name.length === 0){
                    this.setState({ ['formEmpty']: true })
                };
            });
        };
    };

    handleSubmit(e) {
        e.preventDefault();
        if (this.props.formType === "newNotebook") {
            this.props.createNotebook(this.state);
            this.props.toggleModal();
        } else {
            this.props.editNotebook(this.state);
            this.props.toggleModal();
        }
    }


    render () {
    
        return (
            <div onClick={this.props.closeModal} className="modal-container">
                <form onClick={e => e.stopPropagation()} onSubmit={!this.state.formEmpty ? this.handleSubmit : (e)=> e.preventDefault}>
                    <div className="form-top">
                        <div className="form-top-title-container">
                            <h1>{this.props.formType === 'newNotebook' ? "Create new notebook" : "Rename notebook"}</h1>
                            <i onClick={this.props.toggleModal} className="fas fa-times fa-2x"></i>
                        </div>
                        <p>
                            { this.props.formType === 'newNotebook' ? "Notebooks are useful for grouping notes around a common topic. They can be private or shared." : "" }
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
                        <button onClick={this.props.toggleModal} type="button">Cancel</button>
                        <button className={this.state.formEmpty ? "modal-submit-button" : "modal-submit-button-valid"} type="submit">Continue</button>
                    </div>
                </form>
            </div>
        )
    }

}


const msp = (state, ownProps) => {
    return {
        user_id: state.session.currentUserId,
        formType: ownProps.formType,
        currentNotebook: ownProps.currentNotebook
    }
}

const mdp = (dispatch, ownProps) => {
    return {
        createNotebook: (formInfo) => dispatch(createNotebook(formInfo)),
        editNotebook: (formInfo) => dispatch(editNotebook(formInfo)),
        toggleModal: () => ownProps.toggleModal(),
        closeModal: () => ownProps.closeModal()
    }
}

export default connect(msp, mdp)(NotebookForm)