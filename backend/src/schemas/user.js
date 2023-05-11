const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  id: {
    type: Number,
  },
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  createdAt: {
    type: Date,
  },
  createdBy: {
    type: String,
  },
});

module.exports = mongoose.model("user", userSchema);
