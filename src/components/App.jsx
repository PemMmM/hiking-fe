import React from "react";
import Header from "./Header";
import LandingPage from "./LandingPage";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";

function App() {
  return (
    <div>
      <Header />
      <LandingPage/>
      <LoginForm/>
      <SignUpForm />
    </div>
  );
}

export default App;
