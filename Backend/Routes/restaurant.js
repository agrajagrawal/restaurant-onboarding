const express = require("express");
const restaurantController = require("../Controllers/restaurant");

const router = express.Router();

router.post("/", restaurantController.submitForm);

module.exports = router;
