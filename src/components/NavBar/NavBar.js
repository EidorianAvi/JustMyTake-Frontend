import React, { useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { FaAlignJustify } from 'react-icons/fa';
import { useDetectOutsideClick } from '../../hooks/useDetectOutsideClick';
import './NavBar.css';

const NavBar = () => {
    const dropdownRef = useRef(null);
    const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
     
    const handleClick = () => setIsActive(!isActive);

    return (
        <div className="NavBar">
            <section className="Banner-Title">
                <h3>Just My Take</h3>
            </section>
            <section className="menu-container">
                <button onClick={handleClick} className="dropdown-toggle">
                    <FaAlignJustify/>
                </button>
                <nav ref={dropdownRef} className={`menu ${isActive ? 'active' : 'inactive'}`}>
                    <ul>
                        <li><NavLink exact to="/" onClick={handleClick}>Home</NavLink></li>
                        <li><NavLink to="/my-takes" onClick={handleClick}>My Takes</NavLink></li>
                        <li><NavLink to="/profile" onClick={handleClick}>Profile</NavLink></li>
                        <li><NavLink to="/login" onClick={handleClick}>Log In</NavLink></li>
                    </ul> 
                </nav>            
            </section>
        </div>
    );
}

export default NavBar;
