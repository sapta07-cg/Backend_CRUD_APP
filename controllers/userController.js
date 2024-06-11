const { status } = require("express/lib/response");
const User = require("../models/userModel");

const getAllUsers = async (req, res) => {
  const allUsers = await User.find({});
  return res.status(200).json({
    status: "success",
    results: allUsers.length,
    data: {
      allUsers,
    },
  });
};

const getSingleUser = async (req, res) => {
  const user = await User.findById(req.params.id);

  if (!user) {
    return res.status(404).json({
      status: "fail",
      message: "ID not found",
    });
  }
  return res.status(200).json({
    status: "success",
    data: {
      user,
    },
  });
};

const deleteUser = async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  return res.status(200).json({
    status: "success",
    message: `Deleted record ${req.params.id}`,
  });
};

const checkBody = (req, res, next) => {
  if (!req.body.email || !req.body.gender) {
    return res.status(400).json({
      status: "fail",
      message: "Missing mail or gender",
    });
  }
  next();
};

const createUser = async (req, res) => {
  const body = req.body;
  const result = await User.create({
    firstName: body.firstName,
    lastName: body.lastName,
    email: body.email,
    gender: body.gender,
    jobTitle: body.jobTitle,
  });

  return res.status(201).json({
    msg: "success",
    data: {
      user: result,
    },
  });
};

const updateUser = async (req, res) => {
  const user = await User.findByIdAndUpdate(req.params.id, {
    lastName: "Changed",
  });
  res.json({
    status: "success",
    msg: "updated",
    data: {
      user,
    },
  });
};

module.exports = {
  getAllUsers,
  getSingleUser,
  deleteUser,
  createUser,
  checkBody,
  updateUser,
};
