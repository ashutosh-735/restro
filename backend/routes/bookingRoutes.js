const router = require("express").Router();
const { createBooking, getUserBookings, getAllBookings } = require("../controllers/bookingController");

router.post("/", createBooking);
router.get("/user/:userId", getUserBookings);
router.get("/", getAllBookings);

module.exports = router;