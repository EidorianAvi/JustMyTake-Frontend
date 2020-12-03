import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';


const NavBar = () => {
    return (
        <div>
            <nav>
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
