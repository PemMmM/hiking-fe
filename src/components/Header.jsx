import React from 'react';
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
                  <a href="#LogIn" className="menu-link">
                    Log In
                  </a>
                </li>
                <li className="menu-item">
                  <a href="#SignUp" className="menu-link">
                    Sign Up
                  </a>
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