const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// existing routes
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/menu", require("./routes/menuRoutes"));
app.use("/api/bookings", require("./routes/bookingRoutes"));

// ✅ ADD THIS LINE
app.use("/api/payment", require("./routes/paymentRoutes"));

app.listen(5000, () => {
    console.log("Server running on port 5000");
});