import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'; 
import Login from './Login';
import SignUp from './SignUp';


const LoginRoot = () => {
    return (
        <BrowserRouter>
            <div>
                <Route exact path="/login" component={Login}/>
                <Route path="/SignUp" component={SignUp} />
            </div>
        </BrowserRouter>
    )
}

export default LoginRoot;
