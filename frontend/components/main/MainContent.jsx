import React from 'react';
import { Link } from 'react-router-dom';
import NotebookIndexContainer from './notebooks/NotebookIndexContainer';
import NotesIndexContainer from './notes/NotesIndexContainer';
import NoteEditorContainer from './notes/NoteEditorContainer';
import { ProtectRoute } from '../../util/route_util';



class MainContent extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = { active: false, url: this.props.location.pathname  }

        this.toggleClass = this.toggleClass.bind(this);
        this.handleNewNote = this.handleNewNote.bind(this);
    }

    toggleClass (e) {
        this.setState({ active: !this.state.active });
    }


    componentDidUpdate (prevState) {
        if (prevState.location.pathname != this.props.location.pathname){
            this.setState({ 
                url: this.props.location.pathname
            })
        }
    }

    handleNewNote() {
        
        this.props.clearCurrentNote();
    }

    render () {


        return (
            <div className="main-content-container">
                <section className="main-left-menu">
                    <div tabIndex='2' onFocus={(e)=>this.toggleClass(e)} onBlur={(e)=>this.toggleClass(e)} className="user-dropdown">{this.props.user.email}
                    <ul className={this.state.active ? "dropdown-shown" : "dropdown-hidden"}>
                        <li>
                            <h3>Account</h3>
                            <h2>{this.props.user.email}</h2>
                        </li>
                        <li><p>Settings</p></li>
                        <li><p>Help</p></li>
                        <li><p>What's new in Endeavornote</p></li>
                        <li onClick={this.props.logout}><p>Sign Out {this.props.user.email}</p></li>
                    </ul>
                    </div>
                    <div className="new-note-button"><Link to={this.state.url === "/main/notebooks_index" ? '/main/notes/' : this.state.url} onClick={this.handleNewNote}><i className="fas fa-plus-circle fa-2x"></i>New Note</Link></div>
                    <ul className="main-left-links">
                        <li><Link onClick={this.props.clearCurrentNote} to="/main/notes">All Notes</Link></li>
                        <li><Link onClick={this.props.clearCurrentNote} to="/main/notebooks_index">Notebooks</Link></li>
                        <li>Tags</li>
                        <li>Trash</li>
                    </ul>
                </section>

                    {/* <NotebookIndex user={this.props.user} retreiveNotebooks={this.props.retreiveNotebooks} notebooks={this.props.notebooks}/> */}
               
                <ProtectRoute path='/main/notebooks_index' component={NotebookIndexContainer} />
                <ProtectRoute path='/main/notebooks/:notebookId' component={NotesIndexContainer} />
                <ProtectRoute path='/main/notebooks/:notebookId' component={NoteEditorContainer} />
                <ProtectRoute path='/main/notes' component={NotesIndexContainer} />
                <ProtectRoute path='/main/notes' component={NoteEditorContainer} />



            
            </div>
        )
    }
}

export default MainContent;