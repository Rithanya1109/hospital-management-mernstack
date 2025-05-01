import React from "react";
import { Container, Grid, Card, CardContent, CardMedia, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import logo from '../../assets/img/logo.png';
import "./Doctor.css";
import neurologist from '../../assets/img/neurodoc.jpeg';
import cardiologist from '../../assets/img/carddoc.jpeg';
import pediatrician from '../../assets/img/peddoc.jpeg';
import orthopedicSurgeon from '../../assets/img/orthodoc.jpeg';
import gynaecologist from '../../assets/img/gundoc.jpeg';
import oncologist from '../../assets/img/oncdoc.jpeg';
import "bootstrap/dist/css/bootstrap.min.css";

const doctorsData = [
  {
    name: "Dr. Subramanian",
    specialty: "Cardiologist",
    image: cardiologist,
    description: "Expert in heart-related treatments and surgeries.",
  },
  {
    name: "Dr. Lakshmi",
    specialty: "Neurologist",
    image: neurologist,
    description: "Specialist in brain and nervous system disorders.",
  },
  {
    name: "Dr. Seetha",
    specialty: "Pediatrician",
    image: pediatrician,
    description: "Provides medical care for children and adolescents.",
  },
  {
    name: "Dr. Balaji",
    specialty: "Orthopedic Surgeon",
    image:  orthopedicSurgeon,
    description: "Specializes in musculoskeletal system treatments.",
  },
  {
    name: "Dr. Emily ",
    specialty: "Gynaecologist",
    image:  gynaecologist,
    description: "Specialist in Women's Health, Reproductive Care, and Wellness.",
  },
  {
    name: "Dr. Shudha",
    specialty: "Oncologist",
    image:  oncologist,
    description: "Expert Oncologist Committed to Advanced Cancer Care.",
  },
];

const Doctor = () => {
  return (
    <>
      {/* Navbar */}
      <div style={{ paddingTop: 0 }}>
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
    
      

      </div>

      {/* Doctors Section */}
      <Container className="doctor-container">
        <Typography variant="h4" className="doctor-title" gutterBottom>
          Meet Our Doctors
        </Typography>
        <Grid container spacing={3}>
          {doctorsData.map((doctor, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <Card className="doctor-card">
                <CardMedia
                  component="img"
                  height="150"
                  image={doctor.image}
                  alt={doctor.name}
                  className="doctor-image"
                />
                <CardContent>
                  <Typography variant="h6" className="doctor-name">
                    {doctor.name}
                  </Typography>
                  <Typography variant="subtitle1" className="doctor-specialty">
                    {doctor.specialty}
                  </Typography>
                  <Typography variant="body2" className="doctor-description">
                    {doctor.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
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
    </>
    
  );
};

export default Doctor;