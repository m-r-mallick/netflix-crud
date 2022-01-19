const router = require("express").Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");
require("dotenv").config();

// register
router.post("/register", async (req, res) => {
   const { username, password, email } = req.body;
   try {
      const newUser = new User({
         username,
         password: CryptoJS.AES.encrypt(
            password,
            process.env.SECRET_KEY
         ).toString(),
         email,
      });
      const user = await newUser.save();

      res.status(201).json(user);
   } catch (err) {
      res.status(500).json({ error: err });
   }
});

// login
router.post("/login", async (req, res) => {
   const { email } = req.body;
   try {
      const user = await User.findOne({ email: email });
      if (!user) return res.status(401).json({ error: "Bad Credentials 1!" });

      const decryptedPassword = CryptoJS.AES.decrypt(
         user.password,
         process.env.SECRET_KEY
      ).toString(CryptoJS.enc.Utf8);

      if (decryptedPassword !== req.body.password) {
         return res.status(401).json({ error: "Bad Credentials 2!" });
      }
      const accessToken = jwt.sign(
         { id: user._id, isAdmin: user.isAdmin },
         process.env.JWT_SECRET_KEY,
         { expiresIn: "7d" }
      );
      const { password, ...userInfo } = user._doc;
      res.status(200).json({
         user: userInfo,
         accessToken,
         authenticated: "true",
      });
   } catch (error) {
      return res.status(401).json(error);
   }
});

module.exports = router;
