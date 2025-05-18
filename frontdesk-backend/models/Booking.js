const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  visitorName: String,
  visitorEmail: String,
  visitorPhone: String,
  service: String,
  bookedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Booking", bookingSchema);
