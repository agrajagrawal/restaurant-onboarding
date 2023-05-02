const mongoose = require("mongoose");

const restaurantSchema = new mongoose.Schema({
  restaurantName: {
    type: String,
    required: true,
  },
  contactName: {
    type: String,
    required: true,
  },
  pincode: {
    type: Number,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  website: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: Number,
    required: true,
    unique: true,
  },
  avgDailyTransactions: {
    type: Number,
    required: true,
  },
});

const Restaurant = mongoose.model("Restaurant", restaurantSchema);

module.exports = Restaurant;
