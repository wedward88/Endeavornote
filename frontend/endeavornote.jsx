import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

//for Testing
// import { signup, login, logout, checkEmail } from './actions/session_actions';
import { retreiveNotebooks, createNotebook, deleteNotebook } from './actions/notebook_actions';

//end Testing

document.addEventListener('DOMContentLoaded', ()=> {

    let store;
    if (window.currentUser) {
        const preloadedState = {
            entities: {
                user: { [window.currentUser.id]: window.currentUser }
            },
            session: { currentUserId: window.currentUser.id }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }

   
    ReactDOM.render(<Root store={store} />, document.getElementById('root'))

    //for Testing:
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    // window.login = login;
    // window.signup = signup;
    // window.logout = logout;
    // window.checkEmail = checkEmail;
    window.retreiveNotebooks = retreiveNotebooks;
    window.createNotebook = createNotebook;
    window.deleteNotebook = deleteNotebook;

    // end Testing
});