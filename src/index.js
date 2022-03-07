import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./styles/index.css";
import {
  Header,
  Footer,
  LoginForm,
  SignUpForm,
  LandingPage,
  UserProfile,
  Paths,
} from "./components";

ReactDOM.render(
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/signUpForm" element={<SignUpForm />} />
      <Route path="/loginForm" element={<LoginForm />} />
      <Route path="/userProfile" element={<UserProfile />} />
      <Route path="/paths" element={<Paths />} />
    </Routes>
    <Footer />
  </Router>,

  document.getElementById("root")
);
