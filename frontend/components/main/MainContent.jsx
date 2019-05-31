import React from 'react';
import { Link } from 'react-router-dom';

export default (props) => {
    // debugger
    return (
        <>
            <div onClick={props.logout} id="main-content-container">
                Log Out
            </div>
        </>
    )
}