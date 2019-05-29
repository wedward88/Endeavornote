import React from 'react';
import Header from './header/Header';
import LoginFormContainer from './session_form/LoginFormContainer';
import SignupFormContainer from './session_form/SignupFormContainer';
import { AuthRoute } from '../util/route_util';


const App = () => {
    return (
        <div>
            <Header />


            <AuthRoute path='/login' component={LoginFormContainer} />
            <AuthRoute path='/signup' component={SignupFormContainer} />
        </div>
    )
}

export default App;