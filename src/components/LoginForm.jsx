/* eslint-disable no-unused-vars */

import React, { useState } from "react";
import "../styles/loginForm.css";
import Authentication from "../services/Authentication/index";
import { useNavigate } from "react-router-dom";

let auth = new Authentication();

function LoginForm() {
  // const [userName, setUserName] = useState("");
  let navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [invalidCredentialsError, setInvalidCredentialsError] = useState(false);
  // avatar eklenecek

  const handleLogin = (event) => {
    event.preventDefault();
    setLoading(true);
    auth
      .login({ email, password })
      .then(() => {
        setLoading(false);
        navigate("/");
        window.location.reload();
      })
      .catch((err) => {
        setLoading(false);
        setInvalidCredentialsError("Incorrect Email or Password");
      });
  };
  return (
    <div className="loginPage">
      <h1 className="logInTitle">Log In</h1>

      <label htmlFor="avatar">
        <img src="./images/user_icon_001.jpg" alt="avatar" className="avatar" />
      </label>
      {/* <div className="image-container">
          <img
            src="./images/user_icon_001.jpg"
            alt="avatar"
            className="avatar-img"
          />
        </div> */}

      <br />

        <label htmlFor="username">Email</label>
        <input
          className="sections username-field"
          type="text"
          name="username"
          id="username"
          minLength="2"
          maxLength="50"
          placeholder="Enter Username"
          onChange={(event) => {
            setEmail(event.target.value);
          }}
          required
        />
        <br />

        <label htmlFor="password">Password</label>
        <input
          className="sections password-field"
          type="password"
          name="password"
          id="password"
          minLength="8"
          maxLength="20"
          placeholder="Enter Password"
          onChange={(event) => {
            setPassword(event.target.value);
          }}
          required
        />
        <br />
        {/*
        <input type="checkbox" name=""  />Remember me <br />
        */}
        <input
          type="submit"
          name=""
          value="Login"
          className="submit-btn"
          onClick={handleLogin}
        />

        <input type="reset" name="" value="Cancel" className="reset-btn" />
        <br />

        <a href="#forgotPwd" className="forgot-password">
          Forgot Password ?
        </a>
      </div>
  );
}

export default LoginForm;
