import React from 'react';
import ReactQuill from 'react-quill';
import Editor from 'react-quill'


class NoteEditor extends React.Component {
    constructor(props){
        
        super(props);
        this.state = { 
            title: '',
            body: '',
            notebook_id: null,
            newNote: true
        };

    

        this.handleChange = this.handleChange.bind(this);
        this.handleQuillChange = this.handleQuillChange.bind(this);
        this.handleNoteSave = this.handleNoteSave.bind(this);
        this.showToolbar = this.showToolbar.bind(this);
        this.hideToolbar = this.hideToolbar.bind(this);
        this.autoSave = this.autoSave.bind(this);
    }


    componentDidMount() {
        
        if (this.props.currentNote) {
            
            this.setState({
                ['title']: this.props.currentNote.title,
                ['body']: this.props.currentNote.body,
                ['notebook_id']: this.props.currentNote.notebook_id,
                ['newNote']: false

            })
        }
        
        if (this.state.newNote) {
            this.setState({
                ['title']: '',
                ['body']: '',
            })

        }
    }

    

    componentDidUpdate (prevProps) {

        if (prevProps.currentNote && !this.props.currentNote){
            
            this.setState({
                ['title']: '',
                ['body']: '',
                ['newNote']: true
            })
        }
        
        if (prevProps.currentNote != this.props.currentNote && this.props.currentNote != null) {
            
            this.setState({
                ['title']: this.props.currentNote.title,
                ['body']: this.props.currentNote.body,
                ['notebook_id']: this.props.currentNote.notebook_id,
                ['newNote']: false

            })
        }
       
    }

    handleChange(field) {
        return (e) => {
            this.setState({ [field]: e.target.value })
        }
    }

    handleQuillChange(value) {
        this.setState({ ['body']: value });
    }

    handleNoteSave () {
        const notebook_id = this.props.match.params.notebookId || this.props.defaultNotebookId;

        if (this.state.newNote) {
            this.props.createNote({ title: this.state.title, body: this.state.body, notebook_id }).then(() => {
                this.setState({
                    newNote: false
                });
            });
            
        } else  {
            
            this.props.editNote({ title: this.state.title, body: this.state.body, id: this.props.currentNote.id, notebook_id })
        }

    }

    showToolbar () {
        document.getElementsByClassName('ql-toolbar ql-snow')[0].classList.add('ql-toolbar-show')   
    }

    hideToolbar () {
        document.getElementsByClassName('ql-toolbar ql-snow')[0].classList.remove('ql-toolbar-show')   
    }

    autoSave () {
        // setTimeout(() => {
            this.handleNoteSave()
            // });
        // }, 3*1000);
    }
    
    // handleMouseEnter () {
    //     this.showToolbar();
    //     // clearInterval(this.autoSaveInterval);
    //     //remove interval
    //     debugger
    // }

    // handleMouseLeave () {
    //     this.hideToolbar();
    //     this.autoSave();
    // }

    render () {
        let title;
        if (this.props.notebook) {
            title = this.props.notebook.title
        }
        
        return (
            
            <div className="quill-container" onMouseLeave={this.hideToolbar} onMouseEnter={this.showToolbar} >
                <h1>{title}</h1>
                <input
                    id="note-title-field"
                    onChange={this.handleChange('title')}
                    type="text"
                    value={this.state.title}
                    placeholder="Title"
                    onFocus={this.hideToolbar}
                    onBlur={this.showToolbar}
                />
                
                <ReactQuill 
                    value={this.state.body} 
                    onChange={this.handleQuillChange} 
                    modules={Editor.modules}
                    formats={Editor.formats}
                    className={'react-quill-element'}
                    onBlur={this.autoSave}
                    placeholder="Write something...anything!"
                    
                 />
            </div>
        )
    }

}

export default NoteEditor;