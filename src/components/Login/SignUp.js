import React from 'react';
import { NavLink } from 'react-router-dom';


const SignUp = () => {
    return (
        <div>
            <h1>SignUp Page</h1>
            <NavLink to="/login">Existing User?</NavLink>
        </div>
    )
}

export default SignUp;
