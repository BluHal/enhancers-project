const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const citySchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  lat: {
    type: String,
    required: true,
    trim: true,
  },
  lon: {
    type: String,
    required: true,
    trim: true,
  },
});

const City = mongoose.model("Cities", citySchema, "Cities");

module.exports = City;
