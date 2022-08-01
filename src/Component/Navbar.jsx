import './Navbar.css'
import React from 'react';
import { NavLink } from "react-router-dom"
import * as Icon from 'react-bootstrap-icons'
import { useState } from 'react';

const Navbar = () => {
    const [click, setClick] = useState(false);
    const handleclick = () => setClick(!click);

    const [color, setcolor] = useState(false)
    const changeColor = () => {
        if (window.scrollY >= 100) {
            setcolor(true);
        } else {
            setcolor(false);
        }
    };

    window.addEventListener("scroll", changeColor);

    return (
        <div className={color ? "header header-bg" : "header"}>
            <NavLink to="/">
                <h1>Portfolio</h1>
            </NavLink>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/project">Project</NavLink>
                </li>
                <li>
                    <NavLink to="/about">About</NavLink>
                </li>
                <li>
                    <NavLink to="/contact">Contact</NavLink>
                </li>
            </ul>
            <div className='hamburger' onClick={handleclick}>
                {click ? (
                    <Icon.X size={38} style={{ color: "#fff" }} />
                ) : (
                    <Icon.List size={30} style={{ color: "#fff" }} />
                )}
            </div>
        </div>
    );
};

export default Navbar;