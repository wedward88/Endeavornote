import React from 'react';
import { Link } from 'react-router-dom';
import NotebookIndex from './notebooks/NotebookIndex';

export default (props) => {
    
    return (
        <div className="main-content-container">
            <section className="main-left-menu">
                <div className="user-dropdown">{props.user.email}</div>
                <ul>
                    <li onClick={props.logout}>Sign out {props.user.email}</li>
                </ul>
                <div>New Note</div>
                <ul>
                    <li>All Notes</li>
                    <li>Notebooks</li>
                    <li>Tags</li>
                    <li>Trash</li>
                </ul>
            </section>

            <NotebookIndex user={props.user} retreiveNotebooks={props.retreiveNotebooks} notebooks={props.notebooks}/>

            <section className="main-third-panel">

            </section>
        </div>
    )
}