import React from 'react';
import { connect } from 'react-redux';
import { createTag, deleteTagging } from '../../../actions/tag_actions';

class TagForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name: "",
            note_id: this.props.note_id,
            openTag: null
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.openTagMenu = this.openTagMenu.bind(this);
        this.handleTagRemove = this.handleTagRemove.bind(this);
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
        this.props.createTag({ name: this.state.name, note_id: this.state.note_id });
        this.setState({
            name: ""
        });
    }

    openTagMenu(id){
        this.setState({
            openTag: id
        })
    }

    closeTagMenu(){
        this.setState({
            openTag: null
        })
    }

    handleTagRemove(id) {
        this.props.deleteTagging({ tag_id: id, note_id: this.state.note_id });
        this.closeTagMenu();
    }

    render () {
        let tags;
        if (this.props.tags){
            tags = this.props.tags.map((tag) => {
                return (
                    <li 
                    key={tag.id}
                    tabIndex="1"
                    onFocus={ ()=> this.openTagMenu(tag.id) }
                    onBlur={ ()=> this.closeTagMenu() }
                    className={"tag-form-item"}
                    >
                        {tag.name}
                        &nbsp;
                        <i className="fas fa-angle-down"></i>
                        <ul className={this.state.openTag === tag.id ? "tag-menu-open" : "tag-menu-closed"}>
                            <li onClick={ ()=> this.handleTagRemove(tag.id)  }>Remove</li>
                        </ul>
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

