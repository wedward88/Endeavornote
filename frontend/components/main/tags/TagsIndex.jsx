import React from 'react';
import TagsIndexFormContainer from './TagsIndexFormContainer';


class TagsIndex extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            itemHovered: null,
            itemClicked: null,
            formType: "newTag",
            modalOpen: false,
            currentTag: null,
        }

        this.toggleModal = this.toggleModal.bind(this);
        this.closeModal = this.closeModal.bind(this);


    }

    toggleModal(formTypeText, tag) {
        this.toggleItem('itemClicked')
        if (formTypeText === 'editForm') {
            this.setState({
                ['formType']: formTypeText,
                ['modalOpen']: !this.state.modalOpen,
                ['currentTag']: tag,
            });
        } else {
            this.setState({
                ['formType']: 'newTag',
                ['modalOpen']: !this.state.modalOpen,
                ['currentTag']: null,
            });
        }
    }

    closeModal() {
        this.setState({ ['modalOpen']: false })
    }

    componentDidMount () {
        this.props.retrieveTags();
    }

    toggleItem (item, id) {  
        if (id){
            this.setState({
                [item]: id
            })
        } else {
            this.setState({
                [item]: null
            })
        }
    }


    render () {
        
        let { tags } = this.props;
        let tagItems;
        let tagHeaders = [];
        let modalForm;

        if (tags) {
            
            tags.forEach((tag) => {
                if (!tagHeaders.includes(tag.name[0]))
                tagHeaders.push(tag.name[0].toUpperCase());
            });
            tagItems = tagHeaders.sort().map((tagLetter, idx) => {
                let innerTagList = tags.map((tag) => {
                    if (tag.name[0].toUpperCase() === tagLetter.toUpperCase()) {
                        return( 
                            <div key={tag.id} className="drop-relative-reference">
                                <div 
                                    className="tag-list-name" 
                                    onMouseEnter={ () => this.toggleItem('itemHovered',tag.id) }
                                    onMouseLeave={() => this.toggleItem('itemHovered')}
                                    tabIndex='1'
                                    onFocus={ () => this.toggleItem('itemClicked',tag.id) }
                                    onBlur={() => this.toggleItem('itemClicked')}
                                >{tag.name}
                                    &nbsp;
                                    &nbsp;
                                    <i 
                                        id={this.state.itemHovered === tag.id ? null : "tag-drop-hidden"  } 
                                        className="fas fa-angle-down">
                                    </i>
                                    <ul id={this.state.itemClicked === tag.id ? null : "tag-menu-hidden"}
                                        className="tag-menu"
                                    >
                                        <li onClick={() => this.props.deleteTag(tag)}>Delete tag...</li>
                                        <li onClick={() => this.toggleModal('editForm', tag)}>Rename tag...</li>
                                    </ul>
                                </div>
                            </div>
                        )
                    } else {
                        return null
                    }
                });

                return (
                    <li key={idx} className="tag-list-item">
                        <h1>{tagLetter}</h1>
                        <div>
                            {innerTagList}
                        </div>
                    </li>
                );
            }); 
        }
        

        if (this.state.modalOpen) {
            modalForm = <TagsIndexFormContainer
                formType={this.state.formType}
                closeModal={this.closeModal}
                toggleModal={this.toggleModal}
                currentTag={this.state.currentTag}
            />
        }

        return (
            <div className="tag-index">
                { modalForm }
                <h1>Tags</h1>
                <div className="tag-index-subheader">
                    <h2 onClick={this.toggleModal}>New Tag</h2>
                </div>
                <ul className="tag-list">
                    {tagItems}
                </ul>
            </div>
        )
    }
}

export default TagsIndex;