export const fetchNotebooks = (user) => {
    return $.ajax({
        url: 'api/notebooks',
        data: {
            user_id: user.id
        } 
    });
};

export const fetchNotebook = (notebook) => {
    return $.ajax({
        url: `api/notebooks/${notebook.id}`
    });
}

export const createNotebook = (notebook) => {
    return $.ajax({
        method: 'POST',
        url: 'api/notebooks',
        data: {
            notebook,
        }
    });
};

export const deleteNotebook = (notebook) => {
    return $.ajax({
        method: 'DELETE',
        url: `api/notebooks/${notebook.id}`,
        data: {
            user_id: notebook.user_id
        }
    })
}