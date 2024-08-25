require("dotenv").config();
const movieRoutes = require("./routes/movies/movie.js");

const express = require("express");
const db = require("./db/index.js");

const app = new express();
const port = process.env.PORT || 8086;
app.use(express.json());
app.use("/movies", movieRoutes);


db();
app.listen(port, () => {
  console.log(`Express app listening at http://localhost:${port}`); //telling express class to listen the port no "here port,() is a callback function given to the arrow function"
});
