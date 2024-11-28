import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar({ handleLogout }) {
  useNavigate(); // For navigation

  

  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-lg bg-dark navbar-dark">
        <div className="container-fluid">
          {/* Button for navigating to About */}
          {/* <Link className="navbar-brand text-light" to="/About">
            GlobalPost
          </Link> */}
          <Link className="navbar-brand " to="/About">
            <img
              src={require("../assets/images/g.png")}
              alt="GlobalPost Logo"
              style={{ width: "30px", height: "auto", transform: "rotate(-20deg)" }}
            /> <span style={{ color: "orange" }}>lobalPost</span>
          </Link>

          {/* Navbar toggler for mobile view */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navbar menu items */}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
                <Link className="nav-link" to="/general">
                  General
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/business">
                  Business
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/entertainment">
                  Entertainment
                </Link>
              </li>
              
              <li className="nav-item">
                <Link className="nav-link" to="/health">
                  Health
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/science">
                  Science
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/sports">
                  Sports
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/technology">
                  Technology
                </Link>
              </li>
            </ul>

            {/* Logout button */}
            <button
              onClick={handleLogout}
              type="button"
              className="btn custom-btn ms-auto"
            >
              Log Out <i className="bi bi-check-circle"></i>
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
