const express = require("express");
const app = express()
const dotenv = require("dotenv")
const mongoose = require("mongoose")

dotenv.config();

mongoose.connect(process.env.MONGO_URL)
    .then(console.log("Connected to MongoDB"))
    .catch(error => console.log(error));

app.listen("1000", () => {
    console.log("Backend is running")
});