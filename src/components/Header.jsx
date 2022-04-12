import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "../styles/header.css";
import SignedIn from "./SignedIn";
import SignedOut from "./SignedOut";
import Authentication from "../services/Authentication/index";

let auth = new Authentication();

function Header() {
  const jwtPayload = auth.getAccessTokenPayload();
  const userId = jwtPayload.userId;
  let navigate = useNavigate();
  const handleLogout = (event) => {
    event.preventDefault();
    auth.logout();
    navigate("/");
    window.location.reload();
  };
  return (
    <div className="wrap">
        <h1>
          <NavLink to="./">
            <img className="header-logo" src="./images/logo.svg" alt="" />
          </NavLink>
        </h1>
      <nav className="nav">
        <ul className="menu-list">
          <SignedIn>
            <li className="menu-item">
            <button
              className="menu-link"
                type="button"
                onClick={() =>
                  navigate(`./path`, { replace: true })
                }
              >
                Paths
              </button>
            </li>
            <li className="menu-item">
              <button
              className="menu-link"
                type="button"
                onClick={() =>
                  navigate(`/user/${userId}`, { replace: true })
                }
              >
                Profile
              </button>
            </li>
            <li className="menu-item">
              <button
                className="menu-link"
                to="./userProfile"
                onClick={handleLogout}
              >
                SignOut
              </button>
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
