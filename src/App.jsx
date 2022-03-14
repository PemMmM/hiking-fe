import React from "react";
import Header from "./components/Header";
import LandingPage from "./components/LandingPage";
import LoginForm from "./components/LoginForm";
import SignUpForm from "./components/SignUpForm";
import Footer from "./components/Footer";
import UserProfile from "./components/UserProfile";
import PathDetails from "./components/PathDetails";
// import { Path } from "react-router-dom";
import Paths from "./components/Paths";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/loginForm" element={<LoginForm />} />
        <Route path="/signUpForm" element={<SignUpForm />} />
        <Route path="/userProfile" element={<UserProfile />} />
        <Route path="/paths" element={<Paths />} />
        <Route path="/paths/:pathId" element={<PathDetails />} />
        <Route path="/" element={<LandingPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
