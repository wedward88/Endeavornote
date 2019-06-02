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
        if (this.state.mounted) {
            allNotes = this.props.notes.map((note)=>{ 
                return <li key={note.id}>{note.title}</li>
            })
        }
        
        return (
            <ul>
                {allNotes}
            </ul>
        )
    }
}

export default NotesIndex;