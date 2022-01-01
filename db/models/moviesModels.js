const mongoose = require("mongoose");

const moviesModels = new mongoose.Schema({
  name: { type: String },
  img: { type: String },
  description: { type: String },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "userModel" },
    comment:{type:Array},

});

module.exports = mongoose.model("moviesModels", moviesModels);