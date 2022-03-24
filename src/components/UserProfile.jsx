import React from "react";
// import useAPI from "../effects/useAPI";
// import { useParams } from "react-router-dom";
// import getUserById from "../services/paths/getPathById";

// import "../styles/userProfile.css";

function UserProfile() {
  // const params = useParams();

  // const [pathLoading, pathError, pathResponse] = useAPI(() =>
  //   getPathById(params.pathId)
  // );

  return (
    <div>
      <form action="">
        <div className="form-area">
          <h1>Sign Up</h1>

          <label htmlFor="avatar">
            Avatar{" "}
            <img
              src="./images/user_icon_001.jpg"
              alt="avatar"
              className="avatar"
            />
          </label>
          <input type="image" alt="user image" name="avatar" id="avatar" />
          <br />

          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            minLength="2"
            maxLength="40"
            placeholder="Your name"
            required
          />
          <br />

          <label htmlFor="surname">Surname</label>
          <input
            type="text"
            name="surname"
            id="surname"
            minLength="2"
            maxLength="40"
            placeholder="Your surname"
            required
          />
          <br />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="name@email.com"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            required
          />
          <br />

          <label htmlFor="phone">Phone Number</label>
          <input
            type="number"
            name="phone"
            id="phone"
            placeholder="+90 5** *** ** **"
            required
          />
          <br />

          <label htmlFor="DoB">Date of Birth</label>
          <input
            type="date"
            name="DoB"
            id="DoB"
            placeholder="01/01/1991"
            required
          />
          <br />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            minLength="8"
            maxLength="20"
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}"
            placeholder="********"
            required
          />
          <br />

          <label htmlFor="confirm-password">Confirm Password</label>
          <input
            type="password"
            name="confirm-password"
            id="confirm-password"
            minLength="8"
            maxLength="20"
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}"
            placeholder="********"
            required
          />
          <br />

          <input
            type="submit"
            name="update"
            value="Update"
            className="submit-btn"
          />
          <input
            type="reset"
            name="cancel"
            value="Cancel"
            className="reset-btn"
          />
        </div>
      </form>
    </div>
  );
}

export default UserProfile;
