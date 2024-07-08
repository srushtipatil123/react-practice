// src/Navbar.js
import React, { useState } from 'react';


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-toggle" onClick={toggleMenu}>
                &#9776;
            </div>

            <ul className="navbar-menu" >

                <li><a href="/">Home</a></li>
                <li><a href="/">All Courses</a></li>
                <li><a href="/">Dashboard</a></li>
                <li><a href="/">Groups</a></li>
                <li><a href="/">Login</a></li>
                <li><a href="/">Register</a></li>

            </ul>
        </nav>
    );
};

export default Navbar;
