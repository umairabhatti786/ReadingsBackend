const mongoose = require('mongoose');

const BooksSchema = new mongoose.Schema({
  Id: {
    type: Number,
  },
  Book_Id: {
    type: Number,
  },
  BOOK_TITLE: {
    type: String,
  },
  authorName: {
    type: String,
  },
  PAK_PRICE: {
    type: Number,
  },
  Discount: {
    type: Number,
  },
  QUANTITY: {
    type: Number,
  },
  currency: {
    type: String,
  },
  PRICE: {
    type: Number,
  },
  BOOK_DATE: {
    type: Date,
  },
  PUBLISHER: {
    type: String,
  },
  Level1Name: {
    type: String,
  },
  CATE_DESCRIPTION: {
    type: String,
  },
  publisherName: {
    type: String,
  },
  BOOK_ISBN: {
    type: String,
  },
  NO_OF_PAGES: {
    type: Number,
  },
  shipping_weight: {
    type: Number,
    default: null, // Defaults to null if not provided
  },
  Dimensions: {
    type: String,
    default: null, // Defaults to null if not provided
  },
  BOOK_DESCRIPTION: {
    type: String,
  },
  Author_Description: {
    type: String,
  },
  slug: {
    type: String,
  },
  tag_description: {
    type: String,
  },
  BOOK_CATEGORY: {
    type: String,
  },
},);

const BookModel = mongoose.model('Books', BooksSchema,"Books");
module.exports = BookModel;
