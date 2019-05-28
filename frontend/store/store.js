import { createStore, applyMiddleware } from 'redux';
// import rootReducer from '../reducers/UPDATE'
import thunk from 'redux-thunk';
import logger from 'redux-logger';

const configureStore = (preloadedState = {}) => {
    return createStore(rootReducer, preloadedState, applyMiddleware(thunk, logger));
};

export default configureStore;