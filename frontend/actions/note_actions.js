import * as NoteApiUtil from '../util/note_api_util';

export const RECEIVE_NOTES = 'RECEIVE_NOTES';
export const RECEIVE_ONE_NOTE = 'RECEIVE_ONE_NOTE';
export const DELETE_NOTE = 'DELETE_NOTE';

export const receiveNotes = (notes) => {
    return {
        type: RECEIVE_NOTES,
        notes
    };
};

export const receiveNote = (note) => {
    return {
        type: RECEIVE_NOTE,
        note
    };
};

export const removeNote = (note) => {
    return {
        type: DELETE_NOTE,
        note
    };
};

export const retrieveNotes = (user) => dispatch => {
    return NoteApiUtil.fetchNotes(user).then((notes)=> {
        return dispatch(receiveNotes(notes));
    });
};

export const editNote = (note) => dispatch => {
    return NoteApiUtil.editNote(note).then((note)=> {
        return dispatch(receiveNote(note));
    });
};

export const createNote = (note) => dispatch => {
    return NoteApiUtil.createNote(note).then((note)=> {
        return dispatch(receiveNote(note));
    });
};

export const deleteNote = (note) => dispatch => {
    return NoteApiUtil.deleteNote(note).then((note)=> {
        return dispatch(removeNote(note));
    });
};
