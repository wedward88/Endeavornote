import React from 'react';
import { connect } from 'react-redux';

class NotebookForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { name: '' }
    }

    
}


const msp = (state) => {
    return {

    }
}

const mdp = (dispatch) => {
    return {

    }
}

export default connect(msp, mdp)(NotebookForm)