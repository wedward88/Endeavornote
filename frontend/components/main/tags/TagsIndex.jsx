import React from 'react';


class TagsIndex extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            itemHovered: null
        }


    }

    componentDidMount () {
        this.props.retrieveTags();
    }

    toggleItemHover (id) {  
        if (id){
            this.setState({
                itemHovered: id
            })
        } else {
            this.setState({
                itemHovered: null
            })
        }
    }

    render () {
        
        let { tags } = this.props;
        let tagItems;
        let tagHeaders = [];

        if (tags) {
            
            tags.forEach((tag) => {
                if (!tagHeaders.includes(tag.name[0]))
                tagHeaders.push(tag.name[0].toUpperCase());
            });
            tagItems = tagHeaders.sort().map((tagLetter, idx) => {
                let innerTagList = tags.map((tag) => {
                    if (tag.name[0].toUpperCase() === tagLetter.toUpperCase()) {
                        return <li 
                                className="tag-list-name" 
                                key={tag.id}
                                onMouseEnter={ () => this.toggleItemHover(tag.id) }
                                onMouseLeave={ () => this.toggleItemHover() }
                            >{tag.name}
                            &nbsp;
                            &nbsp;
                            <i 
                                id={this.state.itemHovered === tag.id ? null : "tag-drop-hidden"  } 
                                className="fas fa-angle-down">
                            </i>
                            </li> 
                    } else {
                        return null
                    }
                });

                return (
                    <li key={idx} className="tag-list-item">
                        <h1>{tagLetter}</h1>
                        <ul>
                            {innerTagList}
                        </ul>
                    </li>
                );
            }); 
        }
        return (
            <div className="tag-index">
                <h1>Tags</h1>
                <ul className="tag-list">
                    {tagItems}
                </ul>
            </div>
        )
    }
}

export default TagsIndex;