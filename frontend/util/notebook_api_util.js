export const fetchNotebooks = () => {
    return $.ajax({
        url: 'api/notebooks',
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
        url: `api/notebooks/${notebook.id}`
    })
}