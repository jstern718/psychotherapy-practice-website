import React from "react"
import { NavLink} from "react-router-dom";
import { NavHashLink } from 'react-router-hash-link';
import "./navbar.css";

function NavBar() {
    return (
        <nav className="NavBar navbar-expand-lg navbar navbar-custom container-fluid justify-content-start">
            <NavLink to="/" className={({ isActive }) => isActive ? "active navbar-text" : "navbar-text"}> Home </NavLink>
            <NavHashLink to="/#WhoIsThisFor" className="navbar-text"> Who is this for? </NavHashLink>
            <NavHashLink to="/#HowCanWeHelp" className="navbar-text"> How we can help? </NavHashLink>
            <NavHashLink to="/#WhyUs" className="navbar-text"> Why Us? </NavHashLink>
            <NavLink to="/Projects" className="navbar-text"> Who we are </NavLink>
            <NavLink to="/Projects" className="navbar-text"> Resources </NavLink>
            <NavLink to="/Projects" className="navbar-text"> Public Speaking </NavLink>
        </nav>);
  }

export default NavBar;







