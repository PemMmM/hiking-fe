import React from "react";
import Authentication from "../services/Authentication";

const auth = new Authentication();

const SignedIn = ({ children }) => {
  const isAuthenticated = auth.isAuthenticated();
  if (!isAuthenticated) {
    return null;
  }
  return <> {children} </>;
};

export default SignedIn;