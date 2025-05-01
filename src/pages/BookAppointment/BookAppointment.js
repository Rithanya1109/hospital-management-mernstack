import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./BookAppointment.css";
import { Link } from "react-router-dom";

const BookAppointment = () => {
  const navigate = useNavigate();
  const [appointments, setAppointments] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [appointmentDetails, setAppointmentDetails] = useState(null);
  const [showAppointment, setShowAppointment] = useState(false);

  // Check login status and load appointments on page load
  useEffect(() => {
    const user = localStorage.getItem("loggedInUser");
    setIsLoggedIn(!!user); // TRUE if user exists
    const storedAppointments = localStorage.getItem("appointments");
    if (storedAppointments) {
      setAppointments(JSON.parse(storedAppointments));
    }
    // If an appointment is already booked for the logged-in user, load it
    const bookedAppointment = JSON.parse(localStorage.getItem("bookedAppointment"));
    if (bookedAppointment && bookedAppointment.user === user) {
      setAppointmentDetails(bookedAppointment);
      setShowAppointment(true); // Show the appointment details automatically
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isLoggedIn) {
      alert("You must be logged in to book an appointment.");
      navigate("/sign-in");
      return;
    }

    const user = localStorage.getItem("loggedInUser");
    const fullName = e.target.fullName.value.trim();
    const age = e.target.age.value;
    const gender = e.target.gender.value;
    const contactNumber = e.target.contactNumber.value.trim();
    const department = e.target.department.value;
    const doctor = e.target.doctor.value;
    const appointmentDate = e.target.appointmentDate.value;
    const timeSlot = e.target.timeSlot.value;

    const appointmentExists = appointments.some(
      (appointment) =>
        appointment.department === department &&
        appointment.appointmentDate === appointmentDate &&
        appointment.timeSlot === timeSlot
    );

    if (appointmentExists) {
      alert(`The time slot ${timeSlot} on ${appointmentDate} for the ${department} department is already booked.`);
      return;
    }

    if (
      fullName && age && gender && contactNumber &&
      department && doctor && appointmentDate && timeSlot
    ) {
      const newAppointment = {
        fullName,
        age,
        gender,
        contactNumber,
        department,
        doctor,
        appointmentDate,
        timeSlot,
        user // Store the logged-in user with the appointment
      };

      const updatedAppointments = [...appointments, newAppointment];
      setAppointments(updatedAppointments);
      localStorage.setItem("appointments", JSON.stringify(updatedAppointments));

      // Store the newly booked appointment for the current user in localStorage
      localStorage.setItem("bookedAppointment", JSON.stringify(newAppointment));

      setAppointmentDetails(newAppointment);
      setShowAppointment(true); // Show the appointment details after booking

      alert(`Appointment booked with ${doctor} on ${appointmentDate} at ${timeSlot}`);
    }
  };

  // Handle "Book Another Appointment"
  const handleBookAnotherAppointment = () => {
    setShowAppointment(false); // Hide the appointment details
    setAppointmentDetails(null); // Clear the appointment details
  };

  return (
    <div>
      <div className="container">
        <div className="appointment-box">
          <h2>Book an Appointment</h2>

          {!isLoggedIn ? (
            <div style={{ color: "red", margin: "20px 0", textAlign: "center" }}>
              Please <Link to="/sign-in">Sign In</Link> to book an appointment.
            </div>
          ) : appointmentDetails && showAppointment ? (
            // Show appointment details after booking
            <div className="appointment-details">
              <h3>Your Appointment Details:</h3>
              <p><strong>Full Name:</strong> {appointmentDetails.fullName}</p>
              <p><strong>Age:</strong> {appointmentDetails.age}</p>
              <p><strong>Gender:</strong> {appointmentDetails.gender}</p>
              <p><strong>Contact Number:</strong> {appointmentDetails.contactNumber}</p>
              <p><strong>Department:</strong> {appointmentDetails.department}</p>
              <p><strong>Doctor:</strong> {appointmentDetails.doctor}</p>
              <p><strong>Appointment Date:</strong> {appointmentDetails.appointmentDate}</p>
              <p><strong>Time Slot:</strong> {appointmentDetails.timeSlot}</p>
              <button onClick={handleBookAnotherAppointment}>Book Another Appointment</button>
            </div>
          ) : (
            // Display the booking form if no appointment is booked yet
            <form onSubmit={handleSubmit}>
              <input type="text" name="fullName" placeholder="Full Name" required />
              <input type="number" name="age" placeholder="Age" min="0" required />
              <select name="gender" required defaultValue="">
                <option value="" disabled>Select Gender</option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
              <input type="tel" name="contactNumber" placeholder="Contact Number" required />
              <select name="department" required defaultValue="">
                <option value="" disabled>Select Department</option>
                <option>Cardiology</option>
                <option>Neurology</option>
                <option>Pediatrics</option>
                <option>Orthopedics</option>
                <option>Gynecology</option>
              </select>
              <select name="doctor" required defaultValue="">
                <option value="" disabled>Select Doctor</option>
                <option>Dr. John Doe (Cardiology)</option>
                <option>Dr. Jane Smith (Neurology)</option>
                <option>Dr. Emily Johnson (Pediatrics)</option>
                <option>Dr. Michael Brown (Orthopedics)</option>
                <option>Dr. Sarah Davis (Gynecology)</option>
              </select>
              <input type="date" name="appointmentDate" required />
              <select name="timeSlot" required defaultValue="">
                <option value="" disabled>Select Time Slot</option>
                <option>09:00 AM - 10:00 AM</option>
                <option>10:00 AM - 11:00 AM</option>
                <option>11:00 AM - 12:00 PM</option>
                <option>02:00 PM - 03:00 PM</option>
                <option>03:00 PM - 04:00 PM</option>
              </select>
              <button type="submit">Book Appointment</button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookAppointment;
