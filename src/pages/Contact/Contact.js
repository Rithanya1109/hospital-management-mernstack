import React, { useState } from "react";
import logo from "../../assets/img/logo.png";
import { Link } from "react-router-dom";
import "./Contact.css";

const ContactPage = () => {
  const [showSnackbar, setShowSnackbar] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    setShowSnackbar(true); // Show the Snackbar
    setTimeout(() => setShowSnackbar(false), 3000); // Hide the Snackbar after 3 seconds
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
    

      <section className="index">
        <div className="product-container">
          <div className="product-card">
            <img
              src={logo}
              alt="Product"
              className="product-image"
            />
            <div className="product-details">
              <h2 className="product-title">TAU Hospital</h2>
              <p className="product-description">
                Dedicated to Care, Driven by Compassion
              </p>
              <p className="product-price">
                Feel free to reach out to us for appointments, inquiries, or more
                information. Your health is our priority!
              </p>
            </div>
          </div>

          {/* Footer Section */}
          <div id="contact-us">
            <footer id="footer">
              <div className="contact-wrap">
                {/* Contact Info */}
                <div className="contact-in">
                  <h1>Contact Info</h1>
                  <h2>
                    <i className="fa fa-phone" aria-hidden="true"></i> Phone
                  </h2>
                  <p>044 22516097</p>
                  <h2>
                    <i className="fa fa-envelope" aria-hidden="true"></i> Email
                  </h2>
                  <p>thmhospital002@democompany.com</p>
                  <h2>
                    <i className="fa fa-map-marker" aria-hidden="true"></i> Address
                  </h2>
                  <p>Chennai</p>
                </div>

                {/* Contact Form */}
                <div className="contact-in">
                  <h1>Send a Message</h1>
                  <form onSubmit={handleSubmit}>
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="contact-in-input"
                      required
                    />
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="contact-in-input"
                      required
                    />
                    <textarea
                      placeholder="Your Message"
                      className="contact-in-textarea"
                      required
                    ></textarea>
                    <input
                      type="submit"
                      value="SUBMIT"
                      className="contact-in-btn"
                    />
                  </form>
                </div>
              </div>
            </footer>
          </div>
        </div>
      </section>

      {/* Snackbar */}
      {showSnackbar && (
        <div className="snackbar">
          Thank you for reaching out! We will get back to you shortly.
        </div>
      )}
    </div>
  );
};

export default ContactPage;