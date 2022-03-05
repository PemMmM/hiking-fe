import React from 'react';
import "../styles/signUpForm.css";

function SignUpForm() {
  return (
    <div className="signUpForm">SignUpForm

<form action="">
        <div className="form-area">
          <h1>Register</h1>
          <label for="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            minLength="2"
            maxlength="40"
            placeholder="Your name"
            required
          />
          <br />

          <label for="surname">Surname</label>
          <input
            type="text"
            name="surname"
            id="surname"
            minlength="2"
            maxlength="40"
            placeholder="Your surname"
            required
          />
          <br />

          <label for="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="name@email.com"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            required
          />
          <br />

          <label for="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            minlength="8"
            maxlength="20"
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}"
            placeholder="********"
          />
          <br />

          <label for="confirm-password">Confirm Password</label>
          <input
            type="password"
            name="confirm-password"
            id="confirm-password"
            minLength="8"
            maxLength="20"
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}"
            placeholder="********"
          />
          <br />

          <input
            type="submit"
            name=""
            value="Register"
            className="submit-btn"
          />
          <input
            type="reset"
            name=""
            value="Reset Form"
            className="reset-btn"
          />
        </div>
        
      </form>


    </div>
  )
}

export default SignUpForm