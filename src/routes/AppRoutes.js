// src/routes/AppRoutes.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import SignIn from "../pages/SignIn/SignIn";
import SignUp from "../pages/Signup/SignUp";
import ForgotPassword from "../pages/ForgotPassword/ForgotPassword";
import ContactPage from "../pages/Contact/Contact";
import BookAppointment from "../pages/BookAppointment/BookAppointment";
import Departments from "../pages/Departments/Departments"; // Correct import for Departments
import Doctors from "../pages/doctors/Doctor"; 
import Gallery from "../pages/Gallery/Gallery"; // Correct import for Gallery



const Blog = () => <div>Blog Page</div>;

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/departments" element={<Departments />} />
      <Route path="/doctors" element={<Doctors />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/book-appointment" element={<BookAppointment />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/doctor/:id" element={<Doctors />} /> {/* Dynamic route for Doctor */}
      <Route path="*" element={<div>404 Not Found</div>} /> {/* Fallback route for unmatched paths */}
      <Route path = '/gallery' element = {<Gallery />} /> {/* Correct import for Gallery */}
    </Routes>
  );
};

export default AppRoutes;
