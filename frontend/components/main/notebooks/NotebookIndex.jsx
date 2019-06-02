import React from 'react';

class NotebookIndex extends React.Component {

    constructor(props) {
        super(props);
        this.state = { mounted: false, modalOpen: false }
    }
    
    componentDidMount () {
        this.props.retreiveNotebooks(this.props.user);
        this.setState({ mounted: true })
    }

    newNotebook () {
        this.setState({ mounted: this.state.mounted, modalOpen: true })
    }

    render () {
        
        let allNotebooks;
        let modalForm;
        if (this.state.mounted) {
            allNotebooks = this.props.notebooks.map((notebook)=> {
                return <li key={notebook.id}>{notebook.name}</li>
            });
        }

        if (this.state.modalOpen) {
            modalForm = <NotebookFormContainer />
        }
        return (
            <section className="notebooks-index">
                {modalForm}
                <h1>Notebooks</h1>
                <div class="index-sub-header">
                    <h2>My notebook list</h2>
                    <h2>New Notebook</h2>
                </div>
                <ul>
                    {allNotebooks}
                </ul>
            </section>
        )
    }
}

export default NotebookIndex;