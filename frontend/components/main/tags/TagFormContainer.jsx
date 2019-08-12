import React from 'react';
import { connect } from 'react-redux';
import { createTag, deleteTagging } from '../../../actions/tag_actions';

class TagForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name: "",
            note_id: this.props.note_id
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.note_id !== this.props.note_id) {
            this.setState({
                note_id: this.props.note_id
            });
        }
    }

    handleChange(field) {
        return (e) => {
            this.setState({ [field]: e.target.value }, () => {
            });
        };
    };

    handleSubmit(e) {
        e.preventDefault();
        this.props.createTag(this.state);
        this.setState({
            name: ""
        });
    }

    render () {
        let tags;
        if (this.props.tags){
            tags = this.props.tags.map((tag) => {
                return (
                    <li key={tag.id}>
                        {tag.name}
                        &nbsp;
                        <i className="fas fa-angle-down"></i>
                    </li>
                )
            })
        }
        return (
            <div className="tag-form">
                <form onSubmit={this.handleSubmit}>
                    <ul className="tag-form-list">
                        { tags }
                    </ul>
                    <input 
                    type="text"
                    value={this.state.name}
                    placeholder="Add tag"
                    onChange={this.handleChange('name')}
                    />
                </form>
            </div>
        )
    }
}

const msp = (state, ownProps) => {
    
    let taggings = Object.values(state.entities.taggings);
    let tags = [];
    if (taggings.length > 0){
        for(let tagging of taggings){
            if (tagging.note_id === ownProps.note_id) {
                tags.push(state.entities.tags[tagging.tag_id])
            }
        }
    }
    return {
        tags: tags
    }
}

const mdp = (dispatch) => {
    return  {
        createTag: (tag) => dispatch(createTag(tag)),
        deleteTagging: (tag) => dispatch(deleteTagging(tag))
    }
}

export default connect(msp, mdp)(TagForm);

