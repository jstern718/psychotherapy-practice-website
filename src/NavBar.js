import React from "react"
import { NavLink } from "react-router-dom";
import "./navbar.css";

function NavBar() {
    return (
        <nav className="NavBar navbar-expand-lg navbar navbar-custom container-fluid justify-content-start">
            <NavLink to="/" className={({ isActive }) => isActive ? "active navbar-text" : "navbar-text"}> Home </NavLink>
            <NavLink to="/Skills" className="navbar-text"> Skills </NavLink>
            <NavLink to="/Experience" className="navbar-text"> Experience </NavLink>
            <NavLink to="/Projects" className="navbar-text"> Projects </NavLink>
        </nav>);
  }

export default NavBar;







