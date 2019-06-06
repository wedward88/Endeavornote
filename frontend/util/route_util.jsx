import React from 'react';
import { Route, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const Auth = ({ component: Component, path, loggedIn, exact }) => {
    // debugger
   return <Route path={path} exact={exact} render={(props) => (
        !loggedIn ? (
            <Component {...props} />
        ) : (
                <Redirect to="/main/notebooks_index" />
            )
    )} />
};

const Protect = ({ component: Component, path, loggedIn, exact }) => {
    
    return <Route path={path} exact={exact} render={(props) => (
        loggedIn ? (
            <Component {...props} />
        ) : (
                <Redirect to="/" />
            )
    )} />
};



const msp = (state) => {
    return {
        loggedIn: Boolean(state.session.currentUserId)
    };
};

export const AuthRoute = withRouter(connect(msp, null)(Auth));
export const ProtectRoute = withRouter(connect(msp, null)(Protect));