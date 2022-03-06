import React from 'react';
import { NavLink } from "react-router-dom";
import "../styles/header.css";

function Header() {
  return (
      <div className="wrap">
        
        <header className="header">
          <h1 className="logo-title">
            <a href="#" className="logo">
              <img className="header-logo" src="./images/logo.svg" alt="" />
            </a>
          </h1>
        </header>
        <nav className="nav">
              <ul className="menu-list">
                <li className="menu-item">
                  <NavLink className="menu-link" to="./loginForm">Log In</NavLink>                
                </li>
                <li className="menu-item">                
                  <NavLink className="menu-link" to="./signUpForm">Sign Up</NavLink>                          
                </li>
                <li className="menu-item">
                  <a href="#Paths" className="menu-link">
                    Paths
                  </a>
                </li>
                <li className="menu-item">
                  <a href="#Profile" className="menu-link">
                    Profile
                  </a>
                </li>
              </ul>
        </nav>
      </div>
  )
}

export default Header