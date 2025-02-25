const express = require("express");
const driversRoutes = require("./src/drivers/routes"); // ✅ Updated path
const app = express();
const port = 5001;

app.use(express.json());

const cors = require("cors");
app.use(cors({ origin: '*' }));

app.get("/", (req, res) => {
    res.send("Hello Formula 1 Tracker");
});

// API Route for Drivers
app.use("/api/v1/drivers", driversRoutes);  // ✅ Updated route

app.listen(port, () => console.log(`Server running on port ${port}`));
