const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors"); 

const app = express();

app.use(express.json());
app.use(cors());
dotenv.config();

const projectRoute = require("./routes/projects.js");

const connectToDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB");
  } catch (error) {
    throw error;
  }
};

app.use("/api/projects", projectRoute);

app.listen(5000, () => {
  connectToDB();

  console.log(`Example app listening on port ${5000}`);
});