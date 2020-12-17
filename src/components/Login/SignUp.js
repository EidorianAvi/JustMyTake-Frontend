import React, { useState }from 'react';
import { NavLink } from 'react-router-dom';
import './SignUp.css';

const SignUp = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [email, setEmail] = useState("");

   // Handles change values in input fields for signup form
    const handleChange = ({ target }) => {
        switch(target.name){
            case "email":
                return setEmail(target.value);
            case "username":
                return setUsername(target.value);
            case "password":
                return setPassword(target.value);
            case "confirmPassword": 
                return setConfirmPassword(target.value);
            default:
                return null;
        }
    }

    // Checks for Input fields and if not empty passes them into createUser function
    const handleSubmit = (e) => {
        checkForInput();
        e.preventDefault();
        let user = {
            username: username,
            password: password,
            email: email
        };
        
        createUser(user);
    }

    // Makes sure input fields are filled in and if not toggles validators.

    const checkForInput = () => {
        if(email === ""){
            let emailValidator = document.querySelector(".email-validator");
            emailValidator.classList.remove("hidden");
            setTimeout(() => {
                emailValidator.classList.add('hidden');
            }, 2000);
        } else if (username === ""){
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
        } else if (confirmPassword === "" || password !== confirmPassword){
            let confirmPasswordValidator = document.querySelector(".confirmPassword-validator");
            confirmPasswordValidator.classList.remove('hidden');
            setTimeout(() => {
                confirmPasswordValidator.classList.add('hidden');
            }, 2000);
        }
    }  

    const createUser = (user) => {
        fetch("http://localhost:8000/users/add-user", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(user),
        })
          .then((response) => response.json())
          .then((response) => {
            if (response.message) {
                console.log(response.message);
            } else {
                console.log("success");
              localStorage.setItem("token", response.token);
            }
      });
    }

    return (
        <div className="signup-page" data-aos="fade">
            <section className="signup-banner">
                <h2>Create an Account</h2>
            </section>
            <section>
                <form onSubmit={handleSubmit} className="signup-form">
                    <div>
                        <label htmlFor="email">Email:</label><br/>
                        <input 
                        name="email"
                        type="text" 
                        value={email} 
                        onChange={handleChange}
                        /><br/>
                        <p className="email-validator hidden">Email Required</p>
                    </div>
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
                    <div>
                        <label htmlFor="confirmPassword">Confirm Password:</label><br/>
                        <input 
                        name="confirmPassword" 
                        type="password" 
                        value={confirmPassword} 
                        onChange={handleChange}/><br/>
                        <p className="confirmPassword-validator hidden">Passwords Must Match</p>
                    </div>
                    <button>Sign Up</button>
                    <NavLink to="/login" className="login-link">Existing User</NavLink>
                </form>
                <p className="success hidden">User Created</p>
                <p className="failed hidden">Couldn't Create User</p>
            </section>
        </div>
    )
}

export default SignUp

