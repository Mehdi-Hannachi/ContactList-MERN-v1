const express = require("express");
const { registerRules, validator } = require("../middlewares/validator");
const {
  addUser,
  editUser,
  getUsers,
  getUser,
  deleteUser,
} = require("../controllers/user.controller");


const Router = express.Router();

Router.post("/register", registerRules(), validator, addUser);
Router.put("/:_id", editUser);
Router.get("/users", getUsers);
Router.get("/:_id", getUser);
Router.delete("/:_id", deleteUser);

module.exports = Router;
