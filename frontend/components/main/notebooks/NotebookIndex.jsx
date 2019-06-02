import React from 'react';
import NotebookFormContainer from './NotebookFormContainer';

class NotebookIndex extends React.Component {

    constructor(props) {
        super(props);
        this.state = { mounted: false, modalOpen: false }
        this.newNotebook = this.newNotebook.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }
    
    componentDidMount() {
        this.props.retreiveNotebooks(this.props.user);
        this.setState({ mounted: true })
    }

    newNotebook() {
        this.setState({ mounted: this.state.mounted, modalOpen: true });
    }

    closeModal() {
        this.setState({ mounted: this.state.mounted, modalOpen: false });
    }

    render () {
        
        let tableData;
        let modalForm;
        if (this.state.mounted) {
            tableData = this.props.notebooks.map((notebook)=> {
                return <li key={notebook.id}>{notebook.name}</li>
            });
        }

        if (this.state.modalOpen) {
            modalForm = <NotebookFormContainer closeModal={this.closeModal} />
        }

        return (
            <section className="notebooks-index">
                {modalForm}
                <h1>Notebooks</h1>
                <div className="index-sub-header">
                    <h2>My notebook list</h2>
                    <h2 onClick={this.newNotebook}>New Notebook</h2>
                </div>
                <ul>
                    {/* {allNotebooks} */}
                </ul>
                <table>
                    <tr>
                        <th>Title</th><th>Created By</th><th>Updated</th><th>Actions</th>
                    </tr>
                    {tableData}
                </table>
            </section>
        )
    }
}

export default NotebookIndex;