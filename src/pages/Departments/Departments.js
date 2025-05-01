import React from 'react';
import { Container, Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import logo from '../../assets/img/logo.png';
import emergencyMedicineImage from '../../assets/img/emergency_medicine.jpg';
import cardiologyImage from '../../assets/img/cardiology.jpg';
import neurologyImage from '../../assets/img/neuro.jpg';
import orthopedicsImage from '../../assets/img/ortho.jpg';
import pediatricsImage from '../../assets/img/pedi.jpg';
import gynecologyImage from '../../assets/img/gyn.jpg';
import oncologyImage from '../../assets/img/onc.jpg';
import generalSurgeryImage from '../../assets/img/gensur.jpg';
import './Departments.css'; 
import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css";
import "boxicons/css/boxicons.min.css";
import "remixicon/fonts/remixicon.css";
import "swiper/css";

const Department = () => {
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

      {/* Departments Section */}
      <section className="product-container">
  {departmentData.map((dept, index) => (
    <div className="product-card" key={index}>
      <img src={dept.image} alt={dept.title} className="product-image" />
      <div className="product-details">
        <h2 className="product-title">{dept.title}</h2>
        <p className="product-description">{dept.description}</p>
      </div>
    </div>
  ))}
</section>
      {/* Footer */}
      <div id="contact us">
        <footer id="footer">
          <div className="contact-wrap">
            <div className="contact-in">
              <h1>Contact Info</h1>
              <h2><FaPhone /> Phone</h2>
              <p>044 22516097</p>
              <h2><FaEnvelope /> Email</h2>
              <p>planetpulse@democompany.com</p>
              <h2><FaMapMarkerAlt /> Address</h2>
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
    </>
  );
};

// Department Data
const departmentData = [
  {
    title: 'Emergency Medicine',
    image: emergencyMedicineImage,
    description: 'Provides 24/7 immediate care for critical injuries, accidents, and life-threatening conditions with a highly trained response team.',
  },
  {
    title: 'Cardiology',
    image: cardiologyImage,
    description: 'Specializes in heart health, offering diagnosis, treatment, and preventive care for heart diseases and conditions.',
  },
  {
    title: 'Neurology',
    image: neurologyImage,
    description: 'Focuses on the diagnosis and treatment of brain, spinal cord, and nervous system disorders.',
  },
  {
    title: 'Orthopedics',
    image: orthopedicsImage,
    description: 'Treats musculoskeletal issues, including fractures, joint replacements, and sports injuries.',
  },
  {
    title: 'Pediatrics',
    image: pediatricsImage,
    description: 'Provides specialized medical care for infants, children, and adolescents.',
  },
  {
    title: 'Gynecology & Obstetrics',
    image: gynecologyImage,
    description: 'Provides comprehensive care for women’s health, including pregnancy, childbirth, and reproductive health.',
  },
  {
    title: 'Oncology',
    image: oncologyImage,
    description: 'Offers advanced cancer diagnosis, treatment, and support, including chemotherapy, radiation, and surgery.',
  },
  {
    title: 'General Surgery',
    image: generalSurgeryImage,
    description: 'Handles a wide range of surgical procedures, from minor to complex surgeries.',
  },
];

export default Department;
