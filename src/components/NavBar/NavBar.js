import React, { useState, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { FaAlignJustify } from 'react-icons/fa'
import './NavBar.css';


const NavBar = () => {

    const dropdownRef = useRef(null);
    const [dropdown, setDropdown] = useState(false);

    const handleClick = () => setDropdown(!dropdown);

    return (
        <div className="NavBar">
            <section className="Banner-Title">
                <h3>Just My Take</h3>
            </section>
            <section className="menu-container">
                <button onClick={handleClick} className="dropdown-toggle">
                    <FaAlignJustify/>
                </button>
                <nav ref={dropdownRef} className={`menu ${dropdown ? 'active' : 'inactive'}`}>
                    <ul>
                        <li><NavLink exact to="/">Home</NavLink></li>
                        <li><NavLink to="/my-takes">My Takes</NavLink></li>
                        <li><NavLink to="/profile">Profile</NavLink></li>
                    </ul> 
                </nav>            
            </section>
        </div>
    );
}

export default NavBar;
