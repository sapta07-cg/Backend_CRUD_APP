const { json } = require("express");
const express = require("express");
const app = express();

const userRouter = require("./routes/userRouter");

const { connectMongoDb } = require("./connection");

const { checkMiddleware } = require("./middlewares/userMiddleware");

//Conection
connectMongoDb("mongodb://localhost:27017/cgemployee").then(() =>
  console.log("MongoDB connected")
);

//MIDDLEWARE-plugin
app.use(express.urlencoded({ extended: false }));
app.use(express.json()); // this middleware used to send data in post method as json

app.use(checkMiddleware());

// Route defines

app.use("/users", userRouter);

//run server

app.listen(8000, () => {
  console.log("Server started");
});
