const mongoose = require("mongoose");
const AddressesSchema = mongoose.Schema({
  address: {
    type: String,
  },
  city: {
    type: String,
  },
  state: {
    type: String,
  },
  country: {
    type: String,
  },
  zip_code: {
    type: String,
  },
  phone: {
    type: String,
  },
  lat: {
    type: Number,
  },
  lng: {
    type: Number,
  },
  user_id: {
    type: String,
    // ref: 'Users', // Assuming your User model is named 'User'
    required: false, // Make it required if every payment method should be linked to a user
  },
  id: {
    type: Number,
    default: () => Math.floor(Math.random() * 1000000), // Generates a random number up to 999999
    require: false,

  },
});
const AddressesModel = mongoose.model("Addresses", AddressesSchema, "Addresses");
module.exports = {
  AddressesModel,
};
