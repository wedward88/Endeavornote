import React from 'react';
import Header from './Header';
import { Link } from 'react-router-dom';

export default () => {
    return (
        <div id="splash-page">
            <Header />
            <div id="splash-body">
                <div className="splash-width">
                    <div id="splash-body-left">
                        <h1>Feel organized without the effort</h1>
                        <h2>Endeavornote helps you capture and prioritize ideas, projects, and to-do lists, so nothing falls through the cracks.</h2>
                        <Link to='/signup'>sign up for free</Link>
                    </div>
                    <div id="splash-body-right">
                        <img src={window.splashHeroDesktop} />
                    </div>
                </div>
            </div>
            <section className="splash-footer splash-width">
                <div id="splash-footer-icons" >
                    <a href='https://www.facebook.com/williamdunn195' target='_blank'><img src={window.facebookIcon}/></a>
                    <a href='https://www.instagram.com/wedward88/' target='_blank'><img src={window.instagramIcon} /></a>
                    <a href='https://www.linkedin.com/in/william-edward-dunn/' target='_blank'><img src={window.linkedinIcon} /></a>
                </div>
            </section>
        </div>
    )
}