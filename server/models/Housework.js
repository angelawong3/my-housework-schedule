const mongoose = require("mongoose");

const { Schema } = mongoose;

const houseworkSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
  },
  frequency: {
    type: String,
    enum: ["daily", "weekly", "monthly", "yearly"],
    default: "weekly",
    required: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

const Housework = mongoose.model("Housework", houseworkSchema);

module.exports = Housework;
