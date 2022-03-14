const { json } = require("express");
const express = require("express");
const { connectDB } = require("./db/connect");
const authRouter = require("./routes/auth");
const userRouter = require("./routes/users");
const movieRouter = require("./routes/movies");
const listRouter = require("./routes/lists");
const app = express();
require("dotenv").config();

app.use(json({ limit: "50mb" }));

app.use("/api/auth", authRouter);
app.use("/api/users", userRouter);
app.use("/api/movies", movieRouter);
app.use("/api/lists", listRouter);

const PORT = process.env.PORT || 8800;

const start = async () => {
   try {
      connectDB(process.env.MONGODB_URI);
      app.listen(PORT, () => {
         console.log("Server listening on Port", PORT);
      });
   } catch (error) {
      console.log(error);
   }
};

start();
