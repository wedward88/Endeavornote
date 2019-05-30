import React from 'react';
import Header from './Header';
import { Link } from 'react-router-dom';

export default () => {
    return (
        <div id="splash-page">
            <Header />
            <div id="splash-body">
                <div id="splash-body-left">
                    <h1>Feel organized without the effort</h1>
                    <h2>Endeavornote helps you capture and prioritize ideas, projects, and to-do lists, so nothing falls through the cracks.</h2>
                    <Link to='#' value="SIGN UP FOR FREE"></Link>
                </div>
                <div id="splash-body-right">
                    <img src={window.splashHeroDesktop} />
                </div>
            </div>
        </div>
    )
}