const mongoose = require("mongoose");

const menuSchema = new mongoose.Schema({
  name: String,
  category: String,
  price: Number,
  image: String,
  desc: String
});

module.exports = mongoose.model("Menu", menuSchema);