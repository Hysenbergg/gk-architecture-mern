const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();

app.use(express.json());
app.use(cors());
dotenv.config();

app.use(bodyParser.json());

app.post('/api/send-email', async (req, res) => {
  const { email, message } = req.body;

  try {
    var transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: "huseyinsaidzeyrek@gmail.com",
        pass: process.env.NODE_PASS
      }
    })
    await transporter.sendMail({
      to: 'huseyinsaidzeyrek@gmail.com',
      subject: `Web Sayfasından Gelen Mesaj`,
      text: `Mesajı gönderen kişinin mail adresi: ${email}, \nMesaj:\n${message}`  
    })

    res.status(200).json("Mesajınız gönderildi");

  } catch (error) {
    res.status(500).json({ error })
  }
})

const projectRoute = require("./routes/projects.js");
const authRoute = require("./routes/users.js");

const connectToDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB");
  } catch (error) {
    throw error;
  }
};

app.use("/api/projects", projectRoute);
app.use("/api/auth", authRoute);

app.listen(5000, () => {
  connectToDB();

  console.log(`Example app listening on port ${5000}`);
});