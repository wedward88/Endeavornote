import React from 'react';
import { connect } from 'react-redux';
import { createTag, editTag } from '../../../actions/tag_actions'

class TagIndexForm extends React.Component {
    constructor(props) {
        super(props);

        const { currentTag } = this.props;

        this.state = currentTag ? currentTag : {
            name: '',
            user_id: this.props.user_id,
            formEmpty: true
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleChange(field) {
        return (e) => {
            this.setState({ [field]: e.target.value, ['formEmpty']: false }, () => {
                if (this.state.name.length === 0) {
                    this.setState({ ['formEmpty']: true })
                };
            });
        };
    };

    handleSubmit(e) {
        e.preventDefault();
        if (this.props.formType === "newTag") {
            this.props.createTag(this.state);
            this.props.toggleModal();
        } else {
            this.props.editTag(this.state);
            this.props.toggleModal();
        }
    }


    render() {

        return (
            <div onClick={this.props.closeModal} className="modal-container">
                <form onClick={e => e.stopPropagation()} onSubmit={!this.state.formEmpty ? this.handleSubmit : (e) => e.preventDefault}>
                    <div className="form-top">
                        <div className="form-top-title-container">
                            <h1>{this.props.formType === 'newTag' ? "Create new tag" : "Rename tag"}</h1>
                            <i onClick={this.props.toggleModal} className="fas fa-times fa-2x"></i>
                        </div>
                    </div>
                    <div className="modal-form-input">

                        <label><span>Name</span>
                            <input
                                type="text"
                                value={this.state.name}
                                placeholder='Tag name'
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
        currentTag: ownProps.currentTag
    }
}

const mdp = (dispatch, ownProps) => {
    return {
        createTag: (formInfo) => dispatch(createTag(formInfo)),
        editTag: (formInfo) => dispatch(editTag(formInfo)),
        toggleModal: () => ownProps.toggleModal(),
        closeModal: () => ownProps.closeModal()
    }
}

export default connect(msp, mdp)(TagIndexForm)