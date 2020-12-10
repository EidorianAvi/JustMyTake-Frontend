import React, { useState }from 'react';
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
        
        // loginUser(user);
        console.log(user)
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
                    <button>Login</button>
                </form>
            </section>
        </div>
    )
}

export default Login

