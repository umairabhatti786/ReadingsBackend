const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      require: true,
      unique: true,
      lowercase: true,
    },

    password: {
      type: String,
      require: true,
    },
    first_name: {
      type: String,
      require: false,
    },
    last_name: {
      type: String,
      require: false,
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
    phone: {
      type: String,
      require: false,
    },
    fcmToken: {
      type: String,
      require: false,
    },
    ssoToken: {
      type: String,
      require: false,
    },
    login_type: {
      type: String,
      require: false,
    },
    lat: {
      type: String,
      require: false,
    },
    lng: {
      type: String,
      require: false,
    },

  },
  { timestamps: true }
);

const UserModel = mongoose.model("Users", UserSchema);

module.exports = {
  UserModel,
};
