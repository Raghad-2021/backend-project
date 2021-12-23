const express = require("express");
const moviesRoute = express.Router();

const { getmovies, postmovies} = require("../Controler/movies");
const { authentication } = require("../midlleWare/authentication");

moviesRoute.get("/movies", authentication, getmovies);
moviesRoute.post("/movies", authentication, postmovies);







module.exports = moviesRoute;