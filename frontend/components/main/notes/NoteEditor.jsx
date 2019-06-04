import React from 'react';
import Quill from 'quill';

class NoteEditor extends React.Component {
    constructor(props){
        super(props);
        this.quill = null
        
    }

    componentDidMount() {
        new Quill('#quill-container', {
            modules: {
                toolbar: [
                    [{ header: [1, 2, false] }],
                    ['bold', 'italic', 'underline'],
                    ['image', 'code-block']
                ]
            },
            placeholder: 'EDIT AWAY BITCH!',
            theme: 'snow'
        })
    }

    render () {
        <div id="quill-container">
        </div>
    }

}

export default NoteEditor;