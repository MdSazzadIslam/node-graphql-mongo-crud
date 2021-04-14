const mongoose = require("mongoose");

const authorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },

  phoneNo: {
    type: String,
    required: true,
    unique: true,
  },

  updateDate: {
    type: Date,
  },

  createDate: {
    type: Date,
    default: Date.now(),
  },
});

const Author = mongoose.model("Author", authorSchema);
module.exports = Author;
