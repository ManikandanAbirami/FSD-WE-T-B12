const express = require("express");
const router = express.Router();
const {
  createBooking,
  getAllBookings,
} = require("../controllers/bookingController");
const { verifyToken } = require("../middleware/authMiddleware");
const { allowRoles } = require("../middleware/roleMiddleware");

router.post("/create", verifyToken, allowRoles("receptionist"), createBooking);
router.get("/all", verifyToken, allowRoles("admin", "manager"), getAllBookings);

module.exports = router;
