import React from 'react';
import NotebookFormContainer from './NotebookFormContainer';

class NotebookIndex extends React.Component {

    constructor(props) {
        super(props);
        this.state = { 
            mounted: false, 
            modalOpen: false, 
            active: 0, 
            formType: "newNotebook", 
            currentNotebook: null 
        }

        this.toggleModal = this.toggleModal.bind(this);
        this.removeClass = this.removeClass.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }
    
    componentDidMount() {
        this.props.retrieveNotebooks(this.props.user).then(
            this.props.retrieveNotes(this.props.user).then(
                this.setState({ mounted: true })
            ));   
    }

    toggleModal(formTypeText, notebook) {
    
        if (formTypeText === 'editForm') {
            this.setState({ 
                ['formType']: formTypeText, 
                ['modalOpen']: !this.state.modalOpen, 
                ['currentNotebook']: notebook,
                ['active']: 0
            });
        } else {
            this.setState({ 
                ['formType']: 'newNotebook', 
                ['modalOpen']: !this.state.modalOpen, 
                ['currentNotebook']: null,
                ['active']: 0
            });
        }
    }

    closeModal() {
        this.setState({ ['modalOpen']: false })
    }

    removeClass() {
        this.setState({ ['active']: 0 })
    }

    addClass(id) {
        this.setState({ ['active']: id})
    }

    render () {
        
        let tableData;
        let modalForm;
        let notesArr;

        if (this.state.mounted) {
            notesArr = this.props.notes;
            
            tableData = this.props.notebooks.map((notebook)=> {

                // let notebookNotes = notesArr.map((note)=>{
                //     if (note.notebook_id === notebook.id){
                //         return (
                //             <tr key={note} id={`notes-row-${note.id}`}>
                //                 <td>{note.title}</td>
                //                 <td>{this.props.user.email}</td>
                //                 <td>{note.updated_at}</td>
                //             </tr>
                //         ) 
                //     }
                // })

                return (
                        // <>
                            <tr key={notebook.id}>
                                <td>{notebook.name}</td>
                                <td>{this.props.user.email}</td>
                                <td>{notebook.updated_at}</td>
                                <td className="notebook-table-action-item">
                                <div tabIndex="1" onBlur={()=> this.removeClass(notebook.id)} onFocus={()=>this.addClass(notebook.id)} className="notebook-table-actions" >...
                                    <ul className={this.state.active === notebook.id ? "notebook-actions-show" : "notebook-actions-hidden"}>
                                        <li onClick={()=>this.toggleModal('editForm', notebook)}>Rename Notebook</li>
                                        <li onClick={()=> this.props.deleteNotebook(notebook)}>Delete Notebook</li>
                                    </ul>
                                </div>
                                </td>
                            </tr>
                            // { notebookNotes }
                        // </>
                        
                )
            });
        }

        if (this.state.modalOpen) {
            modalForm = <NotebookFormContainer 
                            formType={this.state.formType} 
                            closeModal={this.closeModal} 
                            toggleModal={this.toggleModal} 
                            currentNotebook={this.state.currentNotebook}
                        />
        }

        return (
            <section className="notebooks-index" >
                {modalForm}
                <h1>Notebooks</h1>

                <div className="index-sub-header">
                    <h2>My notebook list</h2>
                    <h2 onClick={this.toggleModal}>New Notebook</h2>
                </div>
                
                <table>
                    <tbody>
                        <tr>
                            <th>Title</th>
                            <th>Created By</th>
                            <th>Updated</th>
                            <th>Actions</th>
                        </tr>
                        {tableData}
                    </tbody>
                    
                </table>
            </section>
        )
    }
}

export default NotebookIndex;