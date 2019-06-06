import React from 'react';
import ReactQuill from 'react-quill';


class NoteEditor extends React.Component {
    constructor(props){
        debugger
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
       

        if (this.state.newNote) {
            debugger  /////////////////// IN HERE, THIS.PROPS.DEFAULT_NOTEBOOK IS UNDEFINED FOR SOME REASON ///////////////////////////
            this.props.createNote({ title: this.state.title, body: this.state.body, notebook_id: this.props.default_notebook })
        } else  {
            debugger
            this.props.editNote({ title: this.state.title, body: this.state.body, id: this.props.currentNote.id, notebook_id: this.props.match.params.notebookId })
        }

    }



    render () {
        let title;
        if (this.props.notebook) {
            title = this.props.notebook.title
        }
        
        return (
            
            <div className="quill-container">
                <h1>{title}</h1>
                <button onClick={this.handleNoteSave}>Save</button>
                <input
                    id="note-title-field"
                    onChange={this.handleChange('title')}
                    type="text"
                    value={this.state.title}
                    placeholder="Title"
                />
                
                <ReactQuill value={this.state.body} onChange={this.handleQuillChange} />

            </div>
        )
    }

}

export default NoteEditor;