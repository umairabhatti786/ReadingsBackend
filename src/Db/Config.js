const express = require("express");
const mongoose = require("mongoose");
let url = "mongodb://localhost:27017/Readings";
const jwt = require("jsonwebtoken");
const jwtKey = "fit-cloth";
const app = express();

const dbConnection = () => {
  mongoose.connect(url);
  app.listen(9000);
};
module.exports = {
  app,
  express,
  jwt,
  dbConnection,
  mongoose,
  jwtKey
};
