import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import Authentication from "../services/Authentication";

const auth = new Authentication();

const AuthRoute = ({ children, ...rest }) => {
  const isAuthenticated = auth.isAuthenticated();
  if (!isAuthenticated) {
    return <Navigate replace to="/loginForm" />;
  }
  return <Outlet />;
};

export default AuthRoute;
