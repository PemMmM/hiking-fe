import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/header.css";
import SignedIn from "./SignedIn";
import SignedOut from "./SignedOut";

function Header() {
  return (
    <div className="wrap">
      <header className="header">
        <h1 className="logo-title">
          <NavLink to="./">
            <img className="header-logo" src="./images/logo.svg" alt="" />
          </NavLink>
        </h1>
      </header>
      <nav className="nav">
        <ul className="menu-list">
        <SignedIn>
            <li className="menu-item">
              <NavLink className="menu-link" to="./path">
                Paths
              </NavLink>
            </li>
            <li className="menu-item">
              <NavLink className="menu-link" to="./userProfile">
                Profile
              </NavLink>
            </li>
          </SignedIn>
          <SignedOut>
            <li className="menu-item">
              <NavLink className="menu-link" to="./loginForm">
                Log In
              </NavLink>
            </li>
            <li className="menu-item">
              <NavLink className="menu-link" to="./signUpForm">
                Sign Up
              </NavLink>
            </li>
          </SignedOut>

        </ul>
      </nav>
    </div>
  );
}

export default Header;
