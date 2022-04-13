import React, { useState } from "react";
import "../styles/signUpForm.css";
import postUser from "../services/user/postUser/index";

function SignUpForm() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState(0);
  const [dateOfBirth, setDateOfBirth] = useState("");
  // avatar eklenecek

  // const display = () => {
  //   console.log(name + surname + email + password + phoneNumber + dateOfBirth);
  // };

  return (
    <div className="sign-up-form">
        <h1 className="signUpTitle">Sign Up</h1>

        <label htmlFor="avatar">
          {" "}
          <img
            src="./images/user_icon_001.jpg"
            alt="avatar"
            className="avatar"
          />
        </label>
        {/* <input type="image" alt="user image" name="avatar" id="avatar" /> */}
        <br />

        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="sign-up-name"
          className="sections"
          minLength="2"
          maxLength="40"
          placeholder="Your name"
          onChange={(event) => {
            setName(event.target.value);
          }}
          required
        />
        <br />

        <label htmlFor="surname">Surname</label>
        <input
          type="text"
          className="sections"
          name="surname"
          id="sign-up-surname"
          minLength="2"
          maxLength="40"
          placeholder="Your surname"
          onChange={(event) => {
            setSurname(event.target.value);
          }}
          required
        />
        <br />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          className="sections"
          name="email"
          id="sign-up-email"
          placeholder="name@email.com"
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
          onChange={(event) => {
            setEmail(event.target.value);
          }}
          required
        />
        <br />

        <label htmlFor="phone">Phone Number</label>
        <input
          type="number"
          className="sections"
          name="phone"
          id="sign-up-phone"
          placeholder="+90 5** *** ** **"
          onChange={(event) => {
            setPhoneNumber(event.target.value);
          }}
          required
        />
        <br />

        <label htmlFor="DoB">Date of Birth</label>
        <input
          type="date"
          className="sections"
          name="DoB"
          id="sign-up-DoB"
          placeholder="01/01/1991"
          onChange={(event) => {
            setDateOfBirth(event.target.value);
          }}
          required
        />
        <br />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          className="sections"
          id="sign-up-password"
          minLength="8"
          maxLength="20"
          pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}"
          placeholder="********"
          onChange={(event) => {
            setPassword(event.target.value);
          }}
          required
        />
        <br />

        <label htmlFor="confirm-password">Confirm Password</label>
        <input
          type="password"
          name="confirm-password"
          className="sections"
          id="sign-up-confirm-password"
          minLength="8"
          maxLength="20"
          pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}"
          placeholder="********"
          required
        />
        <br />

        <input
          type="submit"
          name=""
          value="Register"
          className="submit-btn"
          onClick={(event) => {
            event.preventDefault();
            postUser({
              name,
              surname,
              phoneNumber,
              email,
              password,
              dateOfBirth,
            });
          }}
        />
        <input type="reset" name="" value="Reset Form" className="reset-btn" />
    </div>
  );
}

export default SignUpForm;
