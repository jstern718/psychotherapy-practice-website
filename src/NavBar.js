import React from "react"
import { NavLink} from "react-router-dom";
import { NavHashLink } from 'react-router-hash-link';
import "./navbar.css";

function NavBar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg rounded shadow m-0 bg-dark">
                <div className="container-fluid p-n5">
                    {/* <a className="navbar-brand" href="/"></a> */}
                    <div className="bg-dark hamburger-col">
                        <button className="navbar-toggler text-start mr-n4" type="button"
                            data-bs-toggle="collapse" data-bs-target="#navbarNav"
                            aria-controls="navbarNav" aria-expanded="false"
                            aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </div>
                    <div className="collapse navbar-collapse ml-n4 p-6 bg-dark" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <NavLink to="/" className="hamburger-text m-3" data-bs-toggle="collapse"
                                data-bs-target="#navbarNav"> Home </NavLink>
                            </li>
                            <hr/>
                            <li className="nav-item m-1">
                                <NavHashLink to="/#WhoThisIsFor" className="hamburger-text" data-bs-toggle="collapse"
                                data-bs-target="#navbarNav"> Who's This For </NavHashLink>
                            </li>
                            <hr/>
                            <li className="nav-item m-1">
                                <NavHashLink to="/#HowICanHelp" className="hamburger-text" data-bs-toggle="collapse"
                                data-bs-target="#navbarNav"> How It Helps </NavHashLink>
                            </li>
                            <hr/>
                            <li className="nav-item m-1">
                                <NavLink to="/Projects" className="hamburger-text" data-bs-toggle="collapse"
                                data-bs-target="#navbarNav"> About Me </NavLink>
                            </li>
                            <hr/>
                            <li className="nav-item m-1">
                                <NavLink to="/Projects" className="hamburger-text" data-bs-toggle="collapse"
                                data-bs-target="#navbarNav"> Resources </NavLink>
                            </li>
                            <hr/>
                            <li className="nav-item m-1">
                                <NavLink to="/Projects"
                                className="hamburger-text"
                                data-bs-toggle="collapse"
                                data-bs-target="#navbarNav"> Public Speaking </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
                {/* <div>
                    <nav className="NavBar navbar-expand-lg navbar navbar-custom container-fluid justify-content-start">
                        <NavLink to="/" className={({ isActive }) => isActive ? "active navbar-text" : "navbar-text"}> Home </NavLink>
                        <NavHashLink to="/#WhoThisIsFor" className="navbar-text"> Who's This For </NavHashLink>
                        <NavHashLink to="/#HowICanHelp" className="navbar-text"> How It Helps </NavHashLink>
                        <NavLink to="/Projects" className="navbar-text"> About Me </NavLink>
                        <NavLink to="/Projects" className="navbar-text"> Resources </NavLink>
                        <NavLink to="/Projects" className="navbar-text"> Public Speaking </NavLink>
                    </nav>;
                </div> */}


        </div>
    )
  };

export default NavBar;







