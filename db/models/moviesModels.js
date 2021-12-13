const mongoose = require("mongoose");

const moviesModels = new mongoose.Schema({
  name: { type: String },
  img: { type: String },
  description: { type: String },
  // user: { type: mongoose.Schema.Types.ObjectId, ref: "userModel" },

});

module.exports = mongoose.model("moviesModels", moviesModels);