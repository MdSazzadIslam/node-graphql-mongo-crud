const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },

  isbn: {
    type: String,
    required: true,
  },

  publishYear: {
    type: String,
    required: true,
  },

  price: {
    type: Number,
    default: 0,
    required: true,
  },

  authorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Author",
  },

  updateDate: {
    type: Date,
  },
  createDate: {
    type: Date,
    default: Date.now(),
  },
});

const Book = new mongoose.Model("Book", bookSchema);
module.exports = Book;
