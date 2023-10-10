import React from "react"
import { NavLink} from "react-router-dom";
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
                            <li className="nav-item m-1">
                                <NavLink to="/" className="hamburger-text m-3" data-bs-toggle="collapse"
                                data-bs-target="#navbarNav"> Home </NavLink>
                            </li>
                            <hr/>
                            <li className="nav-item m-1">
                                <NavLink to="/About" className="hamburger-text" data-bs-toggle="collapse"
                                data-bs-target="#navbarNav"> About Me </NavLink>
                            </li>
                            <hr/>
                            <li className="nav-item m-1">
                                <NavLink to="/Resources" className="hamburger-text" data-bs-toggle="collapse"
                                data-bs-target="#navbarNav"> Resources </NavLink>
                            </li>
                            <hr/>
                            <li className="nav-item m-1">
                                <NavLink to="/Speaking"
                                className="hamburger-text"
                                data-bs-toggle="collapse"
                                data-bs-target="#navbarNav"> Public Speaking </NavLink>
                            </li>
                            <hr/>
                            <li className="nav-item m-1">
                                <NavLink to="/Contact"
                                className="hamburger-text"
                                data-bs-toggle="collapse"
                                data-bs-target="#navbarNav"> Contact </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>



        </div>
    )
  };

export default NavBar;







