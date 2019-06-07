import React from 'react';
import SplashPage from './splash/Splash';
import LoginFormContainer from './session_form/LoginFormContainer';
import SignupFormContainer from './session_form/SignupFormContainer';
import MainContentContainer from '../components/main/MainContentContainer';
import { AuthRoute, ProtectRoute } from '../util/route_util';
import { Switch } from 'react-router-dom';



const App = () => {
    // debugger
    return (
        <div id="app-container">
            <AuthRoute exact path='/' component={SplashPage} />
            <AuthRoute path='/login' component={LoginFormContainer} />
            <AuthRoute path='/signup' component={SignupFormContainer} />

            <Switch>
                <ProtectRoute exact path='/main/notebooks/:notebookId?/:noteId?' component={MainContentContainer} />
                <ProtectRoute path='/main' component={MainContentContainer} />
            </Switch>
            
        </div>
    )
}

export default App;