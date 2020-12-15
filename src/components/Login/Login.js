import React, { useState }from 'react';
import { NavLink } from 'react-router-dom';
import './Login.css';

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    
    const handleChange = ({ target }) => {
        return target.name === "username"
        ? setUsername(target.value)
        : setPassword(target.value);
    }
    
    const handleSubmit = (e) => {
        checkForInput();
        e.preventDefault();
        let user = {
            username: username,
            password: password,
        };
        
        loginUser(user);
    }

    const checkForInput = () => {

    }   
    
    const handleLoginSuccess = (attempt) => {
        if(attempt === true){      
            let success = document.querySelector('.success');
            success.classList.remove('hidden');
            setTimeout(() => {
                success.classList.add('hidden');
            }, 2000)
        } else {
            let failed = document.querySelector(".failed");
            failed.classList.toggle('hidden');
            setTimeout(() => {
                failed.classList.add('hidden');
            }, 2000)
        }
    }

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
            if (response.message) {
                handleLoginSuccess(false)
            } else {
                handleLoginSuccess(true)
                localStorage.setItem("token", response.accessToken);
            }
      });
    }

    return (
        <div className="login-page">
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
                        <p className="validator hidden">Username Required</p>
                    </div>
                    <div>
                        <label htmlFor="password">Password:</label><br/>
                        <input 
                        name="password" 
                        type="password" 
                        value={password} 
                        onChange={handleChange}/><br/>
                        <p className="validator hidden">Password Required</p>
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

