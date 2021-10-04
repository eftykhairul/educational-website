import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from "../images/download.png"
import "./Header.css"

const Header = () => {
    return (
        <div className="header">
            <img className="logo" src={logo} alt="" />
            <h1> Education Coaching Center</h1>
            <nav>
                <NavLink to="/home">Home</NavLink>
                <NavLink to="/services">Services</NavLink>
                <NavLink to="/teacher">Teacher's</NavLink>
                <NavLink to="/aboutUs">About Us</NavLink>
            </nav>
        </div>
    );
};

export default Header;