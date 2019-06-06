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
        
        let allNotes;
        let numNotes = 0;
        if (this.state.mounted) {
            allNotes = this.props.notes.map((note)=>{
                if (note) {
                    numNotes += 1;
                return( 
                    <li key={note.id} onClick={()=> this.props.currentNote(note)}>
                        <h2>{note.title}</h2>
                        <p>{note.body} ...</p>
                        <div>{formatDate(note.updated_at)}</div>
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