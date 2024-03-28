const mongoose = require("mongoose");
require("dotenv").config();

const connection = mongoose.connect(process.env.MONGO_URL);
console.log("connection to mongoDB succesfull");

module.exports = connection;
