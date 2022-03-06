import React from "react";
import Header from "./Header";
import LandingPage from "./LandingPage";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";
import Footer from "./Footer";
import UserProfile from "./UserProfile";

function App() {
  return (
    <div>
      <Header />
      <LandingPage/>
      <LoginForm/>
      <SignUpForm />
      <Footer />
      <UserProfile />

    </div>
  );
}

export default App;
