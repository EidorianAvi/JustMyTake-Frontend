import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';


const NavBar = () => {
    return (
        <div>
            <nav>
                <h3>Just My Take</h3>
                <ul>
                    <li><NavLink exact to="/">Home</NavLink></li>
                    <li><NavLink to="/my-takes">My Takes</NavLink></li>
                    <li><NavLink to="/profile">Profile</NavLink></li>
                </ul>
            </nav>            
        </div>
    );
}

export default NavBar;
