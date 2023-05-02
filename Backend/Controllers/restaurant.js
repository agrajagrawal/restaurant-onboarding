const Restaurant = require("../Models/restaurant");
const { validateRestaurant } = require("../utils/validation");

exports.submitForm = async (req, res) => {
  const {
    restaurantName,
    contactName,
    pincode,
    location,
    website,
    phoneNumber,
    avgDailyTransactions,
  } = req.body;
  const validationError = validateRestaurant(req.body);
  if (validationError) {
    return res.status(400).json(validationError);
  }
  try {
    const existingRestaurant = await Restaurant.findOne({ phoneNumber });
    if(!existingRestaurant) {
        // Create new restaurant
        const restaurant = new Restaurant({
          restaurantName,
          contactName,
          pincode,
          location,
          website,
          phoneNumber,
          avgDailyTransactions,
        });
        await restaurant.save();
    }
    else {
      // Update existing restaurant
      existingRestaurant.restaurantName = restaurantName;
      existingRestaurant.contactName = contactName;
      existingRestaurant.pincode = pincode;
      existingRestaurant.location = location;
      existingRestaurant.website = website;
      existingRestaurant.avgDailyTransactions = avgDailyTransactions;
      await existingRestaurant.save();
    } 
    res.status(200).json({ message: "Form submitted successfully." });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
