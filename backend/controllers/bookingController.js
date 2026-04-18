const Booking = require("../models/Booking");

exports.createBooking = async (req, res) => {
  const booking = await Booking.create(req.body);
  res.json(booking);
};

exports.getUserBookings = async (req, res) => {
  const bookings = await Booking.find({ userId: req.params.userId });
  res.json(bookings);
};

exports.getAllBookings = async (req, res) => {
  const bookings = await Booking.find();
  res.json(bookings);
};