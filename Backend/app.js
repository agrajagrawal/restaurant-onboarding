const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const restaurantRoutes = require("./Routes/restaurant");
const cors = require('cors');
const configs = require('./utils/config')

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use("/restaurant", restaurantRoutes);

// Incase someone hit any endpoint that doesnt exist
app.use("/*", (req, res) => {
  return res.status(404).json({
    error: "Page Doesnt Exist!",
  });
});

// Database Connectivity
mongoose
  .connect(configs.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to the database");
    // Start the server
    app.listen(configs.PORT, () => console.log(`Server started on port ${configs.PORT}`));
  })
  .catch((err) => console.log(err));
