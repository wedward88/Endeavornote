import * as NotebookApiUtil from '../util/notebook_api_util';

export const RECEIVE_NOTEBOOKS = 'RECEIVE_NOTEBOOKS';
export const RECEIVE_ONE_NOTEBOOK = 'RECEIVE_ONE_NOTEBOOK';
export const DELETE_NOTEBOOK = 'DELETE_NOTEBOOK';


export const receiveNotebooks = (notebooks) => {
    return {
        type: RECEIVE_NOTEBOOKS,
        notebooks
    };
};

export const receiveNotebook = (notebook) => {
    return {
        type: RECEIVE_ONE_NOTEBOOK,
        notebook
    };
};

export const deleteNotebook = (id) => {
    return {
        type: DELETE_NOTEBOOK,
        id
    }
}

export const retreiveNotebooks = () => dispatch => {
    return NotebookApiUtil.fetchNotebooks().then((notebooks) => {
        return dispatch(receiveNotebooks(notebooks));
    });
};

export const retreiveNotebook = (notebook) => dispatch => {
    return NotebookApiUtil.fetchNotebook(notebook).then((notebook) => {
        return dispatch(receiveNotebook(notebook));
    });
};

export const createNotebook = (notebook) => dispatch => {
    return NotebookApiUtil.createNotebook(notebook).then((notebook) => {
        return dispatch(receiveNotebook(notebook));
    });
};