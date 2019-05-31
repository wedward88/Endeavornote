import React from 'react';
import { Link } from 'react-router-dom';


export default (props) => {
    // debugger
    return (
        <div className="landing-nav-bar splash-width">
            <div id="nav-title">
                <img src={window.endeavornoteIcon} />
                <h1>Endeavornote</h1>
            </div>

            <section id="nav-links" >
                <Link id="sign-up-button" to='/signup'>Sign up</Link>
                <span>or</span>
                <Link id="log-in-button" to='/login'>Log in</Link>
            </section>
        </div>
    );
}