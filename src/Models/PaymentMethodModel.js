const mongoose = require("mongoose");
const PaymentMethodSchema = new mongoose.Schema(
  {
    card_number: {
      type: String,
      require: false,
    },
    card_holder_name: {
      type: String,
      require: false,
    },
    ending_date: {
      type: String,
      require: false,
    },
    cvc_number: {
      type: String,
      require: false,
      unique: false,
    },
    address: {
      type: String,
      require: false,
    },
    city: {
      type: String,
      require: false,
    },
    state: {
      type: String,
      require: false,
    },
    country: {
      type: String,
      require: false,
    },
    zipCode: {
      type: String,
      require: false,
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
  },
  { timestamps: true }
);

const PaymentMethodModel = mongoose.model("PaymentMethods", PaymentMethodSchema, "PaymentMethods");

module.exports = {
    PaymentMethodModel,
};
