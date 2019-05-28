import * as SessionApiUtil from '../util/session_api_util';
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_ERRORS';

export const receiveCurrentUser = (currentUser) => {
    return {
        type: RECEIVE_CURRENT_USER,
        currentUser,
    };
};

export const logoutCurrentUser = () => {
    return {
        type: LOGOUT_CURRENT_USER,
    };
};

export const receiveSessionErrors = (errors) => {
    return {
        type: RECEIVE_SESSION_ERRORS,
        errors
    };
};

export const signup = (user) => dispatch => {
    return SessionApiUtil.signup(user).then((user)=> {
        return dispatch(receiveCurrentUser(user));
    }, (res)=> {
        return dispatch(receiveSessionErrors(res.responseJSON));
    });
};
export const login = (user) => dispatch => {
    return SessionApiUtil.login(user).then((user)=> {
        return dispatch(receiveCurrentUser(user));
    }, (res)=> {
        return dispatch(receiveSessionErrors(res.responseJSON));
    });
};
export const logout = () => dispatch => {
    return SessionApiUtil.logout().then((user)=> {
        return dispatch(logoutCurrentUser());
    }, (res)=> {
        return dispatch(receiveSessionErrors(res.responseJSON));
    });
};