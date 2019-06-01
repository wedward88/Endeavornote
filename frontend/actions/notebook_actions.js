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

export const removeNotebook = (notebook) => {
    return {
        type: DELETE_NOTEBOOK,
        notebook
    }
}

export const retreiveNotebooks = (user) => dispatch => {
    return NotebookApiUtil.fetchNotebooks(user).then((notebooks) => {
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

export const deleteNotebook = (notebook) => dispatch => {
    return NotebookApiUtil.deleteNotebook(notebook).then((notebook)=> {
        return dispatch(removeNotebook(notebook));
    });
};