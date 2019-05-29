import React from 'react';
import { Link } from 'react-router-dom';


export default (props) => {
    // debugger
    return (
        <div className="landing-nav-bar">
            <h1>Endeavornote</h1>
            <Link id="sign-up-button" to='/signup'>Sign up</Link>
            <span>or</span>
            <Link id="log-in-button" to='/login'>Log in</Link>
        </div>
    );
}