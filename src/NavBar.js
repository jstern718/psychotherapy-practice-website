import React from "react"
import { NavLink} from "react-router-dom";
import { NavHashLink } from 'react-router-hash-link';
import "./navbar.css";

function NavBar() {
    return (
        <nav className="NavBar navbar-expand-lg navbar navbar-custom container-fluid justify-content-start">
            <NavLink to="/" className={({ isActive }) => isActive ? "active navbar-text" : "navbar-text"}> Home </NavLink>
            <NavHashLink to="/#WhoThisIsFor" className="navbar-text"> Who this is for </NavHashLink>
            <NavHashLink to="/#HowICanHelp" className="navbar-text"> How I can help </NavHashLink>
            <NavLink to="/Projects" className="navbar-text"> About Me </NavLink>
            <NavLink to="/Projects" className="navbar-text"> Resources </NavLink>
            <NavLink to="/Projects" className="navbar-text"> Public Speaking </NavLink>
        </nav>);
  }

export default NavBar;







