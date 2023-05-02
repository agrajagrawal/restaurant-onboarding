// utils/validation.js

const validateRestaurant = (body) => {
  console.log(body);
  const {
    restaurantName,
    contactName,
    pincode,
    location,
    website,
    phoneNumber,
    avgDailyTransactions,
  } = body;
  if (
    !restaurantName ||
    !contactName ||
    !pincode ||
    !location ||
    !website ||
    !phoneNumber ||
    !avgDailyTransactions
  ) {
    return {
      error: "Missing required fields",
    };
  }
  if (
    typeof restaurantName !== "string" ||
    typeof contactName !== "string" ||
    typeof location !== "string" ||
    typeof website !== "string" ||
    typeof phoneNumber !== "string" ||
    typeof pincode !== "number" ||
    typeof avgDailyTransactions !== "number"
  ) {
    return {
      error: "Invalid field format",
    };
  }
  if (!phoneNumber.match(/^\d{10}$/)) {
    return {
      error: "Invalid phone number format",
    };
  }
  return null;
};

module.exports = { validateRestaurant };
