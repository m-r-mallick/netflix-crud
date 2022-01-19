const router = require("express").Router();
const List = require("../models/List");
const verify = require("../verifyToken");

router.use(verify);

//create
router.post("/", async (req, res) => {
   if (req.user.isAdmin) {
      const list = new List(req.body);
      try {
         const savedList = await list.save();
         return res.status(201).json(savedList);
      } catch (error) {
         return res.status(500).json(error);
      }
   } else {
      return res.status(401).json({ error: "Only admins can add lists!" });
   }
});

//update
router.put("/:id", async (req, res) => {
   if (req.user.isAdmin) {
      try {
         const updatedList = await List.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true }
         );
         return res.status(200).json(updatedList);
      } catch (error) {
         return res.status(500).json(error);
      }
   } else {
      return res.status(401).json({ error: "Only admins can update lists!" });
   }
});

//delete
router.delete("/:id", async (req, res) => {
   if (req.user.isAdmin) {
      try {
         await List.findByIdAndDelete(req.params.id);
         return res.status(200).json({ deleted: "true" });
      } catch (error) {
         return res.status(500).json(error);
      }
   } else {
      return res.status(401).json({ error: "Only admins can delete lists!" });
   }
});

//get
router.get("/", async (req, res) => {
   const typeQuery = req.query.type;
   const genreQuery = req.query.genre;
   let list = [];
   try {
      if (typeQuery) {
         if (genreQuery) {
            list = await List.aggregate([
               { $sample: { size: 10 } },
               { $match: { type: typeQuery, genre: genreQuery } },
            ]);
         } else {
            list = await List.aggregate([
               { $sample: { size: 10 } },
               { $match: { type: typeQuery } },
            ]);
         }
      } else {
         list = await List.aggregate([{ $sample: { size: 10 } }]);
      }
      return res.status(200).json(list);
   } catch (error) {
      return res.status(500).json(error);
   }
});

module.exports = router;
