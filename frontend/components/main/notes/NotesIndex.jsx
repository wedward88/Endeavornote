import React from 'react';

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
        let numNotes;  
        if (this.state.mounted) {
            allNotes = this.props.notes.map((note)=>{
                return( 
                    <li key={note.id}>
                        <h2>{note.title}</h2>
                        <p>{note.body.substring(0,50)} ...</p>
                        <div>{note.updated_at}</div>
                    </li>
                )
            })
            numNotes = allNotes.length;
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