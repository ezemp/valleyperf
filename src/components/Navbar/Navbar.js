import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = props => (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        Valley Perforating
      </Link>
      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              to="/about"
              className={
                window.location.pathname === "/about"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              About Us
            </Link>
          </li>
            <li className="nav-item dropdown">
                <a href="#" className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Premium Connections
                </a>
                <ul className = "dropdown-menu">
                    <li>
                        <Link 
                          to ="/TCPC"
                          className={
                            window.location.pathname === "/TCPC"
                              ? "nav-link active"
                              : "nav-link"
                          }
                        >
                          TCPC
                        </Link>
                    </li>
                    <li>
                        <Link 
                          to ="/TCBC"
                          className={
                            window.location.pathname === "/TCBC"
                              ? "nav-link active"
                              : "nav-link"
                          }
                        >
                          TCBC
                        </Link>
                    </li>
                    <li>
                    <Link 
                          to ="/TCDC"
                          className={
                            window.location.pathname === "/TCDC"
                              ? "nav-link active"
                              : "nav-link"
                          }
                        >
                          TCDC
                        </Link>
                    </li>
                    <li>
                    <Link 
                          to ="/TCFJ"
                          className={
                            window.location.pathname === "/TCFJ"
                              ? "nav-link active"
                              : "nav-link"
                          }
                        >
                          TCFJ
                        </Link>
                    </li>
                </ul>
            </li>
            <li className="nav-item dropdown">
                <a href="#" className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Services
                </a>
                <ul className = "dropdown-menu">
                    <li>
                        <Link 
                          to ="/materials"
                          className={
                            window.location.pathname === "/materials"
                              ? "nav-link active"
                              : "nav-link"
                          }
                        >
                          Industries and Materials
                        </Link>
                    </li>
                    <li>
                        <Link 
                          to ="/machining"
                          className={
                            window.location.pathname === "/machining"
                              ? "nav-link active"
                              : "nav-link"
                          }
                        >
                          Precision Machinging
                        </Link>
                    </li>
                    <li>
                    <Link 
                          to ="/thread"
                          className={
                            window.location.pathname === "/thread"
                              ? "nav-link active"
                              : "nav-link"
                          }
                        >
                          Threading
                        </Link>
                    </li>
                    <li>
                    <Link 
                          to ="/slotting"
                          className={
                            window.location.pathname === "/slotting"
                              ? "nav-link active"
                              : "nav-link"
                          }
                        >
                          Slotting
                        </Link>
                    </li>
                    <li>
                    <Link 
                          to ="/perforating"
                          className={
                            window.location.pathname === "/perforating"
                              ? "nav-link active"
                              : "nav-link"
                          }
                        >
                          Perforating
                        </Link>
                    </li>
                    <li>
                    <Link 
                          to ="/screen"
                          className={
                            window.location.pathname === "/screen"
                              ? "nav-link active"
                              : "nav-link"
                          }
                        >
                          Wire-wrapped Screens
                        </Link>
                    </li>
                </ul>
            </li>
        <li className="nav-item">
            <Link
              to="/handbook"
              className={
                window.location.pathname === "/handbook"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Sand Control Handbook
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/worksheets"
              className={
                window.location.pathname === "/worksheets"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Worksheets
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/contact"
              className={
                window.location.pathname === "/contact"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
  
  export default Navbar;
  