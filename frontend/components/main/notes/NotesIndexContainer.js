import { connect } from 'react-redux';
import NotesIndex from './NotesIndex';
import { retrieveNotes, currentNote} from '../../../actions/note_actions';
import { retrieveTags, retrieveTaggings } from '../../../actions/tag_actions';

const msp = (state, ownProps) => {

    let notes;
    if (ownProps.match.params.notebookId) {
        notes = Object.values(state.entities.notes).map(note => {
            return note.notebook_id == ownProps.match.params.notebookId ? note : null;
        });
    } else if (ownProps.match.params.tagMatch) {
        let tagMatch = ownProps.match.params.tagMatch
        let tagId = null;
        let noteIds = {};
        Object.values(state.entities.tags).forEach(tag => {
            if (tag.name === tagMatch){ 
                tagId = tag.id;
            }
        });
        Object.values(state.entities.taggings).forEach(tagging => {
            if (tagging.tag_id === tagId) noteIds[tagging.note_id] = true;
        });
        notes = Object.values(state.entities.notes).map(note => {
            return noteIds[note.id] === true ? note : null;
        });
        // notes = all notes that have a tagging where the tag.name === tagMatch
        // IF TAGMATCH === tag.name
    } else {
        notes = Object.values(state.entities.notes)
    }

    // debugger
    return {
        notes: notes,
        user: state.entities.user[state.session.currentUserId],
        currentNotebook: state.entities.notebooks[ownProps.match.params.notebookId]
    };
};

const mdp = (dispatch) => {
    
    return {
        retrieveNotes: (user) => dispatch(retrieveNotes(user)),
        currentNote: (note) => dispatch(currentNote(note)),
        retrieveTags: () => dispatch(retrieveTags()),
        retrieveTaggings: () => dispatch(retrieveTaggings())
    };
};


export default connect(msp, mdp)(NotesIndex)