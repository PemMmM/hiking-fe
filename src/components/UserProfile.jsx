import React from "react";
import useAPI from "../effects/useAPI";
import { useParams } from "react-router-dom";
import getUserById from "../services/user/getUser";

import "../styles/userProfile.css";

const UserProfile = () => {
  const params = useParams();

  const [userLoading, userError, userResponse] = useAPI(() =>
    getUserById(params.userId)
  );

  const { user } = userResponse;

  console.log(user);
  if (userLoading) {
    return <p>LOADING...</p>;
  }
  if (userError) {
    return <p>Something went wrong.. Try again</p>;
  }

  return (
    <div className="user-details">
      <span className="user-title"> User  Details:</span><br /><br />
      <div className="group first_name">{user.firstName}</div>
      <div className="group last_name">{user.lastName}</div>
      <div className="group phone_number">{user.phoneNumber}</div>
      <div className="group email">{user.email}</div>
      <div className="group date_of_birth">{user.dateOfBirth}</div>
    </div>
  );
};

export default UserProfile;
