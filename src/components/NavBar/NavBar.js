import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';
import { FaAlignJustify } from 'react-icons/fa'


const NavBar = () => {

    const [dropdown, setDropdown] = useState(false);

    return (
        <div>
            <nav>
                <section className="Banner-Title">
                    <h3>Just My Take</h3>
                </section>
                <section className="NavBar-Navigation">
                    <button onClick={() => setDropdown(!dropdown)}>
                        <FaAlignJustify/>
                    </button>
                    { dropdown ? 
                        <ul className="NavBar-Options">
                            <li><NavLink exact to="/">Home</NavLink></li>
                            <li><NavLink to="/my-takes">My Takes</NavLink></li>
                            <li><NavLink to="/profile">Profile</NavLink></li>
                        </ul> 
                        : null
                    }
                </section>
            </nav>            
        </div>
    );
}

export default NavBar;
