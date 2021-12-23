const userModel = require("../../db/models/userModel");
const bcrypt = require("bcrypt");
const Admin = async (req, res) => {
  let { name, email, pass } = req.body;
  console.log({ name, email, pass });
  try {
    pass = await bcrypt.hash(pass, 10);
    const newUser = new userModel({
      name,
      email,
      pass,
    });
    const result = await newUser.save();
    res.status(201).json(result);
  } catch (error) {
    res.send(error);
  }
};
module.exports = { Admin };
 