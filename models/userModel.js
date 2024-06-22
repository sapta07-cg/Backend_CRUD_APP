const { type } = require("express/lib/response");
const mongoose = require("mongoose");

//Schema

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      //requied:[true,'firstName must be required'] --> We can also set error msg
      // default: "None"
    },
    lastName: {
      type: String,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    gender: {
      type: String,
      required: true,
    },
    jobTitle: {
      type: String,
    },
    salary: {
      type: Number,
    },
    age: {
      type: Number,
    },
  },
  { timestamps: true }
);

//Model

const User = mongoose.model("user", userSchema);

module.exports = User;
