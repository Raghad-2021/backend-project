const express = require("express");
const admainRoute = express.Router();

const { Admin } = require("../Controler/admain");

admainRoute.post("/admain", Admin);

module.exports = admainRoute;