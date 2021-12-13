const express = require("express");
const app = express();
const cors = require("cors");
require("./db/db");
app.use(express.json());
app.use(cors());


const moviesRoute = require("./routers/Route/moviesRoute");
const sinUpRoute = require("./routers/Route/sinUpRoute");
const logInRoute = require("./routers/Route/logInRoute");
app.use(logInRoute);
app.use(sinUpRoute);
app.use(moviesRoute);





const Port = 5000;
app.listen(Port,()=>{
    console.log("server is on");
});
