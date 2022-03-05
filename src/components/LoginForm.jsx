import React from 'react';
import "../styles/loginForm.css";

function LoginForm() {
  return (
    <div>
      
    <form action="">
      <div className="image-container">
        <img src="./images/user_icon_001.jpg" alt="avatar" className="avatar" />
      </div>

      <div>
        <label htmlFor="username">Username</label>
        <input
          className="username-field"
          type="text"
          name="username"
          id="username"
          minLength="2"
          maxLength="50"
          placeholder="Enter Username"
          required
        />
        <br />

        <label htmlFor="password">Password</label>
        <input
          className="passwor-field"
          type="password"
          name="password"
          id="password"
          minLength="8"
          maxLength="20"
          placeholder="Enter Password"
          required
        />
        <br />

        <input type="checkbox" name=""  />Remember me <br />

        <input type="submit" name=""  value="Login" className="submit-btn" />

        <input type="button" name=""  value="Cancel" className="cancel-btn" />
        <br />

        <a href="#" className="forgot-password">Forgot Password?</a>
      </div>
    </form>
    </div>
  )
}

export default LoginForm