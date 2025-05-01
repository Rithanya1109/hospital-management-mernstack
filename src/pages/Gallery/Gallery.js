import React from "react";
import { Container, Grid, Card, CardMedia, CardContent, Typography } from "@mui/material";
import "./Gallery.css";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from '../../assets/img/logo.png';
import hospital_exterior from '../../assets/img/Hospital_exter.jpeg';
import lobby from '../../assets/img/lobby.jpeg';
import Reception from '../../assets/img/Reception.jpeg';
import waiting_area from '../../assets/img/waiting.jpeg';  
import operation_theater1 from '../../assets/img/Theater1.jpeg';
import operation_theater2 from '../../assets/img/Theater2.jpeg';
import operation_theater3 from '../../assets/img/Theater3.jpeg';
import consultation1 from '../../assets/img/Consultation1.jpeg';
import consultation2 from '../../assets/img/Consultation2.jpeg';
import consultation3 from '../../assets/img/Consultation3.jpeg';
import consultation4 from '../../assets/img/Consultation4.jpeg';
import  patient_room1 from '../../assets/img/patient1.jpeg';
import  patient_room2 from '../../assets/img/patient2.jpeg';
import  patient_room3 from '../../assets/img/patient3.jpeg';
import health_camp from '../../assets/img/camp.jpeg';
import blood_donation_camp from '../../assets/img/bloodcamp.jpeg';


import { Link } from "react-router-dom"; 

// Sample data for gallery sections
const galleryData = [
  {
    title: "Hospital Building",
    images: [
      { src: hospital_exterior, alt: "Hospital Exterior" },
      { src: lobby, alt: "Hospital Lobby" },
    ],
  },
  {
    title: "Reception and Waiting Areas",
    images: [
      { src: Reception, alt: "Reception Area" },
      { src: waiting_area, alt: "Waiting Area" },
    ],
  },
  {
    title: "Consultation Rooms",
    images: [
      { src: consultation1, alt: "Consultation Room 1" },
      { src: consultation2, alt: "Consultation Room 2" },
      { src: consultation3, alt: "Consultation Room 3" },
      { src: consultation4, alt: "Consultation Room 4" },
    ],
  },
  {
    title: "Operation Theaters",
    images: [
      { src: operation_theater1, alt: "Operation Theater 1" },
      { src: operation_theater2, alt: "Operation Theater 2" },
      { src: operation_theater3, alt: "Operation Theater 3" },
    ],
  },
  {
    title: "Patient Rooms / Wards",
    images: [
      { src: patient_room1, alt: "Patient Room 1" },
      { src: patient_room2, alt: "Patient Room 2" },
      { src: patient_room3, alt: "Patient Room 3" },
    ],
  },
  {
    title: "Event Highlights",
    images: [
      { src: health_camp, alt: "Health Camp" },
      { src: blood_donation_camp, alt: "Blood Donation Camp" },
    ],
  },
];

const Gallery = () => {
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
          <span className="title">MEDITECH HOSPITAL</span>
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
    


      <Container className="gallery-container">
        <Typography variant="h4" className="gallery-title" gutterBottom>
          Hospital Gallery
        </Typography>
        {galleryData.map((section, index) => (
          <div key={index} className="gallery-section">
            <Typography variant="h5" className="section-title">
              {section.title}
            </Typography>
            <Grid container spacing={3} justifyContent="center">
  {section.images.map((image, imgIndex) => (
    <Grid item xs={12} sm={6} md={4} key={imgIndex}>
      <Card className="gallery-card">
        <CardMedia
          component="img"
          height="200"
          image={image.src}
          alt={image.alt}
          className="gallery-image"
        />
        <CardContent>
          <Typography variant="body2" className="image-description">
            {image.alt}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  ))}
</Grid>
            
          </div>
        ))}
      </Container>

      <footer id="footer">
        <div className="contact-wrap">
          <div className="contact-in">
            <h1>Contact Info</h1>
            <h2>
              <i className="fa fa-phone" aria-hidden="true"></i> Phone
            </h2>
            <p>044 22516097</p>
            <h2>
              <i className="fa fa-envelope" aria-hidden="true"></i> Email
            </h2>
            <p>planetpulse@democompany.com</p>
            <h2>
              <i className="fa fa-map-marker" aria-hidden="true"></i> Address
            </h2>
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

export default Gallery;