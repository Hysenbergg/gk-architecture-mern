const express = require("express");
const User = require("../models/Users.js");
const bcrypt = require("bcryptjs");

const router = express.Router();

router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (!user) {
      return res.status(404).send({ error: "User not found!" });
    }

    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );

    if (!validPassword) {
      res.status(403).json("Invalid password");
    } else {
      res.status(200).json(user);
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;