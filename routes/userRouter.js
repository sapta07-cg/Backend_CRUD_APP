const express = require("express");

const router = express.Router();

const {
  getAllUsers,
  getSingleUser,
  deleteUser,
  checkBody,
  createUser,
  updateUser,
  getTopEmployees,
} = require("../controllers/userController");

router.route("/topemployees").get(getTopEmployees, getAllUsers);

router.route("/").get(getAllUsers).post(checkBody, createUser);

router.route("/:id").get(getSingleUser).delete(deleteUser).patch(updateUser);

module.exports = router;
