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
        this.toggleClass = this.toggleClass.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }
    
    componentDidMount() {
        this.props.retrieveNotebooks(this.props.user);
        this.setState({ mounted: true })
    }

    toggleModal(formTypeText, notebook) {
        if (formTypeText === 'editForm') {
            this.setState({ ['formType']: formTypeText, ['modalOpen']: !this.state.modalOpen, ['currentNotebook']: notebook });
        } else {
            this.setState({ ['formType']: 'newNotebook', ['modalOpen']: !this.state.modalOpen, ['currentNotebook']: null });
        }
    }

    closeModal() {
        this.setState({ ['modalOpen']: false })
    }

    toggleClass(id) {
        if (id === this.state.active) {
            this.setState({ ['active']: 0 })
        } else {
            this.setState({ ['active']: id })
        }
    }

    render () {
        
        let tableData;
        let modalForm;
        if (this.state.mounted) {
            tableData = this.props.notebooks.map((notebook)=> {
                return (
                    
                        <tr key={notebook.id}>
                            <td>{notebook.name}</td>
                            <td>{this.props.user.email}</td>
                            <td>{notebook.updated_at}</td>
                            <td className="notebook-table-action-item">
                                <p onClick={()=>this.toggleClass(notebook.id)} className="notebook-table-actions" >...</p>
                                <ul onBlur={()=>this.toggleClass(notebook.id)} className={this.state.active === notebook.id ? "notebook-actions-show" : "notebook-actions-hidden"}>
                                    <li onClick={()=>this.toggleModal('editForm', notebook)}>Rename Notebook</li>
                                    <li onClick={()=> this.props.deleteNotebook(notebook)}>Delete Notebook</li>
                                </ul>
                            </td>
                        </tr>
                        
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
            <section className="notebooks-index">
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