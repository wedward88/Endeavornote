import * as SessionApiUtil from '../util/session_api_util';
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_ERRORS';
export const RECEIVE_USER_EMAIL = 'RECEIVE_USER_EMAIL';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

export const receiveCurrentUser = (currentUser) => {
    return {
        type: RECEIVE_CURRENT_USER,
        currentUser,
    };
};

export const receiveUserEmail= (userEmail) => {
    return {
        type: RECEIVE_USER_EMAIL,
        email: userEmail
    }
}

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

export const clearErrors = () => {
    return {
        type: CLEAR_ERRORS
    }
}

export const checkEmail = (user) => dispatch => {
    return SessionApiUtil.checkEmail(user).then((user) => {
        return dispatch(receiveUserEmail(user));
    }, (res)=> {
        return dispatch(receiveSessionErrors(res.responseJSON));
    });
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
    return SessionApiUtil.logout().then(()=> {
        return dispatch(logoutCurrentUser());
    }, (res)=> {
        return dispatch(receiveSessionErrors(res.responseJSON));
    });
};