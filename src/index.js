const express = require("express");
const mongoose = require("mongoose");
const userRoutes = require("./routes/user")
require("dotenv").config();


const app = express();
const port = process.env.PORT || 9000;

// middlewares
app.use(express.json());    
app.use("/api",userRoutes);

// routes
app.get("/", (req, res) => {
  res.send("Welcome to my API");
});

// mongoDB connection.

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("conectado mongo atlas"))
  .catch((error) => console.log(error));

app.listen(9000, () => console.log("server on port", port));
