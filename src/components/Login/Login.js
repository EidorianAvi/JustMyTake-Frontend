import React, { useState }from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import './Login.css';

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [redirect, setRedirect] = useState(null);
    
    // Handles change values in input fields for login form

    const handleChange = ({ target }) => {
        return target.name === "username"
        ? setUsername(target.value)
        : setPassword(target.value);
    }
    
    // Checks for Input fields and if not empty passes them into login function
    
    const handleSubmit = (e) => {
        checkForInput();
        e.preventDefault();
        let user = {
            username: username,
            password: password,
        };
        
        loginUser(user);
    }

    // Makes sure input fields are filled in and if not toggles validators.

    const checkForInput = () => {
        if(username === ""){
            let usernameValidator = document.querySelector(".username-validator");
            usernameValidator.classList.remove('hidden');
            setTimeout(() => {
                usernameValidator.classList.add('hidden');
            }, 2000);
        } else if(password === ""){
            let passwordValidator = document.querySelector(".password-validator");
            passwordValidator.classList.remove('hidden');
            setTimeout(() => {
                passwordValidator.classList.add('hidden');
            }, 2000);
        }
    }   
    
    // Makes the POST request to our login route and if successful stores a JWT in local storage.
    
    const loginUser = (user) => {
        fetch("http://localhost:8000/users/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
          },
          body: JSON.stringify(user),
        })
        .then((response) => response.json())
        .then((response) => {
            if (password !== "" && response.message) {
                handleLoginSuccess(false)
            } else if( response.accessToken ) {
                handleLoginSuccess(true)
                localStorage.setItem("token", response.accessToken);
            }
        });
    }
    
    // Toggles notification whether or not the login attempt is successful.

    const handleLoginSuccess = (attempt) => {
        if(attempt === true){      
            let success = document.querySelector('.success');
            success.classList.remove('hidden');
            setTimeout(() => {
                success.classList.add('hidden');
                setRedirect("/");
            }, 2000);
            setPassword("");
            setUsername("");
        } else {
            let failed = document.querySelector(".failed");
            failed.classList.toggle('hidden');
            setTimeout(() => {
                failed.classList.add('hidden');
            }, 2000)
        }
    }

    if (redirect) {
        return <Redirect exact to={redirect}/>
    }


    return (
        <div className="login-page" data-aos="fade">
            <section className="banner">
                <h2>Welcome Back</h2>
            </section>
            <section>
                <form onSubmit={handleSubmit} className="login-form">
                    <div>
                        <label htmlFor="username">Username:</label><br/>
                        <input 
                        name="username"
                        type="text" 
                        value={username} 
                        onChange={handleChange}
                        /><br/>
                        <p className="username-validator hidden">Username Required</p>
                    </div>
                    <div>
                        <label htmlFor="password">Password:</label><br/>
                        <input 
                        name="password" 
                        type="password" 
                        value={password} 
                        onChange={handleChange}/><br/>
                        <p className="password-validator hidden">Password Required</p>
                    </div>
                    <button>Login</button>
                    <NavLink to="/SignUp" className="signup-link">Create an Account</NavLink>
                    <p className="success hidden">Successful Login</p>
                    <p className="failed hidden">Incorrect Credentials</p>
                </form>
            </section>
        </div>
    )
}

export default Login

