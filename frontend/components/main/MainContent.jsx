import React from 'react';
import { Link } from 'react-router-dom';
import NotebookIndexContainer from './notebooks/NotebookIndexContainer';
import NotesIndexContainer from './notes/NotesIndexContainer';
import NoteEditorContainer from './notes/NoteEditorContainer';
import TagsIndexContainer from './tags/TagsIndexContainer';
import { ProtectRoute } from '../../util/route_util';



class MainContent extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = { url: this.props.location.pathname  }

        this.toggleClass = this.toggleClass.bind(this);
    }

    toggleClass (e) {
        let target = e.currentTarget.className
        if (this.state[target]) {  
            this.setState({ [target]: !this.state[target] });
        } else {
            this.setState({ [target]: true })
        }

        
        // this.setState({ active: !this.state.active });
    }

    

    componentDidUpdate (prevState) {

        if (prevState.location.pathname != this.props.location.pathname){
            this.setState({ 
                url: this.props.location.pathname
            })
        }
    }

    

    render () {
        // debugger //YOURE IN MAIN CONTENT
        return (
            <div className="main-content-container">
                <section className="main-left-menu">
                    <div tabIndex='2' onFocus={(e)=>this.toggleClass(e)} onBlur={(e)=>this.toggleClass(e)} className="user-dropdown">{this.props.user.email}
                    &nbsp;
                    <i class="fas fa-angle-down"></i>
                    <ul className={this.state['user-dropdown'] ? "dropdown-shown" : "dropdown-hidden"}>
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
                    <div className="new-note-button" onMouseEnter={(e) => this.toggleClass(e)} onMouseLeave={(e) => this.toggleClass(e)}><Link to={this.props.match.params.notebookId ? `/main/notebooks/${this.props.match.params.notebookId}` : `/main/notes`}><i className={this.state['new-note-button'] ? "fas fa-plus new-note new-note-hover" : "fas fa-plus new-note"}></i><span>New Note</span></Link></div>
                    <ul className="main-left-links">
                        <li><Link to="/main/notes/all">All Notes</Link></li>
                        <li><Link to="/main/notebooks_index">Notebooks</Link></li>
                        <li><Link to="/main/tags">Tags</Link></li>
                        <li>Trash</li>
                    </ul>
                </section>

                    {/* <NotebookIndex user={this.props.user} retreiveNotebooks={this.props.retreiveNotebooks} notebooks={this.props.notebooks}/> */}
               
                <ProtectRoute path='/main/notebooks_index/' component={NotebookIndexContainer} />
                <ProtectRoute path='/main/notebooks/:notebookId' component={NotesIndexContainer} />
                <ProtectRoute exact path='/main/notebooks/:notebookId' component={NoteEditorContainer} />

                <ProtectRoute exact path='/main/notebooks/:notebookId/:noteId' component={NoteEditorContainer} />

                <ProtectRoute exact path='/main/tags' component={TagsIndexContainer} />

                <ProtectRoute exact path='/main/notes/all' component={NotesIndexContainer} />
                <ProtectRoute exact path='/main/notes/all' component={NoteEditorContainer} />


                <ProtectRoute exact path='/main/notes/all/:notebookId/:noteId' component={NotesIndexContainer} />
                <ProtectRoute exact path='/main/notes/all/:notebookId/:noteId' component={NoteEditorContainer} />
                <ProtectRoute exact path='/main/notes' component={NoteEditorContainer} />



            
            </div>
        )
    }
}

export default MainContent;