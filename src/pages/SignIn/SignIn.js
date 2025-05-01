// src/pages/SignIn/SignIn.js
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./SignIn.css";

const SignIn = () => {
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value.trim();
    const password = e.target.password.value;

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const matchedUser = users.find((user) => user.email === email && user.password === password);

    if (matchedUser) {
      // Store the logged-in user (session)
      localStorage.setItem("loggedInUser", JSON.stringify(matchedUser));
      setError("");
      navigate("/");
    } else {
      setError("Invalid email or password.");
    }
  };

  return (
    <div className="signin-container">
      <div className="sign-in-box">
        <h2>Sign In to Your Account</h2>
        <form onSubmit={handleLogin}>
          <input type="email" name="email" placeholder="Email" required />
          <input type="password" name="password" placeholder="Password" required />
          <button type="submit">Sign In</button>
        </form>
        {error && <p className="signin-error-message">{error}</p>}
        <p className="signup-text">
          Don't have an account? <Link to="/sign-up">Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
