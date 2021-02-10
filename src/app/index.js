const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

mongoose
  .connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connection to Database successfull"))
  .catch((err) => console.error("Could not connect to Database", err));

const subscribersRouter = require("../routes/subscribers.route");
app.use("/subscribers", subscribersRouter);

module.exports = app;
