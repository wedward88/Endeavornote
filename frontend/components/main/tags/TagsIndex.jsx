import React from 'react';


class TagsIndex extends React.Component {
    constructor (props) {
        super(props);
    }

    componentDidMount () {
        this.props.retrieveTags();
    }

    render () {
        let { tags } = this.props;
        let tagItems;
        let tagHeaders = [];

        if (tags) {
            
            tags.forEach((tag) => {
                if (!tagHeaders.includes(tag.name[0]))
                tagHeaders.push(tag.name[0]);
            });
            tagItems = tagHeaders.sort().map((tagLetter, idx) => {
                let innerTagList = tags.map((tag) => tag.name[0] === tagLetter ? <li key={tag.id}>{tag.name}</li> : null)
                return (
                    <li key={idx}><h1>{tagLetter}</h1>
                        <ul>
                            {innerTagList}
                        </ul>
                    </li>
                );
            }); 
        }
        return (
            <ul>
                {tagItems}
            </ul>
        )
    }
}

export default TagsIndex;