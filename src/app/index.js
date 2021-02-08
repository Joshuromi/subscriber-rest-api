const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connection to Database successfull"));

const subscribersRouter = require("../routes/subscribers.route");
app.use("/subscribers", subscribersRouter);

module.exports = app;
