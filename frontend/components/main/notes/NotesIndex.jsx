import React from 'react';
import formatDate from '../../../util/date_util';
import { Link } from 'react-router-dom';

class NotesIndex extends React.Component {
    constructor(props){
        super(props);
        this.state = { mounted: false }
    }

    componentDidMount () {
        this.props.retrieveNotes(this.props.user).then(()=> {
            this.setState({ mounted: true });
        });   
    }


    render () {
        // debugger
        let allNotes;
        let linkToPath;
        let numNotes = 0;
        // debugger

        if (this.state.mounted) {
            allNotes = this.props.notes.map((note)=>{
                // debugger
                if (note) {
                    numNotes += 1;

                    if (this.props.match.params.notebookId && this.props.match.params.noteId) {
                        // debugger
                        linkToPath = `/main/notes/all/${note.notebook_id}/${note.id}`
                    } else if (this.props.match.params.notebookId) {
                        linkToPath = `${this.props.match.url}` + `/${note.id}`
                    } else {
                        linkToPath = `${this.props.match.url}` + `/${note.notebook_id}` + `/${note.id}`
                    }



                return( 
                    <li key={note.id}>
                        <Link to={linkToPath}>
                            <h2>{note.title}</h2>
                            <p>{note.body.replace(/(<([^>]+)>)/ig, "")} ...</p>
                            <div>{formatDate(note.updated_at)}</div>
                        </Link>
                    </li>
                )
                }
            })
            
        }
        

        
        return (
            <div className="notes-index-container">
                <div className="notes-index-header">
                    <h1>All Notes</h1>
                    <h3>{numNotes} notes</h3>
                </div>
                <div className="notes-index-list-container">
                    <ul>
                        {allNotes}
                    </ul>
                </div>
            </div>
        )
    }
}

export default NotesIndex;