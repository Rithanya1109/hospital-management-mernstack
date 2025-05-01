// src/pages/Home/Home.js
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/img/logo.png";
import heroImage from "../../assets/img/hero.jpg";
import lobby from "../../assets/img/infs.jpg";
import Reception from "../../assets/img/inf2.jpg";
import waiting_area from "../../assets/img/inf3.jpg";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "animate.css";
import "boxicons/css/boxicons.min.css";
import "remixicon/fonts/remixicon.css";
import "swiper/css";
import "./Home.css";

const Home = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (loggedInUser) {
      setUser(loggedInUser);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    setUser(null);
    navigate("/sign-in");
  };

  return (
    <div>
      <nav className="navbar" style={{ backgroundColor: "#194767" }}>
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
                {user ? (
                  <>
                    <span style={{ color: "#fff", marginRight: "10px" }}>
                      Welcome, {user.username}
                    </span>
                    <button onClick={handleLogout} className="btn btn-sm btn-danger">
                      Logout
                    </button>
                  </>
                ) : (
                  <>
                    <Link to="/sign-in">Sign In</Link> | <Link to="/sign-up">Sign Up</Link>
                  </>
                )}
              </div>
              <div className="appointment-link">
                <Link
                  to={user ? "/book-appointment" : "#"}
                  onClick={() => {
                    if (!user) alert("Login required for booking appointment.");
                  }}
                  style={{ color: "#3dbbd4" }}
                >
                  Book Appointment
                </Link>
              </div>
            </li>
          </div>
        </ul>
      </nav>

      <section className="index">
        <div id="hero">
          <div id="heroCarousel" className="carousel slide carousel-fade" data-bs-ride="carousel">
            <div className="carousel-inner" role="listbox">
              <div className="carousel-item active" style={{ backgroundImage: `url(${heroImage})` }}>
                <div className="carousel-container d-flex align-items-center justify-content-center">
                  <div className="container-index text-center">
                    <h2 className="animate__animated animate__fadeInDown" style={{ color: "whitesmoke" }}>
                      <span className="welcome-msg">Welcome to</span><br />
                      <span className="iot-centre">TAU Hospital</span><br />
                      <span className="iot-centre">Dedicated to Care, Driven by Compassion</span>
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="section-two">
          <h3 className="heading">About</h3>
          <p>
            At TAU Hospital, we are dedicated to providing compassionate, world-class healthcare to every patient we serve.
            With a legacy of excellence and a commitment to innovation, our hospital combines cutting-edge medical technology
            with a team of highly skilled doctors, nurses, and healthcare professionals.
          </p>
          Since our founding, TAU Hospital has been a trusted center for comprehensive medical care — from preventive screenings
          and outpatient services to advanced surgeries and critical care. Our patient-centered approach ensures that every individual
          receives personalized treatment, attention, and respect throughout their healthcare journey.

          <div className="card w-100 mb-3 justify-content-center align-items-center">
            <div className="card-body">
              <h5 className="card-title">Mission</h5>
              <p className="card-text">
                To be a leading healthcare institution known for excellence in patient care, advanced medical innovation,
                and a commitment to improving the health and well-being of our community.
              </p>
            </div>
          </div>

          <div className="card w-100 justify-content-center mb-3">
            <div className="card-body">
              <h5 className="card-title">Vision</h5>
              <p className="card-text">
                <ul>
                  <li>To deliver compassionate, high-quality, and affordable healthcare services to every patient.</li>
                  <li>To embrace cutting-edge technology and medical practices for accurate diagnosis and effective treatment.</li>
                  <li>To foster a healing environment that respects the dignity, needs, and values of each individual.</li>
                  <li>To engage in continuous quality improvement and patient safety initiatives.</li>
                  <li>To continually educate, train, and empower our healthcare team for professional and personal growth.</li>
                  <li>To actively promote health awareness, disease prevention, and community outreach.</li>
                  <li>To collaborate with other healthcare providers and organizations to enhance the overall health of our community.</li>
                </ul>
              </p>
            </div>
          </div>
        </div>

        {/* Gallery Carousel */}
        <div id="galleryCarousel" className="carousel slide gallery-carousel" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#galleryCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#galleryCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#galleryCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={lobby} className="d-block w-100" alt="Lobby Area" />
              <div className="carousel-caption d-none d-md-block">
                <h5>Collaborative Care</h5>
                <p>Our doctors work together in a modern, open hospital environment to deliver exceptional healthcare.</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src={Reception} className="d-block w-100" alt="Reception Desk" />
              <div className="carousel-caption d-none d-md-block">
                <h5>Swift Emergency Response</h5>
                <p>Our dedicated team ensures rapid and expert care when every second matters.</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src={waiting_area} className="d-block w-100" alt="Waiting Area" />
              <div className="carousel-caption d-none d-md-block">
                <h5>Compassionate Patient Support</h5>
                <p>Medical professionals providing attentive and coordinated care in every moment.</p>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#galleryCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#galleryCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>

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

export default Home;
