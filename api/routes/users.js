const router = require("express").Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");
const verify = require("../verifyToken");

router.use(verify);

//update
router.put("/:id", async (req, res) => {
   if (req.user.id === req.params.id || req.user.isAdmin) {
      if (req.body.password) {
         req.body.password = CryptoJS.AES.encrypt(
            req.body.password,
            process.env.SECRET_KEY
         ).toString();
      }
      try {
         const updatedUser = await User.findByIdAndUpdate(
            req.params.id,
            {
               $set: req.body,
            },
            { new: true }
         );
         return res.status(200).json(updatedUser);
      } catch (error) {
         return res.status(500).json(error);
      }
   } else {
      return res
         .status(403)
         .json({ error: "You can update only your account!" });
   }
});

//delete
router.delete("/:id", async (req, res) => {
   if (req.params.id === req.user.id || req.user.isAdmin) {
      try {
         await User.findByIdAndDelete(req.params.id);
         return res.status(200).json({ deleted: "true" });
      } catch (error) {
         return res.status(500).json(error);
      }
   } else {
      return res
         .status(403)
         .json({ error: "You can delete only your account!" });
   }
});

//get
router.get("/find/:id", async (req, res) => {
   try {
      const user = await User.findById(req.params.id);
      const { password, ...restInfo } = user._doc;
      return res.status(200).json({ user: restInfo });
   } catch (error) {
      return res.status(500).json(error);
   }
});

//get all
router.get("/", async (req, res) => {
   const query = req.query.new;
   if (req.user.isAdmin) {
      try {
         const allUsers = query
            ? await User.find().sort({ _id: -1 }).limit(10)
            : await User.find();
         const formattedUsersList = allUsers.map((user) => {
            const { password, ...restInfo } = user._doc;
            return restInfo;
         });
         return res.status(200).json({ users: formattedUsersList });
      } catch (error) {
         return res.status(403).json({ error: "Permission denied!" });
      }
   }
});

router.get("/stats/", async (req, res) => {
   const today = new Date();
   const lastYr = today.setFullYear(today.setFullYear() - 1);

   const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
   ];

   try {
      const data = await User.aggregate([
         {
            $project: { month: { $month: "$createdAt" } },
         },
         {
            $group: {
               _id: "$month",
               total: { $sum: 1 },
            },
         },
      ]);
      console.log(data);
      const formattedData = data.map((obj) => {
         const resObj = { month: months[obj._id - 1], signUps: obj.total };
         return resObj;
      });
      return res.status(200).json({ stats: formattedData });
   } catch (error) {
      return res.status(500).json(error);
   }
});

module.exports = router;
