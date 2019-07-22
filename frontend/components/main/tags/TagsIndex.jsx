import React from 'react';


class TagsIndex extends React.Component {
    constructor (props) {
        super(props);
    }

    componentDidMount () {
        this.props.retrieveTags();
    }

    render () {
        return (
            <h1>Hello Tags!</h1>
        )
    }
}

export default TagsIndex;