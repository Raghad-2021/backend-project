const Mongoose = require("mongoose");
const userModel = new Mongoose.Schema({
  name: { type: String },
  email: { type: String },
  pass: { type: String },

});
module.exports = Mongoose.model("userModel", userModel);