// src/pages/ForgotPassword/ForgotPassword.js
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./ForgotPassword.css";
import logo from '../../assets/img/logo.png';


const ForgotPassword = () => {
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.resetEmail.value;

    if (email) {
      setMessage("A password reset link has been sent to your email.");
      setTimeout(() => {
        navigate("/sign-in");
      }, 3000);
    } else {
      setMessage("Please enter a valid email address.");
    }
  };

  return (
    <div>
       <nav className="navbar" style={{backgroundColor:"#194767"}}>
        <img
          src={logo}
          alt="Hospital Logo"
          style={{
            opacity: 0.9,
            width: "100px",
            height: "70px",
            paddingLeft: "20px",
            borderRadius: "50px",
          }}
        />
        <h1 className="logo" style={{ color: "#3dbbd4", fontSize: "15px", marginTop: 0 }}>
          <span className="title">TAU HOSPITAL</span>
          <span className="sub-title">CARE, COMPASSION and CURE</span>
        </h1>
        <ul className="nav-links">
          <input type="checkbox" id="checkbox_toggle" />
          <label htmlFor="checkbox_toggle" className="hamburger">&#9776;</label>
          <div className="menu">
            <li><a href="/">Home</a></li>
        
            <li><a href="/departments">Departments</a></li>
            <li><a href="/doctors">Doctors</a></li>
            <li><a href="/gallery">Gallery</a></li>
           
            <li><a href="/contact">Contact</a></li>
            <li className="signs">
              <div className="auth-links">
              <Link to="/sign-in">Sign In</Link> | <Link to="/sign-up">Sign Up</Link>
              </div>
              <div className="appointment-link">
              <Link to="/book-appointment" style={{color:"#3dbbd4"}}>Book Appointment</Link>
              </div>
            </li>
          </div>
        </ul>
      </nav>
    
    
    <div className="forgot-container">
      <div className="forgot-password-box">
        <h2>Forgot Your Password?</h2>
        <p>Enter your email address below and we'll send you a link to reset your password.</p>
        <form onSubmit={handleSubmit}>
          <input type="email" name="resetEmail" placeholder="Enter your email" required />
          <button type="submit">Send Reset Link</button>
        </form>
        {message && (
          <p id="reset-message" style={{ color: message.includes("sent") ? "green" : "red" }}>
            {message}
          </p>
        )}
        <p className="back-to-signin">
        <Link to="/sign-in">Back to Sign In</Link>
        </p>
        
      </div>
      </div>
      <footer id="footer">
        <div className="contact-wrap">
          <div className="contact-in">
            <h1>Contact Info</h1>
            <h2><i className="fa fa-phone" aria-hidden="true"></i> Phone</h2>
            <p>044 22516097</p>
            <h2><i className="fa fa-envelope" aria-hidden="true"></i> Email</h2>
            <p>planetpulse@democompany.com</p>
            <h2><i className="fa fa-map-marker" aria-hidden="true"></i> Address</h2>
            <p>Chennai</p>
          </div>
          <div className="contact-in">
            <h1>Send a Message</h1>
            <form>
              <input type="text" placeholder="Email" className="contact-in-input" />
              <textarea placeholder="Message" className="contact-in-textarea"></textarea>
              <input type="submit" value="SUBMIT" className="contact-in-btn" />
            </form>
          </div>
        </div>
      </footer>
    
    </div>
  );
};

export default ForgotPassword;
