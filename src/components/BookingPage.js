import React, { useState } from 'react';
import AppointmentForm from './AppointmentForm';

const BookingPage = () => {
  const [bookingSuccess, setBookingSuccess] = useState(false);

  const handleBookingSubmit = (appointment) => {
    // Here, you can add your logic for saving the appointment.
    setBookingSuccess(true); // Show booking success after the appointment is added.
  };

  return (
    <div className="booking-page">
      {bookingSuccess ? (
        <div className="success-message">
          <h2>Booking Success!</h2>
          <p>Your appointment has been successfully booked. We look forward to seeing you!</p>
        </div>
      ) : (
        <>
          <h2>Book Your Appointment</h2>
          <AppointmentForm addAppointment={handleBookingSubmit} />
        </>
      )}
    </div>
  );
};

export default BookingPage;
