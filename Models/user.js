const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, minlength: 3, maxlength: 20 },
    email: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 100,
      unique: true,
    },
    password: { type: String, required: true, minlength: 3, maxlength: 200 },
  },
  {
    timestamps: true,
  }
);

const userModal = mongoose.model("User", userSchema);

module.exports = userModal;
