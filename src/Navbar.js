import React from "react";
import'./Navbar.css';

const Navbar = () => {
    return(
        <nav className = "navbar">
        <div className="navbar-logo">Books4You</div>
        <ul className="navbar-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href = "#blog">Blog</a></li>
        <li><a href = "#login">Login</a></li>
        </ul>
        </nav>
    );
};

export default Navbar;