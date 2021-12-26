const express = require("express");
const { adminAuth } = require("../Controler/admain");
const moviesRoute = express.Router();

const { getmovies, postmovies} = require("../Controler/movies");
const { authentication } = require("../midlleWare/authentication");

moviesRoute.get("/movies", authentication, getmovies);
moviesRoute.post("/movies", authentication, adminAuth ,  postmovies);








module.exports = moviesRoute;