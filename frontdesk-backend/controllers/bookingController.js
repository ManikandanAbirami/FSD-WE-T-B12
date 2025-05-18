const Booking = require("../models/Booking");
const { sendBookingEmail } = require("../utils/mailService");

exports.createBooking = async (req, res) => {
  try {
    const { visitorName, visitorEmail, visitorPhone, service } = req.body;
    const booking = await Booking.create({
      visitorName,
      visitorEmail,
      visitorPhone,
      service,
      bookedBy: req.user.id,
    });
    await sendBookingEmail(booking);
    res.status(201).json({ message: "Booking created successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error creating booking" });
  }
};

exports.getAllBookings = async (req, res) => {
  try {
    const bookings = await Booking.find().populate("bookedBy", "name");
    res.status(200).json(bookings);
  } catch (error) {
    res.status(500).json({ message: "Error fetching bookings" });
  }
};
