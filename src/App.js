import "./App.css";
import React, { useState } from "react";
import SignIn from "./pages/signIn/SignIn";
import SignUp from "./pages/signUp/SignUp";

function App() {
  const [user, setUser] = useState(null);

  const handleSignUp = (userData) => {
    setUser(userData);
  };

  return (
    <div className="App">
      {!user ? <SignUp onSignUp={handleSignUp} /> : <SignIn user={user} />}
    </div>
  );
}

export default App;
