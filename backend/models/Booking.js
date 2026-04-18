const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  userId: mongoose.Schema.Types.ObjectId,
  name: String,
  email: String,
  date: String,
  time: String,
  table: String,
  price: Number,
  status: { type: String, default: "Pending" }
});

module.exports = mongoose.model("Booking", bookingSchema);