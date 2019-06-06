export const fetchNotes = (user) => {
    return $.ajax({
        url: 'api/notes',
        data: {
            user_id: user.id
        }
    });
};

export const editNote = (note) => {
    return $.ajax({
        method: 'PATCH',
        url: `api/notes/${note.id}`,
        data: {
            note,
        }
    });
};

export const createNote = (note) => {
    
    return $.ajax({
        method: 'POST',
        url: 'api/notes',
        data: {
            note,
        }
    });
};

export const deleteNote = (note) => {
    return $.ajax({
        method: 'DELETE',
        url: `api/notes/${note.id}`,
        data: {
            notebook_id: note.notebook_id
        }
    });
};