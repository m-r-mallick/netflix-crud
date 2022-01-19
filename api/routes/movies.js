const router = require("express").Router();
const Movie = require("../models/Movie");
const verify = require("../verifyToken");

router.use(verify);

//create
router.post("/", async (req, res) => {
   if (req.user.isAdmin) {
      const newMovie = new Movie(req.body);
      try {
         const savedMovie = await newMovie.save();
         return res.status(201).json(savedMovie);
      } catch (error) {
         return res.status(500).json(error);
      }
   } else {
      return res
         .status(401)
         .json({ error: "Only admins can perform create operations!" });
   }
});

//update
router.put("/:id", async (req, res) => {
   if (req.user.isAdmin) {
      try {
         const updatedMovie = await Movie.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true }
         );
         return res.status(200).json(updatedMovie);
      } catch (error) {
         return res.status(500).json(error);
      }
   } else {
      return res.status(401).json({ error: "Only admins can update movies!" });
   }
});

//delete
router.delete("/:id", async (req, res) => {
   if (req.user.isAdmin) {
      try {
         await Movie.findByIdAndDelete(req.params.id);
         return res.status(200).json({ deleted: "true" });
      } catch (error) {
         return res.status(500).json(error);
      }
   } else {
      return res.status(401).json({ error: "Only admins can delete movies!" });
   }
});

//get
router.get("/find/:id", async (req, res) => {
   try {
      const movie = await Movie.findById(req.params.id);
      return res.status(200).json(movie);
   } catch (error) {
      return res.status(500).json(error);
   }
});

//get random
router.get("/random", async (req, res) => {
   const type = req.query.type;
   let movie;
   try {
      if (type === "series") {
         movie = await Movie.aggregate([
            { $match: { isSeries: true } },
            { $sample: { size: 1 } },
         ]);
         return res.status(200).json(movie);
      } else {
         movie = await Movie.aggregate([
            { $match: { isSeries: false } },
            { $sample: { size: 1 } },
         ]);
         return res.status(200).json(movie);
      }
   } catch (error) {
      return res.status(500).json(error);
   }
});

//get all
router.get("/", async (req, res) => {
   if (req.user.isAdmin) {
      try {
         const allMovies = await Movie.find();
         return res.status(200).json(allMovies);
      } catch (error) {
         return res.status(500).json(error);
      }
   } else {
      return req.status(401).json({ error: "Permission denied!" });
   }
});

module.exports = router;
