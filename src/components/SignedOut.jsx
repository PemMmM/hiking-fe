import React from "react";
import Authentication from "../services/Authentication";

const auth = new Authentication();

const SignedOut = ({ children }) => {
  const isAuthenticated = auth.isAuthenticated();
  if (!isAuthenticated) {
    return  <> {children} </>;
  }
  return null;
};

export default SignedOut;