const mongoose = require("mongoose");

const itemSchema = mongoose.Schema({
  id: {
    type: Number,
  },
  name: {
    type: String,
  },
  createdAt: {
    type: Date,
  },
  createdBy: {
    type: String,
  },
});

module.exports = mongoose.model("item", itemSchema);
