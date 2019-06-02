import React from 'react';
import { Link } from 'react-router-dom';
import NotebookIndexContainer from './notebooks/NotebookIndexContainer';
import { ProtectRoute } from '../../util/route_util';


class MainContent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { active: false }
        this.toggleClass = this.toggleClass.bind(this);
    }

    toggleClass () {
        this.setState({ active: !this.state.active })
    }

    render () {


        return (
            <div className="main-content-container">
                <section className="main-left-menu">
                    <div onClick={this.toggleClass} className="user-dropdown">{this.props.user.email}</div>
                    <ul className={this.state.active ? "dropdown-shown" : "dropdown-hidden"}>
                        <li onClick={this.props.logout}>Sign out {this.props.user.email}</li>
                    </ul>
                    <div className="new-note-button"><i className="fas fa-plus-circle fa-2x"></i>New Note</div>
                    <ul className="main-left-links">
                        <li>All Notes</li>
                        <li>Notebooks</li>
                        <li>Tags</li>
                        <li>Trash</li>
                    </ul>
                </section>

                    {/* <NotebookIndex user={this.props.user} retreiveNotebooks={this.props.retreiveNotebooks} notebooks={this.props.notebooks}/> */}
               
                <ProtectRoute path='/main/notebooks' component={NotebookIndexContainer} />


                <section className="main-third-panel">

                </section>
            </div>
        )
    }
}

export default MainContent;