import React from 'react';
import ReactQuill from 'react-quill';
import { Redirect } from 'react-router-dom';


class NoteEditor extends React.Component {
    constructor(props){
        
        super(props);
        this.state = { 
            title: '',
            body: '',
            notebook_id: null,
            newNote: true,
            redirect: null
        };

    

        this.handleChange = this.handleChange.bind(this);
        this.handleQuillChange = this.handleQuillChange.bind(this);
        this.handleNoteSave = this.handleNoteSave.bind(this);
        this.showToolbar = this.showToolbar.bind(this);
        this.hideToolbar = this.hideToolbar.bind(this);
        this.handleMouseOut = this.handleMouseOut.bind(this);
    }


    componentDidMount() {
        
        if (this.props.currentNote) {
            
            this.setState({
                title: this.props.currentNote.title,
                body: this.props.currentNote.body,
                notebook_id: this.props.currentNote.notebook_id,
                newNote: false

            })
        }

        
        if (this.state.newNote) {
            if (this.props.match.params.noteId === undefined) {
                this.setState({
                    title: '',
                    body: '',
                    newNote: true
                })
            }
        }
    }

    

    componentDidUpdate (prevProps) {
            
        if (this.state.redirect) {
            this.setState({
                redirect: null,
                newNote: false
            });
        }

        // if (prevProps.currentNote && !this.props.currentNote){
        //     debugger
        //     this.setState({
        //         title: '',
        //         body: '',
        //         newNote: true
        //     })
        // }
        
        if (prevProps.currentNote != this.props.currentNote && this.props.currentNote != null) {
            
            this.setState({
                title: this.props.currentNote.title,
                body: this.props.currentNote.body,
                notebook_id: this.props.currentNote.notebook_id,
                newNote: false

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
            if (this.state.title) {
                this.props.createNote({ title: this.state.title, body: this.state.body, notebook_id }).then((res) => {
                    this.setState({
                        redirect: res.note
                    }); 
                });
            }
            
        } else  {
            this.props.editNote({ title: this.state.title, body: this.state.body, id: this.props.currentNote.id, notebook_id })
        }

    }

    showToolbar () {
        document.getElementsByClassName('ql-toolbar ql-snow')[0].classList.add('ql-toolbar-show');   
    }

    hideToolbar () {
        document.getElementsByClassName('ql-toolbar ql-snow')[0].classList.remove('ql-toolbar-show');
    }

    handleMouseOut () {
        this.handleNoteSave();   
    }

    
    

    render () {
        
        if (this.state.redirect) {
             return <Redirect to={`/main/notebooks/${this.state.redirect.notebook_id}/${this.state.redirect.id}`} />
        }

        let title;
        if (this.props.notebook) {
            title = this.props.notebook.title
        }

        let modules = {
            toolbar: [
                [{ 'header': [1, 2, 3, false] }],
                ['bold', 'italic', 'underline', 'strike', 'blockquote'],
                [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
                ['link', 'image'],
                ['clean']
            ],
        };
        let formats = [
            'header',
            'bold', 'italic', 'underline', 'strike', 'blockquote',
            'list', 'bullet', 'indent',
            'link', 'image'
        ];
        
        return (
            
            <div className="quill-container" onMouseLeave={this.handleMouseOut} onMouseEnter={this.showToolbar} >
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
                    modules={modules}
                    formats={formats}
                    className={'react-quill-element'}
                    placeholder="Write something...anything!"
                    
                 />
            </div>
        )
    }

}

export default NoteEditor;