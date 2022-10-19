const mongoose = require("mongoose");

const { Schema } = mongoose;

const toolsSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
  },
  picture: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
    min: 0.1,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

const Tools = mongoose.model("Tools", toolsSchema);

module.exports = Tools;
