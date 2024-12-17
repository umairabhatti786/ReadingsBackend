const mongoose = require("mongoose");

const BookRequestSchema = new mongoose.Schema({
  book_title: {
    type: String,
  },
  author_name: {
    type: String,
  },
  your_name: {
    type: String,
  },
  email: {
    type: String,
  },
  phone: {
    type: String,
  },
  notes: {
    type: String,
  },
});
const BookRequestModel = mongoose.model('BookRequests', BookRequestSchema,"BookRequests");
module.exports = BookRequestModel;
