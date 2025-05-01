// src/pages/SignUp/SignUp.js
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./SignUp.css";

const SignUp = () => {
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);

    if (value.length < 6) {
      setError("Password must be at least 6 characters.");
    } else if (confirmPassword && value !== confirmPassword) {
      setError("Passwords do not match.");
    } else {
      setError("");
    }
  };

  const handleConfirmPasswordChange = (e) => {
    const value = e.target.value;
    setConfirmPassword(value);

    if (password && value !== password) {
      setError("Passwords do not match.");
    } else if (password.length >= 6) {
      setError("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const username = e.target.newUsername.value.trim();
    const email = e.target.email.value.trim();

    if (!username || !email || !password || !confirmPassword) {
      setError("Please fill in all fields.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
    const emailExists = existingUsers.some((user) => user.email === email);
    if (emailExists) {
      setError("User with this email already exists.");
      return;
    }

    const newUser = { username, email, password };
    existingUsers.push(newUser);
    localStorage.setItem("users", JSON.stringify(existingUsers));
    localStorage.setItem("loggedInUser", JSON.stringify(newUser));

    setError("");
    navigate("/");
  };

  return (
    <div className="signup-container">
      <div className="sign-up-box">
        <h2>Create Your Account</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" name="newUsername" placeholder="Username" required />
          <input type="email" name="email" placeholder="Email" required />
          <input
            type="password"
            name="newPassword"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            required
          />
          <button type="submit" disabled={!!error}>Sign Up</button>
        </form>
        {error && <p className="signup-error-message">{error}</p>}
        <p className="signin-text">
          Already have an account? <Link to="/sign-in">Sign In</Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
