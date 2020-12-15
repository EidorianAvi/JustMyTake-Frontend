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
        e.preventDefault();
        let user = {
            username: username,
            password: password,
        };
        
        loginUser(user);
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
                console.log(response.message);
            } else {
                console.log("success");
              localStorage.setItem("token", response.token);
            }
      });
    }

    return (
        <div className="login-page">
            <section className="banner">
                <h2>Welcome to Just My Take</h2>
                <p>A place to collect your thoughts.</p>
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
                    </div>
                    <div>
                        <label htmlFor="password">Password:</label><br/>
                        <input 
                        name="password" 
                        type="password" 
                        value={password} 
                        onChange={handleChange}/><br/>
                    </div>
                    <NavLink to="/SignUp">New User?</NavLink>
                    <button>Login</button>
                </form>
            </section>
        </div>
    )
}

export default Login

