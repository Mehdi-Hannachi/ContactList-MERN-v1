const User = require("../models/User");

exports.addUser = async (req, res) => {
  console.log(req.body);

  const newUser = await new User({ ...req.body });
  const email = req.body.email;
  const user = await User.findOne({ email });
  console.log(newUser);
  console.log("1", user);
  try {
    if (user) {
      return res.status(400).json({ msg: "User already exist" });
    }
    newUser.save();
    res.status(202).json({ msg: "Register success" });
  } catch (error) {
    console.error("User register failed", error);
    res.status(402).json({ msg: "User register failed" });
  }
};

exports.editUser = async (req, res) => {
  let { _id } = req.params;
  try {
    await User.findByIdAndUpdate({ _id }, { $set: { ...req.body } });
    res.status(203).json({ msg: "User updated successfully" });
  } catch (error) {
    console.log("User update failed", error);
    res.status(403).json({ msg: "User update failed" });
  }
};

exports.getUsers = async (req, res) => {
  const users = await User.find();
  try {
    res.status(200).json({ users });
  } catch (error) {
    console.log("get users failed", error);
    res.status(403).json({ msg: "get users failed" });
  }
};

exports.getUser = (req, res) => {
  const { _id } = req.params;
  // const user = await User.findById({ _id });

  User.find({ _id })
    .then((user) => res.status(200).json(user[0]))
    .catch((err) => res.json(err));

  // try {
  //   const user = await User.find({ _id });

  //   console.log("my user", user);

  //   res.status(204).json(user);
  // } catch (error) {
  //   res.status(404).json({ msg: "get user failed" });
  // }
};

exports.deleteUser = async (req, res) => {
  const { _id } = req.params;

  try {
    await User.findByIdAndDelete({ _id });
    res.status(200).json({ msg: "User deleted with success" });
  } catch (error) {
    console.error("User delete failed", error);
    res.status(402).json({ msg: "User delete failed" });
  }
};
