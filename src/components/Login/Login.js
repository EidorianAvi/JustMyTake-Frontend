import React from 'react';
import './Login.css';

const Login = () => {
    return (
        <div className="login-page">
            <section className="banner">
                <h2>Welcome to Just My Take</h2>
                <p>A place to collect your thoughts.</p>
            </section>
            <section className="login-form">
                <form action="">
                    <label htmlFor="username">Username:</label><br/>
                    <input type="text"/><br/>
                    <label htmlFor="password">Password:</label><br/>
                    <input type="password"/><br/>
                    <button>Submit</button>
                </form>
            </section>
        </div>
    )
}

export default Login

