import React from "react";
import Header from "./components/Header";
import LandingPage from "./components/LandingPage";
import LoginForm from "./components/LoginForm";
import SignUpForm from "./components/SignUpForm";
import Footer from "./components/Footer";
import UserProfile from "./components/UserProfile";
import PathDetails from "./components/PathDetails";
import AuthRoute from "./components/AuthRoute";
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
        <Route exact path="/path" element={<AuthRoute />}>
          <Route exact path="/path" element={<Paths />} />
        </Route>
        <Route exact path="/paths/:pathId" element={<AuthRoute />}>
          <Route exact path="/paths/:pathId" element={<PathDetails />} />
        </Route>
        <Route path="/" element={<LandingPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
