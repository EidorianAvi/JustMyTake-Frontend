import React from 'react'
import "./HomePage.css"

const HomePage = () => {
    return (
        <div class="home-page">
            <p>"A place to store your personal thoughts and experiences on your favorite topics."</p>
            <button><a href="/login">Login</a></button>
            <a href="login">New User?</a>
        </div>
    )
}

export default HomePage
