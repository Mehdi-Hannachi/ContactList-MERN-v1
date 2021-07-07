const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  fullName: { type: String, required: true },

  tel: { type: Number, required: true },

  email: { type: String, required: true },

  adress: { type: String },
});

module.exports = User = mongoose.model("users", userSchema);
